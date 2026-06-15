import { COLORS } from '../../data/levels';

const CatFace = ({ size }) => {
  const s = size <= 6 ? 32 : size <= 7 ? 28 : 26;
  return (
    <svg width={s} height={s} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Head */}
      <ellipse cx="20" cy="22" rx="16" ry="14" fill="#f5f0e8" />
      {/* Ears */}
      <polygon points="6,12 2,2 12,8" fill="#f5f0e8" />
      <polygon points="34,12 38,2 28,8" fill="#f5f0e8" />
      <polygon points="7,11 4,4 11,8" fill="#e8a0a0" />
      <polygon points="33,11 36,4 29,8" fill="#e8a0a0" />
      {/* Eyes */}
      <ellipse cx="14" cy="20" rx="3.5" ry="4" fill="#2a2a2a" />
      <ellipse cx="26" cy="20" rx="3.5" ry="4" fill="#2a2a2a" />
      <circle cx="15.2" cy="18.5" r="1.2" fill="white" />
      <circle cx="27.2" cy="18.5" r="1.2" fill="white" />
      {/* Nose */}
      <ellipse cx="20" cy="26" rx="2" ry="1.5" fill="#e87878" />
      {/* Mouth */}
      <path d="M18 27.5 Q20 29.5 22 27.5" stroke="#c05050" strokeWidth="1" fill="none" strokeLinecap="round" />
      {/* Whiskers */}
      <line x1="4" y1="25" x2="16" y2="26" stroke="#888" strokeWidth="0.8" />
      <line x1="4" y1="27" x2="16" y2="27.5" stroke="#888" strokeWidth="0.8" />
      <line x1="24" y1="26" x2="36" y2="25" stroke="#888" strokeWidth="0.8" />
      <line x1="24" y1="27.5" x2="36" y2="27" stroke="#888" strokeWidth="0.8" />
    </svg>
  );
};

const XMark = ({ color, size }) => {
  const fontSize = size <= 6 ? 22 : size <= 7 ? 20 : 18;
  return (
    <span
      style={{
        fontSize,
        fontWeight: 900,
        color: color.xColor,
        lineHeight: 1,
        display: 'block',
        opacity: 0.9,
        fontFamily: 'Arial, sans-serif',
      }}
    >
      ✕
    </span>
  );
};

const GridCell = ({ row, col, colorIdx, state, isError, onClick, size }) => {
  const color = COLORS[colorIdx];
  const cellSize = size <= 6 ? 'w-14 h-14' : size <= 7 ? 'w-12 h-12' : 'w-11 h-11';

  const bgColor = state === 'cat'
    ? (isError ? color.light : color.bg)
    : (isError ? color.light : color.bg);

  const borderStyle = isError
    ? '2.5px solid rgba(255,80,80,0.8)'
    : '2px solid rgba(255,255,255,0.35)';

  const shadow = isError
    ? '0 0 0 2px rgba(255,80,80,0.5), 0 2px 4px rgba(0,0,0,0.15)'
    : '0 2px 4px rgba(0,0,0,0.12)';

  return (
    <button
      onClick={() => onClick(row, col)}
      className={`${cellSize} rounded-xl flex items-center justify-center transition-all duration-100 active:scale-90 select-none`}
      style={{
        backgroundColor: bgColor,
        border: borderStyle,
        boxShadow: shadow,
        padding: 0,
        outline: 'none',
      }}
    >
      {state === 'cat' && <CatFace size={size} />}
      {state === 'x' && <XMark color={color} size={size} />}
    </button>
  );
};

export default GridCell;
