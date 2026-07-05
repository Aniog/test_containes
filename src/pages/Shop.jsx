import { useEffect, useMemo, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { SlidersHorizontal } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard'
import { categories, products } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'

const priceFilters = [
  { label: 'Under $50', value: 'under-50' },
  { label: '$50–$80', value: '50-80' },
  { label: '$80+', value: '80-plus' },
]

const materialFilters = ['18K Gold Plated', 'Crystal Detail', 'Textured Gold', 'Gift Boxed']

const Shop = ({ onAdd, onViewProduct, initialCategory }) => {
  const pageRef = useRef(null)
  const [category, setCategory] = useState(initialCategory ?? 'All')
  const [price, setPrice] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')

  useEffect(() => {
    if (initialCategory) setCategory(initialCategory)
  }, [initialCategory])

  const filteredProducts = useMemo(() => {
    let result = [...products]
    if (category !== 'All') result = result.filter((product) => product.category === category)
    if (material !== 'All') result = result.filter((product) => product.material === material)
    if (price === 'under-50') result = result.filter((product) => product.price < 50)
    if (price === '50-80') result = result.filter((product) => product.price >= 50 && product.price <= 80)
    if (price === '80-plus') result = result.filter((product) => product.price > 80)
    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') result.sort((a, b) => b.price - a.price)
    if (sort === 'rating') result.sort((a, b) => b.rating - a.rating)
    return result
  }, [category, material, price, sort])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [category, material, price, sort])

  const filterButtonClass = (active) => `rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] transition ${active ? 'border-velmora-ink bg-velmora-ink text-velmora-ivory' : 'border-velmora-sand bg-velmora-ivory text-velmora-ink hover:border-velmora-gold hover:text-velmora-gold'}`

  return (
    <main ref={pageRef} className="bg-velmora-ivory px-4 pb-20 pt-28 text-velmora-ink sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 border-b border-velmora-sand pb-8">
          <p className="text-xs font-bold uppercase tracking-luxe text-velmora-gold">The collection</p>
          <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="font-serif text-6xl leading-none text-velmora-ink sm:text-7xl">Shop Velmora</h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-velmora-smoke">Premium-but-accessible demi-fine gold jewelry, designed for gifting, self-purchase, and daily wear.</p>
            </div>
            <label className="flex items-center gap-3 text-sm text-velmora-ink">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-velmora-smoke">Sort</span>
              <select value={sort} onChange={(event) => setSort(event.target.value)} className="rounded-full border border-velmora-sand bg-velmora-ivory px-4 py-3 text-sm text-velmora-ink focus:border-velmora-gold focus:outline-none focus:ring-2 focus:ring-velmora-gold/30">
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </label>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
          <aside className="rounded-[1.75rem] border border-velmora-sand bg-velmora-champagne p-5 text-velmora-ink lg:sticky lg:top-28 lg:self-start">
            <div className="mb-6 flex items-center gap-2">
              <SlidersHorizontal className="h-5 w-5 text-velmora-gold" />
              <h2 className="font-serif text-3xl text-velmora-ink">Filter</h2>
            </div>

            <div className="space-y-7">
              <section>
                <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-velmora-smoke">Category</h3>
                <div className="flex flex-wrap gap-2 lg:flex-col lg:items-start">
                  {['All', ...categories, 'Gift Sets'].map((item) => (
                    <button key={item} type="button" onClick={() => setCategory(item)} className={filterButtonClass(category === item)}>{item}</button>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-velmora-smoke">Price</h3>
                <div className="flex flex-wrap gap-2 lg:flex-col lg:items-start">
                  <button type="button" onClick={() => setPrice('All')} className={filterButtonClass(price === 'All')}>All</button>
                  {priceFilters.map((item) => (
                    <button key={item.value} type="button" onClick={() => setPrice(item.value)} className={filterButtonClass(price === item.value)}>{item.label}</button>
                  ))}
                </div>
              </section>

              <section>
                <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-velmora-smoke">Material</h3>
                <div className="flex flex-wrap gap-2 lg:flex-col lg:items-start">
                  {['All', ...materialFilters].map((item) => (
                    <button key={item} type="button" onClick={() => setMaterial(item)} className={filterButtonClass(material === item)}>{item}</button>
                  ))}
                </div>
              </section>
            </div>
          </aside>

          <section>
            <div className="mb-5 flex items-center justify-between border-b border-velmora-sand/70 pb-4 text-sm text-velmora-smoke">
              <span>{filteredProducts.length} pieces</span>
              <button type="button" onClick={() => { setCategory('All'); setPrice('All'); setMaterial('All') }} className="text-xs font-bold uppercase tracking-[0.16em] text-velmora-ink underline-offset-4 transition hover:text-velmora-gold hover:underline">Clear filters</button>
            </div>
            {filteredProducts.length > 0 ? (
              <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} onAdd={onAdd} onView={onViewProduct} />
                ))}
              </div>
            ) : (
              <div className="rounded-[1.75rem] border border-velmora-sand bg-velmora-champagne p-10 text-center text-velmora-ink">
                <p className="font-serif text-4xl">No pieces found</p>
                <p className="mt-2 text-sm text-velmora-smoke">Try a softer filter combination.</p>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  )
}

export default Shop
