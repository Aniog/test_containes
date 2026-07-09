import { X } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/product/ProductCard.jsx'
import MobileFilterBar from '@/components/shop/MobileFilterBar.jsx'
import FilterSidebar from '@/components/shop/FilterSidebar.jsx'
import SortSelect from '@/components/shop/SortSelect.jsx'
import SectionIntro from '@/components/shared/SectionIntro.jsx'
import { products, shopFilters } from '@/data/products.js'

const matchesPriceRange = (product, priceRange) => {
  if (priceRange === 'Under $50') return product.price < 50
  if (priceRange === '$50 to $80') return product.price >= 50 && product.price <= 80
  if (priceRange === '$80+') return product.price > 80
  return true
}

const sortProducts = (items, sortValue) => {
  const sorted = [...items]

  if (sortValue === 'price-low') {
    return sorted.sort((a, b) => a.price - b.price)
  }

  if (sortValue === 'price-high') {
    return sorted.sort((a, b) => b.price - a.price)
  }

  if (sortValue === 'name') {
    return sorted.sort((a, b) => a.name.localeCompare(b.name))
  }

  return sorted
}

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [sortValue, setSortValue] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const selectedFilters = {
    category: searchParams.get('category') || 'All',
    priceRange: searchParams.get('priceRange') || 'All',
    material: searchParams.get('material') || 'All',
  }

  const setFilter = (key, value) => {
    const next = new URLSearchParams(searchParams)

    if (!value || value === 'All') {
      next.delete(key)
    } else {
      next.set(key, value)
    }

    setSearchParams(next)
  }

  const filteredProducts = useMemo(() => {
    const matching = products.filter((product) => {
      const categoryMatch =
        selectedFilters.category === 'All' || product.category === selectedFilters.category
      const materialMatch =
        selectedFilters.material === 'All' || product.material === selectedFilters.material
      const priceMatch = matchesPriceRange(product, selectedFilters.priceRange)

      return categoryMatch && materialMatch && priceMatch
    })

    return sortProducts(matching, sortValue)
  }, [selectedFilters.category, selectedFilters.material, selectedFilters.priceRange, sortValue])

  return (
    <div className="page-shell py-10 md:py-14 lg:py-16">
      <SectionIntro
        eyebrow="Shop Velmora"
        title="An elevated edit of demi-fine gold essentials"
        description="From sculptural ear details to gift-ready sets, every piece is designed to feel polished, wearable, and quietly special."
        action={
          <SortSelect
            options={shopFilters.sortOptions}
            value={sortValue}
            onChange={(event) => setSortValue(event.target.value)}
          />
        }
      />

      <MobileFilterBar
        count={filteredProducts.length}
        onOpen={() => setMobileFiltersOpen(true)}
      />

      <div className="mt-8 grid gap-8 lg:grid-cols-[280px_1fr] lg:items-start">
        <div className="hidden lg:block">
          <FilterSidebar
            filters={shopFilters}
            selected={selectedFilters}
            onChange={setFilter}
          />
        </div>

        <div className="space-y-6">
          <div className="hidden items-center justify-between text-sm text-truffle lg:flex">
            <p>{filteredProducts.length} pieces</p>
          </div>

          {filteredProducts.length ? (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-dashed border-truffle/20 bg-white px-8 py-16 text-center shadow-card">
              <p className="text-xs uppercase tracking-[0.24em] text-champagne">No exact match</p>
              <h2 className="mt-4 font-editorial text-4xl text-velvet">Try widening your filters</h2>
              <p className="mt-3 text-sm leading-7 text-truffle">
                Reset a category, material, or price selection to see more pieces.
              </p>
              <button
                type="button"
                className="btn-secondary mt-6"
                onClick={() => {
                  setSearchParams(new URLSearchParams())
                  setSortValue('featured')
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>

      <div
        className={`fixed inset-0 z-[75] transition-all duration-300 lg:hidden ${
          mobileFiltersOpen ? 'pointer-events-auto bg-velvet/35 opacity-100' : 'pointer-events-none bg-transparent opacity-0'
        }`}
        aria-hidden={!mobileFiltersOpen}
        aria-modal="true"
        role="dialog"
      >
        <button
          type="button"
          aria-label="Close filters overlay"
          className="absolute inset-0 z-0"
          onClick={() => setMobileFiltersOpen(false)}
        />
        <div
          className={`absolute bottom-0 left-0 right-0 z-10 rounded-t-[2rem] bg-ivory p-6 shadow-soft transition-transform duration-300 ${
            mobileFiltersOpen ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-champagne">Refine</p>
              <h2 className="font-editorial text-3xl text-velvet">Shop filters</h2>
            </div>
            <button
              type="button"
              aria-label="Close filters"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-truffle/15 text-truffle"
              onClick={() => setMobileFiltersOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <FilterSidebar
            filters={shopFilters}
            selected={selectedFilters}
            onChange={(key, value) => {
              setFilter(key, value)
              setMobileFiltersOpen(false)
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Shop
