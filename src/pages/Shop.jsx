import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/ui/ProductCard'

const CATEGORIES = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const MATERIALS = ['All', '18K Gold Plated']
const SORT_OPTIONS = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Top Rated', value: 'rating' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = searchParams.get('category') || 'All'
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')
  const [mobileFilters, setMobileFilters] = useState(false)

  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Category filter
    if (activeCategory !== 'All') {
      result = result.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase())
    }

    // Material filter
    if (material !== 'All') {
      result = result.filter((p) => p.material === material)
    }

    // Sort
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
  }, [activeCategory, material, sort])

  const updateCategory = (cat) => {
    if (cat === 'All') {
      setSearchParams({})
    } else {
      setSearchParams({ category: cat.toLowerCase() })
    }
  }

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-5 py-8 md:py-12">
        {/* Header */}
        <div className="mb-8">
          <p className="text-xs tracking-[0.2em] uppercase text-gold-600 font-medium mb-2">The Collection</p>
          <h1 className="font-serif text-2xl md:text-3xl text-velvet-950 tracking-wide">Shop All Jewelry</h1>
        </div>

        <div className="flex gap-10">
          {/* Sidebar - desktop */}
          <aside className="hidden md:block w-48 flex-shrink-0">
            <div className="sticky top-24 space-y-8">
              {/* Categories */}
              <div>
                <h3 className="text-xs tracking-[0.12em] uppercase font-semibold text-velvet-800 mb-4">Category</h3>
                <ul className="space-y-2.5">
                  {CATEGORIES.map((cat) => (
                    <li key={cat}>
                      <button
                        onClick={() => updateCategory(cat)}
                        className={`text-sm transition-colors ${
                          activeCategory === cat
                            ? 'text-gold-600 font-semibold'
                            : 'text-velvet-600 hover:text-velvet-900'
                        }`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Material */}
              <div>
                <h3 className="text-xs tracking-[0.12em] uppercase font-semibold text-velvet-800 mb-4">Material</h3>
                <ul className="space-y-2.5">
                  {MATERIALS.map((mat) => (
                    <li key={mat}>
                      <button
                        onClick={() => setMaterial(mat)}
                        className={`text-sm transition-colors ${
                          material === mat
                            ? 'text-gold-600 font-semibold'
                            : 'text-velvet-600 hover:text-velvet-900'
                        }`}
                      >
                        {mat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Product grid area */}
          <div className="flex-1 min-w-0">
            {/* Sort + mobile filters toggle */}
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={() => setMobileFilters(true)}
                className="md:hidden flex items-center gap-2 text-xs tracking-[0.08em] uppercase font-semibold text-velvet-700"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filters
              </button>

              <div className="flex items-center gap-2 ml-auto">
                <span className="text-xs text-velvet-500 hidden sm:inline">Sort by</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="text-sm border border-velvet-200 rounded-sm px-3 py-2 bg-white text-velvet-800 focus:outline-none focus:border-velvet-400"
                >
                  {SORT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Results count */}
            <p className="text-xs text-velvet-500 mb-6">{filteredProducts.length} products</p>

            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-velvet-500">No products match the selected filters.</p>
                <button
                  onClick={() => { updateCategory('All'); setMaterial('All') }}
                  className="mt-4 text-xs tracking-[0.1em] uppercase text-gold-600 underline"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter drawer */}
      {mobileFilters && (
        <>
          <div
            className="fixed inset-0 z-[60] bg-black/30 md:hidden"
            onClick={() => setMobileFilters(false)}
          />
          <div className="fixed bottom-0 left-0 right-0 z-[70] bg-white rounded-t-2xl shadow-xl animate-slide-in-right md:hidden p-6 max-h-[70vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-lg tracking-wider">Filters</h3>
              <button onClick={() => setMobileFilters(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xs tracking-[0.12em] uppercase font-semibold text-velvet-800 mb-3">Category</h4>
                <div className="flex flex-wrap gap-2">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => updateCategory(cat)}
                      className={`px-4 py-2 text-xs border rounded-sm transition-all ${
                        activeCategory === cat
                          ? 'border-velvet-900 bg-velvet-900 text-white'
                          : 'border-velvet-200 text-velvet-600 hover:border-velvet-400'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs tracking-[0.12em] uppercase font-semibold text-velvet-800 mb-3">Material</h4>
                <div className="flex flex-wrap gap-2">
                  {MATERIALS.map((mat) => (
                    <button
                      key={mat}
                      onClick={() => setMaterial(mat)}
                      className={`px-4 py-2 text-xs border rounded-sm transition-all ${
                        material === mat
                          ? 'border-velvet-900 bg-velvet-900 text-white'
                          : 'border-velvet-200 text-velvet-600 hover:border-velvet-400'
                      }`}
                    >
                      {mat}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setMobileFilters(false)}
                className="w-full py-3 bg-velvet-900 text-white text-xs tracking-[0.1em] uppercase font-semibold rounded-sm mt-4"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
