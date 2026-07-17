import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import FilterSidebar from '../components/storefront/FilterSidebar'
import NewsletterSection from '../components/storefront/NewsletterSection'
import ProductCard from '../components/storefront/ProductCard'
import { collectionCategories, priceFilters, products } from '../data/products'

const defaultFilters = {
  category: 'All',
  price: 'all',
  material: 'All',
}

function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryParam = searchParams.get('category')
  const initialCategory =
    categoryParam && collectionCategories.includes(categoryParam)
      ? categoryParam
      : defaultFilters.category

  const [filters, setFilters] = useState({
    ...defaultFilters,
    category: initialCategory,
  })
  const [sort, setSort] = useState('featured')

  useEffect(() => {
    if (categoryParam && collectionCategories.includes(categoryParam)) {
      setFilters((current) => ({ ...current, category: categoryParam }))
      return
    }

    setFilters((current) => ({ ...current, category: 'All' }))
  }, [categoryParam])

  useEffect(() => {
    const nextParams = new URLSearchParams(searchParams)

    if (filters.category && filters.category !== 'All') {
      nextParams.set('category', filters.category)
    } else {
      nextParams.delete('category')
    }

    setSearchParams(nextParams, { replace: true })
  }, [filters.category, searchParams, setSearchParams])

  const visibleProducts = useMemo(() => {
    const activePrice = priceFilters.find((range) => range.id === filters.price) || priceFilters[0]

    const filtered = products.filter((product) => {
      const matchesCategory =
        filters.category === 'All' || product.category === filters.category
      const matchesMaterial =
        filters.material === 'All' || product.material === filters.material
      const matchesPrice =
        product.price >= activePrice.min && product.price <= activePrice.max

      return matchesCategory && matchesMaterial && matchesPrice
    })

    if (sort === 'price-asc') {
      return [...filtered].sort((a, b) => a.price - b.price)
    }

    if (sort === 'price-desc') {
      return [...filtered].sort((a, b) => b.price - a.price)
    }

    if (sort === 'rating') {
      return [...filtered].sort((a, b) => b.rating - a.rating)
    }

    return filtered
  }, [filters, sort])

  return (
    <>
      <section className="bg-espresso px-4 pb-16 pt-32 text-pearl sm:px-6 lg:px-10 lg:pt-36">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-luxe text-gold">Shop Velmora</p>
          <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-none sm:text-6xl lg:text-7xl">
            Quiet-luxury jewelry for gifting, layering, and wearing on repeat.
          </h1>
          <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <p className="max-w-2xl text-base leading-8 text-pearl/74 sm:text-lg">
              Explore the full Velmora collection, from sculptural huggies to soft-statement necklaces and gift-ready sets.
            </p>
            <p className="text-xs uppercase tracking-luxe text-pearl/66">
              {visibleProducts.length} pieces available
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[18rem_minmax(0,1fr)]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <FilterSidebar
              filters={filters}
              setFilters={setFilters}
              sort={sort}
              setSort={setSort}
            />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-3 border-b border-hairline pb-6">
              <span className="text-xs uppercase tracking-luxe text-taupe">Active filters</span>
              {[filters.category, filters.material, filters.price]
                .filter((value) => value && value !== 'All' && value !== 'all')
                .map((value) => (
                  <span
                    key={value}
                    className="rounded-full border border-hairline bg-champagne px-4 py-2 text-xs uppercase tracking-luxe text-umber"
                  >
                    {value}
                  </span>
                ))}
              <button
                type="button"
                onClick={() => {
                  setFilters(defaultFilters)
                  setSort('featured')
                }}
                className="text-xs uppercase tracking-luxe text-gold transition hover:text-gold-deep"
              >
                Reset
              </button>
            </div>

            {visibleProducts.length > 0 ? (
              <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {visibleProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="mt-10 rounded-[2rem] border border-hairline bg-pearl px-6 py-12 text-center shadow-soft">
                <p className="text-xs uppercase tracking-luxe text-gold">No matches found</p>
                <h2 className="mt-4 font-serif text-4xl text-umber">
                  Try a different filter combination.
                </h2>
                <p className="mt-4 text-sm leading-7 text-taupe">
                  Reset your filters to return to the full Velmora edit.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-champagne px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[2rem] border border-hairline bg-pearl p-8 shadow-soft lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-luxe text-gold">Need a gift?</p>
            <h2 className="mt-3 font-serif text-4xl text-umber">Start with the heirloom-worthy set.</h2>
          </div>
          <Link
            to="/product/royal-heirloom-set"
            className="inline-flex items-center justify-center rounded-full bg-espresso px-6 py-3 text-xs font-medium uppercase tracking-luxe text-pearl transition hover:bg-walnut"
          >
            Shop gift favorite
          </Link>
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}

export default ShopPage
