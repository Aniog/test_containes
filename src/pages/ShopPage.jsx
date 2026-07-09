import { useEffect, useMemo, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ProductGrid from '@/components/product/ProductGrid'
import {
  categories,
  materialFilters,
  priceFilters,
  products,
  sortOptions,
} from '@/data/storefront'
import { useStrkImages } from '@/hooks/useStrkImages'

const filterProducts = ({ catalog, selectedCategory, selectedMaterial, selectedPrice, selectedSort }) => {
  const nextProducts = catalog.filter((product) => {
    const matchesCategory = !selectedCategory || product.category === selectedCategory
    const matchesMaterial =
      !selectedMaterial ||
      product.materialTags.includes(selectedMaterial) ||
      product.material === selectedMaterial

    const matchesPrice =
      !selectedPrice ||
      (selectedPrice === 'under-50' && product.price < 50) ||
      (selectedPrice === '50-80' && product.price >= 50 && product.price <= 80) ||
      (selectedPrice === '80-120' && product.price > 80)

    return matchesCategory && matchesMaterial && matchesPrice
  })

  return nextProducts.sort((first, second) => {
    if (selectedSort === 'price-asc') return first.price - second.price
    if (selectedSort === 'price-desc') return second.price - first.price
    if (selectedSort === 'rating') return second.rating - first.rating
    return 0
  })
}

export default function ShopPage() {
  const location = useLocation()
  const queryCategory = new URLSearchParams(location.search).get('category')
  const [selectedCategory, setSelectedCategory] = useState(queryCategory || '')
  const [selectedMaterial, setSelectedMaterial] = useState('')
  const [selectedPrice, setSelectedPrice] = useState('')
  const [selectedSort, setSelectedSort] = useState('featured')
  const containerRef = useRef(null)

  const filteredProducts = useMemo(
    () =>
      filterProducts({
        catalog: products,
        selectedCategory,
        selectedMaterial,
        selectedPrice,
        selectedSort,
      }),
    [selectedCategory, selectedMaterial, selectedPrice, selectedSort],
  )

  useEffect(() => {
    setSelectedCategory(queryCategory || '')
  }, [queryCategory])

  useStrkImages(containerRef, [selectedCategory, selectedMaterial, selectedPrice, selectedSort])

  return (
    <main ref={containerRef} className="velmora-shell space-y-10 py-10 md:space-y-12 md:py-14">
      <section className="rounded-[2rem] border border-velmora-sand/60 bg-velmora-cream px-6 py-10 shadow-velmora md:px-10 md:py-14">
        <p className="velmora-kicker">Shop Velmora</p>
        <h1 className="font-display text-5xl text-velmora-ink md:text-6xl">The complete gold edit.</h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-velmora-cocoa/78">
          Browse warm-toned demi-fine pieces designed for self-purchase, gifting, and everyday wear with a premium editorial finish.
        </p>
      </section>

      <section className="grid gap-8 lg:grid-cols-[280px_1fr] lg:items-start">
        <aside className="space-y-8 rounded-[1.8rem] border border-velmora-sand/60 bg-velmora-cream p-6 shadow-velmora lg:sticky lg:top-24">
          <div>
            <h2 className="text-xs uppercase tracking-[0.3em] text-velmora-cocoa/60">Category</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.24em] transition ${
                  !selectedCategory
                    ? 'border-velmora-bronze bg-velmora-bronze/10 text-velmora-ink'
                    : 'border-velmora-sand text-velmora-cocoa hover:border-velmora-bronze'
                }`}
                onClick={() => setSelectedCategory('')}
              >
                All
              </button>
              {[...categories.map((category) => category.name), 'Gift Sets'].map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.24em] transition ${
                    selectedCategory === category
                      ? 'border-velmora-bronze bg-velmora-bronze/10 text-velmora-ink'
                      : 'border-velmora-sand text-velmora-cocoa hover:border-velmora-bronze'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-[0.3em] text-velmora-cocoa/60">Price</h2>
            <div className="mt-4 space-y-3">
              {priceFilters.map((priceFilter) => (
                <label key={priceFilter.value} className="flex items-center gap-3 text-sm text-velmora-cocoa/78">
                  <input
                    checked={selectedPrice === priceFilter.value}
                    className="h-4 w-4 accent-velmora-bronze"
                    name="price-filter"
                    type="radio"
                    onChange={() => setSelectedPrice(priceFilter.value)}
                  />
                  {priceFilter.label}
                </label>
              ))}
              <button
                type="button"
                className="pt-1 text-xs uppercase tracking-[0.24em] text-velmora-cocoa/55 transition hover:text-velmora-ink"
                onClick={() => setSelectedPrice('')}
              >
                Clear price
              </button>
            </div>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-[0.3em] text-velmora-cocoa/60">Material</h2>
            <div className="mt-4 space-y-3">
              {materialFilters.map((material) => (
                <label key={material} className="flex items-center gap-3 text-sm text-velmora-cocoa/78">
                  <input
                    checked={selectedMaterial === material}
                    className="h-4 w-4 accent-velmora-bronze"
                    name="material-filter"
                    type="radio"
                    onChange={() => setSelectedMaterial(material)}
                  />
                  {material}
                </label>
              ))}
              <button
                type="button"
                className="pt-1 text-xs uppercase tracking-[0.24em] text-velmora-cocoa/55 transition hover:text-velmora-ink"
                onClick={() => setSelectedMaterial('')}
              >
                Clear material
              </button>
            </div>
          </div>
        </aside>

        <div className="space-y-6">
          <div className="flex flex-col gap-4 rounded-[1.6rem] border border-velmora-sand/60 bg-velmora-cream p-5 shadow-velmora sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-velmora-cocoa/75">
              Showing <span className="font-semibold text-velmora-ink">{filteredProducts.length}</span> pieces.
            </p>
            <label className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-velmora-cocoa/60">
              Sort by
              <select
                className="rounded-full border border-velmora-sand bg-white px-4 py-3 text-xs uppercase tracking-[0.24em] text-velmora-ink outline-none transition focus:border-velmora-bronze"
                value={selectedSort}
                onChange={(event) => setSelectedSort(event.target.value)}
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {filteredProducts.length ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <div className="rounded-[1.8rem] border border-dashed border-velmora-sand bg-velmora-cream px-6 py-14 text-center shadow-velmora">
              <h2 className="font-display text-4xl text-velmora-ink">No pieces match these filters.</h2>
              <p className="mt-4 text-sm leading-7 text-velmora-cocoa/75">
                Try widening your selection to explore more of the Velmora collection.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
