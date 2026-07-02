import { sortOptions } from '@/data/catalog'

const SortSelect = ({ value, onChange }) => {
  return (
    <label className="inline-flex items-center gap-3 rounded-full border border-stone-300 bg-white px-5 py-3 text-sm text-stone-700 shadow-sm">
      <span className="text-xs font-medium uppercase tracking-[0.24em] text-stone-500">
        Sort
      </span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="bg-transparent text-sm text-stone-900 outline-none"
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  )
}

export default SortSelect
