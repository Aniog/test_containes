import Button from '@/components/ui/Button'

const filterOptions = {
  category: ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets'],
  material: ['All', '18K Gold Plated', 'Gold-Plated Sterling Silver', 'Gold-Plated Brass'],
  price: ['All', 'Under $50', '$50 to $80', '$80+'],
}

const FilterSidebar = ({ filters, onChange, onReset }) => (
  <aside className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm shadow-stone-200/40">
    <div className="flex items-center justify-between">
      <h2 className="text-xs uppercase tracking-[0.3em] text-stone-500">Filters</h2>
      <button
        type="button"
        onClick={onReset}
        className="text-xs uppercase tracking-[0.28em] text-stone-500 transition-colors hover:text-stone-900"
      >
        Reset
      </button>
    </div>

    <div className="mt-6 space-y-7">
      {Object.entries(filterOptions).map(([group, options]) => (
        <div key={group}>
          <h3 className="text-xs uppercase tracking-[0.28em] text-stone-900">
            {group}
          </h3>
          <div className="mt-4 flex flex-wrap gap-3 lg:flex-col lg:items-start">
            {options.map((option) => {
              const active = filters[group] === option
              return (
                <Button
                  key={option}
                  type="button"
                  variant={active ? 'primary' : 'outline'}
                  size="sm"
                  className="tracking-[0.22em]"
                  onClick={() => onChange(group, option)}
                >
                  {option}
                </Button>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  </aside>
)

export default FilterSidebar
