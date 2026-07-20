import { SlidersHorizontal } from 'lucide-react'
import { useMemo, useRef, useState } from 'react'
import ProductCard from '@/components/products/ProductCard.jsx'
import { products } from '@/data/products.js'
import { useStrkImages } from '@/hooks/useStrkImages.js'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const priceBands = ['All', '$30–$50', '$50–$80', '$80–$120']
const materials = ['All', '18K Gold Plated', 'Hypoallergenic']

function inPriceBand(product, band) {
  if (band === 'All') return true
  if (band === '$30–$50') return product.price >= 30 && product.price <= 50
  if (band === '$50–$80') return product.price > 50 && product.price <= 80
  return product.price > 80 && product.price <= 120
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <fieldset className="border-b border-velmora-taupe/30 py-6 text-velmora-espresso">
      <legend className="mb-4 text-xs font-bold uppercase tracking-wideLuxury text-velmora-gold">{title}</legend>
      <div className="space-y-3">
        {options.map((option) => (
          <label key={option} className="flex cursor-pointer items-center justify-between gap-4 text-sm text-velmora-umber transition hover:text-velmora-espresso">
            <span>{option}</span>
            <input
              type="radio"
              name={title}
              checked={value === option}
              onChange={() => onChange(option)}
              className="h-4 w-4 accent-velmora-gold"
            />
          </label>
        ))}
      </div>
    </fieldset>
  )
}

export default function Shop() {
  const pageRef = useRef(null)
  const [category, setCategory] = useState('All')
  const [priceBand, setPriceBand] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('Featured')
  useStrkImages(pageRef, [category, priceBand, material, sort])

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material || material === 'Hypoallergenic'
      return categoryMatch && materialMatch && inPriceBand(product, priceBand)
    })

    return [...result].sort((a, b) => {
      if (sort === 'Price: Low to High') return a.price - b.price
      if (sort === 'Price: High to Low') return b.price - a.price
      if (sort === 'Top Rated') return b.rating - a.rating
      return 0
    })
  }, [category, priceBand, material, sort])

  return (
    <main ref={pageRef} className="bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="border-b border-velmora-taupe/30 px-4 pb-12 pt-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-wideLuxury text-velmora-gold">The Velmora Shop</p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_28rem] lg:items-end">
            <h1 className="font-serif text-6xl font-semibold leading-none text-velmora-espresso sm:text-7xl">Demi-fine gold, edited for everyday.</h1>
            <p className="text-base leading-8 text-velmora-umber">
              Browse earrings, necklaces, huggies, and ready-to-gift sets in warm gold finishes with premium detail and accessible pricing.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[17rem_1fr] lg:px-8 lg:py-14">
        <aside className="h-fit border border-velmora-taupe/30 bg-velmora-porcelain p-6 shadow-soft lg:sticky lg:top-28">
          <div className="flex items-center gap-3 border-b border-velmora-taupe/30 pb-5">
            <SlidersHorizontal className="h-4 w-4 text-velmora-gold" />
            <h2 className="font-serif text-2xl text-velmora-espresso">Filters</h2>
          </div>
          <FilterGroup title="Category" options={categories} value={category} onChange={setCategory} />
          <FilterGroup title="Price" options={priceBands} value={priceBand} onChange={setPriceBand} />
          <FilterGroup title="Material" options={materials} value={material} onChange={setMaterial} />
        </aside>

        <div>
          <div className="mb-6 flex flex-col justify-between gap-4 border-b border-velmora-taupe/30 pb-5 sm:flex-row sm:items-center">
            <p className="text-sm text-velmora-umber">
              Showing <span className="font-bold text-velmora-espresso">{filteredProducts.length}</span> refined pieces
            </p>
            <label className="flex items-center gap-3 text-sm font-semibold text-velmora-espresso">
              Sort
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="rounded-full border border-velmora-taupe/50 bg-velmora-porcelain px-4 py-2 text-sm text-velmora-espresso focus:border-velmora-gold focus:outline-none"
              >
                {['Featured', 'Top Rated', 'Price: Low to High', 'Price: High to Low'].map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
          </div>

          {filteredProducts.length ? (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="border border-velmora-taupe/30 bg-velmora-porcelain p-12 text-center text-velmora-espresso shadow-soft">
              <h3 className="font-serif text-4xl">No pieces found</h3>
              <p className="mt-3 text-sm leading-7 text-velmora-umber">Try adjusting your filters to discover more Velmora favorites.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
