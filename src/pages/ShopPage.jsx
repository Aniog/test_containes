import { SlidersHorizontal } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Footer from '@/components/Footer'
import ImageLoader from '@/components/ImageLoader'
import ProductCard from '@/components/ProductCard'
import { products } from '@/data/products'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const priceOptions = ['All', 'Under $50', '$50–$80', '$80+']
const materialOptions = ['All', '18K Gold Plated', 'Hypoallergenic']

export default function ShopPage({ onAddToCart }) {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(categoryOptions.includes(initialCategory) ? initialCategory : 'All')
  const [price, setPrice] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category
      const matchesMaterial = material === 'All' || product.material === material || material === 'Hypoallergenic'
      const matchesPrice =
        price === 'All' ||
        (price === 'Under $50' && product.price < 50) ||
        (price === '$50–$80' && product.price >= 50 && product.price <= 80) ||
        (price === '$80+' && product.price > 80)

      return matchesCategory && matchesMaterial && matchesPrice
    })

    return [...result].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return products.findIndex((product) => product.id === a.id) - products.findIndex((product) => product.id === b.id)
    })
  }, [category, material, price, sort])

  return (
    <ImageLoader className="bg-velmora-cream text-velmora-ink" refreshKey={`${category}-${price}-${material}-${sort}`}>
      <main className="pt-24">
        <section className="border-b border-velmora-mist bg-velmora-parchment px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-bold uppercase tracking-luxury text-velmora-bronze">The collection</p>
            <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end">
              <h1 id="shop-page-title" className="font-serif text-6xl leading-none text-velmora-ink sm:text-7xl">Shop Velmora</h1>
              <p id="shop-page-subtitle" className="max-w-xl text-base leading-8 text-velmora-ink/74">Demi-fine gold jewelry for gifting, self-purchase, and the soft shine of everyday dressing.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[280px_1fr] lg:px-8 lg:py-16">
          <aside className="h-fit border border-velmora-mist bg-velmora-cream p-5 shadow-soft lg:sticky lg:top-28">
            <div className="mb-5 flex items-center gap-2 border-b border-velmora-mist pb-4">
              <SlidersHorizontal className="h-4 w-4 text-velmora-bronze" />
              <h2 className="text-xs font-bold uppercase tracking-luxury text-velmora-ink">Filters</h2>
            </div>
            <FilterGroup label="Category" options={categoryOptions} value={category} onChange={setCategory} />
            <FilterGroup label="Price" options={priceOptions} value={price} onChange={setPrice} />
            <FilterGroup label="Material" options={materialOptions} value={material} onChange={setMaterial} />
          </aside>

          <div>
            <div className="mb-8 flex flex-col gap-4 border-b border-velmora-mist pb-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-velmora-ink/72"><span className="font-semibold text-velmora-ink">{filteredProducts.length}</span> pieces selected</p>
              <label className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-velmora-ink">
                Sort
                <select value={sort} onChange={(event) => setSort(event.target.value)} className="border border-velmora-mist bg-velmora-cream px-4 py-3 text-sm font-medium normal-case tracking-normal text-velmora-ink outline-none focus:border-velmora-champagne">
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </label>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid gap-x-7 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} compact />
                ))}
              </div>
            ) : (
              <div className="border border-velmora-mist bg-velmora-parchment p-10 text-center text-velmora-ink">
                <h3 className="font-serif text-4xl">No pieces found</h3>
                <p className="mt-3 text-sm text-velmora-ink/72">Try softening your filters to reveal more of the collection.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </ImageLoader>
  )
}

function FilterGroup({ label, options, value, onChange }) {
  return (
    <fieldset className="border-b border-velmora-mist py-5 last:border-0">
      <legend className="mb-4 font-serif text-2xl text-velmora-ink">{label}</legend>
      <div className="grid gap-2">
        {options.map((option) => (
          <label key={option} className="flex cursor-pointer items-center justify-between gap-3 text-sm text-velmora-ink/76 transition hover:text-velmora-ink">
            <span>{option}</span>
            <input
              type="radio"
              name={label}
              checked={value === option}
              onChange={() => onChange(option)}
              className="h-4 w-4 accent-velmora-champagne"
            />
          </label>
        ))}
      </div>
    </fieldset>
  )
}
