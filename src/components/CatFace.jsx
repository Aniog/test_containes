// Cat face SVG component - cute cartoon style
const CatFace = ({ colorId, size = 'normal' }) => {
  const isSmall = size === 'small';
  const s = isSmall ? 28 : 44;

  const catStyles = {
    0: { face: '#f9d0d8', ear: '#e8748a', inner: '#f5a0b0', eye: '#3d2b1f', nose: '#e8748a' },
    1: { face: '#c8eef5', ear: '#5bbccc', inner: '#90d8e8', eye: '#3d2b1f', nose: '#5bbccc' },
    2: { face: '#c8e8c8', ear: '#7cc87a', inner: '#a0d8a0', eye: '#3d2b1f', nose: '#7cc87a' },
    3: { face: '#f5e8c0', ear: '#e8c96a', inner: '#f0d890', eye: '#3d2b1f', nose: '#e8c96a' },
    4: { face: '#e8d0b8', ear: '#b8956a', inner: '#d0b090', eye: '#3d2b1f', nose: '#b8956a' },
    5: { face: '#e0d8f0', ear: '#9b8ec4', inner: '#c0b8e0', eye: '#3d2b1f', nose: '#9b8ec4' },
    6: { face: '#fcd0e8', ear: '#e87aaa', inner: '#f5a8cc', eye: '#3d2b1f', nose: '#e87aaa' },
    7: { face: '#ecdcc8', ear: '#d4b896', inner: '#e0c8a8', eye: '#3d2b1f', nose: '#d4b896' },
  };

  const style = catStyles[colorId] || catStyles[0];

  return (
    <svg width={s} height={s} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Ears */}
      <polygon points="6,18 12,4 18,18" fill={style.ear} />
      <polygon points="26,18 32,4 38,18" fill={style.ear} />
      <polygon points="8,17 12,7 16,17" fill={style.inner} />
      <polygon points="28,17 32,7 36,17" fill={style.inner} />
      {/* Head */}
      <ellipse cx="22" cy="26" rx="16" ry="14" fill={style.face} />
      {/* Eyes */}
      <ellipse cx="16" cy="24" rx="3" ry="3.5" fill={style.eye} />
      <ellipse cx="28" cy="24" rx="3" ry="3.5" fill={style.eye} />
      {/* Eye shine */}
      <circle cx="17.2" cy="22.8" r="1" fill="white" />
      <circle cx="29.2" cy="22.8" r="1" fill="white" />
      {/* Nose */}
      <ellipse cx="22" cy="29" rx="2" ry="1.5" fill={style.nose} />
      {/* Mouth */}
      <path d="M19 31 Q22 33.5 25 31" stroke={style.eye} strokeWidth="1.2" fill="none" strokeLinecap="round" />
      {/* Whiskers */}
      <line x1="8" y1="28" x2="18" y2="29.5" stroke={style.eye} strokeWidth="0.8" opacity="0.5" />
      <line x1="8" y1="31" x2="18" y2="30.5" stroke={style.eye} strokeWidth="0.8" opacity="0.5" />
      <line x1="26" y1="29.5" x2="36" y2="28" stroke={style.eye} strokeWidth="0.8" opacity="0.5" />
      <line x1="26" y1="30.5" x2="36" y2="31" stroke={style.eye} strokeWidth="0.8" opacity="0.5" />
    </svg>
  );
};

export default CatFace;
