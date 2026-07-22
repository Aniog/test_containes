import { useMemo, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import ProductCard from '@/components/products/ProductCard'
import { products } from '@/data/products'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies']
const priceOptions = ['All', 'Under $50', '$50 - $80', '$80+']
const materialOptions = ['All', '18K Gold Plated', 'Gold Vermeil']

export default function Shop({ onAddToCart }) {
  const [category, setCategory] = useState('All')
  const [price, setPrice] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('Featured')
  const filteredProducts = useMemo(() => {
    const nextProducts = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material
      const priceMatch = price === 'All'
        || (price === 'Under $50' && product.price < 50)
        || (price === '$50 - $80' && product.price >= 50 && product.price <= 80)
        || (price === '$80+' && product.price > 80)
      return categoryMatch && materialMatch && priceMatch
    })

    if (sort === 'Price: Low to High') return [...nextProducts].sort((a, b) => a.price - b.price)
    if (sort === 'Price: High to Low') return [...nextProducts].sort((a, b) => b.price - a.price)
    return nextProducts
  }, [category, material, price, sort])

  return (
    <main className="bg-velmora-porcelain pt-28 text-velmora-espresso">
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 md:pb-24">
        <div className="border-b border-velmora-mist pb-10">
          <p className="text-xs font-semibold uppercase tracking-luxury text-velmora-champagne">Collection</p>
          <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="font-serif text-6xl leading-none text-velmora-espresso md:text-8xl">Shop Velmora</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-velmora-taupe">Demi-fine gold jewelry for gifting, stacking, and everyday polish — refined pieces from $30 to $120.</p>
            </div>
            <label className="flex items-center gap-3 text-xs font-semibold uppercase tracking-luxury text-velmora-taupe">
              Sort
              <select value={sort} onChange={(event) => setSort(event.target.value)} className="rounded-full border border-velmora-mist bg-velmora-ivory px-4 py-3 text-sm normal-case tracking-normal text-velmora-espresso focus:outline-none focus:ring-2 focus:ring-velmora-champagne">
                {['Featured', 'Price: Low to High', 'Price: High to Low'].map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
          </div>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[260px_1fr]">
          <aside className="h-fit border border-velmora-mist bg-velmora-ivory p-6 text-velmora-espresso lg:sticky lg:top-28">
            <div className="flex items-center gap-3 border-b border-velmora-mist pb-5">
              <SlidersHorizontal className="h-4 w-4 text-velmora-champagne" />
              <h2 className="text-xs font-semibold uppercase tracking-luxury text-velmora-espresso">Filters</h2>
            </div>
            <FilterGroup title="Category" options={categoryOptions} value={category} onChange={setCategory} />
            <FilterGroup title="Price" options={priceOptions} value={price} onChange={setPrice} />
            <FilterGroup title="Material" options={materialOptions} value={material} onChange={setMaterial} />
          </aside>

          <div>
            <div className="mb-6 flex items-center justify-between text-sm text-velmora-taupe">
              <span>{filteredProducts.length} pieces</span>
              <span>Free shipping on every order</span>
            </div>
            <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => <ProductCard key={product.id} product={product} onAdd={onAddToCart} />)}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <div className="border-b border-velmora-mist py-6 last:border-b-0">
      <h3 className="text-xs font-semibold uppercase tracking-luxury text-velmora-taupe">{title}</h3>
      <div className="mt-4 space-y-3">
        {options.map((option) => (
          <label key={option} className="flex cursor-pointer items-center gap-3 text-sm text-velmora-espresso">
            <input type="radio" name={title} value={option} checked={value === option} onChange={() => onChange(option)} className="h-4 w-4 accent-velmora-champagne" />
            {option}
          </label>
        ))}
      </div>
    </div>
  )
}
