import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { SlidersHorizontal } from 'lucide-react'
import ProductCard from '../components/products/ProductCard.jsx'
import { categories, products } from '../data/products.js'

const priceRanges = [
  { label: 'All prices', min: 0, max: 999 },
  { label: 'Under $50', min: 0, max: 49 },
  { label: '$50–$80', min: 50, max: 80 },
  { label: '$80–$120', min: 81, max: 120 },
]

export default function Shop({ onAddToCart }) {
  const location = useLocation()
  const [category, setCategory] = useState('All')
  const [price, setPrice] = useState(priceRanges[0].label)
  const [material, setMaterial] = useState('All materials')
  const [sort, setSort] = useState('Featured')

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const requestedCategory = params.get('category')
    setCategory(categories.includes(requestedCategory) ? requestedCategory : 'All')
  }, [location.search])

  const visibleProducts = useMemo(() => {
    const range = priceRanges.find((item) => item.label === price) ?? priceRanges[0]
    const filtered = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const priceMatch = product.price >= range.min && product.price <= range.max
      const materialMatch = material === 'All materials' || product.material === material
      return categoryMatch && priceMatch && materialMatch
    })

    return [...filtered].sort((a, b) => {
      if (sort === 'Price: Low to High') return a.price - b.price
      if (sort === 'Price: High to Low') return b.price - a.price
      if (sort === 'Top Rated') return b.rating - a.rating
      return 0
    })
  }, [category, price, material, sort])

  return (
    <main className="bg-stone-50 pt-28 text-stone-950">
      <section className="border-b border-amber-200 px-5 pb-10 pt-8 md:px-8 md:pb-14">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
            Collection
          </p>
          <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="font-serif text-6xl leading-none text-stone-950 md:text-8xl">
                Shop Velmora
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-stone-700">
                Demi-fine gold earrings, necklaces, huggies, and giftable sets for luminous everyday wear.
              </p>
            </div>
            <label className="flex items-center gap-3 text-sm text-stone-700">
              Sort
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-stone-950 focus:outline-none focus:ring-2 focus:ring-amber-700"
              >
                {['Featured', 'Top Rated', 'Price: Low to High', 'Price: High to Low'].map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[16rem_1fr] md:px-8 md:py-14">
        <aside className="h-fit border border-amber-200 bg-amber-50 p-5 text-stone-950 md:sticky md:top-28">
          <div className="mb-6 flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-amber-700" />
            <h2 className="text-xs font-bold uppercase tracking-[0.26em] text-stone-950">
              Filters
            </h2>
          </div>
          <FilterGroup title="Category" options={['All', ...categories]} value={category} onChange={setCategory} />
          <FilterGroup title="Price" options={priceRanges.map((item) => item.label)} value={price} onChange={setPrice} />
          <FilterGroup title="Material" options={['All materials', '18K Gold Plated']} value={material} onChange={setMaterial} />
        </aside>

        <div>
          <div className="mb-6 flex items-center justify-between gap-4 text-sm text-stone-700">
            <p>{visibleProducts.length} pieces</p>
            <p className="text-right">Free shipping on every order</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <div className="border-t border-amber-200 py-5 first:border-t-0 first:pt-0">
      <h3 className="mb-3 font-serif text-2xl text-stone-950">{title}</h3>
      <div className="grid gap-2">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`flex items-center justify-between border px-3 py-2 text-left text-sm transition ${
              value === option
                ? 'border-amber-700 bg-amber-700 text-stone-50'
                : 'border-amber-200 bg-transparent text-stone-700 hover:border-amber-700 hover:text-stone-950'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}
