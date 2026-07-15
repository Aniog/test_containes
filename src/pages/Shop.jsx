import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import FilterSidebar from '@/components/shop/FilterSidebar.jsx'
import ProductGrid from '@/components/shop/ProductGrid.jsx'
import ShopControls from '@/components/shop/ShopControls.jsx'
import { filters, products } from '@/data/products.js'
import { useStrkImages } from '@/hooks/useStrkImages.js'

const defaultFilters = {
  category: 'All',
  price: 'All',
  material: 'All',
}

function sortProducts(items, sort) {
  const sorted = [...items]

  if (sort === 'Price: Low to High') {
    return sorted.sort((a, b) => a.price - b.price)
  }

  if (sort === 'Price: High to Low') {
    return sorted.sort((a, b) => b.price - a.price)
  }

  if (sort === 'Top Rated') {
    return sorted.sort((a, b) => b.rating - a.rating)
  }

  return sorted
}

export default function Shop() {
  const [searchParams] = useSearchParams()
  const [selected, setSelected] = useState(defaultFilters)
  const [sort, setSort] = useState(filters.sorts[0])

  useEffect(() => {
    const categoryParam = searchParams.get('category')
    if (categoryParam && filters.categories.includes(categoryParam)) {
      setSelected((current) => ({ ...current, category: categoryParam }))
    }
  }, [searchParams])

  const visibleProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const categoryMatch = selected.category === 'All' || product.category === selected.category
      const priceMatch = selected.price === 'All' || product.priceRange === selected.price
      const materialMatch = selected.material === 'All' || product.material === selected.material
      return categoryMatch && priceMatch && materialMatch
    })

    return sortProducts(filtered, sort)
  }, [selected, sort])

  const containerRef = useStrkImages([selected.category, selected.price, selected.material, sort])

  const handleFilterChange = (key, value) => {
    setSelected((current) => ({ ...current, [key]: value }))
  }

  return (
    <div className="bg-velmora-ivory" ref={containerRef}>
      <section className="border-b border-velmora-mist bg-velmora-porcelain px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-eyebrow text-velmora-gold">Collection</p>
          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h1 className="font-serif text-5xl leading-none text-velmora-ink sm:text-6xl">
                A refined edit of earrings, necklaces, and huggies
              </h1>
              <p className="mt-5 text-base leading-8 text-velmora-taupe">
                Designed for everyday polish with premium finishes, soft gifting cues, and a quiet-luxury point of view.
              </p>
            </div>
            <div className="hidden lg:block">
              <label className="text-xs uppercase tracking-eyebrow text-velmora-gold" htmlFor="shop-sort">
                Sort by
              </label>
              <select
                className="mt-3 h-12 rounded-full border border-velmora-mist bg-velmora-ivory px-5 text-sm text-velmora-ink focus:border-velmora-gold focus:outline-none"
                id="shop-sort"
                onChange={(event) => setSort(event.target.value)}
                value={sort}
              >
                {filters.sorts.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-7xl space-y-8 lg:grid lg:grid-cols-[18rem,1fr] lg:gap-10 lg:space-y-0">
          <ShopControls
            filterOptions={filters}
            onFilterChange={handleFilterChange}
            onSortChange={setSort}
            selected={selected}
            sort={sort}
          />
          <aside className="hidden lg:block lg:sticky lg:top-28 lg:self-start">
            <FilterSidebar
              filterOptions={filters}
              onFilterChange={handleFilterChange}
              selected={selected}
            />
          </aside>
          <div className="space-y-6">
            <div className="flex items-center justify-between text-sm text-velmora-taupe">
              <p>{visibleProducts.length} pieces</p>
              <p className="hidden sm:block">Premium but accessible, priced from $30–$120</p>
            </div>
            <ProductGrid products={visibleProducts} />
          </div>
        </div>
      </section>
    </div>
  )
}
