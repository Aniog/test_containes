import { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Star, SlidersHorizontal, X, ShoppingBag } from 'lucide-react'
import products from '@/data/products'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const categories = ['all', 'earrings', 'necklaces', 'sets']
const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $70', min: 40, max: 70 },
  { label: '$70 – $100', min: 70, max: 100 },
  { label: '$100+', min: 100, max: Infinity },
]
const materials = ['18K Gold', 'Silver']
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
]

export default function Shop() {
  const [searchParams] = useSearchParams()
  const categoryParam = searchParams.get('category')
  const { addItem } = useCart()

  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all')
  const [selectedPrice, setSelectedPrice] = useState(null)
  const [selectedMaterial, setSelectedMaterial] = useState(null)
  const [sort, setSort] = useState('featured')
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false)
  const [hoveredId, setHoveredId] = useState(null)

  const filtered = useMemo(() => {
    let result = [...products]

    if (selectedCategory !== 'all') {
      result = result.filter((p) => p.category === selectedCategory)
    }
    if (selectedPrice) {
      result = result.filter((p) => p.price >= selectedPrice.min && p.price < selectedPrice.max)
    }
    if (selectedMaterial) {
      result = result.filter((p) => p.variants.includes(selectedMaterial))
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
  }, [selectedCategory, selectedPrice, selectedMaterial, sort])

  const clearFilters = () => {
    setSelectedCategory('all')
    setSelectedPrice(null)
    setSelectedMaterial(null)
    setSort('featured')
  }

  const hasFilters = selectedCategory !== 'all' || selectedPrice || selectedMaterial

  const FilterContent = () => (
    <>
      {/* Categories */}
      <div className="mb-8">
        <h3 className="font-sans text-xs font-semibold tracking-[0.08em] uppercase text-[#2D2A24] mb-3">
          Category
        </h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat}
              className={cn(
                'block w-full text-left font-sans text-sm py-1 transition-colors',
                selectedCategory === cat ? 'text-[#C69C6D] font-medium' : 'text-[#8C867C] hover:text-[#2D2A24]'
              )}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat === 'all' ? 'All' : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h3 className="font-sans text-xs font-semibold tracking-[0.08em] uppercase text-[#2D2A24] mb-3">
          Price
        </h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.label}
              className={cn(
                'block w-full text-left font-sans text-sm py-1 transition-colors',
                selectedPrice?.label === range.label ? 'text-[#C69C6D] font-medium' : 'text-[#8C867C] hover:text-[#2D2A24]'
              )}
              onClick={() => setSelectedPrice(selectedPrice?.label === range.label ? null : range)}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Material */}
      <div className="mb-8">
        <h3 className="font-sans text-xs font-semibold tracking-[0.08em] uppercase text-[#2D2A24] mb-3">
          Material
        </h3>
        <div className="space-y-2">
          {materials.map((mat) => (
            <button
              key={mat}
              className={cn(
                'block w-full text-left font-sans text-sm py-1 transition-colors',
                selectedMaterial === mat ? 'text-[#C69C6D] font-medium' : 'text-[#8C867C] hover:text-[#2D2A24]'
              )}
              onClick={() => setSelectedMaterial(selectedMaterial === mat ? null : mat)}
            >
              {mat}
            </button>
          ))}
        </div>
      </div>
    </>
  )

  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Header */}
        <div className="py-6 md:py-10">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#2D2A24]">
            Shop
          </h1>
          <p className="font-sans text-sm text-[#8C867C] mt-2">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex gap-8 md:gap-12">
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <FilterContent />
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="font-sans text-xs text-[#C69C6D] hover:text-[#A67C4E] transition-colors mt-4"
              >
                Clear all filters
              </button>
            )}
          </aside>

          {/* Mobile filter button */}
          <div className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
            <button
              className="bg-[#2D2A24] text-[#F8F4EE] px-6 py-3 font-sans text-xs tracking-[0.08em] uppercase shadow-lg flex items-center gap-2"
              onClick={() => setMobileFilterOpen(true)}
            >
              <SlidersHorizontal size={14} />
              Filters
              {hasFilters && (
                <span className="bg-[#C69C6D] text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center">!</span>
              )}
            </button>
          </div>

          {/* Main content */}
          <div className="flex-1">
            {/* Sort bar */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                {hasFilters && (
                  <button
                    onClick={clearFilters}
                    className="font-sans text-xs text-[#8C867C] hover:text-[#C69C6D] transition-colors"
                  >
                    Clear
                  </button>
                )}
              </div>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="font-sans text-sm text-[#2D2A24] bg-transparent border border-[#E5DDD3] px-3 py-2 outline-none focus:border-[#C69C6D] cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Product grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="font-sans text-sm text-[#8C867C]">No pieces match your filters.</p>
                <button onClick={clearFilters} className="font-sans text-sm text-[#C69C6D] mt-2 hover:underline">
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group block"
                    onMouseEnter={() => setHoveredId(product.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <div className="relative aspect-[3/4] bg-[#F0E9DF] overflow-hidden mb-3">
                      <img
                        src={hoveredId === product.id && product.hoverImage ? product.hoverImage : product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                      />
                      {product.badge && (
                        <span className="absolute top-3 left-3 bg-[#C69C6D] text-white font-sans text-[9px] tracking-[0.08em] uppercase px-2 py-1">
                          {product.badge}
                        </span>
                      )}
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          addItem({
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            image: product.images[0],
                            variant: product.variants[0],
                          })
                        }}
                        className="absolute bottom-0 left-0 right-0 bg-[#2D2A24] text-[#F8F4EE] py-2.5 font-sans text-[10px] tracking-[0.08em] uppercase flex items-center justify-center gap-1.5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                      >
                        <ShoppingBag size={13} />
                        Add to Cart
                      </button>
                    </div>
                    <h3 className="font-serif text-xs md:text-sm font-semibold text-[#2D2A24] uppercase tracking-[0.1em] truncate">
                      {product.name}
                    </h3>
                    <p className="font-sans text-sm font-medium text-[#2D2A24] mt-1">
                      ${product.price}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFilterOpen(false)} />
          <div className="absolute bottom-0 left-0 right-0 bg-[#F8F4EE] max-h-[80vh] overflow-y-auto rounded-t-lg">
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#E5DDD3] sticky top-0 bg-[#F8F4EE] z-10">
              <h3 className="font-sans text-sm font-semibold tracking-[0.08em] uppercase text-[#2D2A24]">Filters</h3>
              <button onClick={() => setMobileFilterOpen(false)}>
                <X size={20} />
              </button>
            </div>
            <div className="px-5 py-6">
              <FilterContent />
              <button
                onClick={clearFilters}
                className="w-full bg-[#2D2A24] text-[#F8F4EE] py-3 font-sans text-xs tracking-[0.08em] uppercase mt-4"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}