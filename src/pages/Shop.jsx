import { Filter } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/common/ProductCard'
import { products } from '@/data/products'
import { useVelmoraImages } from '@/lib/useVelmoraImages'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const prices = ['All', 'Under $50', '$50–$80', '$80+']
const materials = ['All', '18K Gold Plated', 'Gold Vermeil']

export default function Shop({ onAddToCart }) {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(categories.includes(initialCategory) ? initialCategory : 'All')
  const [price, setPrice] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('Featured')
  const containerRef = useVelmoraImages([category, price, material, sort])

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const priceMatch = price === 'All' || (price === 'Under $50' && product.price < 50) || (price === '$50–$80' && product.price >= 50 && product.price <= 80) || (price === '$80+' && product.price > 80)
      return (category === 'All' || product.category === category) && priceMatch && (material === 'All' || product.material === material)
    })

    return [...result].sort((a, b) => {
      if (sort === 'Price: Low to High') return a.price - b.price
      if (sort === 'Price: High to Low') return b.price - a.price
      if (sort === 'Top Rated') return b.rating - a.rating
      return 0
    })
  }, [category, price, material, sort])

  return (
    <main ref={containerRef} className="bg-velmora-pearl pt-28 text-velmora-ink">
      <section className="velmora-container pb-10 pt-8">
        <p className="text-xs font-semibold uppercase tracking-nav text-velmora-gold">Shop Velmora</p>
        <div className="mt-4 flex flex-col gap-5 border-b border-velmora-linen pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="font-serif text-5xl leading-tight sm:text-6xl">Demi-Fine Essentials</h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-velmora-clay">Explore warm gold earrings, necklaces, huggies, and gift-ready pieces designed for premium everyday wear.</p>
          </div>
          <label className="flex items-center gap-3 text-xs font-semibold uppercase tracking-nav text-velmora-clay">
            Sort
            <select value={sort} onChange={(event) => setSort(event.target.value)} className="border border-velmora-linen bg-velmora-ivory px-4 py-3 text-sm normal-case tracking-normal text-velmora-ink focus:border-velmora-gold focus:outline-none">
              {['Featured', 'Top Rated', 'Price: Low to High', 'Price: High to Low'].map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
        </div>
      </section>
      <section className="velmora-container grid gap-8 pb-20 lg:grid-cols-[260px_1fr] lg:pb-28">
        <aside className="h-fit bg-velmora-ivory p-5 shadow-soft lg:sticky lg:top-24">
          <div className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-nav text-velmora-ink"><Filter className="h-4 w-4 text-velmora-gold" /> Filter</div>
          <FilterGroup label="Category" options={categories} value={category} onChange={setCategory} />
          <FilterGroup label="Price" options={prices} value={price} onChange={setPrice} />
          <FilterGroup label="Material" options={materials} value={material} onChange={setMaterial} />
        </aside>
        <div>
          <p className="mb-5 text-sm text-velmora-clay">Showing {filteredProducts.length} refined pieces</p>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />)}
          </div>
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ label, options, value, onChange }) {
  return (
    <fieldset className="border-t border-velmora-linen py-5 first:border-t-0 first:pt-0">
      <legend className="mb-3 text-xs font-semibold uppercase tracking-nav text-velmora-clay">{label}</legend>
      <div className="space-y-2">
        {options.map((option) => (
          <button key={option} type="button" onClick={() => onChange(option)} className={`block w-full border px-3 py-2 text-left text-sm transition-colors ${value === option ? 'border-velmora-gold bg-velmora-pearl text-velmora-ink' : 'border-transparent text-velmora-clay hover:border-velmora-linen hover:text-velmora-ink'}`}>
            {option}
          </button>
        ))}
      </div>
    </fieldset>
  )
}
