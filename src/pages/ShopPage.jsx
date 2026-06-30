import { useMemo, useState } from 'react'
import ProductCard from '@/components/storefront/ProductCard'
import { products } from '@/data/products'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const prices = ['All', 'Under $50', '$50–$80', '$80+']
const materials = ['All', '18K Gold Plated']

export default function ShopPage({ onAddToCart }) {
  const [category, setCategory] = useState('All')
  const [price, setPrice] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')

  const filtered = useMemo(() => {
    const list = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material
      const priceMatch = price === 'All' || (price === 'Under $50' && product.price < 50) || (price === '$50–$80' && product.price >= 50 && product.price <= 80) || (price === '$80+' && product.price > 80)
      return categoryMatch && materialMatch && priceMatch
    })
    if (sort === 'price-asc') return [...list].sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') return [...list].sort((a, b) => b.price - a.price)
    return list
  }, [category, price, material, sort])

  return (
    <main className="bg-ivory pt-24 text-espresso">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.26em] text-champagne">Shop Velmora</p><h1 className="mt-4 font-serif text-6xl leading-none text-espresso">Quiet luxury, made wearable.</h1><p className="mt-5 text-base leading-8 text-sable">Explore demi-fine earrings, necklaces, huggies, and gift-ready sets at a premium-but-accessible price point.</p></div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-20 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8">
        <aside className="h-fit border border-taupe bg-porcelain p-5 text-espresso lg:sticky lg:top-24">
          <h2 className="font-serif text-2xl">Filter</h2>
          <FilterGroup title="Category" options={categories} value={category} onChange={setCategory} />
          <FilterGroup title="Price" options={prices} value={price} onChange={setPrice} />
          <FilterGroup title="Material" options={materials} value={material} onChange={setMaterial} />
        </aside>
        <div>
          <div className="mb-5 flex flex-col gap-3 border-b border-taupe pb-5 sm:flex-row sm:items-center sm:justify-between"><p className="text-sm text-sable">{filtered.length} pieces</p><label className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-sable">Sort<select value={sort} onChange={(event) => setSort(event.target.value)} className="rounded-full border border-taupe bg-porcelain px-4 py-2 text-sm normal-case tracking-normal text-espresso"><option value="featured">Featured</option><option value="price-asc">Price: Low to high</option><option value="price-desc">Price: High to low</option></select></label></div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{filtered.map((product) => <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />)}</div>
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <div className="mt-7 border-t border-taupe pt-5">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-sable">{title}</p>
      <div className="mt-4 grid gap-2">{options.map((option) => <button key={option} type="button" onClick={() => onChange(option)} className={`rounded-full border px-4 py-2 text-left text-sm transition ${value === option ? 'border-espresso bg-espresso text-ivory' : 'border-taupe bg-transparent text-espresso hover:border-champagne'}`}>{option}</button>)}</div>
    </div>
  )
}
