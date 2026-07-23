import { useEffect, useMemo, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { useSearchParams } from 'react-router-dom'
import FilterSidebar from '@/components/shop/FilterSidebar'
import ProductCard from '@/components/shared/ProductCard'
import SectionIntro from '@/components/shared/SectionIntro'
import { productCatalog } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Top Rated', value: 'rating-desc' },
]

function Shop() {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [filters, setFilters] = useState({
    category: initialCategory,
    price: 'All',
    material: 'All',
  })
  const [sort, setSort] = useState('featured')
  const containerRef = useRef(null)
  const categoryFromUrl = searchParams.get('category') || 'All'

  useEffect(() => {
    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [filters, sort])

  useEffect(() => {
    setFilters((current) =>
      current.category === categoryFromUrl
        ? current
        : { ...current, category: categoryFromUrl },
    )
  }, [categoryFromUrl])

  const products = useMemo(() => {
    const filtered = productCatalog.filter((product) => {
      const categoryMatch = filters.category === 'All' || product.category === filters.category
      const materialMatch = filters.material === 'All' || product.material === filters.material

      let priceMatch = true
      if (filters.price === 'Under $50') priceMatch = product.price < 50
      if (filters.price === '$50–$80') priceMatch = product.price >= 50 && product.price <= 80
      if (filters.price === '$80+') priceMatch = product.price > 80

      return categoryMatch && materialMatch && priceMatch
    })

    return [...filtered].sort((first, second) => {
      if (sort === 'price-asc') return first.price - second.price
      if (sort === 'price-desc') return second.price - first.price
      if (sort === 'rating-desc') return second.rating - first.rating
      return 0
    })
  }, [filters, sort])

  const handleFilterChange = (key, value) => {
    setFilters((current) => ({ ...current, [key]: value }))
  }

  return (
    <div ref={containerRef} className="px-5 pb-16 pt-10 md:px-8 md:pb-20 md:pt-12 lg:px-10 lg:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2rem] border border-velmora-sand/30 bg-white px-6 py-10 shadow-soft md:px-10 md:py-12">
          <SectionIntro
            eyebrow="Collection"
            title="A considered edit of everyday gold, gifting pieces, and softly statement silhouettes"
            description="Filter by category, refine by price, and shop the Velmora storefront as a modern curated collection."
          />
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[280px_1fr]">
          <FilterSidebar filters={filters} onChange={handleFilterChange} />

          <section>
            <div className="mb-5 flex flex-col gap-4 rounded-3xl border border-velmora-sand/35 bg-white p-5 shadow-soft sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-velmora-aubergine/80">
                Showing <span className="font-semibold text-velmora-ink">{products.length}</span> pieces
              </p>
              <label className="flex items-center gap-3 text-sm text-velmora-espresso">
                <span className="uppercase tracking-[0.18em] text-xs text-velmora-aubergine/70">Sort</span>
                <select
                  className="rounded-full border border-velmora-sand/40 bg-velmora-ivory px-4 py-2 text-sm text-velmora-ink outline-none"
                  onChange={(event) => setSort(event.target.value)}
                  value={sort}
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} sectionId="shop-grid" />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Shop
