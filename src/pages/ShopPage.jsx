import React, { useEffect, useMemo, useRef, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import ProductCard from '@/components/product/ProductCard.jsx'
import { products } from '@/data/products.js'
import strkImgConfig from '@/strk-img-config.json'

const categoryFilters = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const priceFilters = [
  { label: 'All prices', min: 0, max: Infinity },
  { label: '$30–$50', min: 30, max: 50 },
  { label: '$50–$80', min: 50, max: 80 },
  { label: '$80–$120', min: 80, max: 120 },
]
const materialFilters = ['All', '18K Gold Plated', 'Hypoallergenic']

const FilterGroup = ({ title, children }) => (
  <div className="border-b border-velmora-sand pb-7">
    <h3 className="text-xs font-bold uppercase tracking-nav text-velmora-ink">{title}</h3>
    <div className="mt-4 space-y-3">{children}</div>
  </div>
)

const ShopPage = () => {
  const pageRef = useRef(null)
  const [category, setCategory] = useState('All')
  const [priceRange, setPriceRange] = useState(priceFilters[0])
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    const nextProducts = products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category
      const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max
      const matchesMaterial = material === 'All' || product.material === material || product.care.includes(material)
      return matchesCategory && matchesPrice && matchesMaterial
    })

    if (sort === 'price-asc') {
      return [...nextProducts].sort((a, b) => a.price - b.price)
    }

    if (sort === 'price-desc') {
      return [...nextProducts].sort((a, b) => b.price - a.price)
    }

    if (sort === 'rating') {
      return [...nextProducts].sort((a, b) => b.rating - a.rating)
    }

    return nextProducts
  }, [category, priceRange, material, sort])

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })

    return () => window.cancelAnimationFrame(frame)
  }, [filteredProducts])

  const filterPanel = (
    <aside className="space-y-7 text-velmora-ink">
      <FilterGroup title="Category">
        {categoryFilters.map((item) => (
          <label key={item} className="flex cursor-pointer items-center gap-3 text-sm text-velmora-clay">
            <input
              type="radio"
              name="category"
              checked={category === item}
              onChange={() => setCategory(item)}
              className="h-4 w-4 accent-velmora-ink"
            />
            <span className={category === item ? 'font-semibold text-velmora-ink' : ''}>{item}</span>
          </label>
        ))}
      </FilterGroup>

      <FilterGroup title="Price">
        {priceFilters.map((item) => (
          <label key={item.label} className="flex cursor-pointer items-center gap-3 text-sm text-velmora-clay">
            <input
              type="radio"
              name="price"
              checked={priceRange.label === item.label}
              onChange={() => setPriceRange(item)}
              className="h-4 w-4 accent-velmora-ink"
            />
            <span className={priceRange.label === item.label ? 'font-semibold text-velmora-ink' : ''}>{item.label}</span>
          </label>
        ))}
      </FilterGroup>

      <FilterGroup title="Material">
        {materialFilters.map((item) => (
          <label key={item} className="flex cursor-pointer items-center gap-3 text-sm text-velmora-clay">
            <input
              type="radio"
              name="material"
              checked={material === item}
              onChange={() => setMaterial(item)}
              className="h-4 w-4 accent-velmora-ink"
            />
            <span className={material === item ? 'font-semibold text-velmora-ink' : ''}>{item}</span>
          </label>
        ))}
      </FilterGroup>
    </aside>
  )

  return (
    <main ref={pageRef} className="bg-velmora-porcelain pt-24 text-velmora-ink lg:pt-28">
      <section className="border-b border-velmora-sand bg-velmora-pearl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-[0.7rem] font-bold uppercase tracking-nav text-velmora-clay">The collection</p>
          <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="font-serif text-5xl leading-tight text-velmora-ink sm:text-7xl">Shop Velmora</h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-velmora-clay sm:text-base">
                Explore accessible demi-fine jewelry with warm gold finishes, refined shapes, and gift-ready details.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="inline-flex items-center gap-2 border border-velmora-sand bg-transparent px-4 py-3 text-xs font-bold uppercase tracking-nav text-velmora-ink transition hover:border-velmora-champagne md:hidden"
                onClick={() => setMobileFiltersOpen((open) => !open)}
              >
                <SlidersHorizontal className="h-4 w-4" /> Filters
              </button>
              <label className="sr-only" htmlFor="sort-products">Sort products</label>
              <select
                id="sort-products"
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="border border-velmora-sand bg-velmora-porcelain px-4 py-3 text-xs font-bold uppercase tracking-nav text-velmora-ink focus:border-velmora-champagne focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price, low to high</option>
                <option value="price-desc">Price, high to low</option>
                <option value="rating">Top rated</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
        {mobileFiltersOpen && (
          <div className="mb-8 border border-velmora-sand bg-velmora-pearl p-5 md:hidden">
            {filterPanel}
          </div>
        )}
        <div className="grid gap-10 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr]">
          <div className="hidden md:block">
            <div className="sticky top-28 border border-velmora-sand bg-velmora-pearl p-6 shadow-sm">
              <div className="mb-7 flex items-center justify-between border-b border-velmora-sand pb-4">
                <h2 className="text-xs font-bold uppercase tracking-nav text-velmora-ink">Filter</h2>
                <button
                  type="button"
                  className="bg-transparent p-0 text-[0.65rem] font-bold uppercase tracking-nav text-velmora-clay transition hover:text-velmora-ink"
                  onClick={() => {
                    setCategory('All')
                    setPriceRange(priceFilters[0])
                    setMaterial('All')
                  }}
                >
                  Reset
                </button>
              </div>
              {filterPanel}
            </div>
          </div>

          <div>
            <div className="mb-6 flex items-center justify-between border-b border-velmora-sand pb-4 text-xs font-bold uppercase tracking-nav text-velmora-clay">
              <span>{filteredProducts.length} pieces</span>
              <span>Free shipping on all orders</span>
            </div>
            {filteredProducts.length > 0 ? (
              <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
              </div>
            ) : (
              <div className="border border-velmora-sand bg-velmora-pearl p-10 text-center text-velmora-ink">
                <h3 className="font-serif text-3xl text-velmora-ink">No pieces found</h3>
                <p className="mt-3 text-sm leading-7 text-velmora-clay">Try adjusting the filters to discover more of the Velmora collection.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

export default ShopPage
