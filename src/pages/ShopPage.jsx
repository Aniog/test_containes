import { SlidersHorizontal } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import ProductCard from '@/components/product/ProductCard'
import { categories, materials, products } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'

const priceRanges = [
  { label: 'All prices', value: 'all' },
  { label: '$30–$50', value: '30-50', min: 30, max: 50 },
  { label: '$50–$80', value: '50-80', min: 50, max: 80 },
  { label: '$80–$120', value: '80-120', min: 80, max: 120 },
]

export default function ShopPage() {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(categories.includes(initialCategory) ? initialCategory : 'All')
  const [material, setMaterial] = useState('All')
  const [priceRange, setPriceRange] = useState('all')
  const [sort, setSort] = useState('featured')
  const pageRef = useRef(null)

  const filteredProducts = useMemo(() => {
    const selectedRange = priceRanges.find((range) => range.value === priceRange)
    const result = products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category
      const matchesMaterial = material === 'All' || product.material === material
      const matchesPrice = !selectedRange?.min || (product.price >= selectedRange.min && product.price <= selectedRange.max)
      return matchesCategory && matchesMaterial && matchesPrice
    })

    return [...result].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'name') return a.name.localeCompare(b.name)
      return b.reviews - a.reviews
    })
  }, [category, material, priceRange, sort])

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [category, material, priceRange, sort])

  return (
    <main ref={pageRef} className="bg-velmora-cream pt-24 text-velmora-ink">
      <section className="border-b border-velmora-ink/10 px-5 py-12 sm:px-8 md:py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.32em] text-velmora-champagne">The Collection</p>
          <div className="grid gap-6 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <h1 className="font-serif text-6xl font-medium leading-none text-velmora-ink sm:text-7xl">Shop Velmora</h1>
            <p className="text-base leading-8 text-velmora-cocoa/78">
              Demi-fine earrings, necklaces, and huggies in warm gold finishes designed to feel elevated, wearable, and gift-ready.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 md:py-14 lg:grid-cols-[260px_1fr] lg:px-12">
        <aside className="h-fit border border-velmora-ink/10 bg-velmora-porcelain p-5 text-velmora-ink lg:sticky lg:top-28">
          <div className="mb-6 flex items-center gap-2 border-b border-velmora-ink/10 pb-4">
            <SlidersHorizontal className="h-4 w-4 text-velmora-champagne" />
            <h2 className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-ink">Filters</h2>
          </div>
          <FilterGroup title="Category" options={categories} value={category} onChange={setCategory} />
          <FilterGroup title="Material" options={['All', ...materials]} value={material} onChange={setMaterial} />
          <FilterGroup title="Price" options={priceRanges.map((range) => range.label)} value={priceRanges.find((range) => range.value === priceRange)?.label || 'All prices'} onChange={(label) => setPriceRange(priceRanges.find((range) => range.label === label)?.value || 'all')} />
        </aside>

        <div>
          <div className="mb-8 flex flex-col gap-4 border-b border-velmora-ink/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-velmora-cocoa/75">Showing {filteredProducts.length} refined pieces</p>
            <label className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-velmora-ink">
              Sort
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="rounded-full border border-velmora-ink/15 bg-velmora-porcelain px-4 py-2 text-sm normal-case tracking-normal text-velmora-ink outline-none focus:border-velmora-champagne"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name</option>
              </select>
            </label>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          ) : (
            <div className="border border-velmora-ink/10 bg-velmora-porcelain px-6 py-14 text-center text-velmora-ink">
              <h3 className="font-serif text-3xl">No pieces match those filters.</h3>
              <p className="mt-3 text-sm text-velmora-cocoa/75">Try widening your price or material selection.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <div className="mb-7 last:mb-0">
      <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-velmora-cocoa/72">{title}</h3>
      <div className="grid gap-2">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`rounded-full border px-4 py-2 text-left text-sm transition ${
              value === option
                ? 'border-velmora-ink bg-velmora-ink text-velmora-cream'
                : 'border-velmora-ink/10 bg-velmora-cream text-velmora-ink hover:border-velmora-champagne'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}
