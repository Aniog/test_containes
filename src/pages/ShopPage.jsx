import { SlidersHorizontal } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'
import { useStrkImages } from '@/lib/useStrkImages'

const categoryFilters = ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const priceFilters = [
  { label: 'Under $50', min: 0, max: 49 },
  { label: '$50–$80', min: 50, max: 80 },
  { label: '$80+', min: 81, max: 200 },
]
const materials = ['18K Gold Plated', 'Crystal Accent', 'Gift-ready']

export default function ShopPage() {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(initialCategory)
  const [price, setPrice] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')
  const containerRef = useStrkImages([category, price, material, sort])

  const filteredProducts = useMemo(() => {
    let list = [...products]

    if (category !== 'All') {
      list = list.filter((product) => product.category === category)
    }

    if (price !== 'All') {
      const selected = priceFilters.find((entry) => entry.label === price)
      if (selected) {
        list = list.filter((product) => product.price >= selected.min && product.price <= selected.max)
      }
    }

    if (material !== 'All') {
      if (material === 'Gift-ready') {
        list = list.filter((product) => product.giftNote)
      } else if (material === 'Crystal Accent') {
        list = list.filter((product) => product.description.toLowerCase().includes('crystal'))
      } else {
        list = list.filter((product) => product.material === material)
      }
    }

    if (sort === 'price-low') {
      list.sort((a, b) => a.price - b.price)
    }
    if (sort === 'price-high') {
      list.sort((a, b) => b.price - a.price)
    }
    if (sort === 'rating') {
      list.sort((a, b) => b.rating - a.rating)
    }

    return list
  }, [category, price, material, sort])

  return (
    <main ref={containerRef} className="bg-velmora-pearl pt-24 text-velmora-espresso lg:pt-28">
      <section className="border-b border-velmora-espresso/10 bg-velmora-ivory">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <p className="text-xs font-bold uppercase tracking-widerLuxury text-velmora-gold">Velmora Shop</p>
          <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="font-serif text-6xl font-medium leading-none text-velmora-espresso sm:text-7xl">The Demi-Fine Edit</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-velmora-mocha">
                Gold-plated essentials, crystal accents, and gifting pieces made to feel personal at an accessible price.
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm font-semibold text-velmora-mocha">
              <SlidersHorizontal className="h-4 w-4 text-velmora-gold" /> {filteredProducts.length} pieces
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8 lg:py-14">
        <aside className="h-fit border border-velmora-espresso/10 bg-velmora-ivory p-5 text-velmora-espresso lg:sticky lg:top-28">
          <div className="flex items-center justify-between border-b border-velmora-espresso/10 pb-4">
            <h2 className="font-serif text-3xl text-velmora-espresso">Filter</h2>
            <button type="button" className="bg-transparent p-0 text-xs font-bold uppercase tracking-luxury text-velmora-mocha transition hover:text-velmora-espresso" onClick={() => { setCategory('All'); setPrice('All'); setMaterial('All') }}>
              Reset
            </button>
          </div>

          <FilterGroup title="Category" options={['All', ...categoryFilters]} value={category} onChange={setCategory} />
          <FilterGroup title="Price" options={['All', ...priceFilters.map((entry) => entry.label)]} value={price} onChange={setPrice} />
          <FilterGroup title="Material" options={['All', ...materials]} value={material} onChange={setMaterial} />
        </aside>

        <div>
          <div className="mb-7 flex flex-col gap-4 border-b border-velmora-espresso/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-velmora-mocha">
              Showing <span className="font-semibold text-velmora-espresso">{filteredProducts.length}</span> refined pieces
            </p>
            <label className="flex items-center gap-3 text-sm font-semibold text-velmora-espresso">
              Sort
              <select value={sort} onChange={(event) => setSort(event.target.value)} className="border border-velmora-espresso/15 bg-velmora-pearl px-4 py-3 text-sm text-velmora-espresso outline-none focus:border-velmora-gold">
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </label>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} elevated />
              ))}
            </div>
          ) : (
            <div className="bg-velmora-ivory px-6 py-16 text-center text-velmora-espresso">
              <h3 className="font-serif text-4xl text-velmora-espresso">No pieces found</h3>
              <p className="mt-3 text-sm leading-7 text-velmora-mocha">Try adjusting your filters to discover more Velmora jewelry.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <fieldset className="border-b border-velmora-espresso/10 py-5 last:border-b-0">
      <legend className="text-xs font-bold uppercase tracking-luxury text-velmora-espresso">{title}</legend>
      <div className="mt-4 space-y-3">
        {options.map((option) => (
          <label key={option} className="flex cursor-pointer items-center justify-between gap-3 text-sm text-velmora-mocha transition hover:text-velmora-espresso">
            <span>{option}</span>
            <input
              type="radio"
              name={title}
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
              className="h-4 w-4 accent-velmora-gold"
            />
          </label>
        ))}
      </div>
    </fieldset>
  )
}
