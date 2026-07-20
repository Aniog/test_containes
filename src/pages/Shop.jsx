import { useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { SlidersHorizontal } from 'lucide-react'
import { categories, products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard.jsx?velmora=2'
import { useStockImages } from '@/lib/useStockImages'

const priceRanges = [
  { label: 'Under $50', min: 0, max: 49 },
  { label: '$50–$80', min: 50, max: 80 },
  { label: '$80+', min: 81, max: 200 },
]

export default function Shop() {
  const { search } = useLocation()
  const initialCategory = useMemo(() => {
    const requestedCategory = new URLSearchParams(search).get('category')
    return categories.includes(requestedCategory) ? requestedCategory : 'All'
  }, [search])
  const [category, setCategory] = useState(initialCategory)
  const [price, setPrice] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('Featured')
  const [filtersOpen, setFiltersOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    const range = priceRanges.find((item) => item.label === price)
    const list = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const priceMatch = !range || (product.price >= range.min && product.price <= range.max)
      const materialMatch = material === 'All' || product.material === material
      return categoryMatch && priceMatch && materialMatch
    })

    return [...list].sort((a, b) => {
      if (sort === 'Price: Low to High') return a.price - b.price
      if (sort === 'Price: High to Low') return b.price - a.price
      if (sort === 'Top Rated') return b.rating - a.rating
      return 0
    })
  }, [category, price, material, sort])

  const containerRef = useStockImages([category, price, material, sort])

  const FilterContent = () => (
    <div className="space-y-8 text-velmora-ink">
      <FilterGroup title="Category" options={['All', ...categories, 'Gift Sets']} value={category} setValue={setCategory} />
      <FilterGroup title="Price" options={['All', ...priceRanges.map((item) => item.label)]} value={price} setValue={setPrice} />
      <FilterGroup title="Material" options={['All', '18K Gold Plated']} value={material} setValue={setMaterial} />
    </div>
  )

  return (
    <main ref={containerRef} className="bg-velmora-ivory pt-28 text-velmora-ink md:pt-32">
      <section className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="border-b border-velmora-sand pb-10">
          <p className="mb-5 text-xs font-semibold uppercase tracking-luxury text-velmora-gold">The collection</p>
          <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <h1 className="font-serif text-6xl leading-none text-velmora-ink md:text-8xl">Shop Velmora</h1>
            <p className="max-w-xl text-base leading-8 text-velmora-taupe lg:justify-self-end">
              Thoughtfully priced demi-fine gold jewelry for self-purchase, gifting, and the everyday moments worth keeping.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:px-8 lg:grid-cols-[260px_1fr] lg:py-14">
        <aside className="hidden lg:block">
          <div className="sticky top-28 border border-velmora-sand bg-velmora-porcelain p-6 shadow-soft">
            <div className="mb-7 flex items-center gap-3 border-b border-velmora-sand pb-5">
              <SlidersHorizontal className="h-4 w-4 text-velmora-gold" />
              <h2 className="text-xs font-bold uppercase tracking-luxury text-velmora-ink">Filters</h2>
            </div>
            <FilterContent />
          </div>
        </aside>

        <div>
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="button"
              onClick={() => setFiltersOpen((open) => !open)}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-velmora-sand bg-velmora-porcelain px-5 py-3 text-xs font-bold uppercase tracking-luxury text-velmora-ink lg:hidden"
            >
              <SlidersHorizontal className="h-4 w-4" /> Filters
            </button>
            <p className="text-sm text-velmora-taupe">{filteredProducts.length} pieces</p>
            <label className="flex items-center gap-3 text-xs font-bold uppercase tracking-luxury text-velmora-ink">
              Sort
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="border border-velmora-sand bg-velmora-porcelain px-4 py-3 text-sm font-medium normal-case tracking-normal text-velmora-ink focus:border-velmora-gold focus:outline-none focus:ring-2 focus:ring-velmora-gold/30"
              >
                {['Featured', 'Top Rated', 'Price: Low to High', 'Price: High to Low'].map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
          </div>

          {filtersOpen && (
            <div className="mb-6 border border-velmora-sand bg-velmora-porcelain p-6 shadow-soft lg:hidden">
              <FilterContent />
            </div>
          )}

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => <ProductCard key={product.id} product={product} contextId="shop" />)}
          </div>
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, setValue }) {
  return (
    <fieldset>
      <legend className="mb-4 text-xs font-bold uppercase tracking-luxury text-velmora-ink">{title}</legend>
      <div className="space-y-3">
        {options.map((option) => (
          <label key={option} className="flex cursor-pointer items-center gap-3 text-sm text-velmora-taupe transition hover:text-velmora-ink">
            <input
              type="radio"
              name={title}
              value={option}
              checked={value === option}
              onChange={() => setValue(option)}
              className="h-4 w-4 accent-velmora-gold"
            />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  )
}
