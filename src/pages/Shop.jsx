import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ChevronDown, SlidersHorizontal } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import ProductCard from '@/components/products/ProductCard'
import SectionHeading from '@/components/products/SectionHeading'

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Top Rated', value: 'rating' },
]

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const priceRanges = ['All', 'Under $50', '$50 - $80', '$80+']
const materials = ['All', '18K Gold Plated']

function FilterButton({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.24em] transition ${
        active
          ? 'border-gold bg-gold text-espresso'
          : 'border-champagne bg-ivory text-espresso hover:border-gold'
      }`}
    >
      {label}
    </button>
  )
}

export default function Shop() {
  const pageRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const [sortBy, setSortBy] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const selectedCategory = searchParams.get('category') || 'All'
  const selectedPrice = searchParams.get('price') || 'All'
  const selectedMaterial = searchParams.get('material') || 'All'

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy])

  const filteredProducts = useMemo(() => {
    const nextProducts = products.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory
      const matchesMaterial =
        selectedMaterial === 'All' || product.material === selectedMaterial
      const matchesPrice =
        selectedPrice === 'All' ||
        (selectedPrice === 'Under $50' && product.price < 50) ||
        (selectedPrice === '$50 - $80' && product.price >= 50 && product.price <= 80) ||
        (selectedPrice === '$80+' && product.price > 80)

      return matchesCategory && matchesMaterial && matchesPrice
    })

    const sorted = [...nextProducts]

    if (sortBy === 'price-asc') {
      sorted.sort((a, b) => a.price - b.price)
    }

    if (sortBy === 'price-desc') {
      sorted.sort((a, b) => b.price - a.price)
    }

    if (sortBy === 'rating') {
      sorted.sort((a, b) => b.rating - a.rating)
    }

    return sorted
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy])

  const updateFilter = (key, value) => {
    const nextParams = new URLSearchParams(searchParams)

    if (value === 'All') {
      nextParams.delete(key)
    } else {
      nextParams.set(key, value)
    }

    setSearchParams(nextParams)
  }

  const FilterPanel = (
    <div className="space-y-8 rounded-[2rem] border border-champagne/70 bg-ivory p-6 text-espresso shadow-card">
      <div>
        <h3 className="text-xs uppercase tracking-[0.28em] text-gold">Category</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((category) => (
            <FilterButton
              key={category}
              label={category}
              active={selectedCategory === category}
              onClick={() => updateFilter('category', category)}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-[0.28em] text-gold">Price</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {priceRanges.map((range) => (
            <FilterButton
              key={range}
              label={range}
              active={selectedPrice === range}
              onClick={() => updateFilter('price', range)}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xs uppercase tracking-[0.28em] text-gold">Material</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {materials.map((material) => (
            <FilterButton
              key={material}
              label={material}
              active={selectedMaterial === material}
              onClick={() => updateFilter('material', material)}
            />
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <main ref={pageRef} className="bg-parchment px-5 pb-20 pt-10 text-espresso sm:px-6 lg:px-10 lg:pt-16">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] border border-champagne/70 bg-ivory px-6 py-10 shadow-card sm:px-10 sm:py-14">
          <SectionHeading
            eyebrow="Collection"
            title="Quietly luxurious everyday pieces"
            description="Refined demi-fine styles made for layering, gifting, and repeating on every calendar day that matters."
          />
        </div>

        <div className="mt-8 flex items-center justify-between gap-4 lg:hidden">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen((current) => !current)}
            className="inline-flex items-center gap-2 rounded-full border border-champagne bg-ivory px-4 py-3 text-xs uppercase tracking-[0.24em] text-espresso"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>
          <div className="relative">
            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-taupe" />
            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="appearance-none rounded-full border border-champagne bg-ivory px-4 py-3 pr-10 text-xs uppercase tracking-[0.24em] text-espresso outline-none"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {mobileFiltersOpen && <div className="mt-4 lg:hidden">{FilterPanel}</div>}

        <div className="mt-8 grid gap-8 lg:grid-cols-[280px_1fr] lg:items-start">
          <aside className="hidden lg:block">{FilterPanel}</aside>

          <section>
            <div className="mb-6 hidden items-center justify-between rounded-[2rem] border border-champagne/70 bg-ivory px-6 py-4 shadow-card lg:flex">
              <p className="text-sm text-mocha">
                Showing <span className="font-medium text-espresso">{filteredProducts.length}</span> pieces
              </p>
              <div className="relative">
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-taupe" />
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="appearance-none rounded-full border border-champagne bg-parchment px-4 py-3 pr-10 text-xs uppercase tracking-[0.24em] text-espresso outline-none"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="rounded-[2rem] border border-dashed border-champagne bg-ivory px-8 py-16 text-center text-espresso shadow-card">
                <h3 className="font-serif text-4xl text-espresso">No pieces found</h3>
                <p className="mt-4 text-sm leading-7 text-taupe">
                  Try another filter combination to discover more styles.
                </p>
              </div>
            ) : (
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  )
}
