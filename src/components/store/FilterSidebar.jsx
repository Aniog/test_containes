import { filters } from '@/data/storeData.js'

const FilterSidebar = ({ selectedCategory, selectedMaterial, selectedPrice, onChange }) => {
  const sections = [
    { key: 'category', title: 'Category', options: filters.categories, value: selectedCategory },
    { key: 'material', title: 'Material', options: filters.materials, value: selectedMaterial },
    { key: 'price', title: 'Price', options: filters.prices, value: selectedPrice },
  ]

  return (
    <aside className="rounded-[28px] border border-velmora-sand/70 bg-white/70 p-6 shadow-velmora-soft">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl leading-none text-velmora-ink">Filter</h2>
        <button
          type="button"
          onClick={() =>
            onChange({ category: 'All', material: 'All', price: 'All' })
          }
          className="text-xs font-semibold uppercase tracking-[0.25em] text-velmora-mocha transition hover:text-velmora-gold"
        >
          Reset
        </button>
      </div>

      <div className="mt-8 space-y-8">
        {sections.map((section) => (
          <div key={section.key} className="space-y-4 border-t border-velmora-sand/70 pt-5 first:border-none first:pt-0">
            <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-velmora-ink">
              {section.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {section.options.map((option) => {
                const isSelected = section.value === option
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => onChange({ [section.key]: option })}
                    className={`rounded-full border px-4 py-2 text-sm transition duration-300 ${
                      isSelected
                        ? 'border-velmora-gold bg-velmora-gold text-velmora-ivory'
                        : 'border-velmora-sand bg-velmora-ivory text-velmora-ink hover:border-velmora-gold hover:text-velmora-gold'
                    }`}
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

export default FilterSidebar
