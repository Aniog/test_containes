import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import FilterSidebar from '../components/shop/FilterSidebar.jsx'
import ProductGrid from '../components/shared/ProductGrid.jsx'
import SectionHeading from '../components/shared/SectionHeading.jsx'
import { products } from '../lib/store-data.js'

function matchesPrice(price, selectedRange) {
  if (selectedRange === 'All') return true
  if (selectedRange === 'Under $50') return price < 50
  if (selectedRange === '$50 - $80') return price >= 50 && price <= 80
  if (selectedRange === '$80 - $120') return price >= 80 && price <= 120
  return true
}

function ShopPage() {
  const [searchParams] = useSearchParams()
  const categoryParam = searchParams.get('category') || 'All'
  const [filters, setFilters] = useState({
    category: categoryParam,
    price: 'All',
    material: 'All',
  })
  const [sortBy, setSortBy] = useState('Featured')

  useEffect(() => {
    setFilters((current) => (
      current.category === categoryParam ? current : { ...current, category: categoryParam }
    ))
  }, [categoryParam])

  const filteredProducts = useMemo(() => {
    const list = products.filter((product) => {
      const matchesCategory = filters.category === 'All' || product.category === filters.category
      const matchesMaterial = filters.material === 'All' || product.material === filters.material

      return matchesCategory && matchesMaterial && matchesPrice(product.price, filters.price)
    })

    if (sortBy === 'Price: Low to High') {
      return [...list].sort((a, b) => a.price - b.price)
    }
    if (sortBy === 'Price: High to Low') {
      return [...list].sort((a, b) => b.price - a.price)
    }
    if (sortBy === 'Newest') {
      return [...list].reverse()
    }

    return list
  }, [filters, sortBy])

  return (
    <section className="page-shell pb-16 pt-28 sm:pb-20 sm:pt-32">
      <div className="max-w-3xl">
        <SectionHeading
          eyebrow="The collection"
          title="Quiet luxury for every day"
          description="Shop curated demi-fine jewelry designed to feel elevated on arrival and effortless in real life."
        />
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[280px,1fr] lg:items-start">
        <FilterSidebar filters={filters} setFilters={setFilters} />

        <div>
          <div className="mb-6 flex flex-col gap-4 rounded-panel border border-velmora-line bg-white p-4 shadow-card sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-velmora-taupe">
              Showing <span className="font-medium text-velmora-espresso">{filteredProducts.length}</span> pieces
            </p>
            <label className="flex items-center gap-3 text-sm text-velmora-ink">
              <span>Sort</span>
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="rounded-full border border-velmora-line bg-velmora-mist px-4 py-2 text-sm text-velmora-espresso"
              >
                <option>Featured</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </label>
          </div>

          <ProductGrid products={filteredProducts} columns="compact" />
        </div>
      </div>
    </section>
  )
}

export default ShopPage
