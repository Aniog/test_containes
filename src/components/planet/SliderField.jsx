const SliderField = ({ label, value, min, max, step = 1, onChange, unit = '', color = 'sky' }) => {
  const colorMap = {
    sky: 'accent-sky-400',
    violet: 'accent-violet-400',
    emerald: 'accent-emerald-400',
    blue: 'accent-blue-400',
    amber: 'accent-amber-400',
    rose: 'accent-rose-400',
  };

  const pct = ((value - min) / (max - min)) * 100;

  const trackColorMap = {
    sky: '#38bdf8',
    violet: '#a78bfa',
    emerald: '#34d399',
    blue: '#60a5fa',
    amber: '#fbbf24',
    rose: '#fb7185',
  };

  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium text-gray-300">{label}</label>
        <span className="text-sm font-semibold text-white bg-gray-800 px-2 py-0.5 rounded-md border border-gray-700">
          {typeof value === 'number' && !Number.isInteger(value) ? value.toFixed(1) : value}{unit}
        </span>
      </div>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={e => onChange(step < 1 ? parseFloat(e.target.value) : parseInt(e.target.value))}
          className={`w-full h-1.5 rounded-full ${colorMap[color]}`}
          style={{
            background: `linear-gradient(to right, ${trackColorMap[color]} ${pct}%, #374151 ${pct}%)`,
          }}
        />
      </div>
    </div>
  );
};

export default SliderField;
