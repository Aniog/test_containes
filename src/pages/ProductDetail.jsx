import { useParams, Navigate } from 'react-router-dom'
import { useImageLoader } from '@/hooks/useImageLoader'
import { getProductById } from '@/data/products'
import { ImageGallery } from '@/components/product/ImageGallery'
import { ProductInfo } from '@/components/product/ProductInfo'
import { RelatedProducts } from '@/components/product/RelatedProducts'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const containerRef = useImageLoader([id])

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  return (
    <div ref={containerRef} className="bg-velmora-cream animate-fadeIn">
      <section className="pt-24 md:pt-28 pb-16 md:pb-24">
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <ImageGallery product={product} />
            <ProductInfo product={product} />
          </div>
        </div>
      </section>

      <RelatedProducts currentProductId={product.id} />
    </div>
  )
}
