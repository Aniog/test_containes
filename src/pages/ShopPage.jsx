import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/shop/ProductCard'
import { categories, materials, products, sortOptions } from '@/data/products'

const priceRanges = [
  { label: 'Under $50', min: 0, max: 49 },
  { label: '$50 – $80', min: 50, max: 80 },
  { label: '$80+', min: 81, max: Infinity },
]

const ShopPage = () => {
  const [searchParams] = useSearchParams()
  const requestedCategory = searchParams.get('category') || 'All'
  const [selectedCategory, setSelectedCategory] = useState(
    categories.includes(requestedCategory) ? requestedCategory : 'All',
  )
  const [selectedMaterial, setSelectedMaterial] = useState('All')
  const [selectedPrice, setSelectedPrice] = useState('All')
  const [sort, setSort] = useState('featured')

  useEffect(() => {
    setSelectedCategory(categories.includes(requestedCategory) ? requestedCategory : 'All')
  }, [requestedCategory])

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (selectedCategory !== 'All') {
      result = result.filter((product) => product.category === selectedCategory)
    }

    if (selectedMaterial !== 'All') {
      result = result.filter((product) => product.material === selectedMaterial)
    }

    if (selectedPrice !== 'All') {
      const range = priceRanges.find((item) => item.label === selectedPrice)
      result = result.filter(
        (product) => product.price >= range.min && product.price <= range.max,
      )
    }

    if (sort === 'price-low') {
      result.sort((a, b) => a.price - b.price)
    }

    if (sort === 'price-high') {
      result.sort((a, b) => b.price - a.price)
    }

    if (sort === 'rating') {
      result.sort((a, b) => b.rating - a.rating)
    }

    return result
  }, [selectedCategory, selectedMaterial, selectedPrice, sort])

  return (
    <main className="px-5 pb-24 pt-32 md:px-8 lg:px-12">
      <section className="mx-auto max-w-7xl space-y-10">
        <div className="space-y-5 border-b border-[var(--color-border-subtle)] pb-8">
          <p className="text-xs uppercase tracking-[0.38em] text-[var(--color-accent)]">Shop Velmora</p>
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl space-y-4">
              <h1 className="font-serif-display text-5xl leading-none text-[var(--color-text-primary)] md:text-6xl">
                Elevated demi-fine pieces for layering, gifting, and everyday glow.
              </h1>
              <p className="text-base leading-8 text-[var(--color-text-secondary)]">
                Explore our edit of earrings, necklaces, huggies, and giftable sets — all designed to feel polished, warm, and easy to wear.
              </p>
            </div>
            <div className="w-full max-w-xs">
              <label className="mb-2 block text-xs uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">
                Sort by
              </label>
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="w-full border border-[var(--color-border-subtle)] bg-[var(--color-card)] px-4 py-3 text-sm text-[var(--color-text-primary)] focus:outline-none"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
          <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start">
            <FilterBlock
              title="Category"
              options={categories}
              value={selectedCategory}
              onChange={setSelectedCategory}
            />
            <FilterBlock
              title="Price"
              options={['All', ...priceRanges.map((item) => item.label)]}
              value={selectedPrice}
              onChange={setSelectedPrice}
            />
            <FilterBlock
              title="Material"
              options={['All', ...materials]}
              value={selectedMaterial}
              onChange={setSelectedMaterial}
            />
          </aside>

          <section className="space-y-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-text-secondary)]">
              {filteredProducts.length} styles
            </p>
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}

const FilterBlock = ({ title, options, value, onChange }) => {
  return (
    <div className="border border-[var(--color-border-subtle)] bg-[var(--color-card)] px-5 py-5 shadow-[var(--shadow-soft)]">
      <h2 className="text-xs uppercase tracking-[0.34em] text-[var(--color-accent)]">{title}</h2>
      <div className="mt-5 flex flex-wrap gap-3 lg:flex-col lg:items-start">
        {options.map((option) => {
          const active = value === option

          return (
            <button
              key={option}
              type="button"
              onClick={() => onChange(option)}
              className={`border px-4 py-3 text-xs uppercase tracking-[0.26em] transition ${active ? 'border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-ink)]' : 'border-[var(--color-border-subtle)] text-[var(--color-text-primary)] hover:border-[var(--color-accent)]'}`}
            >
              {option}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default ShopPage
