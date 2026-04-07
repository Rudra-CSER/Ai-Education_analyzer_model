import styles from './StatCard.module.scss';

export default function StatCard({ label, value, sub, accent, icon }) {
  return (
    <div className={styles.card} style={{ borderTop: `3px solid ${accent}` }}>
      <div className={styles.top}>
        <span className={styles.label}>{label}</span>
        {icon && (
          <span className={styles.iconWrap} style={{ background: accent + '18', color: accent }}>
            <i className={icon} />
          </span>
        )}
      </div>
      <div className={styles.value} style={{ color: accent }}>{value}</div>
      {sub && <div className={styles.sub}>{sub}</div>}
    </div>
  );
}
