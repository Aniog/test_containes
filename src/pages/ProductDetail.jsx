import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, ChevronUp, Check } from 'lucide-react'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-t border-ink-100">
      <button
        className="w-full flex items-center justify-between py-4 text-left"
        onClick={() => setOpen(!open)}
      >
        <span className="text-xs tracking-widest uppercase font-sans text-ink-700">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-ink-400" />
        ) : (
          <ChevronDown className="w-4 h-4 text-ink-400" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="text-sm text-ink-600 font-sans leading-relaxed space-y-3">
          {children}
        </div>
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const { addItem } = useCart()
  const product = products.find((p) => p.id === id)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    setSelectedImage(0)
    setSelectedVariant('gold')
    setQuantity(1)
    setAddedToCart(false)
  }, [id])

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h1 className="font-serif text-3xl text-ink-950">Product not found</h1>
        <Link to="/shop" className="btn-outline text-xs mt-6 inline-block">
          Back to Shop
        </Link>
      </div>
    )
  }

  const relatedProducts = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  )

  const handleAddToCart = () => {
    addItem(product, quantity, selectedVariant)
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  return (
    <div className="bg-cream-50">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-4">
        <div className="flex items-center gap-2 text-[11px] tracking-wider uppercase font-sans text-ink-400">
          <Link to="/" className="hover:text-ink-700 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-ink-700 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-ink-700">{product.name}</span>
        </div>
      </div>

      {/* Product main section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left — Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-ink-100 rounded-sm overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  className={`w-16 h-16 md:w-20 md:h-20 bg-ink-100 rounded-sm overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? 'border-gold-500' : 'border-transparent'
                  }`}
                  onClick={() => setSelectedImage(i)}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right — Details */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating)
                        ? 'text-gold-500 fill-gold-500'
                        : 'text-ink-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-ink-400 font-sans">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <h1 className="product-name text-sm md:text-base text-ink-950 mt-1">
              {product.name}
            </h1>
            <p className="font-serif text-2xl md:text-3xl text-gold-600 mt-2">
              ${product.price}
            </p>

            <p className="text-sm text-ink-600 font-sans leading-relaxed mt-4 border-t border-ink-100 pt-4">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="text-[11px] tracking-widest uppercase font-sans text-ink-500 mb-3">
                Finish: <span className="text-ink-950 capitalize">{selectedVariant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    className={`px-5 py-2.5 text-xs tracking-wider uppercase font-sans rounded-sm border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-ink-950 bg-ink-950 text-cream-50'
                        : 'border-ink-200 bg-transparent text-ink-600 hover:border-ink-400'
                    }`}
                    onClick={() => setSelectedVariant(v)}
                  >
                    {v} Tone
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to cart */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-[11px] tracking-widest uppercase font-sans text-ink-500">
                  Quantity
                </span>
                <div className="flex items-center border border-ink-200 rounded">
                  <button
                    className="px-3 py-2 text-ink-500 hover:bg-ink-100 transition-colors"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="px-4 text-sm font-sans min-w-[2rem] text-center">
                    {quantity}
                  </span>
                  <button
                    className="px-3 py-2 text-ink-500 hover:bg-ink-100 transition-colors"
                    onClick={() => setQuantity(quantity + 1)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className="btn-accent w-full text-xs flex items-center justify-center gap-2"
              >
                {addedToCart ? (
                  <>
                    <Check className="w-4 h-4" />
                    Added to Cart
                  </>
                ) : (
                  `Add to Cart — $${(product.price * quantity).toFixed(2)}`
                )}
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p><strong className="text-ink-700">Materials:</strong> {product.materials}</p>
                <p><strong className="text-ink-700">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p><strong className="text-ink-700">Shipping:</strong> {product.shipping}</p>
                <p><strong className="text-ink-700">Returns:</strong> {product.returns}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="border-t border-ink-100 py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl md:text-3xl text-ink-950 mb-10 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((rp) => (
                <Link key={rp.id} to={`/product/${rp.id}`} className="group">
                  <div className="aspect-square bg-ink-100 rounded-sm overflow-hidden">
                    <img
                      src={rp.images[0]}
                      alt={rp.name}
                      className="w-full h-full object-cover card-hover group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-3">
                    <h3 className="product-name truncate">{rp.name}</h3>
                    <p className="product-price mt-1">${rp.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}