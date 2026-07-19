import { useEffect, useRef } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import ProductGallery from '@/components/product/ProductGallery.jsx'
import ProductInfo from '@/components/product/ProductInfo.jsx'
import ProductCard from '@/components/product/ProductCard.jsx'
import { getProductBySlug, products } from '@/data/products.js'
import strkImgConfig from '@/strk-img-config.json'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [slug])

  if (!product) return <Navigate to="/shop" replace />
  const related = products.filter((item) => item.id !== product.id).slice(0, 4)
  return <main ref={containerRef} className="bg-velmora-ivory pt-24 text-velmora-espresso lg:pt-32"><section className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-16"><ProductGallery product={product} /><ProductInfo product={product} /></section><section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8"><div className="mb-8 border-t border-velmora-line pt-12"><p className="text-xs font-semibold uppercase tracking-luxury text-velmora-antique">Complete the ritual</p><h2 className="mt-3 font-serif text-5xl">You may also like</h2></div><div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">{related.map((item) => <ProductCard key={item.id} product={item} context={`related-${product.slug}`} />)}</div></section></main>
}
