import { useState } from 'react';
import Card from '../../components/Card/Card';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { useEducationData } from '../../hooks/useEducationData';
import styles from './ModelComparison.module.scss';

function ModelCard({ m }) {
  const [open, setOpen] = useState(false);
  const maxImportance = Math.max(...m.topFeatures.map((f) => f.value));

  return (
    <div className={styles.modelCard}>
      <div className={styles.modelCardInner} style={{ borderLeftColor: m.color }}>
        <div className={styles.modelTop}>
          <span className={styles.modelName}>{m.model}</span>
          <span className={styles.modelBadge} style={{ background: m.color + '18', color: m.color }}>
            {m.tag}
          </span>
        </div>

        <div className={styles.r2} style={{ color: m.color }}>{m.r2.toFixed(4)}</div>
        <div className={styles.r2Label}>R² Score</div>
        <div className={styles.rmse}>
          <i className="ri-arrow-down-s-line" /> RMSE: {m.rmse.toFixed(4)}
        </div>

        <div className={styles.barTrack}>
          <div className={styles.barFill} style={{ width: `${m.r2 * 100}%`, background: m.color }} />
        </div>

        <button
          className={[styles.toggleBtn, open ? styles.open : ''].join(' ')}
          onClick={() => setOpen((v) => !v)}
        >
          <i className="ri-information-line" />
          Model details
          <i className={`ri-arrow-down-s-line ${styles.chevron}`} style={{ marginLeft: 'auto' }} />
        </button>
      </div>

      <div className={[styles.dropdown, open ? styles.open : ''].join(' ')}>
        <div className={styles.dropdownInner}>

          <div className={styles.dropDesc}>{m.description}</div>

          <div className={styles.dropSection}>
            <div className={styles.dropLabel}>Hyperparameters</div>
            {m.params.map((p) => (
              <div key={p.label} className={styles.paramRow}>
                <span className={styles.paramKey}>{p.label}</span>
                <span className={styles.paramVal}>{p.value}</span>
              </div>
            ))}
          </div>

          <div className={styles.dropSection}>
            <div className={styles.dropLabel}>Top 5 Feature Importances</div>
            {m.topFeatures.map((f) => (
              <div key={f.name} className={styles.featureRow}>
                <span className={styles.featureName}>{f.name}</span>
                <div className={styles.featureBar}>
                  <div
                    className={styles.featureBarFill}
                    style={{ width: `${(f.value / maxImportance) * 100}%`, background: m.color }}
                  />
                </div>
                <span className={styles.featureVal} style={{ color: m.color }}>
                  {f.value.toFixed(4)}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default function ModelComparison() {
  const { modelComparison } = useEducationData();

  return (
    <Card>
      <SectionHeader
        icon="ri-cpu-line"
        title="Model Performance"
        subtitle="R² score comparison across all trained models — click any card to expand details"
      />
      <div className={styles.grid}>
        {modelComparison.map((m) => (
          <ModelCard key={m.model} m={m} />
        ))}
      </div>
    </Card>
  );
}
