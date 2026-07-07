import React, { useState } from 'react'
import { Star, Minus, Plus, ShoppingBag, ChevronDown, ChevronUp } from 'lucide-react'
import { useParams, Link } from 'react-router-dom'
import { products } from '../../data/products'
import { useCart } from '../../context/CartContext'

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-velmora-warm/50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 font-sans text-sm tracking-wide-luxury uppercase"
      >
        {title}
        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        <div className="pb-4 font-sans text-sm text-velmora-text-light leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )
}

const ProductDetail = () => {
  const { id } = useParams()
  const { addItem } = useCart()
  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  const product = products.find(p => p.id === id)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary inline-block">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const images = [product.images.primary, product.images.secondary]

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id && (p.category === product.category || p.bestseller))
    .slice(0, 4)

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[3/4] overflow-hidden bg-velmora-warm/30 mb-4 rounded-sm">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-24 overflow-hidden rounded-sm border-2 transition-colors ${
                    selectedImage === index ? 'border-velmora-gold' : 'border-transparent'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:py-8">
            <h1 className="font-serif text-2xl md:text-3xl tracking-wide-luxury uppercase mb-2">
              {product.name}
            </h1>
            <p className="font-sans text-sm text-velmora-text-light mb-4">{product.subtitle}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-velmora-gold fill-velmora-gold' : 'text-velmora-warm'}`}
                  />
                ))}
              </div>
              <span className="font-sans text-sm text-velmora-text-light">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-sans text-2xl mb-6">${product.price}</p>

            {/* Description */}
            <p className="font-sans text-sm text-velmora-text-light leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variants */}
            <div className="mb-6">
              <label className="font-sans text-xs tracking-wide-luxury uppercase block mb-3">
                Finish
              </label>
              <div className="flex gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant.value}
                    onClick={() => setSelectedVariant(variant.value)}
                    className={`variant-pill ${selectedVariant === variant.value ? 'active' : ''}`}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="font-sans text-xs tracking-wide-luxury uppercase block mb-3">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 border border-velmora-warm hover:border-velmora-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-sans text-lg w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 border border-velmora-warm hover:border-velmora-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="btn-primary w-full flex items-center justify-center gap-2 mb-4"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Bag — ${(product.price * quantity).toFixed(2)}
            </button>

            <p className="font-sans text-xs text-velmora-text-muted text-center">
              Free shipping on all orders · 30-day returns
            </p>
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-16 max-w-3xl mx-auto">
          <Accordion title="Description">
            <p>{product.description}</p>
            <p className="mt-4">Each piece is carefully crafted and quality-checked before shipping. Our demi-fine jewelry is designed to be worn daily and loved for years.</p>
          </Accordion>
          <Accordion title="Materials & Care">
            <p>{product.materials}</p>
            <p className="mt-4">To keep your jewelry looking its best, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.</p>
          </Accordion>
          <Accordion title="Shipping & Returns">
            <p>Free worldwide shipping on all orders. Standard delivery takes 5-10 business days. Express shipping available at checkout.</p>
            <p className="mt-4">We offer 30-day hassle-free returns. Items must be unworn and in original packaging.</p>
          </Accordion>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 pt-16 border-t border-velmora-warm/50">
            <h2 className="font-serif text-2xl md:text-3xl text-center mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map(product => (
                <Link key={product.id} to={`/product/${product.id}`} className="group">
                  <div className="aspect-[3/4] overflow-hidden bg-velmora-warm/30 mb-3 rounded-sm">
                    <img
                      src={product.images.primary}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-xs tracking-wide-luxury uppercase text-center">
                    {product.name}
                  </h3>
                  <p className="font-sans text-sm text-center mt-1">${product.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductDetail
