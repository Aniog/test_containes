import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/products'
import ProductGallery from '../components/product/ProductGallery'
import ProductInfo from '../components/product/ProductInfo'
import ProductAccordions from '../components/product/ProductAccordions'
import RelatedProducts from '../components/product/RelatedProducts'

export default function ProductPage() {
  const { id } = useParams()
  const product = products.find(p => p.id === Number(id))

  if (!product) {
    return (
      <div className="pt-32 text-center">
        <h1 className="serif-heading text-4xl mb-4">Product Not Found</h1>
        <p className="text-muted-foreground">The product you're looking for doesn't exist.</p>
      </div>
    )
  }

  return (
    <main className="pt-20 lg:pt-24">
      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Gallery */}
          <ProductGallery images={product.images} name={product.name} />
          
          {/* Info */}
          <ProductInfo product={product} />
        </div>

        {/* Accordions */}
        <div className="mt-16 lg:mt-24 max-w-3xl">
          <ProductAccordions />
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts currentProductId={product.id} category={product.category} />
    </main>
  )
}
