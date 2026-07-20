import { SlidersHorizontal } from 'lucide-react'
import { useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/common/ProductCard.jsx'
import SectionHeader from '@/components/common/SectionHeader.jsx'
import { products } from '@/data/products.js'
import { useStrkImages } from '@/hooks/useStrkImages.js'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const priceOptions = ['All', '$30–$50', '$50–$80', '$80–$120']
const materialOptions = ['All', '18K Gold Plated', 'Crystal Detail', 'Textured Gold']

function priceMatches(product, price) {
  if (price === '$30–$50') return product.price >= 30 && product.price <= 50
  if (price === '$50–$80') return product.price > 50 && product.price <= 80
  if (price === '$80–$120') return product.price > 80 && product.price <= 120
  return true
}

export default function ShopPage({ onAddToCart }) {
  const [searchParams] = useSearchParams()
  const requestedCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(categoryOptions.includes(requestedCategory) ? requestedCategory : 'All')
  const [price, setPrice] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')
  const containerRef = useRef(null)
  useStrkImages(containerRef, [category, price, material, sort])

  const filteredProducts = useMemo(() => {
    const results = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material
      return categoryMatch && materialMatch && priceMatches(product, price)
    })

    return [...results].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return products.findIndex((item) => item.id === a.id) - products.findIndex((item) => item.id === b.id)
    })
  }, [category, material, price, sort])

  return (
    <main ref={containerRef} className="bg-velmora-ivory pt-28 text-velmora-ink">
      <section className="px-5 pb-14 pt-10 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="The Shop"
            title="Demi-fine gold, edited with intention."
            body="Filter the Velmora collection by silhouette, price, and finish — all designed at a premium-but-accessible price point."
          />
        </div>
      </section>

      <section className="border-y border-velmora-mist bg-velmora-pearl px-5 py-6 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3 text-sm text-velmora-taupe">
            <SlidersHorizontal className="h-4 w-4 text-velmora-gold" />
            <span>{filteredProducts.length} pieces</span>
          </div>
          <label className="flex items-center gap-3 text-sm text-velmora-ink">
            <span className="text-xs font-semibold uppercase tracking-widest text-velmora-taupe">Sort</span>
            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              className="border border-velmora-mist bg-velmora-ivory px-4 py-3 text-sm text-velmora-ink focus:border-velmora-gold focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </label>
        </div>
      </section>

      <section className="px-5 py-12 md:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[16rem_1fr]">
          <aside className="h-fit border border-velmora-mist bg-velmora-pearl p-5 text-velmora-ink lg:sticky lg:top-28">
            <FilterGroup title="Category" options={categoryOptions} value={category} onChange={setCategory} />
            <FilterGroup title="Price" options={priceOptions} value={price} onChange={setPrice} />
            <FilterGroup title="Material" options={materialOptions} value={material} onChange={setMaterial} />
          </aside>

          <div>
            {filteredProducts.length > 0 ? (
              <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={onAddToCart}
                    imageContext="shop"
                    contextTitleId="shop-page-title"
                  />
                ))}
              </div>
            ) : (
              <div className="border border-velmora-mist bg-velmora-pearl p-10 text-center text-velmora-ink">
                <h2 className="font-serif text-4xl">No pieces found</h2>
                <p className="mt-3 text-velmora-taupe">Try a softer filter combination.</p>
              </div>
            )}
          </div>
        </div>
        <p id="shop-page-title" className="sr-only">Velmora shop collection demi-fine gold jewelry</p>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <fieldset className="border-b border-velmora-mist py-5 first:pt-0 last:border-b-0 last:pb-0">
      <legend className="mb-4 text-xs font-semibold uppercase tracking-widestLuxury text-velmora-gold">
        {title}
      </legend>
      <div className="space-y-3">
        {options.map((option) => (
          <label key={option} className="flex cursor-pointer items-center gap-3 text-sm text-velmora-taupe transition hover:text-velmora-ink">
            <input
              type="radio"
              name={title}
              checked={value === option}
              onChange={() => onChange(option)}
              className="h-4 w-4 accent-velmora-gold"
            />
            {option}
          </label>
        ))}
      </div>
    </fieldset>
  )
}
