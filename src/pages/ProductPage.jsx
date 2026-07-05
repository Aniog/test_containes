import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/lib/CartContext'
import { useSectionReveal } from '@/lib/useSectionReveal'

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-t border-warm-300">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs tracking-btn uppercase font-medium text-warm-900">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-warm-600 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 pb-4' : 'max-h-0'
        }`}
      >
        <div className="text-sm text-warm-700 leading-relaxed">{children}</div>
      </div>
    </div>
  )
}

const ProductPage = () => {
  const { id } = useParams()
  const product = products.find(p => p.id === Number(id))
  const { addItem } = useCart()
  const containerRef = useRef(null)
  const revealRef = useSectionReveal()

  const [selectedTone, setSelectedTone] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [imageKey, setImageKey] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
    setSelectedTone('gold')
    setQuantity(1)
    setSelectedImage(0)
  }, [id])

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [id, selectedImage])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-warm-700">Product not found</p>
          <Link to="/shop" className="mt-4 inline-block text-gold hover:text-gold-hover text-sm">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, selectedTone, quantity)
    setQuantity(1)
  }

  return (
    <div ref={(el) => {
      containerRef.current = el
      revealRef.current = el
    }} className="pt-20 md:pt-24 pb-16">
      <div className="max-w-content mx-auto px-5 md:px-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-xs text-warm-600">
          <Link to="/" className="hover:text-warm-900 transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-warm-900 transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-warm-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Image gallery */}
          <div>
            <div className="aspect-square rounded overflow-hidden bg-warm-200 mb-3">
              <img
                key={imageKey}
                data-strk-img-id={`pdp-${product.imgId}-${selectedImage}`}
                data-strk-img={`[${product.descId}] [${product.titleId}] jewelry detail`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover image-fade-enter"
              />
            </div>
            <div className="flex gap-2">
              {[0, 1].map(idx => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedImage(idx)
                    setImageKey((k) => k + 1)
                  }}
                  className={`w-16 h-16 md:w-20 md:h-20 rounded overflow-hidden bg-warm-200 border-2 transition-colors ${
                    selectedImage === idx ? 'border-gold' : 'border-transparent hover:border-warm-400'
                  }`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${product.imgId}-${idx}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}]${idx === 1 ? ' worn' : ''}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="py-2">
            <h1
              id={product.titleId}
              className="font-serif text-2xl md:text-3xl tracking-product uppercase text-warm-900"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-gold text-gold'
                        : 'text-warm-400'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-warm-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-xl font-serif text-warm-900 mt-3">${product.price}</p>

            <p
              id={product.descId}
              className="text-sm text-warm-700 mt-4 leading-relaxed"
            >
              {product.description}. Crafted with premium 18K gold plating over a durable base, each piece is designed to be worn daily while maintaining its lustrous finish.
            </p>

            {/* Tone selector */}
            <div className="mt-6">
              <span className="text-xs tracking-btn uppercase font-medium text-warm-900 block mb-3">
                Tone
              </span>
              <div className="flex gap-2">
                {['gold', 'silver'].map(tone => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`px-5 py-2 rounded text-xs tracking-btn uppercase font-medium transition-all duration-200 ${
                      selectedTone === tone
                        ? 'bg-warm-900 text-white'
                        : 'bg-white border border-warm-300 text-warm-700 hover:border-warm-900'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <span className="text-xs tracking-btn uppercase font-medium text-warm-900 block mb-3">
                Quantity
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 border border-warm-300 rounded flex items-center justify-center text-warm-700 hover:border-warm-400 transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="text-sm text-warm-900 w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 border border-warm-300 rounded flex items-center justify-center text-warm-700 hover:border-warm-400 transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-8 bg-gold hover:bg-gold-hover text-white text-xs tracking-btn uppercase font-medium py-4 rounded transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart — ${product.price * quantity}
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>
                  The {product.name} is a signature Velmora piece, designed to elevate any look with effortless sophistication. 
                  {product.description}. Each piece is hand-finished and inspected to ensure the highest quality.
                </p>
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="space-y-1.5">
                  <li>• 18K Gold Plated over stainless steel base</li>
                  <li>• Hypoallergenic — nickel and lead free</li>
                  <li>• Water-resistant finish</li>
                  <li>• Store in the provided pouch when not wearing</li>
                  <li>• Avoid direct contact with perfumes and lotions</li>
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <ul className="space-y-1.5">
                  <li>• Free worldwide shipping on all orders</li>
                  <li>• Standard delivery: 5–10 business days</li>
                  <li>• Express delivery available at checkout</li>
                  <li>• 30-day hassle-free returns</li>
                  <li>• Gift wrapping available</li>
                </ul>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="section-reveal mt-16 md:mt-24">
          <h2 className="font-serif text-xl md:text-2xl tracking-wide text-warm-900 text-center mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(rp => (
              <Link key={rp.id} to={`/product/${rp.id}`} className="group">
                <div className="aspect-square rounded overflow-hidden bg-warm-200 mb-3">
                  <img
                    data-strk-img-id={`related-${rp.imgId}`}
                    data-strk-img={`[${rp.descId}] [${rp.titleId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={rp.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif text-xs md:text-sm tracking-product uppercase text-warm-900 group-hover:text-gold transition-colors">
                  {rp.name}
                </h3>
                <p className="text-sm text-warm-900 mt-0.5">${rp.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
