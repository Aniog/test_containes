import { SlidersHorizontal } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const priceOptions = [
  { label: 'All prices', value: 'all' },
  { label: 'Under $50', value: 'under-50' },
  { label: '$50–$80', value: '50-80' },
  { label: '$80–$120', value: '80-120' },
]
const materialOptions = ['18K Gold Plated', 'Hypoallergenic']

export default function ShopPage() {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(
    categoryOptions.includes(initialCategory) ? initialCategory : 'All',
  )
  const [priceRange, setPriceRange] = useState('all')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')

  const filteredProducts = useMemo(() => {
    const inPriceRange = (price) => {
      if (priceRange === 'under-50') return price < 50
      if (priceRange === '50-80') return price >= 50 && price <= 80
      if (priceRange === '80-120') return price >= 80 && price <= 120
      return true
    }

    const list = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material || material === 'Hypoallergenic'
      return categoryMatch && materialMatch && inPriceRange(product.price)
    })

    return [...list].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return products.indexOf(a) - products.indexOf(b)
    })
  }, [category, material, priceRange, sort])

  return (
    <main className="bg-velmora-cream pt-28 text-velmora-espresso">
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-8 md:px-8 lg:pb-14">
        <div className="grid gap-8 border-b border-velmora-linen pb-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-velmora-antique">
              Shop Velmora
            </p>
            <h1 className="mt-4 font-serif text-6xl font-semibold leading-none md:text-8xl">
              Demi-fine gold, edited with restraint
            </h1>
          </div>
          <p className="max-w-xl text-base leading-8 text-velmora-ink/80 lg:justify-self-end">
            Discover gold-plated earrings, huggies, necklaces, and gift sets designed for everyday radiance and premium accessibility.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-20 md:px-8 lg:grid-cols-[280px_1fr] lg:pb-28">
        <aside className="h-fit border border-velmora-linen bg-velmora-porcelain p-5 text-velmora-espresso shadow-sm lg:sticky lg:top-28">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-sm font-extrabold uppercase tracking-[0.22em]">
              <SlidersHorizontal className="h-4 w-4 text-velmora-champagne" /> Filters
            </h2>
            <button
              type="button"
              className="text-xs font-bold uppercase tracking-[0.18em] text-velmora-antique transition hover:text-velmora-espresso"
              onClick={() => {
                setCategory('All')
                setPriceRange('all')
                setMaterial('All')
              }}
            >
              Reset
            </button>
          </div>

          <FilterGroup title="Category">
            {categoryOptions.map((option) => (
              <FilterButton key={option} active={category === option} onClick={() => setCategory(option)}>
                {option}
              </FilterButton>
            ))}
          </FilterGroup>

          <FilterGroup title="Price">
            {priceOptions.map((option) => (
              <FilterButton key={option.value} active={priceRange === option.value} onClick={() => setPriceRange(option.value)}>
                {option.label}
              </FilterButton>
            ))}
          </FilterGroup>

          <FilterGroup title="Material">
            {['All', ...materialOptions].map((option) => (
              <FilterButton key={option} active={material === option} onClick={() => setMaterial(option)}>
                {option}
              </FilterButton>
            ))}
          </FilterGroup>
        </aside>

        <div>
          <div className="mb-5 flex flex-col gap-4 border border-velmora-linen bg-velmora-porcelain p-4 text-velmora-espresso sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-semibold text-velmora-sage">
              Showing <span className="font-bold text-velmora-espresso">{filteredProducts.length}</span> refined pieces
            </p>
            <label className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.2em] text-velmora-sage">
              Sort
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="rounded-full border border-velmora-linen bg-velmora-cream px-4 py-2 text-sm font-semibold normal-case tracking-normal text-velmora-espresso focus:border-velmora-antique focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </label>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="border border-velmora-linen bg-velmora-porcelain px-6 py-16 text-center text-velmora-espresso">
              <h3 className="font-serif text-4xl font-semibold">No pieces match these filters</h3>
              <p className="mt-3 text-sm leading-6 text-velmora-sage">Try a broader price range or another category.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, children }) {
  return (
    <div className="border-t border-velmora-linen py-5 first:border-t-0 first:pt-0">
      <h3 className="mb-3 text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-antique">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2 lg:flex-col">{children}</div>
    </div>
  )
}

function FilterButton({ active, onClick, children }) {
  return (
    <button
      type="button"
      className={`rounded-full border px-4 py-2 text-left text-sm font-semibold transition ${
        active
          ? 'border-velmora-champagne bg-velmora-champagne text-velmora-espresso'
          : 'border-velmora-linen bg-velmora-porcelain text-velmora-ink hover:border-velmora-champagne hover:text-velmora-antique'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
