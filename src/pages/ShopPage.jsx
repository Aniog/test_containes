import { SlidersHorizontal } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { products } from '../data/products'
import { useStrkImages } from '../lib/useStrkImages'
import ProductCard from '../components/store/ProductCard'
import SectionHeader from '../components/store/SectionHeader'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const priceOptions = [
  { label: 'All prices', value: 'all' },
  { label: '$30–$50', value: '30-50' },
  { label: '$50–$80', value: '50-80' },
  { label: '$80–$120', value: '80-120' },
]
const materialOptions = ['18K Gold Plated', 'Hypoallergenic', 'Gift-Ready']

const ShopPage = ({ onAddToCart }) => {
  const [searchParams] = useSearchParams()
  const [category, setCategory] = useState(searchParams.get('category') || 'All')
  const [priceRange, setPriceRange] = useState('all')
  const [material, setMaterial] = useState('18K Gold Plated')
  const [sort, setSort] = useState('featured')
  const imageRef = useStrkImages([category, priceRange, sort])

  useEffect(() => {
    setCategory(searchParams.get('category') || 'All')
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    const [min, max] = priceRange === 'all' ? [0, Infinity] : priceRange.split('-').map(Number)
    const filtered = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const priceMatch = product.price >= min && product.price <= max
      const materialMatch = material === '18K Gold Plated' || material === 'Hypoallergenic' || product.category === 'Gift Sets'
      return categoryMatch && priceMatch && materialMatch
    })

    return [...filtered].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return products.findIndex((item) => item.id === a.id) - products.findIndex((item) => item.id === b.id)
    })
  }, [category, material, priceRange, sort])

  return (
    <main ref={imageRef} className="bg-velmora-ivory pt-24 text-velmora-ink">
      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 lg:py-16">
        <SectionHeader
          eyebrow="Shop Velmora"
          title="Demi-fine gold, edited with intention."
          copy="Filter warm, giftable pieces by category, price, and material. Every design is premium-but-accessible, made for daily wear."
        />

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="rounded-[2rem] border border-velmora-hairline bg-velmora-pearl p-5 text-velmora-ink shadow-soft lg:sticky lg:top-28 lg:self-start">
            <div className="mb-6 flex items-center gap-3 border-b border-velmora-hairline pb-5">
              <SlidersHorizontal className="h-5 w-5 text-velmora-brass" />
              <h2 className="font-serif text-2xl font-semibold">Filters</h2>
            </div>

            <div className="grid gap-7">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-velmora-smoke">Category</p>
                <div className="flex flex-wrap gap-2 lg:grid">
                  {categoryOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setCategory(option)}
                      className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                        category === option
                          ? 'border-velmora-espresso bg-velmora-espresso text-velmora-pearl'
                          : 'border-velmora-hairline bg-velmora-ivory text-velmora-ink hover:border-velmora-brass'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="price-filter" className="mb-3 block text-xs font-bold uppercase tracking-widest text-velmora-smoke">Price</label>
                <select
                  id="price-filter"
                  value={priceRange}
                  onChange={(event) => setPriceRange(event.target.value)}
                  className="w-full rounded-full border border-velmora-hairline bg-velmora-ivory px-4 py-3 text-sm font-semibold text-velmora-ink focus:border-velmora-brass focus:outline-none"
                >
                  {priceOptions.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-velmora-smoke">Material</p>
                <div className="grid gap-2">
                  {materialOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setMaterial(option)}
                      className={`rounded-full border px-4 py-2 text-left text-sm font-semibold transition ${
                        material === option
                          ? 'border-velmora-brass bg-velmora-linen text-velmora-ink'
                          : 'border-velmora-hairline bg-velmora-ivory text-velmora-smoke hover:text-velmora-ink'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <section>
            <div className="mb-6 flex flex-col gap-4 rounded-[1.5rem] border border-velmora-hairline bg-velmora-pearl p-4 text-velmora-ink sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-semibold text-velmora-smoke">
                Showing <span className="text-velmora-ink">{filteredProducts.length}</span> pieces
              </p>
              <label className="flex items-center gap-3 text-sm font-semibold text-velmora-smoke">
                Sort
                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                  className="rounded-full border border-velmora-hairline bg-velmora-ivory px-4 py-2 text-sm font-semibold text-velmora-ink focus:border-velmora-brass focus:outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </label>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
                ))}
              </div>
            ) : (
              <div className="rounded-[2rem] border border-dashed border-velmora-hairline bg-velmora-pearl p-12 text-center text-velmora-ink">
                <h3 className="font-serif text-4xl font-medium">No pieces found</h3>
                <p className="mt-3 text-velmora-smoke">Try a different category or price range.</p>
              </div>
            )}
          </section>
        </div>
      </section>
    </main>
  )
}

export default ShopPage
