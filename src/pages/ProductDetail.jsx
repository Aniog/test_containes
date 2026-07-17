import { Navigate, useParams } from 'react-router-dom'
import { useRef } from 'react'
import ProductCard from '@/components/common/ProductCard.jsx'
import ProductAccordions from '@/components/product/ProductAccordions.jsx'
import ProductGallery from '@/components/product/ProductGallery.jsx'
import ProductInfo from '@/components/product/ProductInfo.jsx'
import { getProductBySlug, getRelatedProducts } from '@/data/products.js'
import { useImageLoader } from '@/lib/useImageLoader.js?velmora-direct'

export default function ProductDetail({ onAdd }) {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const pageRef = useRef(null)
  useImageLoader(pageRef, [slug])

  if (!product) return <Navigate to="/shop" replace />

  const related = getRelatedProducts(slug)

  return (
    <main ref={pageRef} className="bg-velmora-ivory pt-28 text-velmora-ink">
      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 md:pb-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <ProductGallery product={product} />
          <div>
            <ProductInfo product={product} onAdd={onAdd} />
            <ProductAccordions product={product} />
          </div>
        </div>
        <section className="mt-20 border-t border-velmora-line pt-12">
          <div className="mb-8 flex items-end justify-between gap-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.32em] text-velmora-gold">Complete the ritual</p>
              <h2 className="mt-3 font-serif text-4xl text-velmora-ink md:text-5xl">You may also like</h2>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} onAdd={onAdd} context="related" />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
