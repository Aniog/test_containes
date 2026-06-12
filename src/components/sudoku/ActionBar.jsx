import { Plus, Grid2x2, RotateCcw } from 'lucide-react';

const ActionBar = ({ onNewGame, onToggleNotes, onUndo, notesMode }) => {
  return (
    <div className="flex items-center justify-around w-full px-4 py-2">
      <button
        onClick={onNewGame}
        className="flex flex-col items-center gap-1 bg-transparent border-none cursor-pointer p-2 group"
      >
        <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center
          shadow-md group-hover:bg-blue-600 group-active:bg-blue-700 transition-colors">
          <Plus className="w-6 h-6 text-white" strokeWidth={2.5} />
        </div>
        <span className="text-xs text-blue-500 font-medium">New Game</span>
      </button>

      <button
        onClick={onToggleNotes}
        className="flex flex-col items-center gap-1 bg-transparent border-none cursor-pointer p-2 group"
      >
        <div className={`w-12 h-12 rounded-full flex items-center justify-center
          shadow-md transition-colors
          ${notesMode ? 'bg-blue-600 group-hover:bg-blue-700' : 'bg-blue-500 group-hover:bg-blue-600 group-active:bg-blue-700'}`}>
          <Grid2x2 className="w-6 h-6 text-white" strokeWidth={2} />
        </div>
        <span className={`text-xs font-medium ${notesMode ? 'text-blue-700' : 'text-blue-500'}`}>Notes</span>
      </button>

      <button
        onClick={onUndo}
        className="flex flex-col items-center gap-1 bg-transparent border-none cursor-pointer p-2 group"
      >
        <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center
          shadow-md group-hover:bg-blue-600 group-active:bg-blue-700 transition-colors">
          <RotateCcw className="w-5 h-5 text-white" strokeWidth={2.5} />
        </div>
        <span className="text-xs text-blue-500 font-medium">Undo</span>
      </button>
    </div>
  );
};

export default ActionBar;
