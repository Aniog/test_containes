import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ChevronDown, SlidersHorizontal } from 'lucide-react'
import ProductCard from '@/components/ProductCard'
import SectionHeading from '@/components/SectionHeading'
import { products } from '@/data/products'
import { useImageLoader } from '@/hooks/useImageLoader'

const availableCategories = [...new Set(products.map((product) => product.category))]

const filterGroups = {
  category: ['All', ...availableCategories],
  price: ['All', 'Under $50', '$50–$80', '$80+'],
  material: ['All', '18K Gold Plated', 'Gold Vermeil'],
}

function normalizeCategory(category) {
  return filterGroups.category.includes(category) ? category : 'All'
}

function matchesPrice(product, priceFilter) {
  if (priceFilter === 'Under $50') return product.price < 50
  if (priceFilter === '$50–$80') return product.price >= 50 && product.price <= 80
  if (priceFilter === '$80+') return product.price > 80
  return true
}

function sortProducts(list, sortBy) {
  const cloned = [...list]

  if (sortBy === 'price-asc') return cloned.sort((a, b) => a.price - b.price)
  if (sortBy === 'price-desc') return cloned.sort((a, b) => b.price - a.price)
  if (sortBy === 'rating') return cloned.sort((a, b) => b.rating - a.rating)

  return cloned
}

function FilterGroup({ label, options, value, onChange }) {
  return (
    <div className="space-y-4 border-b border-velmora-line/70 pb-6">
      <h3 className="text-xs uppercase tracking-eyebrow text-velmora-ink">{label}</h3>
      <div className="space-y-3">
        {options.map((option) => (
          <label key={option} className="flex items-center gap-3 text-sm text-velmora-mute">
            <input
              type="radio"
              name={label}
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
              className="h-4 w-4 border-velmora-line text-velmora-gold focus:ring-velmora-gold"
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

function ShopPage({ onAddToCart }) {
  const containerRef = useImageLoader([])
  const [searchParams, setSearchParams] = useSearchParams()
  const [showFilters, setShowFilters] = useState(false)
  const [priceFilter, setPriceFilter] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sortBy, setSortBy] = useState('featured')
  const category = normalizeCategory(searchParams.get('category'))

  const filteredProducts = useMemo(() => {
    const matches = products.filter((product) => {
      const categoryMatch = category === 'All' ? true : product.category === category
      const materialMatch = material === 'All' ? true : product.material === material
      return categoryMatch && materialMatch && matchesPrice(product, priceFilter)
    })

    return sortProducts(matches, sortBy)
  }, [category, material, priceFilter, sortBy])

  useEffect(() => {
    const requestedCategory = searchParams.get('category')
    const normalizedCategory = normalizeCategory(requestedCategory)

    if (requestedCategory && normalizedCategory !== requestedCategory) {
      setSearchParams((currentParams) => {
        const nextParams = new URLSearchParams(currentParams)
        nextParams.delete('category')
        return nextParams
      }, { replace: true })
    }
  }, [searchParams, setSearchParams])

  return (
    <main ref={containerRef} className="bg-velmora-ivory pt-28 text-velmora-ink md:pt-32">
      <section className="mx-auto max-w-7xl px-5 pb-10 pt-8 md:px-8 lg:px-10">
        <div className="grid gap-5 rounded-[2.5rem] bg-velmora-sand px-6 py-8 md:grid-cols-[1.1fr_0.9fr] md:px-8">
          <SectionHeading
            eyebrow="Collection"
            title="Quiet statement pieces for every day"
            description="A refined storefront of demi-fine earrings, necklaces, and giftable sets designed to layer with ease."
          />
          <div className="flex items-end justify-start md:justify-end">
            <div className="text-sm leading-7 text-velmora-mute">
              <p className="text-xs uppercase tracking-eyebrow text-velmora-gold-deep">
                Filters available
              </p>
              <p>{filteredProducts.length} pieces shown</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-24 lg:px-10">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={() => setShowFilters((current) => !current)}
            className="inline-flex items-center gap-2 rounded-full border border-velmora-line bg-velmora-sand px-5 py-3 text-xs uppercase tracking-product text-velmora-ink md:hidden"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>

          <div className="ml-auto flex items-center gap-3 rounded-full border border-velmora-line bg-white px-4 py-3 text-sm text-velmora-mute">
            <span className="text-xs uppercase tracking-product text-velmora-ink">Sort</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="appearance-none bg-transparent pr-7 text-sm text-velmora-ink focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to high</option>
                <option value="price-desc">Price: High to low</option>
                <option value="rating">Top rated</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-velmora-mute" />
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside
            className={`${showFilters ? 'block' : 'hidden'} rounded-[2rem] border border-velmora-line/70 bg-white p-6 shadow-[0_18px_50px_rgba(36,27,24,0.06)] md:block`}
          >
            <div className="space-y-6">
              <FilterGroup
                label="Category"
                options={filterGroups.category}
                value={category}
                onChange={(nextCategory) => {
                  setSearchParams((currentParams) => {
                    const nextParams = new URLSearchParams(currentParams)

                    if (nextCategory === 'All') {
                      nextParams.delete('category')
                    } else {
                      nextParams.set('category', nextCategory)
                    }

                    return nextParams
                  }, { replace: true })
                }}
              />
              <FilterGroup
                label="Price"
                options={filterGroups.price}
                value={priceFilter}
                onChange={setPriceFilter}
              />
              <FilterGroup
                label="Material"
                options={filterGroups.material}
                value={material}
                onChange={setMaterial}
              />
            </div>
          </aside>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={(item, quantity = 1, variant = item.variants[0], imageSrc = '') => onAddToCart(item, quantity, variant, imageSrc)}
                priority={index < 2}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default ShopPage
