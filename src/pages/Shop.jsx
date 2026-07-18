import { useEffect, useMemo, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'

const priceOptions = [
  { label: 'All prices', value: 'all' },
  { label: '$30–$50', value: '30-50' },
  { label: '$50–$80', value: '50-80' },
  { label: '$80–$120', value: '80-120' },
]

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const materialOptions = ['All', '18K Gold Plated']

export default function Shop({ onAddToCart }) {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category') || 'All'
  const [category, setCategory] = useState(categoryOptions.includes(initialCategory) ? initialCategory : 'All')
  const [price, setPrice] = useState('all')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('featured')
  const pageRef = useRef(null)

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const matchesCategory = category === 'All' || product.category === category
      const matchesMaterial = material === 'All' || product.material === material
      const matchesPrice = price === 'all' || (() => {
        const [min, max] = price.split('-').map(Number)
        return product.price >= min && product.price <= max
      })()
      return matchesCategory && matchesMaterial && matchesPrice
    })

    if (sort === 'price-low') return [...result].sort((a, b) => a.price - b.price)
    if (sort === 'price-high') return [...result].sort((a, b) => b.price - a.price)
    if (sort === 'name') return [...result].sort((a, b) => a.name.localeCompare(b.name))
    return result
  }, [category, material, price, sort])

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [category, material, price, sort])

  return (
    <main ref={pageRef} className="bg-velmora-ivory pt-24 text-velmora-ink">
      <section className="border-b border-velmora-line px-5 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-widerluxe text-velmora-bronze">Shop all</p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_0.55fr] lg:items-end">
            <h1 className="font-serif text-6xl leading-none text-velmora-ink md:text-7xl">Demi-fine pieces for every day and every gift.</h1>
            <p className="text-sm leading-7 text-velmora-taupe">Filter polished essentials, warm gold pieces, and gift-ready designs with a refined price point.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[260px_1fr] lg:px-10 lg:py-14">
        <aside className="h-fit border border-velmora-line bg-velmora-porcelain p-5 text-velmora-ink lg:sticky lg:top-28">
          <div className="flex items-center justify-between border-b border-velmora-line pb-4">
            <h2 className="font-serif text-2xl text-velmora-ink">Filters</h2>
            <button type="button" onClick={() => { setCategory('All'); setPrice('all'); setMaterial('All') }} className="text-xs font-bold uppercase tracking-luxe text-velmora-bronze">Reset</button>
          </div>

          <FilterGroup title="Category" options={categoryOptions} value={category} onChange={setCategory} />
          <FilterGroup title="Price" options={priceOptions.map((option) => option.label)} values={priceOptions.map((option) => option.value)} value={price} onChange={setPrice} />
          <FilterGroup title="Material" options={materialOptions} value={material} onChange={setMaterial} />
        </aside>

        <div>
          <div className="mb-6 flex flex-col gap-4 border-b border-velmora-line pb-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-velmora-taupe"><span className="font-semibold text-velmora-ink">{filteredProducts.length}</span> pieces</p>
            <label className="flex items-center gap-3 text-xs font-bold uppercase tracking-luxe text-velmora-taupe">
              Sort
              <select value={sort} onChange={(event) => setSort(event.target.value)} className="border border-velmora-line bg-velmora-porcelain px-4 py-3 text-sm normal-case tracking-normal text-velmora-ink focus:border-velmora-gold focus:outline-none">
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name</option>
              </select>
            </label>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />)}
            </div>
          ) : (
            <div className="border border-velmora-line bg-velmora-porcelain p-12 text-center text-velmora-ink">
              <h3 className="font-serif text-3xl">No pieces found</h3>
              <p className="mt-3 text-sm text-velmora-taupe">Try adjusting the filters to reveal more Velmora favorites.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, values, value, onChange }) {
  return (
    <fieldset className="border-b border-velmora-line py-5 last:border-b-0">
      <legend className="mb-4 text-xs font-bold uppercase tracking-luxe text-velmora-taupe">{title}</legend>
      <div className="space-y-2">
        {options.map((option, index) => {
          const optionValue = values ? values[index] : option
          return (
            <label key={optionValue} className="flex cursor-pointer items-center gap-3 text-sm text-velmora-ink">
              <input
                type="radio"
                name={title}
                value={optionValue}
                checked={value === optionValue}
                onChange={() => onChange(optionValue)}
                className="h-4 w-4 accent-velmora-gold"
              />
              <span>{option}</span>
            </label>
          )
        })}
      </div>
    </fieldset>
  )
}
