import { useEffect, useMemo, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { SlidersHorizontal } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import { useStrkImages } from '@/hooks/useStrkImages'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const priceRanges = [
  { label: 'All', min: 0, max: Infinity },
  { label: '$30–$50', min: 30, max: 50 },
  { label: '$51–$80', min: 51, max: 80 },
  { label: '$81–$120', min: 81, max: 120 },
]
const materials = ['All', '18K Gold Plated', 'Crystal', 'Gold Filigree']

function getInitialCategory() {
  const params = new URLSearchParams(window.location.search)
  return params.get('category') || 'All'
}

function ShopPage({ onAddToCart }) {
  const pageRef = useRef(null)
  const location = useLocation()
  const [category, setCategory] = useState(getInitialCategory)
  const [price, setPrice] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')

  useEffect(() => {
    const nextCategory = new URLSearchParams(location.search).get('category') || 'All'
    setCategory(nextCategory)
  }, [location.search])


  const filteredProducts = useMemo(() => {
    const selectedRange = priceRanges.find((range) => range.label === price) || priceRanges[0]
    const rows = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const priceMatch = product.price >= selectedRange.min && product.price <= selectedRange.max
      const materialMatch = material === 'All' || product.material === material
      return categoryMatch && priceMatch && materialMatch
    })

    return [...rows].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return products.findIndex((item) => item.id === a.id) - products.findIndex((item) => item.id === b.id)
    })
  }, [category, material, price, sort])

  useStrkImages(pageRef, [category, material, price, sort])

  return (
    <main ref={pageRef} className="bg-velmora-ivory pt-28 text-velmora-ink">
      <section className="border-b border-velmora-sand px-4 pb-12 pt-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="font-sans text-xs uppercase tracking-[0.35em] text-velmora-gold">The Velmora Collection</p>
          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="font-serif text-5xl leading-none sm:text-7xl">Shop demi-fine essentials.</h1>
              <p className="mt-5 max-w-2xl font-sans text-base leading-8 text-velmora-taupe">
                Discover gold-plated earrings, huggies, necklaces, and gift-ready sets designed with quiet polish.
              </p>
            </div>
            <div className="flex items-center gap-3 text-velmora-ink">
              <label htmlFor="sort" className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-velmora-taupe">
                Sort
              </label>
              <select
                id="sort"
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="border border-velmora-sand bg-velmora-porcelain px-4 py-3 font-sans text-sm text-velmora-ink focus:border-velmora-gold focus:outline-none focus:ring-2 focus:ring-velmora-gold/30"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8">
        <aside className="h-fit border border-velmora-sand bg-velmora-porcelain p-5 text-velmora-ink shadow-soft lg:sticky lg:top-28">
          <div className="mb-6 flex items-center gap-2 border-b border-velmora-sand pb-4">
            <SlidersHorizontal className="h-4 w-4 text-velmora-gold" />
            <h2 className="font-sans text-xs font-bold uppercase tracking-[0.3em]">Filters</h2>
          </div>
          <FilterGroup title="Category" options={categories} value={category} onChange={setCategory} />
          <FilterGroup title="Price" options={priceRanges.map((range) => range.label)} value={price} onChange={setPrice} />
          <FilterGroup title="Material" options={materials} value={material} onChange={setMaterial} />
        </aside>

        <div>
          <div className="mb-5 flex items-center justify-between border-b border-velmora-sand pb-4 font-sans text-sm text-velmora-taupe">
            <span>{filteredProducts.length} pieces</span>
            <span>Free worldwide shipping</span>
          </div>
          {filteredProducts.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} contextKey="shop-grid" />
              ))}
            </div>
          ) : (
            <div className="border border-velmora-sand bg-velmora-porcelain p-10 text-center text-velmora-ink shadow-soft">
              <p className="font-serif text-3xl">No pieces match those filters.</p>
              <p className="mt-3 font-sans text-sm text-velmora-taupe">Try a broader category or price range.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <div className="mb-7 last:mb-0">
      <h3 className="mb-3 font-serif text-2xl text-velmora-ink">{title}</h3>
      <div className="space-y-2">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`w-full border px-4 py-3 text-left font-sans text-xs font-bold uppercase tracking-[0.22em] transition focus:outline-none focus:ring-2 focus:ring-velmora-gold ${
              value === option
                ? 'border-velmora-champagne bg-velmora-champagne text-velmora-ink'
                : 'border-velmora-sand bg-velmora-ivory text-velmora-taupe hover:border-velmora-gold hover:text-velmora-ink'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}

export default ShopPage
