const FLAG_MAP = {
  FI: '🇫🇮', GB: '🇬🇧', SG: '🇸🇬', DE: '🇩🇪',
  US: '🇺🇸', CA: '🇨🇦', KR: '🇰🇷', CN: '🇨🇳',
  JP: '🇯🇵', IN: '🇮🇳',
};

export function getFlagEmoji(code) {
  return FLAG_MAP[code] || '🌐';
}

export function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
