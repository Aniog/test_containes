import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { products } from '../data/products'
import { ProductCard } from '../components/storefront/ProductCard'
import { SectionHeading } from '../components/storefront/SectionHeading'
import { useStore } from '../context/StoreContext'

const filters = {
  category: ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'],
  price: ['All', '30-60', '60-90', '90-120'],
  material: ['All', '18K Gold Plated'],
}

export function ShopPage() {
  const { addToCart, searchQuery } = useStore()
  const [searchParams, setSearchParams] = useSearchParams()
  const [sortBy, setSortBy] = useState('featured')

  const selectedCategory = searchParams.get('category') || 'All'
  const selectedPrice = searchParams.get('price') || 'All'
  const selectedMaterial = searchParams.get('material') || 'All'

  const visibleProducts = useMemo(() => {
    const loweredQuery = searchQuery.trim().toLowerCase()

    const nextProducts = products.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory
      const matchesPrice = selectedPrice === 'All' || product.priceRange === selectedPrice
      const matchesMaterial =
        selectedMaterial === 'All' || product.material === selectedMaterial
      const matchesSearch =
        !loweredQuery ||
        [product.shortName, product.category, product.material]
          .join(' ')
          .toLowerCase()
          .includes(loweredQuery)

      return matchesCategory && matchesPrice && matchesMaterial && matchesSearch
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
  }, [searchQuery, selectedCategory, selectedMaterial, selectedPrice, sortBy])

  const updateFilter = (key, value) => {
    const nextParams = new URLSearchParams(searchParams)

    if (!value || value === 'All') {
      nextParams.delete(key)
    } else {
      nextParams.set(key, value)
    }

    setSearchParams(nextParams)
  }

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 pb-16 pt-32 sm:px-6 md:pb-24 lg:px-10">
      <SectionHeading
        eyebrow="Collection"
        title="A modern shop for luminous gold jewelry"
        description="Filter by silhouette, material, and price to find an everyday favorite or a thoughtful gift."
      />

      <div className="grid gap-10 lg:grid-cols-[17rem_minmax(0,1fr)] lg:items-start">
        <aside className="rounded-[2rem] border border-velmora-line bg-white p-6 text-velmora-espresso shadow-[0_16px_40px_rgba(38,27,23,0.05)]">
          <div className="space-y-8">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-velmora-taupe">Category</p>
              <div className="mt-4 flex flex-wrap gap-2 lg:flex-col">
                {filters.category.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => updateFilter('category', item)}
                    className={`rounded-full border px-4 py-2 text-left text-sm transition ${
                      selectedCategory === item
                        ? 'border-velmora-espresso bg-velmora-espresso text-velmora-ivory'
                        : 'border-velmora-line bg-velmora-champagne/35 text-velmora-espresso hover:border-velmora-espresso'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-velmora-taupe">Price</p>
              <div className="mt-4 flex flex-wrap gap-2 lg:flex-col">
                {filters.price.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => updateFilter('price', item)}
                    className={`rounded-full border px-4 py-2 text-left text-sm transition ${
                      selectedPrice === item
                        ? 'border-velmora-espresso bg-velmora-espresso text-velmora-ivory'
                        : 'border-velmora-line bg-velmora-champagne/35 text-velmora-espresso hover:border-velmora-espresso'
                    }`}
                  >
                    {item === 'All' ? item : `$${item.replace('-', '–$')}`}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-velmora-taupe">Material</p>
              <div className="mt-4 flex flex-wrap gap-2 lg:flex-col">
                {filters.material.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => updateFilter('material', item)}
                    className={`rounded-full border px-4 py-2 text-left text-sm transition ${
                      selectedMaterial === item
                        ? 'border-velmora-espresso bg-velmora-espresso text-velmora-ivory'
                        : 'border-velmora-line bg-velmora-champagne/35 text-velmora-espresso hover:border-velmora-espresso'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <div className="space-y-6">
          <div className="flex flex-col gap-4 rounded-[2rem] border border-velmora-line bg-white p-5 text-velmora-espresso sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm uppercase tracking-[0.24em] text-velmora-taupe">
              {visibleProducts.length} styles found
            </p>
            <label className="flex items-center gap-3 text-sm text-velmora-espresso">
              <span className="text-xs uppercase tracking-[0.24em] text-velmora-taupe">Sort</span>
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="rounded-full border border-velmora-line bg-velmora-champagne/35 px-4 py-2 text-sm text-velmora-espresso outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </label>
          </div>

          {visibleProducts.length ? (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
              ))}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-velmora-line bg-white p-10 text-center text-velmora-espresso shadow-[0_16px_40px_rgba(38,27,23,0.05)]">
              <h3 className="font-display text-4xl text-velmora-espresso">No pieces match this filter</h3>
              <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-velmora-taupe">
                Adjust the filters or search terms to explore more Velmora favorites.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
