import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/product/ProductCard.jsx'
import { products } from '@/data/products'
import { useStrkImages } from '@/hooks/useStrkImages'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const prices = ['All', '$30–$50', '$50–$80', '$80–$120']
const materials = ['All', '18K Gold Plated', 'Hypoallergenic']

export default function Shop({ onAddToCart }) {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(categories.includes(initialCategory) ? initialCategory : 'All')
  const [price, setPrice] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('Featured')
  const containerRef = useStrkImages([category, price, material, sort])

  useEffect(() => {
    const nextCategory = searchParams.get('category') || 'All'
    setCategory(categories.includes(nextCategory) ? nextCategory : 'All')
  }, [searchParams])


  const filteredProducts = useMemo(() => {
    const rangeMap = {
      '$30–$50': [30, 50],
      '$50–$80': [50, 80],
      '$80–$120': [80, 120],
    }

    let visible = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material || (material === 'Hypoallergenic' && product.category === 'Huggies')
      const priceMatch = price === 'All' || (product.price >= rangeMap[price][0] && product.price <= rangeMap[price][1])
      return categoryMatch && materialMatch && priceMatch
    })

    if (sort === 'Price: Low to High') visible = [...visible].sort((a, b) => a.price - b.price)
    if (sort === 'Price: High to Low') visible = [...visible].sort((a, b) => b.price - a.price)
    if (sort === 'Best Rated') visible = [...visible].sort((a, b) => b.rating - a.rating)

    return visible
  }, [category, material, price, sort])

  return (
    <main ref={containerRef} className="bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-8 sm:px-8 md:pb-14">
        <div className="border-b border-velmora-stone pb-8">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">Collection</p>
          <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="font-serif text-6xl font-semibold leading-none md:text-7xl">Shop Velmora</h1>
              <p className="mt-5 max-w-xl text-sm leading-7 text-velmora-taupe">
                Premium demi-fine pieces in warm gold tones, designed for self-purchase, gifting, and everyday elegance.
              </p>
            </div>
            <label className="flex flex-col gap-2 text-xs font-bold uppercase tracking-[0.18em] text-velmora-taupe">
              Sort
              <select value={sort} onChange={(event) => setSort(event.target.value)} className="min-h-12 rounded-full border border-velmora-stone bg-velmora-pearl px-5 text-sm font-semibold normal-case tracking-normal text-velmora-espresso">
                {['Featured', 'Price: Low to High', 'Price: High to Low', 'Best Rated'].map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-20 sm:px-8 lg:grid-cols-[270px_1fr]">
        <aside className="h-fit rounded-t-[2rem] border border-velmora-stone bg-velmora-pearl p-6 lg:sticky lg:top-28">
          <FilterGroup title="Category" options={categories} value={category} onChange={setCategory} />
          <FilterGroup title="Price" options={prices} value={price} onChange={setPrice} />
          <FilterGroup title="Material" options={materials} value={material} onChange={setMaterial} />
        </aside>

        <div>
          <div className="mb-5 flex items-center justify-between text-xs font-bold uppercase tracking-[0.2em] text-velmora-taupe">
            <span>{filteredProducts.length} pieces</span>
            <span>Free worldwide shipping</span>
          </div>
          {filteredProducts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />)}
            </div>
          ) : (
            <div className="rounded-t-[2rem] border border-velmora-stone bg-velmora-pearl p-10 text-center text-velmora-espresso">
              <p className="font-serif text-3xl font-semibold">No pieces match these filters.</p>
              <p className="mt-3 text-sm text-velmora-taupe">Try widening your edit for more golden options.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <div className="border-b border-velmora-stone/70 py-6 first:pt-0 last:border-b-0 last:pb-0">
      <h2 className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-gold">{title}</h2>
      <div className="mt-4 grid gap-2">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`rounded-full border px-4 py-2 text-left text-sm transition ${value === option ? 'border-velmora-espresso bg-velmora-espresso text-velmora-pearl' : 'border-velmora-stone bg-velmora-ivory text-velmora-espresso hover:border-velmora-gold'}`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}
