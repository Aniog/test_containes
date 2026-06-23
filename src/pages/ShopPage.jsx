import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import FilterSidebar from '@/components/shop/FilterSidebar.jsx'
import ProductCard from '@/components/product/ProductCard.jsx'
import SectionIntro from '@/components/common/SectionIntro.jsx'
import { products, sortOptions } from '@/data/products.js'
import { useStockImages } from '@/hooks/useStockImages.js'

const matchesPrice = (price, selectedPrice) => {
  if (selectedPrice === 'under-50') return price < 50
  if (selectedPrice === '50-80') return price >= 50 && price <= 80
  if (selectedPrice === '80-plus') return price > 80
  return true
}

const ShopPage = () => {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [filters, setFilters] = useState({
    category: initialCategory,
    price: 'all',
    material: 'All',
  })
  const [sort, setSort] = useState('featured')
  const containerRef = useRef(null)

  useEffect(() => {
    const categoryFromUrl = searchParams.get('category') || 'All'
    setFilters((current) =>
      current.category === categoryFromUrl ? current : { ...current, category: categoryFromUrl },
    )
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    const list = products.filter((product) => {
      const categoryMatch = filters.category === 'All' || product.category === filters.category
      const materialMatch = filters.material === 'All' || product.materialFilter === filters.material
      const priceMatch = matchesPrice(product.price, filters.price)
      return categoryMatch && materialMatch && priceMatch
    })

    if (sort === 'price-asc') {
      return [...list].sort((a, b) => a.price - b.price)
    }

    if (sort === 'price-desc') {
      return [...list].sort((a, b) => b.price - a.price)
    }

    if (sort === 'rating') {
      return [...list].sort((a, b) => b.rating - a.rating)
    }

    return list
  }, [filters, sort])

  useStockImages(containerRef, [filteredProducts.map((item) => item.slug).join('|'), sort])

  return (
    <main ref={containerRef} className="px-4 pb-20 pt-28 sm:px-6 lg:px-10 lg:pt-32">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionIntro
          eyebrow="Collection"
          title="Quietly luminous pieces for self-purchase and gifting"
          description="Explore the Velmora collection of demi-fine gold jewelry — polished, warm, and intentionally versatile for every day and every occasion."
        />

        <div className="grid gap-8 lg:grid-cols-[290px_1fr] lg:items-start">
          <FilterSidebar filters={filters} setFilters={setFilters} />

          <section className="space-y-6">
            <div className="flex flex-col gap-4 rounded-[1.5rem] border border-hairline-dark bg-base-muted/60 p-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm leading-7 text-muted">
                Showing <span className="text-foreground">{filteredProducts.length}</span> refined pieces.
              </p>
              <label className="relative inline-flex items-center">
                <span className="sr-only">Sort products</span>
                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                  className="h-12 appearance-none rounded-full border border-hairline-dark bg-base px-5 pr-12 text-sm text-foreground outline-none transition focus:border-accent"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-4 h-4 w-4 text-accent" />
              </label>
            </div>

            {filteredProducts.length ? (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} context="shop" />
                ))}
              </div>
            ) : (
              <div className="rounded-[1.75rem] border border-hairline-dark bg-base-muted px-6 py-12 text-center text-foreground">
                <h2 className="text-4xl">No pieces match this edit</h2>
                <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-muted">
                  Try a different material or price range to discover more of the Velmora collection.
                </p>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  )
}

export default ShopPage
