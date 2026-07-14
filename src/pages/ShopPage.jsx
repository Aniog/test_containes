import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/shared/ProductCard'
import SectionHeader from '@/components/shared/SectionHeader'
import { materialFilters, priceFilters, products } from '@/data/products'
import { useStrkImages } from '@/lib/useStrkImages'

const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-low', label: 'Price: Low to High' },
  { id: 'price-high', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const containerRef = useStrkImages([searchParams.toString()])
  const selectedCategory = searchParams.get('category') || 'All'
  const selectedMaterial = searchParams.get('material') || 'All'
  const selectedPrice = searchParams.get('price') || 'all'
  const selectedSort = searchParams.get('sort') || 'featured'

  const filteredProducts = useMemo(() => {
    const priceRange = priceFilters.find((option) => option.id === selectedPrice)

    const nextProducts = products
      .filter((product) =>
        selectedCategory === 'All' ? true : product.category === selectedCategory,
      )
      .filter((product) =>
        selectedMaterial === 'All'
          ? true
          : product.materialFilter === selectedMaterial,
      )
      .filter((product) => {
        if (!priceRange) {
          return true
        }

        return product.price >= priceRange.min && product.price <= priceRange.max
      })

    if (selectedSort === 'price-low') {
      return [...nextProducts].sort((a, b) => a.price - b.price)
    }

    if (selectedSort === 'price-high') {
      return [...nextProducts].sort((a, b) => b.price - a.price)
    }

    if (selectedSort === 'rating') {
      return [...nextProducts].sort((a, b) => b.rating - a.rating)
    }

    return nextProducts
  }, [selectedCategory, selectedMaterial, selectedPrice, selectedSort])

  const updateFilter = (key, value) => {
    const nextParams = new URLSearchParams(searchParams)

    if (!value || value === 'All' || value === 'all' || value === 'featured') {
      nextParams.delete(key)
    } else {
      nextParams.set(key, value)
    }

    setSearchParams(nextParams)
  }

  return (
    <div ref={containerRef} className="bg-stone-50">
      <section className="border-b border-stone-200 bg-stone-950 text-stone-50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeader
            eyebrow="The Shop"
            title="Refined jewelry for everyday rituals and meaningful gifting"
            description="Explore earrings, necklaces, and huggies designed with warm gold finishes, soft sparkle, and premium details."
            invert
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="space-y-8 rounded-3xl border border-stone-200 bg-stone-100 p-6 lg:sticky lg:top-28 lg:self-start">
            <div>
              <h2 className="text-xs uppercase tracking-[0.28em] text-stone-500">
                Category
              </h2>
              <div className="mt-4 flex flex-wrap gap-2 lg:flex-col lg:items-start">
                {categoryOptions.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => updateFilter('category', category)}
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                      selectedCategory === category
                        ? 'border-stone-950 bg-stone-950 text-stone-50'
                        : 'border-stone-300 bg-stone-50 text-stone-700 hover:border-stone-500'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="border-t border-stone-200 pt-8">
              <h2 className="text-xs uppercase tracking-[0.28em] text-stone-500">
                Price
              </h2>
              <div className="mt-4 space-y-3">
                {priceFilters.map((option) => (
                  <label
                    key={option.id}
                    className="flex items-center gap-3 text-sm text-stone-700"
                  >
                    <input
                      type="radio"
                      name="price-filter"
                      checked={selectedPrice === option.id}
                      onChange={() => updateFilter('price', option.id)}
                      className="h-4 w-4 border-stone-300 text-stone-950 focus:ring-stone-950"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </div>

            <div className="border-t border-stone-200 pt-8">
              <h2 className="text-xs uppercase tracking-[0.28em] text-stone-500">
                Material
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {['All', ...materialFilters].map((material) => (
                  <button
                    key={material}
                    type="button"
                    onClick={() => updateFilter('material', material)}
                    className={`rounded-full border px-4 py-2 text-sm transition ${
                      selectedMaterial === material
                        ? 'border-amber-300 bg-amber-200 text-stone-950'
                        : 'border-stone-300 bg-stone-50 text-stone-700 hover:border-stone-500'
                    }`}
                  >
                    {material}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <div>
            <div className="mb-6 flex flex-col gap-4 border-b border-stone-200 pb-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
                {filteredProducts.length} pieces
              </p>
              <label className="flex items-center gap-3 text-sm text-stone-600">
                Sort by
                <select
                  value={selectedSort}
                  onChange={(event) => updateFilter('sort', event.target.value)}
                  className="rounded-full border border-stone-300 bg-stone-50 px-4 py-2 text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-900"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="rounded-3xl border border-stone-200 bg-stone-100 px-6 py-14 text-center">
                <h3 className="font-serif text-4xl text-stone-950">
                  No pieces match these filters
                </h3>
                <p className="mt-4 text-base leading-7 text-stone-600">
                  Try another category, material, or price range to rediscover the
                  collection.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
