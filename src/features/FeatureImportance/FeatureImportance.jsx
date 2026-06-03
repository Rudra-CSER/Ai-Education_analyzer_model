import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Card from '../../components/Card/Card';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { useEducationData } from '../../hooks/useEducationData';
import styles from './FeatureImportance.module.scss';

export default function FeatureImportance() {
  const { featureImportance } = useEducationData();

  return (
    <Card>
      <SectionHeader
        icon="ri-bar-chart-grouped-line"
        title="Feature Importance"
        subtitle="Random Forest vs XGBoost — contribution to grade prediction"
      />
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={featureImportance} margin={{ left: 8, right: 24, top: 4, bottom: 4 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#F0EDE8" vertical={false} />
          <XAxis
            dataKey="feature"
            tick={{ fontSize: 10, fill: '#A8A49C', fontFamily: 'Plus Jakarta Sans' }}
          />
          <YAxis
            tick={{ fontSize: 11, fill: '#A8A49C', fontFamily: 'Plus Jakarta Sans' }}
            tickFormatter={(v) => v.toFixed(2)}
          />
          <Tooltip
            formatter={(v, name) => [v.toFixed(4), name]}
            contentStyle={{ borderRadius: 10, border: '1px solid #E8E5DF', fontSize: 12, fontFamily: 'Plus Jakarta Sans', boxShadow: '0 4px 16px rgba(0,0,0,0.07)' }}
          />
          <Bar dataKey="rf" name="Random Forest"     fill="#10B981" radius={[4, 4, 0, 0]} maxBarSize={20} />
          <Bar dataKey="gb" name="XGBoost" fill="#F59E0B" radius={[4, 4, 0, 0]} maxBarSize={20} />
        </BarChart>
      </ResponsiveContainer>
      <div className={styles.legend}>
        <span className={styles.dot} style={{ background: '#10B981' }} />Random Forest
        <span className={styles.dot} style={{ background: '#F59E0B', marginLeft: 18 }} />XGBoost
      </div>
    </Card>
  );
}
