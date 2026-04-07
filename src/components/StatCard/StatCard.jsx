import styles from './StatCard.module.scss';

export default function StatCard({ label, value, sub, accent, icon, flag }) {
  return (
    <div className={styles.card} style={{ '--accent': accent }}>
      <div className={styles.top}>
        <span className={styles.label}>{label}</span>
        <span className={styles.iconWrap} style={{ background: accent + '18', color: accent }}>
          <i className={icon} />
        </span>
      </div>
      <div className={styles.value} style={{ color: accent }}>
        {flag && <span className={styles.flag}>{flag}</span>}
        {value}
      </div>
      {sub && <div className={styles.sub}>{sub}</div>}
      <div className={styles.accentBar} style={{ background: accent }} />
    </div>
  );
}
