const ShopToolbar = ({ count, sort, onSort }) => (
  <div className="flex flex-col gap-4 rounded-[2rem] border border-velmora-line bg-velmora-pearl p-5 shadow-card sm:flex-row sm:items-center sm:justify-between">
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-velmora-mist">
        Collection edit
      </p>
      <p className="mt-2 text-sm text-velmora-ink">{count} pieces available</p>
    </div>
    <label className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-velmora-mist">
      Sort
      <select
        value={sort}
        onChange={(event) => onSort(event.target.value)}
        className="h-11 rounded-full border border-velmora-line bg-white/80 px-4 text-xs uppercase tracking-[0.24em] text-velmora-ink outline-none transition focus:border-velmora-gold"
      >
        <option value="featured">Featured</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating">Top Rated</option>
      </select>
    </label>
  </div>
)

export default ShopToolbar
