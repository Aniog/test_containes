import React, { useState } from 'react'
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import ProductCard from '../product/ProductCard'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-[var(--velmora-border)]">
      <button
        className="w-full flex items-center justify-between py-4 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-sm tracking-wider uppercase">{title}</span>
        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {open && (
        <div className="pb-4 text-sm text-[var(--velmora-text-muted)] leading-relaxed">
          {children}
        </div>
      )}
    </div>
  )
}

export default function ProductDetail({ product, relatedProducts }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="pt-20 lg:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[3/4] bg-[var(--velmora-bg-alt)] mb-4 overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  className={`w-20 h-24 overflow-hidden border-2 transition-colors ${
                    selectedImage === index
                      ? 'border-[var(--velmora-dark)]'
                      : 'border-transparent hover:border-[var(--velmora-border)]'
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:py-8">
            {product.badge && (
              <span className="inline-block bg-[var(--velmora-accent)] text-white text-[10px] tracking-widest uppercase px-3 py-1.5 mb-4">
                {product.badge}
              </span>
            )}

            <h1 className="velmora-product-name text-2xl sm:text-3xl mb-3">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? 'fill-[var(--velmora-star)] text-[var(--velmora-star)]' : 'text-[var(--velmora-border)]'}
                  />
                ))}
              </div>
              <span className="text-sm text-[var(--velmora-text-muted)]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="velmora-heading text-2xl mb-6">${product.price}</p>

            <p className="text-sm text-[var(--velmora-text-muted)] leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="mb-6">
              <p className="text-xs tracking-wider uppercase mb-3">Color</p>
              <div className="flex gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant}
                    className={`px-6 py-2.5 text-xs tracking-wider uppercase border transition-colors ${
                      selectedVariant === variant
                        ? 'border-[var(--velmora-dark)] bg-[var(--velmora-dark)] text-white'
                        : 'border-[var(--velmora-border)] hover:border-[var(--velmora-dark)]'
                    }`}
                    onClick={() => setSelectedVariant(variant)}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <p className="text-xs tracking-wider uppercase mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  className="w-10 h-10 flex items-center justify-center border border-[var(--velmora-border)] hover:border-[var(--velmora-dark)] transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus size={14} />
                </button>
                <span className="text-lg w-8 text-center">{quantity}</span>
                <button
                  className="w-10 h-10 flex items-center justify-center border border-[var(--velmora-border)] hover:border-[var(--velmora-dark)] transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            <button
              className={`velmora-btn-accent w-full py-4 text-sm ${added ? 'bg-green-700' : ''}`}
              onClick={handleAddToCart}
            >
              {added ? 'Added to Cart' : 'Add to Cart'}
            </button>

            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
                <p className="mt-2">Each piece comes in our signature gift box, ready for gifting or keeping.</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>18K gold plated over sterling silver base. Hypoallergenic and nickel-free.</p>
                <p className="mt-2">To maintain the finish, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>Free worldwide shipping on all orders. Delivery typically takes 5-10 business days.</p>
                <p className="mt-2">30-day hassle-free returns. Items must be unworn and in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-16 lg:mt-24">
            <h2 className="velmora-heading text-3xl sm:text-4xl text-center mb-10">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
