import { useMemo, useState } from 'react'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const materialOptions = ['All', '18K Gold Plated', 'Crystal', 'Gold Vermeil']
const priceOptions = ['All', '$30–$50', '$50–$80', '$80–$120']

export default function Shop({ onAddToCart }) {
  const [category, setCategory] = useState('All')
  const [material, setMaterial] = useState('All')
  const [price, setPrice] = useState('All')
  const [sort, setSort] = useState('featured')

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material
      const priceMatch = price === 'All'
        || (price === '$30–$50' && product.price >= 30 && product.price <= 50)
        || (price === '$50–$80' && product.price > 50 && product.price <= 80)
        || (price === '$80–$120' && product.price > 80 && product.price <= 120)

      return categoryMatch && materialMatch && priceMatch
    })

    return [...result].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return products.findIndex((product) => product.id === a.id) - products.findIndex((product) => product.id === b.id)
    })
  }, [category, material, price, sort])

  const renderFilter = (title, value, setValue, options) => (
    <fieldset className="border-b border-velmora-mist pb-7">
      <legend className="mb-4 text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-ink">{title}</legend>
      <div className="grid gap-2">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setValue(option)}
            className={`flex items-center justify-between border px-4 py-3 text-left text-sm transition ${value === option ? 'border-velmora-champagne bg-velmora-champagne text-velmora-ink' : 'border-velmora-mist bg-velmora-pearl text-velmora-cocoa hover:border-velmora-champagne'}`}
          >
            <span>{option}</span>
            <span className="h-2 w-2 rounded-full bg-current opacity-45" />
          </button>
        ))}
      </div>
    </fieldset>
  )

  return (
    <main className="bg-velmora-cream pb-20 pt-28 text-velmora-cocoa">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="border-b border-velmora-mist pb-9">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-antique">Collection</p>
          <div className="mt-3 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="font-serif text-6xl font-semibold leading-none text-velmora-ink sm:text-7xl">Shop Velmora</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-velmora-cocoa/78">
                Demi-fine gold pieces designed for everyday glow, thoughtful gifting, and luminous self-purchase.
              </p>
            </div>
            <label className="flex min-w-60 flex-col gap-2 text-xs font-bold uppercase tracking-[0.2em] text-velmora-ink">
              Sort
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="border border-velmora-mist bg-velmora-pearl px-4 py-3 text-sm font-semibold normal-case tracking-normal text-velmora-cocoa outline-none focus:border-velmora-champagne"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </label>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[280px_1fr] lg:px-8">
        <aside className="h-fit bg-velmora-pearl p-5 shadow-sm lg:sticky lg:top-28">
          <div className="mb-7 flex items-center justify-between">
            <h2 className="font-serif text-3xl font-semibold text-velmora-ink">Filters</h2>
            <button
              type="button"
              onClick={() => {
                setCategory('All')
                setMaterial('All')
                setPrice('All')
              }}
              className="text-xs font-extrabold uppercase tracking-[0.18em] text-velmora-antique transition hover:text-velmora-ink"
            >
              Reset
            </button>
          </div>
          <div className="grid gap-7">
            {renderFilter('Category', category, setCategory, categoryOptions)}
            {renderFilter('Price', price, setPrice, priceOptions)}
            {renderFilter('Material', material, setMaterial, materialOptions)}
          </div>
        </aside>

        <div>
          <div className="mb-5 flex items-center justify-between text-sm text-velmora-cocoa/75">
            <p>{filteredProducts.length} piece{filteredProducts.length === 1 ? '' : 's'} found</p>
            <p className="hidden sm:block">Premium-but-accessible · $30–$120</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAdd={onAddToCart} context="shop" />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <div className="bg-velmora-pearl px-6 py-16 text-center text-velmora-cocoa shadow-sm">
              <h3 className="font-serif text-4xl font-semibold text-velmora-ink">No pieces found</h3>
              <p className="mt-3 text-sm leading-6 text-velmora-cocoa/75">Try adjusting your filters to see more Velmora jewelry.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
