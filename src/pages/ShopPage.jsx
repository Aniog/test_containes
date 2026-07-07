import { useMemo, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import { products } from '@/data/products'
import { useImageLoader } from '@/lib/useImageLoader'
import ProductCard from '@/components/product/ProductCard'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const priceOptions = [
  { label: 'All', min: 0, max: 999 },
  { label: '$30–$50', min: 30, max: 50 },
  { label: '$50–$80', min: 50, max: 80 },
  { label: '$80–$120', min: 80, max: 120 },
]
const materialOptions = ['All', '18K gold plated', 'Crystal accents', 'Hypoallergenic']

export default function ShopPage({ onAddToCart }) {
  const [category, setCategory] = useState('All')
  const [price, setPrice] = useState(priceOptions[0])
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')
  const containerRef = useImageLoader([category, price.label, material, sort])

  const filteredProducts = useMemo(() => {
    const visible = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const priceMatch = product.price >= price.min && product.price <= price.max
      const materialMatch =
        material === 'All' ||
        product.material.toLowerCase().includes(material.replace(' accents', '').toLowerCase()) ||
        (material === 'Hypoallergenic' && product.id === 'golden-sphere-huggies')

      return categoryMatch && priceMatch && materialMatch
    })

    return [...visible].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'name') return a.name.localeCompare(b.name)
      return products.findIndex((item) => item.id === a.id) - products.findIndex((item) => item.id === b.id)
    })
  }, [category, price, material, sort])

  return (
    <main ref={containerRef} className="min-h-screen bg-velmora-ivory pt-24 text-velmora-espresso">
      <section className="border-b border-velmora-linen bg-velmora-cream">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-bronze">The shop</p>
          <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="font-serifDisplay text-6xl font-semibold text-velmora-espresso md:text-7xl">Demi-fine essentials</h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-velmora-cocoa">
                Explore gold-plated earrings, necklaces, huggies, and gift-ready sets designed with a premium feel and accessible price point.
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-full border border-velmora-linen bg-velmora-mist px-5 py-3 text-sm font-semibold text-velmora-cocoa">
              <SlidersHorizontal className="h-4 w-4 text-velmora-bronze" />
              {filteredProducts.length} pieces
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[280px_1fr] md:py-14 lg:px-8">
        <aside className="h-fit rounded-[2rem] border border-velmora-linen bg-velmora-mist p-6 text-velmora-espresso md:sticky md:top-28">
          <h2 className="font-serifDisplay text-3xl font-semibold text-velmora-espresso">Filter</h2>
          <div className="mt-6 space-y-8">
            <FilterGroup title="Category" options={categoryOptions} selected={category} onSelect={setCategory} />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-cocoa">Price</p>
              <div className="mt-3 flex flex-wrap gap-2 md:flex-col">
                {priceOptions.map((option) => (
                  <button
                    key={option.label}
                    type="button"
                    className={`rounded-full border px-4 py-2 text-left text-sm font-semibold transition ${
                      price.label === option.label
                        ? 'border-velmora-espresso bg-velmora-espresso text-velmora-mist'
                        : 'border-velmora-linen bg-velmora-ivory text-velmora-cocoa hover:border-velmora-bronze hover:text-velmora-espresso'
                    }`}
                    onClick={() => setPrice(option)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
            <FilterGroup title="Material" options={materialOptions} selected={material} onSelect={setMaterial} />
          </div>
        </aside>

        <div>
          <div className="mb-6 flex flex-col gap-4 border-b border-velmora-linen pb-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-velmora-cocoa">Quiet-luxury favorites, sorted for gifting and daily wear.</p>
            <label className="flex items-center gap-3 text-sm font-semibold text-velmora-cocoa">
              Sort
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="rounded-full border border-velmora-linen bg-velmora-mist px-4 py-3 text-sm font-semibold text-velmora-espresso outline-none focus:border-velmora-bronze"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to high</option>
                <option value="price-high">Price: High to low</option>
                <option value="name">Name</option>
              </select>
            </label>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
              ))}
            </div>
          ) : (
            <div className="rounded-[2rem] border border-dashed border-velmora-linen bg-velmora-mist p-10 text-center text-velmora-cocoa">
              <p className="font-serifDisplay text-4xl text-velmora-espresso">No pieces match those filters.</p>
              <p className="mt-3 text-sm">Try a wider price range or another category.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, selected, onSelect }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-cocoa">{title}</p>
      <div className="mt-3 flex flex-wrap gap-2 md:flex-col">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            className={`rounded-full border px-4 py-2 text-left text-sm font-semibold transition ${
              selected === option
                ? 'border-velmora-espresso bg-velmora-espresso text-velmora-mist'
                : 'border-velmora-linen bg-velmora-ivory text-velmora-cocoa hover:border-velmora-bronze hover:text-velmora-espresso'
            }`}
            onClick={() => onSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}
