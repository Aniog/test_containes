import React from 'react'
import { useParams } from 'react-router-dom'
import ProductDetail from '../components/product/ProductDetail'
import { products } from '../data/products'

export default function ProductPage() {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id))
  
  if (!product) {
    return (
      <div className="pt-20 lg:pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="velmora-heading text-3xl mb-4">Product Not Found</h1>
          <p className="text-[var(--velmora-text-muted)]">The piece you're looking for doesn't exist.</p>
        </div>
      </div>
    )
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id && (p.category === product.category || p.material === product.material))
    .slice(0, 4)

  return <ProductDetail product={product} relatedProducts={relatedProducts} />
}
