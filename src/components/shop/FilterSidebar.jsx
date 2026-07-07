import { cn } from '@/lib/utils'
import { X } from 'lucide-react'

const categories = [
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
  { id: 'sets', label: 'Gift Sets' },
]

const priceRanges = [
  { id: 'under50', label: 'Under $50', min: 0, max: 50 },
  { id: '50to80', label: '$50 – $80', min: 50, max: 80 },
  { id: '80plus', label: '$80+', min: 80, max: Infinity },
]

const materials = [
  { id: 'gold', label: '18K Gold Plated' },
  { id: 'silver', label: 'Silver Tone' },
]

export function FilterSidebar({ filters, setFilters, isOpen, onClose, className }) {
  const toggleCategory = (id) => {
    setFilters((prev) => {
      const categories = prev.category.includes(id)
        ? prev.category.filter((c) => c !== id)
        : [...prev.category, id]
      return { ...prev, category: categories }
    })
  }

  const togglePrice = (id) => {
    setFilters((prev) => {
      const prices = prev.price.includes(id)
        ? prev.price.filter((p) => p !== id)
        : [...prev.price, id]
      return { ...prev, price: prices }
    })
  }

  const toggleMaterial = (id) => {
    setFilters((prev) => {
      const materials = prev.material.includes(id)
        ? prev.material.filter((m) => m !== id)
        : [...prev.material, id]
      return { ...prev, material: materials }
    })
  }

  const activeCount = filters.category.length + filters.price.length + filters.material.length

  const FilterContent = () => (
    <>
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-serif text-2xl text-velmora-dark">Filters</h3>
        {activeCount > 0 && (
          <button
            type="button"
            onClick={() => setFilters({ category: [], price: [], material: [] })}
            className="text-xs tracking-widest uppercase text-velmora-muted hover:text-velmora-dark transition-colors"
          >
            Clear all
          </button>
        )}
        <button
          type="button"
          onClick={onClose}
          className="md:hidden p-2 -mr-2"
          aria-label="Close filters"
        >
          <X size={20} />
        </button>
      </div>

      <div className="space-y-8">
        <div>
          <h4 className="font-sans text-xs tracking-widest uppercase text-velmora-muted mb-4">Category</h4>
          <div className="space-y-3">
            {categories.map((cat) => (
              <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={filters.category.includes(cat.id)}
                    onChange={() => toggleCategory(cat.id)}
                    className="peer sr-only"
                  />
                  <div className="w-4 h-4 border border-velmora-sand peer-checked:bg-velmora-dark peer-checked:border-velmora-dark transition-colors" />
                  <svg
                    className="absolute top-0.5 left-0.5 w-3 h-3 text-velmora-cream opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-sm text-velmora-dark group-hover:text-velmora-gold-dark transition-colors">
                  {cat.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-sans text-xs tracking-widest uppercase text-velmora-muted mb-4">Price</h4>
          <div className="space-y-3">
            {priceRanges.map((range) => (
              <label key={range.id} className="flex items-center gap-3 cursor-pointer group">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={filters.price.includes(range.id)}
                    onChange={() => togglePrice(range.id)}
                    className="peer sr-only"
                  />
                  <div className="w-4 h-4 border border-velmora-sand peer-checked:bg-velmora-dark peer-checked:border-velmora-dark transition-colors" />
                  <svg
                    className="absolute top-0.5 left-0.5 w-3 h-3 text-velmora-cream opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-sm text-velmora-dark group-hover:text-velmora-gold-dark transition-colors">
                  {range.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-sans text-xs tracking-widest uppercase text-velmora-muted mb-4">Material</h4>
          <div className="space-y-3">
            {materials.map((mat) => (
              <label key={mat.id} className="flex items-center gap-3 cursor-pointer group">
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={filters.material.includes(mat.id)}
                    onChange={() => toggleMaterial(mat.id)}
                    className="peer sr-only"
                  />
                  <div className="w-4 h-4 border border-velmora-sand peer-checked:bg-velmora-dark peer-checked:border-velmora-dark transition-colors" />
                  <svg
                    className="absolute top-0.5 left-0.5 w-3 h-3 text-velmora-cream opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span className="text-sm text-velmora-dark group-hover:text-velmora-gold-dark transition-colors">
                  {mat.label}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </>
  )

  return (
    <>
      {/* Desktop sidebar */}
      <aside className={cn('hidden md:block', className)}>
        <FilterContent />
      </aside>

      {/* Mobile drawer */}
      <div
        className={cn(
          'fixed inset-0 z-[60] md:hidden transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="absolute inset-0 bg-velmora-dark/40" onClick={onClose} />
        <div
          className={cn(
            'absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-velmora-cream p-6 overflow-y-auto transition-transform duration-300',
            isOpen ? 'translate-x-0' : '-translate-x-full'
          )}
        >
          <FilterContent />
        </div>
      </div>
    </>
  )
}
