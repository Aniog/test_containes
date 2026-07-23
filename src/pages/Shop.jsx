import { SlidersHorizontal } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import SectionHeading from '@/components/common/SectionHeading'
import ProductCard from '@/components/products/ProductCard'
import { products } from '@/data/products'
import { useStrkImages } from '@/hooks/useStrkImages'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const priceOptions = [
  { label: 'All', min: 0, max: 999 },
  { label: '$30–$50', min: 30, max: 50 },
  { label: '$51–$80', min: 51, max: 80 },
  { label: '$81–$120', min: 81, max: 120 },
]
const materialOptions = ['All', '18K Gold Plated', 'Textured Gold Plated']

export default function Shop({ onAddToCart }) {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(categoryOptions.includes(initialCategory) ? initialCategory : 'All')
  const [priceLabel, setPriceLabel] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')

  const filteredProducts = useMemo(() => {
    const selectedPrice = priceOptions.find((option) => option.label === priceLabel) ?? priceOptions[0]
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
      return products.indexOf(a) - products.indexOf(b)
    })
  }, [category, material, priceLabel, sort])

  const containerRef = useStrkImages([category, material, priceLabel, sort])

  return (
    <main ref={containerRef} className="bg-velmora-porcelain pt-28 text-velmora-ink">
      <section className="border-b border-velmora-line pb-10 pt-8">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Collection"
            title="Shop Velmora"
            copy="Filter the full demi-fine edit by silhouette, warm material finish, and premium-accessible price."
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[280px_1fr] lg:py-14">
        <aside className="h-fit rounded-3xl border border-velmora-line bg-velmora-ivory p-5 shadow-sm lg:sticky lg:top-28">
          <div className="mb-6 flex items-center gap-3 border-b border-velmora-line pb-5">
            <SlidersHorizontal className="h-4 w-4 text-velmora-gold" />
            <h2 className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-ink">Filters</h2>
          </div>
          <FilterGroup title="Category" options={categoryOptions} value={category} onChange={setCategory} />
          <FilterGroup title="Price" options={priceOptions.map((option) => option.label)} value={priceLabel} onChange={setPriceLabel} />
          <FilterGroup title="Material" options={materialOptions} value={material} onChange={setMaterial} />
        </aside>

        <div>
          <div className="mb-7 flex flex-col gap-4 border-b border-velmora-line pb-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-velmora-taupe">
              Showing <span className="font-semibold text-velmora-ink">{filteredProducts.length}</span> pieces
            </p>
            <label className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-velmora-ink">
              Sort
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="rounded-full border border-velmora-line bg-velmora-ivory px-4 py-3 text-sm normal-case tracking-normal text-velmora-ink focus:border-velmora-gold focus:outline-none focus:ring-2 focus:ring-velmora-gold/20"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to high</option>
                <option value="price-high">Price: High to low</option>
                <option value="rating">Highest rated</option>
              </select>
            </label>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} compact />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-velmora-line bg-velmora-ivory p-10 text-center text-velmora-ink">
              <h3 className="font-serif text-4xl">No pieces match those filters.</h3>
              <p className="mt-3 text-sm text-velmora-taupe">Try broadening the category, price, or material.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <div className="border-b border-velmora-line py-5 last:border-b-0">
      <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-velmora-taupe">{title}</h3>
      <div className="flex flex-wrap gap-2 lg:flex-col">
        {options.map((option) => (
          <button
            type="button"
            key={option}
            onClick={() => onChange(option)}
            className={`rounded-full border px-4 py-2 text-left text-sm transition ${
              value === option
                ? 'border-velmora-gold bg-velmora-gold text-velmora-ink'
                : 'border-velmora-line bg-velmora-porcelain text-velmora-taupe hover:border-velmora-gold hover:text-velmora-ink'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}
