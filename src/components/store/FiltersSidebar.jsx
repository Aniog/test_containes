import { categories } from '@/data/storeData'

const priceRanges = [
  { label: 'Under $50', value: 'under-50' },
  { label: '$50 – $80', value: '50-80' },
  { label: '$80 – $120', value: '80-120' },
]

const materials = ['18K Gold Plated', 'Gold Vermeil']

export default function FiltersSidebar({ filters, onChange }) {
  return (
    <aside className="rounded-[2rem] border border-velmora-mist/70 bg-white/80 p-6 text-velmora-ink shadow-soft">
      <div className="space-y-8">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-velmora-ink">
            Category
          </h2>
          <div className="mt-4 space-y-3">
            <label className="flex items-center gap-3 text-sm text-velmora-muted">
              <input
                type="radio"
                name="category"
                checked={!filters.category}
                onChange={() => onChange('category', '')}
              />
              All jewelry
            </label>
            {categories.map((category) => (
              <label
                key={category.slug}
                className="flex items-center gap-3 text-sm text-velmora-muted"
              >
                <input
                  type="radio"
                  name="category"
                  checked={filters.category === category.slug}
                  onChange={() => onChange('category', category.slug)}
                />
                {category.name}
              </label>
            ))}
          </div>
        </div>

        <div className="hairline-divider pt-8">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-velmora-ink">
            Price
          </h2>
          <div className="mt-4 space-y-3">
            <label className="flex items-center gap-3 text-sm text-velmora-muted">
              <input
                type="radio"
                name="price"
                checked={!filters.price}
                onChange={() => onChange('price', '')}
              />
              Any price
            </label>
            {priceRanges.map((range) => (
              <label key={range.value} className="flex items-center gap-3 text-sm text-velmora-muted">
                <input
                  type="radio"
                  name="price"
                  checked={filters.price === range.value}
                  onChange={() => onChange('price', range.value)}
                />
                {range.label}
              </label>
            ))}
          </div>
        </div>

        <div className="hairline-divider pt-8">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-velmora-ink">
            Material
          </h2>
          <div className="mt-4 space-y-3">
            <label className="flex items-center gap-3 text-sm text-velmora-muted">
              <input
                type="radio"
                name="material"
                checked={!filters.material}
                onChange={() => onChange('material', '')}
              />
              All materials
            </label>
            {materials.map((material) => (
              <label key={material} className="flex items-center gap-3 text-sm text-velmora-muted">
                <input
                  type="radio"
                  name="material"
                  checked={filters.material === material}
                  onChange={() => onChange('material', material)}
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
