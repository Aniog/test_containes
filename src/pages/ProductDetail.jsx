import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import ImageGallery from '@/components/product/ImageGallery'
import ProductInfo from '@/components/product/ProductInfo'
import ProductCard from '@/components/ui/ProductCard'
import { products } from '@/data/products'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <p className="text-truffle-500">Product not found.</p>
        <Link to="/shop" className="mt-4 inline-block text-gold text-sm">Back to shop</Link>
      </div>
    )
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4)

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        {/* Breadcrumb */}
        <Link to="/shop" className="inline-flex items-center gap-2 text-xs text-truffle-500 hover:text-gold transition-colors mb-8">
          <ArrowLeft size={14} />
          Back to Shop
        </Link>

        {/* Product layout */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <ImageGallery images={product.images} productName={product.name} />
          <ProductInfo product={product} />
        </div>
      </div>

      {/* Related products */}
      <section className="py-20 md:py-28 mt-12 border-t border-truffle-200/30">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          <h2 className="font-serif text-2xl md:text-3xl font-light tracking-wider uppercase text-truffle-800 text-center">
            You May Also Like
          </h2>
          <div className="mt-4 mx-auto w-12 h-px bg-gold mb-12" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
