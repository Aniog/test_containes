import { useEffect, useMemo, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { SlidersHorizontal } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const prices = [
  { label: 'All', value: 'all' },
  { label: 'Under $50', value: 'under-50' },
  { label: '$50–$80', value: '50-80' },
  { label: '$80+', value: '80-plus' },
]
const materials = ['All', '18K Gold Plated', 'Gold Vermeil']

export default function ShopPage({ onAddToCart }) {
  const pageRef = useRef(null)
  const location = useLocation()
  const initialSearch = new URLSearchParams(location.search)
  const [category, setCategory] = useState(initialSearch.get('category') || 'All')
  const [price, setPrice] = useState('all')
  const [material, setMaterial] = useState(initialSearch.get('material') || 'All')
  const [sort, setSort] = useState('featured')

  useEffect(() => {
    const nextSearch = new URLSearchParams(location.search)
    setCategory(nextSearch.get('category') || 'All')
    setMaterial(nextSearch.get('material') || 'All')
  }, [location.search])

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material
      const priceMatch =
        price === 'all' ||
        (price === 'under-50' && product.price < 50) ||
        (price === '50-80' && product.price >= 50 && product.price <= 80) ||
        (price === '80-plus' && product.price > 80)
      return categoryMatch && materialMatch && priceMatch
    })

    if (sort === 'price-low') return [...result].sort((a, b) => a.price - b.price)
    if (sort === 'price-high') return [...result].sort((a, b) => b.price - a.price)
    if (sort === 'rating') return [...result].sort((a, b) => b.rating - a.rating)
    return result
  }, [category, material, price, sort])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [category, material, price, sort, filteredProducts.length])

  return (
    <main ref={pageRef} className="min-h-screen bg-velmora-porcelain pt-28 text-velmora-ink">
      <section className="velmora-container pb-12 pt-8 md:pb-16 md:pt-14">
        <div className="grid gap-6 border-b border-velmora-sand pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="eyebrow">The Collection</p>
            <h1 className="serif-display mt-3 text-6xl text-velmora-ink md:text-8xl">Shop Velmora</h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-velmora-clay">Premium-but-accessible gold pieces designed for stacking, gifting, and everyday radiance.</p>
          </div>
          <label className="flex max-w-xs items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-velmora-clay">
            Sort
            <select value={sort} onChange={(event) => setSort(event.target.value)} className="w-full rounded-full border border-velmora-sand bg-velmora-pearl px-5 py-3 text-velmora-ink focus:border-velmora-gold focus:outline-none">
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to high</option>
              <option value="price-high">Price: High to low</option>
              <option value="rating">Top rated</option>
            </select>
          </label>
        </div>

        <div className="grid gap-8 pt-10 lg:grid-cols-[270px_1fr]">
          <aside className="h-fit border border-velmora-sand bg-velmora-pearl p-5 text-velmora-ink lg:sticky lg:top-28">
            <div className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-velmora-ink">
              <SlidersHorizontal className="h-4 w-4 text-velmora-gold" /> Filters
            </div>
            <FilterGroup title="Category" options={categories} value={category} onChange={setCategory} />
            <FilterGroup title="Price" options={prices} value={price} onChange={setPrice} valueKey="value" labelKey="label" />
            <FilterGroup title="Material" options={materials} value={material} onChange={setMaterial} />
          </aside>

          <div>
            <div className="mb-5 flex items-center justify-between text-xs font-bold uppercase tracking-[0.20em] text-velmora-clay">
              <span>{filteredProducts.length} pieces</span>
              <span>Free worldwide shipping</span>
            </div>
            {filteredProducts.length > 0 ? (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                ))}
              </div>
            ) : (
              <div className="border border-velmora-sand bg-velmora-pearl p-10 text-center text-velmora-ink">
                <h2 className="font-serif text-4xl font-semibold">No pieces matched</h2>
                <p className="mt-3 text-sm text-velmora-clay">Try another category, material, or price range.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, onChange, valueKey, labelKey }) {
  return (
    <fieldset className="border-t border-velmora-sand py-5 first:border-t-0 first:pt-0">
      <legend className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-velmora-clay">{title}</legend>
      <div className="grid gap-2">
        {options.map((option) => {
          const optionValue = valueKey ? option[valueKey] : option
          const label = labelKey ? option[labelKey] : option
          return (
            <label key={optionValue} className="flex cursor-pointer items-center gap-3 rounded-full px-1 py-1 text-sm text-velmora-ink">
              <input type="radio" name={title} value={optionValue} checked={value === optionValue} onChange={() => onChange(optionValue)} className="h-4 w-4 accent-velmora-gold" />
              {label}
            </label>
          )
        })}
      </div>
    </fieldset>
  )
}
