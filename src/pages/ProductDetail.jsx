import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductGallery from '@/components/product/ProductGallery.jsx'
import ProductPurchasePanel from '@/components/product/ProductPurchasePanel.jsx'
import ProductAccordions from '@/components/product/ProductAccordions.jsx'
import ProductCard from '@/components/common/ProductCard.jsx'
import { products } from '@/data/products.js'
import { useImageLoader } from '@/hooks/useImageLoader.js'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((item) => item.id === id) || products[0]
  const related = products.filter((item) => item.id !== product.id).slice(0, 4)
  const pageRef = useImageLoader([product.id])

  return (
    <main ref={pageRef} className="bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="px-5 pb-16 pt-8 md:px-8 lg:px-12 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <Link to="/shop" className="text-xs font-bold uppercase tracking-[0.2em] text-velmora-antique hover:text-velmora-espresso">Back to shop</Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
            <ProductGallery product={product} />
            <div>
              <ProductPurchasePanel product={product} />
              <ProductAccordions product={product} />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-velmora-mist bg-velmora-parchment px-5 py-16 md:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-velmora-antique">Consider also</p>
              <h2 className="mt-3 font-serif text-5xl leading-none text-velmora-espresso">You may also like</h2>
            </div>
          </div>
          <div className="grid gap-x-5 gap-y-11 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => <ProductCard key={item.id} product={item} imageKeyPrefix="related" />)}
          </div>
        </div>
      </section>
    </main>
  )
}
