import { useState, useEffect, useRef } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { Button } from '@/components/ui/button'

const categories = [
  { id: 'all', label: 'All' },
  { id: 'earrings', label: 'Earrings' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'sets', label: 'Sets' },
]

const materials = [
  { id: 'all', label: 'All Materials' },
  { id: 'gold', label: 'Gold' },
  { id: 'silver', label: 'Silver' },
]

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Highest Rated' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') || 'all')
  const [activeMaterial, setActiveMaterial] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)
  const [addedIds, setAddedIds] = useState(new Set())

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [activeCategory, activeMaterial, sortBy])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setActiveCategory(cat)
  }, [searchParams])

  const filtered = products
    .filter(p => activeCategory === 'all' || p.category === activeCategory)
    .filter(p => activeMaterial === 'all' || p.material === activeMaterial)
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-asc': return a.price - b.price
        case 'price-desc': return b.price - a.price
        case 'rating': return b.rating - a.rating
        default: return 0
      }
    })

  const handleAddToCart = (product) => {
    addItem(product, 'Gold', 1)
    setAddedIds(prev => new Set(prev).add(product.id))
    setTimeout(() => {
      setAddedIds(prev => {
        const next = new Set(prev)
        next.delete(product.id)
        return next
      })
    }, 1500)
  }

  const updateCategory = (cat) => {
    setActiveCategory(cat)
    setSearchParams(cat === 'all' ? {} : { category: cat })
    setMobileFilterOpen(false)
  }

  return (
    <main className="bg-white pt-20 min-h-screen" ref={containerRef}>
      {/* Page header */}
      <div className="bg-dark-50 border-b border-dark-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <h1 className="font-serif text-3xl md:text-4xl text-dark-900 text-center">Shop All</h1>
          <div className="w-12 h-px bg-gold-400 mx-auto mt-4" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {/* Mobile filter bar */}
        <div className="flex items-center justify-between lg:hidden mb-8">
          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="flex items-center gap-2 text-xs tracking-widest uppercase text-dark-600"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-transparent text-xs tracking-widest uppercase text-dark-600 pr-6 py-1 focus:outline-none cursor-pointer"
            >
              {sortOptions.map(opt => (
                <option key={opt.id} value={opt.id}>{opt.label}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 h-3 w-3 text-dark-400 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar */}
          <aside className={`lg:w-56 flex-shrink-0 ${mobileFilterOpen ? 'block' : 'hidden'} lg:block`}>
            <div className="lg:sticky lg:top-28 space-y-8">
              {/* Category */}
              <div>
                <h3 className="text-xs tracking-widest uppercase text-dark-900 font-medium mb-4">Category</h3>
                <ul className="space-y-3">
                  {categories.map(cat => (
                    <li key={cat.id}>
                      <button
                        onClick={() => updateCategory(cat.id)}
                        className={`text-sm transition-colors ${
                          activeCategory === cat.id
                            ? 'text-dark-900 font-medium'
                            : 'text-dark-400 hover:text-dark-900'
                        }`}
                      >
                        {cat.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Material */}
              <div>
                <h3 className="text-xs tracking-widest uppercase text-dark-900 font-medium mb-4">Material</h3>
                <ul className="space-y-3">
                  {materials.map(mat => (
                    <li key={mat.id}>
                      <button
                        onClick={() => setActiveMaterial(mat.id)}
                        className={`text-sm transition-colors ${
                          activeMaterial === mat.id
                            ? 'text-dark-900 font-medium'
                            : 'text-dark-400 hover:text-dark-900'
                        }`}
                      >
                        {mat.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Desktop sort */}
              <div className="hidden lg:block">
                <h3 className="text-xs tracking-widest uppercase text-dark-900 font-medium mb-4">Sort By</h3>
                <ul className="space-y-3">
                  {sortOptions.map(opt => (
                    <li key={opt.id}>
                      <button
                        onClick={() => setSortBy(opt.id)}
                        className={`text-sm transition-colors ${
                          sortBy === opt.id
                            ? 'text-dark-900 font-medium'
                            : 'text-dark-400 hover:text-dark-900'
                        }`}
                      >
                        {opt.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-dark-400 text-sm">No products found matching your filters.</p>
                <button
                  onClick={() => { setActiveCategory('all'); setActiveMaterial('all') }}
                  className="mt-4 text-xs tracking-widest uppercase text-dark-900 underline"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <>
                <p className="text-xs text-dark-400 mb-6 hidden lg:block">{filtered.length} {filtered.length === 1 ? 'product' : 'products'}</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
                  {filtered.map(product => (
                    <div key={product.id} className="group">
                      <Link to={`/product/${product.id}`} className="block">
                        <div className="aspect-[4/5] bg-dark-50 overflow-hidden relative">
                          <img
                            data-strk-img-id={product.imgId}
                            data-strk-img={`[shop-name-${product.id}]`}
                            data-strk-img-ratio="4x5"
                            data-strk-img-width="600"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                      </Link>
                      <div className="mt-4 space-y-1.5">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 fill-gold-400 text-gold-400" />
                          ))}
                          <span className="text-[10px] text-dark-400 ml-1">({product.reviews})</span>
                        </div>
                        <h3 id={`shop-name-${product.id}`} className="text-xs tracking-widest uppercase text-dark-900 font-medium">
                          <Link to={`/product/${product.id}`} className="hover:text-gold-600 transition-colors">
                            {product.name}
                          </Link>
                        </h3>
                        <p className="text-sm text-dark-900 font-medium">${product.price}</p>
                        <button
                          onClick={() => handleAddToCart(product)}
                          className={`w-full h-9 text-xs tracking-widest uppercase font-medium transition-all duration-300 ${
                            addedIds.has(product.id)
                              ? 'bg-green-600 text-white'
                              : 'bg-dark-900 text-cream-50 hover:bg-dark-800'
                          }`}
                        >
                          {addedIds.has(product.id) ? 'Added!' : 'Add to Cart'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}