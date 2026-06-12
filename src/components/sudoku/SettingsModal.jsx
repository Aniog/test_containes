import { X } from 'lucide-react';
import { DIFFICULTIES } from '@/lib/sudoku';

const SettingsModal = ({ onClose, onNewGame, currentDifficulty }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-800">New Game</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-slate-100 border-none bg-transparent cursor-pointer p-0"
          >
            <X className="w-5 h-5 text-slate-500" />
          </button>
        </div>

        <p className="text-sm text-slate-500 mb-4">Select difficulty:</p>

        <div className="flex flex-col gap-3">
          {Object.values(DIFFICULTIES).map(({ name }) => (
            <button
              key={name}
              onClick={() => onNewGame(name)}
              className={`w-full py-3 rounded-xl text-base font-semibold border-2 cursor-pointer transition-all
                ${currentDifficulty === name
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:text-blue-500'}`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
