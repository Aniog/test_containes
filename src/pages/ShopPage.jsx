import { useState, useMemo } from 'react'
import { products } from '@/data/products'
import FilterSidebar from '@/components/collection/FilterSidebar'
import ProductGrid from '@/components/collection/ProductGrid'

export default function ShopPage() {
  const [filters, setFilters] = useState({
    category: [],
    price: null,
    material: [],
  })
  const [sort, setSort] = useState('featured')

  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Category filter
    if (filters.category.length > 0) {
      result = result.filter((p) => filters.category.includes(p.category))
    }

    // Price filter
    if (filters.price) {
      result = result.filter(
        (p) => p.price >= filters.price.min && p.price <= filters.price.max
      )
    }

    // Material filter
    if (filters.material.length > 0) {
      result = result.filter((p) => filters.material.includes(p.material))
    }

    // Sort
    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        result.reverse()
        break
      default:
        break
    }

    return result
  }, [filters, sort])

  return (
    <main className="pt-20 md:pt-24">
      {/* Page header */}
      <div className="bg-[#FAF8F5] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            id="shop-section-title"
            className="font-serif text-3xl md:text-4xl text-[#1A1A1A] tracking-wide text-center"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Shop All
          </h1>
          <p className="mt-3 text-sm text-[#6B6560] text-center">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <FilterSidebar filters={filters} setFilters={setFilters} products={products} />

          {/* Main content */}
          <div className="flex-1">
            {/* Sort & results */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-[#6B6560]">
                Showing {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''}
              </p>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="text-sm text-[#1A1A1A] border border-[#E8E4DF] px-3 py-2 bg-white focus:outline-none focus:border-[#B8860B]"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {/* Product grid */}
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </div>
    </main>
  )
}
