import { Lightbulb } from 'lucide-react';

const NumberPad = ({ onNumber, onHint }) => {
  const btnStyle = {
    background: 'linear-gradient(180deg, #e8c87a 0%, #d4a84a 100%)',
    borderRadius: 8,
    border: '1px solid #b8903a',
    boxShadow: '0 2px 4px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.35)',
    color: '#3d2b1a',
    fontWeight: 700,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'filter 0.1s',
  };

  const hintBtnStyle = {
    ...btnStyle,
    background: 'linear-gradient(180deg, #f0d060 0%, #d4a020 100%)',
  };

  return (
    <div className="w-full px-3 py-2" style={{ backgroundColor: '#c8903a' }}>
      <div className="grid grid-cols-5 gap-[6px] mb-[6px]">
        {[1, 2, 3, 4, 5].map(n => (
          <button
            key={n}
            onClick={() => onNumber(n)}
            style={{ ...btnStyle, aspectRatio: '1/1', fontSize: 'clamp(22px, 6vw, 34px)' }}
            onMouseDown={e => e.currentTarget.style.filter = 'brightness(0.9)'}
            onMouseUp={e => e.currentTarget.style.filter = ''}
            onMouseLeave={e => e.currentTarget.style.filter = ''}
          >
            {n}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-5 gap-[6px]">
        {[6, 7, 8, 9].map(n => (
          <button
            key={n}
            onClick={() => onNumber(n)}
            style={{ ...btnStyle, aspectRatio: '1/1', fontSize: 'clamp(22px, 6vw, 34px)' }}
            onMouseDown={e => e.currentTarget.style.filter = 'brightness(0.9)'}
            onMouseUp={e => e.currentTarget.style.filter = ''}
            onMouseLeave={e => e.currentTarget.style.filter = ''}
          >
            {n}
          </button>
        ))}
        <button
          onClick={onHint}
          style={{ ...hintBtnStyle, aspectRatio: '1/1' }}
          title="Hint"
          onMouseDown={e => e.currentTarget.style.filter = 'brightness(0.9)'}
          onMouseUp={e => e.currentTarget.style.filter = ''}
          onMouseLeave={e => e.currentTarget.style.filter = ''}
        >
          <Lightbulb
            style={{ width: 'clamp(22px, 6vw, 32px)', height: 'clamp(22px, 6vw, 32px)' }}
            className="text-amber-700 fill-amber-400"
          />
        </button>
      </div>
    </div>
  );
};

export default NumberPad;
