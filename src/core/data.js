export const countries = [
  { name: 'Finland',     code: 'FI', rank: 1,  avgScore: 9.54, stressScore: 2.1, creativityScore: 4.8, teacherRatio: 9.2, schoolQuality: 9.5, curriculumScore: 9.1, absences: 1.2, studytime: 8.8, wellbeing: 9.0, cluster: 'High Performers' },
  { name: 'UK',          code: 'GB', rank: 2,  avgScore: 9.14, stressScore: 3.2, creativityScore: 4.1, teacherRatio: 8.5, schoolQuality: 8.9, curriculumScore: 8.6, absences: 2.1, studytime: 7.9, wellbeing: 8.2, cluster: 'High Performers' },
  { name: 'Singapore',   code: 'SG', rank: 3,  avgScore: 9.13, stressScore: 4.8, creativityScore: 3.5, teacherRatio: 8.9, schoolQuality: 9.3, curriculumScore: 9.0, absences: 1.5, studytime: 9.2, wellbeing: 7.1, cluster: 'High Performers' },
  { name: 'Germany',     code: 'DE', rank: 4,  avgScore: 8.73, stressScore: 3.1, creativityScore: 4.3, teacherRatio: 8.1, schoolQuality: 8.7, curriculumScore: 8.5, absences: 2.3, studytime: 7.5, wellbeing: 8.4, cluster: 'High Performers' },
  { name: 'US',          code: 'US', rank: 5,  avgScore: 8.04, stressScore: 4.2, creativityScore: 3.9, teacherRatio: 7.4, schoolQuality: 8.0, curriculumScore: 7.8, absences: 3.1, studytime: 6.9, wellbeing: 7.3, cluster: 'Moderate Performers' },
  { name: 'Canada',      code: 'CA', rank: 6,  avgScore: 7.86, stressScore: 3.5, creativityScore: 4.0, teacherRatio: 7.8, schoolQuality: 8.1, curriculumScore: 7.9, absences: 2.8, studytime: 7.1, wellbeing: 7.8, cluster: 'Moderate Performers' },
  { name: 'South Korea', code: 'KR', rank: 7,  avgScore: 7.39, stressScore: 6.8, creativityScore: 2.8, teacherRatio: 7.2, schoolQuality: 8.3, curriculumScore: 8.1, absences: 1.8, studytime: 9.5, wellbeing: 5.2, cluster: 'High Stress' },
  { name: 'China',       code: 'CN', rank: 8,  avgScore: 7.35, stressScore: 6.5, creativityScore: 2.9, teacherRatio: 6.8, schoolQuality: 7.9, curriculumScore: 7.6, absences: 1.6, studytime: 9.3, wellbeing: 5.5, cluster: 'High Stress' },
  { name: 'Japan',       code: 'JP', rank: 9,  avgScore: 6.86, stressScore: 6.2, creativityScore: 3.1, teacherRatio: 6.5, schoolQuality: 7.5, curriculumScore: 7.4, absences: 1.9, studytime: 8.9, wellbeing: 5.8, cluster: 'High Stress' },
  { name: 'India',       code: 'IN', rank: 10, avgScore: 4.83, stressScore: 7.8, creativityScore: 2.2, teacherRatio: 4.2, schoolQuality: 5.1, curriculumScore: 4.8, absences: 5.2, studytime: 6.8, wellbeing: 4.1, cluster: 'Developing' },
];

export const correlationData = [
  { feature: 'Absences',      correlation: -0.83, direction: 'negative' },
  { feature: 'Stress Score',  correlation: -0.73, direction: 'negative' },
  { feature: 'Wellbeing',     correlation: -0.21, direction: 'negative' },
  { feature: 'Creativity',    correlation: -0.17, direction: 'negative' },
  { feature: 'Study Time',    correlation:  0.33, direction: 'positive' },
  { feature: 'Teacher Ratio', correlation:  0.54, direction: 'positive' },
  { feature: 'Curriculum',    correlation:  0.58, direction: 'positive' },
  { feature: 'School Quality',correlation:  0.76, direction: 'positive' },
];

export const featureImportance = [
  { feature: 'Absences',       rf: 0.112, xgb: 0.112 },
  { feature: 'Teacher Ratio',  rf: 0.105, xgb: 0.112 },
  { feature: 'School Quality', rf: 0.110, xgb: 0.044 },
  { feature: 'Govt Spend',     rf: 0.077, xgb: 0.041 },
  { feature: 'Study Time',     rf: 0.069, xgb: 0.009 },
  { feature: 'Wellbeing',      rf: 0.056, xgb: 0.025 },
  { feature: 'Free Time',      rf: 0.056, xgb: 0.160 },
  { feature: 'Failures',       rf: 0.139, xgb: 0.396 },
];

export const modelComparison = [
  { model: 'Linear Regression', r2: 0.8243, rmse: 0.5916, color: '#8B5CF6' },
  { model: 'Random Forest',     r2: 0.9064, rmse: 0.4318, color: '#10B981' },
  { model: 'XGBoost',           r2: 0.9019, rmse: 0.4421, color: '#F59E0B' },
];

export const clusterData = [
  { name: 'High Performers',     count: 4, avgScore: 9.14, color: '#10B981', countries: 'Finland, UK, Singapore, Germany' },
  { name: 'Moderate Performers', count: 2, avgScore: 7.95, color: '#8B5CF6', countries: 'US, Canada' },
  { name: 'High Stress',         count: 3, avgScore: 7.20, color: '#F59E0B', countries: 'South Korea, China, Japan' },
  { name: 'Developing',          count: 1, avgScore: 4.83, color: '#EF4444', countries: 'India' },
];

export const hybridModel = {
  targetCountry: 'India',
  currentScore: 4.83,
  predictedScore: 5.90,
  improvement: 22,
  recommendations: [
    { source: 'Finland',   metric: 'Stress Reduction',    value: 'From 7.8 → 3.5', icon: 'ri-mental-health-line' },
    { source: 'Singapore', metric: 'Curriculum Quality',  value: 'Structured + Rigorous', icon: 'ri-book-open-line' },
    { source: 'Germany',   metric: 'Teacher Quality',     value: 'Ratio increase to 8.0+', icon: 'ri-user-star-line' },
    { source: 'UK',        metric: 'Creativity Index',    value: 'From 2.2 → 4.1', icon: 'ri-palette-line' },
  ],
};
