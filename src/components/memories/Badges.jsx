const EMOTION_COLORS = {
  joy: { bg: 'rgba(245,200,66,0.15)', text: '#f5c842', border: 'rgba(245,200,66,0.3)' },
  grief: { bg: 'rgba(148,163,184,0.12)', text: '#94a3b8', border: 'rgba(148,163,184,0.25)' },
  wonder: { bg: 'rgba(45,212,191,0.12)', text: '#2dd4bf', border: 'rgba(45,212,191,0.25)' },
  love: { bg: 'rgba(244,114,182,0.12)', text: '#f472b6', border: 'rgba(244,114,182,0.25)' },
  fear: { bg: 'rgba(239,68,68,0.12)', text: '#ef4444', border: 'rgba(239,68,68,0.25)' },
  nostalgia: { bg: 'rgba(167,139,250,0.12)', text: '#a78bfa', border: 'rgba(167,139,250,0.25)' },
  hope: { bg: 'rgba(74,158,255,0.12)', text: '#4a9eff', border: 'rgba(74,158,255,0.25)' },
  longing: { bg: 'rgba(196,181,253,0.12)', text: '#c4b5fd', border: 'rgba(196,181,253,0.25)' },
  pride: { bg: 'rgba(251,191,36,0.12)', text: '#fbbf24', border: 'rgba(251,191,36,0.25)' },
  peace: { bg: 'rgba(110,231,183,0.12)', text: '#6ee7b7', border: 'rgba(110,231,183,0.25)' },
};

const LIFE_EVENT_COLORS = {
  birth: { bg: 'rgba(74,222,128,0.12)', text: '#4ade80', border: 'rgba(74,222,128,0.25)' },
  childhood: { bg: 'rgba(251,191,36,0.12)', text: '#fbbf24', border: 'rgba(251,191,36,0.25)' },
  'first love': { bg: 'rgba(244,114,182,0.12)', text: '#f472b6', border: 'rgba(244,114,182,0.25)' },
  marriage: { bg: 'rgba(167,139,250,0.12)', text: '#a78bfa', border: 'rgba(167,139,250,0.25)' },
  loss: { bg: 'rgba(148,163,184,0.12)', text: '#94a3b8', border: 'rgba(148,163,184,0.25)' },
  migration: { bg: 'rgba(74,158,255,0.12)', text: '#4a9eff', border: 'rgba(74,158,255,0.25)' },
  discovery: { bg: 'rgba(45,212,191,0.12)', text: '#2dd4bf', border: 'rgba(45,212,191,0.25)' },
  reunion: { bg: 'rgba(245,200,66,0.12)', text: '#f5c842', border: 'rgba(245,200,66,0.25)' },
  farewell: { bg: 'rgba(239,68,68,0.12)', text: '#ef4444', border: 'rgba(239,68,68,0.25)' },
  achievement: { bg: 'rgba(251,191,36,0.12)', text: '#fbbf24', border: 'rgba(251,191,36,0.25)' },
  'ordinary moment': { bg: 'rgba(148,163,184,0.1)', text: '#8899b4', border: 'rgba(148,163,184,0.2)' },
};

export function EmotionBadge({ emotion }) {
  const style = EMOTION_COLORS[emotion] || { bg: 'rgba(255,255,255,0.08)', text: '#8899b4', border: 'rgba(255,255,255,0.15)' };
  return (
    <span
      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize"
      style={{ background: style.bg, color: style.text, border: `1px solid ${style.border}` }}
    >
      {emotion}
    </span>
  );
}

export function LifeEventBadge({ lifeEvent }) {
  const style = LIFE_EVENT_COLORS[lifeEvent] || { bg: 'rgba(255,255,255,0.08)', text: '#8899b4', border: 'rgba(255,255,255,0.15)' };
  return (
    <span
      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize"
      style={{ background: style.bg, color: style.text, border: `1px solid ${style.border}` }}
    >
      {lifeEvent}
    </span>
  );
}

export function EraBadge({ era }) {
  return (
    <span
      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
      style={{ background: 'rgba(167,139,250,0.12)', color: '#a78bfa', border: '1px solid rgba(167,139,250,0.25)' }}
    >
      {era}
    </span>
  );
}

export function RegionBadge({ region }) {
  return (
    <span
      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium"
      style={{ background: 'rgba(45,212,191,0.1)', color: '#2dd4bf', border: '1px solid rgba(45,212,191,0.2)' }}
    >
      {region}
    </span>
  );
}
