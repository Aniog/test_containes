const SortDropdown = ({ sortValue, setSortValue }) => {
  return (
    <div className="flex items-center gap-3">
      <label
        htmlFor="sort-products"
        className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-500"
      >
        Sort
      </label>
      <select
        id="sort-products"
        className="h-12 rounded-full border border-stone-300 bg-stone-50 px-5 text-sm text-stone-900 focus:border-stone-950 focus:outline-none"
        value={sortValue}
        onChange={(event) => setSortValue(event.target.value)}
      >
        <option value="featured">Featured</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="rating">Top Rated</option>
      </select>
    </div>
  )
}

export default SortDropdown
