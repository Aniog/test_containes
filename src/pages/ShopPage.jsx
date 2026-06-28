import { useEffect, useMemo, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/ProductCard'
import { products } from '@/data/products'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies']
const materials = ['All', '18K Gold Plated']
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Top Rated', value: 'rating' },
]

function ShopPage() {
  const [searchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedMaterial, setSelectedMaterial] = useState('All')
  const [selectedPrice, setSelectedPrice] = useState('all')
  const [sortBy, setSortBy] = useState('featured')
  const [filtersOpen, setFiltersOpen] = useState(false)

  useEffect(() => {
    const categoryParam = searchParams.get('category')

    if (!categoryParam || categoryParam === 'featured') {
      return
    }

    const matchedCategory = categories.find(
      (category) => category.toLowerCase() === categoryParam.toLowerCase(),
    )

    if (matchedCategory) {
      setSelectedCategory(matchedCategory)
    }
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory
      const matchesMaterial =
        selectedMaterial === 'All' || product.material === selectedMaterial
      const matchesPrice =
        selectedPrice === 'all' ||
        (selectedPrice === 'under-50' && product.price < 50) ||
        (selectedPrice === '50-80' && product.price >= 50 && product.price <= 80) ||
        (selectedPrice === '80-plus' && product.price > 80)

      return matchesCategory && matchesMaterial && matchesPrice
    })

    return [...filtered].sort((left, right) => {
      if (sortBy === 'price-asc') return left.price - right.price
      if (sortBy === 'price-desc') return right.price - left.price
      if (sortBy === 'rating') return right.rating - left.rating
      return 0
    })
  }, [selectedCategory, selectedMaterial, selectedPrice, sortBy])

  return (
    <div className="px-4 pb-20 pt-28 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-[1360px] space-y-8">
        <section className="rounded-[2.2rem] border border-sand bg-ivory px-6 py-10 text-ink shadow-soft sm:px-8 lg:px-12 lg:py-14">
          <div className="max-w-3xl space-y-4">
            <p className="text-xs uppercase tracking-[0.34em] text-ink/55">Collection</p>
            <h1 className="font-serif text-5xl leading-[0.95] sm:text-6xl">
              Fine jewelry, curated for modern gifting and daily wear
            </h1>
            <p className="max-w-2xl text-base leading-7 text-ink/68">
              Explore Velmora’s edit of earrings, necklaces, and sculptural huggies,
              all designed to feel elevated while staying within reach.
            </p>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[300px,1fr] lg:items-start">
          <div className="rounded-[1.8rem] border border-sand bg-ivory p-5 text-ink shadow-soft lg:sticky lg:top-24">
            <button
              type="button"
              className="flex w-full items-center justify-between lg:hidden"
              onClick={() => setFiltersOpen((value) => !value)}
            >
              <span className="flex items-center gap-2 text-xs uppercase tracking-[0.34em] text-ink/65">
                <SlidersHorizontal className="h-4 w-4" /> Filters
              </span>
              <span className="text-sm text-ink/55">{filtersOpen ? 'Hide' : 'Show'}</span>
            </button>

            <div className={`space-y-8 ${filtersOpen ? 'mt-6 block' : 'mt-0 hidden lg:block'}`}>
              <div className="space-y-3">
                <h2 className="text-xs uppercase tracking-[0.34em] text-ink/55">Category</h2>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.24em] transition ${
                        selectedCategory === category
                          ? 'border-gold bg-gold text-ink'
                          : 'border-sand bg-pearl text-ink/75 hover:border-gold'
                      }`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h2 className="text-xs uppercase tracking-[0.34em] text-ink/55">Price</h2>
                <div className="space-y-2 text-sm text-ink/72">
                  {[
                    ['all', 'All prices'],
                    ['under-50', 'Under $50'],
                    ['50-80', '$50 to $80'],
                    ['80-plus', '$80+'],
                  ].map(([value, label]) => (
                    <label key={value} className="flex items-center gap-3">
                      <input
                        checked={selectedPrice === value}
                        className="h-4 w-4 accent-gold"
                        name="price"
                        type="radio"
                        onChange={() => setSelectedPrice(value)}
                      />
                      <span>{label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h2 className="text-xs uppercase tracking-[0.34em] text-ink/55">Material</h2>
                <div className="space-y-2 text-sm text-ink/72">
                  {materials.map((material) => (
                    <label key={material} className="flex items-center gap-3">
                      <input
                        checked={selectedMaterial === material}
                        className="h-4 w-4 accent-gold"
                        name="material"
                        type="radio"
                        onChange={() => setSelectedMaterial(material)}
                      />
                      <span>{material}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex flex-col gap-4 rounded-[1.6rem] border border-sand bg-ivory px-5 py-4 text-ink shadow-soft sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-ink/68">
                Showing <span className="font-medium text-ink">{filteredProducts.length}</span> pieces
              </p>
              <label className="flex items-center gap-3 text-sm text-ink/68">
                <span>Sort by</span>
                <select
                  className="min-h-11 rounded-full border border-sand bg-pearl px-4 text-sm text-ink focus:border-gold focus:outline-none"
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ShopPage
