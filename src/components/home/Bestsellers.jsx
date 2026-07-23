import React from 'react'
import { Link } from 'react-router-dom'
import SectionHeader from '@/components/common/SectionHeader.jsx'
import ProductCard from '@/components/product/ProductCard.jsx'
import { products } from '@/data/products.js'

export default function Bestsellers() {
  return (
    <section id="shop" className="bg-velmora-ivory px-4 py-16 text-velmora-espresso sm:px-6 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader align="left" eyebrow="Bestsellers" title="The pieces she reaches for first" copy="Luminous ear cuffs, huggies, and giftable sets with the polish of fine jewelry and the ease of everyday wear." />
          <Link to="/shop" className="velmora-focus w-fit border border-velmora-espresso px-6 py-3 text-xs font-bold uppercase tracking-widest text-velmora-espresso transition hover:bg-velmora-espresso hover:text-velmora-ivory">View all</Link>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    </section>
  )
}
