import { useMemo, useState } from 'react'
import ProductCard from '@/components/product/ProductCard.jsx?velmora=20260724'
import { products } from '@/data/products'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const priceRanges = ['All', 'Under $50', '$50–$80', '$80+']
const materials = ['All', '18K Gold Plated', 'Crystal']

function ShopPage({ onAddToCart }) {
  const [category, setCategory] = useState('All')
  const [priceRange, setPriceRange] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')

  const filteredProducts = useMemo(() => {
    const withinPrice = (product) => {
      if (priceRange === 'Under $50') return product.price < 50
      if (priceRange === '$50–$80') return product.price >= 50 && product.price <= 80
      if (priceRange === '$80+') return product.price > 80
      return true
    }

    const list = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material
      return categoryMatch && materialMatch && withinPrice(product)
    })

    if (sort === 'price-low') return [...list].sort((a, b) => a.price - b.price)
    if (sort === 'price-high') return [...list].sort((a, b) => b.price - a.price)
    if (sort === 'rating') return [...list].sort((a, b) => b.rating - a.rating)
    return list
  }, [category, material, priceRange, sort])

  const FilterGroup = ({ title, options, value, onChange }) => (
    <div className="border-b border-velmora-cocoa/10 pb-6">
      <h3 className="text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-cocoa">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2 lg:grid">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] transition lg:w-full lg:text-left ${
              value === option
                ? 'border-velmora-gold bg-velmora-gold text-velmora-espresso'
                : 'border-velmora-cocoa/12 bg-velmora-ivory text-velmora-cocoa hover:border-velmora-gold hover:text-velmora-espresso'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )

  return (
    <main className="bg-velmora-porcelain pt-24 text-velmora-espresso">
      <section className="border-b border-velmora-cocoa/10 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.32em] text-velmora-gold">Velmora shop</p>
          <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="font-serif text-6xl leading-none text-velmora-espresso sm:text-7xl">Shop demi-fine gold jewelry.</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-velmora-cocoa">
                Refined earrings, necklaces, huggies, and gift-ready sets designed for everyday luxury.
              </p>
            </div>
            <label className="flex max-w-xs flex-col gap-2 text-xs font-extrabold uppercase tracking-[0.22em] text-velmora-cocoa">
              Sort
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="h-12 rounded-full border border-velmora-cocoa/15 bg-velmora-ivory px-5 text-sm font-semibold normal-case tracking-normal text-velmora-espresso outline-none focus:border-velmora-gold"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: low to high</option>
                <option value="price-high">Price: high to low</option>
                <option value="rating">Top rated</option>
              </select>
            </label>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[280px_1fr] lg:px-8 lg:py-14">
        <aside className="rounded-[2rem] border border-velmora-cocoa/10 bg-velmora-ivory p-5 text-velmora-espresso shadow-[0_20px_60px_rgba(33,23,19,0.06)] lg:sticky lg:top-28 lg:self-start lg:p-7">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-serif text-3xl text-velmora-espresso">Filters</h2>
            <button
              type="button"
              onClick={() => {
                setCategory('All')
                setPriceRange('All')
                setMaterial('All')
              }}
              className="bg-transparent text-xs font-extrabold uppercase tracking-[0.2em] text-velmora-gold"
            >
              Reset
            </button>
          </div>
          <div className="space-y-6">
            <FilterGroup title="Category" options={categories} value={category} onChange={setCategory} />
            <FilterGroup title="Price" options={priceRanges} value={priceRange} onChange={setPriceRange} />
            <FilterGroup title="Material" options={materials} value={material} onChange={setMaterial} />
          </div>
        </aside>

        <div>
          <div className="mb-6 flex items-center justify-between border-b border-velmora-cocoa/10 pb-4 text-sm text-velmora-cocoa">
            <p>{filteredProducts.length} piece{filteredProducts.length === 1 ? '' : 's'}</p>
            <p className="hidden sm:block">Premium pieces from {products.length} seeded bestsellers</p>
          </div>
          {filteredProducts.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
              ))}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-dashed border-velmora-cocoa/20 bg-velmora-ivory p-12 text-center text-velmora-espresso">
              <h3 className="font-serif text-4xl">No pieces match those filters.</h3>
              <p className="mt-3 text-sm leading-7 text-velmora-cocoa">Try resetting filters to view the full Velmora collection.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export default ShopPage
