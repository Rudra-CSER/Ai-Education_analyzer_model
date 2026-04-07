import styles from './Card.module.scss';

export default function Card({ children, className = '', accent, gradient }) {
  return (
    <div
      className={[styles.card, gradient ? styles.gradient : '', className].join(' ')}
      style={accent ? { borderTop: `3px solid ${accent}` } : {}}
    >
      {children}
    </div>
  );
}
