import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, Heart } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { products } from '@/data/products'
import { toast } from 'sonner'

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-charcoal-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm tracking-wide font-sans text-charcoal-800">{title}</span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-charcoal-500" />
        ) : (
          <ChevronDown className="w-4 h-4 text-charcoal-500" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4">
          <p className="text-sm text-charcoal-600 font-sans font-light leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  )
}

function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <div className="group">
      <div className="relative aspect-[3/4] overflow-hidden bg-charcoal-100 mb-3">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="font-serif text-sm tracking-wide text-charcoal-900">{product.name}</h3>
      <p className="text-sm font-sans mt-1 text-charcoal-700">${product.price}</p>
    </div>
  )
}

export default function ProductPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)

  const product = products.find((p) => p.slug === slug)

  useEffect(() => {
    if (!product) {
      navigate('/shop')
    }
  }, [product, navigate])

  if (!product) return null

  const relatedProducts = products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.material === product.material))
    .slice(0, 4)

  const handleAddToCart = () => {
    addToCart(product, selectedVariant, quantity)
    toast.success(`${product.name} added to your bag`)
  }

  return (
    <main className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="aspect-[3/4] bg-charcoal-100 overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-24 overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-charcoal-900' : 'border-transparent hover:border-charcoal-300'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:py-8">
            {product.badge && (
              <span className="inline-block bg-gold-100 text-gold-700 text-[10px] tracking-widest uppercase px-3 py-1.5 mb-4 font-sans">
                {product.badge}
              </span>
            )}

            <h1 className="font-serif text-3xl md:text-4xl text-charcoal-900 tracking-wide mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4"
                    fill={i < Math.floor(product.rating) ? '#f0b42e' : 'none'}
                    color={i < Math.floor(product.rating) ? '#f0b42e' : '#d1d1d1'}
                  />
                ))}
              </div>
              <span className="text-sm text-charcoal-500 font-sans">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl font-serif text-charcoal-900 mb-6">${product.price}</p>

            {/* Description */}
            <p className="text-charcoal-600 font-sans font-light leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div className="mb-6">
              <label className="text-xs tracking-widest uppercase text-charcoal-700 mb-3 block font-sans">
                Finish
              </label>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 text-xs tracking-widest uppercase border transition-all font-sans ${
                      selectedVariant === variant
                        ? 'border-charcoal-900 bg-charcoal-900 text-white'
                        : 'border-charcoal-300 text-charcoal-600 hover:border-charcoal-500'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <label className="text-xs tracking-widest uppercase text-charcoal-700 mb-3 block font-sans">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-charcoal-300 hover:border-charcoal-500 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-lg font-sans w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-charcoal-300 hover:border-charcoal-500 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 py-4 bg-charcoal-900 text-white text-xs tracking-widest uppercase hover:bg-charcoal-800 transition-colors flex items-center justify-center gap-2 font-sans"
              >
                <ShoppingBag className="w-4 h-4" />
                Add to Bag
              </button>
              <button
                className="w-14 h-14 flex items-center justify-center border border-charcoal-300 hover:border-charcoal-500 transition-colors"
                aria-label="Add to wishlist"
              >
                <Heart className="w-5 h-5 text-charcoal-600" />
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex items-center gap-6 text-xs text-charcoal-500 font-sans font-light">
              <span>Free Shipping</span>
              <span className="w-px h-4 bg-charcoal-200" />
              <span>30-Day Returns</span>
              <span className="w-px h-4 bg-charcoal-200" />
              <span>Hypoallergenic</span>
            </div>
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-16 max-w-3xl">
          <Accordion title="Description">
            {product.description} Each Velmora piece is designed with intention — balancing timeless elegance with modern wearability. Our demi-fine collection offers the look and feel of luxury jewelry at an accessible price point, without compromising on quality or ethics.
          </Accordion>
          <Accordion title="Materials & Care">
            {product.materials} To maintain the beauty of your piece, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Gently polish with a soft cloth to restore shine.
          </Accordion>
          <Accordion title="Shipping & Returns">
            Free worldwide shipping on all orders. Standard delivery takes 5-7 business days. Express shipping available at checkout. We offer hassle-free 30-day returns — simply contact our team to initiate a return. Items must be unworn and in original packaging.
          </Accordion>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="font-serif text-2xl md:text-3xl text-charcoal-900 font-light mb-8 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
