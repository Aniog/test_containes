import { useEffect, useMemo, useState } from 'react'
import { ChevronDown, SlidersHorizontal } from 'lucide-react'
import ProductCard from '@/components/store/ProductCard'
import { filters, products, sortOptions } from '@/data/store'

function FilterGroup({ title, items, selected, onToggle }) {
  return (
    <div className="border-b border-velmora-line pb-6">
      <h3 className="text-xs uppercase tracking-[0.34em] text-velmora-mocha">{title}</h3>
      <div className="mt-4 space-y-3">
        {items.map((item) => {
          const id = item.id || item
          const label = item.label || item
          const checked = selected.includes(id)

          return (
            <label key={id} className="flex items-center justify-between gap-4 text-sm text-velmora-espresso">
              <span>{label}</span>
              <input
                type="checkbox"
                checked={checked}
                onChange={() => onToggle(id)}
                className="h-4 w-4 rounded border-velmora-line text-velmora-gold focus:ring-velmora-gold"
              />
            </label>
          )
        })}
      </div>
    </div>
  )
}

function ShopPage({ onAddToCart, initialCategory }) {
  const [selectedCategories, setSelectedCategories] = useState(initialCategory ? [initialCategory] : [])
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [selectedPrices, setSelectedPrices] = useState([])
  const [sortBy, setSortBy] = useState('featured')
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    setSelectedCategories(initialCategory ? [initialCategory] : [])
  }, [initialCategory])

  const toggleSelection = (setter) => (value) => {
    setter((current) =>
      current.includes(value) ? current.filter((item) => item !== value) : [...current, value],
    )
  }

  const filteredProducts = useMemo(() => {
    let items = [...products]

    if (selectedCategories.length > 0) {
      items = items.filter((product) => selectedCategories.includes(product.category))
    }

    if (selectedMaterials.length > 0) {
      items = items.filter((product) => selectedMaterials.includes(product.material))
    }

    if (selectedPrices.length > 0) {
      const selectedPriceRanges = filters.prices.filter((range) => selectedPrices.includes(range.id))
      items = items.filter((product) =>
        selectedPriceRanges.some((range) => product.price >= range.min && product.price <= range.max),
      )
    }

    if (sortBy === 'price-asc') {
      items.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-desc') {
      items.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'rating-desc') {
      items.sort((a, b) => b.rating - a.rating)
    }

    return items
  }, [selectedCategories, selectedMaterials, selectedPrices, sortBy])

  return (
    <div className="bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-8 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.34em] text-velmora-mocha">Shop</p>
        <h1 id="shop-page-title" className="mt-4 font-display text-5xl sm:text-6xl">
          Jewelry for every golden moment
        </h1>
        <p id="shop-page-subtitle" className="mt-5 max-w-2xl text-base leading-8 text-velmora-mocha">
          Explore earrings, necklaces, and huggies with a warm editorial point of view.
          Refined details, premium finishes, and giftable price points from $30 to $120.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between gap-4 rounded-[26px] border border-velmora-line bg-white/75 p-4 shadow-sm lg:hidden">
          <button
            type="button"
            onClick={() => setShowFilters((current) => !current)}
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.24em] text-velmora-espresso"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              className="appearance-none rounded-full border border-velmora-line bg-transparent px-4 py-2 pr-10 text-sm text-velmora-espresso"
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-velmora-mocha" />
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside className={`space-y-6 rounded-[28px] border border-velmora-line bg-white/80 p-6 shadow-sm ${showFilters ? 'block' : 'hidden'} lg:block`}>
            <div className="flex items-center justify-between">
              <h2 className="text-sm uppercase tracking-[0.34em] text-velmora-espresso">Filter</h2>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategories([])
                  setSelectedMaterials([])
                  setSelectedPrices([])
                }}
                className="text-xs uppercase tracking-[0.24em] text-velmora-mocha transition hover:text-velmora-gold"
              >
                Clear all
              </button>
            </div>

            <FilterGroup
              title="Category"
              items={filters.categories.map((item) => ({ id: item.toLowerCase(), label: item }))}
              selected={selectedCategories}
              onToggle={toggleSelection(setSelectedCategories)}
            />
            <FilterGroup
              title="Price"
              items={filters.prices}
              selected={selectedPrices}
              onToggle={toggleSelection(setSelectedPrices)}
            />
            <FilterGroup
              title="Material"
              items={filters.materials}
              selected={selectedMaterials}
              onToggle={toggleSelection(setSelectedMaterials)}
            />
          </aside>

          <div>
            <div className="mb-6 hidden items-center justify-between rounded-[26px] border border-velmora-line bg-white/75 p-4 shadow-sm lg:flex">
              <p className="text-xs uppercase tracking-[0.28em] text-velmora-mocha">
                Showing {filteredProducts.length} styles
              </p>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="appearance-none rounded-full border border-velmora-line bg-transparent px-4 py-2 pr-10 text-sm text-velmora-espresso"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-velmora-mocha" />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ShopPage
