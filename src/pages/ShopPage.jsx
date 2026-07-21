import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ShoppingBag, SlidersHorizontal, X } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const priceRanges = [
  { label: 'Under $40', min: 0, max: 40 },
  { label: '$40 – $60', min: 40, max: 60 },
  { label: '$60 – $80', min: 60, max: 80 },
  { label: '$80+', min: 80, max: Infinity },
]
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Rated', value: 'rating' },
]

export default function ShopPage() {
  const { addItem } = useCart()
  const [category, setCategory] = useState('All')
  const [priceRange, setPriceRange] = useState(null)
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [addedId, setAddedId] = useState(null)

  const filtered = useMemo(() => {
    let result = [...products]

    if (category !== 'All') {
      result = result.filter((p) => p.category === category)
    }

    if (priceRange) {
      result = result.filter(
        (p) => p.price >= priceRange.min && p.price < priceRange.max
      )
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
    }

    return result
  }, [category, priceRange, sort])

  const handleAdd = (product) => {
    addItem(product, 'Gold', 1)
    setAddedId(product.id)
    setTimeout(() => setAddedId(null), 1500)
  }

  const FiltersContent = () => (
    <div className="space-y-8">
      {/* Category */}
      <div>
        <h4 className="text-[11px] uppercase tracking-[0.15em] text-ink/60 mb-4">
          Category
        </h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`block w-full text-left text-sm py-1.5 transition-colors ${
                category === cat
                  ? 'text-ink font-medium'
                  : 'text-ink/50 hover:text-ink/70'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
        <h4 className="text-[11px] uppercase tracking-[0.15em] text-ink/60 mb-4">
          Price
        </h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <button
              key={range.label}
              onClick={() =>
                setPriceRange(
                  priceRange?.label === range.label ? null : range
                )
              }
              className={`block w-full text-left text-sm py-1.5 transition-colors ${
                priceRange?.label === range.label
                  ? 'text-ink font-medium'
                  : 'text-ink/50 hover:text-ink/70'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <main className="pt-20 md:pt-24">
      {/* Page header */}
      <div className="border-b border-velvet-200">
        <div className="max-w-7xl mx-auto px-6 py-8 md:py-12">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-velvet-500 mb-2 font-sans">
                Our Collection
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-ink">
                Shop All
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-ink/50 hidden sm:block">
                {filtered.length} products
              </span>
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="md:hidden flex items-center gap-1 text-sm text-ink/70 hover:text-ink transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 md:py-12">
        <div className="flex gap-10">
          {/* Desktop sidebar */}
          <aside className="hidden md:block w-56 flex-shrink-0">
            <FiltersContent />
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {/* Sort bar */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-velvet-200">
              <span className="text-xs text-ink/50">{filtered.length} products</span>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="text-[11px] uppercase tracking-[0.1em] text-ink/70 bg-transparent border-none focus:outline-none cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-ink/50 text-sm">No products match your filters.</p>
                <button
                  onClick={() => {
                    setCategory('All')
                    setPriceRange(null)
                  }}
                  className="mt-4 text-xs uppercase tracking-[0.1em] text-ink underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map((product) => (
                  <div key={product.id} className="group">
                    <Link to={`/product/${product.id}`} className="block">
                      <div className="aspect-square bg-velvet-100 overflow-hidden relative">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                      </div>
                    </Link>

                    <div className="mt-3 px-1">
                      <Link to={`/product/${product.id}`}>
                        <h3 className="font-serif text-xs md:text-sm font-medium uppercase tracking-[0.12em] text-ink group-hover:text-velvet-700 transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="font-serif text-sm italic text-velvet-600 mt-0.5">
                        ${product.price}
                      </p>
                    </div>

                    <button
                      onClick={() => handleAdd(product)}
                      className={`mt-3 w-full flex items-center justify-center gap-2 text-[11px] uppercase tracking-[0.12em] py-2.5 transition-all duration-300 ${
                        addedId === product.id
                          ? 'bg-ink/80 text-cream'
                          : 'bg-ink text-cream opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0'
                      }`}
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      {addedId === product.id ? '✓ Added' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          mobileFiltersOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/30"
          onClick={() => setMobileFiltersOpen(false)}
        />
        <div
          className={`absolute top-0 left-0 h-full w-72 bg-cream shadow-2xl transition-transform duration-300 ${
            mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-sm uppercase tracking-[0.12em]">Filters</h3>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <FiltersContent />
          </div>
        </div>
      </div>
    </main>
  )
}