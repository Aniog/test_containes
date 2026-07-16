const SortDropdown = ({ value, onChange }) => {
  return (
    <label className="flex items-center gap-3 rounded-full border border-velmora-line bg-white px-4 py-3 text-sm text-velmora-stone">
      <span className="uppercase tracking-[0.2em]">Sort</span>
      <select
        className="bg-transparent text-sm font-medium text-velmora-ink focus:outline-none"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <option value="featured">Featured</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating">Top Rated</option>
      </select>
    </label>
  )
}

export default SortDropdown
