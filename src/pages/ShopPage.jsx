import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'
import { useStrkImages } from '@/lib/useStrkImages'

const categoryFilters = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const priceFilters = [
  { label: 'All', min: 0, max: 999 },
  { label: 'Under $50', min: 0, max: 49 },
  { label: '$50–$80', min: 50, max: 80 },
  { label: '$80+', min: 81, max: 999 },
]
const materialFilters = ['All', '18K Gold Plated', 'Crystal']

export default function ShopPage() {
  const [searchParams] = useSearchParams()
  const initialCategory = categoryFilters.includes(searchParams.get('category')) ? searchParams.get('category') : 'All'
  const [category, setCategory] = useState(initialCategory)
  const [price, setPrice] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')
  const containerRef = useStrkImages([category, price, material, sort])

  const visibleProducts = useMemo(() => {
    const priceRange = priceFilters.find((item) => item.label === price) ?? priceFilters[0]
    const filtered = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const priceMatch = product.price >= priceRange.min && product.price <= priceRange.max
      const materialMatch = material === 'All' || product.material.includes(material)
      return categoryMatch && priceMatch && materialMatch
    })

    return [...filtered].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return products.findIndex((item) => item.id === a.id) - products.findIndex((item) => item.id === b.id)
    })
  }, [category, material, price, sort])

  return (
    <main ref={containerRef} className="bg-velmora-ivory pb-20 pt-24 text-velmora-espresso sm:pt-28">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-velmora-espresso px-6 py-14 text-velmora-porcelain sm:px-10 lg:px-14">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-gold">The collection</p>
          <h1 className="mt-4 font-serif text-5xl font-semibold tracking-[-0.04em] sm:text-7xl">Shop Velmora</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-velmora-champagne">Editorial gold essentials priced for everyday collecting, gifting, and luminous self-purchase.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 pt-10 sm:px-6 lg:grid-cols-[17rem_1fr] lg:px-8 lg:pt-14">
        <aside className="h-fit rounded-[1.7rem] border border-velmora-line bg-velmora-porcelain p-5 shadow-soft lg:sticky lg:top-28">
          <div className="mb-5 flex items-center gap-2 border-b border-velmora-line pb-4">
            <SlidersHorizontal className="h-4 w-4 text-velmora-bronze" />
            <h2 className="text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-espresso">Filters</h2>
          </div>
          <FilterGroup title="Category" options={categoryFilters} value={category} onChange={setCategory} />
          <FilterGroup title="Price" options={priceFilters.map((item) => item.label)} value={price} onChange={setPrice} />
          <FilterGroup title="Material" options={materialFilters} value={material} onChange={setMaterial} />
        </aside>

        <div>
          <div className="mb-6 flex flex-col gap-4 border-b border-velmora-line pb-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-semibold text-velmora-mink">Showing {visibleProducts.length} of {products.length} pieces</p>
            <label className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-velmora-bronze">
              Sort
              <select value={sort} onChange={(event) => setSort(event.target.value)} className="rounded-full border border-velmora-line bg-velmora-porcelain px-4 py-2 text-sm font-semibold normal-case tracking-normal text-velmora-espresso focus:outline-none focus:ring-2 focus:ring-velmora-gold">
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </label>
          </div>

          {visibleProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="rounded-[1.7rem] border border-dashed border-velmora-line bg-velmora-porcelain p-10 text-center text-velmora-espresso">
              <p className="font-serif text-3xl">No pieces match these filters.</p>
              <p className="mt-3 text-sm text-velmora-mink">Try widening your selection to discover more Velmora favorites.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <div className="border-b border-velmora-line py-5 last:border-b-0">
      <h3 className="mb-3 text-xs font-extrabold uppercase tracking-[0.22em] text-velmora-bronze">{title}</h3>
      <div className="flex flex-wrap gap-2 lg:grid">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`rounded-full border px-4 py-2 text-left text-sm font-semibold transition ${
              value === option
                ? 'border-velmora-gold bg-velmora-gold text-velmora-espresso'
                : 'border-velmora-line bg-velmora-ivory text-velmora-mink hover:border-velmora-gold hover:text-velmora-espresso'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}
