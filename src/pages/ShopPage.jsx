import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/products/ProductCard'
import SectionHeader from '@/components/shared/SectionHeader'
import { materialFilters, products, sortOptions } from '@/data/store'

const priceFilters = ['Under $50', '$50 to $80', '$80 to $120']

function matchesPrice(price, label) {
  if (label === 'Under $50') return price < 50
  if (label === '$50 to $80') return price >= 50 && price <= 80
  if (label === '$80 to $120') return price > 80 && price <= 120
  return true
}

const ShopPage = ({ onAddToCart }) => {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedPrice, setSelectedPrice] = useState('All')
  const [selectedMaterial, setSelectedMaterial] = useState('All')
  const [sortBy, setSortBy] = useState('featured')

  const categories = useMemo(
    () => ['All', ...new Set(products.map((product) => product.category))],
    [],
  )

  useEffect(() => {
    setSelectedCategory(initialCategory)
  }, [initialCategory])

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory
      const priceMatch = selectedPrice === 'All' || matchesPrice(product.price, selectedPrice)
      const materialMatch =
        selectedMaterial === 'All' ||
        product.material === selectedMaterial ||
        product.badge === selectedMaterial

      return categoryMatch && priceMatch && materialMatch
    })

    if (sortBy === 'price-asc') {
      return [...filtered].sort((a, b) => a.price - b.price)
    }

    if (sortBy === 'price-desc') {
      return [...filtered].sort((a, b) => b.price - a.price)
    }

    if (sortBy === 'rating') {
      return [...filtered].sort((a, b) => b.rating - a.rating)
    }

    return filtered
  }, [selectedCategory, selectedPrice, selectedMaterial, sortBy])

  const FilterGroup = ({ title, options, value, onChange }) => (
    <div className="space-y-4 border-b border-stone-200/80 pb-6">
      <p className="text-xs uppercase tracking-[0.32em] text-brand-gold">{title}</p>
      <div className="space-y-3">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`flex w-full items-center justify-between text-left text-sm transition ${
              value === option ? 'text-brand-text' : 'text-stone-500 hover:text-brand-text'
            }`}
          >
            <span>{option}</span>
            <span
              className={`h-2.5 w-2.5 rounded-full ${
                value === option ? 'bg-brand-gold' : 'bg-stone-300'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  )

  return (
    <main className="bg-brand-canvas px-5 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeader
          eyebrow="Shop Velmora"
          title="An elevated edit of everyday demi-fine jewelry"
          description="Filter by category, price, or material and discover warm gold pieces designed to layer, gift, and wear on repeat."
        />

        <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="rounded-[2rem] border border-stone-200/80 bg-white/70 p-6 shadow-card backdrop-blur-sm lg:sticky lg:top-28 lg:h-fit">
            <div className="space-y-6">
              <FilterGroup
                title="Category"
                options={categories}
                value={selectedCategory}
                onChange={setSelectedCategory}
              />
              <FilterGroup
                title="Price"
                options={['All', ...priceFilters]}
                value={selectedPrice}
                onChange={setSelectedPrice}
              />
              <FilterGroup
                title="Material"
                options={['All', ...materialFilters]}
                value={selectedMaterial}
                onChange={setSelectedMaterial}
              />
            </div>
          </aside>

          <section className="space-y-6">
            <div className="flex flex-col gap-4 rounded-[2rem] border border-stone-200/80 bg-white/70 p-5 shadow-card backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-stone-600">
                Showing <span className="font-medium text-brand-text">{filteredProducts.length}</span> refined pieces
              </p>
              <label className="flex items-center gap-3 text-sm text-stone-600">
                <span>Sort by</span>
                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="rounded-full border border-stone-200 bg-brand-canvas px-4 py-2 text-sm text-brand-text focus:border-brand-gold focus:outline-none"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

export default ShopPage
