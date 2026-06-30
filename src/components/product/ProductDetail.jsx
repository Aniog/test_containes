import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react'
import { products } from '@/data/products'
import { getImage } from '@/data/images'
import { useCart } from '@/components/cart/CartContext'

const productImageMap = {
  'vivid-aura-jewels': { primary: 'vivid-aura-primary', secondary: 'vivid-aura-secondary', thumb: 'vivid-aura-thumb' },
  'majestic-flora-nectar': { primary: 'majestic-flora-primary', secondary: 'majestic-flora-secondary', thumb: 'majestic-flora-primary' },
  'golden-sphere-huggies': { primary: 'golden-sphere-primary', secondary: 'golden-sphere-secondary', thumb: 'golden-sphere-primary' },
  'amber-lace-earrings': { primary: 'amber-lace-primary', secondary: 'amber-lace-secondary', thumb: 'amber-lace-primary' },
  'royal-heirloom-set': { primary: 'royal-heirloom-primary', secondary: 'royal-heirloom-secondary', thumb: 'royal-heirloom-primary' },
}

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-t border-warm-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs tracking-wide-2 uppercase font-semibold text-charcoal">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-warm-500" />
        ) : (
          <ChevronDown className="w-4 h-4 text-warm-500" />
        )}
      </button>
      {open && (
        <div className="pb-4 text-sm text-warm-600 leading-relaxed">
          {children}
        </div>
      )}
    </div>
  )
}

const ProductDetail = () => {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const { addItem } = useCart()

  const [selectedTone, setSelectedTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-charcoal mb-4">Product Not Found</h2>
          <Link to="/shop" className="text-gold text-sm tracking-wide-2 uppercase hover:text-gold-dark transition-colors">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const imgKeys = productImageMap[product.id] || {}
  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, selectedTone, quantity)
  }

  return (
    <div className="bg-cream pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-xs text-warm-500">
          <Link to="/" className="hover:text-charcoal transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-charcoal transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </div>
      </div>

      {/* Product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-y-auto hide-scrollbar">
              {[0, 1].map((i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 border-2 transition-colors duration-300 ${
                    selectedImage === i ? 'border-gold' : 'border-warm-200'
                  }`}
                >
                  <img
                    src={getImage(i === 0 ? imgKeys.primary : imgKeys.secondary)}
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] overflow-hidden bg-warm-100">
              <img
                src={getImage(selectedImage === 0 ? imgKeys.primary : imgKeys.secondary)}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="lg:pl-4">
            <h1
              id={product.titleId}
              className="font-serif text-2xl md:text-3xl uppercase tracking-ultra-wide text-charcoal font-light"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.round(product.rating) ? 'fill-gold text-gold' : 'text-warm-300'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-warm-500">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-2xl font-serif text-charcoal mt-4">${product.price}</p>

            <p
              id={product.descId}
              className="text-sm text-warm-600 leading-relaxed mt-4"
            >
              {product.description}. Crafted with premium {product.material.toLowerCase()} materials for lasting beauty and comfort. Each piece is hypoallergenic and designed for everyday wear.
            </p>

            {/* Tone selector */}
            <div className="mt-6">
              <label className="text-xs tracking-wide-2 uppercase font-semibold text-charcoal block mb-3">
                Tone
              </label>
              <div className="flex gap-2">
                {product.tone.map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`px-5 py-2 text-xs tracking-wider uppercase font-medium transition-all duration-300 ${
                      selectedTone === tone
                        ? 'bg-charcoal text-white'
                        : 'bg-warm-100 text-warm-600 hover:bg-warm-200'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <label className="text-xs tracking-wide-2 uppercase font-semibold text-charcoal block mb-3">
                Quantity
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-warm-200 flex items-center justify-center text-warm-600 hover:border-gold hover:text-gold transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-sm font-medium text-charcoal w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-warm-200 flex items-center justify-center text-warm-600 hover:border-gold hover:text-gold transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-8 bg-gold text-charcoal text-xs tracking-wide-2 uppercase font-semibold py-4 flex items-center justify-center gap-2 hover:bg-gold-light transition-all duration-300"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>
                  The {product.name} is a stunning piece from our demi-fine collection. {product.description}, featuring {product.material.toLowerCase()} construction that ensures both durability and a luxurious feel. Perfect for everyday wear or special occasions.
                </p>
              </Accordion>

              <Accordion title="Materials & Care">
                <ul className="space-y-2">
                  <li>• 18K Gold Plated over premium brass</li>
                  <li>• Hypoallergenic — nickel and lead free</li>
                  <li>• Tarnish-resistant coating</li>
                  <li>• Store in a cool, dry place away from moisture</li>
                  <li>• Remove before swimming or exercising</li>
                  <li>• Clean gently with a soft polishing cloth</li>
                </ul>
              </Accordion>

              <Accordion title="Shipping & Returns">
                <ul className="space-y-2">
                  <li>• Free worldwide shipping on all orders</li>
                  <li>• Standard delivery: 5–7 business days</li>
                  <li>• Express delivery: 2–3 business days (available at checkout)</li>
                  <li>• 30-day hassle-free returns</li>
                  <li>• Items must be unworn and in original packaging</li>
                  <li>• Gift wrapping available at checkout</li>
                </ul>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="border-t border-warm-200 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-light tracking-wide text-charcoal text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((rp) => {
              const rpKeys = productImageMap[rp.id] || {}
              return (
                <Link key={rp.id} to={`/product/${rp.id}`} className="group">
                  <div className="aspect-[3/4] overflow-hidden bg-warm-100">
                    <img
                      src={getImage(rpKeys.primary)}
                      alt={rp.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3">
                    <h3 className="font-serif text-xs uppercase tracking-ultra-wide text-charcoal">{rp.name}</h3>
                    <p className="text-sm font-medium text-charcoal mt-1">${rp.price}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
