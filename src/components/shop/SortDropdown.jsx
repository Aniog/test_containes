function SortDropdown({ value, onChange }) {
  return (
    <label className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-stone-500">
      Sort
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 rounded-full border border-stone-300 bg-white px-4 text-xs uppercase tracking-[0.25em] text-stone-900 outline-none"
      >
        <option value="featured">Featured</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="rating">Top Rated</option>
      </select>
    </label>
  )
}

export default SortDropdown
