import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal } from 'lucide-react'
import ImageLoadScope from '@/components/ImageLoadScope'
import ProductCard from '@/components/products/ProductCard'
import { products } from '@/data/products'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const priceRanges = [
  { label: 'All prices', value: 'all' },
  { label: 'Under $50', value: 'under-50' },
  { label: '$50 – $80', value: '50-80' },
  { label: '$80+', value: '80-plus' },
]
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Top Rated', value: 'rating-desc' },
]

const isInPriceRange = (product, range) => {
  if (range === 'under-50') return product.price < 50
  if (range === '50-80') return product.price >= 50 && product.price <= 80
  if (range === '80-plus') return product.price > 80
  return true
}

export default function Shop({ onAddToCart }) {
  const [searchParams, setSearchParams] = useSearchParams()
  const [priceRange, setPriceRange] = useState('all')
  const [material, setMaterial] = useState('all')
  const [sort, setSort] = useState('featured')
  const [filtersOpen, setFiltersOpen] = useState(false)

  const category = searchParams.get('category') || 'All'
  const materials = ['all', ...new Set(products.map((product) => product.material))]

  const filteredProducts = useMemo(() => {
    const result = products
      .filter((product) => category === 'All' || product.category === category)
      .filter((product) => isInPriceRange(product, priceRange))
      .filter((product) => material === 'all' || product.material === material)

    return [...result].sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price
      if (sort === 'price-desc') return b.price - a.price
      if (sort === 'rating-desc') return b.rating - a.rating
      return a.id - b.id
    })
  }, [category, material, priceRange, sort])

  const updateCategory = (nextCategory) => {
    const nextParams = new URLSearchParams(searchParams)
    if (nextCategory === 'All') {
      nextParams.delete('category')
    } else {
      nextParams.set('category', nextCategory)
    }
    setSearchParams(nextParams)
  }

  const dependencyKey = `${category}-${priceRange}-${material}-${sort}`

  return (
    <ImageLoadScope as="main" className="min-h-screen bg-velmora-ivory pt-28 text-velmora-espresso" dependencyKey={dependencyKey}>
      <section className="mx-auto max-w-[1500px] px-5 pb-8 pt-8 sm:px-8 lg:px-10 lg:pb-12">
        <div className="border-b border-velmora-linen pb-8">
          <p className="text-xs font-bold uppercase tracking-cta text-velmora-bronze">Velmora Shop</p>
          <div className="mt-3 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="font-serif text-6xl leading-none text-velmora-espresso sm:text-7xl">Demi-fine essentials</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-velmora-mist">
                Warm gold pieces, crystal accents, and giftable sets crafted for the rituals of everyday dressing.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setFiltersOpen(!filtersOpen)}
                className="inline-flex items-center gap-2 border border-velmora-linen px-4 py-3 text-xs font-bold uppercase tracking-cta text-velmora-espresso transition hover:border-velmora-champagne lg:hidden"
              >
                <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
                Filters
              </button>
              <label className="sr-only" htmlFor="sort-products">Sort products</label>
              <select
                id="sort-products"
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="border border-velmora-linen bg-velmora-ivory px-4 py-3 text-sm text-velmora-espresso focus:outline-none focus:ring-2 focus:ring-velmora-champagne"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1500px] gap-8 px-5 pb-20 sm:px-8 lg:grid-cols-[280px_1fr] lg:px-10 lg:pb-28">
        <aside className={`${filtersOpen ? 'block' : 'hidden'} border border-velmora-linen bg-velmora-porcelain/60 p-5 text-velmora-espresso lg:block lg:self-start lg:sticky lg:top-28`}>
          <div className="space-y-8">
            <div>
              <h2 className="border-b border-velmora-linen pb-3 text-xs font-bold uppercase tracking-cta text-velmora-espresso">Category</h2>
              <div className="mt-4 space-y-2">
                {categories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => updateCategory(item)}
                    className={`block w-full border px-4 py-3 text-left text-sm transition focus:outline-none focus:ring-2 focus:ring-velmora-champagne ${category === item ? 'border-velmora-champagne bg-velmora-ivory text-velmora-espresso' : 'border-transparent text-velmora-mist hover:border-velmora-linen hover:text-velmora-espresso'}`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h2 className="border-b border-velmora-linen pb-3 text-xs font-bold uppercase tracking-cta text-velmora-espresso">Price</h2>
              <div className="mt-4 space-y-3">
                {priceRanges.map((range) => (
                  <label key={range.value} className="flex cursor-pointer items-center gap-3 text-sm text-velmora-mist transition hover:text-velmora-espresso">
                    <input
                      type="radio"
                      name="price"
                      value={range.value}
                      checked={priceRange === range.value}
                      onChange={(event) => setPriceRange(event.target.value)}
                      className="h-4 w-4 accent-velmora-champagne"
                    />
                    {range.label}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h2 className="border-b border-velmora-linen pb-3 text-xs font-bold uppercase tracking-cta text-velmora-espresso">Material</h2>
              <div className="mt-4 space-y-3">
                {materials.map((item) => (
                  <label key={item} className="flex cursor-pointer items-center gap-3 text-sm text-velmora-mist transition hover:text-velmora-espresso">
                    <input
                      type="radio"
                      name="material"
                      value={item}
                      checked={material === item}
                      onChange={(event) => setMaterial(event.target.value)}
                      className="h-4 w-4 accent-velmora-champagne"
                    />
                    {item === 'all' ? 'All materials' : item}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <div>
          <div className="mb-5 flex items-center justify-between text-xs uppercase tracking-cta text-velmora-mist">
            <span>{filteredProducts.length} pieces</span>
            <span>{category === 'All' ? 'All jewelry' : category}</span>
          </div>
          {filteredProducts.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
              ))}
            </div>
          ) : (
            <div className="border border-velmora-linen bg-velmora-porcelain p-10 text-center text-velmora-espresso">
              <h2 className="font-serif text-4xl">No pieces found</h2>
              <p className="mt-3 text-sm text-velmora-mist">Try a different category, price, or material filter.</p>
            </div>
          )}
        </div>
      </section>
    </ImageLoadScope>
  )
}
