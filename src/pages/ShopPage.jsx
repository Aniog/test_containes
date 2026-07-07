import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductGrid from '@/components/product/ProductGrid'
import FilterSidebar from '@/components/product/FilterSidebar'
import SectionHeading from '@/components/shared/SectionHeading'
import {
  materialFilters,
  priceFilters,
  productCategories,
  products,
  sortOptions,
} from '@/data/products'

const matchesPrice = (price, value) => {
  if (value === 'under-50') return price < 50
  if (value === '50-80') return price >= 50 && price <= 80
  if (value === '80-120') return price > 80 && price <= 120
  return true
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeMaterial, setActiveMaterial] = useState('All')
  const [activePrice, setActivePrice] = useState('all')
  const [sortBy, setSortBy] = useState('featured')

  useEffect(() => {
    const nextCategory = searchParams.get('category')

    if (nextCategory && productCategories.includes(nextCategory)) {
      setActiveCategory(nextCategory)
      return
    }

    setActiveCategory('All')
  }, [searchParams])

  const handleCategoryChange = (nextCategory) => {
    const nextParams = new URLSearchParams(searchParams)

    if (nextCategory === 'All') {
      nextParams.delete('category')
    } else {
      nextParams.set('category', nextCategory)
    }

    setSearchParams(nextParams)
  }

  const filteredProducts = useMemo(() => {
    const nextProducts = products
      .filter((product) => activeCategory === 'All' || product.category === activeCategory)
      .filter((product) => activeMaterial === 'All' || product.material === activeMaterial)
      .filter((product) => matchesPrice(product.price, activePrice))

    if (sortBy === 'price-asc') {
      return [...nextProducts].sort((first, second) => first.price - second.price)
    }

    if (sortBy === 'price-desc') {
      return [...nextProducts].sort((first, second) => second.price - first.price)
    }

    if (sortBy === 'name') {
      return [...nextProducts].sort((first, second) => first.name.localeCompare(second.name))
    }

    return nextProducts
  }, [activeCategory, activeMaterial, activePrice, sortBy])

  return (
    <main className="bg-porcelain pt-10 sm:pt-14">
      <section className="section-shell pt-10 sm:pt-12">
        <div className="container-shell space-y-10">
          <SectionHeading
            eyebrow="The Collection"
            title="A considered edit of demi-fine essentials"
            description="Polished earrings, necklaces, and gifting sets designed to feel elevated now and wearable long after the occasion passes."
            action={
              <div className="flex items-center gap-3 rounded-full border border-mist bg-porcelain px-4 py-2.5">
                <label htmlFor="sort-by" className="text-xs font-semibold uppercase tracking-[0.28em] text-rose">
                  Sort
                </label>
                <select
                  id="sort-by"
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="bg-transparent text-sm text-espresso outline-none"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            }
          />

          <div className="grid gap-8 lg:grid-cols-[18rem_1fr] lg:items-start">
            <FilterSidebar
              categories={productCategories}
              materials={materialFilters}
              prices={priceFilters}
              activeCategory={activeCategory}
              activeMaterial={activeMaterial}
              activePrice={activePrice}
              onCategoryChange={handleCategoryChange}
              onMaterialChange={setActiveMaterial}
              onPriceChange={setActivePrice}
            />

            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-mist/70 pb-4 text-sm text-espresso/70">
                <p>{filteredProducts.length} pieces</p>
                <p>Premium but accessible, from $30 to $120</p>
              </div>

              <ProductGrid products={filteredProducts} columns="three" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
