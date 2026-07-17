import { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, ShoppingBag, X, ChevronDown } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

const allCategories = [
  { id: 'earrings', name: 'Earrings' },
  { id: 'necklaces', name: 'Necklaces' },
  { id: 'huggies', name: 'Huggies' },
  { id: 'sets', name: 'Gift Sets' },
]

const priceRanges = [
  { id: 'under40', label: 'Under $40', min: 0, max: 40 },
  { id: '40to60', label: '$40 - $60', min: 40, max: 60 },
  { id: '60to100', label: '$60 - $100', min: 60, max: 100 },
  { id: 'over100', label: 'Over $100', min: 100, max: 9999 },
]

const materials = [
  { id: 'gold', name: 'Gold Plated' },
  { id: 'silver', name: 'Silver Tone' },
]

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { addItem } = useCart()

  const initialCategory = searchParams.get('category') || ''
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  )
  const [selectedPrices, setSelectedPrices] = useState([])
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [hoveredId, setHoveredId] = useState(null)

  const toggle = (arr, setArr, val) => {
    setArr((prev) =>
      prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedPrices([])
    setSelectedMaterials([])
    setSearchParams({})
  }

  const filtered = useMemo(() => {
    let list = [...products]

    if (selectedCategories.length > 0) {
      list = list.filter((p) => selectedCategories.includes(p.category))
    }

    if (selectedPrices.length > 0) {
      list = list.filter((p) =>
        selectedPrices.some((pr) => {
          const range = priceRanges.find((r) => r.id === pr)
          return range && p.price >= range.min && p.price <= range.max
        })
      )
    }

    if (selectedMaterials.length > 0) {
      list = list.filter((p) => selectedMaterials.includes(p.material))
    }

    switch (sort) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        list.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        list.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return list
  }, [selectedCategories, selectedPrices, selectedMaterials, sort])

  const activeFilterCount =
    selectedCategories.length + selectedPrices.length + selectedMaterials.length

  const FilterContent = () => (
    <div className="flex flex-col gap-8">
      {/* Categories */}
      <div>
        <h4 className="text-xs tracking-widest uppercase font-sans text-velmora-charcoal mb-4">
          Category
        </h4>
        <div className="flex flex-col gap-2.5">
          {allCategories.map((cat) => (
            <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
              <div
                className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                  selectedCategories.includes(cat.id)
                    ? 'bg-velmora-charcoal border-velmora-charcoal'
                    : 'border-velmora-border group-hover:border-velmora-charcoal'
                }`}
              >
                {selectedCategories.includes(cat.id) && (
                  <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>
              <input
                type="checkbox"
                className="sr-only"
                checked={selectedCategories.includes(cat.id)}
                onChange={() => toggle(selectedCategories, setSelectedCategories, cat.id)}
              />
              <span className="text-sm text-velmora-muted font-sans">{cat.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-xs tracking-widest uppercase font-sans text-velmora-charcoal mb-4">
          Price
        </h4>
        <div className="flex flex-col gap-2.5">
          {priceRanges.map((pr) => (
            <label key={pr.id} className="flex items-center gap-3 cursor-pointer group">
              <div
                className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                  selectedPrices.includes(pr.id)
                    ? 'bg-velmora-charcoal border-velmora-charcoal'
                    : 'border-velmora-border group-hover:border-velmora-charcoal'
                }`}
              >
                {selectedPrices.includes(pr.id) && (
                  <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>
              <input
                type="checkbox"
                className="sr-only"
                checked={selectedPrices.includes(pr.id)}
                onChange={() => toggle(selectedPrices, setSelectedPrices, pr.id)}
              />
              <span className="text-sm text-velmora-muted font-sans">{pr.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h4 className="text-xs tracking-widest uppercase font-sans text-velmora-charcoal mb-4">
          Material
        </h4>
        <div className="flex flex-col gap-2.5">
          {materials.map((m) => (
            <label key={m.id} className="flex items-center gap-3 cursor-pointer group">
              <div
                className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                  selectedMaterials.includes(m.id)
                    ? 'bg-velmora-charcoal border-velmora-charcoal'
                    : 'border-velmora-border group-hover:border-velmora-charcoal'
                }`}
              >
                {selectedMaterials.includes(m.id) && (
                  <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>
              <input
                type="checkbox"
                className="sr-only"
                checked={selectedMaterials.includes(m.id)}
                onChange={() => toggle(selectedMaterials, setSelectedMaterials, m.id)}
              />
              <span className="text-sm text-velmora-muted font-sans">{m.name}</span>
            </label>
          ))}
        </div>
      </div>

      {activeFilterCount > 0 && (
        <button
          onClick={clearFilters}
          className="text-xs tracking-widest uppercase text-velmora-warm-gray hover:text-velmora-charcoal transition-colors underline"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <div className="min-h-screen bg-velmora-ivory pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-14">
        {/* Header */}
        <div className="mb-10">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-charcoal mb-3">
            Shop All
          </h1>
          <p className="text-sm text-velmora-muted max-w-lg">
            Discover our curated collection of demi-fine jewelry, designed to be worn, layered, and loved every day.
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-velmora-border">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden flex items-center gap-2 text-xs tracking-widest uppercase font-sans"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filter
              {activeFilterCount > 0 && (
                <span className="w-5 h-5 bg-velmora-charcoal text-white text-[10px] rounded-full flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>
            <span className="hidden md:inline text-xs text-velmora-warm-gray font-sans">
              {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
            </span>
          </div>

          <div className="relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="appearance-none bg-transparent border border-velmora-border pl-4 pr-10 py-2 text-xs tracking-widest uppercase font-sans cursor-pointer focus:outline-none focus:border-velmora-charcoal"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-velmora-warm-gray" />
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-60 flex-shrink-0">
            <FilterContent />
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-muted mb-3">No products match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="text-xs tracking-widest uppercase text-velmora-gold underline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => {
                  const isHovered = hoveredId === product.id
                  return (
                    <div
                      key={product.id}
                      className="group"
                      onMouseEnter={() => setHoveredId(product.id)}
                      onMouseLeave={() => setHoveredId(null)}
                    >
                      <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-velmora-cream aspect-[3/4] mb-3">
                        <img
                          src={`https://images.unsplash.com/${product.images[0].query}?w=${product.images[0].width}&h=${Math.round(product.images[0].width * 4 / 3)}&fit=crop&q=80`}
                          alt={product.name}
                          className={`w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
                        />
                        <img
                          src={`https://images.unsplash.com/${product.images[1].query}?w=${product.images[1].width}&h=${Math.round(product.images[1].width * 4 / 3)}&fit=crop&q=80`}
                          alt={product.name}
                          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 pointer-events-none ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                        />
                        <button
                          onClick={(e) => {
                            e.preventDefault()
                            addItem(product, 1, 'gold')
                          }}
                          className={`absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm text-velmora-charcoal py-2.5 text-[10px] tracking-widest uppercase font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:bg-velmora-charcoal hover:text-white ${
                            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                          }`}
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          Quick Add
                        </button>
                      </Link>
                      <Link to={`/product/${product.id}`}>
                        <h3 className="font-serif text-xs md:text-sm tracking-widest uppercase text-velmora-charcoal mb-1 truncate">
                          {product.name}
                        </h3>
                        <p className="text-xs text-velmora-warm-gray font-sans">${product.price}</p>
                      </Link>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[60] flex md:hidden">
          <div
            className="flex-1 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="w-80 bg-velmora-ivory h-full shadow-xl p-6 flex flex-col overflow-y-auto">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-serif text-lg">Filters</h3>
              <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close filters">
                <X className="w-5 h-5" />
              </button>
            </div>
            <FilterContent />
          </div>
        </div>
      )}
    </div>
  )
}
