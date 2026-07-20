import { SlidersHorizontal } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import FilterSidebar from '../components/products/FilterSidebar'
import ProductGrid from '../components/products/ProductGrid'
import { products } from '../lib/products'
import { useStrkImageLoader } from '../lib/useStrkImageLoader'

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-low' },
  { label: 'Price: High to Low', value: 'price-high' },
  { label: 'Top Rated', value: 'rating' },
]

const matchesPrice = (product, priceFilter) => {
  if (priceFilter === 'under-50') return product.price < 50
  if (priceFilter === '50-to-80') return product.price >= 50 && product.price < 80
  if (priceFilter === '80-plus') return product.price >= 80
  return true
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [priceFilter, setPriceFilter] = useState('all')
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [sortValue, setSortValue] = useState('featured')
  const [showMobileFilters, setShowMobileFilters] = useState(false)
  const containerRef = useRef(null)

  const allCategories = useMemo(
    () => Array.from(new Set(products.map((product) => product.category))),
    [],
  )
  const allMaterials = useMemo(
    () => Array.from(new Set(products.map((product) => product.material))),
    [],
  )

  useEffect(() => {
    const category = searchParams.get('category')
    setSelectedCategories(category ? [category] : [])
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const categoryMatch =
        selectedCategories.length === 0 || selectedCategories.includes(product.category)
      const materialMatch =
        selectedMaterials.length === 0 || selectedMaterials.includes(product.material)

      return categoryMatch && materialMatch && matchesPrice(product, priceFilter)
    })

    if (sortValue === 'price-low') {
      return [...filtered].sort((a, b) => a.price - b.price)
    }

    if (sortValue === 'price-high') {
      return [...filtered].sort((a, b) => b.price - a.price)
    }

    if (sortValue === 'rating') {
      return [...filtered].sort((a, b) => b.rating - a.rating)
    }

    return filtered
  }, [priceFilter, selectedCategories, selectedMaterials, sortValue])

  const imageDependency = filteredProducts.map((product) => product.slug).join('|')
  useStrkImageLoader(containerRef, [imageDependency])

  const toggleCategory = (category) => {
    setSelectedCategories((current) => {
      const next = current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category]

      if (next.length === 1) {
        setSearchParams({ category: next[0] })
      } else if (next.length === 0) {
        setSearchParams({})
      }

      return next
    })
  }

  const toggleMaterial = (material) => {
    setSelectedMaterials((current) =>
      current.includes(material)
        ? current.filter((item) => item !== material)
        : [...current, material],
    )
  }

  const clearFilters = () => {
    setPriceFilter('all')
    setSelectedCategories([])
    setSelectedMaterials([])
    setSearchParams({})
  }

  return (
    <div ref={containerRef} className="pb-16 pt-28 md:pb-24 md:pt-36">
      <section className="page-shell">
        <div className="max-w-3xl border-b border-sandDeep/70 pb-10">
          <p className="eyebrow">Collection</p>
          <h1 id="shop-page-title" className="mt-4 editorial-heading">
            A considered edit of demi-fine gold jewelry for everyday rituals
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-ink/75">
            Layerable earrings, huggies, necklaces, and gift-ready pieces with a
            premium feel and an accessible price point.
          </p>
        </div>
      </section>

      <section className="page-shell mt-10 grid gap-8 lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-10">
        <div className="hidden lg:block">
          <FilterSidebar
            categories={allCategories}
            materials={allMaterials}
            onClear={clearFilters}
            onPriceChange={setPriceFilter}
            onToggleCategory={toggleCategory}
            onToggleMaterial={toggleMaterial}
            priceFilter={priceFilter}
            selectedCategories={selectedCategories}
            selectedMaterials={selectedMaterials}
          />
        </div>

        <div>
          <div className="flex flex-col gap-4 rounded-3xl border border-sandDeep/70 bg-white/60 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center justify-between gap-4 sm:justify-start">
              <button
                type="button"
                onClick={() => setShowMobileFilters((current) => !current)}
                className="inline-flex items-center gap-2 rounded-full border border-sandDeep/70 px-4 py-2 text-sm text-ink transition hover:border-rosewood hover:text-rosewood lg:hidden"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </button>
              <p className="text-sm text-ink/70">
                {filteredProducts.length} piece{filteredProducts.length === 1 ? '' : 's'}
              </p>
            </div>

            <label className="flex items-center gap-3 text-sm text-ink/70">
              <span>Sort by</span>
              <select
                value={sortValue}
                onChange={(event) => setSortValue(event.target.value)}
                className="rounded-full border border-sandDeep/70 bg-porcelain px-4 py-2 text-sm text-ink outline-none transition focus:border-rosewood"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {showMobileFilters ? (
            <div className="mt-5 lg:hidden">
              <FilterSidebar
                categories={allCategories}
                materials={allMaterials}
                onClear={clearFilters}
                onPriceChange={setPriceFilter}
                onToggleCategory={toggleCategory}
                onToggleMaterial={toggleMaterial}
                priceFilter={priceFilter}
                selectedCategories={selectedCategories}
                selectedMaterials={selectedMaterials}
              />
            </div>
          ) : null}

          {filteredProducts.length > 0 ? (
            <ProductGrid
              className="mt-6 lg:grid-cols-2 xl:grid-cols-3"
              contextKey="shop-grid"
              products={filteredProducts}
              sectionTitleId="shop-page-title"
            />
          ) : (
            <div className="surface-card mt-6 p-10 text-center">
              <h2 className="font-display text-4xl text-ink">No matches yet</h2>
              <p className="mt-4 text-sm leading-7 text-ink/70">
                Try widening your filters to explore the full Velmora collection.
              </p>
              <button type="button" onClick={clearFilters} className="luxe-button mt-6">
                Reset filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
