const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

const AlphabetFilter = ({ activeLetter, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-1 justify-center">
      <button
        onClick={() => onSelect('')}
        className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
          activeLetter === ''
            ? 'bg-yellow-400 text-gray-900'
            : 'bg-white text-gray-600 border border-gray-200 hover:bg-yellow-50'
        }`}
      >
        全部
      </button>
      {ALPHABET.map((letter) => (
        <button
          key={letter}
          onClick={() => onSelect(letter === activeLetter ? '' : letter)}
          className={`w-8 h-8 rounded text-sm font-medium transition-colors ${
            activeLetter === letter
              ? 'bg-yellow-400 text-gray-900 font-bold'
              : 'bg-white text-gray-600 border border-gray-200 hover:bg-yellow-50'
          }`}
        >
          {letter}
        </button>
      ))}
    </div>
  )
}

export default AlphabetFilter
