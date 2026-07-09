import { X } from 'lucide-react'

const categoryOptions = [
  { value: '', label: 'All' },
  { value: 'earrings', label: 'Earrings' },
  { value: 'necklaces', label: 'Necklaces' },
  { value: 'huggies', label: 'Huggies' },
]

const priceRanges = [
  { value: '', label: 'All Prices' },
  { value: '0-40', label: 'Under $40' },
  { value: '40-60', label: '$40 – $60' },
  { value: '60-100', label: '$60 – $100' },
  { value: '100-200', label: '$100+' },
]

const materialOptions = [
  { value: '', label: 'All Materials' },
  { value: '18K Gold Plated', label: '18K Gold Plated' },
]

export default function FilterSidebar({ filters, setFilters, mobileOpen, setMobileOpen }) {
  const update = (key, value) => setFilters((prev) => ({ ...prev, [key]: value }))

  const filterContent = (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-xs tracking-super-wide uppercase text-velvet-50 font-semibold mb-4">Category</h4>
        <div className="flex flex-col gap-2">
          {categoryOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => update('category', opt.value)}
              className={`text-left text-sm transition-colors duration-200 ${
                filters.category === opt.value
                  ? 'text-gold-400 font-medium'
                  : 'text-velvet-400 hover:text-velvet-200'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs tracking-super-wide uppercase text-velvet-50 font-semibold mb-4">Price</h4>
        <div className="flex flex-col gap-2">
          {priceRanges.map((opt) => (
            <button
              key={opt.value}
              onClick={() => update('price', opt.value)}
              className={`text-left text-sm transition-colors duration-200 ${
                filters.price === opt.value
                  ? 'text-gold-400 font-medium'
                  : 'text-velvet-400 hover:text-velvet-200'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs tracking-super-wide uppercase text-velvet-50 font-semibold mb-4">Material</h4>
        <div className="flex flex-col gap-2">
          {materialOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => update('material', opt.value)}
              className={`text-left text-sm transition-colors duration-200 ${
                filters.material === opt.value
                  ? 'text-gold-400 font-medium'
                  : 'text-velvet-400 hover:text-velvet-200'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Clear filters */}
      {(filters.category || filters.price || filters.material) && (
        <button
          onClick={() => setFilters({ category: '', price: '', material: '', sort: 'featured' })}
          className="text-xs tracking-wider uppercase text-velvet-500 hover:text-gold-400 transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-56 flex-shrink-0">{filterContent}</aside>

      {/* Mobile filter overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setMobileOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-72 bg-velvet-950 border-l border-velvet-800 p-6 overflow-y-auto animate-slide-down">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-sm tracking-super-wide uppercase text-velvet-50 font-semibold">Filters</h3>
              <button onClick={() => setMobileOpen(false)} className="text-velvet-400 hover:text-velvet-200">
                <X className="w-5 h-5" />
              </button>
            </div>
            {filterContent}
          </div>
        </div>
      )}
    </>
  )
}