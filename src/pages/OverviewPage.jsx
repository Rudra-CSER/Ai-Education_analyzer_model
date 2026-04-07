import StatCard from '../components/StatCard/StatCard';
import RankingTable from '../features/RankingTable/RankingTable';
import HybridModel from '../features/HybridModel/HybridModel';
import styles from './Pages.module.scss';

export default function OverviewPage() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <div className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>
          <div className={styles.heroChip}>
            <i className="ri-sparkling-2-line" /> AI-Powered Education Intelligence
          </div>
          <h1 className={styles.heroTitle}>Global Education Dashboard</h1>
          <p className={styles.heroSub}>
            Analysing <strong>10 countries</strong> · <strong>650 students</strong> · <strong>4 ML models</strong> to surface what truly drives academic performance.
          </p>
        </div>
        <div className={styles.heroStats}>
          <div className={styles.heroStat}>
            <span className={styles.heroStatVal}>9.54</span>
            <span className={styles.heroStatLabel}>Top Score</span>
          </div>
          <div className={styles.heroStatDivider} />
          <div className={styles.heroStat}>
            <span className={styles.heroStatVal}>90.6%</span>
            <span className={styles.heroStatLabel}>Best R²</span>
          </div>
          <div className={styles.heroStatDivider} />
          <div className={styles.heroStat}>
            <span className={styles.heroStatVal}>+22%</span>
            <span className={styles.heroStatLabel}>Predicted Gain</span>
          </div>
        </div>
      </div>

      {/* ── Stat Cards ── */}
      <div className={styles.statsRow}>
        <StatCard
          label="Best Performer"
          value="Finland"
          sub="Avg Score · 9.54 / 10"
          accent="#10B981"
          icon="ri-trophy-fill"
          flag="🇫🇮"
        />
        <StatCard
          label="Top ML Model"
          value="Random Forest"
          sub="R² Score · 0.9064"
          accent="#8B5CF6"
          icon="ri-robot-2-line"
        />
        <StatCard
          label="Strongest Factor"
          value="School Quality"
          sub="Pearson r · 0.76 with G3"
          accent="#3B82F6"
          icon="ri-building-4-line"
        />
        <StatCard
          label="Needs Support"
          value="India"
          sub="Avg Score · 4.83 / 10"
          accent="#EF4444"
          icon="ri-alert-fill"
          flag="🇮🇳"
        />
      </div>

      <RankingTable />
      <HybridModel />
    </>
  );
}
