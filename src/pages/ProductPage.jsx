import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { products } from '../data/products'
import ProductDetail from '../components/product/ProductDetail'
import RelatedProducts from '../components/product/RelatedProducts'

export default function ProductPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <div className="velmora-container mx-auto px-4 py-32 text-center">
        <h1 className="velmora-heading velmora-heading-md mb-4">Product Not Found</h1>
        <p className="velmora-body text-[var(--velmora-text-muted)] mb-8">
          The piece you're looking for may have been moved or is no longer available.
        </p>
        <button
          onClick={() => navigate('/shop')}
          className="velmora-btn velmora-btn-outline"
        >
          Browse Collection
        </button>
      </div>
    )
  }

  return (
    <main>
      <ProductDetail product={product} />
      <RelatedProducts currentProductId={product.id} />
    </main>
  )
}
