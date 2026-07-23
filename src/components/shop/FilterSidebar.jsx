import React from 'react'

const FilterGroup = ({ title, options, value, onChange }) => (
  <div className="border-b border-velmora-line pb-6">
    <p className="text-xs uppercase tracking-[0.28em] text-velmora-gold">{title}</p>
    <div className="mt-4 space-y-3">
      {options.map((option) => (
        <label key={option} className="flex cursor-pointer items-center justify-between gap-3 text-sm text-velmora-ink">
          <span>{option}</span>
          <input
            type="radio"
            name={title}
            checked={value === option}
            onChange={() => onChange(option)}
            className="h-4 w-4 border-velmora-line text-velmora-accent focus:ring-velmora-gold"
          />
        </label>
      ))}
    </div>
  </div>
)

const FilterSidebar = ({ filters, selected, onChange }) => (
  <aside className="rounded-[2rem] border border-velmora-line bg-white/60 p-6 shadow-soft lg:sticky lg:top-28 lg:h-fit">
    <div className="flex items-center justify-between border-b border-velmora-line pb-5">
      <div>
        <p className="text-xs uppercase tracking-[0.32em] text-velmora-gold">Refine</p>
        <h2 className="mt-2 text-2xl">Shop filters</h2>
      </div>
      <button
        type="button"
        onClick={() =>
          onChange({
            category: 'All',
            price: 'All',
            material: 'All',
          })
        }
        className="text-xs uppercase tracking-[0.24em] text-velmora-muted transition-colors hover:text-velmora-ink"
      >
        Reset
      </button>
    </div>

    <div className="mt-6 space-y-6">
      <FilterGroup
        title="Category"
        options={filters.categories}
        value={selected.category}
        onChange={(category) => onChange({ ...selected, category })}
      />
      <FilterGroup
        title="Price"
        options={filters.price}
        value={selected.price}
        onChange={(price) => onChange({ ...selected, price })}
      />
      <FilterGroup
        title="Material"
        options={filters.materials}
        value={selected.material}
        onChange={(material) => onChange({ ...selected, material })}
      />
    </div>
  </aside>
)

export default FilterSidebar
