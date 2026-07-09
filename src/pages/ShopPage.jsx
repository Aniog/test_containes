import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { products, categories } from '@/data/products'
import { StarRating } from '@/components/ui/Shared'
import { useCart } from '@/context/CartContext'
import { SlidersHorizontal, X } from 'lucide-react'
import { toast } from 'sonner'

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { addItem } = useCart()
  const [mobileFiltersOpen, setMobileFiltersOpen] = React.useState(false)

  const categoryFilter = searchParams.get('category') || 'all'
  const priceFilter = searchParams.get('price') || 'all'
  const materialFilter = searchParams.get('material') || 'all'
  const sort = searchParams.get('sort') || 'featured'

  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams)
    if (value === 'all') {
      newParams.delete(key)
    } else {
      newParams.set(key, value)
    }
    setSearchParams(newParams)
  }

  let filtered = [...products]

  if (categoryFilter !== 'all') {
    filtered = filtered.filter((p) => p.category === categoryFilter)
  }
  if (materialFilter !== 'all') {
    filtered = filtered.filter((p) => p.material === materialFilter)
  }
  if (priceFilter === 'under50') {
    filtered = filtered.filter((p) => p.price < 50)
  } else if (priceFilter === '50to100') {
    filtered = filtered.filter((p) => p.price >= 50 && p.price <= 100)
  } else if (priceFilter === 'over100') {
    filtered = filtered.filter((p) => p.price > 100)
  }

  if (sort === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price)
  } else if (sort === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price)
  } else if (sort === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating)
  }

  const FilterContent = () => (
    <>
      {/* Category */}
      <div className="mb-6">
        <h3 className="text-xs tracking-widest uppercase text-velmora-muted mb-3">Category</h3>
        <div className="space-y-2">
          {[{ value: 'all', label: 'All' }, ...categories.map((c) => ({ value: c.id, label: c.name }))].map((cat) => (
            <label key={cat.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                checked={categoryFilter === cat.value}
                onChange={() => updateFilter('category', cat.value)}
                className="accent-velmora-gold"
              />
              <span className="text-sm text-velmora-base">{cat.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-6">
        <h3 className="text-xs tracking-widest uppercase text-velmora-muted mb-3">Price</h3>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All Prices' },
            { value: 'under50', label: 'Under $50' },
            { value: '50to100', label: '$50 - $100' },
            { value: 'over100', label: 'Over $100' },
          ].map((price) => (
            <label key={price.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="price"
                checked={priceFilter === price.value}
                onChange={() => updateFilter('price', price.value)}
                className="accent-velmora-gold"
              />
              <span className="text-sm text-velmora-base">{price.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-6">
        <h3 className="text-xs tracking-widest uppercase text-velmora-muted mb-3">Material</h3>
        <div className="space-y-2">
          {[
            { value: 'all', label: 'All' },
            { value: 'gold', label: 'Gold' },
            { value: 'silver', label: 'Silver' },
          ].map((mat) => (
            <label key={mat.value} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="material"
                checked={materialFilter === mat.value}
                onChange={() => updateFilter('material', mat.value)}
                className="accent-velmora-gold"
              />
              <span className="text-sm text-velmora-base">{mat.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear filters */}
      {(categoryFilter !== 'all' || priceFilter !== 'all' || materialFilter !== 'all') && (
        <button
          onClick={() => {
            updateFilter('category', 'all')
            updateFilter('price', 'all')
            updateFilter('material', 'all')
          }}
          className="text-xs text-velmora-muted hover:text-velmora-base underline transition-colors"
        >
          Clear all filters
        </button>
      )}
    </>
  )

  return (
    <main className="bg-velmora-cream min-h-screen pt-20 md:pt-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="font-serif text-3xl md:text-4xl text-velmora-base tracking-wide uppercase mb-2">
          Shop All
        </h1>
        <p className="text-sm text-velmora-muted">{filtered.length} pieces</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-28">
              <FilterContent />
            </div>
          </aside>

          {/* Mobile filter button */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="flex items-center gap-2 px-4 py-2 border border-velmora-warm-dark text-sm text-velmora-base"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
          </div>

          {/* Mobile filter drawer */}
          {mobileFiltersOpen && (
            <>
              <div
                className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                onClick={() => setMobileFiltersOpen(false)}
              />
              <div className="fixed left-0 top-0 bottom-0 w-72 bg-velmora-cream z-50 p-6 overflow-y-auto lg:hidden">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-serif text-xl">Filters</h2>
                  <button onClick={() => setMobileFiltersOpen(false)}>
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <FilterContent />
              </div>
            </>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {/* Sort */}
            <div className="flex justify-end mb-6">
              <select
                value={sort}
                onChange={(e) => updateFilter('sort', e.target.value)}
                className="text-sm border border-velmora-warm-dark bg-transparent px-3 py-2 text-velmora-base focus:outline-none focus:border-velmora-gold"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <p className="font-serif text-xl text-velmora-muted mb-2">No pieces found</p>
                <p className="text-sm text-velmora-muted-light">Try adjusting your filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

function ProductCard({ product }) {
  const { addItem } = useCart()
  const [hovered, setHovered] = React.useState(false)

  return (
    <div
      className="group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden bg-velmora-warm mb-3">
          <img
            src={hovered ? product.images[1] : product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={(e) => {
                e.preventDefault()
                addItem(product, product.variants[0])
                toast.success(`${product.name} added to cart`)
              }}
              className="w-full py-2.5 bg-velmora-base/90 text-white text-[10px] tracking-widest uppercase hover:bg-velmora-gold transition-colors backdrop-blur-sm"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
      <Link to={`/product/${product.id}`} className="block">
        <h3 className="font-serif text-sm tracking-wide uppercase text-velmora-base group-hover:text-velmora-gold transition-colors">
          {product.name}
        </h3>
        <StarRating rating={product.rating} count={product.reviews} />
        <p className="text-sm font-medium mt-1">${product.price}</p>
      </Link>
    </div>
  )
}
