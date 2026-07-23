import { useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ProductCard from '@/components/storefront/ProductCard.jsx'
import ShopFilters from '@/components/storefront/ShopFilters.jsx'
import { priceFilters, products, sortOptions } from '@/data/storefront.js'

const getInitialCategory = (search) => {
  const params = new URLSearchParams(search)
  return params.get('category') || 'All'
}

export default function Shop() {
  const location = useLocation()
  const [selectedCategory, setSelectedCategory] = useState(() => getInitialCategory(location.search))
  const [selectedPrice, setSelectedPrice] = useState('all')
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [sortBy, setSortBy] = useState('featured')

  const filteredProducts = useMemo(() => {
    let nextProducts = [...products]

    if (selectedCategory !== 'All') {
      nextProducts = nextProducts.filter((product) => product.category === selectedCategory)
    }

    if (selectedPrice !== 'all') {
      const range = priceFilters.find((filter) => filter.id === selectedPrice)
      if (range) {
        nextProducts = nextProducts.filter((product) => product.price >= range.min && product.price <= range.max)
      }
    }

    if (selectedMaterials.length) {
      nextProducts = nextProducts.filter((product) => selectedMaterials.includes(product.material))
    }

    if (sortBy === 'price-low') {
      nextProducts.sort((a, b) => a.price - b.price)
    }

    if (sortBy === 'price-high') {
      nextProducts.sort((a, b) => b.price - a.price)
    }

    if (sortBy === 'rating') {
      nextProducts.sort((a, b) => b.rating - a.rating)
    }

    return nextProducts
  }, [selectedCategory, selectedMaterials, selectedPrice, sortBy])

  const toggleMaterial = (material) => {
    setSelectedMaterials((current) =>
      current.includes(material)
        ? current.filter((item) => item !== material)
        : [...current, material],
    )
  }

  return (
    <section className="bg-[var(--velmora-ivory)] px-5 pb-16 pt-28 md:px-8 md:pb-24 md:pt-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl space-y-4 border-b border-stone-200 pb-8">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Shop Velmora</p>
          <h1 className="text-5xl leading-none text-[var(--velmora-ink)] md:text-6xl">A polished collection of demi-fine everyday favorites.</h1>
          <p className="text-base leading-8 text-stone-600">
            Explore earrings, necklaces, huggies, and gift-ready sets made to feel warm, elevated, and easy to wear.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[300px_1fr] lg:items-start">
          <ShopFilters
            selectedCategory={selectedCategory}
            selectedMaterials={selectedMaterials}
            selectedPrice={selectedPrice}
            onCategoryChange={setSelectedCategory}
            onMaterialToggle={toggleMaterial}
            onPriceChange={setSelectedPrice}
          />

          <div className="space-y-6">
            <div className="flex flex-col gap-4 rounded-[1.5rem] border border-stone-200 bg-[var(--velmora-cream)] px-5 py-4 md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-stone-600">
                Showing <span className="font-medium text-[var(--velmora-ink)]">{filteredProducts.length}</span> pieces
              </p>

              <label className="flex items-center gap-3 text-sm text-stone-600">
                Sort by
                <select
                  className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm text-[var(--velmora-ink)] outline-none"
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

            {filteredProducts.length ? (
              <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} sectionTitleId="shop-grid-title" />
                ))}
              </div>
            ) : (
              <div className="rounded-[1.8rem] border border-stone-200 bg-[var(--velmora-cream)] p-10 text-center shadow-soft">
                <h2 id="shop-grid-title" className="text-3xl text-[var(--velmora-ink)]">No products match these filters</h2>
                <p className="mt-3 text-sm leading-7 text-stone-600">Try clearing one of your filters to see the full Velmora collection again.</p>
              </div>
            )}
            <span id="shop-grid-title" className="sr-only">Velmora product grid</span>
          </div>
        </div>
      </div>
    </section>
  )
}
