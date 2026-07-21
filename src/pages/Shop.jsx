import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import { categories, products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import strkImgConfig from '@/strk-img-config.json'

const priceRanges = [
  { label: 'All prices', value: 'all' },
  { label: 'Under $50', value: 'under-50' },
  { label: '$50–$80', value: '50-80' },
  { label: '$80+', value: '80-plus' },
]

const materials = ['18K Gold Plated', 'Gold Vermeil']

export default function Shop() {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(categories.includes(initialCategory) ? initialCategory : 'All')
  const [price, setPrice] = useState('all')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')
  const pageRef = useRef(null)

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [category, price, material, sort])

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

    return [...filtered].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      return products.findIndex((product) => product.id === a.id) - products.findIndex((product) => product.id === b.id)
    })
  }, [category, material, price, sort])

  const filterButton = (label, active, onClick) => (
    <button
      key={label}
      type="button"
      className={`rounded-full border px-4 py-2 text-left font-sansBody text-xs font-bold uppercase tracking-nav transition ${active ? 'border-velmora-gold bg-velmora-gold text-velmora-obsidian' : 'border-velmora-espresso/10 bg-velmora-silk text-velmora-muted hover:border-velmora-gold hover:text-velmora-obsidian'}`}
      onClick={onClick}
    >
      {label}
    </button>
  )

  return (
    <main ref={pageRef} className="bg-velmora-cream px-5 pb-16 pt-28 text-velmora-obsidian md:px-10 md:pb-24 md:pt-32">
      <div className="mx-auto max-w-7xl">
        <header className="border-b border-velmora-espresso/10 pb-10">
          <p className="font-sansBody text-xs font-bold uppercase tracking-nav text-velmora-gold">The collection</p>
          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="font-serifDisplay text-6xl leading-none md:text-8xl">Shop Velmora</h1>
              <p className="mt-5 max-w-2xl font-sansBody text-base leading-8 text-velmora-muted">
                Demi-fine earrings, huggies, necklaces, and giftable sets in warm, luminous finishes.
              </p>
            </div>
            <label className="flex items-center gap-3 font-sansBody text-xs font-bold uppercase tracking-nav text-velmora-muted">
              Sort
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="rounded-full border border-velmora-espresso/10 bg-velmora-silk px-4 py-3 font-sansBody text-sm normal-case tracking-normal text-velmora-obsidian focus:border-velmora-gold focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </label>
          </div>
        </header>

        <div className="grid gap-10 py-10 lg:grid-cols-[260px_1fr]">
          <aside className="rounded-[1.75rem] border border-velmora-espresso/10 bg-velmora-silk p-5 text-velmora-obsidian shadow-editorial lg:sticky lg:top-28 lg:self-start">
            <div className="mb-6 flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4 text-velmora-gold" strokeWidth={1.5} />
              <h2 className="font-sansBody text-xs font-extrabold uppercase tracking-nav">Filter</h2>
            </div>

            <div className="space-y-7">
              <div>
                <p className="mb-3 font-sansBody text-xs font-bold uppercase tracking-nav text-velmora-muted">Category</p>
                <div className="flex flex-wrap gap-2 lg:flex-col">
                  {['All', ...categories].map((item) => filterButton(item, category === item, () => setCategory(item)))}
                </div>
              </div>
              <div>
                <p className="mb-3 font-sansBody text-xs font-bold uppercase tracking-nav text-velmora-muted">Price</p>
                <div className="flex flex-wrap gap-2 lg:flex-col">
                  {priceRanges.map((range) => filterButton(range.label, price === range.value, () => setPrice(range.value)))}
                </div>
              </div>
              <div>
                <p className="mb-3 font-sansBody text-xs font-bold uppercase tracking-nav text-velmora-muted">Material</p>
                <div className="flex flex-wrap gap-2 lg:flex-col">
                  {['All', ...materials].map((item) => filterButton(item, material === item, () => setMaterial(item)))}
                </div>
              </div>
            </div>
          </aside>

          <section aria-live="polite">
            <div className="mb-6 flex items-center justify-between font-sansBody text-xs font-bold uppercase tracking-nav text-velmora-muted">
              <span>{filteredProducts.length} pieces</span>
              <span>Premium demi-fine edit</span>
            </div>
            {filteredProducts.length > 0 ? (
              <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="rounded-[2rem] border border-velmora-espresso/10 bg-velmora-silk p-10 text-center text-velmora-obsidian shadow-editorial">
                <p className="font-serifDisplay text-3xl">No pieces match this edit.</p>
                <p className="mt-2 font-sansBody text-sm text-velmora-muted">Try a different category, material, or price range.</p>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  )
}
