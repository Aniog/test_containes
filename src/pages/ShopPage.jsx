import React from 'react'
import { ChevronDown } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/store/ProductCard'
import { useStore } from '@/components/store/StoreContext'
import { collectionFilters, products } from '@/data/storefront'

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Top Rated', value: 'rating-desc' },
]

const matchesPrice = (price, selected) => {
  if (!selected) return true
  if (selected === 'under-50') return price < 50
  if (selected === '50-80') return price >= 50 && price <= 80
  if (selected === '80-120') return price > 80 && price <= 120
  return true
}

const ShopPage = () => {
  const { addToCart } = useStore()
  const [searchParams, setSearchParams] = useSearchParams()
  const [sortBy, setSortBy] = React.useState('featured')

  const selectedCategory = searchParams.get('category') || ''
  const selectedPrice = searchParams.get('price') || ''
  const selectedMaterial = searchParams.get('material') || ''

  const filteredProducts = React.useMemo(() => {
    const nextProducts = products.filter((product) => {
      const categoryMatch = selectedCategory ? product.categoryKey === selectedCategory : true
      const materialMatch = selectedMaterial ? product.materialKey === selectedMaterial : true
      const priceMatch = matchesPrice(product.price, selectedPrice)
      return categoryMatch && materialMatch && priceMatch
    })

    if (sortBy === 'price-asc') {
      return [...nextProducts].sort((a, b) => a.price - b.price)
    }

    if (sortBy === 'price-desc') {
      return [...nextProducts].sort((a, b) => b.price - a.price)
    }

    if (sortBy === 'rating-desc') {
      return [...nextProducts].sort((a, b) => b.rating - a.rating)
    }

    return nextProducts
  }, [selectedCategory, selectedMaterial, selectedPrice, sortBy])

  const updateFilter = (key, value) => {
    const nextParams = new URLSearchParams(searchParams)

    if (!value) {
      nextParams.delete(key)
    } else {
      nextParams.set(key, value)
    }

    setSearchParams(nextParams)
  }

  return (
    <main className="bg-velmora-paper pt-28 text-velmora-ink sm:pt-32">
      <section className="border-b border-velmora-mist/60 px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-taupe">
            Collection
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-5xl text-velmora-ink sm:text-6xl lg:text-7xl">
            A premium-but-accessible edit of warm gold essentials
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-8 text-velmora-taupe sm:text-base">
            Discover demi-fine earrings, necklaces, huggies, and gift-ready sets designed
            to move effortlessly between self-purchase and meaningful gifting.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[280px_minmax(0,1fr)] lg:px-8 lg:py-12">
        <aside className="h-fit rounded-[2rem] border border-velmora-mist/60 bg-velmora-shell/70 p-6 text-velmora-ink shadow-soft">
          <div className="flex items-center justify-between border-b border-velmora-mist/60 pb-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-velmora-taupe">
              Filters
            </h2>
            <button
              type="button"
              onClick={() => setSearchParams(new URLSearchParams())}
              className="text-xs font-semibold uppercase tracking-[0.24em] text-velmora-gold transition hover:text-velmora-gold-deep"
            >
              Reset
            </button>
          </div>

          <div className="mt-6 space-y-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-velmora-ink">
                Category
              </h3>
              <div className="mt-4 space-y-3">
                {collectionFilters.categories.map((option) => (
                  <label key={option.value} className="flex items-center gap-3 text-sm text-velmora-taupe">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === option.value}
                      onChange={() => updateFilter('category', option.value)}
                      className="h-4 w-4 border-velmora-mist text-velmora-gold focus:ring-velmora-gold"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-velmora-ink">
                Price
              </h3>
              <div className="mt-4 space-y-3">
                {collectionFilters.prices.map((option) => (
                  <label key={option.value} className="flex items-center gap-3 text-sm text-velmora-taupe">
                    <input
                      type="radio"
                      name="price"
                      checked={selectedPrice === option.value}
                      onChange={() => updateFilter('price', option.value)}
                      className="h-4 w-4 border-velmora-mist text-velmora-gold focus:ring-velmora-gold"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-velmora-ink">
                Material
              </h3>
              <div className="mt-4 space-y-3">
                {collectionFilters.materials.map((option) => (
                  <label key={option.value} className="flex items-center gap-3 text-sm text-velmora-taupe">
                    <input
                      type="radio"
                      name="material"
                      checked={selectedMaterial === option.value}
                      onChange={() => updateFilter('material', option.value)}
                      className="h-4 w-4 border-velmora-mist text-velmora-gold focus:ring-velmora-gold"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <div>
          <div className="flex flex-col gap-4 rounded-[2rem] border border-velmora-mist/60 bg-velmora-paper p-5 shadow-soft sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-velmora-taupe">
              Showing <span className="font-semibold text-velmora-ink">{filteredProducts.length}</span> pieces
            </p>

            <div className="relative w-full sm:w-[260px]">
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="h-12 w-full appearance-none rounded-full border border-velmora-mist bg-velmora-shell/50 px-5 pr-12 text-sm text-velmora-ink focus:border-velmora-gold focus:outline-none"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-velmora-taupe" />
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.slug}
                product={product}
                sectionId="collection-grid"
                onQuickAdd={(selectedProduct) => addToCart(selectedProduct, 'Gold Tone', 1)}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default ShopPage
