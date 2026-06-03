# ML Models — EduAnalytics

Production reference folder for all machine-learning artefacts used by this dashboard.

## Folder Structure

```
models/
├── notebooks/               ← Colab notebook exports (PDF, for audit trail)
│   ├── Module4_Feature_Importance.pdf
│   ├── Module5_Country_Clustering.pdf
│   ├── Module6_Intelligent_Ranking.pdf
│   └── Module7_Hybrid_Education_Model.pdf
│
└── outputs/                 ← Extracted numerical results (JSON, ground truth)
    ├── model_performance.json
    ├── feature_importances.json
    ├── country_rankings.json
    ├── cluster_assignments.json
    └── hybrid_model.json
```

## What Each Notebook Does

| Module | Notebook | Purpose |
|--------|----------|---------|
| 4 | Feature Importance | Trains RF, GB, LR on 650 students × 10 features; extracts feature importances |
| 5 | Country Clustering | Aggregates to 10 country profiles; K-Means (k=3) + PCA (97.6% variance) |
| 6 | Intelligent Ranking | ML-blend ranking (60% RF + 40% composite); country final scores 60–100 |
| 7 | Hybrid Education Model | India gap analysis + phased reform roadmap (+30.19% over 10 years) |

## Key Model Results

| Model | R² Score | RMSE | Status |
|-------|----------|------|--------|
| Linear Regression | 0.9003 | 0.4458 | Baseline |
| Random Forest | 0.9046 | 0.4359 | Best base |
| Gradient Boosting | 0.9001 | 0.4461 | Ensemble |
| Fine-Tuned RF | 0.9124 | 0.4178 | Best overall |

Training: 520 samples (80%) · Test: 130 samples (20%) · `random_state=42`

## Top Predictive Features (Random Forest)

1. Science Score Index — 0.4073
2. Math Score Index — 0.3332
3. Past Failures — 0.0827
4. Reading Score Index — 0.0398
5. School Quality Index — 0.0319

## Connecting to the React App

All numerical values in `src/core/data.js` are sourced directly from `outputs/*.json`.
If the ML models are retrained, update `outputs/*.json` first, then sync `src/core/data.js`.

The predictor formula in `src/features/PredictorTool/PredictorTool.jsx` uses the RF/GB/LR
feature importance weights from `outputs/feature_importances.json`, calibrated with a
linear scaling (slope + intercept) so that India (G3=4.74) and Singapore (G3=9.58)
land at the correct endpoints.
