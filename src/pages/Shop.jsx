import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { categories, materials, products } from '@/data/products.js'
import ProductGrid from '@/components/product/ProductGrid.jsx'

const priceOptions = ['Under $50', '$50 to $80', '$80 to $120']

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useRef(null)
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All')
  const [selectedMaterial, setSelectedMaterial] = useState('All')
  const [selectedPrice, setSelectedPrice] = useState('All')
  const [sortBy, setSortBy] = useState('featured')

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [selectedCategory, selectedMaterial, selectedPrice, sortBy])

  useEffect(() => {
    const category = searchParams.get('category') || 'All'
    setSelectedCategory(category)
  }, [searchParams])

  const filteredProducts = useMemo(() => {
    let nextProducts = [...products]

    if (selectedCategory !== 'All') {
      nextProducts = nextProducts.filter((product) => product.category === selectedCategory)
    }

    if (selectedMaterial !== 'All') {
      nextProducts = nextProducts.filter((product) => product.material === selectedMaterial)
    }

    if (selectedPrice === 'Under $50') {
      nextProducts = nextProducts.filter((product) => product.price < 50)
    }

    if (selectedPrice === '$50 to $80') {
      nextProducts = nextProducts.filter((product) => product.price >= 50 && product.price <= 80)
    }

    if (selectedPrice === '$80 to $120') {
      nextProducts = nextProducts.filter((product) => product.price > 80)
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
  }, [selectedCategory, selectedMaterial, selectedPrice, sortBy])

  const applyCategory = (category) => {
    setSelectedCategory(category)
    if (category === 'All') {
      setSearchParams({})
      return
    }
    setSearchParams({ category })
  }

  return (
    <div ref={containerRef} className="px-5 pb-16 pt-32 md:px-8 md:pb-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="max-w-3xl space-y-4 text-[var(--color-text-dark)]">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-muted-dark)]">
            Shop Velmora
          </p>
          <h1 className="font-serif text-5xl leading-none md:text-6xl">
            Curated demi-fine jewelry for gifting and everyday glow
          </h1>
          <p className="text-base leading-8 text-[var(--color-muted-dark)]">
            Browse softly statement-making earrings, necklaces, and huggies designed to layer beautifully and wear with ease.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
          <aside className="space-y-8 rounded-[2rem] border border-[var(--color-line-dark)] bg-[rgba(245,237,230,0.04)] p-6 text-[var(--color-text-dark)] h-fit">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-muted-dark)]">Category</p>
              <div className="flex flex-wrap gap-3">
                {['All', ...categories].map((category) => (
                  <button
                    key={category}
                    type="button"
                    className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.22em] transition ${
                      selectedCategory === category
                        ? 'border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-bg)]'
                        : 'border-[var(--color-line-dark)] text-[var(--color-text-dark)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'
                    }`}
                    onClick={() => applyCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-muted-dark)]">Price</p>
              <div className="space-y-3">
                {['All', ...priceOptions].map((option) => (
                  <label key={option} className="flex items-center gap-3 text-sm text-[var(--color-text-dark)]">
                    <input
                      type="radio"
                      name="price"
                      checked={selectedPrice === option}
                      onChange={() => setSelectedPrice(option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-muted-dark)]">Material</p>
              <div className="space-y-3">
                {['All', ...materials].map((option) => (
                  <label key={option} className="flex items-center gap-3 text-sm text-[var(--color-text-dark)]">
                    <input
                      type="radio"
                      name="material"
                      checked={selectedMaterial === option}
                      onChange={() => setSelectedMaterial(option)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          </aside>

          <div className="space-y-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-[var(--color-muted-dark)]">
                {filteredProducts.length} piece{filteredProducts.length === 1 ? '' : 's'}
              </p>
              <label className="flex items-center gap-3 text-sm text-[var(--color-text-dark)]">
                Sort
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="rounded-full border border-[var(--color-line-dark)] bg-transparent px-4 py-2 text-sm text-[var(--color-text-dark)]"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </label>
            </div>

            <ProductGrid items={filteredProducts} />
          </div>
        </div>
      </div>
    </div>
  )
}
