import { useMemo, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import ProductGrid from '@/components/products/ProductGrid'
import { products } from '@/data/products'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const prices = [
  { label: 'All prices', value: 'all' },
  { label: 'Under $50', value: 'under-50' },
  { label: '$50–$80', value: '50-80' },
  { label: '$80+', value: '80-plus' },
]
const materials = ['All', '18K Gold Plated', 'Crystal', 'Textured Gold']

export default function ShopPage({ onAddToCart }) {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(categories.includes(initialCategory) ? initialCategory : 'All')
  const [price, setPrice] = useState('all')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const categoryMatches = category === 'All' || product.category === category
      const materialMatches = material === 'All' || product.material === material
      const priceMatches =
        price === 'all' ||
        (price === 'under-50' && product.price < 50) ||
        (price === '50-80' && product.price >= 50 && product.price <= 80) ||
        (price === '80-plus' && product.price > 80)

      return categoryMatches && materialMatches && priceMatches
    })

    return [...filtered].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return products.findIndex((item) => item.id === a.id) - products.findIndex((item) => item.id === b.id)
    })
  }, [category, material, price, sort])


  return (
    <main className="bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-8 sm:px-8 lg:px-10">
        <div className="border-b border-velmora-line pb-10">
          <p className="text-xs font-bold uppercase tracking-luxe text-velmora-gold">Collection</p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <h1 className="font-serifDisplay text-6xl font-semibold leading-none text-velmora-espresso md:text-7xl">Shop Velmora</h1>
            <p className="text-sm leading-7 text-velmora-taupe">
              Explore demi-fine earrings, necklaces, huggies, and gift sets with warm gold finishes and everyday polish.
            </p>
          </div>
        </div>
      </section>

      <section id="collections" className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 sm:px-8 lg:grid-cols-[17rem_1fr] lg:px-10">
        <aside className="h-fit border border-velmora-line bg-velmora-pearl p-5 text-velmora-espresso lg:sticky lg:top-28">
          <div className="mb-6 flex items-center gap-3 border-b border-velmora-line pb-4">
            <SlidersHorizontal className="h-4 w-4 text-velmora-gold" />
            <h2 className="text-xs font-bold uppercase tracking-luxe text-velmora-espresso">Filter</h2>
          </div>
          <FilterGroup title="Category" options={categories} value={category} onChange={setCategory} />
          <FilterGroup
            title="Price"
            options={prices.map((item) => item.label)}
            value={prices.find((item) => item.value === price)?.label || 'All prices'}
            onChange={(label) => setPrice(prices.find((item) => item.label === label)?.value || 'all')}
          />
          <FilterGroup title="Material" options={materials} value={material} onChange={setMaterial} />
        </aside>

        <div>
          <div className="mb-8 flex flex-col gap-4 border-b border-velmora-line pb-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-velmora-taupe">
              Showing <span className="font-bold text-velmora-espresso">{filteredProducts.length}</span> pieces
            </p>
            <label className="flex items-center gap-3 text-xs font-bold uppercase tracking-luxe text-velmora-taupe">
              Sort
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="border border-velmora-line bg-velmora-ivory px-4 py-3 text-sm font-semibold normal-case tracking-normal text-velmora-espresso focus:border-velmora-gold focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </label>
          </div>

          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} onAddToCart={onAddToCart} imageScope="shop-grid" />
          ) : (
            <div className="border border-velmora-line bg-velmora-pearl p-12 text-center text-velmora-espresso">
              <h3 className="font-serifDisplay text-4xl font-semibold">No pieces found</h3>
              <p className="mt-3 text-sm text-velmora-taupe">Try a softer filter combination to discover more Velmora pieces.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <div className="mb-7 border-b border-velmora-line pb-7 last:mb-0 last:border-b-0 last:pb-0">
      <h3 className="mb-4 text-xs font-bold uppercase tracking-luxe text-velmora-gold">{title}</h3>
      <div className="space-y-2">
        {options.map((option) => {
          const isActive = value === option
          return (
            <button
              key={option}
              type="button"
              onClick={() => onChange(option)}
              className={`flex w-full items-center justify-between px-3 py-2 text-left text-sm transition ${isActive ? 'bg-velmora-espresso text-velmora-ivory' : 'text-velmora-taupe hover:bg-velmora-parchment hover:text-velmora-espresso'}`}
            >
              <span>{option}</span>
              {isActive && <span className="h-1.5 w-1.5 rounded-full bg-velmora-gold" />}
            </button>
          )
        })}
      </div>
    </div>
  )
}
