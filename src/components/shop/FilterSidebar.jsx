import { categories, materials, priceBands } from '@/data/products'

const groupClassName = 'space-y-3 rounded-[24px] border border-velvet/10 bg-white p-5 shadow-soft'

const FilterSidebar = ({ filters, onFilterChange, sortValue, onSortChange }) => {
  return (
    <aside className="space-y-5 text-velvet">
      <div className={groupClassName}>
        <label className="space-y-2 text-sm">
          <span className="text-xs uppercase tracking-eyebrow text-velvet/45">Sort by</span>
          <select
            value={sortValue}
            onChange={(event) => onSortChange(event.target.value)}
            className="w-full rounded-full border border-velvet/10 bg-ivory px-4 py-3 text-sm text-velvet focus:border-gold focus:outline-none"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating-desc">Top Rated</option>
          </select>
        </label>
      </div>

      {[{ title: 'Category', key: 'category', options: categories }, { title: 'Price', key: 'price', options: priceBands }, { title: 'Material', key: 'material', options: materials }].map((group) => (
        <div key={group.key} className={groupClassName}>
          <h3 className="text-xs uppercase tracking-eyebrow text-velvet/45">{group.title}</h3>
          <div className="space-y-3">
            {group.options.map((option) => (
              <label key={option} className="flex items-center gap-3 text-sm text-velvet/70">
                <input
                  type="radio"
                  name={group.key}
                  checked={filters[group.key] === option}
                  onChange={() => onFilterChange(group.key, option)}
                  className="h-4 w-4 border-velvet/20 text-gold focus:ring-gold"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
    </aside>
  )
}

export default FilterSidebar
