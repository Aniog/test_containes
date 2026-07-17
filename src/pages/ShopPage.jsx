import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/store/ProductCard'
import SectionHeading from '@/components/store/SectionHeading'
import { products } from '@/data/products'
import { useStockImages } from '@/hooks/useStockImages'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const priceRanges = ['All', 'Under $50', '$50 to $80', '$80+']
const materials = ['All', '18K Gold Plated', 'Gold Vermeil', 'Gold Plated']

export default function ShopPage() {
  const containerRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All')
  const [selectedPrice, setSelectedPrice] = useState('All')
  const [selectedMaterial, setSelectedMaterial] = useState('All')
  const [sortBy, setSortBy] = useState('featured')

  useStockImages(containerRef, [selectedCategory, selectedPrice, selectedMaterial, sortBy])

  useEffect(() => {
    const categoryFromUrl = searchParams.get('category') || 'All'
    setSelectedCategory(categoryFromUrl)
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    let filtered = [...products]

    if (selectedCategory !== 'All') {
      filtered = filtered.filter((product) => product.category === selectedCategory)
    }

    if (selectedPrice === 'Under $50') {
      filtered = filtered.filter((product) => product.price < 50)
    }

    if (selectedPrice === '$50 to $80') {
      filtered = filtered.filter((product) => product.price >= 50 && product.price <= 80)
    }

    if (selectedPrice === '$80+') {
      filtered = filtered.filter((product) => product.price > 80)
    }

    if (selectedMaterial !== 'All') {
      filtered = filtered.filter((product) => product.material === selectedMaterial)
    }

    if (sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price)
    }

    if (sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price)
    }

    if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating)
    }

    return filtered
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy])

  const handleCategoryChange = (value) => {
    setSelectedCategory(value)
    if (value === 'All') {
      setSearchParams({})
      return
    }
    setSearchParams({ category: value })
  }

  return (
    <main ref={containerRef} className="bg-ivory pt-28 text-ink sm:pt-32">
      <section className="border-b border-mocha/10 bg-sand/35 pb-16 pt-6 lg:pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Shop all"
            title="Quiet luxury, made wearable"
            description="Discover demi-fine earrings, necklaces, huggies, and curated sets designed to layer beautifully and gift effortlessly."
            titleId="shop-title"
            descriptionId="shop-description"
            align="left"
            className="mx-0"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[18rem_minmax(0,1fr)]">
          <aside className="rounded-[2rem] border border-mocha/10 bg-white/70 p-6 shadow-card lg:sticky lg:top-28 lg:h-fit">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-mocha">Filters</p>
                <h2 className="mt-2 font-display text-3xl text-ink">Refine</h2>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All')
                  setSelectedPrice('All')
                  setSelectedMaterial('All')
                  setSortBy('featured')
                  setSearchParams({})
                }}
                className="text-xs uppercase tracking-[0.24em] text-mocha transition hover:text-ink"
              >
                Reset
              </button>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              <label className="grid gap-3 text-sm text-ink">
                <span className="text-xs uppercase tracking-[0.28em] text-mocha">Category</span>
                <select
                  value={selectedCategory}
                  onChange={(event) => handleCategoryChange(event.target.value)}
                  className="h-12 rounded-full border border-mocha/15 bg-ivory px-4 text-sm text-ink focus:border-gold focus:outline-none"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-3 text-sm text-ink">
                <span className="text-xs uppercase tracking-[0.28em] text-mocha">Price</span>
                <select
                  value={selectedPrice}
                  onChange={(event) => setSelectedPrice(event.target.value)}
                  className="h-12 rounded-full border border-mocha/15 bg-ivory px-4 text-sm text-ink focus:border-gold focus:outline-none"
                >
                  {priceRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-3 text-sm text-ink">
                <span className="text-xs uppercase tracking-[0.28em] text-mocha">Material</span>
                <select
                  value={selectedMaterial}
                  onChange={(event) => setSelectedMaterial(event.target.value)}
                  className="h-12 rounded-full border border-mocha/15 bg-ivory px-4 text-sm text-ink focus:border-gold focus:outline-none"
                >
                  {materials.map((material) => (
                    <option key={material} value={material}>
                      {material}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-3 text-sm text-ink">
                <span className="text-xs uppercase tracking-[0.28em] text-mocha">Sort</span>
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="h-12 rounded-full border border-mocha/15 bg-ivory px-4 text-sm text-ink focus:border-gold focus:outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </label>
            </div>
          </aside>

          <div>
            <div className="mb-8 flex flex-col gap-3 border-b border-mocha/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-mocha">Collection</p>
                <h3 className="mt-2 font-display text-3xl text-ink">Shop Velmora</h3>
              </div>
              <p className="text-sm text-mocha">{filteredProducts.length} pieces available</p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  scope="shop-grid"
                  sectionTitleId="shop-title"
                  sectionDescriptionId="shop-description"
                />
              ))}
            </div>

            {!filteredProducts.length ? (
              <div className="mt-8 rounded-[2rem] border border-mocha/10 bg-sand/35 p-8 text-center">
                <p className="text-sm uppercase tracking-[0.28em] text-mocha">No results</p>
                <h3 className="mt-3 font-display text-3xl text-ink">Try a different filter mix</h3>
                <p className="mt-4 text-sm leading-7 text-mocha">
                  Adjust category, price, or material to find a piece that fits your mood.
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  )
}
