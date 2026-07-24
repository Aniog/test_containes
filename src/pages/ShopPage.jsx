import React from 'react'
import ProductGrid from '@/components/shop/ProductGrid'
import SortDropdown from '@/components/shop/SortDropdown'
import { products } from '@/data/products'
import { useStrkImages } from '@/lib/useStrkImages'

const sortOptions = {
  featured: () => [...products],
  low: () => [...products].sort((a, b) => a.price - b.price),
  high: () => [...products].sort((a, b) => b.price - a.price),
}

const sortLabels = [
  { value: 'featured', label: 'Featured' },
  { value: 'low', label: 'Price: Low to High' },
  { value: 'high', label: 'Price: High to Low' },
]

export default function ShopPage() {
  const [selectedCategories, setSelectedCategories] = React.useState([])
  const [selectedPrice, setSelectedPrice] = React.useState([])
  const [selectedMaterial, setSelectedMaterial] = React.useState([])
  const [sortBy, setSortBy] = React.useState('featured')
  const imageRef = useStrkImages([selectedCategories.join(','), selectedPrice.join(','), selectedMaterial.join(','), sortBy])

  const toggleValue = (value, list, setList) => {
    setList((current) =>
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value],
    )
  }

  const filteredProducts = sortOptions[sortBy]().filter((product) => {
    const categoryMatch =
      selectedCategories.length === 0 || selectedCategories.includes(product.category)
    const priceMatch =
      selectedPrice.length === 0 || selectedPrice.includes(product.priceBand)
    const materialMatch =
      selectedMaterial.length === 0 || selectedMaterial.includes(product.material)

    return categoryMatch && priceMatch && materialMatch
  })

  const filters = {
    Category: ['Earrings', 'Necklaces', 'Huggies', 'Sets'],
    Price: ['Under $50', '$50 - $80', '$80 - $120'],
    Material: ['18K Gold Plated', 'Gold Vermeil'],
  }

  return (
    <div ref={imageRef} className="bg-ivory text-ink">
      <section className="border-b border-line bg-noir px-5 py-14 text-cream md:px-8 md:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">The Collection</p>
          <h1 id="shop-title" className="mt-3 font-display text-5xl text-cream md:text-6xl">
            Quiet statements, daily shine.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-cream/70">
            Sculptural earrings, luminous necklaces, and polished huggies designed to feel gift-worthy every day.
          </p>
        </div>
      </section>

      <section className="px-5 py-10 md:px-8 md:py-16 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[280px_1fr]">
          <aside className="h-fit rounded-[1.8rem] border border-line bg-cream p-6 text-noir shadow-[0_16px_40px_rgba(18,13,11,0.08)]">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-3xl text-noir">Filters</h2>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategories([])
                  setSelectedPrice([])
                  setSelectedMaterial([])
                }}
                className="bg-transparent p-0 text-[11px] uppercase tracking-[0.28em] text-noir/80 transition hover:text-gold"
              >
                Reset
              </button>
            </div>

            <div className="mt-8 space-y-8">
              {Object.entries(filters).map(([group, options]) => {
                const selected =
                  group === 'Category'
                    ? selectedCategories
                    : group === 'Price'
                      ? selectedPrice
                      : selectedMaterial
                const setter =
                  group === 'Category'
                    ? setSelectedCategories
                    : group === 'Price'
                      ? setSelectedPrice
                      : setSelectedMaterial

                return (
                  <div key={group} className="border-t border-line pt-6 first:border-t-0 first:pt-0">
                    <h3 className="text-xs uppercase tracking-[0.28em] text-noir/85">{group}</h3>
                    <div className="mt-4 space-y-3">
                      {options.map((option) => (
                        <label key={option} className="flex items-center gap-3 text-sm font-medium text-noir">
                          <input
                            type="checkbox"
                            checked={selected.includes(option)}
                            onChange={() => toggleValue(option, selected, setter)}
                            className="h-4 w-4 rounded border-line text-gold focus:ring-gold"
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </aside>

          <div>
            <div className="mb-7 flex flex-col gap-4 rounded-[1.6rem] border border-line bg-cream px-5 py-4 text-noir shadow-[0_16px_40px_rgba(18,13,11,0.06)] sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs uppercase tracking-[0.28em] text-noir/80">
                {filteredProducts.length} pieces available
              </p>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-noir/80">
                <span>Sort by</span>
                <SortDropdown value={sortBy} options={sortLabels} onChange={setSortBy} />
              </div>
            </div>

            <ProductGrid products={filteredProducts} context="shop-grid" sectionTitleId="shop-title" />
          </div>
        </div>
      </section>
    </div>
  )
}
