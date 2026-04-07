import Card from '../../components/Card/Card';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { useEducationData } from '../../hooks/useEducationData';
import styles from './ModelComparison.module.scss';

export default function ModelComparison() {
  const { modelComparison } = useEducationData();

  return (
    <Card>
      <SectionHeader
        icon="ri-cpu-line"
        title="Model Performance"
        subtitle="R² score comparison across all trained models"
      />
      <div className={styles.grid}>
        {modelComparison.map((m) => (
          <div key={m.model} className={styles.modelCard} style={{ borderLeft: `4px solid ${m.color}` }}>
            <div className={styles.modelTop}>
              <span className={styles.modelName}>{m.model}</span>
              <span className={styles.modelBadge} style={{ background: m.color + '18', color: m.color }}>
                Best fit
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
          </div>
        ))}
      </div>
    </Card>
  );
}
