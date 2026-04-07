import Card from '../../components/Card/Card';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { useEducationData } from '../../hooks/useEducationData';
import styles from './HybridModel.module.scss';

export default function HybridModel() {
  const { hybridModel } = useEducationData();
  const { targetCountry, currentScore, predictedScore, improvement, recommendations } = hybridModel;

  return (
    <Card gradient>
      <SectionHeader
        icon="ri-sparkling-2-line"
        title="Hybrid Education Model"
        subtitle={`AI-optimised improvement recommendations for ${targetCountry}`}
      />

      <div className={styles.scoreRow}>
        <div className={styles.scoreBox}>
          <div className={styles.scoreLabel}>Current Score</div>
          <div className={styles.scoreValue} style={{ color: '#EF4444' }}>{currentScore}</div>
          <div className={styles.scoreCountry}>{targetCountry}</div>
        </div>

        <div className={styles.arrow}>
          <div className={styles.arrowLine}>
            <i className="ri-arrow-right-line" />
          </div>
          <div className={styles.improveBadge}>
            <i className="ri-rocket-line" />+{improvement}%
          </div>
        </div>

        <div className={styles.scoreBox}>
          <div className={styles.scoreLabel}>Predicted Score</div>
          <div className={styles.scoreValue} style={{ color: '#10B981' }}>{predictedScore}</div>
          <div className={styles.scoreCountry}>Optimised</div>
        </div>
      </div>

      <div className={styles.recs}>
        {recommendations.map((r) => (
          <div key={r.metric} className={styles.recCard}>
            <div className={styles.recIcon}>
              <i className={r.icon} />
            </div>
            <div className={styles.recSource}>
              <i className="ri-map-pin-2-line" /> Adopt from {r.source}
            </div>
            <div className={styles.recMetric}>{r.metric}</div>
            <div className={styles.recValue}>{r.value}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}
