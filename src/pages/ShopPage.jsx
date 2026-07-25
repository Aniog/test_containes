import { SlidersHorizontal } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import ProductCard from '@/components/storefront/ProductCard.jsx'
import SectionHeading from '@/components/storefront/SectionHeading.jsx'
import { products } from '@/data/products.js'
import strkImgConfig from '@/strk-img-config.json'

const filterGroups = [
  { title: 'Category', key: 'category', options: ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets'] },
  { title: 'Price', key: 'price', options: ['All', 'Under $50', '$50–$80', '$80–$120'] },
  { title: 'Material', key: 'material', options: ['All', '18K Gold Plated', 'Gold Vermeil'] },
]

const sorters = {
  featured: (items) => items,
  priceLow: (items) => [...items].sort((a, b) => a.price - b.price),
  priceHigh: (items) => [...items].sort((a, b) => b.price - a.price),
  rating: (items) => [...items].sort((a, b) => b.rating - a.rating),
}

export default function ShopPage({ onAddToCart, onViewProduct }) {
  const [filters, setFilters] = useState({ category: 'All', price: 'All', material: 'All' })
  const [sort, setSort] = useState('featured')
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => window.cancelAnimationFrame(frameId)
  }, [filters.category, filters.price, filters.material, sort])

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const categoryMatch = filters.category === 'All' || product.category === filters.category
      const materialMatch = filters.material === 'All' || product.material === filters.material
      const priceMatch =
        filters.price === 'All' ||
        (filters.price === 'Under $50' && product.price < 50) ||
        (filters.price === '$50–$80' && product.price >= 50 && product.price <= 80) ||
        (filters.price === '$80–$120' && product.price >= 80 && product.price <= 120)

      return categoryMatch && materialMatch && priceMatch
    })

    return sorters[sort](filtered)
  }, [filters, sort])

  const setFilter = (key, value) => {
    setFilters((current) => ({ ...current, [key]: value }))
  }

  return (
    <main ref={containerRef} className="bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-8 md:px-8 md:pb-16">
        <SectionHeading
          eyebrow="The Collection"
          title="Demi-fine glow, edited"
          copy="Discover gold-plated jewelry for self-purchase, gifting, and the polished moments in between."
        />
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8 md:pb-28">
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[270px_1fr] lg:gap-10">
          <aside className="border border-velmora-champagne bg-velmora-pearl p-5 text-velmora-espresso shadow-soft lg:sticky lg:top-28 lg:self-start">
            <div className="mb-6 flex items-center justify-between border-b border-velmora-champagne pb-4">
              <h2 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-velmora-espresso">
                <SlidersHorizontal className="h-4 w-4 text-velmora-gold" />
                Filter
              </h2>
              <button
                type="button"
                onClick={() => setFilters({ category: 'All', price: 'All', material: 'All' })}
                className="text-xs font-bold uppercase tracking-[0.18em] text-velmora-bronze hover:text-velmora-espresso"
              >
                Reset
              </button>
            </div>

            <div className="grid gap-7">
              {filterGroups.map((group) => (
                <div key={group.key}>
                  <h3 className="font-serifDisplay text-2xl font-semibold text-velmora-espresso">{group.title}</h3>
                  <div className="mt-3 grid gap-2">
                    {group.options.map((option) => (
                      <label key={option} className="flex cursor-pointer items-center gap-3 text-sm text-velmora-ink/80">
                        <input
                          type="radio"
                          name={group.key}
                          checked={filters[group.key] === option}
                          onChange={() => setFilter(group.key, option)}
                          className="h-4 w-4 accent-velmora-gold"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <div>
            <div className="mb-6 flex flex-col gap-4 border-y border-velmora-champagne py-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-semibold text-velmora-ink/75">
                Showing {filteredProducts.length} of {products.length} pieces
              </p>
              <label className="flex items-center gap-3 text-sm font-semibold text-velmora-ink/75">
                Sort
                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                  className="border border-velmora-champagne bg-velmora-pearl px-4 py-3 text-sm text-velmora-espresso"
                >
                  <option value="featured">Featured</option>
                  <option value="priceLow">Price: Low to High</option>
                  <option value="priceHigh">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </label>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                    onViewProduct={onViewProduct}
                  />
                ))}
              </div>
            ) : (
              <div className="border border-velmora-champagne bg-velmora-pearl p-12 text-center text-velmora-espresso shadow-soft">
                <h3 className="font-serifDisplay text-4xl font-semibold">No pieces found</h3>
                <p className="mt-3 text-sm leading-6 text-velmora-ink/70">Try another filter combination to continue browsing.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
