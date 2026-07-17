import { useMemo, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard.jsx'
import { products } from '@/data/products.js'
import { useStrkImages } from '@/hooks/useStrkImages.js'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const priceOptions = [
  { label: 'All', value: 'all' },
  { label: 'Under $50', value: 'under-50' },
  { label: '$50–$80', value: '50-80' },
  { label: '$80+', value: '80-plus' },
]
const materialOptions = ['All', '18K Gold Plated']

export default function Shop() {
  const [category, setCategory] = useState('All')
  const [price, setPrice] = useState('all')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')
  const [filtersOpen, setFiltersOpen] = useState(false)
  const containerRef = useStrkImages([category, price, material, sort])

  const filteredProducts = useMemo(() => {
    const results = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material
      const priceMatch =
        price === 'all' ||
        (price === 'under-50' && product.price < 50) ||
        (price === '50-80' && product.price >= 50 && product.price <= 80) ||
        (price === '80-plus' && product.price > 80)

      return categoryMatch && materialMatch && priceMatch
    })

    return [...results].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return 0
    })
  }, [category, material, price, sort])

  const FilterGroup = ({ title, children }) => (
    <div className="border-b border-velmora-hairline py-6 first:pt-0">
      <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-velmora-ink">{title}</h3>
      <div className="mt-4 space-y-2">{children}</div>
    </div>
  )

  const FilterButton = ({ active, children, onClick }) => (
    <button
      type="button"
      onClick={onClick}
      className={`block w-full rounded-full px-4 py-2 text-left text-sm transition ${
        active
          ? 'bg-velmora-ink text-velmora-porcelain'
          : 'bg-transparent text-velmora-taupe hover:bg-velmora-blush hover:text-velmora-ink'
      }`}
    >
      {children}
    </button>
  )

  const filters = (
    <aside className="rounded-[1.5rem] border border-velmora-hairline bg-velmora-porcelain p-5 text-velmora-ink shadow-editorial lg:sticky lg:top-28">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-serif text-3xl font-semibold text-velmora-ink">Filters</h2>
        <button
          type="button"
          onClick={() => setFiltersOpen(false)}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-velmora-taupe lg:hidden"
        >
          Close
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
          <FilterButton key={option.value} active={price === option.value} onClick={() => setPrice(option.value)}>
            {option.label}
          </FilterButton>
        ))}
      </FilterGroup>
      <FilterGroup title="Material">
        {materialOptions.map((option) => (
          <FilterButton key={option} active={material === option} onClick={() => setMaterial(option)}>
            {option}
          </FilterButton>
        ))}
      </FilterGroup>
    </aside>
  )

  return (
    <main ref={containerRef} className="bg-velmora-cream pb-20 pt-28 text-velmora-ink sm:pt-32">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-velmora-espresso px-6 py-12 text-velmora-porcelain shadow-lift sm:px-10 lg:px-14 lg:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-velmora-champagne">The collection</p>
          <div className="mt-4 grid gap-5 lg:grid-cols-[1fr_0.75fr] lg:items-end">
            <h1 className="font-serif text-6xl font-semibold leading-none text-velmora-porcelain sm:text-7xl">
              Jewelry for considered everyday glow.
            </h1>
            <p className="text-sm leading-7 text-velmora-cream/78">
              Explore earrings, necklaces, huggies, and giftable sets in warm gold finishes with premium, accessible pricing.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-7 flex flex-col gap-4 border-b border-velmora-hairline pb-5 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={() => setFiltersOpen(true)}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-velmora-hairline bg-velmora-porcelain px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-velmora-ink lg:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filter
          </button>
          <p className="text-sm text-velmora-taupe">
            Showing <span className="font-semibold text-velmora-ink">{filteredProducts.length}</span> pieces
          </p>
          <label className="flex items-center gap-3 text-sm text-velmora-taupe">
            Sort
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              className="rounded-full border border-velmora-hairline bg-velmora-porcelain px-4 py-2 text-sm font-semibold text-velmora-ink focus:border-velmora-champagne focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </label>
        </div>

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <div className="hidden lg:block">{filters}</div>
          {filtersOpen && (
            <div className="fixed inset-0 z-50 bg-velmora-ink/40 p-4 backdrop-blur-sm lg:hidden">
              <div className="mx-auto max-w-sm">{filters}</div>
            </div>
          )}

          <div>
            {filteredProducts.length > 0 ? (
              <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="rounded-[1.5rem] border border-velmora-hairline bg-velmora-porcelain p-10 text-center text-velmora-ink">
                <h2 className="font-serif text-4xl font-semibold">No pieces found</h2>
                <p className="mt-3 text-sm text-velmora-taupe">Try adjusting your filters to discover more Velmora styles.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
