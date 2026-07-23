import { useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/store/ProductCard.jsx'
import SiteFooter from '@/components/store/SiteFooter.jsx'
import { collectionFilters, products } from '@/data/storefront.js'
import useStrkImages from '@/hooks/useStrkImages.jsx'
import { getPriceBand } from '@/lib/format.js'

const sortOptions = {
  featured: (items) => items,
  'price-low': (items) => [...items].sort((a, b) => a.price - b.price),
  'price-high': (items) => [...items].sort((a, b) => b.price - a.price),
  rating: (items) => [...items].sort((a, b) => b.rating - a.rating),
}

const Shop = () => {
  const containerRef = useRef(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const [sortBy, setSortBy] = useState('featured')
  const selectedCategory = searchParams.get('category') || 'all'
  const [selectedPrice, setSelectedPrice] = useState('all')
  const [selectedMaterial, setSelectedMaterial] = useState('all')

  useStrkImages(containerRef, [selectedCategory, selectedPrice, selectedMaterial, sortBy])

  const filteredProducts = useMemo(() => {
    const base = products.filter((product) => {
      const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory
      const priceMatch = selectedPrice === 'all' || getPriceBand(product.price) === selectedPrice
      const materialMatch =
        selectedMaterial === 'all' ||
        product.material === selectedMaterial ||
        (selectedMaterial === 'Hypoallergenic' && product.material.includes('Gold'))

      return categoryMatch && priceMatch && materialMatch
    })

    return sortOptions[sortBy](base)
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy])

  const updateCategory = (category) => {
    const nextParams = new URLSearchParams(searchParams)

    if (category === 'all') {
      nextParams.delete('category')
    } else {
      nextParams.set('category', category)
    }

    setSearchParams(nextParams)
  }

  return (
    <div ref={containerRef} className="bg-velmora-porcelain pt-20 text-velmora-noir">
      <section className="section-wrap py-14 md:py-16">
        <div className="max-w-3xl space-y-4">
          <p className="eyebrow">Collection</p>
          <h1 className="text-5xl leading-[0.95] text-velmora-noir md:text-6xl">
            Modern demi-fine jewelry for every day and every gift.
          </h1>
          <p className="max-w-2xl text-base leading-8 text-velmora-noir/72">
            Explore warm gold finishes, softly sculpted silhouettes, and gift-worthy sets made to feel elevated without being out of reach.
          </p>
        </div>
      </section>

      <section className="section-wrap pb-16 md:pb-24">
        <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-10">
          <aside className="surface-panel h-fit p-6 md:p-7">
            <div className="space-y-8">
              <div>
                <h2 className="text-xs uppercase tracking-brand text-velmora-rosewood">Category</h2>
                <div className="mt-4 flex flex-wrap gap-3 lg:flex-col lg:items-start">
                  <button
                    type="button"
                    className={`rounded-full border px-4 py-2 text-xs uppercase tracking-brand ${
                      selectedCategory === 'all'
                        ? 'border-velmora-noir bg-velmora-noir text-velmora-ivory'
                        : 'border-velmora-mist/40 bg-velmora-ivory text-velmora-noir'
                    }`}
                    onClick={() => updateCategory('all')}
                  >
                    All jewelry
                  </button>
                  {collectionFilters.category.map((item) => (
                    <button
                      key={item}
                      type="button"
                      className={`rounded-full border px-4 py-2 text-xs uppercase tracking-brand ${
                        selectedCategory === item
                          ? 'border-velmora-noir bg-velmora-noir text-velmora-ivory'
                          : 'border-velmora-mist/40 bg-velmora-ivory text-velmora-noir'
                      }`}
                      onClick={() => updateCategory(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xs uppercase tracking-brand text-velmora-rosewood">Price</h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <button
                    type="button"
                    className={`rounded-full border px-4 py-2 text-xs uppercase tracking-brand ${
                      selectedPrice === 'all'
                        ? 'border-velmora-noir bg-velmora-noir text-velmora-ivory'
                        : 'border-velmora-mist/40 bg-velmora-ivory text-velmora-noir'
                    }`}
                    onClick={() => setSelectedPrice('all')}
                  >
                    All prices
                  </button>
                  {collectionFilters.price.map((item) => (
                    <button
                      key={item}
                      type="button"
                      className={`rounded-full border px-4 py-2 text-xs uppercase tracking-brand ${
                        selectedPrice === item
                          ? 'border-velmora-noir bg-velmora-noir text-velmora-ivory'
                          : 'border-velmora-mist/40 bg-velmora-ivory text-velmora-noir'
                      }`}
                      onClick={() => setSelectedPrice(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xs uppercase tracking-brand text-velmora-rosewood">Material</h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  <button
                    type="button"
                    className={`rounded-full border px-4 py-2 text-xs uppercase tracking-brand ${
                      selectedMaterial === 'all'
                        ? 'border-velmora-noir bg-velmora-noir text-velmora-ivory'
                        : 'border-velmora-mist/40 bg-velmora-ivory text-velmora-noir'
                    }`}
                    onClick={() => setSelectedMaterial('all')}
                  >
                    All materials
                  </button>
                  {collectionFilters.material.map((item) => (
                    <button
                      key={item}
                      type="button"
                      className={`rounded-full border px-4 py-2 text-xs uppercase tracking-brand ${
                        selectedMaterial === item
                          ? 'border-velmora-noir bg-velmora-noir text-velmora-ivory'
                          : 'border-velmora-mist/40 bg-velmora-ivory text-velmora-noir'
                      }`}
                      onClick={() => setSelectedMaterial(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <div>
            <div className="mb-6 flex flex-col gap-4 rounded-soft border border-velmora-mist/25 bg-velmora-ivory px-5 py-4 text-velmora-noir shadow-soft sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-velmora-noir/72">
                Showing <span className="font-medium text-velmora-noir">{filteredProducts.length}</span> refined styles
              </p>
              <label className="flex items-center gap-3 text-sm text-velmora-noir/72">
                Sort by
                <select
                  className="rounded-full border border-velmora-mist/40 bg-velmora-ivory px-4 py-2 text-sm text-velmora-noir outline-none"
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </label>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} idPrefix={`shop-grid-${index}`} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

export default Shop
