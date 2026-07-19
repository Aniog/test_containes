import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/product/ProductCard.jsx'
import { products } from '@/data/products.js'
const priceFilters = [{ label: 'Under $50', value: 'under-50' }, { label: '$50–$80', value: '50-80' }, { label: '$80+', value: '80-plus' }]
const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const materials = ['All', '18K Gold Plated', 'Crystal Accent', 'Gift Boxed']
export default function Shop() {
  const [searchParams] = useSearchParams(); const initialCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(categories.includes(initialCategory) ? initialCategory : 'All')
  const [price, setPrice] = useState('All'); const [material, setMaterial] = useState('All'); const [sort, setSort] = useState('featured')
  const filtered = useMemo(() => {
    const result = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material
      const priceMatch = price === 'All' || (price === 'under-50' && product.price < 50) || (price === '50-80' && product.price >= 50 && product.price <= 80) || (price === '80-plus' && product.price > 80)
      return categoryMatch && materialMatch && priceMatch
    })
    return [...result].sort((a, b) => sort === 'price-asc' ? a.price - b.price : sort === 'price-desc' ? b.price - a.price : products.findIndex((item) => item.id === a.id) - products.findIndex((item) => item.id === b.id))
  }, [category, material, price, sort])
  return <main className="bg-velmora-ivory pt-28 text-velmora-ink"><section className="velmora-container pb-16 md:pb-24"><div className="border-b border-velmora-sand pb-8 md:flex md:items-end md:justify-between"><div><p className="eyebrow">The shop</p><h1 id="shop-title" className="mt-3 font-display text-6xl font-medium leading-none md:text-8xl">All jewelry</h1><p id="shop-copy" className="mt-5 max-w-2xl text-sm leading-7 text-velmora-taupe">A refined edit of demi-fine gold earrings, necklaces, huggies, and gift-ready sets.</p></div><label className="mt-6 block text-sm font-bold text-velmora-ink md:mt-0">Sort<select value={sort} onChange={(event) => setSort(event.target.value)} className="mt-2 block rounded-full border border-velmora-sand bg-velmora-cream px-5 py-3 text-sm text-velmora-ink focus:outline-none focus:ring-2 focus:ring-velmora-gold"><option value="featured">Featured</option><option value="price-asc">Price: Low to high</option><option value="price-desc">Price: High to low</option></select></label></div><div className="mt-8 grid gap-8 lg:grid-cols-[260px_1fr]"><aside className="h-fit border border-velmora-sand bg-velmora-cream p-5 lg:sticky lg:top-28"><FilterGroup title="Category" options={categories} active={category} onChange={setCategory} /><FilterGroup title="Price" options={['All', ...priceFilters.map((item) => item.label)]} active={price === 'All' ? 'All' : priceFilters.find((item) => item.value === price)?.label} onChange={(label) => setPrice(label === 'All' ? 'All' : priceFilters.find((item) => item.label === label).value)} /><FilterGroup title="Material" options={materials} active={material} onChange={setMaterial} /></aside><div><div className="mb-5 flex items-center justify-between text-xs font-extrabold uppercase tracking-nav text-velmora-taupe"><span>{filtered.length} pieces</span><span>Free shipping included</span></div><div className="grid grid-cols-2 gap-4 md:gap-6 xl:grid-cols-3">{filtered.map((product) => <ProductCard key={product.id} product={product} context="shop-grid" extraQueryIds={['shop-copy', 'shop-title']} />)}</div>{filtered.length === 0 && <div className="border border-velmora-sand bg-velmora-cream p-10 text-center text-velmora-ink">No pieces match these filters. Try another edit.</div>}</div></div></section></main>
}
function FilterGroup({ title, options, active, onChange }) {
  return <div className="border-b border-velmora-sand py-5 first:pt-0 last:border-b-0 last:pb-0"><h2 className="text-xs font-extrabold uppercase tracking-nav text-velmora-ink">{title}</h2><div className="mt-4 flex flex-wrap gap-2 lg:flex-col">{options.map((option) => <button key={option} type="button" onClick={() => onChange(option)} className={`rounded-full border px-4 py-2 text-left text-xs font-bold uppercase tracking-nav transition ${active === option ? 'border-velmora-gold bg-velmora-gold text-velmora-ink' : 'border-velmora-sand bg-velmora-cream text-velmora-taupe hover:border-velmora-gold hover:text-velmora-ink'}`}>{option}</button>)}</div></div>
}
