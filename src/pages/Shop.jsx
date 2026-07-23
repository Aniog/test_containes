import { useEffect, useMemo, useRef, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'
import ProductCard from '../components/product/ProductCard.jsx'
import { products } from '../data/products.js'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const priceOptions = ['All', 'Under $50', '$50–$80', '$80+']
const materialOptions = ['All', '18K Gold Plated', 'Gold Vermeil']

function matchesPrice(product, price) {
  if (price === 'Under $50') return product.price < 50
  if (price === '$50–$80') return product.price >= 50 && product.price <= 80
  if (price === '$80+') return product.price > 80
  return true
}

export default function Shop({ onAddToCart }) {
  const containerRef = useRef(null)
  const [searchParams] = useSearchParams()
  const [category, setCategory] = useState(searchParams.get('category') || 'All')
  const [price, setPrice] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('Featured')

  const filteredProducts = useMemo(() => {
    const list = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material
      return categoryMatch && materialMatch && matchesPrice(product, price)
    })

    return [...list].sort((a, b) => {
      if (sort === 'Price: Low to High') return a.price - b.price
      if (sort === 'Price: High to Low') return b.price - a.price
      if (sort === 'Top Rated') return b.rating - a.rating
      return products.findIndex((item) => item.id === a.id) - products.findIndex((item) => item.id === b.id)
    })
  }, [category, material, price, sort])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [filteredProducts.length, category, price, material, sort])

  return (
    <main ref={containerRef} className="bg-velmora-cream pt-24 text-velmora-ink">
      <section className="border-b border-velmora-border bg-velmora-linen">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
          <p className="text-xs font-bold uppercase tracking-luxury text-velmora-gold">Collection</p>
          <div className="mt-4 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h1 id="shop-page-title" className="font-serifDisplay text-5xl leading-tight text-velmora-ink md:text-7xl">Shop Velmora</h1>
              <p id="shop-page-desc" className="mt-4 max-w-2xl text-base leading-8 text-velmora-clay">
                Demi-fine gold pieces for self-purchase, gifting, and the small rituals that deserve a little ceremony.
              </p>
            </div>
            <label className="flex items-center gap-3 text-sm text-velmora-clay">
              Sort
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="min-h-12 border border-velmora-border bg-velmora-cream px-4 text-sm text-velmora-ink focus:border-velmora-gold focus:outline-none"
              >
                {['Featured', 'Top Rated', 'Price: Low to High', 'Price: High to Low'].map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 md:grid-cols-[260px_1fr] md:px-8 md:py-14">
        <aside className="h-fit border border-velmora-border bg-velmora-linen p-5 text-velmora-ink md:sticky md:top-28">
          <div className="mb-6 flex items-center gap-3 border-b border-velmora-border pb-4">
            <SlidersHorizontal className="h-4 w-4 text-velmora-gold" />
            <h2 className="text-xs font-bold uppercase tracking-luxury text-velmora-ink">Filter</h2>
          </div>
          <div className="space-y-7">
            <FilterGroup title="Category" options={categoryOptions} value={category} onChange={setCategory} />
            <FilterGroup title="Price" options={priceOptions} value={price} onChange={setPrice} />
            <FilterGroup title="Material" options={materialOptions} value={material} onChange={setMaterial} />
          </div>
          <button
            type="button"
            onClick={() => {
              setCategory('All')
              setPrice('All')
              setMaterial('All')
            }}
            className="mt-8 w-full rounded-full border border-velmora-border px-5 py-3 text-xs font-bold uppercase tracking-luxury text-velmora-ink transition hover:border-velmora-gold hover:text-velmora-gold"
          >
            Clear Filters
          </button>
        </aside>

        <div>
          <div className="mb-6 flex items-center justify-between border-b border-velmora-border pb-4 text-sm text-velmora-clay">
            <span>{filteredProducts.length} pieces</span>
            <span className="hidden sm:inline">Free shipping on every order</span>
          </div>
          {filteredProducts.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} context="shop" />
              ))}
            </div>
          ) : (
            <div className="border border-velmora-border bg-velmora-linen p-12 text-center text-velmora-ink">
              <h3 className="font-serifDisplay text-3xl">No pieces found</h3>
              <p className="mt-3 text-sm text-velmora-clay">Try easing a filter to discover more Velmora favorites.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <fieldset>
      <legend className="mb-3 text-xs font-bold uppercase tracking-luxury text-velmora-clay">{title}</legend>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option} className="flex cursor-pointer items-center justify-between gap-3 rounded-sm px-1 py-2 text-sm text-velmora-ink transition hover:bg-velmora-cream">
            <span>{option}</span>
            <input
              type="radio"
              name={title}
              checked={value === option}
              onChange={() => onChange(option)}
              className="h-4 w-4 accent-velmora-gold"
            />
          </label>
        ))}
      </div>
    </fieldset>
  )
}
