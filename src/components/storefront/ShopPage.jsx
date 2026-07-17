import { useMemo, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import ProductCard from './ProductCard.jsx'
import { products } from '../../data/products.js'

export default function ShopPage({ onOpenProduct, onAddToCart }) {
  const [category, setCategory] = useState('All')
  const [price, setPrice] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')
  const filteredProducts = useMemo(() => {
    const next = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material
      const priceMatch = price === 'All' || (price === 'Under $50' ? product.price < 50 : product.price >= 50)
      return categoryMatch && materialMatch && priceMatch
    })
    if (sort === 'price-low') return [...next].sort((a, b) => a.price - b.price)
    if (sort === 'price-high') return [...next].sort((a, b) => b.price - a.price)
    return next
  }, [category, material, price, sort])
  return (
    <main className="bg-velmora-ivory pb-20 pt-28 text-velmora-ink">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-velmora-sand pb-10">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-clay">Shop Velmora</p>
          <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div><h1 className="font-serif text-6xl leading-none text-velmora-ink md:text-8xl">The Collection</h1><p className="mt-5 max-w-2xl text-base leading-8 text-velmora-clay">Explore demi-fine earrings, necklaces, and huggies with warm gold finishes and refined crystal details.</p></div>
            <label className="flex max-w-xs items-center gap-3 rounded-full border border-velmora-sand bg-velmora-mist px-5 py-3 text-sm text-velmora-ink"><span className="text-xs font-bold uppercase tracking-[0.2em] text-velmora-clay">Sort</span><select value={sort} onChange={(event) => setSort(event.target.value)} className="flex-1 bg-transparent text-velmora-ink focus:outline-none"><option value="featured">Featured</option><option value="price-low">Price: Low to High</option><option value="price-high">Price: High to Low</option></select></label>
          </div>
        </div>
        <div className="grid gap-8 pt-8 lg:grid-cols-[260px_1fr]">
          <aside className="rounded-3xl border border-velmora-sand bg-velmora-mist p-5 text-velmora-ink lg:sticky lg:top-24 lg:self-start">
            <div className="mb-5 flex items-center gap-2 border-b border-velmora-sand pb-4"><SlidersHorizontal className="h-4 w-4 text-velmora-gold" /><h2 className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-ink">Filters</h2></div>
            <FilterGroup title="Category" value={category} onChange={setCategory} options={['All', 'Earrings', 'Necklaces', 'Huggies']} />
            <FilterGroup title="Price" value={price} onChange={setPrice} options={['All', 'Under $50', '$50 and Up']} />
            <FilterGroup title="Material" value={material} onChange={setMaterial} options={['All', '18K Gold Plated', 'Gold Vermeil', 'Crystal', 'Gift Set']} />
          </aside>
          <section><div className="mb-5 flex items-center justify-between text-sm text-velmora-clay"><p>{filteredProducts.length} pieces</p><p className="hidden sm:block">Premium-but-accessible, $30–$120</p></div><div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">{filteredProducts.map((product) => <ProductCard key={product.id} product={product} onOpenProduct={onOpenProduct} onAddToCart={onAddToCart} />)}</div></section>
        </div>
      </section>
    </main>
  )
}
function FilterGroup({ title, options, value, onChange }) {
  return <div className="border-b border-velmora-sand py-5 last:border-b-0"><h3 className="mb-3 font-serif text-xl text-velmora-ink">{title}</h3><div className="flex flex-wrap gap-2 lg:flex-col">{options.map((option) => <button key={option} type="button" onClick={() => onChange(option)} className={`rounded-full border px-4 py-2 text-left text-sm transition ${value === option ? 'border-velmora-ink bg-velmora-ink text-velmora-ivory' : 'border-velmora-sand bg-velmora-ivory text-velmora-clay hover:border-velmora-champagne hover:text-velmora-ink'}`}>{option}</button>)}</div></div>
}
