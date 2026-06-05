import React from "react";

const WordDisplay = ({ word, isError, isBonus }) => {
  if (!word) {
    return (
      <div className="h-10 flex items-center justify-center">
        <div className="w-32 h-1 bg-amber-400/50 rounded-full" />
      </div>
    );
  }

  return (
    <div className="h-10 flex items-center justify-center gap-1">
      {word.split("").map((letter, i) => (
        <div
          key={i}
          className={`
            w-8 h-8 flex items-center justify-center rounded-md font-bold text-base
            border-2 transition-all duration-100
            ${isError
              ? "bg-red-100 border-red-400 text-red-700 animate-shake"
              : isBonus
              ? "bg-purple-100 border-purple-400 text-purple-800"
              : "bg-amber-50 border-amber-400 text-amber-900"
            }
          `}
          style={{
            animationDelay: `${i * 30}ms`,
          }}
        >
          {letter}
        </div>
      ))}
    </div>
  );
};

export default WordDisplay;
