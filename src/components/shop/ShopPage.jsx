import { useMemo, useState } from 'react'
import ProductCard from '@/components/product/ProductCard.jsx'
import { products } from '@/data/products.js'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const prices = [
  { label: 'All prices', value: 'all' },
  { label: 'Under $50', value: 'under-50' },
  { label: '$50–$80', value: '50-80' },
  { label: '$80+', value: '80-plus' },
]
const materials = ['All', '18K Gold Plated', 'Gold Filigree']

export default function ShopPage({ onAddToCart }) {
  const [category, setCategory] = useState('All')
  const [price, setPrice] = useState('all')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')

  const visibleProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material
      const priceMatch =
        price === 'all' ||
        (price === 'under-50' && product.price < 50) ||
        (price === '50-80' && product.price >= 50 && product.price <= 80) ||
        (price === '80-plus' && product.price > 80)

      return categoryMatch && materialMatch && priceMatch
    })

    return [...filtered].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return 0
    })
  }, [category, material, price, sort])

  const FilterGroup = ({ title, children }) => (
    <div className="border-b border-velmora-espresso/10 py-6 first:pt-0 last:border-b-0">
      <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-burnished">{title}</h3>
      <div className="mt-4 space-y-2">{children}</div>
    </div>
  )

  const FilterButton = ({ active, children, onClick }) => (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center justify-between rounded-full px-4 py-2 text-sm font-semibold transition ${active ? 'bg-velmora-espresso text-velmora-ivory' : 'bg-transparent text-velmora-taupe hover:bg-velmora-champagne hover:text-velmora-espresso'}`}
    >
      {children}
      {active && <span className="h-1.5 w-1.5 rounded-full bg-velmora-gold" />}
    </button>
  )

  return (
    <main className="bg-velmora-ivory pt-24 text-velmora-ink">
      <section className="border-b border-velmora-espresso/10 bg-velmora-champagne/60 px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-burnished">Shop Velmora</p>
          <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="font-serif text-6xl font-semibold leading-tight text-velmora-espresso sm:text-7xl">Demi-fine essentials</h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-velmora-taupe">
                Refined gold pieces for self-purchase, gifting, and every small moment between.
              </p>
            </div>
            <label className="flex max-w-xs flex-col gap-2 text-xs font-bold uppercase tracking-[0.2em] text-velmora-burnished">
              Sort by
              <select value={sort} onChange={(event) => setSort(event.target.value)} className="rounded-full border border-velmora-espresso/15 bg-velmora-ivory px-5 py-3 text-sm font-semibold normal-case tracking-normal text-velmora-espresso focus:border-velmora-gold focus:outline-none">
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </label>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[280px_1fr] lg:px-8 lg:py-16">
        <aside className="h-fit rounded-[2rem] border border-velmora-espresso/10 bg-white/45 p-5 text-velmora-ink shadow-soft lg:sticky lg:top-28">
          <div className="mb-2 flex items-center justify-between">
            <h2 className="font-serif text-3xl font-semibold text-velmora-espresso">Filters</h2>
            <button
              type="button"
              onClick={() => {
                setCategory('All')
                setPrice('all')
                setMaterial('All')
              }}
              className="text-xs font-bold uppercase tracking-[0.18em] text-velmora-burnished transition hover:text-velmora-espresso"
            >
              Reset
            </button>
          </div>
          <FilterGroup title="Category">
            {categories.map((option) => (
              <FilterButton key={option} active={category === option} onClick={() => setCategory(option)}>{option}</FilterButton>
            ))}
          </FilterGroup>
          <FilterGroup title="Price">
            {prices.map((option) => (
              <FilterButton key={option.value} active={price === option.value} onClick={() => setPrice(option.value)}>{option.label}</FilterButton>
            ))}
          </FilterGroup>
          <FilterGroup title="Material">
            {materials.map((option) => (
              <FilterButton key={option} active={material === option} onClick={() => setMaterial(option)}>{option}</FilterButton>
            ))}
          </FilterGroup>
        </aside>

        <div>
          <div className="mb-6 flex items-center justify-between border-b border-velmora-espresso/10 pb-4 text-sm text-velmora-taupe">
            <p><span className="font-bold text-velmora-espresso">{visibleProducts.length}</span> pieces</p>
            <p className="hidden sm:block">Free worldwide shipping on every order</p>
          </div>
          {visibleProducts.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
              ))}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-velmora-espresso/10 bg-white/45 p-12 text-center text-velmora-ink shadow-soft">
              <h3 className="font-serif text-4xl font-semibold text-velmora-espresso">No pieces found</h3>
              <p className="mt-3 text-velmora-taupe">Try clearing a filter to see the full collection.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
