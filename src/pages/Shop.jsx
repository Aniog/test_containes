import { useMemo, useRef, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard'
import { categories, products } from '@/data/products'
import { useImageLoader } from '@/hooks/useImageLoader'

const priceOptions = [
  { label: 'All prices', value: 'all' },
  { label: 'Under $50', value: 'under-50' },
  { label: '$50–$80', value: '50-80' },
  { label: '$80+', value: '80-plus' },
]

const materials = ['All materials', '18K Gold Plated', 'Gold Vermeil']

const Shop = () => {
  const pageRef = useRef(null)
  const params = new URLSearchParams(window.location.search)
  const initialCategory = params.get('category') || 'All'
  const [category, setCategory] = useState(categories.includes(initialCategory) ? initialCategory : 'All')
  const [price, setPrice] = useState('all')
  const [material, setMaterial] = useState('All materials')
  const [sort, setSort] = useState('featured')

  const filteredProducts = useMemo(() => {
    let next = [...products]
    if (category !== 'All') next = next.filter((product) => product.category === category)
    if (material !== 'All materials') next = next.filter((product) => product.material === material)
    if (price === 'under-50') next = next.filter((product) => product.price < 50)
    if (price === '50-80') next = next.filter((product) => product.price >= 50 && product.price <= 80)
    if (price === '80-plus') next = next.filter((product) => product.price > 80)
    if (sort === 'price-low') next.sort((a, b) => a.price - b.price)
    if (sort === 'price-high') next.sort((a, b) => b.price - a.price)
    if (sort === 'rating') next.sort((a, b) => b.rating - a.rating)
    return next
  }, [category, material, price, sort])

  useImageLoader(pageRef, [category, price, material, sort])

  return (
    <main ref={pageRef} className="bg-velmora-ivory pt-28 text-velmora-ink">
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-8 sm:px-8 lg:px-10">
        <div className="border-b border-velmora-espresso/10 pb-8">
          <p className="text-xs font-extrabold uppercase tracking-widerLuxury text-velmora-bronze">Velmora shop</p>
          <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 id="shop-title" className="font-serif text-6xl font-medium leading-none text-velmora-ink sm:text-7xl">Shop demi-fine gold</h1>
              <p id="shop-subtitle" className="mt-5 max-w-2xl text-base leading-8 text-velmora-espresso/75">
                Refined earrings, necklaces, huggies, and gift-ready sets designed for luminous everyday wear.
              </p>
            </div>
            <label className="flex min-w-56 flex-col gap-2 text-xs font-bold uppercase tracking-luxe text-velmora-bronze">
              Sort
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="h-12 border border-velmora-espresso/15 bg-velmora-pearl px-4 text-sm font-semibold normal-case tracking-normal text-velmora-ink focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </label>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-20 sm:px-8 lg:grid-cols-[260px_1fr] lg:px-10 lg:pb-28">
        <aside className="h-fit border border-velmora-espresso/10 bg-velmora-pearl p-5 text-velmora-ink shadow-sm lg:sticky lg:top-28">
          <div className="mb-6 flex items-center gap-2 border-b border-velmora-espresso/10 pb-4">
            <SlidersHorizontal className="h-4 w-4 text-velmora-bronze" />
            <h2 className="text-xs font-extrabold uppercase tracking-widerLuxury text-velmora-ink">Filters</h2>
          </div>
          <div className="space-y-7">
            <fieldset>
              <legend className="mb-3 text-xs font-extrabold uppercase tracking-luxe text-velmora-bronze">Category</legend>
              {['All', ...categories].map((option) => (
                <label key={option} className="mb-3 flex cursor-pointer items-center justify-between text-sm font-semibold text-velmora-espresso/80">
                  <span>{option}</span>
                  <input type="radio" name="category" value={option} checked={category === option} onChange={() => setCategory(option)} className="accent-velmora-bronze" />
                </label>
              ))}
            </fieldset>
            <fieldset>
              <legend className="mb-3 text-xs font-extrabold uppercase tracking-luxe text-velmora-bronze">Price</legend>
              {priceOptions.map((option) => (
                <label key={option.value} className="mb-3 flex cursor-pointer items-center justify-between text-sm font-semibold text-velmora-espresso/80">
                  <span>{option.label}</span>
                  <input type="radio" name="price" value={option.value} checked={price === option.value} onChange={() => setPrice(option.value)} className="accent-velmora-bronze" />
                </label>
              ))}
            </fieldset>
            <label className="flex flex-col gap-3 text-xs font-extrabold uppercase tracking-luxe text-velmora-bronze">
              Material
              <select value={material} onChange={(event) => setMaterial(event.target.value)} className="h-12 border border-velmora-espresso/15 bg-velmora-ivory px-4 text-sm font-semibold normal-case tracking-normal text-velmora-ink focus:outline-none focus:ring-2 focus:ring-velmora-champagne">
                {materials.map((option) => <option key={option}>{option}</option>)}
              </select>
            </label>
          </div>
        </aside>

        <div>
          <div className="mb-5 flex items-center justify-between text-sm text-velmora-espresso/70">
            <p>{filteredProducts.length} pieces</p>
            <p className="hidden sm:block">Free worldwide shipping on every order</p>
          </div>
          {filteredProducts.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => <ProductCard key={product.id} product={product} context="shop" />)}
            </div>
          ) : (
            <div className="border border-velmora-espresso/10 bg-velmora-pearl p-10 text-center text-velmora-ink">
              <p className="font-serif text-3xl">No pieces match these filters.</p>
              <button type="button" onClick={() => { setCategory('All'); setPrice('all'); setMaterial('All materials') }} className="mt-5 border border-velmora-ink px-6 py-3 text-xs font-bold uppercase tracking-luxe text-velmora-ink transition hover:bg-velmora-ink hover:text-velmora-ivory">
                Reset filters
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export default Shop
