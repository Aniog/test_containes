import React, { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Star, SlidersHorizontal, X } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import { cn } from '../lib/utils'

const allCategories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $70', min: 40, max: 70 },
  { label: 'Over $70', min: 70, max: Infinity },
]
const materials = ['18K Gold Plated']
const sortOptions = [
  { label: 'Newest', value: 'newest' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [category, setCategory] = useState(searchParams.get('category') || 'All')
  const [priceRange, setPriceRange] = useState(null)
  const [material, setMaterial] = useState(null)
  const [sort, setSort] = useState('newest')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const { addItem } = useCart()

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (category !== 'All') {
      result = result.filter((p) => p.category === category)
    }

    if (priceRange) {
      result = result.filter((p) => p.price >= priceRange.min && p.price < priceRange.max)
    }

    if (material) {
      result = result.filter((p) => p.material === material)
    }

    switch (sort) {
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
  }, [category, priceRange, material, sort])

  const clearFilters = () => {
    setCategory('All')
    setPriceRange(null)
    setMaterial(null)
    setSort('newest')
    setSearchParams({})
  }

  const hasFilters = category !== 'All' || priceRange || material

  const FiltersSidebar = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h3 className="text-xs text-[#F5F0EB] uppercase tracking-[0.15em] mb-4">Category</h3>
        <div className="space-y-2">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={cn(
                'block w-full text-left text-sm py-1.5 transition-colors',
                category === cat
                  ? 'text-[#C9A96E]'
                  : 'text-[#A0988E] hover:text-[#F5F0EB]'
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="h-px bg-[#2A2A2A]" />

      {/* Price */}
      <div>
        <h3 className="text-xs text-[#F5F0EB] uppercase tracking-[0.15em] mb-4">Price</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() => setPriceRange(priceRange?.label === range.label ? null : range)}
              className={cn(
                'block w-full text-left text-sm py-1.5 transition-colors',
                priceRange?.label === range.label
                  ? 'text-[#C9A96E]'
                  : 'text-[#A0988E] hover:text-[#F5F0EB]'
              )}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      <div className="h-px bg-[#2A2A2A]" />

      {/* Material */}
      <div>
        <h3 className="text-xs text-[#F5F0EB] uppercase tracking-[0.15em] mb-4">Material</h3>
        <div className="space-y-2">
          {materials.map((m) => (
            <button
              key={m}
              onClick={() => setMaterial(material === m ? null : m)}
              className={cn(
                'block w-full text-left text-sm py-1.5 transition-colors',
                material === m
                  ? 'text-[#C9A96E]'
                  : 'text-[#A0988E] hover:text-[#F5F0EB]'
              )}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="text-xs text-[#A0988E] hover:text-[#C9A96E] transition-colors uppercase tracking-wider"
        >
          Clear All Filters
        </button>
      )}
    </div>
  )

  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-serif text-2xl md:text-3xl text-[#F5F0EB] font-light">
              {category === 'All' ? 'All Jewelry' : category}
            </h1>
            <p className="text-sm text-[#A0988E] mt-1">{filteredProducts.length} pieces</p>
          </div>

          <div className="flex items-center gap-4">
            {/* Mobile filter trigger */}
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden flex items-center gap-1.5 text-sm text-[#A0988E] hover:text-[#C9A96E] transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>

            {/* Sort */}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-transparent text-sm text-[#A0988E] border border-[#2A2A2A] rounded-sm px-3 py-2 focus:outline-none focus:border-[#C9A96E] transition-colors cursor-pointer"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-[#111111] text-[#F5F0EB]">
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-10">
          {/* Sidebar - desktop */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FiltersSidebar />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-[#A0988E] text-sm">No products match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="mt-3 text-sm text-[#C9A96E] hover:text-[#D4B878] transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="group flex flex-col">
                    <Link
                      to={`/product/${product.id}`}
                      className="relative aspect-square bg-[#111111] rounded-sm overflow-hidden mb-3"
                    >
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                    </Link>

                    <Link to={`/product/${product.id}`} className="flex flex-col gap-1">
                      <h3 className="font-serif text-xs md:text-sm text-[#F5F0EB] tracking-[0.15em] uppercase truncate">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-1.5">
                        <Star className="w-3 h-3 text-[#C9A96E] fill-[#C9A96E]" />
                        <span className="text-[10px] text-[#A0988E]">{product.rating}</span>
                      </div>
                      <p className="text-sm text-[#C9A96E] font-medium">${product.price}</p>
                    </Link>

                    <button
                      onClick={() => addItem(product, product.variants[0])}
                      className="mt-2 w-full text-xs text-[#A0988E] border border-[#2A2A2A] py-2 rounded-sm hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors uppercase tracking-wider"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      <div
        className={cn(
          'fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden',
          mobileFiltersOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setMobileFiltersOpen(false)}
      />
      <div
        className={cn(
          'fixed top-0 left-0 bottom-0 w-72 max-w-[80vw] z-[70] bg-[#111111] border-r border-[#2A2A2A] transform transition-transform duration-300 md:hidden',
          mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-sm text-[#F5F0EB] uppercase tracking-wider">Filters</h2>
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="text-[#A0988E] hover:text-[#F5F0EB] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <FiltersSidebar />
        </div>
      </div>
    </div>
  )
}