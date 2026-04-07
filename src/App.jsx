// ─── Layer 1: App Shell ───────────────────────────────────────────────────────
import { useState } from 'react';
import styles from './App.module.scss';

import OverviewPage   from './pages/OverviewPage';
import AnalysisPage   from './pages/AnalysisPage';
import ModelsPage     from './pages/ModelsPage';
import CountriesPage  from './pages/CountriesPage';
import PredictorPage  from './pages/PredictorPage';

const TABS = [
  { id: 'overview',  label: 'Overview',          icon: 'ri-dashboard-3-line'  },
  { id: 'analysis',  label: 'EDA & Correlations', icon: 'ri-bar-chart-2-line' },
  { id: 'models',    label: 'ML Models',          icon: 'ri-cpu-line'          },
  { id: 'countries', label: 'Country Analysis',   icon: 'ri-earth-line'        },
  { id: 'predictor', label: 'Live Predictor',     icon: 'ri-equalizer-2-line'  },
];

const PAGE_MAP = {
  overview:  OverviewPage,
  analysis:  AnalysisPage,
  models:    ModelsPage,
  countries: CountriesPage,
  predictor: PredictorPage,
};

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const Page = PAGE_MAP[activeTab];

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.logo}>
            <div className={styles.logoMark}>
              <i className="ri-graduation-cap-line" />
            </div>
            <div>
              <div className={styles.logoTitle}>EduAnalytics</div>
              <div className={styles.logoSub}>Global Education Intelligence</div>
            </div>
          </div>
          <div className={styles.headerMeta}>
            <span className={[styles.badge, styles.badgeGreen].join(' ')}>
              <i className="ri-earth-line" />10 Countries
            </span>
            <span className={[styles.badge, styles.badgePurple].join(' ')}>
              <i className="ri-group-line" />650 Students
            </span>
            <span className={[styles.badge, styles.badgeAmber].join(' ')}>
              <i className="ri-cpu-line" />4 ML Models
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
              {t.label}
            </button>
          ))}
        </nav>
      </header>

      <main className={styles.main}>
        <Page />
      </main>

      <footer className={styles.footer}>
        <i className="ri-code-s-slash-line" />
        Final Year Project · CSE82 · AI-Driven Intelligent Education System Analyzer
      </footer>
    </div>
  );
}
