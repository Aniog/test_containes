import { Lightbulb } from 'lucide-react';

const NumberPad = ({ onNumber, onHint }) => {
  const btnClass = `flex items-center justify-center bg-transparent border-none rounded-lg
    hover:bg-gray-100 active:bg-gray-200 transition-colors duration-75 cursor-pointer
    text-gray-800 font-light`;

  return (
    <div className="w-full px-4 py-2">
      <div className="grid grid-cols-5 gap-0">
        {[1, 2, 3, 4, 5].map(n => (
          <button
            key={n}
            onClick={() => onNumber(n)}
            className={btnClass}
            style={{ fontSize: 'clamp(24px, 7vw, 38px)', aspectRatio: '1/1' }}
          >
            {n}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-5 gap-0">
        {[6, 7, 8, 9].map(n => (
          <button
            key={n}
            onClick={() => onNumber(n)}
            className={btnClass}
            style={{ fontSize: 'clamp(24px, 7vw, 38px)', aspectRatio: '1/1' }}
          >
            {n}
          </button>
        ))}
        <button
          onClick={onHint}
          className="flex items-center justify-center bg-transparent border-none rounded-lg
            hover:bg-amber-50 active:bg-amber-100 transition-colors duration-75 cursor-pointer"
          style={{ aspectRatio: '1/1' }}
          title="Hint"
        >
          <Lightbulb
            style={{ width: 'clamp(24px, 7vw, 36px)', height: 'clamp(24px, 7vw, 36px)' }}
            className="text-amber-400 fill-amber-400"
          />
        </button>
      </div>
    </div>
  );
};

export default NumberPad;
