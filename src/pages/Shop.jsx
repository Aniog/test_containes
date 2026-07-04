import { useEffect, useMemo, useRef, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard.jsx'
import { categories, products } from '@/data/products.js'
import { loadStrikinglyImages } from '@/lib/imageHelpers.js'

const categoryOptions = ['All', ...categories.map((category) => category.label), 'Sets']
const priceOptions = [
  { label: 'All prices', min: 0, max: Infinity },
  { label: '$30–$50', min: 30, max: 50 },
  { label: '$50–$80', min: 50, max: 80 },
  { label: '$80–$120', min: 80, max: 120 },
]
const materialOptions = ['All', '18K Gold Plated', 'Hypoallergenic']

export default function Shop() {
  const containerRef = useRef(null)
  const [category, setCategory] = useState('All')
  const [price, setPrice] = useState(priceOptions[0].label)
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('Featured')

  const filteredProducts = useMemo(() => {
    const priceRange = priceOptions.find((option) => option.label === price) || priceOptions[0]
    const list = products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category
      const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max
      const matchesMaterial = material === 'All' || product.material === material || material === 'Hypoallergenic'
      return matchesCategory && matchesPrice && matchesMaterial
    })

    if (sort === 'Price: Low to High') return [...list].sort((a, b) => a.price - b.price)
    if (sort === 'Price: High to Low') return [...list].sort((a, b) => b.price - a.price)
    if (sort === 'Top Rated') return [...list].sort((a, b) => b.rating - a.rating)
    return list
  }, [category, material, price, sort])

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      loadStrikinglyImages(containerRef.current)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [filteredProducts.length, category, price, material, sort])

  return (
    <main ref={containerRef} className="bg-velmora-ivory pt-24 text-velmora-espresso">
      <section className="border-b border-velmora-espresso/10 bg-velmora-cream">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 md:py-16 lg:px-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-velmora-gold">Collection</p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <h1 id="shop-title" className="font-serif text-6xl leading-none text-velmora-espresso md:text-7xl">
              Demi-fine pieces with quiet presence.
            </h1>
            <p id="shop-desc" className="text-base leading-8 text-velmora-mocha">
              Explore earrings, necklaces, huggies, and gift-ready sets designed for women who want polished jewelry without the traditional markup.
            </p>
          </div>
        </div>
      </section>

      <section id="collections" className="mx-auto max-w-7xl px-5 py-10 sm:px-8 md:py-14 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          <aside className="h-fit border border-velmora-espresso/10 bg-velmora-cream p-5 text-velmora-espresso lg:sticky lg:top-28">
            <div className="mb-5 flex items-center gap-2 border-b border-velmora-espresso/10 pb-4">
              <SlidersHorizontal className="h-4 w-4 text-velmora-gold" />
              <h2 className="text-xs font-bold uppercase tracking-[0.28em]">Filters</h2>
            </div>
            <FilterGroup title="Category" options={categoryOptions} value={category} onChange={setCategory} />
            <FilterGroup title="Price" options={priceOptions.map((option) => option.label)} value={price} onChange={setPrice} />
            <FilterGroup title="Material" options={materialOptions} value={material} onChange={setMaterial} />
          </aside>

          <div>
            <div className="mb-7 flex flex-col gap-4 border-b border-velmora-espresso/10 pb-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-velmora-mocha">
                Showing <span className="font-semibold text-velmora-espresso">{filteredProducts.length}</span> pieces
              </p>
              <label className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso">
                Sort
                <select
                  value={sort}
                  onChange={(event) => setSort(event.target.value)}
                  className="rounded-full border border-velmora-espresso/15 bg-velmora-cream px-4 py-2 text-sm font-semibold normal-case tracking-normal text-velmora-espresso outline-none focus:border-velmora-gold"
                >
                  {['Featured', 'Top Rated', 'Price: Low to High', 'Price: High to Low'].map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid gap-x-7 gap-y-12 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="border border-velmora-espresso/10 bg-velmora-cream p-10 text-center text-velmora-espresso">
                <p className="font-serif text-4xl">No pieces match those filters.</p>
                <p className="mt-3 text-sm text-velmora-mocha">Try widening the price range or selecting all categories.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <div className="border-b border-velmora-espresso/10 py-5 last:border-b-0 last:pb-0">
      <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-velmora-gold">{title}</h3>
      <div className="grid gap-2">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`rounded-full px-4 py-2 text-left text-sm transition ${value === option ? 'bg-velmora-espresso text-velmora-cream' : 'bg-velmora-ivory text-velmora-mocha hover:bg-velmora-champagne hover:text-velmora-espresso'}`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}
