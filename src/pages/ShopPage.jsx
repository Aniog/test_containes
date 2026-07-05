import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import FilterSidebar from '@/components/shop/FilterSidebar'
import ProductCard from '@/components/ui/ProductCard'
import SectionHeading from '@/components/ui/SectionHeading'
import { filterProducts, products, sortOptions, sortProducts } from '@/data/store'

function ShopPage() {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category')
  const [filters, setFilters] = useState({
    categories: initialCategory ? [initialCategory] : [],
    materials: [],
    price: '',
  })
  const [sortValue, setSortValue] = useState('featured')

  useEffect(() => {
    setFilters((current) => ({
      ...current,
      categories: initialCategory ? [initialCategory] : [],
    }))
  }, [initialCategory])

  const visibleProducts = useMemo(() => {
    const filtered = filterProducts(products, filters)
    return sortProducts(filtered, sortValue)
  }, [filters, sortValue])

  const toggleFilter = (key, value) => {
    setFilters((currentFilters) => ({
      ...currentFilters,
      [key]: currentFilters[key].includes(value)
        ? currentFilters[key].filter((item) => item !== value)
        : [...currentFilters[key], value],
    }))
  }

  return (
    <>
      <section className="bg-velvet py-16 text-ivory md:py-24">
        <div className="section-shell grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
          <SectionHeading
            eyebrow="Collection"
            title="Quietly luxurious jewelry for gifting and everyday polish"
            description="Explore demi-fine earrings, necklaces, huggies, and gift-ready sets across our signature warm editorial palette."
            inverse
          />
          <div className="overflow-hidden rounded-[32px] border border-line-inverse bg-velvet-soft/70 p-6 shadow-luxe backdrop-blur-sm md:p-8">
            <p className="text-xs uppercase tracking-[0.22em] text-ivory/60">Why Velmora</p>
            <p className="mt-4 text-base leading-8 text-ivory/78">
              Premium-but-accessible pieces priced from $30 to $120, designed for women who want a refined finish without overstatement.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16 md:py-24">
        <div className="section-shell grid gap-8 lg:grid-cols-[300px_1fr] lg:items-start">
          <FilterSidebar
            filters={filters}
            onToggleCategory={(value) => toggleFilter('categories', value)}
            onToggleMaterial={(value) => toggleFilter('materials', value)}
            onPriceChange={(value) => setFilters((current) => ({ ...current, price: value }))}
            onClear={() => setFilters({ categories: [], materials: [], price: '' })}
          />

          <div>
            <div className="mb-6 flex flex-col gap-4 rounded-[28px] border border-line bg-pearl p-5 shadow-card md:flex-row md:items-center md:justify-between md:p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-truffle">
                Showing {visibleProducts.length} pieces
              </p>
              <label className="flex items-center gap-3 text-sm text-ink">
                <span className="uppercase tracking-[0.18em] text-truffle">Sort</span>
                <select
                  value={sortValue}
                  onChange={(event) => setSortValue(event.target.value)}
                  className="rounded-full border border-line bg-ivory px-4 py-3 text-sm text-ink focus:border-champagne focus:outline-none"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {visibleProducts.length === 0 ? (
              <div className="rounded-[28px] border border-line bg-pearl px-6 py-14 text-center shadow-card">
                <p className="font-serif text-4xl text-ink">No pieces match this edit.</p>
                <p className="mt-4 text-sm leading-7 text-truffle">
                  Clear a few filters to explore the full Velmora collection again.
                </p>
              </div>
            ) : (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {visibleProducts.map((product) => (
                  <ProductCard key={product.id} product={product} instanceKey="shop" />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default ShopPage
