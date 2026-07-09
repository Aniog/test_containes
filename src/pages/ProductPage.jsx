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
          <p className="text-velmora-muted">The piece you're looking for isn't available.</p>
        </div>
      </div>
    )
  }

  return (
    <main className="bg-velmora-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <ProductGallery images={product.images} productName={product.name} />
          <ProductInfo product={product} />
        </div>
      </div>
      <RelatedProducts currentProductId={product.id} />
    </main>
  )
}
