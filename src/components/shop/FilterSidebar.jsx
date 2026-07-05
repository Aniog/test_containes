import { categories, materials } from '@/data/products'
import { X } from 'lucide-react'

const priceBands = [
  { id: 'all', label: 'All prices', min: 0, max: Infinity },
  { id: 'under-50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-80', label: '$50 – $80', min: 50, max: 80 },
  { id: 'over-80', label: 'Over $80', min: 80, max: Infinity },
]

function FilterGroup({ title, children }) {
  return (
    <div className="py-6 border-b border-hairline last:border-0">
      <h4 className="text-[11px] uppercase tracking-widest2 font-medium text-espresso">
        {title}
      </h4>
      <div className="mt-4 space-y-2.5">{children}</div>
    </div>
  )
}

function Checkbox({ id, label, checked, onChange, count }) {
  return (
    <label
      htmlFor={id}
      className="flex items-center gap-3 text-sm text-espresso-soft hover:text-espresso cursor-pointer group"
    >
      <span
        className={`w-4 h-4 border flex items-center justify-center transition-colors ${
          checked ? 'bg-espresso border-espresso' : 'border-hairline group-hover:border-espresso'
        }`}
      >
        {checked && (
          <svg viewBox="0 0 12 12" className="w-3 h-3 text-ivory" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M2 6 L5 9 L10 3" />
          </svg>
        )}
      </span>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />
      <span className="flex-1">{label}</span>
      {typeof count === 'number' && (
        <span className="text-[11px] text-taupe">({count})</span>
      )}
    </label>
  )
}

export default function FilterSidebar({
  open,
  onClose,
  selectedCategories,
  selectedMaterials,
  selectedPrice,
  onToggleCategory,
  onToggleMaterial,
  onChangePrice,
  onClear,
  counts,
}) {
  return (
    <>
      {/* Desktop static sidebar */}
      <aside className="hidden lg:block w-64 flex-shrink-0">
        <div className="sticky top-28">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-[11px] uppercase tracking-widest2 font-medium">Filters</h3>
            <button
              type="button"
              onClick={onClear}
              className="text-[11px] uppercase tracking-widest2 text-taupe hover:text-espresso transition-colors"
            >
              Clear
            </button>
          </div>

          <FilterGroup title="Category">
            {categories.map((c) => (
              <Checkbox
                key={c.id}
                id={`cat-${c.id}`}
                label={c.label}
                checked={selectedCategories.includes(c.id)}
                onChange={() => onToggleCategory(c.id)}
                count={counts.byCategory[c.id]}
              />
            ))}
          </FilterGroup>

          <FilterGroup title="Price">
            {priceBands.map((b) => (
              <label
                key={b.id}
                className="flex items-center gap-3 text-sm text-espresso-soft hover:text-espresso cursor-pointer"
              >
                <span
                  className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    selectedPrice === b.id ? 'border-espresso' : 'border-hairline'
                  }`}
                >
                  {selectedPrice === b.id && (
                    <span className="w-2 h-2 rounded-full bg-espresso" />
                  )}
                </span>
                <input
                  type="radio"
                  name="price"
                  checked={selectedPrice === b.id}
                  onChange={() => onChangePrice(b.id)}
                  className="sr-only"
                />
                <span>{b.label}</span>
              </label>
            ))}
          </FilterGroup>

          <FilterGroup title="Material">
            {materials.map((m) => (
              <Checkbox
                key={m.id}
                id={`mat-${m.id}`}
                label={m.label}
                checked={selectedMaterials.includes(m.id)}
                onChange={() => onToggleMaterial(m.id)}
                count={counts.byMaterial[m.id]}
              />
            ))}
          </FilterGroup>
        </div>
      </aside>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-noir/50" onClick={onClose} aria-hidden />
          <div className="absolute left-0 top-0 h-full w-[88%] max-w-sm bg-ivory text-espresso flex flex-col animate-drawer-in" style={{ animationDirection: 'reverse' }}>
            <div className="flex items-center justify-between h-16 px-6 border-b border-hairline">
              <h3 className="text-[11px] uppercase tracking-widest2 font-medium">Filters</h3>
              <button type="button" aria-label="Close filters" onClick={onClose} className="p-1">
                <X className="w-5 h-5" strokeWidth={1.4} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 pb-6">
              <FilterGroup title="Category">
                {categories.map((c) => (
                  <Checkbox
                    key={c.id}
                    id={`m-cat-${c.id}`}
                    label={c.label}
                    checked={selectedCategories.includes(c.id)}
                    onChange={() => onToggleCategory(c.id)}
                    count={counts.byCategory[c.id]}
                  />
                ))}
              </FilterGroup>
              <FilterGroup title="Price">
                {priceBands.map((b) => (
                  <label
                    key={b.id}
                    className="flex items-center gap-3 text-sm text-espresso-soft hover:text-espresso cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="m-price"
                      checked={selectedPrice === b.id}
                      onChange={() => onChangePrice(b.id)}
                      className="accent-espresso"
                    />
                    <span>{b.label}</span>
                  </label>
                ))}
              </FilterGroup>
              <FilterGroup title="Material">
                {materials.map((m) => (
                  <Checkbox
                    key={m.id}
                    id={`m-mat-${m.id}`}
                    label={m.label}
                    checked={selectedMaterials.includes(m.id)}
                    onChange={() => onToggleMaterial(m.id)}
                    count={counts.byMaterial[m.id]}
                  />
                ))}
              </FilterGroup>
            </div>
            <div className="border-t border-hairline p-4 flex gap-3">
              <button type="button" onClick={onClear} className="btn-outline flex-1">
                Clear
              </button>
              <button type="button" onClick={onClose} className="btn-primary flex-1">
                Show results
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
