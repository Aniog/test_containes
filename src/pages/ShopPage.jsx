import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/product/ProductCard'
import { filterOptions, products } from '../data/products'

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'rating-desc', label: 'Top Rated' },
]

const ShopPage = ({ onAddToCart }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [price, setPrice] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')
  const category = filterOptions.categories.includes(searchParams.get('category'))
    ? searchParams.get('category')
    : 'All'

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material
      const priceMatch =
        price === 'All' ||
        (price === 'Under $50' && product.price < 50) ||
        (price === '$50 to $80' && product.price >= 50 && product.price <= 80) ||
        (price === '$80+' && product.price > 80)

      return categoryMatch && materialMatch && priceMatch
    })

    switch (sort) {
      case 'price-asc':
        return [...filtered].sort((a, b) => a.price - b.price)
      case 'price-desc':
        return [...filtered].sort((a, b) => b.price - a.price)
      case 'rating-desc':
        return [...filtered].sort((a, b) => b.rating - a.rating)
      default:
        return filtered
    }
  }, [category, material, price, sort])

  return (
    <div className="bg-[var(--color-surface)] pt-28 text-[var(--color-foreground)] sm:pt-32">
      <section className="border-b border-[color:var(--color-border)] bg-[var(--color-surface-subtle)] py-12 sm:py-16">
        <div className="section-shell space-y-5">
          <p className="eyebrow">Velmora collection</p>
          <h1 className="font-display text-5xl sm:text-6xl">The jewelry wardrobe</h1>
          <p className="max-w-3xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
            Explore polished staples, thoughtful gifts, and sculptural demi-fine pieces designed for effortless daily wear.
          </p>
        </div>
      </section>

      <section className="section-space">
        <div className="section-shell grid gap-10 lg:grid-cols-[17rem_1fr] lg:items-start">
          <aside className="space-y-8 rounded-[2rem] border border-[color:var(--color-border)] bg-[var(--color-surface-subtle)] p-6 lg:sticky lg:top-28">
            <div>
              <h2 className="text-sm uppercase tracking-[0.24em] text-[var(--color-foreground)]">Filter</h2>
            </div>

            <div className="space-y-3">
              <label htmlFor="category-filter" className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Category
              </label>
              <select
                id="category-filter"
                value={category}
                onChange={(event) => {
                  const nextCategory = event.target.value
                  const nextParams = new URLSearchParams(searchParams)

                  if (nextCategory === 'All') {
                    nextParams.delete('category')
                  } else {
                    nextParams.set('category', nextCategory)
                  }

                  setSearchParams(nextParams)
                }}
                className="w-full rounded-full border border-[color:var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-foreground)] focus:border-[var(--color-accent)] focus:outline-none"
              >
                {filterOptions.categories.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-3">
              <label htmlFor="price-filter" className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Price
              </label>
              <select
                id="price-filter"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
                className="w-full rounded-full border border-[color:var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-foreground)] focus:border-[var(--color-accent)] focus:outline-none"
              >
                {filterOptions.price.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-3">
              <label htmlFor="material-filter" className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Material
              </label>
              <select
                id="material-filter"
                value={material}
                onChange={(event) => setMaterial(event.target.value)}
                className="w-full rounded-full border border-[color:var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-foreground)] focus:border-[var(--color-accent)] focus:outline-none"
              >
                {filterOptions.material.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </aside>

          <div className="space-y-8">
            <div className="flex flex-col gap-4 rounded-[2rem] border border-[color:var(--color-border)] bg-[var(--color-surface)] p-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm uppercase tracking-[0.22em] text-[var(--color-muted)]">
                {filteredProducts.length} pieces found
              </p>
              <div className="flex items-center gap-3">
                <label htmlFor="sort-filter" className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
                  Sort by
                </label>
                <select
                  id="sort-filter"
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                  className="rounded-full border border-[color:var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-foreground)] focus:border-[var(--color-accent)] focus:outline-none"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ShopPage
