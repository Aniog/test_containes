import { useMemo, useRef, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/product/ProductCard'
import { categories, materials, products } from '@/data/products'
import { useStrkImages } from '@/lib/useStrkImages'
import { cn } from '@/lib/utils'

const priceRanges = [
  { label: 'Under $50', min: 0, max: 50 },
  { label: '$50–$80', min: 50, max: 80 },
  { label: '$80–$120', min: 80, max: 120 },
]

export default function Shop({ onAddToCart }) {
  const containerRef = useRef(null)
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(categories.includes(initialCategory) ? initialCategory : 'All')
  const [material, setMaterial] = useState('All')
  const [price, setPrice] = useState('All')
  const [sort, setSort] = useState('featured')
  const [filtersOpen, setFiltersOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    const range = priceRanges.find((item) => item.label === price)
    let result = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material
      const priceMatch = !range || (product.price >= range.min && product.price <= range.max)
      return categoryMatch && materialMatch && priceMatch
    })

    if (sort === 'low-high') result = [...result].sort((a, b) => a.price - b.price)
    if (sort === 'high-low') result = [...result].sort((a, b) => b.price - a.price)
    if (sort === 'rating') result = [...result].sort((a, b) => b.rating - a.rating)
    return result
  }, [category, material, price, sort])

  useStrkImages(containerRef, [category, material, price, sort])

  const FilterGroup = ({ title, items, value, onChange }) => (
    <div className="border-b border-velmora-sand py-6">
      <h3 className="text-xs font-semibold uppercase tracking-luxury text-velmora-taupe">{title}</h3>
      <div className="mt-4 space-y-3">
        {items.map((item) => (
          <button
            key={item}
            type="button"
            className={cn(
              'block w-full text-left text-sm transition hover:text-velmora-gold',
              value === item ? 'font-semibold text-velmora-espresso' : 'text-velmora-ink/75',
            )}
            onClick={() => onChange(item)}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  )

  const filters = (
    <aside className="text-velmora-espresso">
      <div className="border-b border-velmora-sand pb-5">
        <p className="text-xs font-semibold uppercase tracking-luxury text-velmora-gold">Refine</p>
        <h2 className="mt-2 font-serif text-3xl text-velmora-espresso">Shop Jewelry</h2>
      </div>
      <FilterGroup title="Category" items={['All', ...categories]} value={category} onChange={setCategory} />
      <FilterGroup title="Price" items={['All', ...priceRanges.map((range) => range.label)]} value={price} onChange={setPrice} />
      <FilterGroup title="Material" items={['All', ...materials]} value={material} onChange={setMaterial} />
    </aside>
  )

  return (
    <main ref={containerRef} className="min-h-screen bg-velmora-cream pt-24 text-velmora-espresso">
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-8 lg:px-10 lg:pb-24">
        <div className="mb-9 border-b border-velmora-sand pb-8">
          <p className="text-xs font-semibold uppercase tracking-luxury text-velmora-gold">Velmora collection</p>
          <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 id="shop-heading" className="font-serif text-5xl leading-tight text-velmora-espresso sm:text-6xl">Shop Demi-Fine Jewelry</h1>
              <p id="shop-copy" className="mt-4 max-w-2xl text-sm leading-7 text-velmora-ink/75">
                Gold-toned essentials, crystal details, and gift-ready pieces with a refined everyday glow.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button type="button" className="inline-flex items-center gap-2 rounded-full border border-velmora-sand bg-velmora-ivory px-4 py-3 text-xs font-semibold uppercase tracking-editorial text-velmora-espresso lg:hidden" onClick={() => setFiltersOpen(true)}>
                <SlidersHorizontal className="h-4 w-4" /> Filters
              </button>
              <label className="sr-only" htmlFor="sort">Sort products</label>
              <select id="sort" value={sort} onChange={(event) => setSort(event.target.value)} className="rounded-full border border-velmora-sand bg-velmora-ivory px-4 py-3 text-xs font-semibold uppercase tracking-editorial text-velmora-espresso focus:border-velmora-gold focus:outline-none">
                <option value="featured">Featured</option>
                <option value="low-high">Price: Low to High</option>
                <option value="high-low">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
          <div className="hidden lg:block">{filters}</div>
          <div>
            <div className="mb-6 flex items-center justify-between text-sm text-velmora-ink/70">
              <p>{filteredProducts.length} piece{filteredProducts.length === 1 ? '' : 's'}</p>
              <p className="hidden sm:block">Premium demi-fine styles from $30–$120</p>
            </div>
            {filteredProducts.length > 0 ? (
              <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} onAdd={onAddToCart} scope="shop" contextId="shop-heading" />
                ))}
              </div>
            ) : (
              <div className="border border-velmora-sand bg-velmora-ivory p-10 text-center text-velmora-espresso">
                <h2 className="font-serif text-3xl">No pieces match these filters.</h2>
                <p className="mt-3 text-sm text-velmora-ink/70">Try another category, material, or price edit.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {filtersOpen && (
        <div className="fixed inset-0 z-50 bg-velmora-espresso/45 lg:hidden">
          <div className="h-full w-[86%] max-w-sm overflow-y-auto bg-velmora-cream p-6 shadow-soft">
            <div className="mb-5 flex justify-end">
              <button type="button" className="rounded-full border border-velmora-sand px-4 py-2 text-xs font-semibold uppercase tracking-editorial text-velmora-espresso" onClick={() => setFiltersOpen(false)}>Done</button>
            </div>
            {filters}
          </div>
        </div>
      )}
    </main>
  )
}
