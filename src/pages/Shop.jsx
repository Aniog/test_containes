import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ProductCard from '@/components/shared/ProductCard'
import SectionHeading from '@/components/shared/SectionHeading'
import FilterSidebar from '@/components/shop/FilterSidebar'
import { products } from '@/data/store'
import useStrkImages from '@/hooks/useStrkImages'

const priceMatches = (price, ranges) => {
  if (ranges.length === 0 || ranges.length === 3) {
    return true
  }

  return ranges.some((range) => {
    if (range === 'Under $50') {
      return price < 50
    }

    if (range === '$50-$80') {
      return price >= 50 && price <= 80
    }

    return price > 80
  })
}

const Shop = () => {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const initialCategory = params.get('category')
  const [filters, setFilters] = useState({
    category: initialCategory ? [initialCategory] : [],
    material: [],
    price: ['Under $50', '$50-$80', '$80+'],
  })
  const [sortBy, setSortBy] = useState('featured')
  const containerRef = useStrkImages([filters, sortBy, location.search])

  useEffect(() => {
    const categoryFromUrl = new URLSearchParams(location.search).get('category')

    setFilters((current) => ({
      ...current,
      category: categoryFromUrl ? [categoryFromUrl] : [],
    }))
  }, [location.search])

  const categories = useMemo(
    () => [...new Set(products.map((product) => product.category))],
    [],
  )
  const materials = useMemo(
    () => [...new Set(products.map((product) => product.material))],
    [],
  )

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const categoryMatch =
        filters.category.length === 0 || filters.category.includes(product.category)
      const materialMatch =
        filters.material.length === 0 || filters.material.includes(product.material)
      const priceMatch = priceMatches(product.price, filters.price)

      return categoryMatch && materialMatch && priceMatch
    })

    if (sortBy === 'price-low') {
      return [...result].sort((a, b) => a.price - b.price)
    }

    if (sortBy === 'price-high') {
      return [...result].sort((a, b) => b.price - a.price)
    }

    if (sortBy === 'top-rated') {
      return [...result].sort((a, b) => b.rating - a.rating)
    }

    return result
  }, [filters, sortBy])

  return (
    <main className="bg-stone-50 pt-28 sm:pt-32" ref={containerRef}>
      <section className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Collection"
            title="Shop Velmora"
            description="A refined edit of demi-fine jewelry for gifting, layering, and everyday wear."
          />
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:px-8">
          <FilterSidebar
            categories={categories}
            filters={filters}
            materials={materials}
            setFilters={setFilters}
          />

          <div>
            <div className="mb-6 flex flex-col gap-4 rounded-[1.75rem] border border-stone-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-stone-600">
                Showing <span className="font-medium text-stone-950">{filteredProducts.length}</span> pieces
              </p>
              <label className="flex items-center gap-3 text-sm text-stone-600">
                <span className="uppercase tracking-[0.26em] text-stone-500">Sort</span>
                <select
                  className="rounded-full border border-stone-300 bg-stone-50 px-4 py-3 text-sm text-stone-900 focus:border-stone-950 focus:outline-none"
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to high</option>
                  <option value="price-high">Price: High to low</option>
                  <option value="top-rated">Top rated</option>
                </select>
              </label>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  instanceId={`shop-grid-${product.slug}`}
                  product={product}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Shop
