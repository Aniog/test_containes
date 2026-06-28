import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/products/ProductCard'
import ProductFilters from '@/components/products/ProductFilters'
import SectionHeading from '@/components/home/SectionHeading'
import { collectionFilters, products } from '@/data/products'

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

function matchesPrice(price, bucket) {
  if (bucket === 'Under $50') return price < 50
  if (bucket === '$50–$80') return price >= 50 && price <= 80
  if (bucket === '$80+') return price > 80
  return true
}

export default function ShopPage() {
  const [params, setParams] = useSearchParams()
  const [sort, setSort] = useState('featured')

  const selected = {
    categories: params.get('category') || 'All',
    prices: params.get('price') || 'All',
    materials: params.get('material') || 'All',
  }

  const filteredProducts = useMemo(() => {
    const next = products.filter((product) => {
      const categoryMatch =
        selected.categories === 'All' || product.category === selected.categories
      const priceMatch = matchesPrice(product.price, selected.prices)
      const materialMatch =
        selected.materials === 'All' || product.material === selected.materials

      return categoryMatch && priceMatch && materialMatch
    })

    if (sort === 'price-asc') {
      return [...next].sort((a, b) => a.price - b.price)
    }

    if (sort === 'price-desc') {
      return [...next].sort((a, b) => b.price - a.price)
    }

    if (sort === 'rating') {
      return [...next].sort((a, b) => b.rating - a.rating)
    }

    return next
  }, [selected.categories, selected.materials, selected.prices, sort])

  const handleFilterChange = (key, value) => {
    const next = new URLSearchParams(params)
    const paramName = key === 'categories' ? 'category' : key === 'prices' ? 'price' : 'material'

    if (value === 'All') {
      next.delete(paramName)
    } else {
      next.set(paramName, value)
    }

    setParams(next)
  }

  return (
    <main className="bg-stone-50 pb-20 pt-32 sm:pb-24">
      <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Collection"
            title="Modern demi-fine pieces with a warm golden finish"
            description="Filter by category, price, or material to find the Velmora styles that match your everyday ritual."
          />
          <label className="flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-stone-500">
            Sort by
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              className="rounded-full border border-stone-300 bg-white px-4 py-3 text-xs uppercase tracking-[0.22em] text-stone-900 outline-none"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[290px,1fr]">
          <ProductFilters
            filters={collectionFilters}
            selected={selected}
            onChange={handleFilterChange}
          />

          <div>
            <div className="mb-5 flex items-center justify-between text-xs uppercase tracking-[0.24em] text-stone-500">
              <p>{filteredProducts.length} pieces</p>
              <p>Premium but accessible, always gift-ready</p>
            </div>
            {filteredProducts.length > 0 ? (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="rounded-[2rem] border border-stone-200 bg-white px-6 py-12 text-center shadow-[0_16px_45px_rgba(28,25,23,0.05)]">
                <p className="text-xs uppercase tracking-[0.32em] text-stone-500">No pieces found</p>
                <h2 className="mt-4 font-[Cormorant_Garamond] text-4xl text-stone-950">
                  Try a softer filter combination
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base leading-8 text-stone-600">
                  Remove one or more filters to reveal the full Velmora edit of gifting favorites and everyday signatures.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
