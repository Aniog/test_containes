import React, { useEffect, useMemo, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import ProductCard from '@/components/product/ProductCard.jsx'
import SectionHeader from '@/components/common/SectionHeader.jsx'
import { products } from '@/data/products.js'

const categoryOptions = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Gift Sets']
const priceOptions = ['All', '$30–$50', '$50–$80', '$80–$120']
const materialOptions = ['All', '18K Gold Plated', 'Gold Vermeil']

export default function Shop() {
  const [category, setCategory] = useState('All')
  const [price, setPrice] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('Featured')
  const containerRef = useRef(null)

  const filteredProducts = useMemo(() => {
    const priceRanges = {
      '$30–$50': [30, 50],
      '$50–$80': [50, 80],
      '$80–$120': [80, 120],
    }
    const result = products.filter((product) => {
      const categoryMatch = category === 'All' || product.category === category
      const materialMatch = material === 'All' || product.material === material
      const range = priceRanges[price]
      const priceMatch = !range || (product.price >= range[0] && product.price <= range[1])
      return categoryMatch && materialMatch && priceMatch
    })
    if (sort === 'Price: Low to High') return [...result].sort((a, b) => a.price - b.price)
    if (sort === 'Price: High to Low') return [...result].sort((a, b) => b.price - a.price)
    return result
  }, [category, price, material, sort])

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => ImageHelper.loadImages(strkImgConfig, containerRef.current))
    return () => window.cancelAnimationFrame(frame)
  }, [filteredProducts])

  const FilterGroup = ({ title, options, value, onChange }) => (
    <div className="border-b border-velmora-sand/70 py-6">
      <h3 className="text-xs font-bold uppercase tracking-widest text-velmora-espresso">{title}</h3>
      <div className="mt-4 flex flex-wrap gap-2 lg:flex-col lg:items-start">
        {options.map((option) => (
          <button key={option} type="button" className={`velmora-focus rounded-full border px-4 py-2 text-sm transition ${value === option ? 'border-velmora-espresso bg-velmora-espresso text-velmora-ivory' : 'border-velmora-sand bg-velmora-pearl text-velmora-smoke hover:border-velmora-antique hover:text-velmora-espresso'}`} onClick={() => onChange(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  )

  return (
    <main ref={containerRef} className="bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="The shop" title="Demi-fine essentials with heirloom energy" copy="Filter by silhouette, finish, and budget to find gold jewelry made for everyday glow." />
          <div className="mt-12 grid gap-10 lg:grid-cols-[260px_1fr]">
            <aside className="h-fit border-y border-velmora-sand/70 lg:sticky lg:top-28">
              <FilterGroup title="Category" options={categoryOptions} value={category} onChange={setCategory} />
              <FilterGroup title="Price" options={priceOptions} value={price} onChange={setPrice} />
              <FilterGroup title="Material" options={materialOptions} value={material} onChange={setMaterial} />
            </aside>
            <div>
              <div className="mb-8 flex flex-col gap-4 border-b border-velmora-sand/70 pb-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-velmora-smoke">{filteredProducts.length} pieces</p>
                <label className="flex items-center gap-3 text-sm text-velmora-smoke">
                  Sort
                  <select value={sort} onChange={(event) => setSort(event.target.value)} className="border border-velmora-sand bg-velmora-pearl px-4 py-3 text-sm text-velmora-espresso focus:border-velmora-antique focus:outline-none">
                    {['Featured', 'Price: Low to High', 'Price: High to Low'].map((option) => <option key={option}>{option}</option>)}
                  </select>
                </label>
              </div>
              {filteredProducts.length > 0 ? (
                <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredProducts.map((product) => <ProductCard key={product.id} product={product} compact />)}
                </div>
              ) : (
                <div className="border border-velmora-sand/70 bg-velmora-pearl p-12 text-center text-velmora-espresso">
                  <p className="font-serif text-3xl">No pieces match those filters.</p>
                  <p className="mt-3 text-sm text-velmora-smoke">Try another category or price range.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
