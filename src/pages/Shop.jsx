import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const priceOptions = [
  { label: 'All prices', value: 'all' },
  { label: 'Under $50', value: 'under-50' },
  { label: '$50–$80', value: '50-80' },
  { label: '$80+', value: '80-plus' },
]
const materialOptions = ['All', '18K Gold Plated']

function Shop() {
  const pageRef = useRef(null)
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category')
  const [category, setCategory] = useState(
    initialCategory ? categoryOptions.find((item) => item.toLowerCase() === initialCategory.toLowerCase()) || 'All' : 'All',
  )
  const [price, setPrice] = useState('all')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')

  useEffect(() => {
    let cleanupImages
    const frameId = window.requestAnimationFrame(() => {
      cleanupImages = ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanupImages === 'function') cleanupImages()
    }
  }, [category, price, material, sort])

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material
      const priceMatch =
        price === 'all' ||
        (price === 'under-50' && product.price < 50) ||
        (price === '50-80' && product.price >= 50 && product.price <= 80) ||
        (price === '80-plus' && product.price > 80)

      return categoryMatch && materialMatch && priceMatch
    })

    return [...result].sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price
      if (sort === 'price-desc') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return products.findIndex((item) => item.id === a.id) - products.findIndex((item) => item.id === b.id)
    })
  }, [category, price, material, sort])

  return (
    <main ref={pageRef} className="bg-velmora-ivory pt-24 text-velmora-ink">
      <section className="border-b border-velmora-champagne bg-velmora-porcelain px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-luxury text-velmora-deepgold">Shop Velmora</p>
          <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="font-serif text-5xl text-velmora-espresso sm:text-6xl">Demi-fine gold, refined for every day.</h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-velmora-ink/75 sm:text-base">
                Explore earrings, necklaces, huggies, and gift-ready sets designed with warm polish and accessible luxury.
              </p>
            </div>
            <label className="flex min-w-52 flex-col gap-2 text-xs font-bold uppercase tracking-luxury text-velmora-espresso">
              Sort by
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="border border-velmora-champagne bg-velmora-ivory px-4 py-3 text-sm font-semibold normal-case tracking-normal text-velmora-espresso outline-none focus:border-velmora-gold focus:ring-2 focus:ring-velmora-gold/30"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </label>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[17rem_1fr] lg:px-8 lg:py-14">
        <aside className="h-fit bg-velmora-porcelain p-5 shadow-sm lg:sticky lg:top-28">
          <div className="flex items-center justify-between border-b border-velmora-champagne pb-4">
            <h2 className="text-xs font-bold uppercase tracking-luxury text-velmora-espresso">Filter</h2>
            <button
              type="button"
              onClick={() => {
                setCategory('All')
                setPrice('all')
                setMaterial('All')
              }}
              className="text-xs font-bold uppercase tracking-[0.14em] text-velmora-deepgold hover:text-velmora-espresso"
            >
              Clear
            </button>
          </div>

          <div className="space-y-8 pt-6">
            <fieldset>
              <legend className="mb-3 text-xs font-bold uppercase tracking-luxury text-velmora-espresso">Category</legend>
              <div className="grid gap-2">
                {categoryOptions.map((option) => (
                  <label key={option} className="flex items-center gap-3 text-sm text-velmora-ink">
                    <input type="radio" name="category" checked={category === option} onChange={() => setCategory(option)} className="accent-velmora-gold" />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="mb-3 text-xs font-bold uppercase tracking-luxury text-velmora-espresso">Price</legend>
              <div className="grid gap-2">
                {priceOptions.map((option) => (
                  <label key={option.value} className="flex items-center gap-3 text-sm text-velmora-ink">
                    <input type="radio" name="price" checked={price === option.value} onChange={() => setPrice(option.value)} className="accent-velmora-gold" />
                    {option.label}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="mb-3 text-xs font-bold uppercase tracking-luxury text-velmora-espresso">Material</legend>
              <div className="grid gap-2">
                {materialOptions.map((option) => (
                  <label key={option} className="flex items-center gap-3 text-sm text-velmora-ink">
                    <input type="radio" name="material" checked={material === option} onChange={() => setMaterial(option)} className="accent-velmora-gold" />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
        </aside>

        <div>
          <div className="mb-5 flex items-center justify-between text-sm text-velmora-ink/75">
            <p>{filteredProducts.length} pieces</p>
            <p className="hidden sm:block">Premium-but-accessible, $30–$120</p>
          </div>
          {filteredProducts.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="bg-velmora-porcelain p-10 text-center shadow-sm">
              <h3 className="font-serif text-3xl text-velmora-espresso">No pieces found.</h3>
              <p className="mt-3 text-sm text-velmora-ink/70">Try clearing a filter to see the full Velmora collection.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export default Shop
