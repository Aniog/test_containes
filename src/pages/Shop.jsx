import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/storefront/ProductCard.jsx'
import { products } from '@/data/products'
import { useStrkImages } from '@/lib/useStrkImages'

const categoryOptions = [
  { label: 'All', value: 'all' },
  { label: 'Earrings', value: 'earrings' },
  { label: 'Necklaces', value: 'necklaces' },
  { label: 'Huggies', value: 'huggies' },
]

const priceOptions = [
  { label: 'All Prices', value: 'all' },
  { label: 'Under $50', value: 'under-50' },
  { label: '$50–$80', value: '50-80' },
  { label: '$80+', value: '80-plus' },
]

const materialOptions = [
  { label: 'All Materials', value: 'all' },
  { label: '18K Gold Plated', value: '18k-gold-plated' },
]

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Top Rated', value: 'rating-desc' },
]

const matchesPrice = (product, value) => {
  if (value === 'under-50') return product.price < 50
  if (value === '50-80') return product.price >= 50 && product.price <= 80
  if (value === '80-plus') return product.price > 80
  return true
}

const sortProducts = (list, value) => {
  const sorted = [...list]
  if (value === 'price-asc') return sorted.sort((a, b) => a.price - b.price)
  if (value === 'price-desc') return sorted.sort((a, b) => b.price - a.price)
  if (value === 'rating-desc') return sorted.sort((a, b) => b.rating - a.rating)
  return sorted
}

const Shop = ({ onAddToCart }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const category = searchParams.get('category') ?? 'all'
  const price = searchParams.get('price') ?? 'all'
  const material = searchParams.get('material') ?? 'all'
  const sort = searchParams.get('sort') ?? 'featured'
  const containerRef = useStrkImages([category, price, material, sort])

  const filteredProducts = useMemo(() => {
    const list = products.filter((product) => {
      const categoryMatch = category === 'all' ? true : product.type === category
      const materialMatch = material === 'all' ? true : product.material.toLowerCase().replace(/\s+/g, '-') === material
      return categoryMatch && materialMatch && matchesPrice(product, price)
    })

    return sortProducts(list, sort)
  }, [category, material, price, sort])

  const updateParam = (key, value) => {
    const next = new URLSearchParams(searchParams)
    if (value === 'all' || value === 'featured') {
      next.delete(key)
    } else {
      next.set(key, value)
    }
    setSearchParams(next)
  }

  return (
    <div ref={containerRef} className="bg-parchment text-obsidian">
      <section className="border-b border-sand/70 bg-rose/30 px-4 pb-12 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-taupe">Collection</p>
          <h1 className="mt-4 font-serif text-5xl text-obsidian sm:text-6xl">Shop the Velmora collection</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-taupe">
            Explore earrings, necklaces, and huggies designed with warm luminosity and a premium editorial point of view.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[280px_1fr] lg:px-8 lg:py-16">
        <aside className="h-fit rounded-[2rem] border border-sand/70 bg-ivory p-6 shadow-[0_20px_60px_rgba(33,24,22,0.08)]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-taupe">Filters</p>
            <div className="mt-6 space-y-6">
              <div>
                <h2 className="text-sm uppercase tracking-[0.24em] text-obsidian">Category</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {categoryOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => updateParam('category', option.value)}
                      className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${category === option.value ? 'border-obsidian bg-obsidian text-ivory' : 'border-sand bg-transparent text-obsidian hover:bg-mist'}`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-sm uppercase tracking-[0.24em] text-obsidian">Price</h2>
                <div className="mt-4 space-y-2">
                  {priceOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => updateParam('price', option.value)}
                      className={`flex w-full items-center justify-between rounded-full border px-4 py-3 text-left text-xs uppercase tracking-[0.2em] transition ${price === option.value ? 'border-obsidian bg-obsidian text-ivory' : 'border-sand bg-transparent text-obsidian hover:bg-mist'}`}
                    >
                      <span>{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-sm uppercase tracking-[0.24em] text-obsidian">Material</h2>
                <div className="mt-4 space-y-2">
                  {materialOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => updateParam('material', option.value)}
                      className={`flex w-full items-center justify-between rounded-full border px-4 py-3 text-left text-xs uppercase tracking-[0.2em] transition ${material === option.value ? 'border-obsidian bg-obsidian text-ivory' : 'border-sand bg-transparent text-obsidian hover:bg-mist'}`}
                    >
                      <span>{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>

        <div>
          <div className="mb-8 flex flex-col gap-4 rounded-[2rem] border border-sand/70 bg-ivory p-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-taupe">
              Showing <span className="font-medium text-obsidian">{filteredProducts.length}</span> pieces
            </p>
            <label className="flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-taupe">
              Sort by
              <select
                value={sort}
                onChange={(event) => updateParam('sort', event.target.value)}
                className="rounded-full border border-sand bg-parchment px-4 py-3 text-xs uppercase tracking-[0.2em] text-obsidian focus:border-obsidian focus:outline-none"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Shop
