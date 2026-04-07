import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Card from '../../components/Card/Card';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { useEducationData } from '../../hooks/useEducationData';
import { CLUSTER_COLORS } from '../../core/constants';
import styles from './ClusteringPanel.module.scss';

function CustomTooltip({ payload }) {
  if (!payload?.length) return null;
  const d = payload[0]?.payload;
  return (
    <div className={styles.tooltip}>
      <div className={styles.tooltipName}>{d.name}</div>
      <div className={styles.tooltipMeta}>Stress: {d.x} · Score: {d.y}</div>
      <div className={styles.tooltipCluster} style={{ color: CLUSTER_COLORS[d.cluster] }}>
        <i className="ri-price-tag-3-line" /> {d.cluster}
      </div>
    </div>
  );
}

export default function ClusteringPanel() {
  const { countries, clusterData } = useEducationData();

  const scatterData = countries.map((c) => ({
    x: parseFloat(c.stressScore.toFixed(1)),
    y: parseFloat(c.avgScore.toFixed(2)),
    name: c.name,
    cluster: c.cluster,
  }));

  return (
    <Card>
      <SectionHeader
        icon="ri-bubble-chart-line"
        title="K-Means Country Clusters"
        subtitle="Stress score vs predicted performance — 4 cluster groups"
      />
      <ResponsiveContainer width="100%" height={280}>
        <ScatterChart margin={{ top: 10, right: 30, bottom: 24, left: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#F0EDE8" />
          <XAxis
            dataKey="x"
            name="Stress Score"
            label={{ value: 'Stress Score', position: 'insideBottom', offset: -12, fontSize: 11, fill: '#A8A49C' }}
            tick={{ fontSize: 11, fill: '#A8A49C', fontFamily: 'Plus Jakarta Sans' }}
          />
          <YAxis
            dataKey="y"
            name="Avg Score"
            label={{ value: 'Avg Score', angle: -90, position: 'insideLeft', fontSize: 11, fill: '#A8A49C' }}
            tick={{ fontSize: 11, fill: '#A8A49C', fontFamily: 'Plus Jakarta Sans' }}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: '3 3' }} />
          {Object.entries(CLUSTER_COLORS).map(([cluster, color]) => (
            <Scatter
              key={cluster}
              name={cluster}
              data={scatterData.filter((d) => d.cluster === cluster)}
              fill={color}
              opacity={0.9}
            />
          ))}
        </ScatterChart>
      </ResponsiveContainer>
      <div className={styles.chips}>
        {clusterData.map((cl) => (
          <div
            key={cl.name}
            className={styles.chip}
            style={{ background: cl.color + '14', border: `1px solid ${cl.color}30`, color: cl.color }}
          >
            <span className={styles.chipDot} style={{ background: cl.color }} />
            {cl.name} <span className={styles.chipCount}>({cl.count})</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
