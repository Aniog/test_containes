const SortSelect = ({ value, onChange }) => {
  return (
    <label className="flex items-center gap-3 text-xs uppercase tracking-luxury text-velmora-muted">
      Sort by
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="min-h-11 rounded-full border border-velmora-line bg-velmora-mist px-4 text-xs uppercase tracking-luxury text-velmora-ink focus:border-velmora-gold focus:outline-none"
      >
        <option value="featured">Featured</option>
        <option value="price-asc">Price: Low to high</option>
        <option value="price-desc">Price: High to low</option>
        <option value="name-asc">Name: A to Z</option>
      </select>
    </label>
  )
}

export default SortSelect
