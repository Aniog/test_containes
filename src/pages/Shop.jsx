import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { SlidersHorizontal } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const priceRanges = ['All', 'Under $50', '$50–$80', '$80–$120']
const materials = ['All', '18K Gold Plated', 'Crystal Accent', 'Gold Filigree']

export default function Shop({ onAddToCart }) {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(categories.includes(initialCategory) ? initialCategory : 'All')
  const [price, setPrice] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('Featured')
  const containerRef = useRef(null)

  const filteredProducts = useMemo(() => {
    const matchesPrice = (product) => {
      if (price === 'Under $50') return product.price < 50
      if (price === '$50–$80') return product.price >= 50 && product.price <= 80
      if (price === '$80–$120') return product.price >= 80 && product.price <= 120
      return true
    }

    const list = products
      .filter((product) => category === 'All' || product.category === category)
      .filter((product) => material === 'All' || product.material === material)
      .filter(matchesPrice)

    if (sort === 'Price Low') return [...list].sort((a, b) => a.price - b.price)
    if (sort === 'Price High') return [...list].sort((a, b) => b.price - a.price)
    if (sort === 'Top Rated') return [...list].sort((a, b) => b.rating - a.rating)
    return list
  }, [category, material, price, sort])

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [category, material, price, sort])

  return (
    <main ref={containerRef} className="bg-velmora-cream px-5 pb-20 pt-28 text-velmora-ink md:px-8 lg:pt-32">
      <section className="mx-auto max-w-7xl border-b border-velmora-ink/10 pb-10">
        <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-brass">The collection</p>
        <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h1 className="font-serif text-6xl font-semibold leading-none text-velmora-ink md:text-8xl">Shop Velmora</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-velmora-ink/70">
              Demi-fine gold jewelry for refined everyday wear, gifting, and the softest golden finishing touch.
            </p>
          </div>
          <label className="flex min-w-56 flex-col gap-2 text-xs font-bold uppercase tracking-[0.18em] text-velmora-brass">
            Sort
            <select value={sort} onChange={(event) => setSort(event.target.value)} className="rounded-full border border-velmora-ink/15 bg-velmora-mist px-5 py-3 text-sm normal-case tracking-normal text-velmora-ink focus:outline-none focus:ring-2 focus:ring-velmora-champagne">
              {['Featured', 'Price Low', 'Price High', 'Top Rated'].map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 py-10 lg:grid-cols-[260px_1fr]">
        <aside className="h-fit border border-velmora-ink/10 bg-velmora-mist p-5 shadow-soft lg:sticky lg:top-28">
          <div className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-velmora-ink">
            <SlidersHorizontal className="h-4 w-4 text-velmora-brass" /> Filters
          </div>
          <FilterGroup title="Category" options={categories} value={category} onChange={setCategory} />
          <FilterGroup title="Price" options={priceRanges} value={price} onChange={setPrice} />
          <FilterGroup title="Material" options={materials} value={material} onChange={setMaterial} />
        </aside>

        <div>
          <div className="mb-6 flex items-center justify-between text-sm text-velmora-ink/65">
            <span>{filteredProducts.length} pieces</span>
            <span>Free worldwide shipping on every order</span>
          </div>
          {filteredProducts.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />)}
            </div>
          ) : (
            <div className="border border-velmora-ink/10 bg-velmora-mist p-10 text-center text-velmora-ink">
              <h2 className="font-serif text-4xl font-semibold">No pieces found</h2>
              <p className="mt-3 text-sm text-velmora-ink/70">Try easing your filters to reveal more golden essentials.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <fieldset className="border-t border-velmora-ink/10 py-5 first:border-t-0 first:pt-0">
      <legend className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-velmora-brass">{title}</legend>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option} className="flex cursor-pointer items-center justify-between gap-3 rounded-full px-3 py-2 text-sm text-velmora-ink transition hover:bg-velmora-cream">
            <span>{option}</span>
            <input className="accent-velmora-brass" type="radio" name={title} checked={value === option} onChange={() => onChange(option)} />
          </label>
        ))}
      </div>
    </fieldset>
  )
}
