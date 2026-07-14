import { useMemo, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import ProductCard from '@/components/products/ProductCard'
import SectionHeading from '@/components/shared/SectionHeading'
import { collectionFilters, products } from '@/data/products'

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Top Rated', value: 'rating-desc' },
]

const matchesPriceRange = (price, range) => {
  if (range === 'under-50') return price < 50
  if (range === '50-80') return price >= 50 && price <= 80
  if (range === '80-plus') return price > 80
  return true
}

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedMaterial, setSelectedMaterial] = useState('All')
  const [selectedPrice, setSelectedPrice] = useState('all')
  const [sortValue, setSortValue] = useState('featured')

  const filteredProducts = useMemo(() => {
    const nextProducts = products.filter((product) => {
      const categoryMatch =
        selectedCategory === 'All' || product.category === selectedCategory
      const materialMatch =
        selectedMaterial === 'All' || product.material === selectedMaterial
      const priceMatch = matchesPriceRange(product.price, selectedPrice)

      return categoryMatch && materialMatch && priceMatch
    })

    if (sortValue === 'price-asc') {
      return [...nextProducts].sort((left, right) => left.price - right.price)
    }

    if (sortValue === 'price-desc') {
      return [...nextProducts].sort((left, right) => right.price - left.price)
    }

    if (sortValue === 'rating-desc') {
      return [...nextProducts].sort((left, right) => right.rating - left.rating)
    }

    return nextProducts
  }, [selectedCategory, selectedMaterial, selectedPrice, sortValue])

  return (
    <div className="bg-velmora-surface text-velmora-ink">
      <section className="border-b border-velmora-line bg-velmora-ink pb-14 pt-32 text-velmora-ivory lg:pb-16 lg:pt-40">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <p className="text-xs uppercase tracking-[0.36em] text-velmora-gold">
            Collection
          </p>
          <h1 id="collection-title" className="mt-4 font-display text-5xl leading-none text-velmora-ivory md:text-6xl">
            Shop the Collection
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-velmora-ivory/78 md:text-lg">
            A curated selection of demi-fine earrings, necklaces, and luminous
            huggies designed to layer beautifully and wear effortlessly.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-10 lg:py-16">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Velmora Edit"
            title="Refined pieces, thoughtfully filtered"
            description="Browse by silhouette, finish, and price to find your next everyday signature."
          />
          <label className="relative inline-flex max-w-[260px] items-center">
            <select
              value={sortValue}
              onChange={(event) => setSortValue(event.target.value)}
              className="h-12 w-full appearance-none rounded-full border border-velmora-line bg-velmora-ivory px-5 pr-10 text-sm uppercase tracking-[0.2em] text-velmora-ink shadow-soft focus:border-velmora-gold focus:outline-none"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-4 h-4 w-4 text-velmora-muted" />
          </label>
        </div>

        <div className="grid gap-8 lg:grid-cols-[280px,1fr]">
          <aside className="h-fit rounded-[30px] border border-velmora-line bg-velmora-ivory p-6 text-velmora-ink shadow-soft">
            <div className="space-y-8">
              <div>
                <h2 className="text-xs uppercase tracking-[0.32em] text-velmora-taupe">
                  Category
                </h2>
                <div className="mt-4 flex flex-wrap gap-3 lg:flex-col lg:items-start">
                  {collectionFilters.categories.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setSelectedCategory(category)}
                      className={`rounded-full border px-4 py-2 text-sm uppercase tracking-[0.18em] transition ${
                        selectedCategory === category
                          ? 'border-velmora-gold bg-velmora-gold text-velmora-ink'
                          : 'border-velmora-line bg-white text-velmora-ink hover:border-velmora-gold'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xs uppercase tracking-[0.32em] text-velmora-taupe">
                  Price
                </h2>
                <div className="mt-4 flex flex-wrap gap-3 lg:flex-col lg:items-start">
                  {collectionFilters.priceRanges.map((range) => (
                    <button
                      key={range.value}
                      type="button"
                      onClick={() => setSelectedPrice(range.value)}
                      className={`rounded-full border px-4 py-2 text-sm uppercase tracking-[0.18em] transition ${
                        selectedPrice === range.value
                          ? 'border-velmora-gold bg-velmora-gold text-velmora-ink'
                          : 'border-velmora-line bg-white text-velmora-ink hover:border-velmora-gold'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xs uppercase tracking-[0.32em] text-velmora-taupe">
                  Material
                </h2>
                <div className="mt-4 flex flex-wrap gap-3 lg:flex-col lg:items-start">
                  {collectionFilters.materials.map((material) => (
                    <button
                      key={material}
                      type="button"
                      onClick={() => setSelectedMaterial(material)}
                      className={`rounded-full border px-4 py-2 text-sm uppercase tracking-[0.18em] transition ${
                        selectedMaterial === material
                          ? 'border-velmora-gold bg-velmora-gold text-velmora-ink'
                          : 'border-velmora-line bg-white text-velmora-ink hover:border-velmora-gold'
                      }`}
                    >
                      {material}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <div>
            <div className="mb-5 flex items-center justify-between gap-4 border-b border-velmora-line pb-4 text-sm uppercase tracking-[0.22em] text-velmora-muted">
              <span>{filteredProducts.length} pieces</span>
              <span>Premium demi-fine jewelry</span>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} priorityLabel="Velmora Pick" />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ShopPage
