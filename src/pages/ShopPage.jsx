import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/store/ProductCard'
import { categoryOptions, materialOptions, priceOptions, products, sortOptions } from '@/data/products'
import { useImageLoader } from '@/hooks/useImageLoader'

const matchesPrice = (product, selectedPrices) => {
  if (selectedPrices.length === 0) {
    return true
  }

  return selectedPrices.some((range) => {
    if (range === 'under-50') {
      return product.price < 50
    }
    if (range === '50-80') {
      return product.price >= 50 && product.price <= 80
    }
    return product.price > 80 && product.price <= 120
  })
}

const sortProducts = (items, sort) => {
  const copy = [...items]

  switch (sort) {
    case 'price-asc':
      return copy.sort((a, b) => a.price - b.price)
    case 'price-desc':
      return copy.sort((a, b) => b.price - a.price)
    case 'newest':
      return copy.sort((a, b) => Number(b.newArrival) - Number(a.newArrival))
    case 'rating':
      return copy.sort((a, b) => b.rating - a.rating)
    default:
      return copy.sort((a, b) => Number(b.featured) - Number(a.featured))
  }
}

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const categoryFromUrl = searchParams.get('category')
  const selectedCategory = categoryOptions.includes(categoryFromUrl || '')
    ? categoryFromUrl
    : 'All'
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [selectedPrices, setSelectedPrices] = useState([])
  const [sort, setSort] = useState('featured')

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const categoryMatch =
        selectedCategory === 'All' || product.category === selectedCategory
      const materialMatch =
        selectedMaterials.length === 0 ||
        selectedMaterials.includes(product.material)

      return categoryMatch && materialMatch && matchesPrice(product, selectedPrices)
    })

    return sortProducts(filtered, sort)
  }, [selectedCategory, selectedMaterials, selectedPrices, sort])

  const containerRef = useImageLoader([
    selectedCategory,
    selectedMaterials.join(','),
    selectedPrices.join(','),
    sort,
    filteredProducts.length,
  ])

  const toggleValue = (value, setter) => {
    setter((current) =>
      current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value],
    )
  }

  const handleCategoryChange = (category) => {
    const nextParams = new URLSearchParams(searchParams)

    if (category === 'All') {
      nextParams.delete('category')
    } else {
      nextParams.set('category', category)
    }

    setSearchParams(nextParams, { replace: false })
  }

  return (
    <div ref={containerRef} className="bg-velmora-ivory pb-16 md:pb-24">
      <section className="border-b border-velmora-line bg-white/60">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <p className="text-xs uppercase tracking-[0.36em] text-velmora-taupe">
            Shop the collection
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl leading-none text-velmora-ink md:text-6xl">
            Premium demi-fine jewelry designed for layering, gifting, and everyday wear.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-velmora-muted">
            Discover warm gold silhouettes, crystal details, and modern classics at a premium-but-accessible price point.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
          <aside className="h-fit rounded-[32px] border border-velmora-line bg-white/75 p-6 shadow-[0_18px_45px_rgba(61,47,39,0.08)] backdrop-blur-sm">
            <div>
              <h2 className="text-xs uppercase tracking-[0.34em] text-velmora-taupe">
                Category
              </h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {categoryOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleCategoryChange(option)}
                    className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.28em] transition ${
                      selectedCategory === option
                        ? 'border-velmora-espresso bg-velmora-espresso text-velmora-champagne'
                        : 'border-velmora-line bg-velmora-ivory text-velmora-ink hover:border-velmora-champagne'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-velmora-line pt-8">
              <h2 className="text-xs uppercase tracking-[0.34em] text-velmora-taupe">
                Material
              </h2>
              <div className="mt-5 space-y-3">
                {materialOptions.map((option) => (
                  <label key={option} className="flex items-center gap-3 text-sm text-velmora-ink">
                    <input
                      type="checkbox"
                      checked={selectedMaterials.includes(option)}
                      onChange={() => toggleValue(option, setSelectedMaterials)}
                      className="h-4 w-4 rounded border-velmora-line text-velmora-espresso focus:ring-velmora-champagne"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-velmora-line pt-8">
              <h2 className="text-xs uppercase tracking-[0.34em] text-velmora-taupe">
                Price
              </h2>
              <div className="mt-5 space-y-3">
                {priceOptions.map((option) => (
                  <label key={option.value} className="flex items-center gap-3 text-sm text-velmora-ink">
                    <input
                      type="checkbox"
                      checked={selectedPrices.includes(option.value)}
                      onChange={() => toggleValue(option.value, setSelectedPrices)}
                      className="h-4 w-4 rounded border-velmora-line text-velmora-espresso focus:ring-velmora-champagne"
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          <div>
            <div className="mb-6 flex flex-col gap-4 rounded-[28px] border border-velmora-line bg-white/75 px-5 py-4 md:flex-row md:items-center md:justify-between">
              <p className="text-sm text-velmora-muted">
                Showing <span className="text-velmora-ink">{filteredProducts.length}</span> pieces
              </p>
              <label className="flex items-center gap-3 text-sm text-velmora-ink">
                <span className="text-xs uppercase tracking-[0.26em] text-velmora-taupe">Sort</span>
                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                  className="rounded-full border border-velmora-line bg-velmora-ivory px-4 py-2 text-sm text-velmora-ink outline-none"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
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
