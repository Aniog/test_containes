import { Trophy } from 'lucide-react';

const WinModal = ({ time, difficulty, onNewGame }) => {
  const m = Math.floor(time / 60);
  const s = time % 60;
  const formatted = `${m}:${String(s).padStart(2, '0')}`;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4"
      style={{ backgroundColor: 'rgba(60,30,0,0.55)' }}>
      <div
        className="w-full max-w-sm p-8 rounded-2xl text-center"
        style={{
          background: 'linear-gradient(180deg, #fdf0c8 0%, #f0d890 100%)',
          border: '2px solid #c8903a',
          boxShadow: '0 8px 32px rgba(80,40,0,0.35)',
        }}
      >
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ background: 'linear-gradient(180deg, #fde68a 0%, #f5a623 100%)', border: '3px solid #c8903a' }}
        >
          <Trophy size={40} color="#7a4010" />
        </div>
        <h2 className="text-2xl font-extrabold mb-2" style={{ color: '#5a2800' }}>Puzzle Solved!</h2>
        <p className="mb-1 font-medium" style={{ color: '#8b5020' }}>
          Difficulty: <span className="font-bold" style={{ color: '#c07020' }}>{difficulty}</span>
        </p>
        <p className="mb-6 font-medium" style={{ color: '#8b5020' }}>
          Time: <span className="font-bold" style={{ color: '#c07020' }}>{formatted}</span>
        </p>
        <button
          onClick={onNewGame}
          className="w-full py-3 rounded-xl text-base font-bold border-2 cursor-pointer"
          style={{
            background: 'linear-gradient(180deg, #e8a040 0%, #c07020 100%)',
            borderColor: '#a05818',
            color: 'white',
            boxShadow: '0 3px 8px rgba(160,88,24,0.4)',
          }}
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default WinModal;
