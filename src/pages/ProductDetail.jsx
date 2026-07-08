import React, { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Plus, Minus, Star, Truck, RotateCcw, Shield } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

export default function ProductDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { addToCart, cartCount } = useCart()

  const product = products.find(p => p.slug === slug)
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [openAccordion, setOpenAccordion] = useState(null)
  const [addedToCart, setAddedToCart] = useState(false)

  useEffect(() => {
    if (!product) navigate('/shop')
  }, [product, navigate])

  if (!product) return null

  const related = products.filter(p => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity)
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const accordions = [
    {
      title: 'Description',
      content: product.description,
    },
    {
      title: 'Materials & Care',
      content: `Material: ${product.material}\n\nCare Instructions: Avoid contact with water, perfume, and lotions. Store in a cool, dry place. Clean gently with a soft cloth.`,
    },
    {
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. 30-day hassle-free returns. Each piece arrives in our signature Velmora gift box.',
    },
  ]

  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12 lg:py-20">
      {/* Breadcrumb */}
      <Link
        to="/shop"
        className="inline-flex items-center gap-2 text-sm text-velmora-textMuted hover:text-velmora-gold transition-colors mb-10 uppercase tracking-wide"
      >
        <ArrowLeft size={16} />
        Back to Shop
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left - Image Gallery */}
        <div>
          {/* Main Image */}
          <div className="aspect-square bg-velmora-warm rounded-lg overflow-hidden mb-4">
            <div className="w-full h-full bg-gradient-to-br from-velmora-deep/5 to-velmora-gold/5 flex items-center justify-center">
              <span className="text-velmora-gold/30 text-sm uppercase tracking-wider">Product Image {activeImageIndex + 1}</span>
            </div>
          </div>
          {/* Thumbnails */}
          <div className="flex gap-3">
            {product.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveImageIndex(i)}
                className={`w-20 h-20 rounded border-2 overflow-hidden transition-colors ${
                  activeImageIndex === i ? 'border-velmora-gold' : 'border-velmora-border hover:border-velmora-gold/50'
                }`}
              >
                <div className="w-full h-full bg-velmora-warm flex items-center justify-center">
                  <span className="text-velmora-gold/30 text-xs">{i + 1}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right - Product Info */}
        <div className="lg:pt-4">
          {/* Category */}
          <p className="text-xs uppercase tracking-widest text-velmora-gold mb-3 font-medium">
            {product.category}
          </p>

          {/* Product Name */}
          <h1
            className="font-serif text-3xl lg:text-4xl text-velmora-text mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, letterSpacing: '0.05em' }}
          >
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < Math.floor(product.rating) ? 'text-velmora-gold' : 'text-velmora-border'}
                  fill={i < Math.floor(product.rating) ? '#C9A96E' : 'none'}
                />
              ))}
            </div>
            <span className="text-sm text-velmora-textMuted">
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>

          {/* Price */}
          <p className="text-2xl font-medium text-velmora-text mb-8">
            ${product.price}
          </p>

          {/* Short Description */}
          <p className="text-velmora-textMuted leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Variant Selector */}
          <div className="mb-8">
            <p className="text-sm uppercase tracking-wide text-velmora-textMuted mb-3">Tone</p>
            <div className="flex gap-3">
              {product.variants.map((variant) => (
                <button
                  key={variant}
                  onClick={() => setSelectedVariant(variant)}
                  className={`px-6 py-3 border text-sm uppercase tracking-wide transition-colors ${
                    selectedVariant === variant
                      ? 'border-velmora-gold bg-velmora-gold/5 text-velmora-gold'
                      : 'border-velmora-border text-velmora-textMuted hover:border-velmora-gold/50'
                  }`}
                >
                  {variant}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Add to Cart */}
          <div className="flex gap-4 mb-10">
            {/* Quantity */}
            <div className="flex items-center border border-velmora-border">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-3 hover:bg-velmora-warm transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus size={16} />
              </button>
              <span className="px-6 py-3 text-sm min-w-[60px] text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-3 hover:bg-velmora-warm transition-colors"
                aria-label="Increase quantity"
              >
                <Plus size={16} />
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className={`flex-1 py-4 text-sm uppercase tracking-wider font-medium transition-colors duration-300 ${
                addedToCart
                  ? 'bg-green-600 text-white'
                  : 'bg-velmora-deep text-velmora-cream hover:bg-velmora-gold hover:text-velmora-deep'
              }`}
            >
              {addedToCart ? 'Added!' : 'Add to Cart'}
            </button>
          </div>

          {/* Trust Icons */}
          <div className="grid grid-cols-3 gap-4 py-8 border-t border-velmora-border">
            {[
              { icon: Truck, text: 'Free Shipping' },
              { icon: RotateCcw, text: '30-Day Returns' },
              { icon: Shield, text: 'Hypoallergenic' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="text-center">
                <Icon size={20} className="text-velmora-gold mx-auto mb-2" />
                <p className="text-xs text-velmora-textMuted uppercase tracking-wide">{text}</p>
              </div>
            ))}
          </div>

          {/* Accordions */}
          <div className="border-t border-velmora-border">
            {accordions.map((acc, i) => (
              <div key={acc.title} className="border-b border-velmora-border">
                <button
                  onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                  className="w-full flex items-center justify-between py-5 text-left"
                >
                  <span className="text-sm uppercase tracking-wide font-medium">{acc.title}</span>
                  <Plus
                    size={16}
                    className={`text-velmora-gold transition-transform duration-300 ${
                      openAccordion === i ? 'rotate-45' : ''
                    }`}
                  />
                </button>
                {openAccordion === i && (
                  <div className="pb-5 text-sm text-velmora-textMuted leading-relaxed whitespace-pre-line">
                    {acc.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-20 lg:mt-28 pt-16 border-t border-velmora-border">
        <p className="text-velmora-gold text-sm tracking-widest uppercase mb-3 font-medium text-center">You May Also Like</p>
        <h2
          className="font-serif text-2xl lg:text-3xl text-velmora-text text-center mb-12"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
        >
          Related Products
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {related.map((prod) => (
            <Link key={prod.id} to={`/product/${prod.slug}`} className="group block">
              <div className="aspect-square bg-velmora-warm rounded-lg mb-4 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-velmora-deep/5 to-velmora-gold/5 flex items-center justify-center group-hover:from-velmora-deep/10 transition-colors">
                  <span className="text-velmora-gold/30 text-xs uppercase tracking-wider">Image</span>
                </div>
              </div>
              <h3 className="text-sm uppercase tracking-wider text-velmora-text mb-1 font-medium">
                {prod.name}
              </h3>
              <p className="text-sm font-medium">${prod.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
