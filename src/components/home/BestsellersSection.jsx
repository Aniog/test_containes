import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '@/data/products'
import ProductCard from '@/components/shop/ProductCard'
import SectionHeading from '@/components/layout/SectionHeading'

const BestsellersSection = () => (
  <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <SectionHeading
        eyebrow="Bestsellers"
        title="Pieces our clients return to, gift, and wear on repeat"
        description="Thoughtfully finished silhouettes in warm gold tones, designed to feel premium while staying within reach."
      />
      <Link
        to="/shop"
        className="text-xs uppercase tracking-[0.32em] text-velmora-ink transition-colors hover:text-velmora-gold"
      >
        Shop All
      </Link>
    </div>

    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  </section>
)

export default BestsellersSection
