const ShopToolbar = ({ count, sort, sortOptions, onSortChange }) => (
  <div className="flex flex-col gap-4 rounded-[2rem] border border-stone-200/10 bg-stone-900/50 p-5 sm:flex-row sm:items-center sm:justify-between">
    <div>
      <p className="text-xs uppercase tracking-[0.28em] text-stone-400">Collection edit</p>
      <p className="mt-2 text-sm text-stone-200">{count} pieces curated for everyday gold layering.</p>
    </div>
    <label className="flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-stone-400">
      Sort
      <select
        value={sort}
        onChange={(event) => onSortChange(event.target.value)}
        className="rounded-full border border-stone-200/10 bg-stone-950 px-4 py-3 text-xs uppercase tracking-[0.24em] text-stone-100 focus:outline-none"
      >
        {sortOptions.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  </div>
)

export default ShopToolbar
