export function SortSelect({ value, onChange }) {
  return (
    <div className="flex items-center gap-3">
      <label htmlFor="sort" className="text-sm text-warmGray">
        Sort by
      </label>
      <select
        id="sort"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-taupe bg-cream px-3 py-2 text-sm focus:border-gold focus:outline-none"
      >
        <option value="featured">Featured</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating">Top Rated</option>
      </select>
    </div>
  );
}
