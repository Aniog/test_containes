export default function SortDropdown({ value, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <label
        htmlFor="sort"
        className="text-xs font-sans uppercase tracking-ui text-taupe"
      >
        Sort
      </label>
      <select
        id="sort"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="px-3 py-2 bg-ivory border border-warm-gray text-sm text-espresso focus:border-gold focus:ring-1 focus:ring-gold"
      >
        <option value="featured">Featured</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating">Top Rated</option>
        <option value="name">Name A–Z</option>
      </select>
    </div>
  )
}
