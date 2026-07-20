import { useEffect, useMemo, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { SlidersHorizontal } from 'lucide-react'
import ProductGrid from '@/components/product/ProductGrid.jsx'
import { products } from '@/data/products.js'
import strkImgConfig from '@/strk-img-config.json'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const priceOptions = [
  { label: 'All prices', value: 'all' },
  { label: 'Under $50', value: 'under-50' },
  { label: '$50–$80', value: '50-80' },
  { label: '$80+', value: '80-plus' },
]
const materialOptions = ['18K Gold Plated', 'Hypoallergenic']

export default function Shop() {
  const [category, setCategory] = useState('All')
  const [priceRange, setPriceRange] = useState('all')
  const [material, setMaterial] = useState('18K Gold Plated')
  const [sort, setSort] = useState('featured')
  const pageRef = useRef(null)

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category
      const matchesMaterial = product.material === material || material === 'Hypoallergenic'
      const matchesPrice =
        priceRange === 'all' ||
        (priceRange === 'under-50' && product.price < 50) ||
        (priceRange === '50-80' && product.price >= 50 && product.price <= 80) ||
        (priceRange === '80-plus' && product.price > 80)

      return matchesCategory && matchesMaterial && matchesPrice
    })

    return [...filtered].sort((a, b) => {
      if (sort === 'price-low') return a.price - b.price
      if (sort === 'price-high') return b.price - a.price
      if (sort === 'name') return a.name.localeCompare(b.name)
      return products.findIndex((item) => item.id === a.id) - products.findIndex((item) => item.id === b.id)
    })
  }, [category, material, priceRange, sort])

  useEffect(() => {
    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [filteredProducts.map((product) => product.id).join('-'), sort])

  return (
    <main ref={pageRef} className="bg-velmora-ivory pt-24 text-velmora-espresso">
      <section className="border-b border-velmora-linen px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-velmora-bronze">Shop Velmora</p>
          <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="font-serif text-5xl leading-tight text-velmora-espresso md:text-7xl">Demi-fine jewelry, edited.</h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-velmora-mocha">Explore warm gold earrings, necklaces, huggies, and gift-ready sets designed for everyday polish.</p>
            </div>
            <label className="flex w-full max-w-xs flex-col gap-2 text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso">
              Sort by
              <select value={sort} onChange={(event) => setSort(event.target.value)} className="h-12 border border-velmora-linen bg-velmora-cream px-4 text-sm font-semibold normal-case tracking-normal text-velmora-espresso outline-none focus:border-velmora-champagne">
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name</option>
              </select>
            </label>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[260px_1fr] md:px-8 md:py-16">
        <aside className="h-fit border border-velmora-linen bg-velmora-cream p-5 text-velmora-espresso md:sticky md:top-28">
          <div className="mb-6 flex items-center gap-3 border-b border-velmora-linen pb-5">
            <SlidersHorizontal className="h-4 w-4 text-velmora-bronze" />
            <h2 className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso">Filters</h2>
          </div>

          <div className="space-y-8">
            <fieldset>
              <legend className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-bronze">Category</legend>
              <div className="mt-4 space-y-3">
                {categoryOptions.map((option) => (
                  <label key={option} className="flex cursor-pointer items-center gap-3 text-sm text-velmora-mocha">
                    <input type="radio" checked={category === option} onChange={() => setCategory(option)} className="accent-velmora-bronze" />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-bronze">Price</legend>
              <div className="mt-4 space-y-3">
                {priceOptions.map((option) => (
                  <label key={option.value} className="flex cursor-pointer items-center gap-3 text-sm text-velmora-mocha">
                    <input type="radio" checked={priceRange === option.value} onChange={() => setPriceRange(option.value)} className="accent-velmora-bronze" />
                    {option.label}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-bronze">Material</legend>
              <div className="mt-4 space-y-3">
                {materialOptions.map((option) => (
                  <label key={option} className="flex cursor-pointer items-center gap-3 text-sm text-velmora-mocha">
                    <input type="radio" checked={material === option} onChange={() => setMaterial(option)} className="accent-velmora-bronze" />
                    {option}
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
        </aside>

        <div>
          <div className="mb-8 flex items-center justify-between border-b border-velmora-linen pb-4 text-sm text-velmora-mocha">
            <p>{filteredProducts.length} pieces</p>
            <p className="hidden sm:block">Free worldwide shipping on every order</p>
          </div>
          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <div className="border border-velmora-linen bg-velmora-cream p-10 text-center text-velmora-espresso">
              <h3 className="font-serif text-3xl">No pieces found</h3>
              <p className="mt-3 text-sm leading-6 text-velmora-mocha">Try adjusting your filters to reveal more of the Velmora edit.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
