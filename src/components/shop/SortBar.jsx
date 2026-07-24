const SortBar = ({ value, options, onChange, count }) => {
  return (
    <div className="flex flex-col gap-4 rounded-[2rem] border border-velmora-line bg-velmora-pearl/70 p-5 shadow-velmora sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-velmora-mist">
        Showing <span className="font-medium text-velmora-ink">{count}</span> pieces
      </p>
      <div className="flex items-center gap-3">
        <label htmlFor="sort" className="text-xs font-medium uppercase tracking-[0.28em] text-velmora-mist">
          Sort
        </label>
        <select
          id="sort"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="h-11 rounded-full border border-velmora-line bg-white px-4 text-sm text-velmora-ink focus:border-velmora-bronze focus:outline-none"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default SortBar
