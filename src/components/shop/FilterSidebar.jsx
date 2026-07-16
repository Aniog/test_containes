import { categories } from '@/lib/products'
import { cn } from '@/lib/utils'

const priceBands = ['Under $50', '$50 to $80', '$80 to $120']
const materials = ['18K Gold Plated', 'Silver Tone', 'Crystal Accent']

export default function FilterSidebar({ filters, setFilters }) {
  const toggleListFilter = (key, value) => {
    setFilters((currentFilters) => {
      const currentValues = currentFilters[key]
      const nextValues = currentValues.includes(value)
        ? currentValues.filter((entry) => entry !== value)
        : [...currentValues, value]

      return {
        ...currentFilters,
        [key]: nextValues,
      }
    })
  }

  const sections = [
    { key: 'categories', label: 'Category', options: categories.map((item) => item.name) },
    { key: 'prices', label: 'Price', options: priceBands },
    { key: 'materials', label: 'Material', options: materials },
  ]

  return (
    <aside className="rounded-[2rem] border border-velmora-sand/50 bg-white p-6 shadow-soft">
      <div className="mb-6 flex items-center justify-between border-b border-velmora-sand/50 pb-4">
        <h2 className="font-heading text-3xl text-stone-900">Filters</h2>
        <button
          type="button"
          className="text-xs uppercase tracking-[0.26em] text-stone-500 transition hover:text-stone-900"
          onClick={() => setFilters({ categories: [], prices: [], materials: [] })}
        >
          Reset
        </button>
      </div>

      <div className="space-y-8">
        {sections.map((section) => (
          <div key={section.key}>
            <h3 className="text-xs uppercase tracking-[0.28em] text-stone-500">{section.label}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {section.options.map((option) => {
                const active = filters[section.key].includes(option)
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => toggleListFilter(section.key, option)}
                    className={cn(
                      'rounded-full border px-4 py-2 text-xs uppercase tracking-[0.24em] transition',
                      active
                        ? 'border-velmora-ink bg-velmora-ink text-velmora-ivory'
                        : 'border-velmora-sand/60 bg-velmora-ivory text-stone-600 hover:border-stone-300 hover:text-stone-900',
                    )}
                  >
                    {option}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}
