import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/products'
import ProductGallery from '../components/product/ProductGallery'
import ProductInfo from '../components/product/ProductInfo'
import RelatedProducts from '../components/product/RelatedProducts'

export default function ProductPage() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-velmora-cream">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-velmora-base mb-4">Product Not Found</h1>
          <p className="text-velmora-text-light">The product you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  return (
    <main className="bg-velmora-cream">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="text-xs text-velmora-text-light">
          <span className="hover:text-velmora-base cursor-pointer">Home</span>
          <span className="mx-2">/</span>
          <span className="hover:text-velmora-base cursor-pointer">Shop</span>
          <span className="mx-2">/</span>
          <span className="text-velmora-base">{product.name}</span>
        </nav>
      </div>

      {/* Product Detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <ProductGallery images={product.images} productName={product.name} />
          <ProductInfo product={product} />
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts currentProductId={product.id} />
    </main>
  )
}
