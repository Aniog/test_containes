import { useState, useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Star, ShoppingBag, SlidersHorizontal, X } from 'lucide-react'
import { products } from './lib-products'
import { useCart } from './context-CartContext'

export default function ShopPage() {
  const { slug } = useParams()
  const { addItem } = useCart()
  const [sort, setSort] = useState('featured')
  const [filterOpen, setFilterOpen] = useState(false)
  const [filters, setFilters] = useState({ category: null, material: null })
  const [hoveredId, setHoveredId] = useState(null)

  const categories = [
    { id: 'earrings', name: 'Earrings' },
    { id: 'necklaces', name: 'Necklaces' },
    { id: 'huggies', name: 'Huggies' },
    { id: 'sets', name: 'Gift Sets' },
  ]

  const filtered = useMemo(() => {
    let result = [...products]

    // Collection slug filter
    if (slug === 'earrings') result = result.filter(p => p.category === 'earrings')
    else if (slug === 'necklaces') result = result.filter(p => p.category === 'necklaces')
    else if (slug === 'huggies') result = result.filter(p => p.subcategory === 'huggies')
    else if (slug === 'sets') result = result.filter(p => p.category === 'sets')

    // Sidebar filters
    if (filters.category) result = result.filter(p => p.category === filters.category)
    if (filters.material) result = result.filter(p => p.material === filters.material)

    // Sort
    if (sort === 'price-low') result.sort((a, b) => a.price - b.price)
    else if (sort === 'price-high') result.sort((a, b) => b.price - a.price)
    else if (sort === 'rating') result.sort((a, b) => b.rating - a.rating)

    return result
  }, [slug, filters, sort])

  return (
    <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pt-24 md:pt-32 pb-20">
      <div className="mb-10">
        <h1 className="text-2xl md:text-4xl font-serif text-espresso mb-2">
          {slug ? slug.charAt(0).toUpperCase() + slug.slice(1) : 'Shop All'}
        </h1>
        <p className="text-warm-muted text-sm">{filtered.length} pieces</p>
      </div>

      <div className="flex gap-8">
        {/* Desktop sidebar */}
        <aside className="hidden lg:block w-[200px] flex-shrink-0">
          <div className="sticky top-24">
            <FilterContent filters={filters} setFilters={setFilters} categories={categories} />
          </div>
        </aside>

        {/* Mobile filter button */}
        <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-30">
          <button
            onClick={() => setFilterOpen(true)}
            className="bg-espresso text-cream px-6 py-3 rounded-full text-xs tracking-wider uppercase shadow-lg flex items-center gap-2"
          >
            <SlidersHorizontal size={14} />
            Filters {Object.values(filters).filter(Boolean).length > 0 && `(${Object.values(filters).filter(Boolean).length})`}
          </button>
        </div>

        {/* Mobile filter overlay */}
        {filterOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <div className="absolute inset-0 bg-espresso/40" onClick={() => setFilterOpen(false)} />
            <div className="absolute bottom-0 left-0 right-0 bg-cream rounded-t-2xl p-6 animate-slide-up">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif text-lg">Filters</h3>
                <button onClick={() => setFilterOpen(false)}>
                  <X size={20} />
                </button>
              </div>
              <FilterContent filters={filters} setFilters={setFilters} categories={categories} />
              <button
                onClick={() => setFilterOpen(false)}
                className="w-full py-3 bg-espresso text-cream text-xs tracking-wider uppercase mt-6"
              >
                Show Results ({filtered.length})
              </button>
            </div>
          </div>
        )}
        <style>{`
          @keyframes slide-up {
            from { transform: translateY(100%); }
            to { transform: translateY(0); }
          }
          .animate-slide-up { animation: slide-up 0.3s ease-out; }
        `}</style>

        {/* Product grid */}
        <div className="flex-1">
          <div className="flex justify-end mb-8">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="text-xs tracking-wider bg-transparent border border-warm-border px-3 py-2 text-warm-gray focus:outline-none focus:border-gold"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-warm-muted">
              <p className="text-sm tracking-wide">No pieces match your filters.</p>
              <button
                onClick={() => setFilters({ category: null, material: null })}
                className="mt-4 text-xs tracking-wider uppercase text-gold hover:text-gold-dark transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {filtered.map((product) => (
                <div
                  key={product.id}
                  className="group"
                  onMouseEnter={() => setHoveredId(product.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <Link to={`/product/${product.id}`} className="block no-underline">
                    <div className="relative aspect-[3/4] bg-stone mb-4 overflow-hidden">
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-warm-muted/25">
                        <div className="w-16 h-16 rounded-full bg-gold/10 mb-2" />
                        <span className="text-[9px] tracking-wider uppercase">{product.subcategory}</span>
                      </div>

                      <div className={`absolute inset-0 bg-espresso/5 flex items-center justify-center transition-opacity duration-300 ${hoveredId === product.id ? 'opacity-100' : 'opacity-0'}`}>
                        <button
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            addItem(product)
                          }}
                          className="bg-cream/95 text-espresso px-5 py-2.5 text-[11px] tracking-wider uppercase font-medium shadow-lg hover:bg-gold hover:text-cream transition-all duration-300 flex items-center gap-2"
                        >
                          <ShoppingBag size={13} />
                          Add to Cart
                        </button>
                      </div>
                    </div>

                    <div className="px-1">
                      <p className="text-[11px] tracking-wider font-medium text-espresso leading-tight mb-1">
                        {product.name}
                      </p>
                      <div className="flex items-center gap-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={11} fill={i < Math.floor(product.rating) ? '#b8863a' : 'none'} stroke="#b8863a" />
                        ))}
                        <span className="text-[10px] text-warm-muted ml-1">({product.reviewCount})</span>
                      </div>
                      <p className="text-sm font-medium text-espresso">${product.price}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function FilterContent({ filters, setFilters, categories }) {
  return (
    <div className="space-y-8">
      <div>
        <h4 className="text-[11px] tracking-wider text-espresso font-medium mb-4">CATEGORY</h4>
        <div className="space-y-2.5">
          {categories.map((cat) => (
            <label key={cat.id} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="category"
                checked={filters.category === cat.id}
                onChange={() => setFilters({ ...filters, category: filters.category === cat.id ? null : cat.id })}
                className="sr-only"
              />
              <span className={`w-3 h-3 rounded-full border transition-colors ${filters.category === cat.id ? 'bg-gold border-gold' : 'border-warm-border group-hover:border-gold'}`} />
              <span className="text-xs text-warm-gray group-hover:text-espresso transition-colors">{cat.name}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-[11px] tracking-wider text-espresso font-medium mb-4">MATERIAL</h4>
        <div className="space-y-2.5">
          {['gold', 'silver'].map((mat) => (
            <label key={mat} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="material"
                checked={filters.material === mat}
                onChange={() => setFilters({ ...filters, material: filters.material === mat ? null : mat })}
                className="sr-only"
              />
              <span className={`w-3 h-3 rounded-full border transition-colors ${filters.material === mat ? 'bg-gold border-gold' : 'border-warm-border group-hover:border-gold'}`} />
              <span className="text-xs text-warm-gray group-hover:text-espresso transition-colors capitalize">{mat} Tone</span>
            </label>
          ))}
        </div>
      </div>

      {(filters.category || filters.material) && (
        <button
          onClick={() => setFilters({ category: null, material: null })}
          className="text-[10px] tracking-wider uppercase text-warm-muted hover:text-espresso transition-colors"
        >
          Clear All
        </button>
      )}
    </div>
  )
}
