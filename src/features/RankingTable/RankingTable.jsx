import { useState } from 'react';
import Card from '../../components/Card/Card';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { useEducationData } from '../../hooks/useEducationData';
import { CLUSTER_COLORS } from '../../core/constants';
import { getFlagEmoji } from '../../core/utils';
import styles from './RankingTable.module.scss';

const MEDALS = ['🥇', '🥈', '🥉'];

export default function RankingTable() {
  const { countries } = useEducationData();
  const [hovered, setHovered] = useState(null);

  return (
    <Card>
      <SectionHeader
        icon="ri-medal-line"
        title="Country Rankings"
        subtitle="ML-predicted average performance scores (G3)"
      />
      <div className={styles.list}>
        {countries.map((c) => (
          <div
            key={c.code}
            className={[styles.row, hovered === c.code ? styles.rowHovered : ''].join(' ')}
            onMouseEnter={() => setHovered(c.code)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className={styles.rank} style={{ color: c.rank <= 3 ? '#F59E0B' : '#A8A49C' }}>
              {c.rank <= 3 ? MEDALS[c.rank - 1] : `#${c.rank}`}
            </div>
            <div className={styles.flag}>{getFlagEmoji(c.code)}</div>
            <div className={styles.name}>{c.name}</div>
            <div className={styles.barWrap}>
              <div
                className={styles.bar}
                style={{ width: `${(c.avgScore / 10) * 100}%`, background: CLUSTER_COLORS[c.cluster] }}
              />
            </div>
            <div className={styles.score}>{c.avgScore.toFixed(2)}</div>
            <div
              className={styles.cluster}
              style={{ background: CLUSTER_COLORS[c.cluster] + '18', color: CLUSTER_COLORS[c.cluster], border: `1px solid ${CLUSTER_COLORS[c.cluster]}30` }}
            >
              {c.cluster}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
