import { useMemo, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/product/ProductCard.jsx'
import { products } from '@/data/products.js'
import { useStrikingImages } from '@/hooks/useStrikingImages.js'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const materials = ['All', '18K Gold Plated', 'Crystal']
const prices = [
  { label: 'All', min: 0, max: 999 },
  { label: '$30–$50', min: 30, max: 50 },
  { label: '$50–$80', min: 50, max: 80 },
  { label: '$80–$120', min: 80, max: 120 },
]

export default function Shop({ onAdd }) {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(categories.includes(initialCategory) ? initialCategory : 'All')
  const [material, setMaterial] = useState('All')
  const [priceLabel, setPriceLabel] = useState('All')
  const [sort, setSort] = useState('featured')
  const containerRef = useStrikingImages([category, material, priceLabel, sort])

  const visibleProducts = useMemo(() => {
    const activePrice = prices.find((price) => price.label === priceLabel) || prices[0]
    const filtered = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material
      const priceMatch = product.price >= activePrice.min && product.price <= activePrice.max
      return categoryMatch && materialMatch && priceMatch
    })

    return [...filtered].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return products.findIndex((item) => item.id === a.id) - products.findIndex((item) => item.id === b.id)
    })
  }, [category, material, priceLabel, sort])

  return (
    <main ref={containerRef} className="min-h-screen bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="mx-auto max-w-7xl px-5 pb-8 pt-8 md:px-8 md:pt-14">
        <p className="text-xs font-bold uppercase tracking-[0.32em] text-velmora-bronze">The Collection</p>
        <div className="mt-4 grid gap-6 md:grid-cols-[1fr_360px] md:items-end">
          <h1 className="font-serif text-6xl leading-none md:text-8xl">Shop demi-fine essentials</h1>
          <p className="text-base leading-8 text-velmora-cacao">
            Warm gold, luminous crystals, and quiet statement shapes designed for gifting and self-purchase from $30–$120.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-20 md:grid-cols-[280px_1fr] md:px-8 md:pb-28">
        <aside className="h-fit border border-velmora-champagne/20 bg-velmora-linen p-5 text-velmora-espresso shadow-soft md:sticky md:top-28">
          <div className="mb-6 flex items-center gap-3 border-b border-velmora-champagne/20 pb-5">
            <SlidersHorizontal className="h-5 w-5 text-velmora-bronze" />
            <h2 className="text-sm font-bold uppercase tracking-[0.24em]">Filters</h2>
          </div>
          <FilterGroup title="Category" values={categories} active={category} onChange={setCategory} />
          <FilterGroup title="Price" values={prices.map((price) => price.label)} active={priceLabel} onChange={setPriceLabel} />
          <FilterGroup title="Material" values={materials} active={material} onChange={setMaterial} />
        </aside>

        <div>
          <div className="mb-6 flex flex-col gap-4 border-b border-velmora-champagne/20 pb-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-velmora-cacao">{visibleProducts.length} refined pieces</p>
            <label className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-velmora-cacao">
              Sort
              <select value={sort} onChange={(event) => setSort(event.target.value)} className="border border-velmora-champagne/30 bg-velmora-linen px-4 py-3 text-sm font-semibold normal-case tracking-normal text-velmora-espresso focus:outline-none focus:ring-2 focus:ring-velmora-champagne">
                <option value="featured">Featured</option>
                <option value="price-low">Price: low to high</option>
                <option value="price-high">Price: high to low</option>
                <option value="rating">Top rated</option>
              </select>
            </label>
          </div>
          {visibleProducts.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {visibleProducts.map((product) => <ProductCard key={product.id} product={product} onAdd={onAdd} />)}
            </div>
          ) : (
            <div className="border border-velmora-champagne/20 bg-velmora-linen p-12 text-center text-velmora-espresso">
              <h2 className="font-serif text-4xl">No pieces found</h2>
              <p className="mt-3 text-sm leading-6 text-velmora-cacao">Try clearing a filter to reveal more Velmora styles.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, values, active, onChange }) {
  return (
    <div className="mb-7 last:mb-0">
      <h3 className="mb-3 font-serif text-2xl text-velmora-espresso">{title}</h3>
      <div className="grid gap-2">
        {values.map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => onChange(value)}
            className={`border px-4 py-3 text-left text-sm transition ${active === value ? 'border-velmora-champagne bg-velmora-champagne text-velmora-espresso' : 'border-velmora-champagne/20 bg-velmora-ivory text-velmora-cacao hover:border-velmora-champagne hover:text-velmora-espresso'}`}
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  )
}
