// ─── Layer 1: App Shell ───────────────────────────────────────────────────────
import { useState, useEffect } from 'react';
import styles from './App.module.scss';

import OverviewPage  from './pages/OverviewPage';
import AnalysisPage  from './pages/AnalysisPage';
import ModelsPage    from './pages/ModelsPage';
import CountriesPage from './pages/CountriesPage';
import PredictorPage from './pages/PredictorPage';

const TABS = [
  { id: 'overview',  label: 'Overview',          icon: 'ri-layout-masonry-line'   },
  { id: 'analysis',  label: 'EDA & Correlations', icon: 'ri-bubble-chart-line'    },
  { id: 'models',    label: 'ML Models',          icon: 'ri-brain-line'            },
  { id: 'countries', label: 'Country Analysis',   icon: 'ri-global-line'           },
  { id: 'predictor', label: 'Live Predictor',     icon: 'ri-magic-line'            },
];

const PAGE_MAP = {
  overview:  OverviewPage,
  analysis:  AnalysisPage,
  models:    ModelsPage,
  countries: CountriesPage,
  predictor: PredictorPage,
};

export default function App() {
  const [activeTab, setActiveTab]   = useState('overview');
  const [scrollPct, setScrollPct]   = useState(0);
  const Page = PAGE_MAP[activeTab];

  useEffect(() => {
    const onScroll = () => {
      const el    = document.documentElement;
      const total = el.scrollHeight - el.clientHeight;
      setScrollPct(total > 0 ? (el.scrollTop / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={styles.app}>
      <header className={styles.header}>

        {/* ── Scroll progress bar ── */}
        <div className={styles.scrollBar} style={{ width: `${scrollPct}%` }} />

        <div className={styles.headerInner}>
          <div className={styles.logo}>
            <div className={styles.logoMark}>
              <i className="ri-graduation-cap-fill" />
            </div>
            <div>
              <div className={styles.logoTitle}>EduAnalytics</div>
              <div className={styles.logoSub}>Global Education Intelligence</div>
            </div>
          </div>

          <div className={styles.headerMeta}>
            <span className={[styles.badge, styles.badgeGreen].join(' ')}>
              <i className="ri-map-pin-line" />10 Countries
            </span>
            <span className={[styles.badge, styles.badgePurple].join(' ')}>
              <i className="ri-user-3-line" />650 Students
            </span>
            <span className={[styles.badge, styles.badgeAmber].join(' ')}>
              <i className="ri-robot-line" />4 ML Models
            </span>
          </div>
        </div>

        <nav className={styles.nav}>
          {TABS.map((t) => (
            <button
              key={t.id}
              className={[styles.navBtn, activeTab === t.id ? styles.navBtnActive : ''].join(' ')}
              onClick={() => setActiveTab(t.id)}
            >
              <i className={t.icon} />
              <span>{t.label}</span>
            </button>
          ))}
        </nav>
      </header>

      <main className={styles.main}>
        <Page />
      </main>

      <footer className={styles.footer}>
        <i className="ri-terminal-box-line" />
        Final Year Project · CSE82 · AI-Driven Intelligent Education System Analyzer
      </footer>
    </div>
  );
}
