import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import ProductCard from '@/components/shared/ProductCard'
import { products } from '@/data/products'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const priceOptions = ['All', 'Under $50', '$50–$80', '$80–$120']
const materialOptions = ['All', '18K Gold Plated', 'Gold Vermeil']
const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Top Rated' },
]

const FilterGroup = ({ title, options, selected, onSelect }) => (
  <div className="border-b border-stone-200/70 pb-6">
    <h3 className="text-xs uppercase tracking-[0.3em] text-stone-500">{title}</h3>
    <div className="mt-4 flex flex-wrap gap-2">
      {options.map((option) => {
        const active = selected === option
        return (
          <button
            key={option}
            type="button"
            onClick={() => onSelect(option)}
            className={`rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
              active
                ? 'border-stone-950 bg-stone-950 text-stone-50'
                : 'border-stone-300 bg-white text-stone-700 hover:border-stone-500 hover:text-stone-950'
            }`}
          >
            {option}
          </button>
        )
      })}
    </div>
  </div>
)

const ShopPage = () => {
  const containerRef = useRef(null)
  const [params] = useSearchParams()
  const initialCategory = params.get('category') || 'All'
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedPrice, setSelectedPrice] = useState('All')
  const [selectedMaterial, setSelectedMaterial] = useState('All')
  const [sortBy, setSortBy] = useState('featured')

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategory !== 'All') {
      result = result.filter((product) => product.category === selectedCategory)
    }

    if (selectedPrice !== 'All') {
      result = result.filter((product) => product.priceRange === selectedPrice)
    }

    if (selectedMaterial !== 'All') {
      result = result.filter((product) => product.material === selectedMaterial)
    }

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating)
    }

    return result
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy])

  return (
    <div ref={containerRef} className="bg-stone-50 text-stone-950">
      <section className="border-b border-stone-200 bg-stone-100/80">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 lg:px-8 lg:py-24">
          <p className="text-xs uppercase tracking-[0.32em] text-stone-500">Collection</p>
          <h1 className="mt-4 font-serif text-5xl text-stone-950 md:text-6xl">The Shop</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-stone-600 md:text-lg">
            Explore polished demi-fine jewelry with warm finishes, refined scale, and premium detail.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[18rem_1fr]">
          <aside className="space-y-6 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_18px_40px_rgba(28,24,19,0.06)] lg:sticky lg:top-24 lg:h-fit">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-stone-500">Filters</p>
              <h2 className="mt-2 font-serif text-3xl text-stone-950">Refine the edit</h2>
            </div>
            <FilterGroup
              title="Category"
              options={categoryOptions}
              selected={selectedCategory}
              onSelect={setSelectedCategory}
            />
            <FilterGroup
              title="Price"
              options={priceOptions}
              selected={selectedPrice}
              onSelect={setSelectedPrice}
            />
            <FilterGroup
              title="Material"
              options={materialOptions}
              selected={selectedMaterial}
              onSelect={setSelectedMaterial}
            />
          </aside>

          <div>
            <div className="mb-6 flex flex-col gap-4 rounded-[1.5rem] border border-stone-200 bg-white p-4 shadow-[0_18px_40px_rgba(28,24,19,0.05)] sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-stone-600">{filteredProducts.length} pieces</p>
              <label className="flex items-center gap-3 text-sm text-stone-600">
                Sort by
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm text-stone-900 focus:border-stone-950 focus:outline-none"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ShopPage
