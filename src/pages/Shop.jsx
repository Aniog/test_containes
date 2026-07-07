import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/products/ProductCard'
import { products } from '@/data/products'
import { useImageLoader } from '@/hooks/useImageLoader'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const priceOptions = [
  { label: 'All', value: 'all' },
  { label: 'Under $50', value: 'under-50' },
  { label: '$50–$80', value: '50-80' },
  { label: '$80+', value: '80-plus' },
]
const materialOptions = ['All', '18K Gold Plated']

const matchesPrice = (price, range) => {
  if (range === 'under-50') return price < 50
  if (range === '50-80') return price >= 50 && price <= 80
  if (range === '80-plus') return price > 80
  return true
}

export default function Shop({ onAddToCart }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const category = searchParams.get('category') || 'All'
  const price = searchParams.get('price') || 'all'
  const material = searchParams.get('material') || 'All'
  const sort = searchParams.get('sort') || 'featured'
  const containerRef = useImageLoader([category, price, material, sort])

  const updateParam = (key, value) => {
    const next = new URLSearchParams(searchParams)
    if (value === 'All' || value === 'all' || value === 'featured') next.delete(key)
    else next.set(key, value)
    setSearchParams(next)
  }

  const visibleProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material
      return categoryMatch && materialMatch && matchesPrice(product.price, price)
    })

    return [...filtered].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return products.findIndex((p) => p.id === a.id) - products.findIndex((p) => p.id === b.id)
    })
  }, [category, material, price, sort])

  return (
    <main ref={containerRef} className="bg-velmora-ivory pt-28 text-velmora-ink">
      <section className="border-b border-velmora-mist px-4 pb-10 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-velmora-champagne">Shop Velmora</p>
          <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="font-serif text-5xl leading-tight tracking-[-0.02em] text-velmora-ink sm:text-6xl">Demi-fine essentials</h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-velmora-sable">Explore gold-plated earrings, necklaces, huggies, and gift-ready sets crafted for a warm everyday glow.</p>
            </div>
            <label className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-sable">
              Sort
              <select value={sort} onChange={(event) => updateParam('sort', event.target.value)} className="rounded-full border border-velmora-mist bg-white px-5 py-3 text-sm normal-case tracking-normal text-velmora-ink outline-none focus:border-velmora-champagne">
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </label>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[260px_1fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="border border-velmora-mist bg-white/55 p-6 text-velmora-ink shadow-[0_18px_45px_rgba(33,24,22,0.04)]">
              <h2 className="font-serif text-3xl text-velmora-ink">Filters</h2>
              <FilterGroup title="Category" options={categoryOptions} value={category} onChange={(value) => updateParam('category', value)} />
              <FilterGroup title="Price" options={priceOptions} value={price} onChange={(value) => updateParam('price', value)} />
              <FilterGroup title="Material" options={materialOptions} value={material} onChange={(value) => updateParam('material', value)} />
            </div>
          </aside>

          <div>
            <div className="mb-7 flex items-center justify-between border-b border-velmora-mist pb-4">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-sable">{visibleProducts.length} pieces</p>
              <p className="text-xs text-velmora-sable">Premium shine from $30–$120</p>
            </div>
            <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
              {visibleProducts.map((product) => <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />)}
            </div>
            {visibleProducts.length === 0 && (
              <div className="border border-velmora-mist bg-white/60 p-10 text-center text-velmora-ink">
                <p className="font-serif text-3xl">No pieces match those filters.</p>
                <button onClick={() => setSearchParams({})} className="mt-5 rounded-full bg-velmora-champagne px-7 py-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-ink">Reset Filters</button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <div className="mt-7 border-t border-velmora-mist pt-6">
      <h3 className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-ink">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2 lg:grid">
        {options.map((option) => {
          const optionValue = typeof option === 'string' ? option : option.value
          const label = typeof option === 'string' ? option : option.label
          const active = value === optionValue
          return (
            <button key={optionValue} onClick={() => onChange(optionValue)} className={`rounded-full border px-4 py-2 text-left text-xs font-bold uppercase tracking-[0.18em] transition ${active ? 'border-velmora-champagne bg-velmora-champagne text-velmora-ink' : 'border-velmora-mist bg-transparent text-velmora-sable hover:border-velmora-champagne hover:text-velmora-ink'}`}>
              {label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
