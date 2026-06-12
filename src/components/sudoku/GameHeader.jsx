import { Settings } from 'lucide-react';

const GameHeader = ({ time, difficulty, onSettings }) => {
  const m = Math.floor(time / 60);
  const s = time % 60;
  const formatted = `${m}:${String(s).padStart(2, '0')}`;

  return (
    <div
      className="flex items-center justify-between w-full px-4 py-3"
      style={{ background: 'linear-gradient(180deg, #e8a040 0%, #d4882a 100%)' }}
    >
      <span
        className="text-xl font-bold tabular-nums text-white drop-shadow"
        style={{ minWidth: 56, textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
      >
        {formatted}
      </span>
      <span
        className="text-2xl font-extrabold tracking-widest text-white"
        style={{ textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}
      >
        {difficulty}
      </span>
      <button
        onClick={onSettings}
        className="w-9 h-9 flex items-center justify-center rounded-full
          hover:bg-white/20 active:bg-white/30 transition-colors border-none bg-transparent cursor-pointer"
      >
        <Settings className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};

export default GameHeader;
