# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install          # install dependencies
npm run dev          # dev server at http://localhost:5173
npm run build        # production build → /dist
npm run preview      # preview production build locally
```

No linter, formatter, or test runner is configured.

## Architecture

4-layer React SPA with no router — navigation is tab-state in `App.jsx`.

```
App.jsx          ← tab state, scroll-progress bar, nav rendering
pages/           ← one file per tab; compose features into the page layout
features/        ← self-contained data-display modules (chart + card + styles)
components/      ← shared primitives: Card, SectionHeader, StatCard
core/            ← all static data, colour tokens, utility functions
hooks/           ← useEducationData re-exports core/data.js (swap point for a future API)
styles/          ← SCSS design system (_variables, _mixins, _base, main)
```

Every feature lives in `src/features/<Name>/<Name>.jsx` + `<Name>.module.scss`. Pages import features; features import the `Card` and `SectionHeader` primitives plus `useEducationData` for data.

## Data layer

All data is static and lives in `src/core/data.js`. `useEducationData` is a thin hook that re-exports it — if you ever connect a real API, that hook is the only file to change.

- Country metrics are normalised to 0–10 scale.
- `src/core/constants.js` — cluster/chart colour tokens used across features.
- `src/core/utils.js` — `getFlagEmoji(code)` and `clamp(value, min, max)`.

## Live Predictor

`PredictorTool.jsx` contains a hardcoded linear formula (not a loaded model):

```js
0.30 * schoolQuality + 0.22 * teacherRatio + 0.12 * studytime
- 0.20 * stress - 0.18 * absences + 0.08 * creativity
```

Output is clamped 0–10. Changing prediction logic only requires editing that file.

## Styling conventions

- SCSS Modules (`.module.scss`) co-located with each component/feature.
- Design tokens (colours, spacing, radius, shadows) defined in `src/styles/_variables.scss` and referenced via CSS custom properties.
- Inline `style` props are used for dynamic colours (chart fills, score colours) — keep that pattern rather than generating dynamic class names.
- Icons are Remix Icon class strings (`ri-*`), rendered as `<i className="ri-..." />`.

## Model artefacts

```
models/
├── notebooks/    ← Colab notebook PDFs (audit trail, formerly "new models/*.pkl")
└── outputs/      ← Ground-truth JSON extracted from notebook runs
    ├── model_performance.json      RF R²=0.9046, GB R²=0.9001, LR R²=0.9003, Tuned RF R²=0.9124
    ├── feature_importances.json    RF/GB/LR importances — Science=0.407, Math=0.333 dominate
    ├── country_rankings.json       Module 6 final scores (Singapore #1 = 100, India #10 = 60)
    ├── cluster_assignments.json    3 K-Means clusters (k=3, Silhouette=0.53)
    └── hybrid_model.json           India phased roadmap: baseline 4.73 → +30.19% over 10 yrs
```

`src/core/data.js` is the React-side mirror of these JSON files. If notebooks are retrained,
update `outputs/*.json` first, then sync `data.js`.

The predictor formula in `PredictorTool.jsx` is a calibrated linear approximation using
RF/GB/LR feature importance weights. India (G3=4.74) and Singapore (G3=9.58) are the calibration
anchors. See `models/README.md` for full details.

## Build notes

- `vite.config.js` sets `publicDir: false` — assets are not served from `/public`.
- There is a `vercel.json` in the repo root for Vercel deployment, but the README documents Render as the deploy target.
- `src/App.js`, `src/data.js`, and `src/index.js` are stale duplicates alongside their `.jsx` counterparts; `src/main.jsx` is the real entry point.
