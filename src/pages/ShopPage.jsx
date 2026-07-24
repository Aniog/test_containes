import { SlidersHorizontal } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/products/ProductCard.jsx'
import SectionHeading from '@/components/shared/SectionHeading.jsx'
import { priceFilters, products } from '@/data/products'

const materialOptions = ['18K Gold Plated', 'Crystal Accents', 'Gift Set']
const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

function normalizeCategory(value) {
  const normalized = (value || '').toLowerCase()

  if (!normalized || normalized === 'all') return 'All'
  if (normalized === 'earrings') return 'Earrings'
  if (normalized === 'necklaces') return 'Necklaces'
  if (normalized === 'huggies') return 'Huggies'
  if (normalized === 'gift sets' || normalized === 'gift-set' || normalized === 'gifts') {
    return 'Gift Sets'
  }

  return value
}

function matchesPrice(product, selectedPrices) {
  if (selectedPrices.length === 0) return true

  return selectedPrices.some((price) => {
    if (price === 'under-50') return product.price < 50
    if (price === '50-80') return product.price >= 50 && product.price <= 80
    if (price === 'over-80') return product.price > 80
    return true
  })
}

export default function ShopPage() {
  const [searchParams] = useSearchParams()
  const categoryFromQuery = normalizeCategory(
    searchParams.get('category') || searchParams.get('collection') || 'All',
  )
  const [selectedCategories, setSelectedCategories] = useState(
    categoryFromQuery === 'All' ? [] : [categoryFromQuery],
  )
  const [selectedPrices, setSelectedPrices] = useState([])
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [sortBy, setSortBy] = useState('featured')
  const [filtersOpen, setFiltersOpen] = useState(false)

  const categoryOptions = ['Earrings', 'Necklaces', 'Huggies', 'Gift Sets']

  useEffect(() => {
    setSelectedCategories(categoryFromQuery === 'All' ? [] : [categoryFromQuery])
  }, [categoryFromQuery])

  const filteredProducts = useMemo(() => {
    const nextProducts = products.filter((product) => {
      const categoryMatch =
        selectedCategories.length === 0 || selectedCategories.includes(product.category)
      const materialMatch =
        selectedMaterials.length === 0 || selectedMaterials.includes(product.material)
      const priceMatch = matchesPrice(product, selectedPrices)

      return categoryMatch && materialMatch && priceMatch
    })

    if (sortBy === 'price-low') {
      return [...nextProducts].sort((a, b) => a.price - b.price)
    }
    if (sortBy === 'price-high') {
      return [...nextProducts].sort((a, b) => b.price - a.price)
    }
    if (sortBy === 'rating') {
      return [...nextProducts].sort((a, b) => b.rating - a.rating)
    }

    return nextProducts
  }, [selectedCategories, selectedMaterials, selectedPrices, sortBy])

  const toggleValue = (setter, currentValues, value) => {
    setter(
      currentValues.includes(value)
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value],
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pb-24 lg:pt-12">
      <section className="rounded-[2.5rem] border border-velmora-line/30 bg-white/60 px-6 py-10 shadow-soft sm:px-10 lg:px-14 lg:py-14">
        <SectionHeading
          eyebrow="Shop Velmora"
          title="A Curated Edit of Everyday Gold"
          description="Explore demi-fine jewelry designed to feel polished from the first layer. Filter by category, price, or material to find your next signature piece."
        />
      </section>

      <div className="mt-8 flex items-center justify-between gap-4 lg:hidden">
        <button
          type="button"
          onClick={() => setFiltersOpen((current) => !current)}
          className="inline-flex items-center gap-2 rounded-full border border-velmora-line/40 bg-white/60 px-5 py-3 text-xs uppercase tracking-[0.28em] text-velmora-espresso shadow-soft"
        >
          <SlidersHorizontal className="h-4 w-4 text-velmora-gold" />
          Filters
        </button>

        <label className="flex items-center gap-3 rounded-full border border-velmora-line/40 bg-white/60 px-4 py-3 text-xs uppercase tracking-[0.22em] text-velmora-espresso shadow-soft">
          Sort
          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="bg-transparent text-sm text-velmora-espresso focus:outline-none"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[280px_1fr]">
        <aside
          className={`${
            filtersOpen ? 'block' : 'hidden'
          } rounded-[2rem] border border-velmora-line/30 bg-white/60 p-6 shadow-soft lg:block`}
        >
          <div className="flex items-center justify-between gap-4 border-b border-velmora-line/30 pb-5">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-velmora-gold">Filters</p>
              <h2 className="mt-2 font-serif text-3xl text-velmora-espresso">Refine</h2>
            </div>
            <button
              type="button"
              onClick={() => {
                setSelectedCategories([])
                setSelectedPrices([])
                setSelectedMaterials([])
              }}
              className="text-xs uppercase tracking-[0.22em] text-velmora-espresso/60 transition hover:text-velmora-gold"
            >
              Reset
            </button>
          </div>

          <div className="space-y-8 pt-6">
            <div>
              <h3 className="text-xs uppercase tracking-[0.28em] text-velmora-espresso">Category</h3>
              <div className="mt-4 space-y-3">
                {categoryOptions.map((option) => (
                  <label key={option} className="flex items-center justify-between gap-3 text-sm text-velmora-espresso">
                    <span>{option}</span>
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(option)}
                      onChange={() =>
                        toggleValue(setSelectedCategories, selectedCategories, option)
                      }
                      className="h-4 w-4 rounded border-velmora-line text-velmora-gold focus:ring-velmora-gold"
                    />
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.28em] text-velmora-espresso">Price</h3>
              <div className="mt-4 space-y-3">
                {priceFilters.map((option) => (
                  <label key={option.id} className="flex items-center justify-between gap-3 text-sm text-velmora-espresso">
                    <span>{option.label}</span>
                    <input
                      type="checkbox"
                      checked={selectedPrices.includes(option.id)}
                      onChange={() => toggleValue(setSelectedPrices, selectedPrices, option.id)}
                      className="h-4 w-4 rounded border-velmora-line text-velmora-gold focus:ring-velmora-gold"
                    />
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.28em] text-velmora-espresso">Material</h3>
              <div className="mt-4 space-y-3">
                {materialOptions.map((option) => (
                  <label key={option} className="flex items-center justify-between gap-3 text-sm text-velmora-espresso">
                    <span>{option}</span>
                    <input
                      type="checkbox"
                      checked={selectedMaterials.includes(option)}
                      onChange={() =>
                        toggleValue(setSelectedMaterials, selectedMaterials, option)
                      }
                      className="h-4 w-4 rounded border-velmora-line text-velmora-gold focus:ring-velmora-gold"
                    />
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <section>
          <div className="hidden items-center justify-between rounded-[2rem] border border-velmora-line/30 bg-white/60 px-6 py-4 shadow-soft lg:flex">
            <p className="text-xs uppercase tracking-[0.24em] text-velmora-espresso/60">
              {filteredProducts.length} pieces selected
            </p>
            <label className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-velmora-espresso">
              Sort
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="rounded-full border border-velmora-line/40 bg-velmora-ivory px-4 py-2 text-sm text-velmora-espresso focus:outline-none"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="mt-6 rounded-[2rem] border border-dashed border-velmora-line/40 bg-white/60 p-10 text-center shadow-soft">
              <h3 className="font-serif text-3xl text-velmora-espresso">No pieces match just yet</h3>
              <p className="mt-3 text-sm leading-7 text-velmora-espresso/72">
                Try widening your filters or start again with the full Velmora edit.
              </p>
            </div>
          ) : null}
        </section>
      </div>
    </div>
  )
}
