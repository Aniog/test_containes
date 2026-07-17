import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import ProductGallery from '@/components/product/ProductGallery'
import ProductInfo from '@/components/product/ProductInfo'
import RelatedProducts from '@/components/product/RelatedProducts'
import products from '@/data/products'

export default function ProductPage() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="font-serif text-3xl text-brand-base mb-4">Product Not Found</p>
          <Link to="/shop" className="btn-text">Return to Shop</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 animate-fade-in">
      {/* Breadcrumb */}
      <div className="section-padding py-6">
        <Link to="/shop" className="btn-text text-xs">
          <ChevronLeft className="w-3.5 h-3.5 mr-1" />
          Back to Shop
        </Link>
      </div>

      {/* Product detail */}
      <div className="section-padding pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-6xl mx-auto">
          <ProductGallery images={product.images} />
          <ProductInfo product={product} />
        </div>
      </div>

      <div className="hairline" />

      {/* Related */}
      <RelatedProducts currentId={product.id} category={product.category} />
    </div>
  )
}
