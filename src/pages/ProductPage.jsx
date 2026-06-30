import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { products } from '../data/products'
import ProductDetail from '../components/product/ProductDetail'
import RelatedProducts from '../components/product/RelatedProducts'
import { useCart } from '../context/CartContext'
import { toast } from 'sonner'

export default function ProductPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addItem } = useCart()

  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <div className="container-wide py-32 text-center">
        <h1 className="font-serif-display text-4xl mb-4">Product Not Found</h1>
        <p className="text-[var(--velmora-text-muted)] mb-6">The piece you're looking for doesn't exist.</p>
        <button onClick={() => navigate('/shop')} className="btn-primary">
          Back to Shop
        </button>
      </div>
    )
  }

  const handleAddToCart = (product, variant, quantity) => {
    addItem(product, variant, quantity)
    toast.success(`${product.shortName} added to your bag`)
  }

  return (
    <main>
      <ProductDetail product={product} onAddToCart={handleAddToCart} />
      <RelatedProducts products={products} currentProductId={product.id} />
    </main>
  )
}
