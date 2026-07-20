import React, { useMemo, useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import ProductCard from '@/components/common/ProductCard.jsx'
import { products } from '@/data/products.js'
import { useImageLoader } from '@/hooks/useImageLoader.js'

const categories = ['All', 'Earrings', 'Necklaces', 'Huggies', 'Sets']
const prices = ['All', '$30–$50', '$50–$80', '$80–$120']
const materials = ['All', '18K Gold Plated', 'Hypoallergenic']

export default function Shop() {
  const [category, setCategory] = useState('All')
  const [price, setPrice] = useState('All')
  const [material, setMaterial] = useState('All')
  const [sort, setSort] = useState('Featured')
  const pageRef = useImageLoader([category, price, material, sort])

  const filteredProducts = useMemo(() => {
    const inPrice = (product) => {
      if (price === '$30–$50') return product.price >= 30 && product.price <= 50
      if (price === '$50–$80') return product.price > 50 && product.price <= 80
      if (price === '$80–$120') return product.price > 80 && product.price <= 120
      return true
    }

    const list = products.filter((product) =>
      (category === 'All' || product.category === category) &&
      (material === 'All' || product.material === material || material === 'Hypoallergenic') &&
      inPrice(product),
    )

    if (sort === 'Price: Low to High') return [...list].sort((a, b) => a.price - b.price)
    if (sort === 'Price: High to Low') return [...list].sort((a, b) => b.price - a.price)
    return list
  }, [category, price, material, sort])

  return (
    <main ref={pageRef} className="bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="border-b border-velmora-mist px-5 pb-12 pt-8 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-antique">Velmora collection</p>
          <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <h1 className="font-serif text-6xl leading-none text-velmora-espresso md:text-8xl">Shop Jewelry</h1>
            <p className="max-w-md text-sm leading-7 text-velmora-cocoa/78">Discover demi-fine gold pieces designed for gifting, self-purchase, and everyday rituals.</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-10 md:px-8 lg:px-12 lg:py-14">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[260px_1fr]">
          <aside className="rounded-none border border-velmora-mist bg-white/45 p-5 text-velmora-espresso lg:sticky lg:top-28 lg:self-start">
            <div className="mb-6 flex items-center gap-2 border-b border-velmora-mist pb-4">
              <SlidersHorizontal className="h-4 w-4 text-velmora-antique" />
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-velmora-espresso">Filters</h2>
            </div>
            <FilterGroup title="Category" options={categories} value={category} onChange={setCategory} />
            <FilterGroup title="Price" options={prices} value={price} onChange={setPrice} />
            <FilterGroup title="Material" options={materials} value={material} onChange={setMaterial} />
          </aside>

          <div>
            <div className="mb-8 flex flex-col gap-4 border-b border-velmora-mist pb-5 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-velmora-cocoa/78">{filteredProducts.length} pieces</p>
              <label className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-velmora-cocoa">
                Sort
                <select value={sort} onChange={(event) => setSort(event.target.value)} className="border border-velmora-mist bg-white/70 px-4 py-2 text-sm font-normal normal-case tracking-normal text-velmora-espresso outline-none focus:border-velmora-champagne">
                  {['Featured', 'Price: Low to High', 'Price: High to Low'].map((option) => <option key={option}>{option}</option>)}
                </select>
              </label>
            </div>
            <div className="grid gap-x-5 gap-y-11 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProducts.map((product) => <ProductCard key={product.id} product={product} imageKeyPrefix="shop" />)}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function FilterGroup({ title, options, value, onChange }) {
  return (
    <div className="border-b border-velmora-mist py-5 last:border-b-0">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-velmora-antique">{title}</p>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option} className="flex cursor-pointer items-center gap-3 text-sm text-velmora-cocoa/85">
            <input type="radio" name={title} checked={value === option} onChange={() => onChange(option)} className="accent-velmora-antique" />
            {option}
          </label>
        ))}
      </div>
    </div>
  )
}
