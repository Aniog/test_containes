import { useMemo, useState } from 'react'
import ProductCard from '@/components/products/ProductCard'
import { products } from '@/data/products'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const materialOptions = ['All', '18K Gold Plated', 'Gold Vermeil']
const priceOptions = [
  { label: 'All', value: 'all' },
  { label: 'Under $50', value: 'under-50' },
  { label: '$50–$80', value: '50-80' },
  { label: '$80+', value: '80-plus' },
]

export default function Shop({ onAddToCart }) {
  const [category, setCategory] = useState('All')
  const [material, setMaterial] = useState('All')
  const [price, setPrice] = useState('all')
  const [sort, setSort] = useState('featured')

  const filteredProducts = useMemo(() => {
    const list = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material
      const priceMatch =
        price === 'all' ||
        (price === 'under-50' && product.price < 50) ||
        (price === '50-80' && product.price >= 50 && product.price <= 80) ||
        (price === '80-plus' && product.price > 80)
      return categoryMatch && materialMatch && priceMatch
    })

    return [...list].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return products.findIndex((item) => item.id === a.id) - products.findIndex((item) => item.id === b.id)
    })
  }, [category, material, price, sort])

  return (
    <main className="bg-velmora-ivory pb-20 pt-28 text-velmora-ink sm:pb-28">
      <section className="section-shell">
        <div className="border-b hairline pb-10 pt-6">
          <p className="eyebrow">Velmora Shop</p>
          <div className="mt-4 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h1 className="serif-title text-6xl leading-none sm:text-7xl">The demi-fine edit</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-velmora-taupe">Explore gold earrings, necklaces, huggies, and gift-ready sets designed for everyday heirloom energy.</p>
            </div>
            <label className="flex min-w-56 flex-col gap-2 text-xs font-semibold uppercase tracking-luxury text-velmora-taupe">
              Sort
              <select value={sort} onChange={(event) => setSort(event.target.value)} className="rounded-full border hairline bg-velmora-ivory px-4 py-3 text-sm normal-case tracking-normal text-velmora-ink focus:outline-none focus:ring-2 focus:ring-velmora-champagne">
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </label>
          </div>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[260px_1fr]">
          <aside className="h-fit rounded-[2rem] border hairline bg-velmora-blush p-5 text-velmora-ink lg:sticky lg:top-28">
            <h2 className="font-serif text-3xl font-semibold">Filter</h2>
            <FilterGroup title="Category" options={categoryOptions} value={category} onChange={setCategory} />
            <FilterGroup title="Material" options={materialOptions} value={material} onChange={setMaterial} />
            <div className="mt-7 border-t hairline pt-6">
              <h3 className="text-xs font-bold uppercase tracking-luxury text-velmora-taupe">Price</h3>
              <div className="mt-4 grid gap-2">
                {priceOptions.map((option) => (
                  <button key={option.value} type="button" onClick={() => setPrice(option.value)} className={`rounded-full border px-4 py-2 text-left text-sm transition ${price === option.value ? 'border-velmora-ink bg-velmora-ink text-velmora-ivory' : 'border-velmora-stone bg-velmora-ivory text-velmora-taupe hover:border-velmora-champagne hover:text-velmora-ink'}`}>
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <section aria-label="Products">
            <div className="mb-5 flex items-center justify-between text-sm text-velmora-taupe">
              <p>{filteredProducts.length} pieces</p>
              <p className="hidden sm:block">Premium finishes · Gift-ready packaging</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <div className="mt-7 border-t hairline pt-6">
      <h3 className="text-xs font-bold uppercase tracking-luxury text-velmora-taupe">{title}</h3>
      <div className="mt-4 grid gap-2">
        {options.map((option) => (
          <button key={option} type="button" onClick={() => onChange(option)} className={`rounded-full border px-4 py-2 text-left text-sm transition ${value === option ? 'border-velmora-ink bg-velmora-ink text-velmora-ivory' : 'border-velmora-stone bg-velmora-ivory text-velmora-taupe hover:border-velmora-champagne hover:text-velmora-ink'}`}>
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}
