import { useMemo, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'
import { useVelmoraImages } from '@/lib/useVelmoraImages'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const priceOptions = [
  { label: 'All', value: 'All' },
  { label: 'Under $50', value: 'under-50' },
  { label: '$50–$80', value: '50-80' },
  { label: '$80+', value: '80-plus' },
]
const materialOptions = ['All', '18K Gold Plated']

export default function Shop({ onAddToCart }) {
  const [category, setCategory] = useState(() => new URLSearchParams(window.location.search).get('category') || 'All')
  const [price, setPrice] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')
  const imageRef = useVelmoraImages([category, price, material, sort])

  const filteredProducts = useMemo(() => {
    const nextProducts = products
      .filter((product) => category === 'All' || product.category === category)
      .filter((product) => material === 'All' || product.material === material)
      .filter((product) => {
        if (price === 'under-50') return product.price < 50
        if (price === '50-80') return product.price >= 50 && product.price <= 80
        if (price === '80-plus') return product.price > 80
        return true
      })

    return [...nextProducts].sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price
      if (sort === 'price-desc') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return products.findIndex((item) => item.id === a.id) - products.findIndex((item) => item.id === b.id)
    })
  }, [category, material, price, sort])

  return (
    <main ref={imageRef} className="bg-velmora-ivory pt-24 text-velmora-ink">
      <section className="border-b border-velmora-mist bg-velmora-parchment">
        <div className="luxury-container py-12 sm:py-16">
          <p className="text-xs font-bold uppercase tracking-luxury text-velmora-antique">The Velmora Shop</p>
          <div className="mt-3 grid gap-5 lg:grid-cols-[1fr_0.45fr] lg:items-end">
            <h1 className="font-serif text-5xl font-semibold leading-tight text-velmora-ink sm:text-7xl">Demi-fine pieces for everyday shine.</h1>
            <p className="text-base leading-8 text-velmora-espresso/76">Explore gold-plated earrings, necklaces, huggies, and gift-ready sets designed for premium moments without traditional markups.</p>
          </div>
        </div>
      </section>

      <section className="luxury-container py-10 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[260px_1fr] lg:gap-10">
          <aside className="border border-velmora-mist bg-velmora-ivory p-5 text-velmora-ink lg:sticky lg:top-28 lg:self-start">
            <div className="mb-5 flex items-center gap-2 border-b border-velmora-mist pb-4">
              <SlidersHorizontal className="h-4 w-4 text-velmora-antique" />
              <h2 className="text-xs font-bold uppercase tracking-luxury text-velmora-ink">Filter</h2>
            </div>
            <FilterGroup label="Category" value={category} onChange={setCategory} options={categoryOptions} />
            <FilterGroup label="Price" value={price} onChange={setPrice} options={priceOptions} />
            <FilterGroup label="Material" value={material} onChange={setMaterial} options={materialOptions} />
          </aside>

          <div>
            <div className="mb-6 flex flex-col gap-4 border-b border-velmora-mist pb-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-semibold text-velmora-espresso/72">{filteredProducts.length} pieces</p>
              <label className="flex items-center gap-3 text-xs font-bold uppercase tracking-luxury text-velmora-espresso/72">
                Sort
                <select aria-label="Sort products" value={sort} onChange={(event) => setSort(event.target.value)} className="premium-focus border border-velmora-mist bg-velmora-ivory px-4 py-3 text-sm normal-case tracking-normal text-velmora-ink">
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </label>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                ))}
              </div>
            ) : (
              <div className="border border-velmora-mist bg-velmora-parchment p-10 text-center text-velmora-ink">
                <h3 className="font-serif text-3xl font-semibold">No pieces match these filters.</h3>
                <p className="mt-3 text-sm text-velmora-espresso/72">Reset a filter to reveal more Velmora favorites.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ label, options, value, onChange }) {
  const normalizedOptions = options.map((option) => (typeof option === 'string' ? { label: option, value: option } : option))

  return (
    <fieldset className="border-b border-velmora-mist py-5 last:border-b-0 last:pb-0">
      <legend className="mb-3 text-xs font-bold uppercase tracking-luxury text-velmora-antique">{label}</legend>
      <div className="grid gap-2">
        {normalizedOptions.map((option) => (
          <label key={option.value} className="flex cursor-pointer items-center justify-between gap-3 text-sm text-velmora-espresso/78">
            <span>{option.label}</span>
            <input
              type="radio"
              name={label}
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="h-4 w-4 accent-velmora-antique"
            />
          </label>
        ))}
      </div>
    </fieldset>
  )
}
