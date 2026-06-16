import { COLORS } from '../gameData';
import CatFace from './CatFace';

const XMark = () => (
  <svg width="55%" height="55%" viewBox="0 0 24 24" fill="none">
    <line x1="4" y1="4" x2="20" y2="20" stroke="rgba(255,255,255,0.85)" strokeWidth="4" strokeLinecap="round" />
    <line x1="20" y1="4" x2="4" y2="20" stroke="rgba(255,255,255,0.85)" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

const GridCell = ({ row, col, colorId, state, onClick, isError }) => {
  const colorDef = COLORS[colorId];
  const hasCat = state === 'cat';
  const hasX = state === 'x';

  return (
    <button
      onClick={() => onClick(row, col)}
      className="relative flex items-center justify-center rounded-xl transition-transform duration-100 active:scale-90"
      style={{
        backgroundColor: colorDef.bg,
        aspectRatio: '1',
        width: '100%',
        outline: hasCat
          ? `3px solid ${isError ? '#ef4444' : 'rgba(255,255,255,0.9)'}`
          : 'none',
        outlineOffset: '-2px',
        zIndex: hasCat ? 2 : 1,
      }}
    >
      {hasCat && (
        <div className="absolute inset-0 flex items-center justify-center p-0.5">
          <CatFace colorId={colorId} size="normal" />
        </div>
      )}
      {hasX && (
        <div className="absolute inset-0 flex items-center justify-center">
          <XMark />
        </div>
      )}
    </button>
  );
};

export default GridCell;
