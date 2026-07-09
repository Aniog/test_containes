import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import NewsletterSection from '@/components/home/NewsletterSection'
import ProductCard from '@/components/products/ProductCard'
import FilterSidebar from '@/components/shop/FilterSidebar'
import ShopToolbar from '@/components/shop/ShopToolbar'
import { seedProducts } from '@/data/products'
import { useImageLoader } from '@/hooks/useImageLoader'

const getInitialCategory = (value) => {
  const available = ['Earrings', 'Necklaces', 'Huggies']
  return available.includes(value) ? value : 'All'
}

const matchesPrice = (price, filter) => {
  if (filter === 'Under $50') return price < 50
  if (filter === '$50 - $80') return price >= 50 && price <= 80
  if (filter === '$80+') return price > 80
  return true
}

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filters, setFilters] = useState({
    category: getInitialCategory(searchParams.get('category')),
    price: 'All',
    material: 'All',
  })
  const [searchTerm, setSearchTerm] = useState('')
  const [sort, setSort] = useState('featured')
  const containerRef = useImageLoader(`shop-${filters.category}-${filters.price}-${filters.material}-${searchTerm}-${sort}`)

  useEffect(() => {
    const nextCategory = getInitialCategory(searchParams.get('category'))
    setFilters((current) =>
      current.category === nextCategory
        ? current
        : {
            ...current,
            category: nextCategory,
          },
    )
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    const nextProducts = seedProducts.filter((product) => {
      const matchesCategory = filters.category === 'All' || product.category === filters.category
      const matchesMaterial = filters.material === 'All' || product.material === filters.material
      const matchesSearch = `${product.name} ${product.shortDescription}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())

      return matchesCategory && matchesMaterial && matchesPrice(product.price, filters.price) && matchesSearch
    })

    if (sort === 'price-asc') return [...nextProducts].sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') return [...nextProducts].sort((a, b) => b.price - a.price)
    if (sort === 'rating') return [...nextProducts].sort((a, b) => b.rating - a.rating)
    return nextProducts
  }, [filters, searchTerm, sort])

  const handleFilterChange = (key, value) => {
    setFilters((current) => ({ ...current, [key]: value }))

    if (key === 'category') {
      const nextParams = new URLSearchParams(searchParams)
      if (value === 'All') nextParams.delete('category')
      else nextParams.set('category', value)
      setSearchParams(nextParams)
    }
  }

  return (
    <div ref={containerRef} className="bg-velmora-ivory">
      <section className="border-b border-velmora-line bg-velmora-noir py-16 text-velmora-ivory sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-velmora-gold">
            Shop
          </p>
          <h1 id="browse" className="mt-4 font-display text-5xl sm:text-6xl">
            The Velmora collection
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-8 text-velmora-ivory/78 sm:text-base">
            Demi-fine earrings, necklaces, and huggies with a refined warm finish and an effortless giftable feel.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[300px_minmax(0,1fr)] lg:px-8">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <FilterSidebar
              filters={filters}
              onChange={handleFilterChange}
              searchTerm={searchTerm}
              onSearch={setSearchTerm}
            />
          </div>

          <div>
            <ShopToolbar count={filteredProducts.length} sort={sort} onSort={setSort} />
            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.slug} product={product} contextId="shop" />
              ))}
            </div>
            {filteredProducts.length === 0 ? (
              <div className="mt-8 rounded-[2rem] border border-dashed border-velmora-line bg-velmora-pearl px-6 py-12 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-velmora-mist">
                  No matches found
                </p>
                <p className="mt-4 text-sm leading-7 text-velmora-ink">
                  Try a different category or remove a filter to browse the full collection.
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </div>
  )
}

export default Shop
