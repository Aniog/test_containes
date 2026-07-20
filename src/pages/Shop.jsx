import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import ProductCard from '@/components/product/ProductCard.jsx'
import { products } from '@/data/products.js'
import strkImgConfig from '@/strk-img-config.json'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const priceOptions = ['All', 'Under $50', '$50–$80', '$80+']
const materialOptions = ['All', '18K Gold Plated']

export default function Shop() {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(categoryOptions.includes(initialCategory) ? initialCategory : 'All')
  const [price, setPrice] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')

  useEffect(() => {
    const nextCategory = searchParams.get('category') || 'All'
    setCategory(categoryOptions.includes(nextCategory) ? nextCategory : 'All')
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material
      const priceMatch =
        price === 'All' ||
        (price === 'Under $50' && product.price < 50) ||
        (price === '$50–$80' && product.price >= 50 && product.price <= 80) ||
        (price === '$80+' && product.price >= 80)

      return categoryMatch && materialMatch && priceMatch
    })

    if (sort === 'price-low') return [...filtered].sort((a, b) => a.price - b.price)
    if (sort === 'price-high') return [...filtered].sort((a, b) => b.price - a.price)
    if (sort === 'rating') return [...filtered].sort((a, b) => b.rating - a.rating)
    return filtered
  }, [category, price, material, sort])

  const containerRef = useRef(null)

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [category, price, material, sort])

  return (
    <main ref={containerRef} className="bg-velmora-ivory pt-28 text-velmora-ink">
      <section className="px-5 pb-10 pt-8 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl border-b border-velmora-champagne/80 pb-10">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-velmora-bronze">The collection</p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_20rem] lg:items-end">
            <h1 className="font-serif text-6xl leading-none text-velmora-ink md:text-8xl">Shop Velmora</h1>
            <p className="font-sans text-sm leading-7 text-velmora-cocoa">Gold-plated earrings, necklaces, huggies, and gift-ready sets designed for premium everyday wear.</p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 md:px-8 md:pb-28 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[17rem_1fr]">
          <aside className="h-fit border border-velmora-champagne/80 bg-velmora-cream p-5 text-velmora-ink lg:sticky lg:top-28">
            <div className="mb-6 flex items-center gap-2 border-b border-velmora-champagne/80 pb-4">
              <SlidersHorizontal className="h-4 w-4 text-velmora-bronze" />
              <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.22em] text-velmora-ink">Filter</h2>
            </div>
            <FilterGroup label="Category" options={categoryOptions} value={category} onChange={setCategory} />
            <FilterGroup label="Price" options={priceOptions} value={price} onChange={setPrice} />
            <FilterGroup label="Material" options={materialOptions} value={material} onChange={setMaterial} />
          </aside>

          <div>
            <div className="mb-6 flex flex-col gap-4 border-b border-velmora-champagne/80 pb-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-sans text-sm text-velmora-cocoa">{filteredProducts.length} pieces</p>
              <label className="flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-velmora-cocoa">
                Sort
                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                  className="border border-velmora-champagne bg-velmora-cream px-4 py-3 font-sans text-sm normal-case tracking-normal text-velmora-ink focus:border-velmora-bronze focus:outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="rating">Best reviewed</option>
                  <option value="price-low">Price: low to high</option>
                  <option value="price-high">Price: high to low</option>
                </select>
              </label>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="border border-velmora-champagne/80 bg-velmora-cream p-10 text-center text-velmora-ink">
                <h3 className="font-serif text-4xl">No pieces found</h3>
                <p className="mt-3 font-sans text-sm leading-6 text-velmora-cocoa">Try easing your filters to discover more of the Velmora edit.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ label, options, value, onChange }) {
  return (
    <fieldset className="border-b border-velmora-champagne/70 py-5 last:border-b-0">
      <legend className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-velmora-cocoa">{label}</legend>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option} className="flex cursor-pointer items-center justify-between gap-3 font-sans text-sm text-velmora-ink">
            <span>{option}</span>
            <input
              type="radio"
              name={label}
              checked={value === option}
              onChange={() => onChange(option)}
              className="h-4 w-4 accent-velmora-bronze"
            />
          </label>
        ))}
      </div>
    </fieldset>
  )
}
