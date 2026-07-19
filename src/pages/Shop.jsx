import { useState, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { Filter, X } from 'lucide-react'
import { products as allProducts } from '@/data/products'
import FilterSidebar from '@/components/shop/FilterSidebar'
import ProductGrid from '@/components/shop/ProductGrid'

export default function Shop() {
  const { category: urlCategory } = useParams()
  const [filters, setFilters] = useState({
    category: urlCategory ? urlCategory.charAt(0).toUpperCase() + urlCategory.slice(1) : null,
    priceMin: null,
    priceMax: null,
    material: null,
  })
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const handleFilterChange = (key, value) => {
    if (key === 'price') {
      if (!value) {
        setFilters(prev => ({ ...prev, priceMin: null, priceMax: null }))
      } else {
        setFilters(prev => ({ ...prev, priceMin: value.min, priceMax: value.max }))
      }
    } else {
      setFilters(prev => ({ ...prev, [key]: value }))
    }
  }

  const filteredProducts = useMemo(() => {
    let result = [...allProducts]

    if (filters.category) {
      result = result.filter(p => p.category === filters.category)
    }
    if (filters.material) {
      result = result.filter(p => p.material === filters.material)
    }
    if (filters.priceMin !== null && filters.priceMax !== null) {
      result = result.filter(p => p.price >= filters.priceMin && p.price <= filters.priceMax)
    }

    switch (sort) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
        break
      default:
        break
    }

    return result
  }, [filters, sort])

  const clearFilters = () => {
    setFilters({ category: null, priceMin: null, priceMax: null, material: null })
    setSort('featured')
  }

  const hasActiveFilters = filters.category || filters.material || filters.priceMin !== null

  return (
    <div className="bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-24 md:pt-28 pb-20">
        {/* Page header */}
        <div className="mb-10">
          <h1 className="font-serif text-3xl md:text-4xl text-espresso tracking-wide mb-3">
            {filters.category || 'All Jewelry'}
          </h1>
          <p className="text-sm text-taupe font-sans">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}
          </p>
        </div>

        {/* Mobile filter toggle */}
        <div className="md:hidden mb-6 flex items-center justify-between">
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="flex items-center gap-2 text-sm tracking-wider uppercase text-espresso font-sans font-medium"
          >
            <Filter size={16} />
            Filters
          </button>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="text-xs font-sans bg-transparent border border-taupe-light/40 px-3 py-1.5 text-espresso focus:outline-none"
          >
            <option value="featured">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
            <option value="newest">Newest</option>
          </select>
        </div>

        {/* Mobile filter panel */}
        {mobileFiltersOpen && (
          <div className="md:hidden mb-6 bg-warm-white p-5 border border-taupe-light/20">
            <FilterSidebar filters={filters} onFilterChange={handleFilterChange} open={true} />
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="mt-5 text-xs tracking-wider uppercase text-gold hover:text-gold-light transition-colors font-sans font-medium flex items-center gap-1"
              >
                <X size={12} />
                Clear All
              </button>
            )}
          </div>
        )}

        <div className="flex gap-8 lg:gap-12">
          {/* Desktop filter sidebar */}
          <div className="hidden md:block">
            <FilterSidebar filters={filters} onFilterChange={handleFilterChange} open={true} />
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="mt-6 text-xs tracking-wider uppercase text-gold hover:text-gold-light transition-colors font-sans font-medium flex items-center gap-1"
              >
                <X size={12} />
                Clear All
              </button>
            )}
          </div>

          {/* Product grid area */}
          <div className="flex-1 min-w-0">
            {/* Desktop sort */}
            <div className="hidden md:flex items-center justify-end mb-6">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="text-xs font-sans bg-transparent border border-taupe-light/40 px-3 py-1.5 text-espresso focus:outline-none"
              >
                <option value="featured">Sort by: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
                <option value="newest">Newest</option>
              </select>
            </div>

            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </div>
    </div>
  )
}
