import { filters } from '@/data/storefront'

const FilterGroup = ({ title, items, activeValue, onChange }) => {
  return (
    <div className="border-b border-velmora-line/80 pb-5">
      <h3 className="text-xs uppercase tracking-[0.28em] text-velmora-stone">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => {
          const active = item === activeValue

          return (
            <button
              key={item}
              type="button"
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition-all duration-300 ${active ? 'border-velmora-gold bg-velmora-gold text-velmora-ink' : 'border-velmora-line bg-white text-velmora-ink hover:border-velmora-gold'}`}
              onClick={() => onChange(item)}
            >
              {item}
            </button>
          )
        })}
      </div>
    </div>
  )
}

const FilterSidebar = ({ selectedCategory, selectedMaterial, selectedPrice, onCategoryChange, onMaterialChange, onPriceChange }) => {
  return (
    <aside className="rounded-[2rem] border border-velmora-line/80 bg-white/75 p-6 shadow-velmora-soft lg:sticky lg:top-28 lg:h-fit">
      <div className="space-y-5">
        <div className="border-b border-velmora-line/80 pb-5">
          <p className="text-xs uppercase tracking-[0.28em] text-velmora-gold">Refine the edit</p>
          <h2 className="mt-3 font-serif text-4xl text-velmora-ink">Filters</h2>
        </div>
        <FilterGroup
          activeValue={selectedCategory}
          items={filters.category}
          title="Category"
          onChange={onCategoryChange}
        />
        <FilterGroup
          activeValue={selectedPrice}
          items={filters.price}
          title="Price"
          onChange={onPriceChange}
        />
        <FilterGroup
          activeValue={selectedMaterial}
          items={filters.material}
          title="Material"
          onChange={onMaterialChange}
        />
      </div>
    </aside>
  )
}

export default FilterSidebar
