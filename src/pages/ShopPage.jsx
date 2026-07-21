import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'
import { materialOptions, priceOptions, products } from '../data/products'
import FilterSidebar from '../components/products/FilterSidebar'
import ProductGrid from '../components/products/ProductGrid'
import SectionHeading from '../components/ui/SectionHeading'

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

const matchPrice = (price, filter) => {
  if (filter === 'under-50') return price < 50
  if (filter === '50-80') return price >= 50 && price <= 80
  if (filter === '80-plus') return price > 80
  return true
}

const ShopPage = ({ onAddToCart }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filters, setFilters] = useState({ category: 'All', price: 'all', material: 'All' })
  const [sort, setSort] = useState('featured')
  const containerRef = useRef(null)
  const categories = useMemo(
    () => [...new Set(products.map((product) => product.category))],
    [],
  )

  useEffect(() => {
    const categoryFromQuery = searchParams.get('category')
    const nextCategory =
      categoryFromQuery && categories.includes(categoryFromQuery)
        ? categoryFromQuery
        : 'All'

    setFilters((current) =>
      current.category === nextCategory
        ? current
        : { ...current, category: nextCategory },
    )
  }, [categories, searchParams])

  const handleFilterChange = (key, value) => {
    setFilters((current) => ({ ...current, [key]: value }))

    if (key === 'category') {
      const nextParams = new URLSearchParams(searchParams)

      if (value === 'All') {
        nextParams.delete('category')
      } else {
        nextParams.set('category', value)
      }

      setSearchParams(nextParams, { replace: true })
    }
  }

  const filteredProducts = useMemo(() => {
    const nextProducts = products.filter((product) => {
      const categoryMatch = filters.category === 'All' || product.category === filters.category
      const materialMatch = filters.material === 'All' || product.materialFilter === filters.material
      const priceMatch = matchPrice(product.price, filters.price)

      return categoryMatch && materialMatch && priceMatch
    })

    const sorted = [...nextProducts]

    if (sort === 'price-asc') sorted.sort((first, second) => first.price - second.price)
    if (sort === 'price-desc') sorted.sort((first, second) => second.price - first.price)
    if (sort === 'rating') sorted.sort((first, second) => second.rating - first.rating)

    return sorted
  }, [filters, sort])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [filteredProducts, sort])

  return (
    <div ref={containerRef} className="bg-mist text-noir">
      <section className="border-b border-noir/10 bg-ivory px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Collection"
            title="Demi-fine pieces for modern rituals"
            description="Explore earrings, necklaces, and huggies with thoughtful filters for gifting and self-purchase." 
          />
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-10 lg:py-14">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[300px_minmax(0,1fr)]">
          <FilterSidebar
            categories={categories}
            materials={materialOptions}
            prices={priceOptions}
            filters={filters}
            onFilterChange={handleFilterChange}
            total={filteredProducts.length}
          />

          <div>
            <div className="mb-6 flex flex-col gap-4 rounded-[1.75rem] border border-noir/10 bg-ivory p-5 shadow-soft sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm uppercase tracking-brand text-taupe">
                Showing <span className="text-noir">{filteredProducts.length}</span> pieces
              </p>
              <label className="flex items-center gap-3 text-sm text-taupe">
                <span className="uppercase tracking-brand">Sort</span>
                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                  className="h-11 rounded-full border border-noir/10 bg-white px-4 text-sm text-noir focus:border-gold focus:outline-none"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <ProductGrid products={filteredProducts} onAddToCart={onAddToCart} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ShopPage
