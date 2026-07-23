import { useMemo, useRef, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import ProductCard from '@/components/product/ProductCard.jsx'
import FilterGroup from '@/components/shop/FilterGroup.jsx'
import { categories, materials, priceRanges, products } from '@/data/products'

const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low']

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(categories.includes(initialCategory) ? initialCategory : 'All')
  const [price, setPrice] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('Featured')
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [category, price, material, sort])

  const updateCategory = (value) => {
    setCategory(value)
    setSearchParams(value === 'All' ? {} : { category: value })
  }

  const filteredProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material
      const priceMatch = price === 'All'
        || (price === 'Under $50' && product.price < 50)
        || (price === '$50–$80' && product.price >= 50 && product.price <= 80)
        || (price === '$80+' && product.price > 80)
      return categoryMatch && materialMatch && priceMatch
    })

    if (sort === 'Price: Low to High') return [...filtered].sort((a, b) => a.price - b.price)
    if (sort === 'Price: High to Low') return [...filtered].sort((a, b) => b.price - a.price)
    return filtered
  }, [category, material, price, sort])

  return (
    <main ref={containerRef} className="bg-velmora-cream pt-28 text-velmora-ink">
      <section className="border-b border-velmora-ink/10 px-5 pb-10 pt-8 sm:px-8 md:pb-14 md:pt-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-velmora-clay">Velmora shop</p>
          <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 id="shop-title" className="font-serif text-6xl leading-none text-velmora-ink md:text-7xl">Shop demi-fine jewelry</h1>
              <p id="shop-subtitle" className="mt-5 max-w-2xl text-base leading-7 text-velmora-ink/70">Warm gold pieces for gifting, self-purchase, and everyday styling from $30–$120.</p>
            </div>
            <label className="flex min-w-56 flex-col gap-2 text-xs font-bold uppercase tracking-[0.18em] text-velmora-clay">
              Sort
              <select aria-label="Sort products" value={sort} onChange={(event) => setSort(event.target.value)} className="border border-velmora-ink/15 bg-velmora-cream px-4 py-3 text-sm font-medium normal-case tracking-normal text-velmora-ink outline-none focus:border-velmora-gold">
                {sortOptions.map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
            </label>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[250px_1fr] lg:py-14">
        <aside className="rounded-none border border-velmora-ink/10 bg-velmora-pearl p-5 text-velmora-ink lg:sticky lg:top-28 lg:self-start">
          <div className="mb-6 flex items-center justify-between border-b border-velmora-ink/10 pb-4">
            <h2 className="font-serif text-3xl text-velmora-ink">Filters</h2>
            <span className="text-xs uppercase tracking-[0.2em] text-velmora-ink/55">{filteredProducts.length} pieces</span>
          </div>
          <div className="space-y-6">
            <FilterGroup title="Category" options={categories} value={category} onChange={updateCategory} />
            <FilterGroup title="Price" options={priceRanges} value={price} onChange={setPrice} />
            <FilterGroup title="Material" options={materials} value={material} onChange={setMaterial} />
          </div>
        </aside>

        <div>
          {filteredProducts.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} contextId="shop-title" />
              ))}
            </div>
          ) : (
            <div className="border border-velmora-ink/10 bg-velmora-pearl px-6 py-16 text-center text-velmora-ink">
              <h3 className="font-serif text-4xl text-velmora-ink">No pieces found</h3>
              <p className="mt-3 text-sm text-velmora-ink/65">Adjust your filters to discover more Velmora jewelry.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
