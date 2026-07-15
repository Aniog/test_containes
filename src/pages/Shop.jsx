import { useMemo, useState } from 'react'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'
import { useStrkImages } from '@/lib/useStrkImages'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies']
const priceOptions = [
  { label: 'All prices', value: 'all' },
  { label: 'Under $50', value: 'under-50' },
  { label: '$50–$80', value: '50-80' },
  { label: '$80–$120', value: '80-120' },
]
const materialOptions = ['All', '18K Gold Plated', 'Gold Vermeil', 'Gift Boxed Set']

function Shop({ onAddToCart }) {
  const [category, setCategory] = useState('All')
  const [price, setPrice] = useState('all')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')
  const containerRef = useStrkImages([category, price, material, sort])

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category
      const matchesMaterial = material === 'All' || product.material === material
      const matchesPrice =
        price === 'all' ||
        (price === 'under-50' && product.price < 50) ||
        (price === '50-80' && product.price >= 50 && product.price <= 80) ||
        (price === '80-120' && product.price >= 80 && product.price <= 120)

      return matchesCategory && matchesMaterial && matchesPrice
    })

    return [...result].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return products.findIndex((product) => product.id === a.id) - products.findIndex((product) => product.id === b.id)
    })
  }, [category, price, material, sort])

  return (
    <main ref={containerRef} className="bg-velmora-parchment pb-16 pt-24 text-velmora-espresso md:pb-24 md:pt-32">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-velmora-mist/70 pb-10 text-center md:pb-14">
          <p className="text-xs font-extrabold uppercase tracking-[0.28em] text-velmora-brass">The collection</p>
          <h1 className="mt-3 font-serifDisplay text-5xl font-semibold leading-tight text-velmora-espresso md:text-7xl">Shop Velmora</h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-velmora-ink/76 md:text-base">
            Demi-fine earrings, necklaces, huggies, and giftable sets made with luminous finishes and everyday comfort.
          </p>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[17rem_1fr] lg:gap-12">
          <aside className="rounded-none border border-velmora-mist/70 bg-velmora-ivory p-5 text-velmora-espresso shadow-soft lg:sticky lg:top-28 lg:self-start">
            <div className="flex items-center justify-between border-b border-velmora-mist/60 pb-4">
              <h2 className="text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-espresso">Filter</h2>
              <button type="button" onClick={() => { setCategory('All'); setPrice('all'); setMaterial('All') }} className="text-xs font-bold uppercase tracking-[0.18em] text-velmora-brass transition hover:text-velmora-espresso">
                Reset
              </button>
            </div>

            <div className="mt-6 space-y-8">
              <fieldset>
                <legend className="text-xs font-extrabold uppercase tracking-[0.22em] text-velmora-brass">Category</legend>
                <div className="mt-4 space-y-3">
                  {categoryOptions.map((option) => (
                    <label key={option} className="flex cursor-pointer items-center gap-3 text-sm text-velmora-ink">
                      <input type="radio" name="category" checked={category === option} onChange={() => setCategory(option)} className="h-4 w-4 accent-velmora-brass" />
                      {option}
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className="text-xs font-extrabold uppercase tracking-[0.22em] text-velmora-brass">Price</legend>
                <div className="mt-4 space-y-3">
                  {priceOptions.map((option) => (
                    <label key={option.value} className="flex cursor-pointer items-center gap-3 text-sm text-velmora-ink">
                      <input type="radio" name="price" checked={price === option.value} onChange={() => setPrice(option.value)} className="h-4 w-4 accent-velmora-brass" />
                      {option.label}
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className="text-xs font-extrabold uppercase tracking-[0.22em] text-velmora-brass">Material</legend>
                <div className="mt-4 space-y-3">
                  {materialOptions.map((option) => (
                    <label key={option} className="flex cursor-pointer items-center gap-3 text-sm text-velmora-ink">
                      <input type="radio" name="material" checked={material === option} onChange={() => setMaterial(option)} className="h-4 w-4 accent-velmora-brass" />
                      {option}
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>
          </aside>

          <section>
            <div className="mb-7 flex flex-col gap-4 border-b border-velmora-mist/70 pb-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-semibold text-velmora-ink">Showing {filteredProducts.length} of {products.length} pieces</p>
              <label className="flex items-center gap-3 text-xs font-extrabold uppercase tracking-[0.2em] text-velmora-brass">
                Sort
                <select value={sort} onChange={(event) => setSort(event.target.value)} className="border border-velmora-mist bg-velmora-ivory px-3 py-2 text-sm font-semibold normal-case tracking-normal text-velmora-espresso focus:border-velmora-brass focus:outline-none focus:ring-2 focus:ring-velmora-champagne/50">
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </label>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />)}
              </div>
            ) : (
              <div className="border border-velmora-mist/70 bg-velmora-ivory p-10 text-center text-velmora-espresso shadow-soft">
                <h2 className="font-serifDisplay text-3xl font-semibold">No pieces found.</h2>
                <p className="mt-3 text-sm leading-6 text-velmora-ink/75">Try clearing a filter to reveal more of the Velmora edit.</p>
              </div>
            )}
          </section>
        </div>
      </section>
    </main>
  )
}

export default Shop
