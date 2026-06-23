function ShopToolbar({ count, sortKey, setSortKey }) {
  return (
    <div className="flex flex-col gap-4 rounded-[1.75rem] border border-stone-800/80 bg-stone-900/70 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-stone-300">
        Showing <span className="text-stone-100">{count}</span> refined pieces
      </p>

      <label className="flex items-center gap-3 text-sm text-stone-300">
        <span className="text-xs uppercase tracking-[0.22em] text-stone-400">Sort</span>
        <select
          className="rounded-full border border-stone-700 bg-stone-950 px-4 py-3 text-sm text-stone-100 outline-none"
          onChange={(event) => setSortKey(event.target.value)}
          value={sortKey}
        >
          <option value="featured">Featured</option>
          <option value="price-ascending">Price: Low to High</option>
          <option value="price-descending">Price: High to Low</option>
          <option value="rating">Best Rated</option>
        </select>
      </label>
    </div>
  )
}

export default ShopToolbar
