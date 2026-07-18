import { SlidersHorizontal } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import ProductCard from '@/components/product/ProductCard.jsx'
import { products } from '@/data/products.js'
import strkImgConfig from '@/strk-img-config.json'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const prices = ['All', 'Under $50', '$50–$80', '$80+']
const materials = ['All', '18K Gold Plated', 'Gold Filigree']

export default function Shop() {
  const [category, setCategory] = useState('All')
  const [price, setPrice] = useState('All')
  const [material, setMaterial] = useState('All')
  const pageRef = useRef(null)

  const [sort, setSort] = useState('Featured')

  const filteredProducts = useMemo(() => {
    let nextProducts = [...products]

    if (category !== 'All') {
      nextProducts = nextProducts.filter((product) => product.category === category)
    }

    if (material !== 'All') {
      nextProducts = nextProducts.filter((product) => product.material === material)
    }

    if (price === 'Under $50') {
      nextProducts = nextProducts.filter((product) => product.price < 50)
    }

    if (price === '$50–$80') {
      nextProducts = nextProducts.filter((product) => product.price >= 50 && product.price <= 80)
    }

    if (price === '$80+') {
      nextProducts = nextProducts.filter((product) => product.price > 80)
    }

    if (sort === 'Price low to high') {
      nextProducts.sort((a, b) => a.price - b.price)
    }

    if (sort === 'Price high to low') {
      nextProducts.sort((a, b) => b.price - a.price)
    }

    if (sort === 'Best rated') {
      nextProducts.sort((a, b) => b.rating - a.rating)
    }

    return nextProducts
  }, [category, price, material, sort])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [filteredProducts])


  const FilterGroup = ({ title, value, options, onChange }) => (
    <div className="border-b border-velmora-linen pb-7">
      <h3 className="text-xs font-bold uppercase tracking-nav text-velmora-ink">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2 lg:flex-col lg:items-start">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-nav transition ${value === option ? 'border-velmora-espresso bg-velmora-espresso text-velmora-pearl' : 'border-velmora-linen bg-velmora-pearl text-velmora-cocoa hover:border-velmora-gold hover:text-velmora-ink'}`}
            onClick={() => onChange(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )

  return (
    <div ref={pageRef} className="bg-velmora-ivory pt-24 text-velmora-ink sm:pt-28">
      <section className="border-b border-velmora-linen px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-nav text-velmora-gold">Shop Velmora</p>
          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="font-serif text-5xl font-semibold leading-tight text-velmora-ink sm:text-7xl">Demi-fine essentials</h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-velmora-cocoa">Warm gold jewelry designed for self-purchase, gifting, and daily layering.</p>
            </div>
            <label htmlFor="sort-products" className="flex max-w-xs items-center gap-3 rounded-full border border-velmora-linen bg-velmora-pearl px-5 py-3 text-sm text-velmora-ink">
              <span className="text-xs font-bold uppercase tracking-nav text-velmora-cocoa">Sort</span>
              <select id="sort-products" value={sort} onChange={(event) => setSort(event.target.value)} className="flex-1 bg-transparent text-sm font-semibold text-velmora-ink focus:outline-none" aria-label="Sort products">
                {['Featured', 'Best rated', 'Price low to high', 'Price high to low'].map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
            </label>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[17rem_1fr] lg:px-8 lg:py-16">
        <aside className="rounded-sm border border-velmora-linen bg-velmora-pearl p-5 text-velmora-ink shadow-sm lg:sticky lg:top-28 lg:self-start">
          <div className="mb-6 flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-velmora-gold" />
            <h2 className="text-xs font-bold uppercase tracking-nav text-velmora-ink">Filters</h2>
          </div>
          <div className="space-y-7">
            <FilterGroup title="Category" value={category} options={categories} onChange={setCategory} />
            <FilterGroup title="Price" value={price} options={prices} onChange={setPrice} />
            <FilterGroup title="Material" value={material} options={materials} onChange={setMaterial} />
          </div>
        </aside>

        <div>
          <div className="mb-7 flex items-center justify-between border-b border-velmora-linen pb-4 text-sm text-velmora-cocoa">
            <span>{filteredProducts.length} pieces</span>
            <span className="hidden sm:inline">Free worldwide shipping · 30-day returns</span>
          </div>
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => <ProductCard key={product.id} product={product} context="shop" />)}
          </div>
          {filteredProducts.length === 0 && (
            <div className="border border-velmora-linen bg-velmora-pearl p-10 text-center text-velmora-ink">
              <p className="font-serif text-3xl font-semibold">No pieces found</p>
              <p className="mt-2 text-sm text-velmora-cocoa">Try adjusting your filters to discover more Velmora jewelry.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
