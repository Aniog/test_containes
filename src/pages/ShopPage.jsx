import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import FilterSidebar from '@/components/products/FilterSidebar'
import ProductGrid from '@/components/products/ProductGrid'
import SectionHeading from '@/components/ui/SectionHeading'
import { products } from '@/data/products'

const defaultFilters = {
  categories: [],
  prices: [],
  materials: [],
}

function matchesPrice(product, selectedPrices) {
  if (selectedPrices.length === 0) {
    return true
  }

  return selectedPrices.some((price) => {
    if (price === 'under-50') return product.price < 50
    if (price === '50-80') return product.price >= 50 && product.price < 80
    if (price === '80-plus') return product.price >= 80
    return true
  })
}

function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filters, setFilters] = useState(defaultFilters)
  const [sortBy, setSortBy] = useState('featured')

  useEffect(() => {
    const category = searchParams.get('category')
    setFilters((current) => ({
      ...current,
      categories: category ? [category] : [],
    }))
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    const nextProducts = products.filter((product) => {
      const categoryMatch =
        filters.categories.length === 0 || filters.categories.includes(product.category)
      const materialMatch =
        filters.materials.length === 0 ||
        filters.materials.some((material) => product.filterMaterials.includes(material))
      const priceMatch = matchesPrice(product, filters.prices)

      return categoryMatch && materialMatch && priceMatch
    })

    if (sortBy === 'price-low') {
      return [...nextProducts].sort((left, right) => left.price - right.price)
    }
    if (sortBy === 'price-high') {
      return [...nextProducts].sort((left, right) => right.price - left.price)
    }
    if (sortBy === 'rating') {
      return [...nextProducts].sort((left, right) => right.rating - left.rating)
    }
    return nextProducts
  }, [filters, sortBy])

  const toggleValue = (group, value) => {
    setFilters((current) => {
      const exists = current[group].includes(value)
      return {
        ...current,
        [group]: exists
          ? current[group].filter((item) => item !== value)
          : [...current[group], value],
      }
    })
  }

  const clearFilters = () => {
    setFilters(defaultFilters)
    setSearchParams({})
  }

  return (
    <div className="bg-stone-50 pb-20 pt-28 sm:pb-24 sm:pt-32">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] border border-stone-200 bg-white px-6 py-10 shadow-sm shadow-stone-950/5 sm:px-10 sm:py-14">
          <SectionHeading
            eyebrow="Collection"
            title="Quietly polished jewelry for gifting and self-purchase."
            description="Explore earrings, necklaces, and huggies finished in warm gold tones and designed to feel premium from first wear."
          />
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <FilterSidebar
              filters={filters}
              onToggleCategory={(value) => toggleValue('categories', value)}
              onToggleMaterial={(value) => toggleValue('materials', value)}
              onTogglePrice={(value) => toggleValue('prices', value)}
              onClear={clearFilters}
            />
          </div>

          <div>
            <div className="mb-6 flex flex-col gap-4 rounded-[2rem] border border-stone-200 bg-white p-5 shadow-sm shadow-stone-950/5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-stone-600">
                Showing <span className="font-medium text-stone-950">{filteredProducts.length}</span> products
              </p>
              <label className="flex items-center gap-3 text-sm text-stone-600">
                <span className="text-xs uppercase tracking-[0.3em] text-stone-500">Sort</span>
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="h-11 rounded-full border border-stone-300 bg-stone-50 px-4 text-sm text-stone-900 outline-none transition focus:border-stone-900"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </label>
            </div>

            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ShopPage
