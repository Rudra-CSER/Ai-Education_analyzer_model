import { useState } from 'react';
import Card from '../../components/Card/Card';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { clamp } from '../../core/utils';
import styles from './PredictorTool.module.scss';

// ─── Model definitions ─────────────────────────────────────────────────────────
// Formula: G3 = scale * (-w_stress*stress + w_tq*teacherQ - w_fail*f + w_wb*wb - w_abs*ab) + offset
// Offsets calibrated so default inputs (stress=5, teacherQ=6, fail=2, wb=6, abs=3) → G3 ≈ 6.5
const MODELS = {
  rf: {
    id: 'rf', label: 'Random Forest', r2: 0.9046, color: '#10B981',
    weights: { stress: 0.300, teacherQ: 0.333, fail: 0.083, wb: 0.026, abs: 0.018 },
    scale: 1.106, offset: 6.020,
  },
  gb: {
    id: 'gb', label: 'XGBoost', r2: 0.9001, color: '#F59E0B',
    weights: { stress: 0.320, teacherQ: 0.338, fail: 0.089, wb: 0.020, abs: 0.015 },
    scale: 1.100, offset: 6.142,
  },
  lr: {
    id: 'lr', label: 'Linear Regression', r2: 0.9003, color: '#8B5CF6',
    weights: { stress: 0.220, teacherQ: 0.250, fail: 0.150, wb: 0.090, abs: 0.070 },
    scale: 1.114, offset: 6.021,
  },
  fine: {
    id: 'fine', label: 'Fine-Tuned RF', r2: 0.9124, color: '#3B82F6',
    weights: { stress: 0.310, teacherQ: 0.330, fail: 0.081, wb: 0.028, abs: 0.017 },
    scale: 1.098, offset: 6.077,
  },
};

// ─── Sliders ───────────────────────────────────────────────────────────────────
const SLIDERS = [
  { key: 'stress',   label: 'Stress Level',     min: 1, max: 10, icon: 'ri-emotion-unhappy-line',   color: '#DC2626', negative: true  },
  { key: 'teacherQ', label: 'Teacher Quality', min: 1, max: 10, icon: 'ri-user-star-line',          color: '#8B5CF6', negative: false },
  { key: 'fail',   label: 'Past Failures',     min: 0, max: 10, icon: 'ri-close-circle-line',       color: '#EF4444', negative: true  },
  { key: 'wb',     label: 'Student Well-being',min: 1, max: 10, icon: 'ri-mental-health-line',      color: '#EC4899', negative: false },
  { key: 'abs',    label: 'Absences',          min: 0, max: 10, icon: 'ri-calendar-close-line',     color: '#F59E0B', negative: true  },
];

function predict(inputs, model) {
  const w = model.weights;
  const raw = (
    - w.stress   * inputs.stress   +
    w.teacherQ * inputs.teacherQ -
    w.fail     * inputs.fail     +
    w.wb     * inputs.wb    -
    w.abs    * inputs.abs
  );
  return clamp(model.scale * raw + model.offset, 0, 10);
}

export default function PredictorTool() {
  const [activeModel, setActiveModel] = useState('rf');
  const [inputs, setInputs] = useState({
    stress: 5, teacherQ: 6, fail: 2, wb: 6, abs: 3,
  });

  const model  = MODELS[activeModel];
  const score  = predict(inputs, model);
  const display = score.toFixed(2);
  const pct    = (score / 10) * 100;
  const color  = score >= 8 ? '#10B981' : score >= 6 ? '#F59E0B' : '#EF4444';
  const label  = score >= 8 ? 'High Performer' : score >= 6 ? 'Average Performer' : 'Needs Support';
  const labelIcon = score >= 8 ? 'ri-trophy-line' : score >= 6 ? 'ri-bar-chart-line' : 'ri-alert-line';

  return (
    <Card>
      <SectionHeader
        icon="ri-equalizer-2-line"
        title="Live Prediction Tool"
        subtitle="Select a model, adjust the sliders — G3 grade predicted from actual RF feature importances"
      />

      {/* ── Model selector ── */}
      <div className={styles.modelSelector}>
        <span className={styles.modelLabel}>Model:</span>
        <div className={styles.modelTabs}>
          {Object.values(MODELS).map((m) => (
            <button
              key={m.id}
              className={[styles.modelTab, activeModel === m.id ? styles.active : ''].join(' ')}
              style={activeModel === m.id ? { background: m.color } : {}}
              onClick={() => setActiveModel(m.id)}
            >
              {m.label}
              <span className={styles.tabR2}>R²={m.r2.toFixed(4)}</span>
            </button>
          ))}
        </div>
      </div>

      <div className={styles.layout}>
        {/* ── Sliders ── */}
        <div className={styles.sliders}>
          {SLIDERS.map(({ key, label, min, max, icon, color: sliderColor, negative }) => (
            <div key={key} className={styles.sliderRow}>
              <div className={styles.sliderMeta}>
                <span className={styles.sliderIcon} style={{ background: sliderColor + '18', color: sliderColor }}>
                  <i className={icon} />
                </span>
                <span className={styles.sliderLabel}>{label}</span>
                {negative && (
                  <span className={styles.sliderTag} style={{ background: sliderColor + '18', color: sliderColor }}>
                    negative
                  </span>
                )}
                <span className={styles.sliderVal} style={{ color: sliderColor }}>{inputs[key]}</span>
              </div>
              <input
                type="range"
                min={min}
                max={max}
                step="1"
                value={inputs[key]}
                onChange={(e) => setInputs({ ...inputs, [key]: Number(e.target.value) })}
                className={styles.range}
                style={{ '--accent': sliderColor }}
              />
            </div>
          ))}
        </div>

        {/* ── Result panel ── */}
        <div className={styles.result}>
          <div className={styles.resultInner}>
            <div className={styles.resultLabel}>Predicted G3</div>
            <div className={styles.resultScore} style={{ color }}>{display}</div>
            <div className={styles.resultTrack}>
              <div className={styles.resultFill} style={{ width: `${pct}%`, background: color }} />
            </div>
            <div className={styles.resultOutOf}>out of 10.00</div>
            <div className={styles.resultModel} style={{ color: model.color }}>
              via {model.label}
            </div>
            <div className={styles.resultTag} style={{ background: color + '20', color, border: `1px solid ${color}35` }}>
              <i className={labelIcon} />{label}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
