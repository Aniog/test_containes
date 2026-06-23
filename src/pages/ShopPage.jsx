import { useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Container from '@/components/Container'
import EmptyState from '@/components/EmptyState'
import ProductCard from '@/components/ProductCard'
import SectionHeading from '@/components/SectionHeading'
import { products } from '@/data/products'

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Top Rated', value: 'rating' },
]

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const materialOptions = ['All', '18K Gold Plated', 'Gold Vermeil', 'Gold Plated']
const priceOptions = [
  { label: 'All', value: 'all' },
  { label: '$0 – $50', value: '0-50' },
  { label: '$51 – $80', value: '51-80' },
  { label: '$81 – $120', value: '81-120' },
]

const getPriceRange = (priceRange) => {
  switch (priceRange) {
    case '0-50':
      return [0, 50]
    case '51-80':
      return [51, 80]
    case '81-120':
      return [81, 120]
    default:
      return [0, Number.POSITIVE_INFINITY]
  }
}

const ShopPage = () => {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const initialCategory = params.get('category') || 'All'
  const [category, setCategory] = useState(initialCategory)
  const [material, setMaterial] = useState('All')
  const [priceRange, setPriceRange] = useState('all')
  const [sortBy, setSortBy] = useState('featured')

  const filteredProducts = useMemo(() => {
    const [minPrice, maxPrice] = getPriceRange(priceRange)

    const nextProducts = products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category
      const matchesMaterial = material === 'All' || product.material === material
      const matchesPrice = product.price >= minPrice && product.price <= maxPrice

      return matchesCategory && matchesMaterial && matchesPrice
    })

    if (sortBy === 'price-asc') {
      return [...nextProducts].sort((a, b) => a.price - b.price)
    }

    if (sortBy === 'price-desc') {
      return [...nextProducts].sort((a, b) => b.price - a.price)
    }

    if (sortBy === 'rating') {
      return [...nextProducts].sort((a, b) => b.rating - a.rating)
    }

    return nextProducts
  }, [category, material, priceRange, sortBy])

  return (
    <div className="pb-20 pt-32 md:pt-36">
      <Container>
        <SectionHeading
          eyebrow="Collection"
          title="A curated edit of demi-fine favorites"
          description="From sculptural huggies to refined necklaces, browse the Velmora collection with filters designed for quick discovery."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="rounded-[2rem] border border-brand-line bg-brand-surface p-6 text-brand-espresso shadow-soft">
            <div className="space-y-8">
              <div>
                <h3 className="text-xs uppercase tracking-[0.28em] text-brand-bronze">Category</h3>
                <div className="mt-4 flex flex-wrap gap-2 lg:flex-col">
                  {categoryOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setCategory(option)}
                      className={`rounded-full border px-4 py-2 text-sm transition ${
                        category === option
                          ? 'border-brand-bronze bg-brand-bronze/10 text-brand-espresso'
                          : 'border-brand-line text-brand-mink hover:text-brand-espresso'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-[0.28em] text-brand-bronze">Price</h3>
                <div className="mt-4 space-y-3 text-sm text-brand-mink">
                  {priceOptions.map((option) => (
                    <label key={option.value} className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="price"
                        checked={priceRange === option.value}
                        onChange={() => setPriceRange(option.value)}
                        className="h-4 w-4 border-brand-line accent-brand-bronze"
                      />
                      {option.label}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-[0.28em] text-brand-bronze">Material</h3>
                <div className="mt-4 space-y-3 text-sm text-brand-mink">
                  {materialOptions.map((option) => (
                    <label key={option} className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="material"
                        checked={material === option}
                        onChange={() => setMaterial(option)}
                        className="h-4 w-4 border-brand-line accent-brand-bronze"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <div>
            <div className="mb-6 flex flex-col gap-4 rounded-[2rem] border border-brand-line bg-brand-surface p-4 text-brand-espresso shadow-soft sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-brand-mink">
                Showing <span className="font-medium text-brand-espresso">{filteredProducts.length}</span> styles
              </p>
              <label className="flex items-center gap-3 text-sm text-brand-mink">
                Sort by
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="rounded-full border border-brand-line bg-brand-ivory px-4 py-2 text-sm text-brand-espresso outline-none"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {filteredProducts.length === 0 ? (
              <EmptyState
                title="No pieces match those filters"
                description="Try another category or broaden the price range to view more of the collection."
              />
            ) : (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ShopPage
