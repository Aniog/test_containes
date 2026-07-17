import { SlidersHorizontal } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/product/ProductCard.jsx'
import { products } from '@/data/products.js'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const priceRanges = [
  { label: 'All', min: 0, max: Infinity },
  { label: '$30–$50', min: 30, max: 50 },
  { label: '$50–$80', min: 50, max: 80 },
  { label: '$80–$120', min: 80, max: 120 },
]
const materials = ['All', '18K Gold Plated', 'Silver Tone']

export default function Shop({ onAddToCart }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(categories.includes(initialCategory) ? initialCategory : 'All')
  const [price, setPrice] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')

  const filteredProducts = useMemo(() => {
    const priceRange = priceRanges.find((range) => range.label === price) ?? priceRanges[0]
    const filtered = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const priceMatch = product.price >= priceRange.min && product.price <= priceRange.max
      const materialMatch = material === 'All' || product.material === material
      return categoryMatch && priceMatch && materialMatch
    })

    return [...filtered].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return products.findIndex((product) => product.id === a.id) - products.findIndex((product) => product.id === b.id)
    })
  }, [category, material, price, sort])

  const handleCategory = (value) => {
    setCategory(value)
    const next = new URLSearchParams(searchParams)
    if (value === 'All') next.delete('category')
    else next.set('category', value)
    setSearchParams(next)
  }

  return (
    <main className="bg-velmora-ivory pt-24 text-velmora-ink lg:pt-28">
      <section className="mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8 lg:pb-14">
        <div className="border-b border-velmora-gold/25 pb-8">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-velmora-gold">Collection</p>
          <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="font-serif text-6xl font-semibold leading-none text-velmora-ink sm:text-7xl">Shop Velmora</h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-velmora-taupe">Discover warm demi-fine essentials designed for everyday rituals, polished gifting, and effortless layering.</p>
            </div>
            <label className="flex w-full max-w-xs items-center gap-3 rounded-full border border-velmora-gold/30 bg-velmora-porcelain px-4 py-3 text-sm font-semibold text-velmora-ink">
              <span className="text-xs uppercase tracking-[0.2em] text-velmora-taupe">Sort</span>
              <select value={sort} onChange={(event) => setSort(event.target.value)} className="flex-1 bg-transparent text-velmora-ink outline-none">
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </label>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-20 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8 lg:pb-28">
        <aside className="rounded-[2rem] border border-velmora-gold/25 bg-velmora-porcelain p-5 text-velmora-ink shadow-soft lg:sticky lg:top-28 lg:self-start">
          <div className="mb-6 flex items-center gap-2 border-b border-velmora-gold/20 pb-4">
            <SlidersHorizontal className="h-4 w-4 text-velmora-gold" />
            <h2 className="text-xs font-extrabold uppercase tracking-[0.25em] text-velmora-ink">Filters</h2>
          </div>
          <FilterGroup title="Category" options={categories} value={category} onChange={handleCategory} />
          <FilterGroup title="Price" options={priceRanges.map((range) => range.label)} value={price} onChange={setPrice} />
          <FilterGroup title="Material" options={materials} value={material} onChange={setMaterial} />
        </aside>

        <div>
          <div className="mb-6 flex items-center justify-between text-sm text-velmora-taupe">
            <p>{filteredProducts.length} piece{filteredProducts.length === 1 ? '' : 's'}</p>
            <p className="hidden sm:block">Premium demi-fine jewelry · $30–$120</p>
          </div>
          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />)}
          </div>
          {filteredProducts.length === 0 && (
            <div className="rounded-[2rem] border border-velmora-gold/25 bg-velmora-porcelain p-10 text-center text-velmora-ink">
              <h3 className="font-serif text-3xl">No pieces found</h3>
              <p className="mt-3 text-sm text-velmora-taupe">Try a different category, price, or material filter.</p>
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
      <h3 className="mb-3 text-xs font-extrabold uppercase tracking-[0.22em] text-velmora-gold">{title}</h3>
      <div className="grid gap-2">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`rounded-full border px-4 py-2 text-left text-sm font-semibold transition ${value === option ? 'border-velmora-gold bg-velmora-gold text-velmora-ink' : 'border-velmora-ink/10 bg-transparent text-velmora-ink hover:border-velmora-gold hover:text-velmora-gold'}`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}
