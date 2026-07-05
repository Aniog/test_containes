import { useParams } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import ProductGallery from '@/components/product/ProductGallery'
import ProductInfo from '@/components/product/ProductInfo'
import ProductCard from '@/components/ProductCard'
import { Link } from 'react-router-dom'

export default function ProductPage() {
  const { id } = useParams()
  const containerRef = useRef(null)
  const product = products.find((p) => p.id === id)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [id])

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-charcoal-950">Product Not Found</h1>
          <Link to="/shop" className="mt-4 inline-block text-sm text-gold-700 hover:underline">
            Browse all products
          </Link>
        </div>
      </div>
    )
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4)

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 pb-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-xs text-charcoal-500">
          <Link to="/" className="hover:text-charcoal-800 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-charcoal-800 transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal-800 capitalize">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <ProductGallery product={product} />
          <ProductInfo product={product} />
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24">
          <h2 className="font-serif text-xl md:text-2xl text-charcoal-950 tracking-wide text-center mb-8 md:mb-12">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
