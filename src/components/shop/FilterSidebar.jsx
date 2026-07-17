import { categoryFilters, materialFilters, priceFilters } from '@/data/store'
import { cn } from '@/lib/utils'

const FilterSidebar = ({ filters, setFilters }) => {
  return (
    <aside className="rounded-[2rem] border border-velmora-sand/70 bg-velmora-mist p-6 shadow-soft">
      <div className="space-y-7">
        <div>
          <h2 className="text-xs uppercase tracking-[0.35em] text-velmora-gold">
            Category
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {categoryFilters.map((category) => (
              <button
                key={category}
                type="button"
                className={cn(
                  'rounded-full border px-4 py-2 text-xs uppercase tracking-[0.28em] transition-colors',
                  filters.category === category
                    ? 'border-velmora-gold bg-velmora-gold text-velmora-ink'
                    : 'border-velmora-ink/10 bg-velmora-pearl text-velmora-ink/75 hover:border-velmora-gold hover:text-velmora-gold',
                )}
                onClick={() => setFilters((current) => ({ ...current, category }))}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xs uppercase tracking-[0.35em] text-velmora-gold">
            Price
          </h2>
          <div className="mt-4 space-y-2">
            {priceFilters.map((option) => (
              <label key={option.id} className="flex items-center gap-3 text-sm text-velmora-ink/75">
                <input
                  type="radio"
                  name="price-range"
                  className="h-4 w-4 border-velmora-sand text-velmora-gold focus:ring-velmora-gold"
                  checked={filters.price === option.value}
                  onChange={() =>
                    setFilters((current) => ({ ...current, price: option.value }))
                  }
                />
                {option.label}
              </label>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xs uppercase tracking-[0.35em] text-velmora-gold">
            Material
          </h2>
          <div className="mt-4 space-y-2">
            {materialFilters.map((material) => (
              <label key={material} className="flex items-center gap-3 text-sm text-velmora-ink/75">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-velmora-sand text-velmora-gold focus:ring-velmora-gold"
                  checked={filters.materials.includes(material)}
                  onChange={() =>
                    setFilters((current) => ({
                      ...current,
                      materials: current.materials.includes(material)
                        ? current.materials.filter((item) => item !== material)
                        : [...current.materials, material],
                    }))
                  }
                />
                {material}
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}

export default FilterSidebar
