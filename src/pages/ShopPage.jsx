import { useMemo, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import ProductCard from '@/components/common/ProductCard.jsx'
import SectionHeading from '@/components/common/SectionHeading.jsx'
import { products } from '@/lib/store-data.js'
import { useStrkImages } from '@/lib/useStrkImages.js'

const sortOptions = {
  featured: (a, b) => b.rating - a.rating,
  low: (a, b) => a.price - b.price,
  high: (a, b) => b.price - a.price,
  newest: (a, b) => a.name.localeCompare(b.name),
}

function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedMaterial, setSelectedMaterial] = useState('All')
  const [selectedPrice, setSelectedPrice] = useState('All')
  const [sortBy, setSortBy] = useState('featured')
  const [showFilters, setShowFilters] = useState(false)
  const containerRef = useStrkImages([selectedCategory, selectedMaterial, selectedPrice, sortBy])

  const categories = ['All', ...new Set(products.map((product) => product.category))]
  const materials = ['All', ...new Set(products.map((product) => product.material))]

  const filteredProducts = useMemo(() => {
    return [...products]
      .filter((product) =>
        selectedCategory === 'All' ? true : product.category === selectedCategory,
      )
      .filter((product) =>
        selectedMaterial === 'All' ? true : product.material === selectedMaterial,
      )
      .filter((product) => {
        if (selectedPrice === 'All') return true
        if (selectedPrice === 'Under $50') return product.price < 50
        if (selectedPrice === '$50 to $80') return product.price >= 50 && product.price <= 80
        return product.price > 80
      })
      .sort(sortOptions[sortBy])
  }, [selectedCategory, selectedMaterial, selectedPrice, sortBy])

  const filterGroupClass = 'space-y-4 rounded-[1.75rem] border border-velmora-line/60 bg-white/65 p-6'
  const filterButtonClass = (active) =>
    `w-full rounded-full border px-4 py-3 text-left text-xs uppercase tracking-[0.24em] transition ${
      active
        ? 'border-velmora-gold bg-velmora-gold text-velmora-ivory'
        : 'border-velmora-line bg-velmora-ivory text-velmora-mist hover:border-velmora-mist hover:text-velmora-ink'
    }`

  return (
    <div ref={containerRef} className="bg-velmora-ivory pt-28 md:pt-32">
      <section className="border-b border-velmora-line/50 bg-velmora-sand/25">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-20">
          <SectionHeading
            eyebrow="Collection"
            title="The Velmora Shop"
            description="Polished essentials and giftable pieces designed to feel premium, effortless, and easy to wear every day."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <div className="mb-6 flex items-center justify-between gap-4 lg:hidden">
          <button
            type="button"
            onClick={() => setShowFilters((current) => !current)}
            className="inline-flex items-center gap-2 rounded-full border border-velmora-line bg-white/70 px-4 py-3 text-xs uppercase tracking-[0.24em] text-velmora-ink"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>
          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="rounded-full border border-velmora-line bg-white/70 px-4 py-3 text-xs uppercase tracking-[0.24em] text-velmora-ink focus:outline-none"
          >
            <option value="featured">Featured</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
            <option value="newest">Alphabetical</option>
          </select>
        </div>

        <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className={`${showFilters ? 'block' : 'hidden'} space-y-5 lg:block`}>
            <div className={filterGroupClass}>
              <h3 className="text-xs uppercase tracking-[0.3em] text-velmora-mist">Category</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={filterButtonClass(selectedCategory === category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className={filterGroupClass}>
              <h3 className="text-xs uppercase tracking-[0.3em] text-velmora-mist">Price</h3>
              <div className="space-y-2">
                {['All', 'Under $50', '$50 to $80', 'Over $80'].map((range) => (
                  <button
                    key={range}
                    type="button"
                    onClick={() => setSelectedPrice(range)}
                    className={filterButtonClass(selectedPrice === range)}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>

            <div className={filterGroupClass}>
              <h3 className="text-xs uppercase tracking-[0.3em] text-velmora-mist">Material</h3>
              <div className="space-y-2">
                {materials.map((material) => (
                  <button
                    key={material}
                    type="button"
                    onClick={() => setSelectedMaterial(material)}
                    className={filterButtonClass(selectedMaterial === material)}
                  >
                    {material}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <div>
            <div className="mb-8 hidden items-center justify-between rounded-[1.75rem] border border-velmora-line/60 bg-white/65 px-6 py-4 lg:flex">
              <p className="text-xs uppercase tracking-[0.26em] text-velmora-mist">
                {filteredProducts.length} pieces found
              </p>
              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="rounded-full border border-velmora-line bg-velmora-ivory px-4 py-3 text-xs uppercase tracking-[0.24em] text-velmora-ink focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
                <option value="newest">Alphabetical</option>
              </select>
            </div>

            {filteredProducts.length ? (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="rounded-[2rem] border border-velmora-line/60 bg-white/65 px-6 py-16 text-center text-velmora-ink">
                <h3 className="font-display text-4xl">No pieces match this filter.</h3>
                <p className="mt-4 text-sm leading-7 text-velmora-mist">
                  Try another category, material, or price range to see more from the collection.
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
