import { SlidersHorizontal } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import { products } from '../data/products.js'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const priceOptions = [
  { label: 'All', min: 0, max: Infinity },
  { label: '$30–$50', min: 30, max: 50 },
  { label: '$50–$80', min: 50, max: 80 },
  { label: '$80–$120', min: 80, max: 120 },
]
const materialOptions = ['All', '18K Gold Plated', 'Crystal Accent']

export default function ShopPage({ onAddToCart }) {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(categoryOptions.includes(initialCategory) ? initialCategory : 'All')
  const [price, setPrice] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')

  const filteredProducts = useMemo(() => {
    const selectedPrice = priceOptions.find((option) => option.label === price) || priceOptions[0]
    return products
      .filter((product) => category === 'All' || product.category === category)
      .filter((product) => product.price >= selectedPrice.min && product.price <= selectedPrice.max)
      .filter((product) => {
        if (material === 'All') return true
        if (material === 'Crystal Accent') return product.description.toLowerCase().includes('crystal')
        return product.material === material
      })
      .sort((a, b) => {
        if (sort === 'price-low') return a.price - b.price
        if (sort === 'price-high') return b.price - a.price
        if (sort === 'rating') return b.rating - a.rating
        return 0
      })
  }, [category, price, material, sort])

  return (
    <main className="bg-velmora-ivory pt-28 text-velmora-obsidian">
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-10 sm:px-8 lg:px-10">
        <div className="border-b border-velmora-champagne/25 pb-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-champagneDark">Velmora shop</p>
          <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="font-serif text-6xl leading-none text-velmora-obsidian sm:text-7xl">The Collection</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-velmora-ink/78">
                Premium demi-fine jewelry from $30 to $120, selected for warm shine, easy gifting, and everyday wear.
              </p>
            </div>
            <label className="flex max-w-xs flex-col gap-2 text-xs font-bold uppercase tracking-[0.2em] text-velmora-taupe">
              Sort
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="rounded-full border border-velmora-champagne/30 bg-velmora-pearl px-5 py-3 text-sm font-semibold normal-case tracking-normal text-velmora-obsidian outline-none focus:border-velmora-champagneDark focus:ring-4 focus:ring-velmora-champagne/20"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: low to high</option>
                <option value="price-high">Price: high to low</option>
                <option value="rating">Top rated</option>
              </select>
            </label>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[17rem_1fr]">
          <aside className="h-fit rounded-[2rem] border border-velmora-champagne/20 bg-velmora-pearl p-6 text-velmora-obsidian shadow-[0_18px_60px_rgba(32,25,19,0.06)] lg:sticky lg:top-28">
            <div className="mb-6 flex items-center gap-3 border-b border-velmora-champagne/20 pb-5">
              <SlidersHorizontal className="h-4 w-4 text-velmora-champagneDark" />
              <h2 className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-obsidian">Filter</h2>
            </div>
            <FilterGroup title="Category" options={categoryOptions} value={category} onChange={setCategory} />
            <FilterGroup title="Price" options={priceOptions.map((option) => option.label)} value={price} onChange={setPrice} />
            <FilterGroup title="Material" options={materialOptions} value={material} onChange={setMaterial} />
          </aside>

          <div>
            <div className="mb-5 flex items-center justify-between text-sm text-velmora-ink/72">
              <p>{filteredProducts.length} pieces</p>
              <p className="hidden sm:block">Free worldwide shipping · 30-day returns</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
              ))}
            </div>
            {filteredProducts.length === 0 && (
              <div className="rounded-[2rem] border border-velmora-champagne/25 bg-velmora-pearl p-10 text-center text-velmora-obsidian">
                <h3 className="font-serif text-3xl">No pieces found</h3>
                <p className="mt-3 text-sm text-velmora-ink/75">Adjust your filters to explore more Velmora jewelry.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <fieldset className="mb-7 last:mb-0">
      <legend className="mb-3 font-serif text-2xl text-velmora-obsidian">{title}</legend>
      <div className="grid gap-2">
        {options.map((option) => (
          <label key={option} className="flex cursor-pointer items-center justify-between rounded-full px-3 py-2 text-sm text-velmora-ink/78 transition hover:bg-velmora-champagne/12">
            <span>{option}</span>
            <input
              type="radio"
              name={title}
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
              className="h-4 w-4 accent-velmora-champagneDark"
            />
          </label>
        ))}
      </div>
    </fieldset>
  )
}
