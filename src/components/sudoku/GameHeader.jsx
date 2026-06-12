import { Settings } from 'lucide-react';

const GameHeader = ({ time, difficulty, onSettings }) => {
  const m = Math.floor(time / 60);
  const s = time % 60;
  const formatted = `${m}:${String(s).padStart(2, '0')}`;

  return (
    <div className="flex items-center justify-between w-full px-4 py-3">
      <span className="text-xl font-bold tabular-nums" style={{ color: '#f59e0b', minWidth: 56 }}>
        {formatted}
      </span>
      <span className="text-2xl font-extrabold tracking-widest text-blue-500">
        {difficulty}
      </span>
      <button
        onClick={onSettings}
        className="w-9 h-9 flex items-center justify-center rounded-full
          hover:bg-gray-100 active:bg-gray-200 transition-colors border-none bg-transparent cursor-pointer"
      >
        <Settings className="w-6 h-6 text-gray-400" />
      </button>
    </div>
  );
};

export default GameHeader;
