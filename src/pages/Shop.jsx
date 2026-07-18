import { SlidersHorizontal } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ProductTile from '@/components/shop/ProductTile'
import { products } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const prices = [
  { label: 'All', value: 'all' },
  { label: 'Under $50', value: 'under-50' },
  { label: '$50–$80', value: '50-80' },
  { label: '$80+', value: '80-plus' },
]
const materials = ['All', '18K Gold Plated', 'Crystal + Gold Plated', 'Textured Gold Plated']

const Shop = ({ onAddToCart }) => {
  const pageRef = useRef(null)
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const initialCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(categories.includes(initialCategory) ? initialCategory : 'All')
  const [price, setPrice] = useState('all')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')

  useEffect(() => {
    const nextCategory = searchParams.get('category') || 'All'
    setCategory(categories.includes(nextCategory) ? nextCategory : 'All')
  }, [location.search])

  const filteredProducts = useMemo(() => {
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

    if (sort === 'price-low') return [...filtered].sort((a, b) => a.price - b.price)
    if (sort === 'price-high') return [...filtered].sort((a, b) => b.price - a.price)
    if (sort === 'rating') return [...filtered].sort((a, b) => b.rating - a.rating)
    return filtered
  }, [category, material, price, sort])

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [category, material, price, sort])

  return (
    <main ref={pageRef} className="bg-velmora-cream pt-24 text-velmora-ink">
      <section className="border-b border-velmora-ink/10 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-velmora-bronze">Shop Velmora</p>
          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 id="shop-title" className="font-serif text-6xl font-medium leading-none text-velmora-ink md:text-7xl">The demi-fine edit</h1>
              <p id="shop-subtitle" className="mt-5 max-w-2xl text-base leading-8 text-velmora-espresso/75">
                Discover gold-plated earrings, necklaces, huggies, and gift-ready sets made to become part of your daily uniform.
              </p>
            </div>
            <label className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-velmora-bronze">
              Sort
              <select value={sort} onChange={(event) => setSort(event.target.value)} className="border border-velmora-ink/15 bg-velmora-cream px-4 py-3 text-sm normal-case tracking-normal text-velmora-ink outline-none focus:border-velmora-bronze">
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </label>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8 lg:py-16">
        <aside className="h-fit border border-velmora-ink/10 bg-velmora-parchment p-5 text-velmora-ink lg:sticky lg:top-28">
          <div className="mb-5 flex items-center gap-2 border-b border-velmora-ink/10 pb-4">
            <SlidersHorizontal className="h-4 w-4 text-velmora-bronze" />
            <h2 className="text-xs font-bold uppercase tracking-[0.25em] text-velmora-ink">Filters</h2>
          </div>

          <FilterGroup title="Category" options={categories} value={category} onChange={setCategory} />
          <FilterGroup title="Price" options={prices} value={price} onChange={setPrice} useValue />
          <FilterGroup title="Material" options={materials} value={material} onChange={setMaterial} />
        </aside>

        <div>
          <div className="mb-7 flex items-center justify-between border-b border-velmora-ink/10 pb-4 text-sm text-velmora-espresso/75">
            <p>{filteredProducts.length} pieces</p>
            <p className="hidden sm:block">Premium details, direct-to-consumer pricing.</p>
          </div>
          <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductTile key={product.id} product={product} onAdd={onAddToCart} />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <div className="border border-velmora-ink/10 bg-velmora-parchment p-10 text-center text-velmora-ink">
              <h3 className="font-serif text-3xl font-semibold">No pieces found.</h3>
              <p className="mt-3 text-sm text-velmora-espresso/75">Try a different filter combination to continue browsing.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

const FilterGroup = ({ title, options, value, onChange, useValue = false }) => (
  <fieldset className="border-b border-velmora-ink/10 py-5 last:border-b-0">
    <legend className="mb-3 font-serif text-2xl font-semibold text-velmora-ink">{title}</legend>
    <div className="space-y-2">
      {options.map((option) => {
        const label = typeof option === 'string' ? option : option.label
        const optionValue = useValue ? option.value : label
        return (
          <label key={optionValue} className="flex cursor-pointer items-center gap-3 text-sm text-velmora-espresso/80">
            <input
              type="radio"
              name={title}
              checked={value === optionValue}
              onChange={() => onChange(optionValue)}
              className="h-4 w-4 accent-velmora-bronze"
            />
            {label}
          </label>
        )
      })}
    </div>
  </fieldset>
)

export default Shop
