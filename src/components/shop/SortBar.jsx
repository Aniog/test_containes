import { SlidersHorizontal } from 'lucide-react'

export default function SortBar({ sort, onSortChange, resultCount }) {
  return (
    <div className="flex flex-col gap-4 rounded-[30px] border border-velmora-ink/10 bg-white/70 p-5 shadow-card sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3 text-velmora-cocoa">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-velmora-sand/60">
          <SlidersHorizontal className="h-4 w-4" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-luxe text-velmora-truffle">Collection View</p>
          <p className="text-sm text-velmora-cocoa">{resultCount} pieces available</p>
        </div>
      </div>

      <label className="flex items-center gap-3 text-xs uppercase tracking-luxe text-velmora-truffle">
        Sort
        <select
          value={sort}
          onChange={(event) => onSortChange(event.target.value)}
          className="h-11 rounded-full border border-velmora-ink/10 bg-velmora-parchment px-4 text-sm normal-case tracking-normal text-velmora-ink focus:outline-none"
        >
          <option value="featured">Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </label>
    </div>
  )
}
