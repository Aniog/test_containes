import { SlidersHorizontal } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/product/ProductCard.jsx'
import useStrkImages from '../hooks/useStrkImages.js'
import { products } from '../data/products.js'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const priceOptions = [
  { label: 'All prices', value: 'all' },
  { label: 'Under $50', value: 'under-50' },
  { label: '$50–$80', value: '50-80' },
  { label: '$80–$120', value: '80-120' },
]
const materialOptions = ['All', '18K Gold Plated', 'Hypoallergenic']

export default function ShopPage({ onAddToCart }) {
  const pageRef = useRef(null)
  const [searchParams] = useSearchParams()
  const [category, setCategory] = useState('All')
  const [price, setPrice] = useState('all')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')

  useEffect(() => {
    const requestedCategory = searchParams.get('category')
    if (requestedCategory && categoryOptions.includes(requestedCategory)) {
      setCategory(requestedCategory)
    }
  }, [searchParams])

  useStrkImages(pageRef, [category, price, material, sort])

  const filteredProducts = useMemo(() => {
    const next = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material || material === 'Hypoallergenic'
      const priceMatch = price === 'all'
        || (price === 'under-50' && product.price < 50)
        || (price === '50-80' && product.price >= 50 && product.price <= 80)
        || (price === '80-120' && product.price >= 80 && product.price <= 120)
      return categoryMatch && materialMatch && priceMatch
    })

    return [...next].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return products.findIndex((product) => product.id === a.id) - products.findIndex((product) => product.id === b.id)
    })
  }, [category, material, price, sort])

  return (
    <main ref={pageRef} className="bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="border-b border-velmora-line px-4 pb-10 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-goldDeep">Velmora Shop</p>
          <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="font-serif text-6xl leading-none sm:text-7xl">Demi-fine gold, edited.</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-velmora-taupe">Explore warm 18K gold-plated earrings, necklaces, huggies, and gift sets designed for premium everyday wear.</p>
            </div>
            <label className="flex items-center gap-3 text-sm text-velmora-espresso">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-taupe">Sort</span>
              <select value={sort} onChange={(event) => setSort(event.target.value)} className="min-h-12 border border-velmora-line bg-velmora-porcelain px-4 text-sm text-velmora-espresso outline-none focus:border-velmora-gold">
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </label>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[280px_1fr] lg:px-8 lg:py-14">
        <aside className="self-start border border-velmora-line bg-velmora-porcelain p-5 text-velmora-espresso shadow-soft lg:sticky lg:top-28">
          <div className="mb-5 flex items-center gap-2 border-b border-velmora-line pb-4">
            <SlidersHorizontal className="h-4 w-4 text-velmora-goldDeep" />
            <h2 className="text-xs font-bold uppercase tracking-[0.24em]">Filters</h2>
          </div>
          <FilterGroup title="Category" options={categoryOptions} value={category} onChange={setCategory} />
          <FilterGroup title="Price" options={priceOptions} value={price} onChange={setPrice} />
          <FilterGroup title="Material" options={materialOptions} value={material} onChange={setMaterial} />
        </aside>

        <div>
          <div className="mb-5 flex items-center justify-between border-b border-velmora-line pb-4">
            <p className="text-sm text-velmora-taupe"><span className="font-semibold text-velmora-espresso">{filteredProducts.length}</span> pieces</p>
            <button type="button" onClick={() => { setCategory('All'); setPrice('all'); setMaterial('All') }} className="text-xs font-bold uppercase tracking-[0.2em] text-velmora-goldDeep transition hover:text-velmora-espresso">Reset</button>
          </div>
          {filteredProducts.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} scope="shop-grid" />
              ))}
            </div>
          ) : (
            <div className="border border-velmora-line bg-velmora-porcelain p-10 text-center text-velmora-espresso">
              <h3 className="font-serif text-4xl">No pieces found</h3>
              <p className="mt-3 text-sm text-velmora-taupe">Try clearing one filter to see more of the collection.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <fieldset className="border-b border-velmora-line py-5 last:border-b-0">
      <legend className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-taupe">{title}</legend>
      <div className="space-y-2">
        {options.map((option) => {
          const optionLabel = typeof option === 'string' ? option : option.label
          const optionValue = typeof option === 'string' ? option : option.value
          return (
            <label key={optionValue} className="flex cursor-pointer items-center gap-3 text-sm text-velmora-espresso">
              <input
                type="radio"
                name={title}
                value={optionValue}
                checked={value === optionValue}
                onChange={() => onChange(optionValue)}
                className="h-4 w-4 accent-velmora-gold"
              />
              <span>{optionLabel}</span>
            </label>
          )
        })}
      </div>
    </fieldset>
  )
}
