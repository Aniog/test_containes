import { useEffect, useMemo, useRef, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'
import ProductCard from '../components/ProductCard.jsx'
import { products } from '../data/products.js'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const priceOptions = [
  { label: 'All', value: 'all' },
  { label: 'Under $50', value: 'under-50' },
  { label: '$50–$80', value: '50-80' },
  { label: '$80+', value: '80-plus' },
]
const materialOptions = ['All', '18K Gold Plated']

function ShopPage({ onAddToCart }) {
  const pageRef = useRef(null)
  const [category, setCategory] = useState('All')
  const [price, setPrice] = useState('all')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [category, price, material, sort])

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category
      const matchesMaterial = material === 'All' || product.material === material
      const matchesPrice =
        price === 'all' ||
        (price === 'under-50' && product.price < 50) ||
        (price === '50-80' && product.price >= 50 && product.price <= 80) ||
        (price === '80-plus' && product.price > 80)

      return matchesCategory && matchesMaterial && matchesPrice
    })

    return [...result].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return products.indexOf(a) - products.indexOf(b)
    })
  }, [category, price, material, sort])

  const FilterContent = () => (
    <div className="space-y-8 text-velmora-ink">
      <FilterGroup title="Category" options={categoryOptions} value={category} onChange={setCategory} />
      <FilterGroup title="Price" options={priceOptions} value={price} onChange={setPrice} />
      <FilterGroup title="Material" options={materialOptions} value={material} onChange={setMaterial} />
    </div>
  )

  return (
    <main ref={pageRef} className="bg-velmora-cream pt-24 text-velmora-ink">
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="border-b border-velmora-line pb-8">
          <p className="text-xs font-bold uppercase tracking-ui text-velmora-antique">The full edit</p>
          <div className="mt-4 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <h1 className="font-serif text-5xl leading-tight text-velmora-ink sm:text-6xl">Shop Velmora</h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-velmora-cocoa">
                Demi-fine gold jewelry from polished huggies to gift-ready sets, designed in warm tones and refined silhouettes.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setShowFilters(!showFilters)}
                className="inline-flex items-center gap-2 border border-velmora-line bg-velmora-porcelain px-4 py-3 text-xs font-bold uppercase tracking-ui text-velmora-ink lg:hidden"
              >
                <SlidersHorizontal className="h-4 w-4" /> Filters
              </button>
              <label className="text-xs font-bold uppercase tracking-ui text-velmora-cocoa" htmlFor="sort-products">
                Sort
              </label>
              <select
                id="sort-products"
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="border border-velmora-line bg-velmora-porcelain px-4 py-3 text-sm text-velmora-ink focus:border-velmora-antique focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        <div className={`mt-6 border border-velmora-line bg-velmora-porcelain p-5 lg:hidden ${showFilters ? 'block' : 'hidden'}`}>
          <FilterContent />
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[260px_1fr]">
          <aside className="sticky top-28 hidden h-max border border-velmora-line bg-velmora-porcelain p-6 lg:block">
            <div className="mb-7 flex items-center justify-between border-b border-velmora-line pb-4">
              <h2 className="font-serif text-2xl text-velmora-ink">Filters</h2>
              <button
                type="button"
                onClick={() => {
                  setCategory('All')
                  setPrice('all')
                  setMaterial('All')
                }}
                className="text-xs font-bold uppercase tracking-ui text-velmora-antique hover:text-velmora-ink"
              >
                Reset
              </button>
            </div>
            <FilterContent />
          </aside>

          <section>
            <div className="mb-5 flex items-center justify-between text-sm text-velmora-cocoa">
              <p>{filteredProducts.length} pieces</p>
              <p className="hidden sm:block">Free worldwide shipping on every order</p>
            </div>
            {filteredProducts.length > 0 ? (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} context="shop-grid" />
                ))}
              </div>
            ) : (
              <div className="border border-velmora-line bg-velmora-porcelain p-10 text-center text-velmora-cocoa">
                <h3 className="font-serif text-3xl text-velmora-ink">No pieces found</h3>
                <p className="mt-3 text-sm">Try adjusting your filters to reveal more of the collection.</p>
              </div>
            )}
          </section>
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <fieldset>
      <legend className="mb-4 text-xs font-bold uppercase tracking-ui text-velmora-antique">{title}</legend>
      <div className="space-y-3">
        {options.map((option) => {
          const optionLabel = typeof option === 'string' ? option : option.label
          const optionValue = typeof option === 'string' ? option : option.value
          return (
            <label key={optionValue} className="flex cursor-pointer items-center gap-3 text-sm text-velmora-cocoa">
              <input
                type="radio"
                checked={value === optionValue}
                onChange={() => onChange(optionValue)}
                className="h-4 w-4 accent-velmora-antique"
              />
              <span>{optionLabel}</span>
            </label>
          )
        })}
      </div>
    </fieldset>
  )
}

export default ShopPage
