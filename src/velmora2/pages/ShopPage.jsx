import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/shop/ProductCard.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import { filterGroups, products } from '../data/products.js'
import { useStrkImages } from '../hooks/useStrkImages.js'

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Top Rated', value: 'rating' },
]

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const requestedCategory = searchParams.get('category')
  const [category, setCategory] = useState(
    filterGroups.category.includes(requestedCategory) ? requestedCategory : 'All',
  )
  const [material, setMaterial] = useState('All')
  const [price, setPrice] = useState('All')
  const [sort, setSort] = useState('featured')
  const containerRef = useStrkImages([category, material, price, sort])

  useEffect(() => {
    const nextCategory = filterGroups.category.includes(requestedCategory)
      ? requestedCategory
      : 'All'

    setCategory(nextCategory)
  }, [requestedCategory])

  useEffect(() => {
    const nextParams = new URLSearchParams(searchParams)

    if (category === 'All') {
      nextParams.delete('category')
    } else {
      nextParams.set('category', category)
    }

    if (searchParams.toString() !== nextParams.toString()) {
      setSearchParams(nextParams, { replace: true })
    }
  }, [category, searchParams, setSearchParams])

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (category !== 'All') {
      result = result.filter((product) => product.category === category)
    }

    if (material !== 'All') {
      result = result.filter((product) => product.material === material)
    }

    if (price === 'Under $50') {
      result = result.filter((product) => product.price < 50)
    }

    if (price === '$50 to $80') {
      result = result.filter((product) => product.price >= 50 && product.price <= 80)
    }

    if (price === '$80+') {
      result = result.filter((product) => product.price > 80)
    }

    if (sort === 'price-asc') {
      result.sort((a, b) => a.price - b.price)
    }

    if (sort === 'price-desc') {
      result.sort((a, b) => b.price - a.price)
    }

    if (sort === 'rating') {
      result.sort((a, b) => b.rating - a.rating)
    }

    return result
  }, [category, material, price, sort])

  const renderFilterGroup = (title, options, selected, onChange) => (
    <div className="space-y-4 border-b border-velmora-line pb-6 last:border-b-0">
      <h3 className="text-sm uppercase tracking-[0.18em] text-velmora-mocha">{title}</h3>
      <div className="flex flex-wrap gap-2 lg:flex-col">
        {options.map((option) => {
          const active = selected === option
          return (
            <button
              key={option}
              className={`rounded-full border px-4 py-2 text-sm transition ${active ? 'border-velmora-ink bg-velmora-ink text-velmora-ivory' : 'border-velmora-line bg-transparent text-velmora-ink hover:border-velmora-ink'}`}
              onClick={() => onChange(option)}
            >
              {option}
            </button>
          )
        })}
      </div>
    </div>
  )

  return (
    <div ref={containerRef} className="bg-velmora-ivory pt-28 md:pt-32">
      <section className="container-shell pb-10">
        <div className="rounded-[2rem] border border-velmora-line bg-velmora-pearl/45 p-8 shadow-card md:p-12">
          <SectionHeading
            eyebrow="Collection"
            title="Shop the Velmora edit"
            description="A curated range of premium-feeling earrings, necklaces, huggies, and gift-ready sets for self-purchase and thoughtful giving."
          />
        </div>
      </section>

      <section className="container-shell pb-20 md:pb-28">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="h-fit rounded-[1.75rem] border border-velmora-line bg-velmora-pearl/35 p-6 shadow-card">
            <div className="space-y-6">
              {renderFilterGroup('Category', filterGroups.category, category, setCategory)}
              {renderFilterGroup('Material', filterGroups.material, material, setMaterial)}
              {renderFilterGroup('Price', filterGroups.price, price, setPrice)}
            </div>
          </aside>
          <div className="space-y-6">
            <div className="flex flex-col gap-4 rounded-[1.5rem] border border-velmora-line bg-velmora-pearl/20 px-5 py-4 md:flex-row md:items-center md:justify-between">
              <p className="text-sm uppercase tracking-[0.18em] text-velmora-mocha">{filteredProducts.length} pieces found</p>
              <label className="flex items-center gap-3 text-sm text-velmora-ink">
                <span className="uppercase tracking-[0.18em] text-velmora-mocha">Sort</span>
                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                  className="rounded-full border border-velmora-line bg-velmora-ivory px-4 py-2 text-sm text-velmora-ink focus:outline-none focus:ring-2 focus:ring-velmora-gold/40"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            {filteredProducts.length ? (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} compact />
                ))}
              </div>
            ) : (
              <div className="rounded-[1.75rem] border border-velmora-line bg-velmora-pearl/35 p-10 text-center shadow-card">
                <p className="eyebrow-label">No matches</p>
                <h3 className="mt-4 text-4xl text-velmora-ink">Try a different filter mix</h3>
                <p className="mt-4 text-base leading-7 text-velmora-mocha">
                  Adjust your selections to reveal more of the Velmora collection.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ShopPage
