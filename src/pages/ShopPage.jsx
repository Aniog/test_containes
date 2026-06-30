import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/products/ProductCard.jsx'
import FilterSidebar from '@/components/shop/FilterSidebar.jsx'
import SectionHeading from '@/components/ui/SectionHeading.jsx'
import { products } from '@/data/store.js'

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

function matchesPrice(price, filter) {
  if (filter === 'under-50') return price < 50
  if (filter === '50-80') return price >= 50 && price <= 80
  if (filter === '80-plus') return price >= 80
  return true
}

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [filters, setFilters] = useState({
    category: initialCategory,
    material: 'All',
    price: 'all',
  })
  const [sort, setSort] = useState('featured')

  const filteredProducts = useMemo(() => {
    const nextProducts = products.filter((product) => {
      const matchesCategory = filters.category === 'All' || product.category === filters.category
      const matchesMaterial = filters.material === 'All' || product.materials.includes(filters.material)
      return matchesCategory && matchesMaterial && matchesPrice(product.price, filters.price)
    })

    if (sort === 'price-low') {
      return [...nextProducts].sort((firstProduct, secondProduct) => firstProduct.price - secondProduct.price)
    }

    if (sort === 'price-high') {
      return [...nextProducts].sort((firstProduct, secondProduct) => secondProduct.price - firstProduct.price)
    }

    if (sort === 'rating') {
      return [...nextProducts].sort((firstProduct, secondProduct) => secondProduct.rating - firstProduct.rating)
    }

    return nextProducts
  }, [filters, sort])

  const handleFilterChange = (key, value) => {
    const nextFilters = { ...filters, [key]: value }
    setFilters(nextFilters)

    if (key === 'category') {
      const nextSearchParams = new URLSearchParams(searchParams)

      if (value === 'All') {
        nextSearchParams.delete('category')
      } else {
        nextSearchParams.set('category', value)
      }

      setSearchParams(nextSearchParams, { replace: true })
    }
  }

  return (
    <div className="bg-stone-950 pt-32 text-stone-100">
      <section className="section-shell py-16 sm:py-20">
        <SectionHeading
          eyebrow="Shop Velmora"
          title="A complete edit of luminous daily jewelry."
          description="Filter by category, material, or price to discover the pieces that fit your gifting list or your own signature stack."
        />
      </section>
      <section className="section-shell grid gap-8 pb-20 lg:grid-cols-[280px_1fr] lg:items-start">
        <FilterSidebar filters={filters} onChange={handleFilterChange} />
        <div className="space-y-6">
          <div className="flex flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-stone-900/70 p-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm uppercase tracking-[0.22em] text-stone-300">{filteredProducts.length} pieces</p>
            <label className="flex items-center gap-3 text-sm uppercase tracking-[0.22em] text-stone-300">
              Sort
              <select value={sort} onChange={(event) => setSort(event.target.value)} className="rounded-full border border-white/10 bg-stone-950 px-4 py-3 text-xs uppercase tracking-[0.2em] text-stone-100 outline-none">
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} contextId="shop" product={product} />
            ))}
          </div>
          {!filteredProducts.length ? (
            <div className="rounded-[2rem] border border-dashed border-white/15 bg-stone-900/50 px-6 py-16 text-center">
              <p className="font-display text-4xl text-stone-100">No pieces match that edit.</p>
              <p className="mt-3 text-sm leading-7 text-stone-400">Try broadening your filters to see the full collection again.</p>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  )
}
