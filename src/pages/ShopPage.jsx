import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const materialOptions = ['All', '18K Gold Plated', 'Crystal']
const priceOptions = [
  { label: 'All', min: 0, max: Infinity },
  { label: '$30–$50', min: 30, max: 50 },
  { label: '$50–$80', min: 50, max: 80 },
  { label: '$80–$120', min: 80, max: 120 },
]

const getCategoryFromParams = (searchParams) => {
  const categoryParam = searchParams.get('category')
  const collectionParam = searchParams.get('collection')

  if (categoryParam && categoryOptions.includes(categoryParam)) return categoryParam
  if (collectionParam === 'gift') return 'Gift Sets'
  return 'All'
}

export default function ShopPage({ onAddToCart }) {
  const [searchParams] = useSearchParams()
  const [category, setCategory] = useState(() => getCategoryFromParams(searchParams))
  const [material, setMaterial] = useState('All')
  const [price, setPrice] = useState('All')
  const [sort, setSort] = useState('featured')

  useEffect(() => {
    setCategory(getCategoryFromParams(searchParams))
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    const selectedPrice = priceOptions.find((option) => option.label === price) || priceOptions[0]
    const nextProducts = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material
      const priceMatch = product.price >= selectedPrice.min && product.price <= selectedPrice.max
      return categoryMatch && materialMatch && priceMatch
    })

    return [...nextProducts].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return 0
    })
  }, [category, material, price, sort])

  return (
    <main className="bg-velmora-cream pt-24 text-velmora-ink">
      <section className="border-b border-velmora-stone px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-gold">Shop Velmora</p>
          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="font-serif text-6xl leading-none tracking-[-0.04em] text-velmora-ink md:text-7xl">
                Demi-fine essentials
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-velmora-muted">
                Discover gold-toned pieces designed for layering, gifting, and luminous everyday wear.
              </p>
            </div>
            <label className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-ink">
              Sort
              <select value={sort} onChange={(event) => setSort(event.target.value)} className="rounded-full border border-velmora-stone bg-white/45 px-5 py-3 text-sm normal-case tracking-normal text-velmora-ink focus:border-velmora-champagne focus:outline-none">
                <option value="featured">Featured</option>
                <option value="price-low">Price: low to high</option>
                <option value="price-high">Price: high to low</option>
                <option value="rating">Highest rated</option>
              </select>
            </label>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[17rem_1fr] lg:px-10 lg:py-14">
        <aside className="h-fit rounded-[2rem] border border-velmora-stone bg-white/35 p-5 text-velmora-ink lg:sticky lg:top-28">
          <div className="mb-5 flex items-center gap-2 border-b border-velmora-stone pb-4">
            <SlidersHorizontal className="h-4 w-4 text-velmora-gold" />
            <h2 className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-ink">Filters</h2>
          </div>
          <FilterGroup label="Category" options={categoryOptions} value={category} onChange={setCategory} />
          <FilterGroup label="Price" options={priceOptions.map((option) => option.label)} value={price} onChange={setPrice} />
          <FilterGroup label="Material" options={materialOptions} value={material} onChange={setMaterial} />
        </aside>

        <div>
          <div className="mb-6 flex items-center justify-between border-b border-velmora-stone pb-4 text-xs font-bold uppercase tracking-[0.2em] text-velmora-muted">
            <span>{filteredProducts.length} pieces</span>
            <span>Premium demi-fine</span>
          </div>
          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAdd={onAddToCart} context="shop" />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <div className="rounded-[2rem] border border-velmora-stone bg-white/35 p-10 text-center text-velmora-ink">
              <p className="font-serif text-3xl">No pieces match these filters.</p>
              <p className="mt-3 text-sm text-velmora-muted">Try a broader category or price range.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ label, options, value, onChange }) {
  return (
    <fieldset className="border-b border-velmora-stone py-5 last:border-0 last:pb-0">
      <legend className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-velmora-muted">{label}</legend>
      <div className="grid gap-2">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-3 rounded-full px-2 py-1.5 text-sm text-velmora-ink transition hover:bg-velmora-stone/60">
            <input type="radio" name={label} checked={value === option} onChange={() => onChange(option)} className="h-4 w-4 accent-velmora-gold" />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}
