import React, { useMemo, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import ProductCard from '@/components/storefront/ProductCard.jsx'
import { products } from '@/data/products.js'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const materialOptions = ['All', '18K Gold Plated', 'Gold Vermeil']
const priceOptions = [
  { label: 'All', value: 'all' },
  { label: 'Under $50', value: 'under-50' },
  { label: '$50–$80', value: '50-80' },
  { label: '$80+', value: '80-plus' },
]

export default function ShopPage({ onAddToCart }) {
  const [category, setCategory] = useState('All')
  const [material, setMaterial] = useState('All')
  const [price, setPrice] = useState('all')
  const [sort, setSort] = useState('featured')

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category
      const matchesMaterial = material === 'All' || product.material === material
      const matchesPrice = price === 'all' ||
        (price === 'under-50' && product.price < 50) ||
        (price === '50-80' && product.price >= 50 && product.price <= 80) ||
        (price === '80-plus' && product.price > 80)
      return matchesCategory && matchesMaterial && matchesPrice
    })

    return [...result].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return products.findIndex((product) => product.id === a.id) - products.findIndex((product) => product.id === b.id)
    })
  }, [category, material, price, sort])

  return (
    <main className="bg-velmora-ivory pt-24 text-velmora-espresso">
      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-16">
        <div className="grid gap-8 border-b border-velmora-linen pb-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-luxe text-velmora-gold">The collection</p>
            <h1 className="mt-3 font-serif text-6xl leading-none text-velmora-espresso md:text-8xl">Shop Velmora</h1>
          </div>
          <p className="text-sm leading-7 text-velmora-cocoa md:text-base">
            Discover demi-fine gold earrings, necklaces, huggies, and gift-ready pieces designed for everyday elegance.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-20 lg:grid-cols-[280px_1fr] lg:px-10 lg:pb-28">
        <aside className="h-fit border border-velmora-linen bg-velmora-cream p-5 text-velmora-espresso shadow-soft lg:sticky lg:top-28">
          <div className="mb-6 flex items-center gap-2 border-b border-velmora-linen pb-4">
            <SlidersHorizontal className="h-4 w-4 text-velmora-gold" />
            <h2 className="text-sm font-bold uppercase tracking-luxe text-velmora-espresso">Filter</h2>
          </div>
          <FilterGroup title="Category" options={categoryOptions} value={category} onChange={setCategory} />
          <FilterGroup title="Material" options={materialOptions} value={material} onChange={setMaterial} />
          <div className="border-t border-velmora-linen pt-5">
            <h3 className="mb-3 text-xs font-bold uppercase tracking-luxe text-velmora-cocoa">Price</h3>
            <div className="space-y-2">
              {priceOptions.map((option) => (
                <button key={option.value} type="button" className={`w-full rounded-full border px-4 py-2 text-left text-sm transition ${price === option.value ? 'border-velmora-gold bg-velmora-gold text-velmora-cream' : 'border-velmora-linen bg-velmora-ivory text-velmora-cocoa hover:border-velmora-gold hover:text-velmora-espresso'}`} onClick={() => setPrice(option.value)}>
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <div>
          <div className="mb-6 flex flex-col gap-4 border-b border-velmora-linen pb-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-semibold text-velmora-cocoa">{filteredProducts.length} pieces</p>
            <label className="flex items-center gap-3 text-sm font-semibold text-velmora-cocoa">
              Sort
              <select value={sort} onChange={(event) => setSort(event.target.value)} className="rounded-full border border-velmora-linen bg-velmora-cream px-4 py-2 text-sm text-velmora-espresso focus:border-velmora-gold focus:outline-none focus:ring-2 focus:ring-velmora-gold/30">
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </label>
          </div>
          {filteredProducts.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
              ))}
            </div>
          ) : (
            <div className="border border-velmora-linen bg-velmora-cream p-12 text-center text-velmora-espresso">
              <h3 className="font-serif text-4xl">No pieces found</h3>
              <p className="mt-3 text-sm text-velmora-cocoa">Try clearing a filter to discover more Velmora favorites.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <div className="mb-5 border-b border-velmora-linen pb-5">
      <h3 className="mb-3 text-xs font-bold uppercase tracking-luxe text-velmora-cocoa">{title}</h3>
      <div className="space-y-2">
        {options.map((option) => (
          <button key={option} type="button" className={`w-full rounded-full border px-4 py-2 text-left text-sm transition ${value === option ? 'border-velmora-gold bg-velmora-gold text-velmora-cream' : 'border-velmora-linen bg-velmora-ivory text-velmora-cocoa hover:border-velmora-gold hover:text-velmora-espresso'}`} onClick={() => onChange(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}
