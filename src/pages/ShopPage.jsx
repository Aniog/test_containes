import { useEffect, useMemo, useRef, useState } from 'react'
import { SlidersHorizontal, X } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import FilterSidebar from '@/components/store/FilterSidebar'
import ProductGrid from '@/components/store/ProductGrid'
import {
  categoriesForFilter,
  materialOptions,
  priceFilters,
  products,
  sortOptions,
} from '@/data/storeData'
import { useImageLoader } from '@/hooks/useImageLoader'

function matchesPrice(product, priceRange) {
  if (priceRange === 'under-50') return product.price < 50
  if (priceRange === '50-80') return product.price >= 50 && product.price <= 80
  if (priceRange === '80-plus') return product.price > 80
  return true
}

function ShopPage() {
  const [searchParams] = useSearchParams()
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [priceRange, setPriceRange] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const containerRef = useRef(null)

  useImageLoader(containerRef, [selectedCategories.join(','), selectedMaterials.join(','), priceRange, sortBy])

  useEffect(() => {
    const category = searchParams.get('category')
    setSelectedCategories(category ? [category] : [])
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    const nextProducts = products.filter((product) => {
      const matchesCategory =
        selectedCategories.length === 0 || selectedCategories.includes(product.category)
      const matchesMaterial =
        selectedMaterials.length === 0 || selectedMaterials.includes(product.materialGroup)

      return matchesCategory && matchesMaterial && matchesPrice(product, priceRange)
    })

    if (sortBy === 'price-asc') return [...nextProducts].sort((a, b) => a.price - b.price)
    if (sortBy === 'price-desc') return [...nextProducts].sort((a, b) => b.price - a.price)
    if (sortBy === 'rating') return [...nextProducts].sort((a, b) => b.rating - a.rating)
    return nextProducts
  }, [priceRange, selectedCategories, selectedMaterials, sortBy])

  const toggleSelection = (value, setter) => {
    setter((current) =>
      current.includes(value)
        ? current.filter((entry) => entry !== value)
        : [...current, value],
    )
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedMaterials([])
    setPriceRange('all')
    setSortBy('featured')
  }

  return (
    <div ref={containerRef} className="bg-porcelain pt-28">
      <section className="border-b border-mist/70 bg-sand/45">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="mb-4 text-xs uppercase tracking-luxe text-champagne">Collection</p>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <h1 id="shop-title" className="text-4xl sm:text-5xl">
                Quiet luxury, made for daily wear
              </h1>
              <p id="shop-subtitle" className="max-w-2xl text-sm leading-7 text-ink/70 sm:text-base">
                Explore demi-fine earrings, necklaces, and huggies crafted to feel elevated, giftable, and easy to wear every day.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="inline-flex items-center gap-2 rounded-full border border-mist bg-porcelain px-4 py-3 text-sm font-medium text-ink shadow-card transition hover:border-champagne lg:hidden"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filters
              </button>
              <label className="flex items-center gap-3 rounded-full border border-mist bg-porcelain px-4 py-3 text-sm text-ink shadow-card">
                <span className="text-xs uppercase tracking-[0.22em] text-ink/60">Sort</span>
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="bg-transparent text-sm text-ink outline-none"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex gap-8">
          <div className="hidden lg:block lg:w-72 lg:flex-none">
            <FilterSidebar
              categories={categoriesForFilter}
              materials={materialOptions}
              priceFilters={priceFilters}
              selectedCategories={selectedCategories}
              selectedMaterials={selectedMaterials}
              priceRange={priceRange}
              onCategoryToggle={(value) => toggleSelection(value, setSelectedCategories)}
              onMaterialToggle={(value) => toggleSelection(value, setSelectedMaterials)}
              onPriceChange={setPriceRange}
              onClear={clearFilters}
            />
          </div>

          <div className="min-w-0 flex-1">
            <div className="mb-6 flex items-center justify-between gap-4 border-b border-mist/70 pb-4">
              <p className="text-sm text-ink/70">
                Showing <span className="font-medium text-ink">{filteredProducts.length}</span> pieces
              </p>
              <button
                type="button"
                onClick={clearFilters}
                className="text-xs uppercase tracking-[0.22em] text-ink/60 transition hover:text-champagne"
              >
                Reset filters
              </button>
            </div>

            <ProductGrid
              products={filteredProducts}
              sectionId="shop-grid"
              titleId="shop-title"
              descriptionId="shop-subtitle"
            />
          </div>
        </div>
      </section>

      <div
        className={`fixed inset-0 z-[70] bg-obsidian/35 transition ${mobileFiltersOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'} lg:hidden`}
        onClick={() => setMobileFiltersOpen(false)}
        aria-hidden="true"
      />

      <aside
        className={`fixed right-0 top-0 z-[80] h-full w-full max-w-sm bg-porcelain p-6 shadow-soft transition-transform duration-300 lg:hidden ${mobileFiltersOpen ? 'translate-x-0' : 'translate-x-full'}`}
        aria-label="Mobile filters"
      >
        <div className="mb-6 flex items-center justify-between border-b border-mist/70 pb-4">
          <div>
            <p className="text-xs uppercase tracking-luxe text-champagne">Refine</p>
            <h2 className="text-2xl">Filters</h2>
          </div>
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(false)}
            className="rounded-full border border-mist p-2 text-ink transition hover:border-champagne"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <FilterSidebar
          categories={categoriesForFilter}
          materials={materialOptions}
          priceFilters={priceFilters}
          selectedCategories={selectedCategories}
          selectedMaterials={selectedMaterials}
          priceRange={priceRange}
          onCategoryToggle={(value) => toggleSelection(value, setSelectedCategories)}
          onMaterialToggle={(value) => toggleSelection(value, setSelectedMaterials)}
          onPriceChange={setPriceRange}
          onClear={() => {
            clearFilters()
            setMobileFiltersOpen(false)
          }}
        />
      </aside>
    </div>
  )
}

export default ShopPage
