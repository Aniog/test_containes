import { SlidersHorizontal } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/storefront/ProductCard.jsx'
import { products } from '../data/products.js'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const prices = ['All', 'Under $50', '$50–$80', '$80+']
const materials = ['All', '18K Gold Plated', 'Crystal Accent']

function matchesPrice(product, price) {
  if (price === 'Under $50') return product.price < 50
  if (price === '$50–$80') return product.price >= 50 && product.price <= 80
  if (price === '$80+') return product.price > 80
  return true
}

function Shop({ onAddToCart }) {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(categories.includes(initialCategory) ? initialCategory : 'All')
  const [price, setPrice] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const priceMatch = matchesPrice(product, price)
      const materialMatch = material === 'All' || product.material === material || product.description.includes('crystal')
      return categoryMatch && priceMatch && materialMatch
    })

    return [...result].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return products.findIndex((item) => item.id === a.id) - products.findIndex((item) => item.id === b.id)
    })
  }, [category, material, price, sort])

  return (
    <main className="bg-porcelain pt-24 text-espresso sm:pt-28">
      <section className="border-b border-mist bg-pearl">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-champagne-dark">The collection</p>
          <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="font-serif text-6xl leading-none text-espresso sm:text-7xl">Shop Velmora</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-mocha">Demi-fine gold jewelry for gifting, stacking, and becoming part of your everyday ritual.</p>
            </div>
            <div className="flex items-center gap-3 border border-mist bg-porcelain px-4 py-3 text-sm text-mocha">
              <SlidersHorizontal className="h-4 w-4 text-champagne-dark" />
              <span>{filteredProducts.length} pieces</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8 lg:py-14">
        <aside className="h-fit border border-mist bg-pearl p-5 text-espresso lg:sticky lg:top-28">
          <h2 className="font-serif text-3xl text-espresso">Filter</h2>
          <FilterGroup title="Category" options={categories} selected={category} onChange={setCategory} />
          <FilterGroup title="Price" options={prices} selected={price} onChange={setPrice} />
          <FilterGroup title="Material" options={materials} selected={material} onChange={setMaterial} />
        </aside>

        <div>
          <div className="mb-6 flex flex-col gap-4 border-b border-mist pb-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-mocha">Showing refined essentials in warm gold tones.</p>
            <label className="flex items-center gap-3 text-sm text-mocha">
              Sort
              <select value={sort} onChange={(event) => setSort(event.target.value)} className="border border-mist bg-pearl px-4 py-3 text-sm text-espresso outline-none focus:border-champagne">
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </label>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />)}
          </div>

          {filteredProducts.length === 0 && (
            <div className="border border-mist bg-pearl p-10 text-center text-espresso">
              <h3 className="font-serif text-4xl">No pieces found</h3>
              <p className="mt-3 text-sm text-mocha">Try adjusting your filters to view more of the collection.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, selected, onChange }) {
  return (
    <fieldset className="mt-7 border-t border-mist pt-6">
      <legend className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-champagne-dark">{title}</legend>
      <div className="space-y-3">
        {options.map((option) => (
          <label key={option} className="flex cursor-pointer items-center justify-between gap-3 text-sm text-mocha transition hover:text-espresso">
            <span>{option}</span>
            <input
              type="radio"
              name={title}
              checked={selected === option}
              onChange={() => onChange(option)}
              className="h-4 w-4 accent-champagne"
            />
          </label>
        ))}
      </div>
    </fieldset>
  )
}

export default Shop
