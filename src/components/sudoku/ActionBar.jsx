import { Plus, SquarePen, RotateCcw } from 'lucide-react';

const ActionBar = ({ onNewGame, onToggleNotes, onUndo, notesMode }) => {
  const btnBase = `flex flex-col items-center gap-1 bg-transparent border-none cursor-pointer p-2`;
  const circleBase = `w-14 h-14 rounded-full flex items-center justify-center shadow-md transition-colors`;

  return (
    <div className="flex items-center justify-around w-full px-2 py-3">
      <button onClick={onNewGame} className={btnBase}>
        <div className={`${circleBase} bg-blue-500 hover:bg-blue-600 active:bg-blue-700`}>
          <Plus className="w-7 h-7 text-white" strokeWidth={2.5} />
        </div>
        <span className="text-xs text-blue-500 font-medium">New Game</span>
      </button>

      <button onClick={onToggleNotes} className={btnBase}>
        <div className={`${circleBase} ${notesMode ? 'bg-blue-700 hover:bg-blue-800' : 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700'}`}>
          <SquarePen className="w-6 h-6 text-white" strokeWidth={2} />
        </div>
        <span className={`text-xs font-medium ${notesMode ? 'text-blue-700' : 'text-blue-500'}`}>Notes</span>
      </button>

      <button onClick={onUndo} className={btnBase}>
        <div className={`${circleBase} bg-blue-500 hover:bg-blue-600 active:bg-blue-700`}>
          <RotateCcw className="w-6 h-6 text-white" strokeWidth={2.5} />
        </div>
        <span className="text-xs text-blue-500 font-medium">Undo</span>
      </button>
    </div>
  );
};

export default ActionBar;
