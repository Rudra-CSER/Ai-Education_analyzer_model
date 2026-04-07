import StatCard from '../components/StatCard/StatCard';
import RankingTable from '../features/RankingTable/RankingTable';
import HybridModel from '../features/HybridModel/HybridModel';
import styles from './Pages.module.scss';

export default function OverviewPage() {
  return (
    <>
      <div className={styles.statsRow}>
        <StatCard label="Best Performer"    value="Finland 🇫🇮"    sub="Avg Score 9.54"    accent="#10B981" icon="ri-trophy-line"     />
        <StatCard label="Highest R² Model"  value="Random Forest"  sub="R² = 0.9064"       accent="#8B5CF6" icon="ri-robot-line"      />
        <StatCard label="Top Factor"        value="School Quality" sub="r = 0.76 with G3"  accent="#3B82F6" icon="ri-focus-3-line"    />
        <StatCard label="Needs Support"     value="India 🇮🇳"       sub="Avg Score 4.83"    accent="#EF4444" icon="ri-alert-line"      />
      </div>
      <RankingTable />
      <HybridModel />
    </>
  );
}
