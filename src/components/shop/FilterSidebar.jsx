import { SlidersHorizontal, X } from 'lucide-react'

const categories = [
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'huggies', label: 'Huggies' },
  { id: 'sets', label: 'Sets' },
]

const priceRanges = [
  { id: 'under40', label: 'Under $40', range: [0, 40] },
  { id: '40to70', label: '$40 - $70', range: [40, 70] },
  { id: '70to100', label: '$70 - $100', range: [70, 100] },
  { id: 'over100', label: 'Over $100', range: [100, 999] },
]

const materials = [
  { id: 'gold', label: 'Gold' },
  { id: 'silver', label: 'Silver' },
  { id: 'rose-gold', label: 'Rose Gold' },
]

export default function FilterSidebar({
  filters,
  setFilters,
  mobileOpen,
  setMobileOpen,
}) {
  const toggleCategory = (id) => {
    setFilters((prev) => ({
      ...prev,
      category: prev.category === id ? null : id,
    }))
  }

  const togglePrice = (id) => {
    setFilters((prev) => ({
      ...prev,
      price: prev.price === id ? null : id,
    }))
  }

  const toggleMaterial = (id) => {
    setFilters((prev) => ({
      ...prev,
      material: prev.material === id ? null : id,
    }))
  }

  const clearAll = () => {
    setFilters({ category: null, price: null, material: null })
  }

  const hasFilters = filters.category || filters.price || filters.material

  const content = (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-xs uppercase tracking-[0.15em] text-muted-text">Filters</h3>
        {hasFilters && (
          <button
            onClick={clearAll}
            className="text-xs text-gold hover:text-gold-dark transition-colors"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Category */}
      <div>
        <h4 className="text-xs uppercase tracking-[0.15em] text-muted-text mb-2">Category</h4>
        <div className="space-y-1.5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => toggleCategory(cat.id)}
              className={`w-full text-left text-sm py-1.5 px-2 rounded transition-colors ${
                filters.category === cat.id
                  ? 'bg-gold/10 text-gold font-medium'
                  : 'text-muted-text hover:text-[#1A1A1A]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-warm-border" />

      {/* Price */}
      <div>
        <h4 className="text-xs uppercase tracking-[0.15em] text-muted-text mb-2">Price</h4>
        <div className="space-y-1.5">
          {priceRanges.map((pr) => (
            <button
              key={pr.id}
              onClick={() => togglePrice(pr.id)}
              className={`w-full text-left text-sm py-1.5 px-2 rounded transition-colors ${
                filters.price === pr.id
                  ? 'bg-gold/10 text-gold font-medium'
                  : 'text-muted-text hover:text-[#1A1A1A]'
              }`}
            >
              {pr.label}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-warm-border" />

      {/* Material */}
      <div>
        <h4 className="text-xs uppercase tracking-[0.15em] text-muted-text mb-2">Material</h4>
        <div className="space-y-1.5">
          {materials.map((mat) => (
            <button
              key={mat.id}
              onClick={() => toggleMaterial(mat.id)}
              className={`w-full text-left text-sm py-1.5 px-2 rounded transition-colors ${
                filters.material === mat.id
                  ? 'bg-gold/10 text-gold font-medium'
                  : 'text-muted-text hover:text-[#1A1A1A]'
              }`}
            >
              {mat.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:block w-56 flex-shrink-0">{content}</aside>

      {/* Mobile filter overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-72 bg-cream p-6 overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xs uppercase tracking-[0.15em]">Filters</h3>
              <button onClick={() => setMobileOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            {content}
          </div>
        </div>
      )}
    </>
  )
}