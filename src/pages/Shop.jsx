import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/storefront/ProductCard'
import { products } from '../data/products'
import { useStrikinglyImages } from '../lib/useStrikinglyImages'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const prices = ['All', '$30–$50', '$50–$80', '$80–$120']
const materials = ['All', '18K Gold Plated', 'Hypoallergenic']

export default function Shop({ onAddToCart }) {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(categories.includes(initialCategory) ? initialCategory : 'All')
  const [price, setPrice] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')
  const containerRef = useStrikinglyImages([category, price, material, sort])

  const filteredProducts = useMemo(() => {
    const inPrice = (item) => {
      if (price === '$30–$50') return item.price >= 30 && item.price <= 50
      if (price === '$50–$80') return item.price > 50 && item.price <= 80
      if (price === '$80–$120') return item.price > 80 && item.price <= 120
      return true
    }
    const sorted = products.filter((item) => (category === 'All' || item.category === category) && inPrice(item) && (material === 'All' || item.material === material || material === 'Hypoallergenic'))
    if (sort === 'price-low') return [...sorted].sort((a, b) => a.price - b.price)
    if (sort === 'price-high') return [...sorted].sort((a, b) => b.price - a.price)
    return sorted
  }, [category, price, material, sort])

  return (
    <main ref={containerRef} className="bg-velmora-parchment pt-28 text-velmora-espresso">
      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8 lg:pb-28">
        <div className="border-b border-velmora-sand pb-8"><p className="text-xs font-semibold uppercase tracking-[0.3em] text-velmora-bronze">Collection</p><h1 className="mt-3 font-serif text-6xl leading-none text-velmora-espresso md:text-8xl">Shop Velmora</h1><p className="mt-5 max-w-2xl text-base leading-8 text-velmora-ink/75">Demi-fine earrings, necklaces, huggies, and giftable sets designed for a warm everyday glow.</p></div>
        <div className="grid gap-8 pt-8 lg:grid-cols-[260px_1fr]">
          <aside className="self-start border border-velmora-sand bg-velmora-ivory p-5 text-velmora-espresso lg:sticky lg:top-28">
            <FilterGroup title="Category" options={categories} value={category} onChange={setCategory} />
            <FilterGroup title="Price" options={prices} value={price} onChange={setPrice} />
            <FilterGroup title="Material" options={materials} value={material} onChange={setMaterial} />
          </aside>
          <div>
            <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center"><p className="text-sm text-velmora-ink/70">Showing {filteredProducts.length} refined pieces</p><label className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso">Sort <select value={sort} onChange={(event) => setSort(event.target.value)} className="border border-velmora-sand bg-velmora-ivory px-4 py-3 text-sm normal-case tracking-normal text-velmora-espresso outline-none focus:border-velmora-bronze"><option value="featured">Featured</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option></select></label></div>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">{filteredProducts.map((product) => <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />)}</div>
          </div>
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  return <div className="border-b border-velmora-sand py-5 first:pt-0 last:border-b-0"><h2 className="text-xs font-bold uppercase tracking-[0.25em] text-velmora-bronze">{title}</h2><div className="mt-4 grid gap-3">{options.map((option) => <label key={option} className="flex cursor-pointer items-center gap-3 text-sm text-velmora-ink/80"><input type="radio" name={title} checked={value === option} onChange={() => onChange(option)} className="accent-velmora-bronze" />{option}</label>)}</div></div>
}
