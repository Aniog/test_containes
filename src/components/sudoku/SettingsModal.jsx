import { X } from 'lucide-react';
import { DIFFICULTIES } from '@/lib/sudoku';

const SettingsModal = ({ onClose, onNewGame, currentDifficulty }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4"
      style={{ backgroundColor: 'rgba(60,30,0,0.55)' }}>
      <div
        className="w-full max-w-sm p-6 rounded-2xl"
        style={{
          background: 'linear-gradient(180deg, #fdf0c8 0%, #f0d890 100%)',
          border: '2px solid #c8903a',
          boxShadow: '0 8px 32px rgba(80,40,0,0.35)',
        }}
      >
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-extrabold" style={{ color: '#5a2800' }}>New Game</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full border-none cursor-pointer transition-colors"
            style={{ background: 'rgba(180,100,20,0.15)' }}
          >
            <X size={18} color="#7a4010" />
          </button>
        </div>

        <p className="text-sm mb-4 font-medium" style={{ color: '#8b5020' }}>Select difficulty:</p>

        <div className="flex flex-col gap-3">
          {Object.values(DIFFICULTIES).map(({ name }) => (
            <button
              key={name}
              onClick={() => onNewGame(name)}
              className="w-full py-3 rounded-xl text-base font-bold cursor-pointer transition-all border-2"
              style={currentDifficulty === name ? {
                background: 'linear-gradient(180deg, #e8a040 0%, #c07020 100%)',
                borderColor: '#a05818',
                color: 'white',
                boxShadow: '0 2px 8px rgba(160,88,24,0.4)',
              } : {
                background: 'linear-gradient(180deg, #fdf5e0 0%, #f0e0b0 100%)',
                borderColor: '#c8903a',
                color: '#5a2800',
              }}
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
