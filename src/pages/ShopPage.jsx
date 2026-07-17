import { SlidersHorizontal } from 'lucide-react'
import { useMemo, useState } from 'react'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const priceOptions = ['All', 'Under $50', '$50–$80', '$80+']
const materialOptions = ['All', '18K Gold Plated', 'Crystal Gold Plated', 'Textured Gold Plated']

export default function ShopPage({ onAddToCart }) {
  const [category, setCategory] = useState('All')
  const [price, setPrice] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')

  const filteredProducts = useMemo(() => {
    const list = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material
      const priceMatch =
        price === 'All' ||
        (price === 'Under $50' && product.price < 50) ||
        (price === '$50–$80' && product.price >= 50 && product.price <= 80) ||
        (price === '$80+' && product.price > 80)
      return categoryMatch && materialMatch && priceMatch
    })

    if (sort === 'price-low') return [...list].sort((a, b) => a.price - b.price)
    if (sort === 'price-high') return [...list].sort((a, b) => b.price - a.price)
    if (sort === 'rating') return [...list].sort((a, b) => b.rating - a.rating)
    return list
  }, [category, material, price, sort])

  return (
    <main className="bg-velmora-ivory text-velmora-ink">
      <section className="border-b border-velmora-oat bg-velmora-pearl px-5 pb-12 pt-32 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="font-sans text-xs font-semibold uppercase tracking-[0.28em] text-velmora-gold">Collection</p>
          <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="font-serifDisplay text-6xl text-velmora-cocoa md:text-7xl">Shop Velmora</h1>
              <p className="mt-4 max-w-2xl font-sans text-base leading-8 text-velmora-taupe">Demi-fine earrings, necklaces, huggies, and gift-ready sets designed for warm everyday shine.</p>
            </div>
            <label className="flex items-center gap-3 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-velmora-cocoa">
              Sort
              <select value={sort} onChange={(event) => setSort(event.target.value)} className="rounded-full border border-velmora-oat bg-velmora-ivory px-4 py-3 text-sm normal-case tracking-normal text-velmora-cocoa focus:border-velmora-gold focus:outline-none">
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </label>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[280px_1fr] lg:px-12 lg:py-16">
        <aside className="h-fit rounded-[1.75rem] border border-velmora-oat bg-velmora-pearl p-6 text-velmora-cocoa shadow-sm lg:sticky lg:top-28">
          <div className="mb-6 flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-velmora-gold" />
            <h2 className="font-sans text-xs font-bold uppercase tracking-[0.24em]">Filters</h2>
          </div>
          <FilterGroup title="Category" options={categoryOptions} value={category} onChange={setCategory} />
          <FilterGroup title="Price" options={priceOptions} value={price} onChange={setPrice} />
          <FilterGroup title="Material" options={materialOptions} value={material} onChange={setMaterial} />
          <button type="button" onClick={() => { setCategory('All'); setPrice('All'); setMaterial('All') }} className="mt-4 w-full rounded-full border border-velmora-gold px-5 py-3 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-velmora-cocoa transition hover:bg-velmora-gold hover:text-velmora-ink">
            Clear filters
          </button>
        </aside>

        <div>
          <p className="mb-6 font-sans text-sm text-velmora-taupe">Showing <span className="font-semibold text-velmora-cocoa">{filteredProducts.length}</span> of {products.length} pieces</p>
          {filteredProducts.length > 0 ? (
            <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} contextLabel="Velmora shop collection demi-fine gold jewelry" />)}
            </div>
          ) : (
            <div className="rounded-[1.75rem] border border-velmora-oat bg-velmora-pearl p-10 text-center text-velmora-cocoa">
              <h3 className="font-serifDisplay text-3xl">No pieces match these filters.</h3>
              <p className="mt-3 font-sans text-sm text-velmora-taupe">Clear one filter to continue browsing the full collection.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <div className="border-t border-velmora-oat py-5 first:border-t-0 first:pt-0">
      <h3 className="mb-4 font-serifDisplay text-2xl text-velmora-cocoa">{title}</h3>
      <div className="grid gap-2">
        {options.map((option) => (
          <label key={option} className="flex cursor-pointer items-center gap-3 font-sans text-sm text-velmora-taupe transition hover:text-velmora-cocoa">
            <input type="radio" checked={value === option} onChange={() => onChange(option)} className="h-4 w-4 accent-velmora-gold" />
            {option}
          </label>
        ))}
      </div>
    </div>
  )
}
