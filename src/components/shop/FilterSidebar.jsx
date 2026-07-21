import { SlidersHorizontal } from 'lucide-react'
import { categories, materials } from '../../data/products'

const priceRanges = [
  { label: 'Under $50', value: 'under-50' },
  { label: '$50–$80', value: '50-80' },
  { label: '$80–$120', value: '80-120' },
]

export default function FilterSidebar({ filters, onChange, onClear }) {
  const toggleListValue = (key, value) => {
    const exists = filters[key].includes(value)
    onChange({
      ...filters,
      [key]: exists ? filters[key].filter((item) => item !== value) : [...filters[key], value],
    })
  }

  return (
    <aside className="bg-velmora-cream p-5 text-velmora-espresso shadow-soft lg:sticky lg:top-28 lg:self-start">
      <div className="mb-6 flex items-center justify-between border-b border-velmora-mist pb-4">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="h-4 w-4 text-velmora-champagne" />
          <h2 className="text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-espresso">Filter</h2>
        </div>
        <button type="button" onClick={onClear} className="text-xs font-bold uppercase tracking-[0.18em] text-velmora-umber transition hover:text-velmora-oxblood">
          Clear
        </button>
      </div>

      <div className="grid gap-7">
        <fieldset>
          <legend className="mb-3 font-serif text-2xl text-velmora-espresso">Category</legend>
          <div className="grid gap-3">
            {categories.map((category) => (
              <label key={category} className="flex cursor-pointer items-center gap-3 text-sm font-semibold text-velmora-umber">
                <input
                  type="checkbox"
                  checked={filters.categories.includes(category)}
                  onChange={() => toggleListValue('categories', category)}
                  className="h-4 w-4 accent-velmora-oxblood"
                />
                {category}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-3 font-serif text-2xl text-velmora-espresso">Price</legend>
          <div className="grid gap-3">
            {priceRanges.map((range) => (
              <label key={range.value} className="flex cursor-pointer items-center gap-3 text-sm font-semibold text-velmora-umber">
                <input
                  type="checkbox"
                  checked={filters.prices.includes(range.value)}
                  onChange={() => toggleListValue('prices', range.value)}
                  className="h-4 w-4 accent-velmora-oxblood"
                />
                {range.label}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-3 font-serif text-2xl text-velmora-espresso">Material</legend>
          <div className="grid gap-3">
            {materials.map((material) => (
              <label key={material} className="flex cursor-pointer items-center gap-3 text-sm font-semibold text-velmora-umber">
                <input
                  type="checkbox"
                  checked={filters.materials.includes(material)}
                  onChange={() => toggleListValue('materials', material)}
                  className="h-4 w-4 accent-velmora-oxblood"
                />
                {material}
              </label>
            ))}
          </div>
        </fieldset>
      </div>
    </aside>
  )
}
