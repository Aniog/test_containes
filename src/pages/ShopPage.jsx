import { SlidersHorizontal } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import FilterGroup from '@/components/shop/FilterGroup.jsx'
import ProductCard from '@/components/shop/ProductCard.jsx'
import {
  materialOptions,
  productCategories,
  products,
} from '@/data/storefront'
import useStrkImages from '@/hooks/useStrkImages.jsx'

const priceOptions = [
  { label: '$30 – $50', value: '30-50', min: 30, max: 50 },
  { label: '$51 – $80', value: '51-80', min: 51, max: 80 },
  { label: '$81 – $120', value: '81-120', min: 81, max: 120 },
]

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Top Rated', value: 'rating-desc' },
]

function ShopPage() {
  const [searchParams] = useSearchParams()
  const [selectedCategories, setSelectedCategories] = useState(() => {
    const category = searchParams.get('category')
    return category ? [category] : []
  })
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [selectedPrices, setSelectedPrices] = useState([])
  const [sortBy, setSortBy] = useState('featured')
  const [showFilters, setShowFilters] = useState(false)
  const containerRef = useStrkImages([selectedCategories.join(','), selectedMaterials.join(','), selectedPrices.join(','), sortBy])

  const toggleValue = (setter, currentValues, value) => {
    setter(
      currentValues.includes(value)
        ? currentValues.filter((item) => item !== value)
        : [...currentValues, value],
    )
  }

  const filteredProducts = useMemo(() => {
    let nextProducts = [...products]

    if (selectedCategories.length > 0) {
      nextProducts = nextProducts.filter((product) =>
        selectedCategories.includes(product.category),
      )
    }

    if (selectedMaterials.length > 0) {
      nextProducts = nextProducts.filter((product) =>
        selectedMaterials.includes(product.material),
      )
    }

    if (selectedPrices.length > 0) {
      nextProducts = nextProducts.filter((product) =>
        selectedPrices.some((range) => {
          const option = priceOptions.find((entry) => entry.value === range)
          return option
            ? product.price >= option.min && product.price <= option.max
            : true
        }),
      )
    }

    if (sortBy === 'price-asc') {
      nextProducts.sort((a, b) => a.price - b.price)
    }

    if (sortBy === 'price-desc') {
      nextProducts.sort((a, b) => b.price - a.price)
    }

    if (sortBy === 'rating-desc') {
      nextProducts.sort((a, b) => b.rating - a.rating)
    }

    return nextProducts
  }, [selectedCategories, selectedMaterials, selectedPrices, sortBy])

  return (
    <div ref={containerRef} className="pt-28 sm:pt-32">
      <section className="page-shell py-12 sm:py-16">
        <div className="flex flex-col gap-6 border-b border-border pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-4">
            <p className="eyebrow">Shop all</p>
            <h1 className="font-display text-5xl leading-none text-ink sm:text-6xl">
              A refined edit of earrings, necklaces, and huggies.
            </h1>
            <p className="text-base leading-8 text-muted">
              Discover warm gold finishes, giftable sets, and everyday signatures designed for a premium-but-accessible ritual.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start lg:self-auto">
            <button
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-xs font-medium uppercase tracking-micro text-truffle transition hover:border-accent lg:hidden"
              onClick={() => setShowFilters((current) => !current)}
              type="button"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>
            <label className="flex items-center gap-3 rounded-full border border-border bg-surface px-4 py-2.5 text-sm text-truffle">
              <span className="text-xs uppercase tracking-micro text-muted">Sort</span>
              <select
                className="bg-transparent text-sm text-ink outline-none"
                onChange={(event) => setSortBy(event.target.value)}
                value={sortBy}
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside
            className={`${showFilters ? 'block' : 'hidden'} rounded-[2rem] border border-border bg-surface p-6 shadow-card lg:block`}
          >
            <div className="mb-6 flex items-center justify-between lg:block">
              <div>
                <p className="eyebrow">Filters</p>
                <h2 className="mt-2 font-display text-3xl text-ink">Refine</h2>
              </div>
              <button
                className="text-xs uppercase tracking-micro text-muted lg:hidden"
                onClick={() => setShowFilters(false)}
                type="button"
              >
                Close
              </button>
            </div>

            <div className="space-y-6">
              <FilterGroup
                onToggle={(value) =>
                  toggleValue(setSelectedCategories, selectedCategories, value)
                }
                options={productCategories.map((item) => ({ label: item, value: item }))}
                selectedValues={selectedCategories}
                title="Category"
              />
              <FilterGroup
                onToggle={(value) =>
                  toggleValue(setSelectedPrices, selectedPrices, value)
                }
                options={priceOptions.map(({ label, value }) => ({ label, value }))}
                selectedValues={selectedPrices}
                title="Price"
              />
              <FilterGroup
                onToggle={(value) =>
                  toggleValue(setSelectedMaterials, selectedMaterials, value)
                }
                options={materialOptions.map((item) => ({ label: item, value: item }))}
                selectedValues={selectedMaterials}
                title="Material"
              />
            </div>
          </aside>

          <div className="space-y-5">
            <div className="flex items-center justify-between gap-4 rounded-full border border-border bg-panel/50 px-5 py-3 text-sm text-truffle">
              <span>{filteredProducts.length} pieces</span>
              <span className="text-xs uppercase tracking-micro text-muted">
                Quiet luxury, everyday wear
              </span>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} imageScope="shop-grid" product={product} />
                ))}
              </div>
            ) : (
              <div className="rounded-[2rem] border border-border bg-surface p-10 text-center shadow-card">
                <h3 className="font-display text-4xl text-ink">No pieces match your filters</h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Clear a few selections to explore the full Velmora edit again.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ShopPage
