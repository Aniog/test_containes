import { SlidersHorizontal } from 'lucide-react'
import { useMemo, useState } from 'react'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const prices = ['All', 'Under $50', '$50–$80', '$80+']
const materials = ['All', '18K Gold Plated']

export default function Shop({ onAdd, onOpenProduct }) {
  const [category, setCategory] = useState('All')
  const [price, setPrice] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')

  const filteredProducts = useMemo(() => {
    let next = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material
      const priceMatch =
        price === 'All' ||
        (price === 'Under $50' && product.price < 50) ||
        (price === '$50–$80' && product.price >= 50 && product.price <= 80) ||
        (price === '$80+' && product.price > 80)

      return categoryMatch && materialMatch && priceMatch
    })

    if (sort === 'price-low') next = [...next].sort((a, b) => a.price - b.price)
    if (sort === 'price-high') next = [...next].sort((a, b) => b.price - a.price)
    if (sort === 'rating') next = [...next].sort((a, b) => b.rating - a.rating)

    return next
  }, [category, material, price, sort])

  return (
    <main className="bg-porcelain pt-24 text-obsidian">
      <section className="border-b border-obsidian/10 bg-mist">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">The Collection</p>
          <div className="mt-4 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <h1 className="font-serif text-5xl text-obsidian sm:text-7xl">Shop demi-fine essentials</h1>
              <p className="mt-4 text-base leading-8 text-taupe">
                Warm gold pieces, delicate crystals, and sculptural huggies designed to be worn often and gifted beautifully.
              </p>
            </div>
            <label className="flex max-w-xs flex-col gap-2 text-xs font-bold uppercase tracking-[0.2em] text-taupe">
              Sort
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="rounded-full border border-obsidian/15 bg-porcelain px-4 py-3 text-sm normal-case tracking-normal text-obsidian focus:border-gold focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </label>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[17rem_1fr] lg:px-8 lg:py-14">
        <aside className="h-fit border border-obsidian/10 bg-mist p-5 shadow-soft lg:sticky lg:top-24">
          <div className="mb-6 flex items-center gap-2 border-b border-obsidian/10 pb-4">
            <SlidersHorizontal className="h-4 w-4 text-gold" />
            <h2 className="text-xs font-bold uppercase tracking-[0.26em] text-obsidian">Filter</h2>
          </div>
          <FilterGroup label="Category" options={categories} value={category} onChange={setCategory} />
          <FilterGroup label="Price" options={prices} value={price} onChange={setPrice} />
          <FilterGroup label="Material" options={materials} value={material} onChange={setMaterial} />
        </aside>

        <div>
          <div className="mb-5 flex items-center justify-between border-b border-obsidian/10 pb-4 text-sm text-taupe">
            <p>{filteredProducts.length} pieces</p>
            <p className="hidden sm:block">Free worldwide shipping on every order</p>
          </div>
          {filteredProducts.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAdd={onAdd} onOpenProduct={onOpenProduct} />
              ))}
            </div>
          ) : (
            <div className="border border-obsidian/10 bg-mist p-10 text-center text-obsidian">
              <h3 className="font-serif text-3xl">No pieces found</h3>
              <p className="mt-3 text-sm text-taupe">Try softening your filters to see more of the collection.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ label, options, value, onChange }) {
  return (
    <div className="border-b border-obsidian/10 py-5 last:border-b-0 last:pb-0 first:pt-0">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-taupe">{label}</p>
      <div className="flex flex-wrap gap-2 lg:grid">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              value === option
                ? 'border-gold bg-gold text-obsidian'
                : 'border-obsidian/15 bg-porcelain text-obsidian hover:border-gold'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}
