import { useState, useMemo, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal, X } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, CATEGORIES, MATERIALS } from '@/data/products'
import { formatPrice, cn } from '@/lib/utils'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { CartDrawer } from '@/components/layout/CartDrawer'
import { Newsletter } from '@/components/layout/Newsletter'
import { ProductCard } from '@/components/shop/ProductCard'
import { Sheet, SheetHeader, SheetTitle, SheetBody } from '@/components/ui/Sheet'

const PRICE_RANGES = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50 – $80', min: 50, max: 80 },
  { label: '$80 – $120', min: 80, max: 120 },
]

const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useRef(null)

  const initialCategory = searchParams.get('category') || ''

  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory && CATEGORIES.includes(initialCategory) ? [initialCategory] : []
  )
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([])
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [selectedCategories, selectedMaterials, selectedPriceRanges, sort])

  const toggle = (value, selected, setSelected) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    )
  }

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category))
    }

    if (selectedMaterials.length > 0) {
      result = result.filter((p) => selectedMaterials.includes(p.material))
    }

    if (selectedPriceRanges.length > 0) {
      result = result.filter((p) =>
        selectedPriceRanges.some((rangeLabel) => {
          const range = PRICE_RANGES.find((r) => r.label === rangeLabel)
          return range && p.price >= range.min && p.price <= range.max
        })
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
      default:
        break
    }

    return result
  }, [selectedCategories, selectedMaterials, selectedPriceRanges, sort])

  const activeFilterCount = selectedCategories.length + selectedMaterials.length + selectedPriceRanges.length

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedMaterials([])
    setSelectedPriceRanges([])
  }

  const FilterContent = () => (
    <div className="space-y-8">
      <div>
        <h3 className="font-serif text-lg tracking-wide text-espresso">Category</h3>
        <div className="mt-3 space-y-2">
          {CATEGORIES.map((category) => (
            <label key={category} className="flex cursor-pointer items-center gap-3 text-sm text-taupe">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => toggle(category, selectedCategories, setSelectedCategories)}
                className="h-4 w-4 rounded border-champagne text-gold focus:ring-gold"
              />
              {category}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-serif text-lg tracking-wide text-espresso">Price</h3>
        <div className="mt-3 space-y-2">
          {PRICE_RANGES.map((range) => (
            <label key={range.label} className="flex cursor-pointer items-center gap-3 text-sm text-taupe">
              <input
                type="checkbox"
                checked={selectedPriceRanges.includes(range.label)}
                onChange={() => toggle(range.label, selectedPriceRanges, setSelectedPriceRanges)}
                className="h-4 w-4 rounded border-champagne text-gold focus:ring-gold"
              />
              {range.label}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-serif text-lg tracking-wide text-espresso">Material</h3>
        <div className="mt-3 space-y-2">
          {MATERIALS.map((material) => (
            <label key={material} className="flex cursor-pointer items-center gap-3 text-sm text-taupe">
              <input
                type="checkbox"
                checked={selectedMaterials.includes(material)}
                onChange={() => toggle(material, selectedMaterials, setSelectedMaterials)}
                className="h-4 w-4 rounded border-champagne text-gold focus:ring-gold"
              />
              {material}
            </label>
          ))}
        </div>
      </div>

      {activeFilterCount > 0 && (
        <button
          type="button"
          onClick={clearFilters}
          className="text-xs font-medium uppercase tracking-[0.12em] text-taupe underline-offset-4 transition-colors hover:text-gold hover:underline"
        >
          Clear all filters
        </button>
      )}
    </div>
  )

  return (
    <div ref={containerRef} className="min-h-screen bg-cream">
      <Navbar />
      <CartDrawer />

      <main className="pt-16">
        <div className="border-b border-champagne bg-cream-light py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">The Collection</p>
            <h1 className="mt-3 font-serif text-4xl tracking-wide text-espresso sm:text-5xl md:text-6xl">
              Shop All Jewelry
            </h1>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Desktop sidebar */}
            <aside className="hidden w-64 flex-shrink-0 lg:block">
              <div className="sticky top-24 border border-champagne bg-cream-light p-6">
                <FilterContent />
              </div>
            </aside>

            {/* Product grid */}
            <div className="flex-1">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setMobileFiltersOpen(true)}
                    className="inline-flex items-center gap-2 border border-champagne bg-cream-light px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-espresso transition-colors hover:border-gold lg:hidden"
                  >
                    <SlidersHorizontal className="h-4 w-4" /> Filters
                    {activeFilterCount > 0 && (
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[9px] text-cream-light">
                        {activeFilterCount}
                      </span>
                    )}
                  </button>
                  <p className="text-sm text-taupe">{filteredProducts.length} pieces</p>
                </div>

                <div className="flex items-center gap-2">
                  <label htmlFor="sort" className="text-xs font-medium uppercase tracking-[0.12em] text-taupe">
                    Sort
                  </label>
                  <select
                    id="sort"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="border border-champagne bg-cream-light px-3 py-2 text-sm text-espresso focus:border-gold focus:outline-none"
                  >
                    {SORT_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {filteredProducts.length === 0 ? (
                <div className="flex flex-col items-center justify-center border border-champagne bg-cream-light py-20 text-center">
                  <p className="font-serif text-2xl text-espresso">No pieces match your filters</p>
                  <p className="mt-2 text-sm text-taupe">Try adjusting your selections.</p>
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="mt-6 bg-espresso px-6 py-3 text-xs font-medium uppercase tracking-[0.12em] text-cream-light transition-colors hover:bg-mocha"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <Newsletter compact />
      </main>

      {/* Mobile filters */}
      <Sheet open={mobileFiltersOpen} onClose={() => setMobileFiltersOpen(false)}>
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(false)}
            className="rounded-full p-2 text-taupe transition-colors hover:bg-champagne"
          >
            <X className="h-5 w-5" />
          </button>
        </SheetHeader>
        <SheetBody>
          <FilterContent />
        </SheetBody>
      </Sheet>

      <Footer />
    </div>
  )
}
