import React from 'react'
import ProductCard from '@/components/common/ProductCard.jsx'
import { products } from '@/data/products.js'

export default function Bestsellers() {
  return (
    <section id="bestsellers" className="bg-velmora-ivory px-5 py-20 text-velmora-espresso md:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-antique">Most loved</p>
            <h2 className="mt-3 font-serif text-5xl leading-none text-velmora-espresso md:text-6xl">Bestsellers</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-velmora-cocoa/78">The pieces customers return to for easy shine, refined gifting, and everyday polish.</p>
        </div>
        <div className="grid grid-cols-1 gap-x-5 gap-y-11 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => <ProductCard key={product.id} product={product} imageKeyPrefix="bestseller" />)}
        </div>
      </div>
    </section>
  )
}
