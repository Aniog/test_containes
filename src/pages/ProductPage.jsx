import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/components/cart/CartContext'
import { Star, Minus, Plus, ChevronDown, Heart, Share2 } from 'lucide-react'
import { FadeInSection } from '@/hooks/useAnimations'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-stone-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <span className="text-xs uppercase tracking-nav font-semibold text-stone-800 group-hover:text-gold transition-colors">{title}</span>
        <ChevronDown className={`w-4 h-4 text-stone-500 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="text-sm text-stone-600 leading-relaxed">{children}</div>
      </div>
    </div>
  )
}

export default function ProductPage() {
  const { id } = useParams()
  const containerRef = useRef(null)
  const product = products.find((p) => p.id === Number(id))
  const { addItem } = useCart()

  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [id])

  useEffect(() => {
    setAdded(false)
    setSelectedVariant('Gold')
    setQuantity(1)
    setSelectedImage(0)
  }, [id])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-stone-800">Product not found</h1>
          <Link to="/shop" className="text-sm text-gold mt-4 inline-block hover:underline">Back to shop</Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div ref={containerRef} className="bg-cream min-h-screen pt-20 md:pt-24">
      <div className="max-w-container mx-auto px-5 md:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="text-xs text-stone-500 mb-6 md:mb-8">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-stone-800">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Image Gallery */}
          <div>
            <div className="aspect-[4/5] bg-stone-100 overflow-hidden mb-3">
              <img
                data-strk-img-id={`pdp-${product.imgId}-${selectedImage}`}
                data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry detail`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
            <div className="flex gap-2">
              {[0, 1].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-16 h-20 bg-stone-100 overflow-hidden border-2 transition-all duration-300 ${
                    selectedImage === idx ? 'border-gold' : 'border-transparent hover:border-stone-300'
                  }`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${product.imgId}-${idx}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:pl-4">
            <h1
              id={product.titleId}
              className="font-serif text-2xl md:text-3xl uppercase tracking-ultra-wide text-stone-800"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-stone-300'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-stone-500">({product.reviews} reviews)</span>
            </div>

            <p className="font-serif text-2xl text-stone-800 mt-4">${product.price}</p>

            <p
              id={product.descId}
              className="text-sm text-stone-600 mt-4 leading-relaxed"
            >
              {product.description}. Crafted with premium {product.material.toLowerCase()} materials for lasting shine and comfort. Each piece is nickel-free and hypoallergenic.
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <span className="text-xs uppercase tracking-nav font-semibold text-stone-800 block mb-3">
                Tone: {selectedVariant}
              </span>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 text-xs uppercase tracking-btn font-medium border transition-all duration-300 ${
                      selectedVariant === v
                        ? 'border-gold bg-gold text-warm-white'
                        : 'border-stone-300 text-stone-600 hover:border-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <span className="text-xs uppercase tracking-nav font-semibold text-stone-800 block mb-3">Quantity</span>
              <div className="flex items-center border border-stone-300 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-stone-600 hover:text-stone-800 transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-sm text-stone-800 border-x border-stone-300">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-stone-600 hover:text-stone-800 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full mt-8 py-4 text-xs uppercase tracking-btn font-semibold transition-all duration-300 ${
                added
                  ? 'bg-green-700 text-warm-white'
                  : 'bg-gold text-warm-white hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20'
              }`}
            >
              {added ? 'Added to Bag ✓' : 'Add to Cart'}
            </button>

            {/* Wishlist & Share */}
            <div className="flex items-center gap-6 mt-4">
              <button className="flex items-center gap-2 text-xs uppercase tracking-nav text-stone-500 hover:text-gold transition-colors">
                <Heart className="w-4 h-4" />
                Add to Wishlist
              </button>
              <button className="flex items-center gap-2 text-xs uppercase tracking-nav text-stone-500 hover:text-gold transition-colors">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>
                  The {product.name} is a signature Velmora piece, designed to elevate your everyday look. 
                  {product.description}. Perfect for both casual wear and special occasions, this versatile piece 
                  transitions effortlessly from day to night.
                </p>
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="space-y-1.5">
                  <li>&bull; 18K Gold Plated over premium brass base</li>
                  <li>&bull; Hypoallergenic & nickel-free</li>
                  <li>&bull; Tarnish-resistant coating</li>
                  <li>&bull; Store in the provided pouch when not wearing</li>
                  <li>&bull; Avoid direct contact with perfume or water</li>
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <ul className="space-y-1.5">
                  <li>&bull; Free worldwide shipping on all orders</li>
                  <li>&bull; Standard delivery: 5–10 business days</li>
                  <li>&bull; Express delivery: 2–4 business days</li>
                  <li>&bull; 30-day hassle-free returns</li>
                  <li>&bull; Gift-ready packaging included</li>
                </ul>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <FadeInSection>
          <div className="mt-16 md:mt-24">
            <h2 className="font-serif text-2xl md:text-3xl text-stone-800 tracking-wide text-center mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group">
                  <div className="aspect-[4/5] bg-stone-100 overflow-hidden mb-3">
                    <img
                      data-strk-img-id={`related-${p.imgId}`}
                      data-strk-img={`[${p.descId}] [${p.titleId}] gold jewelry`}
                      data-strk-img-ratio="4x5"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-xs md:text-sm uppercase tracking-ultra-wide text-stone-800">
                    {p.name}
                  </h3>
                  <p className="text-sm font-medium text-stone-800 mt-0.5">${p.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  )
}
