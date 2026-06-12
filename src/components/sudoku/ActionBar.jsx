import { Plus, SquarePen, RotateCcw } from 'lucide-react';

const ActionBar = ({ onNewGame, onToggleNotes, onUndo, notesMode }) => {
  const circleStyle = {
    width: 56,
    height: 56,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(180deg, #e8a040 0%, #c07020 100%)',
    border: '2px solid #a05818',
    boxShadow: '0 3px 6px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.3)',
    transition: 'filter 0.1s',
    cursor: 'pointer',
  };

  const notesCircleStyle = {
    ...circleStyle,
    background: notesMode
      ? 'linear-gradient(180deg, #c07020 0%, #a05818 100%)'
      : 'linear-gradient(180deg, #e8a040 0%, #c07020 100%)',
  };

  const labelStyle = {
    fontSize: 12,
    fontWeight: 600,
    color: '#7a4010',
    textShadow: '0 1px 0 rgba(255,255,255,0.5)',
  };

  const btnBase = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: 8,
  };

  return (
    <div
      className="flex items-center justify-around w-full px-2 py-3"
      style={{ background: 'linear-gradient(180deg, #f0d9a0 0%, #e0c080 100%)', borderTop: '2px solid #c8a060' }}
    >
      <button
        onClick={onNewGame}
        style={btnBase}
        onMouseDown={e => e.currentTarget.querySelector('div').style.filter = 'brightness(0.85)'}
        onMouseUp={e => e.currentTarget.querySelector('div').style.filter = ''}
        onMouseLeave={e => e.currentTarget.querySelector('div').style.filter = ''}
      >
        <div style={circleStyle}>
          <Plus color="white" size={28} strokeWidth={2.5} />
        </div>
        <span style={labelStyle}>New Game</span>
      </button>

      <button
        onClick={onToggleNotes}
        style={btnBase}
        onMouseDown={e => e.currentTarget.querySelector('div').style.filter = 'brightness(0.85)'}
        onMouseUp={e => e.currentTarget.querySelector('div').style.filter = ''}
        onMouseLeave={e => e.currentTarget.querySelector('div').style.filter = ''}
      >
        <div style={notesCircleStyle}>
          <SquarePen color="white" size={24} strokeWidth={2} />
        </div>
        <span style={{ ...labelStyle, color: notesMode ? '#5a2800' : '#7a4010' }}>Notes</span>
      </button>

      <button
        onClick={onUndo}
        style={btnBase}
        onMouseDown={e => e.currentTarget.querySelector('div').style.filter = 'brightness(0.85)'}
        onMouseUp={e => e.currentTarget.querySelector('div').style.filter = ''}
        onMouseLeave={e => e.currentTarget.querySelector('div').style.filter = ''}
      >
        <div style={circleStyle}>
          <RotateCcw color="white" size={24} strokeWidth={2.5} />
        </div>
        <span style={labelStyle}>Undo</span>
      </button>
    </div>
  );
};

export default ActionBar;
