import { SlidersHorizontal } from 'lucide-react'
import { useMemo, useState } from 'react'
import ProductCard from '@/components/commerce/ProductCard'
import { products } from '@/data/products'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const priceOptions = [
  { label: 'All', min: 0, max: Infinity },
  { label: '$30–$50', min: 30, max: 50 },
  { label: '$50–$80', min: 50, max: 80 },
  { label: '$80–$120', min: 80, max: 120 },
]
const materialOptions = ['All', '18K Gold Plated', 'Crystal & Gold Plated']

export default function ShopPage({ onAddToCart, onViewProduct }) {
  const [category, setCategory] = useState('All')
  const [priceRange, setPriceRange] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')

  const visibleProducts = useMemo(() => {
    const selectedPrice = priceOptions.find((option) => option.label === priceRange) || priceOptions[0]
    const filtered = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const priceMatch = product.price >= selectedPrice.min && product.price <= selectedPrice.max
      const materialMatch = material === 'All' || product.material === material
      return categoryMatch && priceMatch && materialMatch
    })

    return [...filtered].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return products.findIndex((item) => item.id === a.id) - products.findIndex((item) => item.id === b.id)
    })
  }, [category, material, priceRange, sort])

  return (
    <main className="bg-velmora-ivory pt-24 text-velmora-espresso md:pt-28">
      <section className="border-b border-velmora-taupe/30 px-5 py-12 md:px-10 md:py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-luxury text-velmora-burnished">Velmora Collection</p>
          <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h1 className="font-serif text-5xl md:text-7xl">Shop demi-fine gold</h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-velmora-espresso/72">
                Premium-but-accessible pieces designed for luminous daily wear, gifting, and self-purchase moments.
              </p>
            </div>
            <label className="flex max-w-xs flex-col gap-2 text-xs font-bold uppercase tracking-luxury text-velmora-burnished">
              Sort
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="min-h-12 border border-velmora-taupe/40 bg-velmora-pearl px-4 text-sm font-semibold normal-case tracking-normal text-velmora-espresso outline-none focus:border-velmora-gold"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </label>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[260px_1fr] md:px-10 md:py-14">
        <aside className="h-fit border border-velmora-taupe/30 bg-velmora-pearl p-5 shadow-soft md:sticky md:top-28">
          <div className="mb-5 flex items-center gap-2 border-b border-velmora-taupe/30 pb-4">
            <SlidersHorizontal className="h-4 w-4 text-velmora-gold" />
            <h2 className="text-xs font-bold uppercase tracking-luxury text-velmora-espresso">Filters</h2>
          </div>
          <FilterGroup title="Category" options={categoryOptions} value={category} onChange={setCategory} />
          <FilterGroup title="Price" options={priceOptions.map((option) => option.label)} value={priceRange} onChange={setPriceRange} />
          <FilterGroup title="Material" options={materialOptions} value={material} onChange={setMaterial} />
        </aside>

        <div>
          <div className="mb-5 flex items-center justify-between text-sm text-velmora-espresso/70">
            <p>{visibleProducts.length} pieces</p>
            <p className="hidden md:block">Free worldwide shipping on all jewelry</p>
          </div>
          {visibleProducts.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {visibleProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}
                  onViewProduct={onViewProduct}
                  imageContext="shop"
                />
              ))}
            </div>
          ) : (
            <div className="border border-velmora-taupe/30 bg-velmora-pearl p-10 text-center text-velmora-espresso shadow-soft">
              <p className="font-serif text-3xl">No pieces found</p>
              <p className="mt-2 text-sm text-velmora-espresso/70">Try easing your filters to see more Velmora jewelry.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <div className="border-b border-velmora-taupe/25 py-5 last:border-0">
      <p className="mb-3 text-xs font-bold uppercase tracking-luxury text-velmora-burnished">{title}</p>
      <div className="grid gap-2">
        {options.map((option) => (
          <label key={option} className="flex cursor-pointer items-center gap-3 text-sm text-velmora-espresso/78">
            <input
              type="radio"
              name={title}
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
              className="h-4 w-4 accent-velmora-gold"
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  )
}
