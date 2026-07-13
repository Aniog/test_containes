const bgPalettes = {
  '#1A1714': { ring: '#C9A96E', glow: '#A8854A', text: '#C8C0B5' },
  '#2C2825': { ring: '#C9A96E', glow: '#A8854A', text: '#C8C0B5' },
  '#3A3530': { ring: '#DFC08A', glow: '#C9A96E', text: '#C8C0B5' },
  '#F5F0E8': { ring: '#C9A96E', glow: '#A8854A', text: '#6B6560' },
  '#EDE8DF': { ring: '#C9A96E', glow: '#A8854A', text: '#6B6560' },
  '#FAF7F2': { ring: '#C9A96E', glow: '#A8854A', text: '#6B6560' },
};

export default function JewelryPlaceholder({ bg = '#2C2825', label = '', className = '', ratio = '4x3' }) {
  const palette = bgPalettes[bg] || bgPalettes['#2C2825'];
  const isDark = ['#1A1714', '#2C2825', '#3A3530'].includes(bg);

  const ratioMap = { '4x3': '75%', '3x2': '66.67%', '1x1': '100%', '3x4': '133.33%', '16x9': '56.25%', '9x16': '177.78%' };
  const paddingTop = ratioMap[ratio] || '75%';

  return (
    <div className={`relative w-full overflow-hidden ${className}`} style={{ paddingTop }}>
      <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: bg }}>
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <radialGradient id={`glow-${label.slice(0,8)}`} cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={palette.glow} stopOpacity="0.25" />
              <stop offset="100%" stopColor={bg} stopOpacity="0" />
            </radialGradient>
            <filter id={`blur-${label.slice(0,8)}`}>
              <feGaussianBlur stdDeviation="8" />
            </filter>
          </defs>

          {/* Ambient glow */}
          <ellipse cx="200" cy="150" rx="120" ry="90"
            fill={`url(#glow-${label.slice(0,8)})`}
            filter={`url(#blur-${label.slice(0,8)})`} />

          {/* Jewelry icon — ring/circle motif */}
          <circle cx="200" cy="138" r="52" fill="none" stroke={palette.ring} strokeWidth="3" opacity="0.9" />
          <circle cx="200" cy="138" r="38" fill="none" stroke={palette.ring} strokeWidth="1.5" opacity="0.5" />

          {/* Crystal accent dots */}
          {[0, 60, 120, 180, 240, 300].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const x = 200 + 52 * Math.cos(rad);
            const y = 138 + 52 * Math.sin(rad);
            return (
              <circle key={i} cx={x} cy={y} r="4"
                fill={palette.ring} opacity={i % 2 === 0 ? 0.9 : 0.5} />
            );
          })}

          {/* Center gem */}
          <polygon
            points="200,118 210,138 200,158 190,138"
            fill={palette.ring} opacity="0.7" />
          <polygon
            points="200,118 210,138 200,128"
            fill={palette.glow} opacity="0.9" />

          {/* Sparkle lines */}
          <line x1="200" y1="70" x2="200" y2="82" stroke={palette.ring} strokeWidth="1.5" opacity="0.6" />
          <line x1="200" y1="194" x2="200" y2="206" stroke={palette.ring} strokeWidth="1.5" opacity="0.6" />
          <line x1="132" y1="138" x2="144" y2="138" stroke={palette.ring} strokeWidth="1.5" opacity="0.6" />
          <line x1="256" y1="138" x2="268" y2="138" stroke={palette.ring} strokeWidth="1.5" opacity="0.6" />

          {/* Brand watermark */}
          <text x="200" y="240" textAnchor="middle"
            fontFamily="Georgia, serif" fontSize="11"
            fill={palette.text} opacity="0.5" letterSpacing="4">
            VELMORA
          </text>
        </svg>
      </div>
    </div>
  );
}
