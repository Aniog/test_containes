import { SlidersHorizontal } from 'lucide-react'
import { useMemo, useState } from 'react'
import ProductCard from '@/components/product/VelmoraProductCard.jsx'
import { products } from '@/data/products'

const priceRanges = [
  { label: 'All prices', value: 'all' },
  { label: '$30 – $50', value: '30-50' },
  { label: '$50 – $80', value: '50-80' },
  { label: '$80 – $120', value: '80-120' },
]

const ShopPage = ({ onAddToCart, onSelectProduct }) => {
  const [category, setCategory] = useState('All')
  const [price, setPrice] = useState('all')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')

  const categories = ['All', ...Array.from(new Set(products.map((product) => product.category)))]
  const materials = ['All', ...Array.from(new Set(products.map((product) => product.material)))]

  const filteredProducts = useMemo(() => {
    const [min, max] = price === 'all' ? [0, Infinity] : price.split('-').map(Number)
    const result = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material
      const priceMatch = product.price >= min && product.price <= max
      return categoryMatch && materialMatch && priceMatch
    })

    return result.sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return products.findIndex((item) => item.id === a.id) - products.findIndex((item) => item.id === b.id)
    })
  }, [category, material, price, sort])

  return (
    <main className="bg-ivory pt-24 text-espresso sm:pt-28">
      <section className="border-b border-champagne/30 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-cocoa">The Collection</p>
          <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h1 className="max-w-3xl font-serif text-6xl leading-[0.92] sm:text-7xl">
              Demi-fine essentials, edited for everyday ritual.
            </h1>
            <p className="max-w-md text-sm leading-7 text-taupe">
              Explore premium-but-accessible gold jewelry designed for gifting, stacking, and self-purchase.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[280px_1fr] lg:px-8 lg:py-14">
        <aside className="h-fit border border-champagne/30 bg-pearl p-5 text-espresso lg:sticky lg:top-28">
          <div className="mb-6 flex items-center justify-between border-b border-champagne/30 pb-4">
            <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.26em]">
              <SlidersHorizontal className="h-4 w-4" /> Filters
            </h2>
            <button
              type="button"
              onClick={() => {
                setCategory('All')
                setPrice('all')
                setMaterial('All')
              }}
              className="text-xs font-semibold text-taupe underline-offset-4 hover:text-espresso hover:underline"
            >
              Reset
            </button>
          </div>

          <div className="space-y-8">
            <fieldset>
              <legend className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-cocoa">Category</legend>
              <div className="grid gap-2">
                {categories.map((item) => (
                  <label key={item} className="flex cursor-pointer items-center justify-between gap-3 text-sm text-espresso">
                    <span>{item}</span>
                    <input
                      type="radio"
                      name="category"
                      checked={category === item}
                      onChange={() => setCategory(item)}
                      className="accent-espresso"
                    />
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-cocoa">Price</legend>
              <div className="grid gap-2">
                {priceRanges.map((range) => (
                  <label key={range.value} className="flex cursor-pointer items-center justify-between gap-3 text-sm text-espresso">
                    <span>{range.label}</span>
                    <input
                      type="radio"
                      name="price"
                      checked={price === range.value}
                      onChange={() => setPrice(range.value)}
                      className="accent-espresso"
                    />
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-cocoa">Material</legend>
              <div className="grid gap-2">
                {materials.map((item) => (
                  <label key={item} className="flex cursor-pointer items-center justify-between gap-3 text-sm text-espresso">
                    <span>{item}</span>
                    <input
                      type="radio"
                      name="material"
                      checked={material === item}
                      onChange={() => setMaterial(item)}
                      className="accent-espresso"
                    />
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
        </aside>

        <div>
          <div className="mb-6 flex flex-col justify-between gap-4 border-b border-champagne/30 pb-5 sm:flex-row sm:items-center">
            <p className="text-sm text-taupe">
              Showing <span className="font-semibold text-espresso">{filteredProducts.length}</span> pieces
            </p>
            <label className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-cocoa">
              Sort
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="min-h-11 border border-champagne/40 bg-pearl px-4 text-sm normal-case tracking-normal text-espresso outline-none focus:border-espresso"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to high</option>
                <option value="price-high">Price: High to low</option>
                <option value="rating">Highest rated</option>
              </select>
            </label>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAdd={onAddToCart} onSelect={onSelectProduct} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="border border-champagne/30 bg-pearl p-10 text-center text-espresso">
              <p className="font-serif text-3xl">No pieces match these filters.</p>
              <p className="mt-3 text-sm text-taupe">Try resetting the filters to see the full Velmora collection.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export default ShopPage
