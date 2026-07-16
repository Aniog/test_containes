export default function SortSelect({ value, onChange }) {
  return (
    <label className="flex items-center gap-3 text-sm text-stone-600">
      <span className="text-xs uppercase tracking-[0.28em] text-stone-500">Sort</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-11 rounded-full border border-velmora-sand/60 bg-white px-4 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-velmora-gold/70"
      >
        <option value="featured">Featured</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="rating">Top Rated</option>
      </select>
    </label>
  )
}
