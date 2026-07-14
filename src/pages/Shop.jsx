import { SlidersHorizontal } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/common/ProductCard.jsx'
import { categories, products } from '@/data/products.js'
import { useImageLoader } from '@/hooks/useImageLoader.js'

const priceRanges = [
  { label: 'All', value: 'all' },
  { label: 'Under $50', value: 'under-50' },
  { label: '$50–$80', value: '50-80' },
  { label: '$80+', value: '80-plus' },
]

const materials = ['18K Gold Plated', 'Crystal Accent', 'Giftable']

export default function Shop() {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(initialCategory)
  const [price, setPrice] = useState('all')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')
  const containerRef = useImageLoader([category, price, material, sort])

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category
      const matchesPrice =
        price === 'all' ||
        (price === 'under-50' && product.price < 50) ||
        (price === '50-80' && product.price >= 50 && product.price <= 80) ||
        (price === '80-plus' && product.price > 80)
      const matchesMaterial =
        material === 'All' ||
        product.material === material ||
        (material === 'Crystal Accent' && /crystal/i.test(product.description)) ||
        (material === 'Giftable' && /gift/i.test(product.description))

      return matchesCategory && matchesPrice && matchesMaterial
    })

    return [...filtered].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return products.indexOf(a) - products.indexOf(b)
    })
  }, [category, price, material, sort])

  return (
    <main ref={containerRef} className="bg-velmora-cream px-4 pb-20 pt-28 text-velmora-ink sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="border-b border-velmora-champagne/30 pb-10 pt-8">
          <p className="text-xs font-bold uppercase tracking-luxury text-velmora-antique">Shop Velmora</p>
          <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="font-serif text-6xl font-semibold leading-none sm:text-7xl">The Collection</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-velmora-stone">
                Editorial demi-fine jewelry in warm gold finishes, sculptural huggies, and luminous crystal accents.
              </p>
            </div>
            <label className="flex max-w-xs items-center gap-3 text-xs font-bold uppercase tracking-luxury text-velmora-stone">
              Sort
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="border border-velmora-champagne/40 bg-velmora-cream px-4 py-3 text-sm font-semibold normal-case tracking-normal text-velmora-ink focus:border-velmora-antique focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: low to high</option>
                <option value="price-high">Price: high to low</option>
                <option value="rating">Top rated</option>
              </select>
            </label>
          </div>
        </div>

        <div className="grid gap-10 py-10 lg:grid-cols-[260px_1fr]">
          <aside className="h-fit border border-velmora-champagne/30 bg-velmora-parchment p-5 text-velmora-ink lg:sticky lg:top-28">
            <div className="mb-5 flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4 text-velmora-antique" />
              <h2 className="text-xs font-bold uppercase tracking-luxury">Filter</h2>
            </div>

            <FilterGroup title="Category">
              {['All', ...categories].map((option) => (
                <FilterButton key={option} active={category === option} onClick={() => setCategory(option)}>
                  {option}
                </FilterButton>
              ))}
            </FilterGroup>

            <FilterGroup title="Price">
              {priceRanges.map((range) => (
                <FilterButton key={range.value} active={price === range.value} onClick={() => setPrice(range.value)}>
                  {range.label}
                </FilterButton>
              ))}
            </FilterGroup>

            <FilterGroup title="Material">
              {['All', ...materials].map((option) => (
                <FilterButton key={option} active={material === option} onClick={() => setMaterial(option)}>
                  {option}
                </FilterButton>
              ))}
            </FilterGroup>
          </aside>

          <div>
            <p className="mb-6 text-sm text-velmora-stone">
              Showing <span className="font-semibold text-velmora-ink">{filteredProducts.length}</span> piece{filteredProducts.length === 1 ? '' : 's'}
            </p>
            {filteredProducts.length > 0 ? (
              <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} priority="-shop" />
                ))}
              </div>
            ) : (
              <div className="border border-velmora-champagne/30 bg-velmora-parchment p-10 text-center text-velmora-ink">
                <h3 className="font-serif text-3xl font-semibold">No pieces match those filters.</h3>
                <p className="mt-2 text-sm text-velmora-stone">Try widening your category, price, or material selection.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, children }) {
  return (
    <div className="border-t border-velmora-champagne/30 py-5 first:border-t-0 first:pt-0">
      <h3 className="mb-3 text-[0.68rem] font-bold uppercase tracking-luxury text-velmora-stone">{title}</h3>
      <div className="flex flex-wrap gap-2 lg:flex-col">{children}</div>
    </div>
  )
}

function FilterButton({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`border px-3 py-2 text-left text-xs font-semibold uppercase tracking-luxury transition-colors ${
        active
          ? 'border-velmora-ink bg-velmora-ink text-velmora-cream'
          : 'border-velmora-champagne/30 bg-velmora-cream text-velmora-ink hover:border-velmora-antique'
      }`}
    >
      {children}
    </button>
  )
}
