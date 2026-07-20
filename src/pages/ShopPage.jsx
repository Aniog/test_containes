import { useState, useEffect, useMemo, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories } from '@/data/products'
import ProductCard from '@/components/ProductCard'

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || ''

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [priceRange, setPriceRange] = useState('all')
  const [material, setMaterial] = useState('all')
  const [sort, setSort] = useState('featured')
  const [sortOpen, setSortOpen] = useState(false)

  const gridRef = useRef(null)

  useEffect(() => {
    const cat = searchParams.get('category') || ''
    setSelectedCategory(cat)
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    let result = [...products]
    if (selectedCategory) {
      result = result.filter((p) => p.category === selectedCategory)
    }
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number)
      result = result.filter((p) => p.price >= min && (max ? p.price <= max : true))
    }
    if (material !== 'all') {
      result = result.filter((p) => p.material === material)
    }
    if (sort === 'price-asc') {
      result.sort((a, b) => a.price - b.price)
    } else if (sort === 'price-desc') {
      result.sort((a, b) => b.price - a.price)
    } else if (sort === 'rating') {
      result.sort((a, b) => b.rating - a.rating)
    }
    return result
  }, [selectedCategory, priceRange, material, sort])

  useEffect(() => {
    if (gridRef.current) {
      const frame = requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, gridRef.current)
      })
      return () => cancelAnimationFrame(frame)
    }
  }, [filteredProducts])

  const clearFilters = () => {
    setSelectedCategory('')
    setPriceRange('all')
    setMaterial('all')
    setSearchParams({})
  }

  const activeFiltersCount = [
    selectedCategory,
    priceRange !== 'all',
    material !== 'all',
  ].filter(Boolean).length

  const priceOptions = [
    { value: 'all', label: 'All Prices' },
    { value: '30-50', label: '$30 – $50' },
    { value: '50-80', label: '$50 – $80' },
    { value: '80-120', label: '$80 – $120' },
  ]

  const materialOptions = [
    { value: 'all', label: 'All Materials' },
    { value: '18k-gold-plated', label: '18K Gold Plated' },
  ]

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'rating', label: 'Top Rated' },
  ]

  return (
    <div className="min-h-screen bg-velmora-cream pt-20">
      {/* Header */}
      <div className="border-b border-velmora-stone/30 bg-velmora-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10 md:py-14">
          <p className="mb-2 text-[11px] uppercase tracking-[0.3em] text-velmora-gold">
            Collection
          </p>
          <h1 className="font-serif text-3xl md:text-5xl tracking-wide">
            Shop All
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 border border-velmora-stone/50 px-4 py-2.5 text-[11px] uppercase tracking-widest text-velmora-ink lg:hidden"
          >
            <SlidersHorizontal size={14} />
            Filters
            {activeFiltersCount > 0 && (
              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-velmora-gold text-[9px] text-white">
                {activeFiltersCount}
              </span>
            )}
          </button>
          <span className="hidden text-sm text-velmora-warmgray lg:block">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </span>
          <div className="relative">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-2 border border-velmora-stone/50 px-4 py-2.5 text-[11px] uppercase tracking-widest text-velmora-ink"
            >
              {sortOptions.find((o) => o.value === sort)?.label}
              <ChevronDown size={12} className={`transition-transform ${sortOpen ? 'rotate-180' : ''}`} />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full z-20 mt-1 w-48 border border-velmora-stone/40 bg-velmora-cream shadow-lg">
                {sortOptions.map((o) => (
                  <button
                    key={o.value}
                    onClick={() => {
                      setSort(o.value)
                      setSortOpen(false)
                    }}
                    className={`block w-full px-4 py-3 text-left text-xs uppercase tracking-wider transition-colors hover:bg-velmora-sand ${
                      sort === o.value ? 'text-velmora-gold' : 'text-velmora-warmgray'
                    }`}
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex gap-10">
          {/* Desktop Sidebar */}
          <aside className="hidden w-56 flex-shrink-0 lg:block">
            <div className="sticky top-24">
              <div className="mb-8">
                <h3 className="mb-4 text-xs uppercase tracking-widest text-velmora-ink font-medium">
                  Category
                </h3>
                <div className="space-y-2.5">
                  <button
                    onClick={() => {
                      setSelectedCategory('')
                      setSearchParams({})
                    }}
                    className={`block text-sm transition-colors ${
                      !selectedCategory ? 'text-velmora-gold font-medium' : 'text-velmora-warmgray hover:text-velmora-ink'
                    }`}
                  >
                    All
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => {
                        setSelectedCategory(cat.id)
                        setSearchParams({ category: cat.id })
                      }}
                      className={`block text-sm transition-colors ${
                        selectedCategory === cat.id ? 'text-velmora-gold font-medium' : 'text-velmora-warmgray hover:text-velmora-ink'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-xs uppercase tracking-widest text-velmora-ink font-medium">
                  Price
                </h3>
                <div className="space-y-2.5">
                  {priceOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setPriceRange(opt.value)}
                      className={`block text-sm transition-colors ${
                        priceRange === opt.value ? 'text-velmora-gold font-medium' : 'text-velmora-warmgray hover:text-velmora-ink'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="mb-4 text-xs uppercase tracking-widest text-velmora-ink font-medium">
                  Material
                </h3>
                <div className="space-y-2.5">
                  {materialOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setMaterial(opt.value)}
                      className={`block text-sm transition-colors ${
                        material === opt.value ? 'text-velmora-gold font-medium' : 'text-velmora-warmgray hover:text-velmora-ink'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {activeFiltersCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-xs uppercase tracking-widest text-velmora-warmgray underline underline-offset-4 transition-colors hover:text-velmora-ink"
                >
                  Clear All Filters
                </button>
              )}
            </div>
          </aside>

          {/* Grid */}
          <div ref={gridRef} className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <p className="font-serif text-xl tracking-wide text-velmora-warmgray mb-2">
                  No pieces match your filters
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-4 text-xs uppercase tracking-widest text-velmora-gold underline underline-offset-4"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      <div
        className={`fixed inset-0 z-[60] bg-velmora-ink/40 backdrop-blur-sm transition-opacity lg:hidden ${
          mobileFiltersOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setMobileFiltersOpen(false)}
      />
      <div
        className={`fixed bottom-0 left-0 right-0 z-[70] max-h-[80vh] overflow-y-auto bg-velmora-cream transition-transform duration-500 ease-velmora lg:hidden ${
          mobileFiltersOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-velmora-stone/30 px-6 py-4">
          <h2 className="font-serif text-lg tracking-widest uppercase">Filters</h2>
          <button onClick={() => setMobileFiltersOpen(false)} aria-label="Close">
            <X size={20} />
          </button>
        </div>
        <div className="px-6 py-6 space-y-8">
          <div>
            <h3 className="mb-3 text-xs uppercase tracking-widest font-medium">Category</h3>
            <div className="space-y-2.5">
              <button
                onClick={() => { setSelectedCategory(''); setSearchParams({}) }}
                className={`block text-sm ${!selectedCategory ? 'text-velmora-gold font-medium' : 'text-velmora-warmgray'}`}
              >All</button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => { setSelectedCategory(cat.id); setSearchParams({ category: cat.id }) }}
                  className={`block text-sm ${selectedCategory === cat.id ? 'text-velmora-gold font-medium' : 'text-velmora-warmgray'}`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-xs uppercase tracking-widest font-medium">Price</h3>
            <div className="space-y-2.5">
              {priceOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setPriceRange(opt.value)}
                  className={`block text-sm ${priceRange === opt.value ? 'text-velmora-gold font-medium' : 'text-velmora-warmgray'}`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-3 text-xs uppercase tracking-widest font-medium">Material</h3>
            <div className="space-y-2.5">
              {materialOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setMaterial(opt.value)}
                  className={`block text-sm ${material === opt.value ? 'text-velmora-gold font-medium' : 'text-velmora-warmgray'}`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-3 pt-2">
            <button
              onClick={clearFilters}
              className="flex-1 border border-velmora-ink py-3 text-xs uppercase tracking-widest text-velmora-ink"
            >
              Clear
            </button>
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="flex-1 bg-velmora-ink py-3 text-xs uppercase tracking-widest text-white"
            >
              Show {filteredProducts.length} Results
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
