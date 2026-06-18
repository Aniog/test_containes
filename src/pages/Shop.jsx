import { useEffect, useMemo, useRef, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies']
const materialOptions = ['All', '18K Gold Plated', 'Gold Vermeil']
const priceOptions = [
  { label: 'All', min: 0, max: Infinity },
  { label: '$30–$50', min: 30, max: 50 },
  { label: '$50–$80', min: 50, max: 80 },
  { label: '$80–$120', min: 80, max: 120 },
]

export default function Shop({ onAddToCart }) {
  const containerRef = useRef(null)
  const [category, setCategory] = useState('All')
  const [material, setMaterial] = useState('All')
  const [priceRange, setPriceRange] = useState('All')
  const [sort, setSort] = useState('featured')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const urlCategory = params.get('category')
    if (urlCategory && categoryOptions.includes(urlCategory)) {
      setCategory(urlCategory)
    }
  }, [])

  const visibleProducts = useMemo(() => {
    const selectedPrice = priceOptions.find((option) => option.label === priceRange) ?? priceOptions[0]
    const filtered = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material
      const priceMatch = product.price >= selectedPrice.min && product.price <= selectedPrice.max
      return categoryMatch && materialMatch && priceMatch
    })

    return [...filtered].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return products.findIndex((product) => product.id === a.id) - products.findIndex((product) => product.id === b.id)
    })
  }, [category, material, priceRange, sort])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [category, material, priceRange, sort])

  const filterGroup = (label, options, value, onChange) => (
    <fieldset className="border-b border-velmora-taupe/60 pb-7">
      <legend className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-gold">{label}</legend>
      <div className="grid gap-3">
        {options.map((option) => {
          const optionLabel = typeof option === 'string' ? option : option.label
          return (
            <label key={optionLabel} className="flex items-center gap-3 text-sm text-velmora-cocoa">
              <input
                type="radio"
                name={label}
                value={optionLabel}
                checked={value === optionLabel}
                onChange={() => onChange(optionLabel)}
                className="h-4 w-4 accent-velmora-gold"
              />
              <span className="text-velmora-cocoa">{optionLabel}</span>
            </label>
          )
        })}
      </div>
    </fieldset>
  )

  return (
    <main ref={containerRef} className="bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="mx-auto max-w-7xl px-5 pb-14 pt-8 sm:px-8 md:pb-20">
        <div className="border-b border-velmora-taupe/60 pb-8">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">Shop Velmora</p>
          <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <h1 className="font-serif text-6xl leading-none md:text-8xl">Jewelry made personal.</h1>
            <p className="max-w-md text-sm leading-7 text-velmora-cocoa">
              Filter demi-fine gold pieces by category, material, and price. Every piece is designed for gifting, keeping, and everyday glow.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-9 lg:grid-cols-[270px_1fr]">
          <aside className="rounded-none border border-velmora-taupe/60 bg-velmora-pearl p-6 text-velmora-espresso lg:sticky lg:top-28 lg:h-fit">
            <div className="mb-7 flex items-center gap-3">
              <SlidersHorizontal className="h-4 w-4 text-velmora-gold" />
              <h2 className="text-xs font-bold uppercase tracking-[0.26em]">Filters</h2>
            </div>
            <div className="space-y-7">
              {filterGroup('Category', categoryOptions, category, setCategory)}
              {filterGroup('Price', priceOptions, priceRange, setPriceRange)}
              {filterGroup('Material', materialOptions, material, setMaterial)}
            </div>
          </aside>

          <section>
            <div className="mb-6 flex flex-col gap-4 border-b border-velmora-taupe/60 pb-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-velmora-cocoa">Showing {visibleProducts.length} refined pieces</p>
              <label className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-velmora-cocoa">
                Sort
                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                  className="border border-velmora-taupe bg-velmora-pearl px-4 py-3 text-sm normal-case tracking-normal text-velmora-espresso focus:border-velmora-gold focus:outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </label>
            </div>

            <div className="grid gap-x-7 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}
