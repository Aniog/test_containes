import { ImageHelper } from '@strikingly/sdk'
import { SlidersHorizontal } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/shop/ProductCard'
import { products } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const priceOptions = [
  { label: 'Under $50', min: 0, max: 49 },
  { label: '$50–$80', min: 50, max: 80 },
  { label: '$80+', min: 81, max: 200 },
]
const materialOptions = ['18K Gold Plated', 'Hypoallergenic']

export default function Shop({ onAdd }) {
  const containerRef = useRef(null)
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(categoryOptions.includes(initialCategory) ? initialCategory : 'All')
  const [price, setPrice] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')

  const filteredProducts = useMemo(() => {
    let list = [...products]
    if (category !== 'All') list = list.filter((product) => product.category === category)
    if (price !== 'All') {
      const range = priceOptions.find((option) => option.label === price)
      if (range) list = list.filter((product) => product.price >= range.min && product.price <= range.max)
    }
    if (material !== 'All') list = list.filter((product) => product.material === material || material === 'Hypoallergenic')
    if (sort === 'price-low') list.sort((a, b) => a.price - b.price)
    if (sort === 'price-high') list.sort((a, b) => b.price - a.price)
    if (sort === 'rating') list.sort((a, b) => b.rating - a.rating)
    return list
  }, [category, price, material, sort])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [filteredProducts.length])

  return (
    <main ref={containerRef} className="bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-8 md:px-8 md:pb-16">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-gold">The collection</p>
        <div className="mt-4 flex flex-col justify-between gap-5 border-b border-velmora-espresso/10 pb-8 md:flex-row md:items-end">
          <div>
            <h1 id="shop-page-title" className="font-serif text-6xl leading-none md:text-8xl">Shop Velmora</h1>
            <p id="shop-page-description" className="mt-4 max-w-2xl text-base leading-8 text-velmora-walnut">Explore demi-fine earrings, necklaces, huggies, and gift-ready sets in warm gold tones.</p>
          </div>
          <label className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-velmora-walnut">
            Sort
            <select value={sort} onChange={(event) => setSort(event.target.value)} className="rounded-full border border-velmora-espresso/15 bg-velmora-porcelain px-4 py-3 text-sm font-semibold normal-case tracking-normal text-velmora-espresso focus:border-velmora-gold focus:outline-none">
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </label>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-24 md:grid-cols-[260px_1fr] md:px-8">
        <aside className="h-fit border border-velmora-espresso/10 bg-velmora-porcelain p-5 text-velmora-espresso shadow-sm md:sticky md:top-28">
          <div className="mb-5 flex items-center gap-2 border-b border-velmora-espresso/10 pb-4">
            <SlidersHorizontal className="h-4 w-4 text-velmora-gold" />
            <h2 className="text-xs font-bold uppercase tracking-[0.24em]">Filters</h2>
          </div>
          <FilterGroup title="Category" value={category} onChange={setCategory} options={categoryOptions} />
          <FilterGroup title="Price" value={price} onChange={setPrice} options={['All', ...priceOptions.map((option) => option.label)]} />
          <FilterGroup title="Material" value={material} onChange={setMaterial} options={['All', ...materialOptions]} />
        </aside>

        <div>
          <div className="mb-5 flex items-center justify-between text-xs font-bold uppercase tracking-[0.2em] text-velmora-walnut">
            <span>{filteredProducts.length} pieces</span>
            <span>Premium-but-accessible · $30–$120</span>
          </div>
          {filteredProducts.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => <ProductCard key={product.id} product={product} onAdd={onAdd} context="shop" />)}
            </div>
          ) : (
            <div className="border border-velmora-espresso/10 bg-velmora-porcelain p-10 text-center text-velmora-espresso">
              <p className="font-serif text-3xl">No pieces match these filters.</p>
              <button type="button" onClick={() => { setCategory('All'); setPrice('All'); setMaterial('All') }} className="mt-5 rounded-full border border-velmora-gold px-6 py-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso transition hover:bg-velmora-gold hover:text-velmora-onyx">Reset filters</button>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <fieldset className="border-b border-velmora-espresso/10 py-5 last:border-b-0">
      <legend className="mb-3 font-serif text-2xl text-velmora-espresso">{title}</legend>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option} className="flex cursor-pointer items-center gap-3 text-sm text-velmora-walnut transition hover:text-velmora-espresso">
            <input type="radio" name={title} checked={value === option} onChange={() => onChange(option)} className="h-4 w-4 accent-velmora-gold" />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  )
}
