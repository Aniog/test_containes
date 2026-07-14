import { useMemo, useState } from 'react'
import ProductCard from '@/components/ProductCard'
import SectionHeading from '@/components/SectionHeading'
import { filterOptions, products } from '@/data/storefront'

const matchesPrice = (label, price) => {
  if (label === 'All') return true
  if (label === 'Under $50') return price < 50
  if (label === '$50 to $80') return price >= 50 && price <= 80
  if (label === '$80+') return price > 80
  return true
}

const sortProducts = (items, sortValue) => {
  const sorted = [...items]

  if (sortValue === 'price-low') {
    return sorted.sort((a, b) => a.price - b.price)
  }

  if (sortValue === 'price-high') {
    return sorted.sort((a, b) => b.price - a.price)
  }

  if (sortValue === 'rating') {
    return sorted.sort((a, b) => b.rating - a.rating)
  }

  return sorted
}

const ShopPage = () => {
  const [category, setCategory] = useState('All')
  const [price, setPrice] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')

  const filteredProducts = useMemo(() => {
    const nextItems = products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category
      const matchesMaterial = material === 'All' || product.material === material

      return matchesCategory && matchesMaterial && matchesPrice(price, product.price)
    })

    return sortProducts(nextItems, sort)
  }, [category, material, price, sort])

  return (
    <div className="bg-velmora-ivory px-5 pb-16 pt-28 text-velmora-espresso md:px-8 md:pb-24 md:pt-36">
      <div className="mx-auto max-w-7xl space-y-10">
        <SectionHeading
          eyebrow="Collection"
          title="Quiet luxury, curated for daily wear"
          description="Browse Velmora’s demi-fine edit with thoughtful filters for category, price, and finish."
        />

        <div className="grid gap-8 lg:grid-cols-[18rem_1fr]">
          <aside className="h-fit rounded-[30px] border border-velmora-taupe/25 bg-velmora-cream p-6 shadow-[0_18px_50px_rgba(43,31,25,0.06)]">
            <div className="space-y-8">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-velmora-cacao/55">
                  Category
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {filterOptions.categories.map((option) => (
                    <button
                      key={option}
                      type="button"
                      className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.25em] transition ${
                        category === option
                          ? 'border-velmora-goldDeep bg-velmora-gold/20 text-velmora-espresso'
                          : 'border-velmora-taupe/35 bg-white/60 text-velmora-cacao/75 hover:border-velmora-goldDeep'
                      }`}
                      onClick={() => setCategory(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-velmora-cacao/55">
                  Price
                </p>
                <div className="mt-4 space-y-3 text-sm text-velmora-cacao/75">
                  {filterOptions.prices.map((option) => (
                    <label key={option} className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="price"
                        checked={price === option}
                        onChange={() => setPrice(option)}
                        className="h-4 w-4 accent-velmora-goldDeep"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-velmora-cacao/55">
                  Material
                </p>
                <div className="mt-4 space-y-3 text-sm text-velmora-cacao/75">
                  {filterOptions.materials.map((option) => (
                    <label key={option} className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="material"
                        checked={material === option}
                        onChange={() => setMaterial(option)}
                        className="h-4 w-4 accent-velmora-goldDeep"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <section className="space-y-6">
            <div className="flex flex-col gap-4 rounded-[28px] border border-velmora-taupe/20 bg-white/70 p-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-velmora-cacao/72">
                {filteredProducts.length} styles selected
              </p>
              <label className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-velmora-cacao/58">
                Sort by
                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                  className="rounded-full border border-velmora-taupe/35 bg-velmora-ivory px-4 py-3 text-xs uppercase tracking-[0.2em] text-velmora-espresso focus:border-velmora-goldDeep focus:outline-none"
                >
                  {filterOptions.sort.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default ShopPage
