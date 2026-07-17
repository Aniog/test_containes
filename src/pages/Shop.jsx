import { SlidersHorizontal } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/products/ProductCard'
import { products } from '@/data/products'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const materialOptions = ['All', '18K Gold Plated']
const priceOptions = [
  { label: 'All', min: 0, max: Infinity },
  { label: '$30–$50', min: 30, max: 50 },
  { label: '$51–$80', min: 51, max: 80 },
  { label: '$81–$120', min: 81, max: 120 },
]

export default function Shop() {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(categoryOptions.includes(initialCategory) ? initialCategory : 'All')
  const [material, setMaterial] = useState('All')
  const [price, setPrice] = useState('All')
  const [sort, setSort] = useState('featured')

  const filteredProducts = useMemo(() => {
    const priceRange = priceOptions.find((option) => option.label === price) || priceOptions[0]
    const filtered = products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category
      const matchesMaterial = material === 'All' || product.material === material
      const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max
      return matchesCategory && matchesMaterial && matchesPrice
    })

    if (sort === 'price-asc') return [...filtered].sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') return [...filtered].sort((a, b) => b.price - a.price)
    if (sort === 'rating') return [...filtered].sort((a, b) => b.rating - a.rating)
    return filtered
  }, [category, material, price, sort])

  return (
    <main className="bg-velmora-ivory text-velmora-espresso">
      <section className="bg-velmora-espresso px-5 pb-16 pt-32 text-velmora-porcelain sm:px-8 lg:px-10 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-gold">The full edit</p>
          <h1 className="mt-4 font-serif text-5xl text-velmora-porcelain sm:text-7xl">Shop Velmora</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-velmora-sand">
            Refined gold-plated earrings, necklaces, huggies, and gift-ready sets designed for luminous everyday wear.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[280px_1fr] lg:px-10 lg:py-16">
        <aside className="h-fit border border-velmora-sand/70 bg-velmora-porcelain p-5 text-velmora-espresso lg:sticky lg:top-28">
          <div className="flex items-center gap-2 border-b border-velmora-sand/70 pb-4">
            <SlidersHorizontal size={18} className="text-velmora-bronze" />
            <h2 className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso">Filter</h2>
          </div>

          <FilterGroup title="Category" options={categoryOptions} value={category} onChange={setCategory} />
          <FilterGroup title="Price" options={priceOptions.map((option) => option.label)} value={price} onChange={setPrice} />
          <FilterGroup title="Material" options={materialOptions} value={material} onChange={setMaterial} />
        </aside>

        <div>
          <div className="mb-8 flex flex-col gap-4 border-b border-velmora-sand/70 pb-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-velmora-cacao/75">
              Showing <span className="font-semibold text-velmora-espresso">{filteredProducts.length}</span> pieces
            </p>
            <label className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-velmora-bronze">
              Sort
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="rounded-full border border-velmora-sand bg-velmora-porcelain px-4 py-3 text-sm normal-case tracking-normal text-velmora-espresso outline-none focus:border-velmora-gold"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </label>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="border border-velmora-sand/70 bg-velmora-porcelain p-10 text-center text-velmora-espresso">
              <h3 className="font-serif text-3xl">No pieces match this filter</h3>
              <p className="mt-3 text-sm text-velmora-cacao/75">Try a wider price range or another category.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <fieldset className="border-b border-velmora-sand/70 py-5 last:border-b-0">
      <legend className="mb-3 font-serif text-xl text-velmora-espresso">{title}</legend>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option} className="flex cursor-pointer items-center justify-between gap-3 text-sm text-velmora-cacao/85">
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
