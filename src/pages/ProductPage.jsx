import { useParams, Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { getProductById } from '@/data/products'
import ProductGallery from '@/components/product/ProductGallery'
import ProductDetails from '@/components/product/ProductDetails'
import RelatedProducts from '@/components/product/RelatedProducts'

export default function ProductPage() {
  const { id } = useParams()
  const product = getProductById(id)

  if (!product) {
    return (
      <div className="pt-20 md:pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-2xl text-velmora-gray mb-4">Piece Not Found</p>
          <Link to="/shop" className="text-xs tracking-widest uppercase text-velmora-charcoal border-b border-velmora-charcoal/30 pb-0.5 hover:border-velmora-gold hover:text-velmora-gold transition-colors">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-velmora-gray">
          <Link to="/" className="hover:text-velmora-charcoal transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/shop" className="hover:text-velmora-charcoal transition-colors">Shop</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-velmora-charcoal">{product.name}</span>
        </nav>
      </div>

      {/* Product section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <ProductGallery images={product.images} productName={product.name} />
          <ProductDetails product={product} />
        </div>
      </div>

      {/* Related products */}
      <RelatedProducts productIds={product.related} />
    </main>
  )
}
