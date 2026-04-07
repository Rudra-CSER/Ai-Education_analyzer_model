import {
  countries,
  correlationData,
  featureImportance,
  modelComparison,
  clusterData,
  hybridModel,
} from '../core/data';

export function useEducationData() {
  return { countries, correlationData, featureImportance, modelComparison, clusterData, hybridModel };
}
