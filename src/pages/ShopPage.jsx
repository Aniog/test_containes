import { SlidersHorizontal } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ImageLoader from '@/components/storefront/ImageLoader'
import ProductCard from '@/components/storefront/ProductCard'
import { products } from '@/data/products'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const priceOptions = [
  { label: 'All prices', value: 'all' },
  { label: '$30–$50', value: '30-50' },
  { label: '$50–$80', value: '50-80' },
  { label: '$80–$120', value: '80-120' },
]
const materialOptions = ['All', '18K Gold Plated']

const ShopPage = ({ onAddToCart }) => {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(categoryOptions.includes(initialCategory) ? initialCategory : 'All')
  const [price, setPrice] = useState('all')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')
  const [filtersOpen, setFiltersOpen] = useState(false)

  useEffect(() => {
    const nextCategory = searchParams.get('category') || 'All'
    setCategory(categoryOptions.includes(nextCategory) ? nextCategory : 'All')
  }, [searchParams])


  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category
      const matchesMaterial = material === 'All' || product.material === material
      const matchesPrice =
        price === 'all' ||
        (price === '30-50' && product.price >= 30 && product.price <= 50) ||
        (price === '50-80' && product.price > 50 && product.price <= 80) ||
        (price === '80-120' && product.price > 80 && product.price <= 120)

      return matchesCategory && matchesMaterial && matchesPrice
    })

    return [...filtered].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return 0
    })
  }, [category, material, price, sort])

  const filterPanel = (
    <div className="space-y-8 text-velmora-ink">
      <div>
        <h3 className="mb-4 text-xs font-bold uppercase tracking-luxury text-velmora-goldDark">Category</h3>
        <div className="space-y-2">
          {categoryOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setCategory(option)}
              className={`flex w-full items-center justify-between border-b border-velmora-linen py-3 text-left text-sm transition ${
                category === option ? 'font-bold text-velmora-ink' : 'text-velmora-mauve hover:text-velmora-ink'
              }`}
            >
              {option}
              {category === option && <span className="h-1.5 w-1.5 rounded-full bg-velmora-gold" />}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-xs font-bold uppercase tracking-luxury text-velmora-goldDark">Price</h3>
        <div className="space-y-2">
          {priceOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => setPrice(option.value)}
              className={`flex w-full items-center justify-between border-b border-velmora-linen py-3 text-left text-sm transition ${
                price === option.value ? 'font-bold text-velmora-ink' : 'text-velmora-mauve hover:text-velmora-ink'
              }`}
            >
              {option.label}
              {price === option.value && <span className="h-1.5 w-1.5 rounded-full bg-velmora-gold" />}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-xs font-bold uppercase tracking-luxury text-velmora-goldDark">Material</h3>
        <div className="space-y-2">
          {materialOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setMaterial(option)}
              className={`flex w-full items-center justify-between border-b border-velmora-linen py-3 text-left text-sm transition ${
                material === option ? 'font-bold text-velmora-ink' : 'text-velmora-mauve hover:text-velmora-ink'
              }`}
            >
              {option}
              {material === option && <span className="h-1.5 w-1.5 rounded-full bg-velmora-gold" />}
            </button>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <ImageLoader className="bg-velmora-cream pt-24 text-velmora-ink" refreshKey={`${category}-${price}-${material}-${sort}`}>
      <main>
        <section className="border-b border-velmora-linen bg-velmora-porcelain py-14 text-velmora-ink">
          <div className="velmora-container">
            <p className="text-xs font-bold uppercase tracking-luxury text-velmora-goldDark">The collection</p>
            <div className="mt-4 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
              <h1 className="max-w-3xl font-serifDisplay text-6xl font-semibold leading-none sm:text-7xl">
                Jewelry for everyday ceremony
              </h1>
              <p className="max-w-sm text-sm leading-7 text-velmora-mauve">
                Demi-fine earrings, necklaces, huggies, and giftable sets with warm gold polish and editorial restraint.
              </p>
            </div>
          </div>
        </section>

        <section className="velmora-container py-10 sm:py-14">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-velmora-linen pb-5">
            <button
              type="button"
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="inline-flex items-center gap-2 rounded-full border border-velmora-linen bg-velmora-porcelain px-5 py-3 text-xs font-bold uppercase tracking-luxury text-velmora-ink lg:hidden"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>
            <p className="text-sm text-velmora-mauve">
              <span className="font-bold text-velmora-ink">{filteredProducts.length}</span> pieces
            </p>
            <label className="flex items-center gap-3 text-xs font-bold uppercase tracking-luxury text-velmora-goldDark">
              Sort
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="rounded-full border border-velmora-linen bg-velmora-porcelain px-4 py-3 text-sm font-semibold normal-case tracking-normal text-velmora-ink focus:border-velmora-gold focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </label>
          </div>

          <div className={`mb-8 border border-velmora-linen bg-velmora-porcelain p-5 lg:hidden ${filtersOpen ? 'block' : 'hidden'}`}>
            {filterPanel}
          </div>

          <div className="grid gap-9 lg:grid-cols-[260px_1fr]">
            <aside className="hidden border-r border-velmora-linen pr-8 lg:block">
              <div className="sticky top-28">{filterPanel}</div>
            </aside>
            <div>
              {filteredProducts.length > 0 ? (
                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} context="shop" />
                  ))}
                </div>
              ) : (
                <div className="border border-velmora-linen bg-velmora-porcelain p-10 text-center text-velmora-ink">
                  <h2 className="font-serifDisplay text-4xl font-semibold">No pieces found</h2>
                  <p className="mt-3 text-sm leading-6 text-velmora-mauve">
                    Try another category or price range to discover more Velmora jewelry.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </ImageLoader>
  )
}

export default ShopPage
