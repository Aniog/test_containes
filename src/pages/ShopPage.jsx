import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ChevronDown, SlidersHorizontal } from 'lucide-react'
import ProductCard from '@/components/storefront/ProductCard.jsx'
import SectionHeading from '@/components/storefront/SectionHeading.jsx'
import {
  CATEGORIES,
  MATERIALS,
  PRICE_FILTERS,
  PRODUCTS,
  SORT_OPTIONS,
} from '@/data/products.js'
import { useStrkImages } from '@/hooks/useStrkImages.js'

const priceMatches = (value, filter) => {
  if (filter === 'Under $50') return value < 50
  if (filter === '$50 - $80') return value >= 50 && value <= 80
  if (filter === '$80+') return value > 80
  return true
}

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const category = searchParams.get('category') || 'All'
  const material = searchParams.get('material') || 'All'
  const price = searchParams.get('price') || 'All'
  const sort = searchParams.get('sort') || 'featured'
  const containerRef = useStrkImages([category, material, price, sort])

  const filteredProducts = useMemo(() => {
    const nextProducts = PRODUCTS.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material
      const priceMatch = priceMatches(product.price, price)

      return categoryMatch && materialMatch && priceMatch
    })

    if (sort === 'price-low') {
      return [...nextProducts].sort((a, b) => a.price - b.price)
    }

    if (sort === 'price-high') {
      return [...nextProducts].sort((a, b) => b.price - a.price)
    }

    if (sort === 'rating') {
      return [...nextProducts].sort((a, b) => b.rating - a.rating)
    }

    return nextProducts
  }, [category, material, price, sort])

  const updateFilter = (key, value) => {
    const next = new URLSearchParams(searchParams)

    if (value === 'All' || !value) {
      next.delete(key)
    } else {
      next.set(key, value)
    }

    setSearchParams(next)
  }

  const FilterGroup = ({ title, options, selectedValue, queryKey }) => (
    <div className="border-b border-champagne/30 pb-6">
      <h3 className="text-xs uppercase tracking-[0.3em] text-espresso">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2 lg:flex-col">
        {options.map((option) => {
          const selected = selectedValue === option
          return (
            <button
              key={option}
              type="button"
              onClick={() => updateFilter(queryKey, option)}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.24em] transition ${
                selected
                  ? 'border-gold bg-gold text-ivory'
                  : 'border-champagne/40 bg-white/80 text-espresso hover:border-gold hover:text-gold'
              }`}
            >
              {option}
            </button>
          )
        })}
      </div>
    </div>
  )

  return (
    <main ref={containerRef} className="bg-ivory px-4 pb-16 pt-28 sm:px-6 md:pb-24 lg:px-8 lg:pt-32">
      <div className="mx-auto max-w-7xl">
        <section className="rounded-[36px] border border-champagne/30 bg-espresso px-6 py-12 text-ivory shadow-soft sm:px-10 md:px-14">
          <SectionHeading
            eyebrow="Shop Velmora"
            title="A softly curated collection of demi-fine gold jewelry"
            description="Browse the full storefront with easy filters for category, material, and price. Each piece is designed to feel premium, wearable, and beautifully giftable."
            light
          />
        </section>

        <div className="mt-10 flex items-center justify-between gap-4 border-b border-champagne/30 pb-5">
          <button
            type="button"
            onClick={() => setMobileFiltersOpen((current) => !current)}
            className="inline-flex items-center gap-2 rounded-full border border-champagne/40 bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.24em] text-espresso lg:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>

          <p className="text-sm text-ink-soft">{filteredProducts.length} pieces</p>

          <label className="relative inline-flex items-center">
            <span className="sr-only">Sort products</span>
            <select
              value={sort}
              onChange={(event) => updateFilter('sort', event.target.value)}
              className="appearance-none rounded-full border border-champagne/40 bg-white/80 px-4 py-3 pr-10 text-xs uppercase tracking-[0.24em] text-espresso outline-none"
            >
              {SORT_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 h-4 w-4 text-espresso" />
          </label>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[280px_1fr]">
          <aside className={`${mobileFiltersOpen ? 'block' : 'hidden'} space-y-6 lg:block`}>
            <div className="rounded-[28px] border border-champagne/30 bg-white/80 p-6 shadow-soft">
              <div className="space-y-6">
                <FilterGroup title="Category" options={CATEGORIES} selectedValue={category} queryKey="category" />
                <FilterGroup title="Price" options={PRICE_FILTERS} selectedValue={price} queryKey="price" />
                <FilterGroup title="Material" options={MATERIALS} selectedValue={material} queryKey="material" />
              </div>
            </div>
          </aside>

          <section>
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  titleId={`${product.id}-shop-title`}
                  descId={`${product.id}-shop-description`}
                  primaryImageId={`${product.id}-shop-primary`}
                  secondaryImageId={`${product.id}-shop-secondary`}
                />
              ))}
            </div>
            {filteredProducts.length === 0 ? (
              <div className="mt-6 rounded-[28px] border border-champagne/30 bg-white/80 px-6 py-12 text-center shadow-soft">
                <h3 className="font-serif text-3xl text-espresso">No pieces match this edit</h3>
                <p className="mt-3 text-sm leading-7 text-ink-soft">
                  Try widening a filter to discover more of the collection.
                </p>
              </div>
            ) : null}
          </section>
        </div>
      </div>
    </main>
  )
}

export default ShopPage
