import { Lightbulb } from 'lucide-react';

const NumberPad = ({ onNumber, onHint, notesMode }) => {
  return (
    <div className="w-full px-2">
      <div className="grid grid-cols-5 gap-1 mb-1">
        {[1, 2, 3, 4, 5].map(n => (
          <button
            key={n}
            onClick={() => onNumber(n)}
            className="aspect-square flex items-center justify-center text-3xl font-light text-slate-800
              bg-transparent border-none rounded-lg hover:bg-slate-100 active:bg-slate-200
              transition-colors duration-100 cursor-pointer p-0"
          >
            {n}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-5 gap-1">
        {[6, 7, 8, 9].map(n => (
          <button
            key={n}
            onClick={() => onNumber(n)}
            className="aspect-square flex items-center justify-center text-3xl font-light text-slate-800
              bg-transparent border-none rounded-lg hover:bg-slate-100 active:bg-slate-200
              transition-colors duration-100 cursor-pointer p-0"
          >
            {n}
          </button>
        ))}
        <button
          onClick={onHint}
          className="aspect-square flex items-center justify-center
            bg-transparent border-none rounded-lg hover:bg-amber-50 active:bg-amber-100
            transition-colors duration-100 cursor-pointer p-0"
        >
          <Lightbulb className="w-7 h-7 text-amber-400 fill-amber-400" />
        </button>
      </div>
    </div>
  );
};

export default NumberPad;
