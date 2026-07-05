import { useParams, Navigate } from 'react-router-dom'
import { getProductBySlug } from '@/data/products'
import ProductGallery from '@/components/product/ProductGallery'
import ProductInfo from '@/components/product/ProductInfo'
import ProductAccordion from '@/components/product/ProductAccordion'
import RelatedProducts from '@/components/product/RelatedProducts'
import { useStrkImages } from '@/hooks/useStrkImages'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const containerRef = useStrkImages([slug])

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  return (
    <div ref={containerRef}>
      <div className="pt-24 md:pt-28 pb-16 md:pb-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <ProductGallery product={product} />
            <ProductInfo product={product} />
          </div>

          <div className="mt-14 md:mt-20 max-w-2xl">
            <ProductAccordion product={product} />
          </div>
        </div>
      </div>

      <RelatedProducts product={product} />
    </div>
  )
}
