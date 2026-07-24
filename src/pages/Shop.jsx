import { useMemo, useState } from 'react'
import ProductCard from '@/components/store/ProductCard'
import SectionHeader from '@/components/store/SectionHeader'
import {
  materialFilters,
  priceFilters,
  products,
  sortOptions,
} from '@/data/storeData'
import { useImageLoader } from '@/hooks/useImageLoader'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']

const matchesPrice = (price, filter) => {
  if (filter === 'Under $50') return price < 50
  if (filter === '$50 to $80') return price >= 50 && price <= 80
  if (filter === '$80+') return price > 80
  return true
}

const sortProducts = (items, sort) => {
  if (sort === 'Price: Low to High') return [...items].sort((a, b) => a.price - b.price)
  if (sort === 'Price: High to Low') return [...items].sort((a, b) => b.price - a.price)
  if (sort === 'Top Rated') return [...items].sort((a, b) => b.rating - a.rating)
  return items
}

const Shop = () => {
  const [category, setCategory] = useState('All')
  const [priceFilter, setPriceFilter] = useState('All')
  const [materialFilter, setMaterialFilter] = useState('All')
  const [sort, setSort] = useState('Featured')
  const containerRef = useImageLoader([category, priceFilter, materialFilter, sort])

  const filteredProducts = useMemo(() => {
    const nextProducts = products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category
      const matchesMaterial =
        materialFilter === 'All' || product.material === materialFilter

      return (
        matchesCategory &&
        matchesMaterial &&
        matchesPrice(product.price, priceFilter)
      )
    })

    return sortProducts(nextProducts, sort)
  }, [category, materialFilter, priceFilter, sort])

  return (
    <div ref={containerRef} className="bg-velmora-bg text-velmora-ivory">
      <section className="border-b border-velmora-line px-4 pb-12 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Collection"
            title="A modern jewelry wardrobe in warm gold tones"
            description="Shop Velmora's demi-fine edit of earrings, necklaces, huggies, and giftable sets — refined silhouettes priced for daily wear."
          />
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="h-fit rounded-[1.75rem] border border-velmora-line bg-velmora-panel/70 p-5 shadow-soft lg:sticky lg:top-28">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-velmora-gold">
                Category
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {categories.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.28em] transition ${
                      category === item
                        ? 'border-velmora-gold bg-velmora-gold text-velmora-ink'
                        : 'border-velmora-line text-velmora-taupe hover:border-velmora-gold hover:text-velmora-gold'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-velmora-line pt-8">
              <p className="text-xs uppercase tracking-[0.35em] text-velmora-gold">
                Price
              </p>
              <div className="mt-4 space-y-3">
                {priceFilters.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setPriceFilter(item)}
                    className={`block text-sm transition ${
                      priceFilter === item
                        ? 'text-velmora-ivory'
                        : 'text-velmora-taupe hover:text-velmora-gold'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-velmora-line pt-8">
              <p className="text-xs uppercase tracking-[0.35em] text-velmora-gold">
                Material
              </p>
              <div className="mt-4 space-y-3">
                {materialFilters.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setMaterialFilter(item)}
                    className={`block text-left text-sm transition ${
                      materialFilter === item
                        ? 'text-velmora-ivory'
                        : 'text-velmora-taupe hover:text-velmora-gold'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <div>
            <div className="mb-6 flex flex-col gap-4 rounded-[1.5rem] border border-velmora-line bg-velmora-panel/50 p-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-velmora-taupe">
                Showing <span className="text-velmora-ivory">{filteredProducts.length}</span> pieces
              </p>
              <label className="flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-velmora-taupe">
                Sort
                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                  className="rounded-full border border-velmora-line bg-velmora-bg px-4 py-3 text-xs uppercase tracking-[0.24em] text-velmora-ivory outline-none"
                >
                  {sortOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Shop
