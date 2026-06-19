import React, { useState, useMemo, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { ShoppingBag, Star, SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { products, categories } from '../data/products'
import { useCart } from '../context/CartContext'

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product, product.variants[0])
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-[#f5f0eb] mb-4">
        <img
          src={hovered ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-[#1a1a1a] text-[#faf8f5] text-[10px] tracking-widest uppercase px-3 py-1.5">
            {product.badge}
          </span>
        )}
        <div
          className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="w-full btn-primary text-xs py-3"
          >
            <ShoppingBag className="w-4 h-4 mr-2" />
            Add to Cart
          </button>
        </div>
      </div>
      <h3 className="product-name text-sm text-[#1a1a1a] mb-1">{product.name}</h3>
      <div className="flex items-center gap-1 mb-1">
        <Star className="w-3 h-3 fill-[#c9a96e] text-[#c9a96e]" />
        <span className="text-xs text-[#6b6560]">{product.rating}</span>
      </div>
      <p className="text-sm text-[#1a1a1a]">${product.price}</p>
    </Link>
  )
}

export default function CollectionPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const { addItem } = useCart()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const initialCategory = searchParams.get('category') || ''
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedMaterial, setSelectedMaterial] = useState('')
  const [priceRange, setPriceRange] = useState([0, 200])
  const [sortBy, setSortBy] = useState('featured')

  useEffect(() => {
    setSelectedCategory(initialCategory)
  }, [initialCategory])

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory)
    }
    if (selectedMaterial) {
      result = result.filter((p) => p.material.toLowerCase().includes(selectedMaterial.toLowerCase()))
    }
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    )

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
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      default:
        break
    }

    return result
  }, [selectedCategory, selectedMaterial, priceRange, sortBy])

  const clearFilters = () => {
    setSelectedCategory('')
    setSelectedMaterial('')
    setPriceRange([0, 200])
    setSearchParams({})
  }

  const hasActiveFilters = selectedCategory || selectedMaterial || priceRange[0] > 0 || priceRange[1] < 200

  const FilterContent = () => (
    <>
      {/* Category */}
      <div className="mb-8">
        <h3 className="text-xs tracking-widest uppercase text-[#1a1a1a] mb-4">Category</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="category"
              checked={selectedCategory === ''}
              onChange={() => setSelectedCategory('')}
              className="accent-[#c9a96e]"
            />
            <span className="text-sm text-[#6b6560]">All</span>
          </label>
          {categories.map((cat) => (
            <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === cat.id}
                onChange={() => setSelectedCategory(cat.id)}
                className="accent-[#c9a96e]"
              />
              <span className="text-sm text-[#6b6560] capitalize">{cat.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-8">
        <h3 className="text-xs tracking-widest uppercase text-[#1a1a1a] mb-4">Material</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="material"
              checked={selectedMaterial === ''}
              onChange={() => setSelectedMaterial('')}
              className="accent-[#c9a96e]"
            />
            <span className="text-sm text-[#6b6560]">All</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="material"
              checked={selectedMaterial === '18k gold plated'}
              onChange={() => setSelectedMaterial('18k gold plated')}
              className="accent-[#c9a96e]"
            />
            <span className="text-sm text-[#6b6560]">18K Gold Plated</span>
          </label>
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h3 className="text-xs tracking-widest uppercase text-[#1a1a1a] mb-4">Price</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <input
              type="number"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
              className="w-20 px-2 py-1.5 border border-[#e8e2db] text-sm text-[#1a1a1a] focus:outline-none focus:border-[#c9a96e]"
              min={0}
              max={priceRange[1]}
            />
            <span className="text-[#6b6560]">to</span>
            <input
              type="number"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
              className="w-20 px-2 py-1.5 border border-[#e8e2db] text-sm text-[#1a1a1a] focus:outline-none focus:border-[#c9a96e]"
              min={priceRange[0]}
              max={200}
            />
          </div>
        </div>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearFilters}
          className="text-xs tracking-widest uppercase text-[#c9a96e] hover:text-[#b8944f] transition-colors"
        >
          Clear All Filters
        </button>
      )}
    </>
  )

  return (
    <main className="pt-20 md:pt-24">
      {/* Page header */}
      <section className="bg-[#f5f0eb] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs tracking-[0.3em] uppercase text-[#c9a96e] mb-3 font-sans">
            Collection
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a]">
            {selectedCategory
              ? categories.find((c) => c.id === selectedCategory)?.name || 'Shop'
              : 'All Jewelry'}
          </h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-28">
              <FilterContent />
            </div>
          </aside>

          {/* Mobile filter button */}
          <div className="lg:hidden mb-4">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#1a1a1a] border border-[#e8e2db] px-4 py-2.5"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
          </div>

          {/* Mobile filter drawer */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-[60] lg:hidden">
              <div
                className="absolute inset-0 bg-black/40"
                onClick={() => setMobileFiltersOpen(false)}
              />
              <div className="absolute left-0 top-0 bottom-0 w-80 max-w-full bg-[#faf8f5] p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-sm tracking-widest uppercase text-[#1a1a1a]">Filters</h2>
                  <button
                    onClick={() => setMobileFiltersOpen(false)}
                    aria-label="Close filters"
                  >
                    <X className="w-5 h-5 text-[#1a1a1a]" />
                  </button>
                </div>
                <FilterContent />
              </div>
            </div>
          )}

          {/* Product grid */}
          <div className="flex-1">
            {/* Sort & count bar */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-[#6b6560]">
                {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
              </p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent border border-[#e8e2db] text-sm text-[#1a1a1a] pl-3 pr-8 py-2 focus:outline-none focus:border-[#c9a96e] cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                  <option value="name">Name A-Z</option>
                </select>
                <ChevronDown className="w-4 h-4 text-[#6b6560] absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Grid */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-serif text-xl text-[#6b6560] mb-4">No pieces found</p>
                <button
                  onClick={clearFilters}
                  className="btn-accent-outline inline-block"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
