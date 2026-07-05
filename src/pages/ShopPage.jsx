import { SlidersHorizontal } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'
import { products } from '../data/products.js'
import ProductCard from '../components/products/ProductCard.jsx'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const materialOptions = ['All', '18K Gold Plated']
const priceOptions = [
  { label: 'All', value: 'all' },
  { label: 'Under $50', value: 'under-50' },
  { label: '$50–$80', value: '50-80' },
  { label: '$80+', value: '80-plus' },
]

function ShopPage({ onAddToCart, onOpenProduct }) {
  const [category, setCategory] = useState('All')
  const [price, setPrice] = useState('all')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')
  const pageRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [])

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material
      const priceMatch =
        price === 'all' ||
        (price === 'under-50' && product.price < 50) ||
        (price === '50-80' && product.price >= 50 && product.price <= 80) ||
        (price === '80-plus' && product.price > 80)

      return categoryMatch && materialMatch && priceMatch
    })

    return [...filtered].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return products.findIndex((item) => item.id === a.id) - products.findIndex((item) => item.id === b.id)
    })
  }, [category, material, price, sort])

  return (
    <main ref={pageRef} className="bg-velmora-ivory pt-24 text-velmora-espresso md:pt-28">
      <section className="border-b border-velmora-taupe/30 px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-velmora-gold">The Collection</p>
          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="font-serif text-5xl leading-tight md:text-7xl">Shop Velmora</h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-velmora-espresso/70">
                Demi-fine gold earrings, necklaces, huggies, and gifts selected for everyday luminosity.
              </p>
            </div>
            <label className="flex max-w-xs items-center gap-3 border border-velmora-taupe/40 bg-velmora-pearl px-4 py-3 text-sm text-velmora-espresso">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-velmora-espresso/55">Sort</span>
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="flex-1 bg-transparent text-sm font-semibold focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: low to high</option>
                <option value="price-high">Price: high to low</option>
                <option value="rating">Top rated</option>
              </select>
            </label>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:px-8 lg:grid-cols-[260px_1fr] lg:py-16">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="border border-velmora-taupe/30 bg-velmora-pearl p-6">
            <div className="flex items-center gap-3 border-b border-velmora-taupe/30 pb-5">
              <SlidersHorizontal className="h-4 w-4 text-velmora-gold" />
              <h2 className="text-xs font-bold uppercase tracking-[0.24em]">Filters</h2>
            </div>

            <FilterGroup title="Category" options={categoryOptions} value={category} onChange={setCategory} />
            <FilterGroup
              title="Price"
              options={priceOptions.map((item) => item.label)}
              value={priceOptions.find((item) => item.value === price)?.label || 'All'}
              onChange={(label) => setPrice(priceOptions.find((item) => item.label === label)?.value || 'all')}
            />
            <FilterGroup title="Material" options={materialOptions} value={material} onChange={setMaterial} />
          </div>
        </aside>

        <div>
          <div className="mb-7 flex items-center justify-between border-b border-velmora-taupe/30 pb-5">
            <p className="text-sm text-velmora-espresso/62">
              Showing <span className="font-semibold text-velmora-espresso">{filteredProducts.length}</span> pieces
            </p>
            <p className="hidden text-xs uppercase tracking-[0.22em] text-velmora-espresso/50 sm:block">
              Free worldwide shipping
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid gap-x-5 gap-y-11 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} onOpenProduct={onOpenProduct} />
              ))}
            </div>
          ) : (
            <div className="grid min-h-[360px] place-items-center border border-velmora-taupe/30 bg-velmora-pearl p-10 text-center">
              <div>
                <h3 className="font-serif text-3xl">No pieces found</h3>
                <p className="mt-3 text-sm text-velmora-espresso/65">Try adjusting a filter to discover more jewelry.</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <div className="border-b border-velmora-taupe/25 py-6 last:border-b-0 last:pb-0">
      <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso/58">{title}</h3>
      <div className="mt-4 grid gap-2">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`flex items-center justify-between px-3 py-2 text-left text-sm transition ${
              value === option
                ? 'bg-velmora-champagne text-velmora-espresso'
                : 'text-velmora-espresso/68 hover:bg-velmora-champagne/70 hover:text-velmora-espresso'
            }`}
          >
            {option}
            <span className={`h-2 w-2 rounded-full ${value === option ? 'bg-velmora-gold' : 'bg-transparent'}`} />
          </button>
        ))}
      </div>
    </div>
  )
}

export default ShopPage
