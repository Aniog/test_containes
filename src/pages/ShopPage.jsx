import { useMemo, useState } from 'react'
import ProductCard from '@/components/products/ProductCard.jsx?velmora=bg-images'
import { products } from '@/data/products.js?velmora=png-assets'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const materialOptions = ['All', '18K Gold', 'Crystal', 'Gift Set']
const priceOptions = ['All', 'Under $50', '$50–$80', '$80–$120']

export default function ShopPage({ onAddToCart }) {
  const [category, setCategory] = useState('All')
  const [material, setMaterial] = useState('All')
  const [price, setPrice] = useState('All')
  const [sort, setSort] = useState('featured')

  const filteredProducts = useMemo(() => {
    const nextProducts = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch =
        material === 'All' ||
        (material === '18K Gold' && product.materialTag === '18k-gold') ||
        (material === 'Crystal' && product.materialTag === 'crystal') ||
        (material === 'Gift Set' && product.materialTag === 'gift-set')
      const priceMatch =
        price === 'All' ||
        (price === 'Under $50' && product.price < 50) ||
        (price === '$50–$80' && product.price >= 50 && product.price <= 80) ||
        (price === '$80–$120' && product.price > 80 && product.price <= 120)
      return categoryMatch && materialMatch && priceMatch
    })

    return [...nextProducts].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return 0
    })
  }, [category, material, price, sort])

  const FilterGroup = ({ title, options, value, onChange }) => (
    <div className="border-b border-velmora-sand/70 pb-6">
      <h3 className="text-xs font-semibold uppercase tracking-ui text-velmora-ink">{title}</h3>
      <div className="mt-4 grid gap-2">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`rounded-full border px-4 py-2 text-left text-sm transition ${value === option ? 'border-velmora-gold bg-velmora-gold text-velmora-ink' : 'border-velmora-sand bg-transparent text-velmora-bronze hover:border-velmora-gold hover:text-velmora-ink'}`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )

  return (
    <main className="bg-velmora-ivory pt-28 text-velmora-ink">
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mb-10 border-b border-velmora-sand/70 pb-8 lg:flex lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-ui text-velmora-gold">Shop Velmora</p>
            <h1 className="mt-3 font-serif text-6xl leading-none text-velmora-ink sm:text-7xl">The Collection</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-velmora-bronze">
              Demi-fine gold jewelry edited for daily wear, modern gifting, and premium warmth under $120.
            </p>
          </div>
          <label className="mt-6 block text-sm text-velmora-bronze lg:mt-0">
            Sort by
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              className="mt-2 block w-full rounded-full border border-velmora-sand bg-velmora-pearl px-5 py-3 text-sm text-velmora-ink focus:border-velmora-gold focus:outline-none lg:w-56"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </label>
        </div>

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="space-y-6 rounded-[2rem] border border-velmora-sand/70 bg-velmora-pearl p-5 text-velmora-ink lg:sticky lg:top-28 lg:self-start">
            <FilterGroup title="Category" options={categoryOptions} value={category} onChange={setCategory} />
            <FilterGroup title="Price" options={priceOptions} value={price} onChange={setPrice} />
            <FilterGroup title="Material" options={materialOptions} value={material} onChange={setMaterial} />
          </aside>

          <div>
            <div className="mb-5 flex items-center justify-between text-sm text-velmora-bronze">
              <span>{filteredProducts.length} piece{filteredProducts.length === 1 ? '' : 's'}</span>
              <span>Free worldwide shipping</span>
            </div>
            {filteredProducts.length > 0 ? (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} scope="shop" />
                ))}
              </div>
            ) : (
              <div className="rounded-[2rem] border border-velmora-sand bg-velmora-pearl p-10 text-center text-velmora-ink">
                <p className="font-serif text-3xl">No pieces match these filters.</p>
                <p className="mt-3 text-sm text-velmora-bronze">Try clearing one filter to see more of the collection.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
