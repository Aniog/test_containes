import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus } from 'lucide-react'
import { getProductBySlug, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import Button from '@/components/ui/Button'
import Accordion from '@/components/ui/Accordion'
import { formatPrice } from '@/lib/utils'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const { addToCart } = useCart()

  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || null)
  const [quantity, setQuantity] = useState(1)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  if (!product) {
    return (
      <div className="pt-20 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[#5C5346] mb-4">Product not found.</p>
          <Link to="/shop" className="text-[#C5A46E]">Browse our collection →</Link>
        </div>
      </div>
    )
  }

  const relatedProducts = getRelatedProducts(product.id, 4)

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity)
  }

  const accordionItems = [
    {
      title: "Description",
      content: product.longDescription,
    },
    {
      title: "Materials & Care",
      content: "18K gold-plated brass with hypoallergenic posts. Avoid contact with perfumes, lotions, and harsh chemicals. Store in the provided pouch when not in use. Gently polish with a soft cloth to maintain shine.",
    },
    {
      title: "Shipping & Returns",
      content: "Free worldwide shipping on all orders. Ships within 1-2 business days. Returns accepted within 30 days of delivery. Items must be unworn and in original packaging. Contact us for return authorization.",
    },
  ]

  const images = product.images.length > 0 
    ? product.images 
    : [{ id: 'placeholder', query: 'gold jewelry' }]

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="text-xs tracking-[1.5px] text-[#8A7F6D] mb-8">
          <Link to="/shop" className="hover:text-[#0A0806]">SHOP</Link>
          <span className="mx-2">/</span>
          <span>{product.category.toUpperCase()}</span>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          {/* IMAGE GALLERY */}
          <div>
            <div className="aspect-[4/3] bg-[#E5DFD3] overflow-hidden mb-4">
              <img 
                src={product.images?.[selectedImageIndex] || `https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=900&h=675&fit=crop`}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnails */}
            <div className="flex gap-3">
              {images.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`gallery-thumb w-20 h-20 bg-[#E5DFD3] overflow-hidden ${selectedImageIndex === idx ? 'active' : ''}`}
                >
                  <img 
                    src={product.images?.[idx] || `https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=160&h=160&fit=crop`}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* PRODUCT INFO */}
          <div className="pt-2">
            <h1 className="product-name font-serif text-3xl md:text-4xl tracking-[2.5px] mb-3">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <p className="text-2xl text-[#0A0806]">{formatPrice(product.price)}</p>
              <div className="flex items-center gap-1.5 text-sm">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'star fill-current' : 'text-[#E5DFD3]'}`} />
                  ))}
                </div>
                <span className="text-[#8A7F6D]">{product.rating} ({product.reviewCount})</span>
              </div>
            </div>

            <p className="text-[#5C5346] leading-relaxed mb-8">
              {product.description}
            </p>

            {/* VARIANT SELECTOR */}
            <div className="mb-8">
              <p className="filter-label mb-3">Tone</p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    disabled={!variant.available}
                    className={`variant-pill ${selectedVariant?.id === variant.id ? 'active' : ''} ${!variant.available ? 'opacity-40 cursor-not-allowed' : ''}`}
                  >
                    {variant.label}
                  </button>
                ))}
              </div>
            </div>

            {/* QUANTITY */}
            <div className="mb-8">
              <p className="filter-label mb-3">Quantity</p>
              <div className="flex items-center border border-[#C5A46E]/30 w-fit">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-[#F5F2ED] transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 text-sm tabular-nums">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-[#F5F2ED] transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* ADD TO CART */}
            <Button onClick={handleAddToCart} size="lg" className="w-full mb-4">
              ADD TO CART
            </Button>
            <p className="text-center text-xs text-[#8A7F6D] tracking-wide">Ships in 1-2 business days</p>

            {/* ACCORDIONS */}
            <div className="mt-12 border-t border-[#E5DFD3] pt-2">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>

        {/* YOU MAY ALSO LIKE */}
        <div className="mt-20 pt-12 border-t border-[#E5DFD3]">
          <h3 className="font-serif text-2xl tracking-wide mb-10">You May Also Like</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
            {relatedProducts.map((related) => (
              <Link key={related.id} to={`/product/${related.slug}`} className="group block">
                <div className="aspect-[4/3] bg-[#E5DFD3] overflow-hidden mb-4">
                  <img 
                    src={related.images?.[0] || `https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=450&fit=crop`}
                    alt={related.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h4 className="font-serif text-sm tracking-[2px] text-[#0A0806] group-hover:text-[#C5A46E] transition-colors">
                  {related.name}
                </h4>
                <p className="text-sm text-[#5C5346] mt-1">{formatPrice(related.price)}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
