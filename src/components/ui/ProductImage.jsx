// Elegant SVG placeholder images for jewelry products
// These render warm, editorial-style placeholders until real images are swapped in

const shapes = {
  cuff: (gold, accent) => (
    <g>
      <ellipse cx="100" cy="110" rx="55" ry="35" fill="none" stroke={gold} strokeWidth="8" strokeLinecap="round" />
      <ellipse cx="100" cy="110" rx="55" ry="35" fill="none" stroke={accent} strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <circle cx="155" cy="110" r="8" fill={accent} />
      <circle cx="155" cy="110" r="4" fill="white" opacity="0.6" />
      <line x1="100" y1="75" x2="100" y2="145" stroke={gold} strokeWidth="1" opacity="0.3" />
    </g>
  ),
  necklace: (gold, accent) => (
    <g>
      <path d="M 40 60 Q 100 140 160 60" fill="none" stroke={gold} strokeWidth="3" strokeLinecap="round" />
      <circle cx="100" cy="130" r="18" fill="none" stroke={gold} strokeWidth="4" />
      <circle cx="100" cy="130" r="10" fill={accent} opacity="0.8" />
      <circle cx="100" cy="130" r="5" fill="white" opacity="0.5" />
      <circle cx="85" cy="118" r="4" fill={accent} opacity="0.6" />
      <circle cx="115" cy="118" r="4" fill={accent} opacity="0.6" />
      <circle cx="78" cy="108" r="3" fill={accent} opacity="0.4" />
      <circle cx="122" cy="108" r="3" fill={accent} opacity="0.4" />
    </g>
  ),
  huggie: (gold, accent) => (
    <g>
      <circle cx="80" cy="110" r="28" fill="none" stroke={gold} strokeWidth="10" />
      <circle cx="120" cy="110" r="28" fill="none" stroke={gold} strokeWidth="10" />
      <circle cx="80" cy="110" r="28" fill="none" stroke={accent} strokeWidth="2" opacity="0.4" />
      <circle cx="120" cy="110" r="28" fill="none" stroke={accent} strokeWidth="2" opacity="0.4" />
    </g>
  ),
  drop: (gold, accent) => (
    <g>
      <circle cx="80" cy="70" r="8" fill={gold} />
      <circle cx="120" cy="70" r="8" fill={gold} />
      <line x1="80" y1="78" x2="80" y2="95" stroke={gold} strokeWidth="2" />
      <line x1="120" y1="78" x2="120" y2="95" stroke={gold} strokeWidth="2" />
      <ellipse cx="80" cy="115" rx="14" ry="22" fill="none" stroke={gold} strokeWidth="4" />
      <ellipse cx="120" cy="115" rx="14" ry="22" fill="none" stroke={gold} strokeWidth="4" />
      <ellipse cx="80" cy="115" rx="8" ry="14" fill={accent} opacity="0.6" />
      <ellipse cx="120" cy="115" rx="8" ry="14" fill={accent} opacity="0.6" />
    </g>
  ),
  set: (gold, accent) => (
    <g>
      {/* Necklace */}
      <path d="M 50 55 Q 100 100 150 55" fill="none" stroke={gold} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="100" cy="95" r="12" fill="none" stroke={gold} strokeWidth="3" />
      <circle cx="100" cy="95" r="6" fill={accent} opacity="0.8" />
      {/* Earrings */}
      <circle cx="65" cy="130" r="6" fill={gold} />
      <circle cx="135" cy="130" r="6" fill={gold} />
      <ellipse cx="65" cy="148" rx="10" ry="16" fill="none" stroke={gold} strokeWidth="3" />
      <ellipse cx="135" cy="148" rx="10" ry="16" fill="none" stroke={gold} strokeWidth="3" />
      <ellipse cx="65" cy="148" rx="5" ry="9" fill={accent} opacity="0.6" />
      <ellipse cx="135" cy="148" rx="5" ry="9" fill={accent} opacity="0.6" />
    </g>
  ),
};

const bgGradients = {
  dark: ['#1a1714', '#2c2825'],
  warm: ['#2c2420', '#1a1410'],
  neutral: ['#1e1c1a', '#2a2724'],
};

export default function ProductImage({
  shape = 'cuff',
  gold = '#c9a96e',
  accent = '#e2c98a',
  bg = 'dark',
  className = '',
  alt = 'Jewelry',
  style = {},
}) {
  const [g1, g2] = bgGradients[bg] || bgGradients.dark;
  const gradId = `grad-${shape}-${Math.random().toString(36).slice(2, 7)}`;
  const shapeRenderer = shapes[shape] || shapes.cuff;

  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      role="img"
      aria-label={alt}
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={g1} />
          <stop offset="100%" stopColor={g2} />
        </linearGradient>
      </defs>
      {/* Background */}
      <rect width="200" height="200" fill={`url(#${gradId})`} />
      {/* Subtle texture lines */}
      <line x1="0" y1="200" x2="200" y2="0" stroke={gold} strokeWidth="0.3" opacity="0.08" />
      <line x1="0" y1="150" x2="150" y2="0" stroke={gold} strokeWidth="0.3" opacity="0.05" />
      <line x1="50" y1="200" x2="200" y2="50" stroke={gold} strokeWidth="0.3" opacity="0.05" />
      {/* Jewelry shape */}
      {shapeRenderer(gold, accent)}
      {/* Subtle glow */}
      <ellipse cx="100" cy="110" rx="60" ry="50" fill={gold} opacity="0.04" />
    </svg>
  );
}
