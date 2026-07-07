import { useState, useEffect, useRef, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, categories, formatPrice, getCategoryName } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 — $75', min: 50, max: 75 },
  { label: '$75 — $100', min: 75, max: 100 },
  { label: 'Over $100', min: 100, max: 9999 },
]

const materials = ['Gold-Plated', 'Sterling Silver']

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'all'

  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedPrices, setSelectedPrices] = useState([])
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [sortBy, setSortBy] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const cat = searchParams.get('category') || 'all'
    setSelectedCategory(cat)
  }, [searchParams])

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [selectedCategory, selectedPrices, selectedMaterials, sortBy])

  const togglePrice = (label) => {
    setSelectedPrices((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    )
  }

  const toggleMaterial = (label) => {
    setSelectedMaterials((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    )
  }

  const filtered = useMemo(() => {
    let list = [...products]

    if (selectedCategory !== 'all') {
      list = list.filter((p) => p.category === selectedCategory)
    }

    if (selectedPrices.length > 0) {
      list = list.filter((p) =>
        selectedPrices.some((label) => {
          const range = priceRanges.find((r) => r.label === label)
          return range && p.price >= range.min && p.price <= range.max
        })
      )
    }

    if (selectedMaterials.length > 0) {
      list = list.filter((p) =>
        selectedMaterials.some((m) =>
          p.material.toLowerCase().includes(m.toLowerCase().replace('-', ' '))
        )
      )
    }

    switch (sortBy) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        list.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        list.sort((a, b) => b.rating - a.rating)
        break
      default:
        break
    }

    return list
  }, [selectedCategory, selectedPrices, selectedMaterials, sortBy])

  const clearFilters = () => {
    setSelectedCategory('all')
    setSelectedPrices([])
    setSelectedMaterials([])
    setSearchParams({})
  }

  const activeFilterCount =
    (selectedCategory !== 'all' ? 1 : 0) +
    selectedPrices.length +
    selectedMaterials.length

  return (
    <div ref={containerRef} className="bg-warm-white pb-20">
      {/* Page header */}
      <div className="border-b border-line bg-champagne/30 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.25em] text-stone">
            Velmora Collection
          </p>
          <h1 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
            {getCategoryName(selectedCategory)}
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
        {/* Toolbar */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="flex items-center gap-2 border border-line px-4 py-2 text-xs font-semibold uppercase tracking-widest text-ink hover:border-ink lg:hidden"
          >
            <SlidersHorizontal size={14} />
            Filters
            {activeFilterCount > 0 && (
              <span className="ml-1 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[9px] text-white">
                {activeFilterCount}
              </span>
            )}
          </button>

          <p className="text-sm text-stone">
            {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
          </p>

          <div className="flex items-center gap-3">
            <label
              htmlFor="sort"
              className="hidden text-xs uppercase tracking-widest text-stone sm:block"
            >
              Sort by
            </label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-line bg-transparent px-3 py-2 text-sm text-ink focus:border-gold focus:outline-none"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-12">
          {/* Sidebar filters desktop */}
          <aside className="hidden w-64 flex-shrink-0 lg:block">
            <div className="sticky top-24 space-y-8">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-ink">
                  Category
                </h3>
                <ul className="mt-4 space-y-3">
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedCategory('all')
                        setSearchParams({})
                      }}
                      className={`text-sm transition-colors ${
                        selectedCategory === 'all'
                          ? 'font-semibold text-ink'
                          : 'text-stone hover:text-ink'
                      }`}
                    >
                      Shop All
                    </button>
                  </li>
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedCategory(cat.slug)
                          setSearchParams({ category: cat.slug })
                        }}
                        className={`text-sm transition-colors ${
                          selectedCategory === cat.slug
                            ? 'font-semibold text-ink'
                            : 'text-stone hover:text-ink'
                        }`}
                      >
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-ink">
                  Price
                </h3>
                <ul className="mt-4 space-y-3">
                  {priceRanges.map((range) => (
                    <li key={range.label}>
                      <label className="flex cursor-pointer items-center gap-3 text-sm text-stone hover:text-ink">
                        <input
                          type="checkbox"
                          checked={selectedPrices.includes(range.label)}
                          onChange={() => togglePrice(range.label)}
                          className="h-4 w-4 accent-gold"
                        />
                        {range.label}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-ink">
                  Material
                </h3>
                <ul className="mt-4 space-y-3">
                  {materials.map((material) => (
                    <li key={material}>
                      <label className="flex cursor-pointer items-center gap-3 text-sm text-stone hover:text-ink">
                        <input
                          type="checkbox"
                          checked={selectedMaterials.includes(material)}
                          onChange={() => toggleMaterial(material)}
                          className="h-4 w-4 accent-gold"
                        />
                        {material}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              {activeFilterCount > 0 && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-xs uppercase tracking-widest text-gold hover:text-gold-hover"
                >
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Product grid */}
          <div className="flex-1">
            {filtered.length === 0 ? (
              <div className="py-20 text-center">
                <p className="font-serif text-2xl text-ink">No pieces found</p>
                <p className="mt-2 text-stone">
                  Try adjusting your filters to discover more treasures.
                </p>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-6 text-xs font-semibold uppercase tracking-widest text-gold hover:text-gold-hover"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    query={`[product-name-${product.id}]`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      <div
        className={`fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm transition-opacity lg:hidden ${
          mobileFiltersOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setMobileFiltersOpen(false)}
      />
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-[85%] max-w-sm overflow-y-auto bg-warm-white p-6 shadow-2xl transition-transform duration-300 lg:hidden ${
          mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="mb-6 flex items-center justify-between">
          <h2 className="font-serif text-2xl">Filters</h2>
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(false)}
            aria-label="Close filters"
          >
            <X size={22} />
          </button>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-ink">
              Category
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('all')
                    setSearchParams({})
                  }}
                  className={`text-sm ${
                    selectedCategory === 'all'
                      ? 'font-semibold text-ink'
                      : 'text-stone'
                  }`}
                >
                  Shop All
                </button>
              </li>
              {categories.map((cat) => (
                <li key={cat.id}>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCategory(cat.slug)
                      setSearchParams({ category: cat.slug })
                    }}
                    className={`text-sm ${
                      selectedCategory === cat.slug
                        ? 'font-semibold text-ink'
                        : 'text-stone'
                    }`}
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-ink">
              Price
            </h3>
            <ul className="mt-4 space-y-3">
              {priceRanges.map((range) => (
                <li key={range.label}>
                  <label className="flex items-center gap-3 text-sm text-stone">
                    <input
                      type="checkbox"
                      checked={selectedPrices.includes(range.label)}
                      onChange={() => togglePrice(range.label)}
                      className="h-4 w-4 accent-gold"
                    />
                    {range.label}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-ink">
              Material
            </h3>
            <ul className="mt-4 space-y-3">
              {materials.map((material) => (
                <li key={material}>
                  <label className="flex items-center gap-3 text-sm text-stone">
                    <input
                      type="checkbox"
                      checked={selectedMaterials.includes(material)}
                      onChange={() => toggleMaterial(material)}
                      className="h-4 w-4 accent-gold"
                    />
                    {material}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setMobileFiltersOpen(false)}
          className="mt-10 w-full bg-ink py-3 text-xs font-semibold uppercase tracking-widest text-warm-white"
        >
          Show {filtered.length} {filtered.length === 1 ? 'piece' : 'pieces'}
        </button>
      </aside>
    </div>
  )
}
