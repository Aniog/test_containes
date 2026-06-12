import { Settings } from 'lucide-react';

const GameHeader = ({ time, difficulty, onSettings }) => {
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${String(s).padStart(2, '0')}`;
  };

  return (
    <div className="flex items-center justify-between w-full px-3 py-2">
      <span className="text-xl font-bold text-amber-500 w-16 tabular-nums">
        {formatTime(time)}
      </span>
      <span className="text-2xl font-extrabold text-blue-500 tracking-widest">
        {difficulty}
      </span>
      <button
        onClick={onSettings}
        className="w-8 h-8 flex items-center justify-center bg-transparent border-none cursor-pointer
          hover:bg-slate-100 rounded-full transition-colors p-0"
      >
        <Settings className="w-6 h-6 text-slate-400" />
      </button>
    </div>
  );
};

export default GameHeader;
