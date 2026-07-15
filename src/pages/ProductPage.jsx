import { useParams, useNavigate } from 'react-router-dom'
import { products } from '@/data/products'
import ProductGallery from '@/components/product/ProductGallery'
import ProductAccordions from '@/components/product/ProductAccordions'
import RelatedProducts from '@/components/product/RelatedProducts'

export default function ProductPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <main className="pt-20 md:pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-[#1A1A1A]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Product Not Found
          </h1>
          <button
            onClick={() => navigate('/shop')}
            className="mt-4 text-xs tracking-widest uppercase text-[#B8860B] hover:underline"
          >
            Back to Shop
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-[#6B6560] mb-8">
          <button onClick={() => navigate('/')} className="hover:text-[#B8860B] transition-colors">
            Home
          </button>
          <span className="mx-2">/</span>
          <button onClick={() => navigate('/shop')} className="hover:text-[#B8860B] transition-colors">
            Shop
          </button>
          <span className="mx-2">/</span>
          <span className="text-[#1A1A1A]">{product.shortName}</span>
        </nav>

        <h2 id="pdp-section-title" className="sr-only">Product Details</h2>

        {/* Product gallery & info */}
        <ProductGallery product={product} />

        {/* Accordions */}
        <ProductAccordions />

        {/* Related products */}
        <RelatedProducts product={product} />
      </div>
    </main>
  )
}
