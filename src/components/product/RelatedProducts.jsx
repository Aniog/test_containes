import React from 'react'
import { getRelatedProducts } from '@/data/products'
import ProductCard from '@/components/shop/ProductCard'
import SectionHeading from '@/components/layout/SectionHeading'

const RelatedProducts = ({ currentSlug }) => {
  const items = getRelatedProducts(currentSlug)

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
      <SectionHeading
        eyebrow="You may also like"
        title="A few more pieces to complete the stack"
        description="Layered silhouettes and gifting-ready finishes that pair beautifully together."
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {items.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  )
}

export default RelatedProducts
