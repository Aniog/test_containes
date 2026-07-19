import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { products } from '@/data/products'
import ProductGallery from '@/components/product/ProductGallery'
import ProductInfo from '@/components/product/ProductInfo'
import RelatedProducts from '@/components/product/RelatedProducts'

export default function ProductDetail() {
  const { productId } = useParams()
  const product = products.find(p => p.id === productId)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <p className="font-serif text-2xl text-espresso tracking-wide mb-4">Product Not Found</p>
          <Link to="/shop" className="text-xs tracking-widest uppercase text-gold hover:text-gold-light transition-colors font-sans font-medium border-b border-gold/30 pb-1">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-cream">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-8">
        {/* Breadcrumb */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-1.5 text-xs text-taupe hover:text-espresso transition-colors font-sans mb-6"
        >
          <ArrowLeft size={12} />
          Back to Shop
        </Link>

        {/* Product layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>
      </div>

      <RelatedProducts currentProductId={product.id} />
    </div>
  )
}
