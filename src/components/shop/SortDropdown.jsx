const SortDropdown = ({ value, onChange }) => {
  return (
    <label className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-velmora-mist">
      Sort by
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 rounded-full border border-velmora-mist/20 bg-white/80 px-4 text-sm uppercase tracking-[0.16em] text-velmora-ink outline-none focus:border-velmora-bronze"
      >
        <option value="featured">Featured</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating">Top Rated</option>
        <option value="name">Name</option>
      </select>
    </label>
  )
}

export default SortDropdown
