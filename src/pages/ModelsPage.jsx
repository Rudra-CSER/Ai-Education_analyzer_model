import ModelComparison from '../features/ModelComparison/ModelComparison';
import FeatureImportance from '../features/FeatureImportance/FeatureImportance';

export default function ModelsPage() {
  return (
    <>
      <ModelComparison />
      <FeatureImportance />
    </>
  );
}
