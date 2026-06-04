// ─── All values sourced directly from Module 4, 5, 6, 7 Jupyter notebooks ─────

// ─── Countries ────────────────────────────────────────────────────────────────
// Rankings from Module 6 (ML Final Score = 60% RF + 40% Composite).
// avgScore = Actual G3 mean from Module 6 output.
// teacherRatio, schoolQuality, wellbeing = module 7 country profiles.
// curriculumScore = (reading_score_index + science_score_index) / 2 from Module 5.
export const countries = [
  { name: 'Singapore',   code: 'SG', rank: 1,  avgScore: 9.58, stressScore: 4.8, creativityScore: 3.5, teacherRatio: 8.6, schoolQuality: 9.7, curriculumScore: 9.2, absences: 1.5, studytime: 9.2, wellbeing: 5.5, cluster: 'High-Pressure High Performers' },
  { name: 'South Korea', code: 'KR', rank: 2,  avgScore: 9.16, stressScore: 6.8, creativityScore: 2.8, teacherRatio: 7.0, schoolQuality: 8.9, curriculumScore: 8.6, absences: 1.8, studytime: 9.5, wellbeing: 4.0, cluster: 'High-Pressure High Performers' },
  { name: 'China',       code: 'CN', rank: 3,  avgScore: 9.16, stressScore: 6.5, creativityScore: 2.9, teacherRatio: 6.5, schoolQuality: 7.9, curriculumScore: 8.9, absences: 1.6, studytime: 9.3, wellbeing: 4.6, cluster: 'High-Pressure High Performers' },
  { name: 'Japan',       code: 'JP', rank: 4,  avgScore: 8.67, stressScore: 6.2, creativityScore: 3.1, teacherRatio: 8.0, schoolQuality: 9.5, curriculumScore: 8.7, absences: 1.9, studytime: 8.9, wellbeing: 5.0, cluster: 'High-Pressure High Performers' },
  { name: 'Finland',     code: 'FI', rank: 5,  avgScore: 8.07, stressScore: 2.1, creativityScore: 4.8, teacherRatio: 9.0, schoolQuality: 9.5, curriculumScore: 8.3, absences: 1.2, studytime: 8.8, wellbeing: 8.9, cluster: 'Balanced High Performers' },
  { name: 'Canada',      code: 'CA', rank: 6,  avgScore: 7.84, stressScore: 3.5, creativityScore: 4.0, teacherRatio: 8.8, schoolQuality: 9.0, curriculumScore: 8.1, absences: 2.8, studytime: 7.1, wellbeing: 8.1, cluster: 'Balanced High Performers' },
  { name: 'Germany',     code: 'DE', rank: 7,  avgScore: 7.38, stressScore: 3.1, creativityScore: 4.3, teacherRatio: 8.6, schoolQuality: 8.4, curriculumScore: 7.5, absences: 2.3, studytime: 7.5, wellbeing: 7.4, cluster: 'Balanced High Performers' },
  { name: 'UK',          code: 'GB', rank: 8,  avgScore: 7.37, stressScore: 3.2, creativityScore: 4.1, teacherRatio: 8.0, schoolQuality: 8.5, curriculumScore: 7.7, absences: 2.1, studytime: 7.9, wellbeing: 7.1, cluster: 'Balanced High Performers' },
  { name: 'US',          code: 'US', rank: 9,  avgScore: 6.82, stressScore: 4.2, creativityScore: 3.9, teacherRatio: 7.5, schoolQuality: 7.9, curriculumScore: 7.0, absences: 3.1, studytime: 6.9, wellbeing: 7.0, cluster: 'Balanced High Performers' },
  { name: 'India',       code: 'IN', rank: 10, avgScore: 4.82, stressScore: 7.8, creativityScore: 2.2, teacherRatio: 3.5, schoolQuality: 4.9, curriculumScore: 4.3, absences: 5.2, studytime: 6.8, wellbeing: 5.0, cluster: 'Developing Under Pressure' },
];

// ─── Correlation Data ─────────────────────────────────────────────────────────
// Pearson r values with G3 (final grade). EDA & Correlations tab.
export const correlationData = [
  { feature: 'Absences',      correlation: -0.83, direction: 'negative' },
  { feature: 'Failures',      correlation: -0.71, direction: 'negative' },
  { feature: 'Stress Level',  correlation: -0.52, direction: 'negative' },
  { feature: 'Wellbeing',     correlation:  0.21, direction: 'positive' },
  { feature: 'Study Time',    correlation:  0.33, direction: 'positive' },
  { feature: 'School Quality',  correlation:  0.62, direction: 'positive' },
  { feature: 'Teacher Quality', correlation:  0.54, direction: 'positive' },
];

// ─── Feature Importance ───────────────────────────────────────────────────────
// RF importances from Module 6 training output.
// GB importances are approximated from Module 4 GradientBoostingRegressor.
export const featureImportance = [
  { feature: 'Stress',     rf: 0.3982, gb: 0.4301 },
  { feature: 'Teacher Q.', rf: 0.3332, gb: 0.3378 },
  { feature: 'Failures',  rf: 0.0827, gb: 0.0893 },
  { feature: 'Reading',   rf: 0.0398, gb: 0.0412 },
  { feature: 'School Q.', rf: 0.0319, gb: 0.0287 },
  { feature: 'Govt Spend',rf: 0.0274, gb: 0.0234 },
  { feature: 'Wellbeing', rf: 0.0257, gb: 0.0198 },
  { feature: 'Absences',  rf: 0.0178, gb: 0.0148 },
  { feature: 'Study Time',rf: 0.0111, gb: 0.0054 },
];

// ─── Model Comparison ─────────────────────────────────────────────────────────
// R² and RMSE from Module 4 training output (520 train / 130 test, random_state=42).
// Fine-Tuned RF: GridSearchCV-optimised version (n_estimators=300, max_depth=10).
export const modelComparison = [
  {
    model: 'Linear Regression',
    r2: 0.9003, rmse: 0.4458,
    color: '#8B5CF6',
    tag: 'Baseline',
    description: 'Ordinary Least Squares baseline. Interpretable coefficients; no regularization.',
    params: [
      { label: 'Type', value: 'OLS' },
      { label: 'Regularization', value: 'None' },
      { label: 'Train / Test', value: '520 / 130' },
    ],
    topFeatures: [
      { name: 'Stress Level',  value: 0.2201 },
      { name: 'Teacher Quality', value: 0.2198 },
      { name: 'Past Failures', value: 0.1487 },
      { name: 'Reading Score', value: 0.1312 },
      { name: 'Wellbeing',     value: 0.0891 },
    ],
  },
  {
    model: 'Random Forest',
    r2: 0.9046, rmse: 0.4359,
    color: '#10B981',
    tag: 'Best',
    description: '200 decision trees (max_depth=8). Best R² in base comparison.',
    params: [
      { label: 'Estimators', value: '200' },
      { label: 'Max Depth',  value: '8' },
      { label: 'Train / Test', value: '520 / 130' },
    ],
    topFeatures: [
      { name: 'Stress Level',  value: 0.3982 },
      { name: 'Teacher Quality', value: 0.3332 },
      { name: 'Past Failures', value: 0.0827 },
      { name: 'Reading Score', value: 0.0398 },
      { name: 'Wellbeing',     value: 0.0257 },
    ],
  },
  {
    model: 'XGBoost',
    r2: 0.9001, rmse: 0.4461,
    color: '#F59E0B',
    tag: 'Ensemble',
    description: 'Gradient-boosted trees (learning_rate=0.05). More concentrated top-feature weights than RF.',
    params: [
      { label: 'Estimators',    value: '200' },
      { label: 'Learning Rate', value: '0.05' },
      { label: 'Train / Test',  value: '520 / 130' },
    ],
    topFeatures: [
      { name: 'Stress Level',  value: 0.4301 },
      { name: 'Teacher Quality', value: 0.3378 },
      { name: 'Past Failures', value: 0.0893 },
      { name: 'Reading Score', value: 0.0412 },
      { name: 'Wellbeing',     value: 0.0198 },
    ],
  },
  {
    model: 'Fine-Tuned RF',
    r2: 0.9124, rmse: 0.4178,
    color: '#3B82F6',
    tag: 'Fine-Tuned',
    description: 'Random Forest after GridSearchCV hyperparameter search. Highest R².',
    params: [
      { label: 'Estimators', value: '300' },
      { label: 'Max Depth',  value: '10' },
      { label: 'Min Samples Split', value: '3' },
    ],
    topFeatures: [
      { name: 'Stress Level',  value: 0.3901 },
      { name: 'Teacher Quality', value: 0.3298 },
      { name: 'Past Failures', value: 0.0814 },
      { name: 'Reading Score', value: 0.0389 },
      { name: 'Wellbeing',     value: 0.0280 },
    ],
  },
];

// ─── Cluster Data ─────────────────────────────────────────────────────────────
// 3 clusters from Module 5 K-Means (k=3, Silhouette=0.5323, DB=0.4065).
export const clusterData = [
  { name: 'High-Pressure High Performers', count: 4, avgScore: 9.14, color: '#F59E0B', countries: 'Singapore, South Korea, China, Japan' },
  { name: 'Balanced High Performers',      count: 5, avgScore: 7.50, color: '#10B981', countries: 'Finland, Canada, Germany, UK, US' },
  { name: 'Developing Under Pressure',     count: 1, avgScore: 4.82, color: '#EF4444', countries: 'India' },
];

// ─── Hybrid Model ─────────────────────────────────────────────────────────────
// From Module 7: India baseline RF prediction = 4.7350.
// Phase 4 (full hybrid) prediction = 6.1645 → +30.19%.
// Sources: Finland (teacher, wellbeing, failures), Canada (spend, school),
//          Singapore (math/science/reading), Germany (studytime).
export const hybridModel = {
  targetCountry: 'India',
  currentScore: 4.74,
  predictedScore: 6.16,
  improvement: 30,
  phases: [
    { phase: 'Baseline', label: 'Current state', score: 4.74, pct: 0 },
    { phase: 'Phase 1 (0–2 yrs)',  label: 'Policy foundation: teacher recruitment & wellbeing', score: 4.64, pct: -2.05 },
    { phase: 'Phase 2 (2–4 yrs)',  label: 'Infrastructure: school quality & govt spending',    score: 5.04, pct: 6.41 },
    { phase: 'Phase 3 (4–7 yrs)',  label: 'Curriculum reform: reduce failures, improve scores', score: 5.43, pct: 14.60 },
    { phase: 'Phase 4 (7–10 yrs)', label: 'Full hybrid model: all reforms consolidated',       score: 6.16, pct: 30.19 },
  ],
  recommendations: [
    { source: 'Finland',   metric: 'Teacher Quality',       value: 'From 3.5 → 6.2 (+2.8)', icon: 'ri-user-star-line'   },
    { source: 'Finland',   metric: 'Student Well-being',    value: 'From 5.0 → 7.3 (+2.3)', icon: 'ri-mental-health-line' },
    { source: 'Canada',    metric: 'Govt. Education Spend', value: 'From 4.1 → 5.8 (+1.7)', icon: 'ri-government-line'  },
    { source: 'Singapore', metric: 'Science + Math Score',  value: 'Structured curriculum',  icon: 'ri-flask-line'      },
  ],
};
