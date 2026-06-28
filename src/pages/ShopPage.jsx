import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/layout/ProductCard.jsx'
import { productCatalog, sortOptions } from '@/data/products.js'

const priceBands = [
  { label: 'All Prices', value: 'all' },
  { label: 'Under $50', value: 'under-50' },
  { label: '$50 to $80', value: '50-80' },
  { label: '$80+', value: '80-plus' },
]

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedPrice, setSelectedPrice] = useState('all')
  const [selectedMaterials, setSelectedMaterials] = useState([])
  const [sortBy, setSortBy] = useState('featured')
  const selectedCategory = searchParams.get('category') || 'All'
  const categories = ['All', ...new Set(productCatalog.map((product) => product.category))]
  const materialOptions = [...new Set(productCatalog.map((product) => product.material))]

  const filteredProducts = useMemo(() => {
    let result = productCatalog.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory
      const matchesPrice =
        selectedPrice === 'all' ||
        (selectedPrice === 'under-50' && product.price < 50) ||
        (selectedPrice === '50-80' && product.price >= 50 && product.price <= 80) ||
        (selectedPrice === '80-plus' && product.price > 80)
      const matchesMaterials =
        selectedMaterials.length === 0 || selectedMaterials.includes(product.material)

      return matchesCategory && matchesPrice && matchesMaterials
    })

    if (sortBy === 'price-low') result = [...result].sort((a, b) => a.price - b.price)
    if (sortBy === 'price-high') result = [...result].sort((a, b) => b.price - a.price)
    if (sortBy === 'rating') result = [...result].sort((a, b) => b.rating - a.rating)

    return result
  }, [selectedCategory, selectedMaterials, selectedPrice, sortBy])

  const handleCategoryChange = (category) => {
    const nextParams = new URLSearchParams(searchParams)
    if (category === 'All') nextParams.delete('category')
    else nextParams.set('category', category)
    setSearchParams(nextParams)
  }

  const toggleMaterial = (material) => {
    setSelectedMaterials((current) =>
      current.includes(material)
        ? current.filter((item) => item !== material)
        : [...current, material],
    )
  }

  const clearFilters = () => {
    setSelectedPrice('all')
    setSelectedMaterials([])
    setSortBy('featured')
    setSearchParams({})
  }

  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 pt-28 sm:px-6 md:pb-24 lg:px-10">
      <div className="mb-10 space-y-4 border-b border-stone-200 pb-8">
        <p className="text-[0.68rem] uppercase tracking-[0.34em] text-stone-500">
          Collection
        </p>
        <h1 className="font-serif text-4xl text-stone-950 sm:text-5xl">
          Editorial gold essentials for every day and every occasion
        </h1>
        <p className="max-w-3xl text-base leading-8 text-stone-600">
          Filter by category, price, and material details to find your perfect piece.
          Each design is made to feel polished, giftable, and easy to wear.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[280px,1fr]">
        <aside className="h-fit rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm lg:sticky lg:top-28">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-[0.68rem] uppercase tracking-[0.34em] text-stone-500">
              Filters
            </h2>
            <button
              type="button"
              onClick={clearFilters}
              className="text-xs uppercase tracking-[0.24em] text-stone-600 transition hover:text-stone-950"
            >
              Clear
            </button>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.24em] text-stone-900">Category</p>
              <div className="flex flex-wrap gap-2 lg:flex-col lg:items-stretch">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => handleCategoryChange(category)}
                    className={`rounded-full border px-4 py-2 text-left text-xs uppercase tracking-[0.22em] transition ${selectedCategory === category ? 'border-stone-950 bg-stone-950 text-amber-200' : 'border-stone-300 bg-stone-50 text-stone-700 hover:bg-stone-100'}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.24em] text-stone-900">Price</p>
              {priceBands.map((band) => (
                <label key={band.value} className="flex items-center gap-3 text-sm text-stone-700">
                  <input
                    type="radio"
                    name="price"
                    checked={selectedPrice === band.value}
                    onChange={() => setSelectedPrice(band.value)}
                    className="h-4 w-4 border-stone-300 text-stone-950 focus:ring-stone-950"
                  />
                  <span>{band.label}</span>
                </label>
              ))}
            </div>

            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.24em] text-stone-900">Material</p>
              {materialOptions.map((material) => (
                <label key={material} className="flex items-center gap-3 text-sm text-stone-700">
                  <input
                    type="checkbox"
                    checked={selectedMaterials.includes(material)}
                    onChange={() => toggleMaterial(material)}
                    className="h-4 w-4 rounded border-stone-300 text-stone-950 focus:ring-stone-950"
                  />
                  <span>{material}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        <div className="space-y-8">
          <div className="flex flex-col gap-4 rounded-[2rem] border border-stone-200 bg-stone-100 p-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-stone-600">
              Showing <span className="font-medium text-stone-950">{filteredProducts.length}</span> pieces
              {selectedCategory !== 'All' ? ` in ${selectedCategory}` : ''}
            </p>
            <label className="flex items-center gap-3 text-sm text-stone-700">
              <span className="uppercase tracking-[0.24em] text-stone-500">Sort</span>
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

          {filteredProducts.length ? (
            <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-dashed border-stone-300 bg-white px-8 py-14 text-center">
              <p className="text-[0.68rem] uppercase tracking-[0.34em] text-stone-500">
                No matches
              </p>
              <h3 className="mt-3 font-serif text-3xl text-stone-950">
                Try broadening your filters
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-600">
                Reset your selections to see the full Velmora collection again.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
