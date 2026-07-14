import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { products } from '../data/products'
import ProductGallery from '../components/product/ProductGallery'
import ProductInfo from '../components/product/ProductInfo'
import ProductAccordions from '../components/product/ProductAccordions'
import RelatedProducts from '../components/product/RelatedProducts'

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = products.find(p => p.id === id)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream-100 pt-20">
        <div className="text-center">
          <h1 className="heading-serif text-3xl text-warm-900 mb-4">Product Not Found</h1>
          <button onClick={() => navigate('/shop')} className="btn-outline-gold">
            Back to Shop
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="min-h-screen bg-cream-100 pt-24 pb-16">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-xs text-warm-800/60 hover:text-warm-900 transition-colors tracking-wider uppercase"
            >
              <ArrowLeft size={14} strokeWidth={1.5} />
              Back
            </button>
            <span className="text-cream-400">/</span>
            <span className="text-xs text-warm-800/60 tracking-wider uppercase">{product.category}</span>
          </div>

          {/* Product layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
            <ProductGallery product={product} />
            <div>
              <ProductInfo product={product} />
              <ProductAccordions product={product} />
            </div>
          </div>
        </div>
      </div>
      <RelatedProducts currentProductId={product.id} />
    </>
  )
}
