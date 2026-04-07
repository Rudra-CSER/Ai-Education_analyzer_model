import { useState } from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, Tooltip, ResponsiveContainer } from 'recharts';
import Card from '../../components/Card/Card';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { useEducationData } from '../../hooks/useEducationData';
import { RADAR_COLORS } from '../../core/constants';
import { getFlagEmoji } from '../../core/utils';
import styles from './CountryRadar.module.scss';

const FEATURES = ['stressScore', 'creativityScore', 'teacherRatio', 'schoolQuality', 'wellbeing', 'curriculumScore'];
const LABELS   = ['Stress', 'Creativity', 'Teacher Ratio', 'School Quality', 'Wellbeing', 'Curriculum'];

export default function CountryRadar() {
  const { countries } = useEducationData();
  const [selected, setSelected] = useState(['Finland', 'India', 'Singapore']);

  const radarData = LABELS.map((label, i) => {
    const obj = { subject: label };
    selected.forEach((name) => {
      const c = countries.find((x) => x.name === name);
      obj[name] = c ? parseFloat(c[FEATURES[i]].toFixed(1)) : 0;
    });
    return obj;
  });

  const toggle = (name) => {
    setSelected((prev) =>
      prev.includes(name)
        ? prev.filter((x) => x !== name)
        : prev.length < 4 ? [...prev, name] : prev
    );
  };

  return (
    <Card>
      <SectionHeader
        icon="ri-radar-line"
        title="Country Comparison Radar"
        subtitle="Select up to 4 countries to compare across 6 dimensions"
      />
      <div className={styles.toggleGrid}>
        {countries.map((c) => {
          const idx = selected.indexOf(c.name);
          const active = idx !== -1;
          return (
            <button
              key={c.code}
              className={[styles.btn, active ? styles.btnActive : ''].join(' ')}
              style={active ? { borderColor: RADAR_COLORS[idx], color: RADAR_COLORS[idx], background: RADAR_COLORS[idx] + '14' } : {}}
              onClick={() => toggle(c.name)}
            >
              {getFlagEmoji(c.code)} {c.name}
            </button>
          );
        })}
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <RadarChart data={radarData}>
          <PolarGrid stroke="#E8E5DF" />
          <PolarAngleAxis dataKey="subject" tick={{ fontSize: 11, fill: '#78756C', fontFamily: 'Plus Jakarta Sans' }} />
          {selected.map((name, i) => (
            <Radar
              key={name}
              name={name}
              dataKey={name}
              stroke={RADAR_COLORS[i]}
              fill={RADAR_COLORS[i]}
              fillOpacity={0.1}
              strokeWidth={2}
              dot={{ r: 3 }}
            />
          ))}
          <Tooltip contentStyle={{ borderRadius: 10, border: '1px solid #E8E5DF', fontSize: 12, fontFamily: 'Plus Jakarta Sans', boxShadow: '0 4px 16px rgba(0,0,0,0.07)' }} />
        </RadarChart>
      </ResponsiveContainer>
      <div className={styles.legend}>
        {selected.map((name, i) => (
          <span key={name} className={styles.legendItem} style={{ color: RADAR_COLORS[i] }}>
            <span className={styles.legendDot} style={{ background: RADAR_COLORS[i] }} />
            {name}
          </span>
        ))}
      </div>
    </Card>
  );
}
