const SortSelect = ({ options, value, onChange }) => {
  return (
    <label className="flex items-center gap-3 text-sm text-truffle">
      <span>Sort by</span>
      <select className="field-input min-w-[200px] pr-10" value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  )
}

export default SortSelect
