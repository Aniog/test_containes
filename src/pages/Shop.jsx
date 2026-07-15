import { useEffect, useMemo, useRef, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import ProductCard from '@/components/velmora/ProductCard'
import { products } from '@/data/products'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const priceOptions = [
  { label: 'All prices', value: 'all' },
  { label: 'Under $50', value: 'under-50' },
  { label: '$50–$80', value: '50-80' },
  { label: '$80+', value: '80-plus' },
]
const materialOptions = ['All materials', '18K Gold Plated', 'Crystal']

export default function Shop({ onAdd }) {
  const containerRef = useRef(null)
  const [category, setCategory] = useState('All')
  const [price, setPrice] = useState('all')
  const [material, setMaterial] = useState('All materials')
  const [sort, setSort] = useState('featured')

  const filteredProducts = useMemo(() => {
    const nextProducts = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All materials' || product.material === material
      const priceMatch =
        price === 'all' ||
        (price === 'under-50' && product.price < 50) ||
        (price === '50-80' && product.price >= 50 && product.price <= 80) ||
        (price === '80-plus' && product.price > 80)

      return categoryMatch && materialMatch && priceMatch
    })

    if (sort === 'price-low') return [...nextProducts].sort((a, b) => a.price - b.price)
    if (sort === 'price-high') return [...nextProducts].sort((a, b) => b.price - a.price)
    if (sort === 'rating') return [...nextProducts].sort((a, b) => b.rating - a.rating)
    return nextProducts
  }, [category, price, material, sort])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [category, price, material, sort])

  return (
    <main ref={containerRef} className="bg-velmora-parchment pt-28 text-velmora-espresso">
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-10 sm:px-8 lg:px-12">
        <div className="border-b border-velmora-espresso/10 pb-8">
          <p className="text-xs font-bold uppercase tracking-atelier text-velmora-gold">The collection</p>
          <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="font-serif text-5xl leading-tight text-velmora-espresso md:text-7xl">Shop Velmora</h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-velmora-taupe">Demi-fine gold essentials, designed to feel refined on Monday morning and luminous by candlelight.</p>
            </div>
            <label className="flex w-full max-w-xs flex-col gap-2 text-xs font-bold uppercase tracking-luxury text-velmora-cocoa">
              Sort
              <select value={sort} onChange={(event) => setSort(event.target.value)} className="h-12 border border-velmora-espresso/15 bg-velmora-ivory px-4 text-sm font-medium normal-case tracking-normal text-velmora-espresso focus:border-velmora-gold focus:outline-none focus:ring-2 focus:ring-velmora-champagne/40">
                <option value="featured">Featured</option>
                <option value="price-low">Price: low to high</option>
                <option value="price-high">Price: high to low</option>
                <option value="rating">Highest rated</option>
              </select>
            </label>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-20 sm:px-8 lg:grid-cols-[280px_1fr] lg:px-12 lg:pb-28">
        <aside className="h-fit border border-velmora-espresso/10 bg-velmora-ivory p-5 text-velmora-espresso lg:sticky lg:top-28">
          <div className="mb-5 flex items-center gap-2 border-b border-velmora-espresso/10 pb-4">
            <SlidersHorizontal className="h-4 w-4 text-velmora-gold" />
            <h2 className="text-xs font-bold uppercase tracking-refined text-velmora-cocoa">Filters</h2>
          </div>

          <div className="space-y-7">
            <fieldset>
              <legend className="mb-3 text-xs font-bold uppercase tracking-luxury text-velmora-taupe">Category</legend>
              <div className="flex flex-wrap gap-2 lg:flex-col">
                {categoryOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setCategory(option)}
                    className={`border px-4 py-2 text-xs font-bold uppercase tracking-luxe transition ${category === option ? 'border-velmora-espresso bg-velmora-espresso text-velmora-ivory' : 'border-velmora-espresso/15 bg-transparent text-velmora-espresso hover:border-velmora-gold'}`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="mb-3 text-xs font-bold uppercase tracking-luxury text-velmora-taupe">Price</legend>
              <div className="space-y-2">
                {priceOptions.map((option) => (
                  <label key={option.value} className="flex cursor-pointer items-center gap-3 text-sm text-velmora-cocoa">
                    <input type="radio" name="price" value={option.value} checked={price === option.value} onChange={(event) => setPrice(event.target.value)} className="accent-velmora-gold" />
                    {option.label}
                  </label>
                ))}
              </div>
            </fieldset>

            <label className="flex flex-col gap-3 text-xs font-bold uppercase tracking-luxury text-velmora-taupe">
              Material
              <select value={material} onChange={(event) => setMaterial(event.target.value)} className="h-12 border border-velmora-espresso/15 bg-velmora-parchment px-4 text-sm font-medium normal-case tracking-normal text-velmora-espresso focus:border-velmora-gold focus:outline-none focus:ring-2 focus:ring-velmora-champagne/40">
                {materialOptions.map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
            </label>
          </div>
        </aside>

        <div>
          <div className="mb-5 flex items-center justify-between text-sm text-velmora-taupe">
            <p>{filteredProducts.length} {filteredProducts.length === 1 ? 'piece' : 'pieces'}</p>
            <p>Premium demi-fine jewelry from $30–$120</p>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => <ProductCard key={product.id} product={product} onAdd={onAdd} context="shop-grid" />)}
            </div>
          ) : (
            <div className="border border-velmora-espresso/10 bg-velmora-ivory p-10 text-center text-velmora-espresso">
              <h3 className="font-serif text-3xl">No pieces match these filters.</h3>
              <p className="mt-3 text-sm text-velmora-taupe">Try widening your search to see more of the Velmora collection.</p>
              <button type="button" onClick={() => { setCategory('All'); setPrice('all'); setMaterial('All materials') }} className="mt-6 border border-velmora-espresso px-5 py-3 text-xs font-bold uppercase tracking-luxury text-velmora-espresso transition hover:bg-velmora-espresso hover:text-velmora-ivory">Reset Filters</button>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
