import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { SlidersHorizontal } from 'lucide-react'
import strkImgConfig from '../strk-img-config.json'
import { products } from '../data/products'
import ProductCard from '../components/products/ProductCard'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const priceOptions = [
  { label: 'All', value: 'All' },
  { label: 'Under $50', value: 'under-50' },
  { label: '$50–$80', value: '50-80' },
  { label: '$80+', value: '80-plus' },
]
const materialOptions = ['All', '18K Gold Plated']

export default function Shop({ onAdd, onOpenProduct }) {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = React.useState(initialCategory)
  const [price, setPrice] = React.useState('All')
  const [material, setMaterial] = React.useState('All')
  const [sort, setSort] = React.useState('featured')
  const [filtersOpen, setFiltersOpen] = React.useState(false)
  const containerRef = React.useRef(null)

  React.useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [category, price, material, sort])

  const filteredProducts = React.useMemo(() => {
    let result = products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category
      const matchesMaterial = material === 'All' || product.material === material
      const matchesPrice =
        price === 'All' ||
        (price === 'under-50' && product.price < 50) ||
        (price === '50-80' && product.price >= 50 && product.price <= 80) ||
        (price === '80-plus' && product.price > 80)
      return matchesCategory && matchesMaterial && matchesPrice
    })

    if (sort === 'price-low') result = [...result].sort((a, b) => a.price - b.price)
    if (sort === 'price-high') result = [...result].sort((a, b) => b.price - a.price)
    if (sort === 'rating') result = [...result].sort((a, b) => b.rating - a.rating)
    return result
  }, [category, price, material, sort])

  const FilterGroup = ({ title, children }) => (
    <div className="border-b border-velmora-ink/10 py-6 first:pt-0">
      <h3 className="mb-4 text-xs font-extrabold uppercase tracking-velmora text-velmora-ink">{title}</h3>
      <div className="grid gap-2">{children}</div>
    </div>
  )

  const FilterButton = ({ active, children, onClick }) => (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center justify-between rounded-full px-4 py-2 text-left text-sm transition ${
        active
          ? 'bg-velmora-ink font-bold text-velmora-ivory'
          : 'bg-velmora-parchment text-velmora-umber hover:bg-velmora-champagne hover:text-velmora-ink'
      }`}
    >
      {children}
    </button>
  )

  const filters = (
    <>
      <FilterGroup title="Category">
        {categoryOptions.map((item) => (
          <FilterButton key={item} active={category === item} onClick={() => setCategory(item)}>
            {item}
          </FilterButton>
        ))}
      </FilterGroup>
      <FilterGroup title="Price">
        {priceOptions.map((item) => (
          <FilterButton key={item.value} active={price === item.value} onClick={() => setPrice(item.value)}>
            {item.label}
          </FilterButton>
        ))}
      </FilterGroup>
      <FilterGroup title="Material">
        {materialOptions.map((item) => (
          <FilterButton key={item} active={material === item} onClick={() => setMaterial(item)}>
            {item}
          </FilterButton>
        ))}
      </FilterGroup>
    </>
  )

  return (
    <main ref={containerRef} className="bg-velmora-ivory pt-24 text-velmora-ink lg:pt-28">
      <section className="border-b border-velmora-ink/10 bg-velmora-parchment px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-velmora-wide text-velmora-gold">Shop Velmora</p>
          <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="font-serif text-6xl font-semibold leading-none text-velmora-ink sm:text-7xl">
                Demi-fine essentials
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-velmora-umber">
                Browse gold-plated earrings, necklaces, huggies, and gift-ready sets made for everyday luminosity.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => setFiltersOpen((open) => !open)}
                className="inline-flex items-center justify-center gap-2 border border-velmora-ink/15 bg-velmora-ivory px-4 py-3 text-sm font-bold uppercase tracking-velmora text-velmora-ink lg:hidden"
              >
                <SlidersHorizontal className="h-4 w-4" /> Filters
              </button>
              <label className="sr-only" htmlFor="sort-products">Sort products</label>
              <select
                id="sort-products"
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="border border-velmora-ink/15 bg-velmora-ivory px-4 py-3 text-sm font-bold text-velmora-ink focus:outline-none focus:ring-2 focus:ring-velmora-gold"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[17rem_1fr] lg:px-8 lg:py-16">
        <aside className="hidden lg:block">
          <div className="sticky top-28 border border-velmora-ink/10 bg-velmora-ivory p-6 shadow-velmora-card">
            {filters}
          </div>
        </aside>

        {filtersOpen && (
          <aside className="border border-velmora-ink/10 bg-velmora-ivory p-5 shadow-velmora-card lg:hidden">
            {filters}
          </aside>
        )}

        <div>
          <div className="mb-6 flex items-center justify-between border-b border-velmora-ink/10 pb-4">
            <p className="text-sm font-semibold text-velmora-umber">
              {filteredProducts.length} pieces
            </p>
            <p className="text-xs font-bold uppercase tracking-velmora text-velmora-gold">
              Free shipping on all orders
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid gap-x-7 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAdd={onAdd} onOpen={onOpenProduct} />
              ))}
            </div>
          ) : (
            <div className="border border-velmora-ink/10 bg-velmora-parchment p-10 text-center">
              <h2 className="font-serif text-4xl font-semibold text-velmora-ink">No pieces found</h2>
              <p className="mt-3 text-sm leading-7 text-velmora-umber">
                Try clearing one filter to reveal more of the collection.
              </p>
              <button
                type="button"
                onClick={() => {
                  setCategory('All')
                  setPrice('All')
                  setMaterial('All')
                }}
                className="mt-6 bg-velmora-ink px-5 py-3 text-sm font-bold uppercase tracking-velmora text-velmora-ivory"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
