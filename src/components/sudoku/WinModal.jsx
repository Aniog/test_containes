import { Trophy } from 'lucide-react';

const WinModal = ({ time, difficulty, onNewGame }) => {
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${String(s).padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-8 text-center">
        <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Trophy className="w-10 h-10 text-amber-500" />
        </div>
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Puzzle Solved!</h2>
        <p className="text-slate-500 mb-1">Difficulty: <span className="font-semibold text-blue-500">{difficulty}</span></p>
        <p className="text-slate-500 mb-6">Time: <span className="font-semibold text-amber-500">{formatTime(time)}</span></p>
        <button
          onClick={onNewGame}
          className="w-full py-3 bg-blue-500 text-white rounded-xl text-base font-semibold
            hover:bg-blue-600 active:bg-blue-700 transition-colors border-none cursor-pointer"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default WinModal;
