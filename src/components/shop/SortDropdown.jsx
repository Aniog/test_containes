const SortDropdown = ({ value, onChange }) => (
  <label className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-stone-500">
    Sort
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="h-11 rounded-full border border-stone-300 bg-white px-4 text-xs uppercase tracking-[0.24em] text-stone-900 outline-none"
    >
      <option value="featured">Featured</option>
      <option value="price-asc">Price: Low to High</option>
      <option value="price-desc">Price: High to Low</option>
      <option value="rating-desc">Top Rated</option>
    </select>
  </label>
)

export default SortDropdown
