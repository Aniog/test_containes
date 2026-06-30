import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/store/ProductCard'
import SectionHeading from '@/components/common/SectionHeading'
import { products, sortOptions } from '@/data/products'
import { useStrkImages } from '@/hooks/useStrkImages'

const categoryFilters = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const materialFilters = ['All', '18K Gold Plated', 'Gold Vermeil']
const priceFilters = [
  { label: 'All Prices', value: 'all' },
  { label: '$30–$50', value: '30-50' },
  { label: '$51–$80', value: '51-80' },
  { label: '$81–$120', value: '81-120' },
]

const ShopPage = () => {
  const containerRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedMaterial, setSelectedMaterial] = useState('All')
  const [selectedPrice, setSelectedPrice] = useState('all')
  const [sortBy, setSortBy] = useState('featured')

  useStrkImages(containerRef, [selectedCategory, selectedMaterial, selectedPrice, sortBy])

  useEffect(() => {
    const categoryFromQuery = searchParams.get('category') || 'All'
    setSelectedCategory(categoryFromQuery)
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    let results = [...products]

    if (selectedCategory !== 'All') {
      results = results.filter((product) => product.category === selectedCategory)
    }

    if (selectedMaterial !== 'All') {
      results = results.filter((product) => product.material === selectedMaterial)
    }

    if (selectedPrice !== 'all') {
      const [min, max] = selectedPrice.split('-').map(Number)
      results = results.filter((product) => product.price >= min && product.price <= max)
    }

    if (sortBy === 'price-asc') {
      results.sort((a, b) => a.price - b.price)
    }

    if (sortBy === 'price-desc') {
      results.sort((a, b) => b.price - a.price)
    }

    if (sortBy === 'rating-desc') {
      results.sort((a, b) => b.rating - a.rating)
    }

    return results
  }, [selectedCategory, selectedMaterial, selectedPrice, sortBy])

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)

    setSearchParams((currentParams) => {
      const nextParams = new URLSearchParams(currentParams)

      if (category === 'All') {
        nextParams.delete('category')
      } else {
        nextParams.set('category', category)
      }

      return nextParams
    })
  }

  return (
    <div ref={containerRef} className="bg-brand-ivory pt-28 text-brand-ink md:pt-32">
      <section className="mx-auto max-w-7xl px-5 pb-10 md:px-8 lg:px-10">
        <div className="overflow-hidden rounded-[2rem] bg-brand-ink text-brand-ivory">
          <div
            className="min-h-[320px] bg-[linear-gradient(110deg,rgba(33,22,17,0.88),rgba(33,22,17,0.55),rgba(33,22,17,0.75))] px-6 py-16 md:px-10 md:py-20"
            data-strk-bg-id="velmora-shop-hero-29dd8c"
            data-strk-bg="[shop-hero-desc] [shop-hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
          >
            <div className="max-w-2xl space-y-5">
              <p className="text-xs uppercase tracking-[0.34em] text-brand-ivory/75">Collection</p>
              <h1 id="shop-hero-title" className="font-display text-5xl leading-none md:text-6xl">
                Quiet statement pieces for every day and every gift table
              </h1>
              <p id="shop-hero-desc" className="text-lg leading-8 text-brand-ivory/80">
                Browse sculptural earrings, warm layered necklaces, and polished huggies designed to feel premium and easy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 pb-20 md:px-8 lg:grid-cols-[280px_1fr] lg:px-10 lg:pb-28">
        <aside className="h-fit rounded-[2rem] border border-brand-border bg-brand-pearl p-6 shadow-soft lg:sticky lg:top-28">
          <div className="space-y-8">
            <SectionHeading eyebrow="Filters" title="Refine" description="Choose a category, material, and price band." />

            <div className="space-y-4 border-t border-brand-border pt-6">
              <p className="text-xs uppercase tracking-[0.32em] text-brand-muted">Category</p>
              <div className="flex flex-wrap gap-2">
                {categoryFilters.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => handleCategoryChange(category)}
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                      selectedCategory === category
                        ? 'border-brand-gold bg-brand-gold text-brand-ink'
                        : 'border-brand-border bg-white text-brand-ink hover:border-brand-gold'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4 border-t border-brand-border pt-6">
              <p className="text-xs uppercase tracking-[0.32em] text-brand-muted">Material</p>
              <div className="space-y-3">
                {materialFilters.map((material) => (
                  <label key={material} className="flex items-center justify-between gap-3 text-sm text-brand-ink">
                    <span>{material}</span>
                    <input
                      type="radio"
                      name="material"
                      checked={selectedMaterial === material}
                      onChange={() => setSelectedMaterial(material)}
                      className="h-4 w-4 accent-brand-gold-deep"
                    />
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-4 border-t border-brand-border pt-6">
              <p className="text-xs uppercase tracking-[0.32em] text-brand-muted">Price</p>
              <div className="space-y-3">
                {priceFilters.map((price) => (
                  <label key={price.value} className="flex items-center justify-between gap-3 text-sm text-brand-ink">
                    <span>{price.label}</span>
                    <input
                      type="radio"
                      name="price"
                      checked={selectedPrice === price.value}
                      onChange={() => setSelectedPrice(price.value)}
                      className="h-4 w-4 accent-brand-gold-deep"
                    />
                  </label>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <div className="space-y-8">
          <div className="flex flex-col gap-5 rounded-[2rem] border border-brand-border bg-white/80 p-5 shadow-soft md:flex-row md:items-end md:justify-between md:p-6">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-brand-muted">Velmora Edit</p>
              <h2 className="mt-2 font-display text-4xl text-brand-ink">Shop all jewelry</h2>
              <p className="mt-2 text-sm leading-7 text-brand-muted">
                {filteredProducts.length} piece{filteredProducts.length === 1 ? '' : 's'} available.
              </p>
            </div>
            <label className="flex flex-col gap-2 text-sm text-brand-ink">
              <span className="uppercase tracking-[0.24em] text-brand-muted">Sort</span>
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="h-12 rounded-full border border-brand-border bg-brand-pearl px-5 text-brand-ink outline-none focus:border-brand-gold"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ShopPage
