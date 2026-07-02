import { useState, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import products from '@/data/products'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const materials = ['All', 'Gold', 'Silver']
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { addItem } = useCart()

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)
  const [sortBy, setSortBy] = useState('featured')

  const activeCategory = searchParams.get('category') || 'All'
  const activeMaterial = searchParams.get('material') || 'All'

  const setCategory = (cat) => {
    const params = new URLSearchParams(searchParams)
    if (cat === 'All') params.delete('category')
    else params.set('category', cat)
    setSearchParams(params)
  }

  const setMaterial = (mat) => {
    const params = new URLSearchParams(searchParams)
    if (mat === 'All') params.delete('material')
    else params.set('material', mat)
    setSearchParams(params)
  }

  const filtered = useMemo(() => {
    let result = [...products]
    if (activeCategory !== 'All') {
      result = result.filter((p) => p.category === activeCategory)
    }
    if (activeMaterial !== 'All') {
      result = result.filter((p) => p.variants.includes(activeMaterial))
    }
    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }
    return result
  }, [activeCategory, activeMaterial, sortBy])

  const FilterContent = () => (
    <>
      {/* Category */}
      <div className="mb-8">
        <h4 className="text-xs tracking-widest uppercase text-velmora-ink mb-4 font-sans">Category</h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`block text-sm transition-colors font-sans ${
                activeCategory === cat
                  ? 'text-velmora-gold'
                  : 'text-velmora-stone hover:text-velmora-charcoal'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-8">
        <h4 className="text-xs tracking-widest uppercase text-velmora-ink mb-4 font-sans">Material</h4>
        <div className="space-y-2">
          {materials.map((mat) => (
            <button
              key={mat}
              onClick={() => setMaterial(mat)}
              className={`block text-sm transition-colors font-sans ${
                activeMaterial === mat
                  ? 'text-velmora-gold'
                  : 'text-velmora-stone hover:text-velmora-charcoal'
              }`}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h4 className="text-xs tracking-widest uppercase text-velmora-ink mb-4 font-sans">Price Range</h4>
        <p className="text-sm text-velmora-stone font-sans">$30 – $120</p>
      </div>
    </>
  )

  return (
    <div className="pt-20 md:pt-24 bg-velmora-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="section-subtitle mb-3">Explore</p>
          <h1 className="section-title">
            {activeCategory !== 'All' ? activeCategory : 'All Jewelry'}
          </h1>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <FilterContent />
            </div>
          </aside>

          {/* Mobile filter toggle */}
          <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="btn-primary shadow-lg flex items-center gap-2"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {(activeCategory !== 'All' || activeMaterial !== 'All') && (
                <span className="w-5 h-5 bg-white text-velmora-gold text-xs flex items-center justify-center rounded-full">
                  {(activeCategory !== 'All' ? 1 : 0) + (activeMaterial !== 'All' ? 1 : 0)}
                </span>
              )}
            </button>
          </div>

          {/* Mobile filter panel */}
          {mobileFilterOpen && (
            <div className="md:hidden fixed inset-0 z-50 bg-black/30" onClick={() => setMobileFilterOpen(false)}>
              <div
                className="absolute bottom-0 left-0 right-0 bg-velmora-cream p-6 rounded-t-xl max-h-[70vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-lg text-velmora-ink">Filters</h3>
                  <button onClick={() => setMobileFilterOpen(false)}>
                    <X className="w-5 h-5 text-velmora-stone" />
                  </button>
                </div>
                <FilterContent />
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {/* Sort + count */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm text-velmora-stone font-sans">
                {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
              </p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent text-sm text-velmora-charcoal pr-8 pl-3 py-1.5 border border-velmora-sand focus:outline-none focus:border-velmora-gold font-sans cursor-pointer"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-velmora-stone pointer-events-none" />
              </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-velmora-ink mb-4">No pieces found</p>
                <p className="text-velmora-stone text-sm mb-6">Try adjusting your filters.</p>
                <button
                  onClick={() => {
                    setCategory('All')
                    setMaterial('All')
                  }}
                  className="btn-outline"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.id}`} className="block relative overflow-hidden bg-velmora-blush aspect-square mb-4">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-velmora-stone/30 font-serif text-sm text-center px-2">
                          {product.name}
                        </span>
                      </div>

                      <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          addItem(product)
                        }}
                        className="absolute bottom-0 left-0 right-0 bg-velmora-ink text-white text-xs tracking-wider uppercase py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 font-sans"
                      >
                        Add to Bag
                      </button>

                      {product.tags.includes('new') && (
                        <span className="absolute top-3 left-3 bg-velmora-gold text-white text-[10px] px-2 py-0.5 tracking-wider uppercase">
                          New
                        </span>
                      )}
                      {product.tags.includes('gift') && (
                        <span className="absolute top-3 right-3 bg-velmora-ink text-white text-[10px] px-2 py-0.5 tracking-wider uppercase">
                          Gift
                        </span>
                      )}
                    </Link>

                    <Link to={`/product/${product.id}`} className="block">
                      <h3 className="font-serif text-sm tracking-wider uppercase text-velmora-ink group-hover:text-velmora-gold transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-3 h-3 ${i < Math.round(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-sand'}`} />
                        ))}
                        <span className="text-[10px] text-velmora-stone ml-1">({product.reviews})</span>
                      </div>
                      <p className="text-sm text-velmora-gold font-medium mt-1">${product.price}</p>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}