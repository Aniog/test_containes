import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/common/ProductCard'
import SectionHeading from '@/components/common/SectionHeading'
import FilterSidebar from '@/components/shop/FilterSidebar'
import { useCart } from '@/context/CartContext'
import { categoryFilters, products, toneOptions } from '@/data/store'
import { useStrkImages } from '@/hooks/useStrkImages'

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Top Rated', value: 'rating-desc' },
]

const matchesPrice = (product, value) => {
  if (value === 'all') return true
  if (value === 'under-50') return product.price < 50
  if (value === '50-80') return product.price >= 50 && product.price <= 80
  if (value === '80-plus') return product.price > 80
  return true
}

const getCategoryFromParams = (searchParams) => {
  const category = searchParams.get('category')
  return categoryFilters.includes(category) ? category : 'All'
}

const Shop = () => {
  const { addItem, openCart } = useCart()
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryFromParams = getCategoryFromParams(searchParams)
  const [filters, setFilters] = useState(() => ({
    category: categoryFromParams,
    price: 'all',
    materials: [],
  }))
  const [sort, setSort] = useState('featured')
  const containerRef = useStrkImages([filters.category, filters.price, filters.materials.join(','), sort])

  useEffect(() => {
    setFilters((current) =>
      current.category === categoryFromParams
        ? current
        : { ...current, category: categoryFromParams },
    )
  }, [categoryFromParams])

  useEffect(() => {
    if (filters.category === categoryFromParams) {
      return
    }

    const nextSearchParams = new URLSearchParams(searchParams)

    if (filters.category === 'All') {
      nextSearchParams.delete('category')
    } else {
      nextSearchParams.set('category', filters.category)
    }

    setSearchParams(nextSearchParams, { replace: true })
  }, [categoryFromParams, filters.category, searchParams, setSearchParams])

  const filteredProducts = useMemo(() => {
    const nextProducts = products
      .filter((product) =>
        filters.category === 'All' ? true : product.category === filters.category,
      )
      .filter((product) => matchesPrice(product, filters.price))
      .filter((product) =>
        filters.materials.length === 0
          ? true
          : filters.materials.includes(product.material),
      )

    switch (sort) {
      case 'price-asc':
        return [...nextProducts].sort((a, b) => a.price - b.price)
      case 'price-desc':
        return [...nextProducts].sort((a, b) => b.price - a.price)
      case 'rating-desc':
        return [...nextProducts].sort((a, b) => b.rating - a.rating)
      default:
        return nextProducts
    }
  }, [filters.category, filters.materials, filters.price, sort])

  const handleAddToCart = (product) => {
    addItem(product, { quantity: 1, variant: toneOptions[0] })
    openCart()
  }

  const resetFilters = () => {
    setFilters({
      category: 'All',
      price: 'all',
      materials: [],
    })
    setSort('featured')
  }

  return (
    <div ref={containerRef} className="bg-velmora-pearl pt-28 md:pt-36">
      <section className="page-shell pb-10">
        <SectionHeading
          eyebrow="Shop Velmora"
          title="A modern jewelry wardrobe with soft-gold shine"
          description="Browse demi-fine earrings, necklaces, and huggies designed to feel premium, polished, and easy to wear every day."
        />
      </section>

      <section className="page-shell grid gap-8 pb-16 md:pb-24 lg:grid-cols-[18rem,1fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <FilterSidebar filters={filters} setFilters={setFilters} />
        </div>

        <div className="space-y-6">
          <div className="flex flex-col gap-4 rounded-[1.75rem] border border-velmora-sand/70 bg-velmora-mist px-5 py-4 text-velmora-ink sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs uppercase tracking-[0.32em] text-velmora-ink/60">
              {filteredProducts.length} pieces
            </p>
            <label className="flex items-center gap-3 text-xs uppercase tracking-[0.28em] text-velmora-ink/60">
              Sort by
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="rounded-full border border-velmora-ink/10 bg-velmora-pearl px-4 py-2 text-xs uppercase tracking-[0.22em] text-velmora-ink"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.slug}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-velmora-sand/70 bg-velmora-mist p-7 text-velmora-ink shadow-soft">
              <p className="text-xs uppercase tracking-[0.35em] text-velmora-gold">
                No matches found
              </p>
              <h2 className="mt-4 font-heading text-4xl">Refine your edit</h2>
              <p className="mt-4 max-w-lg text-sm leading-7 text-velmora-ink/75 md:text-base">
                Try resetting your filters or exploring another category to discover more quiet-luxury pieces.
              </p>
              <button type="button" className="button-secondary mt-6" onClick={resetFilters}>
                Reset filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Shop
