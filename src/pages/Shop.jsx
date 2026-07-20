import { SlidersHorizontal } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
import strkImgConfig from '../strk-img-config.json'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const prices = ['All', 'Under $50', '$50–$80', '$80+']
const materials = ['All', '18K Gold Plated', 'Hypoallergenic']

function FilterGroup({ title, options, value, onChange }) {
  return (
    <div className="border-b border-velmora-blush py-6 first:pt-0">
      <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.26em] text-velmora-umber">
        {title}
      </h3>
      <div className="grid gap-2">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`rounded-full border px-4 py-2 text-left text-sm font-semibold transition-colors ${
              value === option
                ? 'border-velmora-champagne bg-velmora-champagne text-velmora-ink'
                : 'border-transparent text-velmora-umber hover:border-velmora-blush hover:text-velmora-ink'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}

function Shop({ onAddToCart }) {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(categories.includes(initialCategory) ? initialCategory : 'All')
  const [price, setPrice] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('Featured')
  const pageRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [])

  useEffect(() => {
    const paramCategory = searchParams.get('category') || 'All'
    setCategory(categories.includes(paramCategory) ? paramCategory : 'All')
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material || (material === 'Hypoallergenic')
      const priceMatch =
        price === 'All' ||
        (price === 'Under $50' && product.price < 50) ||
        (price === '$50–$80' && product.price >= 50 && product.price <= 80) ||
        (price === '$80+' && product.price > 80)
      return categoryMatch && materialMatch && priceMatch
    })

    return [...result].sort((a, b) => {
      if (sort === 'Price: Low to High') return a.price - b.price
      if (sort === 'Price: High to Low') return b.price - a.price
      if (sort === 'Name') return a.name.localeCompare(b.name)
      return 0
    })
  }, [category, material, price, sort])

  return (
    <main ref={pageRef} className="bg-velmora-ivory pt-24 text-velmora-ink md:pt-28">
      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-16">
        <div className="mb-10 border-b border-velmora-blush pb-8">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-velmora-gold">Shop Velmora</p>
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h1 className="font-serif text-5xl font-semibold leading-tight text-velmora-ink md:text-7xl">
                Demi-fine pieces for every glow
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-velmora-umber">
                Explore warm gold earrings, necklaces, huggies, and gift sets designed for premium everyday wear.
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-full border border-velmora-blush bg-velmora-cream px-4 py-3 text-velmora-ink">
              <label htmlFor="sort" className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-umber">
                Sort
              </label>
              <select
                id="sort"
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="bg-transparent text-sm font-semibold text-velmora-ink outline-none"
              >
                {['Featured', 'Price: Low to High', 'Price: High to Low', 'Name'].map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="rounded-[2rem] border border-velmora-blush bg-velmora-cream p-6 text-velmora-ink shadow-soft lg:sticky lg:top-28 lg:self-start">
            <div className="mb-6 flex items-center gap-3">
              <SlidersHorizontal className="h-5 w-5 text-velmora-gold" />
              <h2 className="text-sm font-bold uppercase tracking-[0.24em]">Filters</h2>
            </div>
            <FilterGroup title="Category" options={categories} value={category} onChange={setCategory} />
            <FilterGroup title="Price" options={prices} value={price} onChange={setPrice} />
            <FilterGroup title="Material" options={materials} value={material} onChange={setMaterial} />
          </aside>

          <section>
            <div className="mb-6 flex items-center justify-between text-sm text-velmora-umber">
              <p>{filteredProducts.length} pieces</p>
              <p className="hidden md:block">Free worldwide shipping on every order</p>
            </div>
            {filteredProducts.length > 0 ? (
              <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                ))}
              </div>
            ) : (
              <div className="rounded-[2rem] border border-velmora-blush bg-velmora-cream p-10 text-center text-velmora-ink">
                <h3 className="font-serif text-3xl font-semibold">No pieces found</h3>
                <p className="mt-3 text-velmora-umber">Try a different category or price range.</p>
              </div>
            )}
          </section>
        </div>
      </section>
    </main>
  )
}

export default Shop
