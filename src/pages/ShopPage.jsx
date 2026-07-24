import { useState, useMemo } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { SlidersHorizontal, ChevronDown } from 'lucide-react'
import { products, categories } from '@/data/products'
import { useCart } from '@/hooks/useCart'
import { cn } from '@/lib/utils'

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryParam = searchParams.get('category') || 'all'
  const [sort, setSort] = useState('featured')
  const [priceRange, setPriceRange] = useState('all')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const { addItem } = useCart()

  const filtered = useMemo(() => {
    let result = [...products]

    if (categoryParam !== 'all') {
      result = result.filter(p => p.category === categoryParam)
    }

    if (priceRange === 'under-50') {
      result = result.filter(p => p.price < 50)
    } else if (priceRange === '50-80') {
      result = result.filter(p => p.price >= 50 && p.price <= 80)
    } else if (priceRange === 'over-80') {
      result = result.filter(p => p.price > 80)
    }

    if (sort === 'price-asc') {
      result.sort((a, b) => a.price - b.price)
    } else if (sort === 'price-desc') {
      result.sort((a, b) => b.price - a.price)
    } else if (sort === 'rating') {
      result.sort((a, b) => b.rating - a.rating)
    }

    return result
  }, [categoryParam, sort, priceRange])

  const setCategory = (cat) => {
    if (cat === 'all') {
      searchParams.delete('category')
    } else {
      searchParams.set('category', cat)
    }
    setSearchParams(searchParams)
  }

  return (
    <div className="bg-parchment min-h-screen">
      <div className="container-narrow pt-28 pb-16">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-serif text-3xl md:text-4xl text-stone-900 mb-2">
            {categoryParam === 'all' ? 'All Jewelry' : categories.find(c => c.id === categoryParam)?.name || 'Shop'}
          </h1>
          <p className="text-stone-500 text-sm">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar filters - desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-sm border border-stone-200 p-6 sticky top-28">
              <h3 className="text-xs tracking-widest uppercase text-stone-500 mb-4">Category</h3>
              <ul className="space-y-2 mb-8">
                <li>
                  <button
                    onClick={() => setCategory('all')}
                    className={cn(
                      'text-sm w-full text-left transition-colors',
                      categoryParam === 'all' ? 'text-stone-900 font-medium' : 'text-stone-500 hover:text-stone-900'
                    )}
                  >
                    All
                  </button>
                </li>
                {categories.map(cat => (
                  <li key={cat.id}>
                    <button
                      onClick={() => setCategory(cat.id)}
                      className={cn(
                        'text-sm w-full text-left transition-colors',
                        categoryParam === cat.id ? 'text-stone-900 font-medium' : 'text-stone-500 hover:text-stone-900'
                      )}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>

              <h3 className="text-xs tracking-widest uppercase text-stone-500 mb-4">Price</h3>
              <ul className="space-y-2">
                {[
                  { value: 'all', label: 'All Prices' },
                  { value: 'under-50', label: 'Under $50' },
                  { value: '50-80', label: '$50 – $80' },
                  { value: 'over-80', label: 'Over $80' },
                ].map(opt => (
                  <li key={opt.value}>
                    <button
                      onClick={() => setPriceRange(opt.value)}
                      className={cn(
                        'text-sm w-full text-left transition-colors',
                        priceRange === opt.value ? 'text-stone-900 font-medium' : 'text-stone-500 hover:text-stone-900'
                      )}
                    >
                      {opt.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                className="lg:hidden flex items-center gap-2 text-sm text-stone-600"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>

              <div className="ml-auto flex items-center gap-2">
                <label htmlFor="sort" className="text-xs text-stone-500">Sort by</label>
                <div className="relative">
                  <select
                    id="sort"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="appearance-none bg-white border border-stone-200 text-stone-700 text-sm rounded-sm pl-3 pr-8 py-2 focus:outline-none focus:border-gold"
                  >
                    {sortOptions.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-stone-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Mobile filters */}
            {mobileFiltersOpen && (
              <div className="lg:hidden bg-white rounded-sm border border-stone-200 p-4 mb-6">
                <h3 className="text-xs tracking-widest uppercase text-stone-500 mb-3">Category</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  <button
                    onClick={() => { setCategory('all'); setMobileFiltersOpen(false) }}
                    className={cn('px-3 py-1.5 text-xs rounded-sm border transition-colors', categoryParam === 'all' ? 'bg-stone-900 text-white border-stone-900' : 'border-stone-200 text-stone-600')}
                  >
                    All
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => { setCategory(cat.id); setMobileFiltersOpen(false) }}
                      className={cn('px-3 py-1.5 text-xs rounded-sm border transition-colors', categoryParam === cat.id ? 'bg-stone-900 text-white border-stone-900' : 'border-stone-200 text-stone-600')}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-stone-500 text-sm">No pieces match your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {filtered.map(product => (
                  <div
                    key={product.id}
                    className="group bg-white rounded-sm border border-stone-200 overflow-hidden transition-shadow duration-300 hover:shadow-md"
                  >
                    <Link to={`/product/${product.id}`} className="block relative aspect-[3/4] bg-stone-100 overflow-hidden">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {product.badge && (
                        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-sm text-stone-700">
                          {product.badge}
                        </span>
                      )}
                    </Link>
                    <div className="p-4">
                      <Link to={`/product/${product.id}`}>
                        <h3 className="font-serif text-sm tracking-wide uppercase text-stone-900 mb-1 group-hover:text-gold transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="text-stone-500 text-xs mb-3 line-clamp-1">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-stone-900">${product.price}</span>
                        <button
                          onClick={() => addItem(product)}
                          className="text-[11px] tracking-widest uppercase px-3 py-2 rounded-sm bg-stone-100 text-stone-600 hover:bg-gold hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
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
