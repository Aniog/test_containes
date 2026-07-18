import { useEffect, useMemo, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'
import { findProductById } from '@/data/storefront'
import { ProductGallery } from '@/components/product/ProductGallery'
import { ProductInfo } from '@/components/product/ProductInfo'
import { ProductAccordions } from '@/components/product/ProductAccordions'
import { RelatedProducts } from '@/components/product/RelatedProducts'

function ProductDetail() {
  const containerRef = useRef(null)
  const { productId } = useParams()
  const product = useMemo(() => findProductById(productId), [productId])
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup?.()
    }
  }, [productId, activeIndex])

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  return (
    <>
      <section ref={containerRef} className="bg-velmora-parchment py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-velmora-truffle">
            <Link to="/">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/shop">Shop</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span>{product.shortName}</span>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <div>
              {product.gallery.map((image) => (
                <div key={image.id} className="hidden">
                  <h2 id={image.titleId}>{product.shortName}</h2>
                  <p id={image.descId}>{image.alt}</p>
                </div>
              ))}
              <ProductGallery product={product} activeIndex={activeIndex} onSelect={setActiveIndex} />
            </div>

            <div className="space-y-6">
              <ProductInfo product={product} />
              <ProductAccordions product={product} />
            </div>
          </div>
        </div>
      </section>
      <RelatedProducts currentId={product.id} />
    </>
  )
}

export default ProductDetail
