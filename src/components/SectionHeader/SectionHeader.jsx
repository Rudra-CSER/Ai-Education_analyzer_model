import styles from './SectionHeader.module.scss';

export default function SectionHeader({ number, title, subtitle, icon }) {
  return (
    <div className={styles.header}>
      <div className={styles.badge}>
        {icon ? <i className={icon} /> : <span>{number}</span>}
      </div>
      <div className={styles.text}>
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </div>
  );
}
