import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/store/ProductCard'
import SectionHeading from '@/components/ui/SectionHeading'
import { categories, materialOptions, products } from '@/data/products'
import { cn } from '@/lib/utils'

function matchesPriceBand(price, band) {
  if (band === 'under-50') return price < 50
  if (band === '50-80') return price >= 50 && price <= 80
  if (band === '80-plus') return price > 80
  return true
}

const priceOptions = [
  { id: 'all', label: 'All Prices' },
  { id: 'under-50', label: 'Under $50' },
  { id: '50-80', label: '$50 - $80' },
  { id: '80-plus', label: '$80+' },
]

export default function ShopPage() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('query') || ''
  const categoryParam = searchParams.get('category') || 'All'
  const [activeCategory, setActiveCategory] = useState(categoryParam)
  const [activePrice, setActivePrice] = useState('all')
  const [activeMaterial, setActiveMaterial] = useState('All')
  const [sortBy, setSortBy] = useState('featured')
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    setActiveCategory(categoryParam)
  }, [categoryParam])

  const filteredProducts = useMemo(() => {
    const loweredQuery = query.trim().toLowerCase()
    const results = products.filter((product) => {
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory
      const matchesMaterial = activeMaterial === 'All' || product.material === activeMaterial
      const matchesPrice = activePrice === 'all' || matchesPriceBand(product.price, activePrice)
      const matchesQuery =
        !loweredQuery ||
        [product.name, product.shortDescription, product.category, product.material]
          .join(' ')
          .toLowerCase()
          .includes(loweredQuery)

      return matchesCategory && matchesMaterial && matchesPrice && matchesQuery
    })

    const sortedResults = [...results]
    if (sortBy === 'price-low') sortedResults.sort((a, b) => a.price - b.price)
    if (sortBy === 'price-high') sortedResults.sort((a, b) => b.price - a.price)
    if (sortBy === 'rating') sortedResults.sort((a, b) => b.rating - a.rating)
    return sortedResults
  }, [activeCategory, activeMaterial, activePrice, query, sortBy])

  return (
    <div className="px-5 pb-16 pt-28 sm:px-8 lg:px-12 lg:pb-24 lg:pt-32">
      <div className="mx-auto max-w-7xl space-y-8">
        <SectionHeading
          eyebrow="Collection"
          title="Shop Velmora"
          description="A curated edit of demi-fine earrings, necklaces, and huggies made for gifting and self-purchase."
        />

        <div className="flex flex-col gap-4 rounded-[2rem] border border-velmora-line bg-velmora-ivory p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <div>
            <p className="text-xs uppercase tracking-brand text-velmora-taupe">
              {filteredProducts.length} styles available
            </p>
            {query && (
              <p className="mt-2 text-sm text-velmora-taupe">Showing results for “{query}”</p>
            )}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={() => setShowFilters((current) => !current)}
              className="rounded-full border border-velmora-line px-5 py-3 text-xs uppercase tracking-product text-velmora-ink lg:hidden"
            >
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
            <label className="flex items-center gap-3 rounded-full border border-velmora-line bg-velmora-pearl px-4 py-3 text-xs uppercase tracking-product text-velmora-taupe">
              Sort
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="bg-transparent text-velmora-ink outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </label>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[290px_minmax(0,1fr)]">
          <div className={cn(showFilters ? 'block' : 'hidden', 'lg:block')}>
            <div className="rounded-[2rem] border border-velmora-line bg-velmora-ivory p-6 shadow-velmora-soft">
              <div className="border-b border-velmora-line pb-4">
                <p className="text-xs uppercase tracking-brand text-velmora-taupe">Refine</p>
                <h2 className="mt-2 font-display text-3xl text-velmora-ink">Shop Filters</h2>
              </div>

              <div className="mt-6 space-y-6">
                <div className="space-y-3 border-b border-velmora-line pb-6">
                  <h3 className="text-xs uppercase tracking-product text-velmora-ink">Category</h3>
                  <div className="flex flex-wrap gap-2">
                    {['All', ...categories].map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setActiveCategory(option)}
                        className={cn(
                          'rounded-full border px-4 py-2 text-xs uppercase tracking-product transition duration-300',
                          activeCategory === option
                            ? 'border-velmora-gold bg-velmora-gold text-velmora-noir'
                            : 'border-velmora-line bg-velmora-pearl text-velmora-taupe hover:border-velmora-gold hover:text-velmora-gold',
                        )}
                      >
                        {option === 'All' ? 'All Categories' : option}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3 border-b border-velmora-line pb-6">
                  <h3 className="text-xs uppercase tracking-product text-velmora-ink">Price</h3>
                  <div className="flex flex-wrap gap-2">
                    {priceOptions.map((option) => (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => setActivePrice(option.id)}
                        className={cn(
                          'rounded-full border px-4 py-2 text-xs uppercase tracking-product transition duration-300',
                          activePrice === option.id
                            ? 'border-velmora-gold bg-velmora-gold text-velmora-noir'
                            : 'border-velmora-line bg-velmora-pearl text-velmora-taupe hover:border-velmora-gold hover:text-velmora-gold',
                        )}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xs uppercase tracking-product text-velmora-ink">Material</h3>
                  <div className="flex flex-wrap gap-2">
                    {['All', ...materialOptions].map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setActiveMaterial(option)}
                        className={cn(
                          'rounded-full border px-4 py-2 text-xs uppercase tracking-product transition duration-300',
                          activeMaterial === option
                            ? 'border-velmora-gold bg-velmora-gold text-velmora-noir'
                            : 'border-velmora-line bg-velmora-pearl text-velmora-taupe hover:border-velmora-gold hover:text-velmora-gold',
                        )}
                      >
                        {option === 'All' ? 'All Materials' : option}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} prefix={`shop-grid-${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
