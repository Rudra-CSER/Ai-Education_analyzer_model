import { useState } from 'react';
import Card from '../../components/Card/Card';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { clamp } from '../../core/utils';
import styles from './PredictorTool.module.scss';

const SLIDERS = [
  { key: 'stress',        label: 'Stress Level',    min: 1, max: 10, icon: 'ri-mental-health-line',  color: '#EF4444', negative: true  },
  { key: 'creativity',    label: 'Creativity',      min: 1, max: 10, icon: 'ri-palette-line',         color: '#8B5CF6', negative: false },
  { key: 'teacherRatio',  label: 'Teacher Quality', min: 1, max: 10, icon: 'ri-user-star-line',       color: '#10B981', negative: false },
  { key: 'schoolQuality', label: 'School Quality',  min: 1, max: 10, icon: 'ri-building-4-line',      color: '#10B981', negative: false },
  { key: 'studytime',     label: 'Study Time',      min: 1, max: 10, icon: 'ri-time-line',            color: '#3B82F6', negative: false },
  { key: 'absences',      label: 'Absences',        min: 0, max: 10, icon: 'ri-calendar-close-line',  color: '#F59E0B', negative: true  },
];

function predict(inputs) {
  const raw = (
    0.30 * inputs.schoolQuality +
    0.22 * inputs.teacherRatio  +
    0.12 * inputs.studytime     -
    0.20 * inputs.stress        -
    0.18 * inputs.absences      +
    0.08 * inputs.creativity
  );
  return clamp(raw, 0, 10);
}

export default function PredictorTool() {
  const [inputs, setInputs] = useState({
    stress: 5, creativity: 3, teacherRatio: 7, schoolQuality: 7, studytime: 6, absences: 3,
  });

  const score   = predict(inputs);
  const display = score.toFixed(2);
  const pct     = (score / 10) * 100;
  const color   = score >= 8 ? '#10B981' : score >= 6 ? '#F59E0B' : '#EF4444';
  const label   = score >= 8 ? 'High Performer' : score >= 6 ? 'Average Performer' : 'Needs Support';
  const labelIcon = score >= 8 ? 'ri-trophy-line' : score >= 6 ? 'ri-bar-chart-line' : 'ri-alert-line';

  return (
    <Card>
      <SectionHeader
        icon="ri-equalizer-2-line"
        title="Live Prediction Tool"
        subtitle="Adjust the sliders — ML model predicts the student performance score"
      />
      <div className={styles.layout}>
        <div className={styles.sliders}>
          {SLIDERS.map(({ key, label, min, max, icon, color }) => (
            <div key={key} className={styles.sliderRow}>
              <div className={styles.sliderMeta}>
                <span className={styles.sliderIcon} style={{ background: color + '18', color }}>
                  <i className={icon} />
                </span>
                <span className={styles.sliderLabel}>{label}</span>
                <span className={styles.sliderVal} style={{ color }}>{inputs[key]}</span>
              </div>
              <input
                type="range"
                min={min}
                max={max}
                step="1"
                value={inputs[key]}
                onChange={(e) => setInputs({ ...inputs, [key]: Number(e.target.value) })}
                className={styles.range}
                style={{ '--accent': color }}
              />
            </div>
          ))}
        </div>

        <div className={styles.result}>
          <div className={styles.resultInner}>
            <div className={styles.resultLabel}>Predicted G3</div>
            <div className={styles.resultScore} style={{ color }}>{display}</div>
            <div className={styles.resultTrack}>
              <div className={styles.resultFill} style={{ width: `${pct}%`, background: color }} />
            </div>
            <div className={styles.resultOutOf}>out of 10.00</div>
            <div className={styles.resultTag} style={{ background: color + '20', color, border: `1px solid ${color}35` }}>
              <i className={labelIcon} />{label}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
