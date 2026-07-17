const SortSelect = ({ value, onChange }) => (
  <label className="inline-flex items-center gap-3 rounded-full border border-velvet-200/70 bg-cream-100 px-4 py-3 text-sm text-velvet-800 shadow-editorial">
    <span className="uppercase tracking-[0.25em] text-xs text-velvet-700">Sort</span>
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="bg-transparent text-sm text-velvet-950 outline-none"
    >
      <option value="featured">Featured</option>
      <option value="price-asc">Price: Low to High</option>
      <option value="price-desc">Price: High to Low</option>
      <option value="rating">Best Rated</option>
    </select>
  </label>
)

export default SortSelect
