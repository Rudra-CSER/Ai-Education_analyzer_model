import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, Cell, ReferenceLine,
} from 'recharts';
import Card from '../../components/Card/Card';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { useEducationData } from '../../hooks/useEducationData';
import styles from './CorrelationChart.module.scss';

export default function CorrelationChart() {
  const { correlationData } = useEducationData();
  const sorted = [...correlationData].sort((a, b) => a.correlation - b.correlation);

  return (
    <Card>
      <SectionHeader
        icon="ri-link"
        title="Feature Correlations"
        subtitle="Pearson r with final grade (G3) — sorted by strength"
      />
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={sorted} layout="vertical" margin={{ left: 104, right: 48, top: 4, bottom: 4 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#F0EDE8" horizontal={false} />
          <XAxis
            type="number"
            domain={[-1, 1]}
            tick={{ fontSize: 11, fill: '#A8A49C', fontFamily: 'Plus Jakarta Sans' }}
            tickFormatter={(v) => v.toFixed(1)}
          />
          <YAxis
            type="category"
            dataKey="feature"
            tick={{ fontSize: 12, fill: '#575451', fontFamily: 'Plus Jakarta Sans' }}
            width={100}
          />
          <Tooltip
            formatter={(v) => [v.toFixed(3), 'Pearson r']}
            contentStyle={{ borderRadius: 10, border: '1px solid #E8E5DF', fontSize: 12, fontFamily: 'Plus Jakarta Sans', boxShadow: '0 4px 16px rgba(0,0,0,0.07)' }}
          />
          <ReferenceLine x={0} stroke="#D4CFC6" strokeWidth={1.5} />
          <Bar dataKey="correlation" radius={[0, 4, 4, 0]} maxBarSize={18}>
            {sorted.map((entry, i) => (
              <Cell key={i} fill={entry.direction === 'positive' ? '#10B981' : '#EF4444'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className={styles.legend}>
        <span className={styles.dot} style={{ background: '#10B981' }} />Positive influence
        <span className={styles.dot} style={{ background: '#EF4444', marginLeft: 18 }} />Negative influence
      </div>
    </Card>
  );
}
