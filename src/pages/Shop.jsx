import { SlidersHorizontal } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import ProductCard from '@/components/shop/ProductCard.jsx'
import { products } from '@/data/products.js'
import strkImgConfig from '@/strk-img-config.json'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const priceOptions = [
  { label: 'All', min: 0, max: 200 },
  { label: '$30–$50', min: 30, max: 50 },
  { label: '$50–$80', min: 50, max: 80 },
  { label: '$80–$120', min: 80, max: 120 },
]
const materialOptions = ['All', '18K Gold Plated', 'Hypoallergenic']

export default function Shop() {
  const [category, setCategory] = useState('All')
  const [price, setPrice] = useState(priceOptions[0])
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanupImages
    const frameId = window.requestAnimationFrame(() => {
      cleanupImages = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanupImages === 'function') {
        cleanupImages()
      }
    }
  }, [category, price.label, material, sort])

  const filteredProducts = useMemo(() => {
    const visibleProducts = products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category
      const matchesPrice = product.price >= price.min && product.price <= price.max
      const matchesMaterial = material === 'All' || product.material === material || material === 'Hypoallergenic'
      return matchesCategory && matchesPrice && matchesMaterial
    })

    return [...visibleProducts].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'rating') return b.rating - a.rating
      return 0
    })
  }, [category, price, material, sort])

  return (
    <main ref={containerRef} className="bg-velmora-cream pb-20 pt-28 text-velmora-ink">
      <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="border-b border-velmora-mist pb-9 pt-8">
          <p className="text-xs font-bold uppercase tracking-luxe text-velmora-gold-dark">Collection</p>
          <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h1 className="font-serif text-6xl leading-none text-velmora-ink md:text-8xl">Shop Velmora</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-velmora-espresso">
                Demi-fine earrings, necklaces, huggies, and gift-ready gold pieces designed with soft shine and lasting ease.
              </p>
            </div>
            <label className="flex max-w-xs flex-col gap-2 text-xs font-bold uppercase tracking-luxe text-velmora-gold-dark">
              Sort
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="h-12 border border-velmora-mist bg-velmora-porcelain px-4 text-sm font-medium normal-case tracking-normal text-velmora-ink focus:border-velmora-gold focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </label>
          </div>
        </div>

        <div className="grid gap-10 pt-10 lg:grid-cols-[17rem_1fr]">
          <aside className="text-velmora-ink">
            <div className="sticky top-28 border border-velmora-mist bg-velmora-porcelain p-5 shadow-sm">
              <div className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-luxe text-velmora-ink">
                <SlidersHorizontal className="h-4 w-4 text-velmora-gold-dark" />
                Filter
              </div>
              <FilterGroup title="Category" options={categoryOptions} value={category} onChange={setCategory} />
              <FilterGroup title="Price" options={priceOptions.map((option) => option.label)} value={price.label} onChange={(label) => setPrice(priceOptions.find((option) => option.label === label))} />
              <FilterGroup title="Material" options={materialOptions} value={material} onChange={setMaterial} />
            </div>
          </aside>

          <section>
            <div className="mb-6 flex items-center justify-between text-sm text-velmora-espresso">
              <p>{filteredProducts.length} pieces</p>
              <p className="hidden sm:block">Free worldwide shipping on every order</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <fieldset className="border-t border-velmora-mist py-5 first:border-t-0 first:pt-0">
      <legend className="mb-4 text-xs font-bold uppercase tracking-luxe text-velmora-gold-dark">{title}</legend>
      <div className="space-y-3">
        {options.map((option) => (
          <label key={option} className="flex cursor-pointer items-center gap-3 text-sm text-velmora-espresso transition hover:text-velmora-ink">
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
