import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/common/ProductCard.jsx?velmora=20260707'
import { filters, products } from '@/data/products.js?velmora=20260707'

function sortProducts(list, sortValue) {
  if (sortValue === 'price-asc') {
    return [...list].sort((a, b) => a.price - b.price)
  }
  if (sortValue === 'price-desc') {
    return [...list].sort((a, b) => b.price - a.price)
  }
  if (sortValue === 'rating-desc') {
    return [...list].sort((a, b) => b.rating - a.rating)
  }
  return list
}

export default function ShopPage() {
  const [searchParams] = useSearchParams()
  const categoryParam = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(categoryParam)
  const [price, setPrice] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sortBy, setSortBy] = useState('featured')

  useEffect(() => {
    setCategory(categoryParam)
  }, [categoryParam])

  const filteredProducts = useMemo(() => {
    const list = products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category
      const matchesPrice = price === 'All' || product.priceRange === price
      const matchesMaterial = material === 'All' || product.material === material
      return matchesCategory && matchesPrice && matchesMaterial
    })

    return sortProducts(list, sortBy)
  }, [category, material, price, sortBy])

  return (
    <div className="container-shell pb-16 pt-28 md:pb-24 md:pt-36">
      <div className="grid gap-10 lg:grid-cols-[18rem_1fr]">
        <aside className="space-y-8 rounded-[2rem] border border-velmora-espresso/10 bg-white/65 p-6 shadow-card lg:sticky lg:top-28 lg:h-fit">
          <div className="space-y-3">
            <p className="section-eyebrow">Collections</p>
            <h1 className="font-serif text-5xl leading-none text-velmora-noir">Shop</h1>
            <p className="text-sm leading-7 text-velmora-espresso/75">
              Filter the Velmora edit by category, price point, and material.
            </p>
          </div>

          <div className="space-y-6">
            <FilterGroup title="Category" options={filters.categories} value={category} onChange={setCategory} />
            <FilterGroup title="Price" options={filters.price} value={price} onChange={setPrice} />
            <FilterGroup title="Material" options={filters.material} value={material} onChange={setMaterial} />
          </div>
        </aside>

        <section className="space-y-6">
          <div className="flex flex-col gap-4 rounded-[2rem] border border-velmora-espresso/10 bg-white/50 p-5 md:flex-row md:items-center md:justify-between">
            <p className="text-sm leading-7 text-velmora-espresso/75">
              Showing <span className="font-semibold text-velmora-noir">{filteredProducts.length}</span> pieces selected for modern gifting and everyday adornment.
            </p>
            <label className="flex items-center gap-3 text-xs font-semibold uppercase tracking-luxe text-velmora-espresso/70">
              Sort by
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="rounded-full border border-velmora-espresso/10 bg-velmora-parchment px-4 py-3 text-xs uppercase tracking-luxe text-velmora-noir outline-none"
              >
                {filters.sort.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} contextLabel="shop" />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <div className="space-y-4 border-t hairline-divider pt-6 first:border-t-0 first:pt-0">
      <h2 className="text-xs font-semibold uppercase tracking-luxe text-velmora-noir">{title}</h2>
      <div className="flex flex-wrap gap-3 lg:flex-col lg:items-start">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            className={value === option ? 'rounded-full bg-velmora-noir px-4 py-2 text-xs font-semibold uppercase tracking-luxe text-white' : 'rounded-full border border-velmora-espresso/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-luxe text-velmora-espresso/75 transition hover:border-velmora-gold hover:text-velmora-gold'}
            onClick={() => onChange(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}
