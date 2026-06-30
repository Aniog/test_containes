import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Plus, Minus, ChevronDown, ShoppingBag, ArrowLeft } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/components/cart/CartContext'
import ProductCard from '@/components/ui/ProductCard'
import { formatPrice } from '@/lib/utils'

const accordionItems = [
  {
    title: 'Description',
    content: 'Each Velmora piece is thoughtfully designed to blend timeless elegance with modern wearability. Our demi-fine jewelry is crafted to be your everyday luxury — pieces you reach for without a second thought, yet special enough for the moments that matter.',
  },
  {
    title: 'Materials & Care',
    content: '18K gold plated over brass base. Hypoallergenic — nickel and lead free. To maintain the finish, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Gently wipe with a soft cloth after each use.',
  },
  {
    title: 'Shipping & Returns',
    content: 'Free worldwide shipping on all orders. Standard delivery: 5–7 business days. Express delivery: 2–3 business days (available at checkout). 30-day hassle-free returns — no questions asked. Items must be unworn and in original packaging.',
  },
]

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === Number(id))
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const [selectedTone, setSelectedTone] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <p className="font-serif text-2xl text-stone-900 mb-4">Product not found</p>
          <Link to="/shop" className="text-sm text-gold hover:text-gold-dark underline">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, selectedTone, quantity)
  }

  return (
    <div ref={containerRef} className="bg-cream min-h-screen pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
        {/* Back link */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-xs tracking-wider uppercase text-stone-500 hover:text-stone-900 transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div className="space-y-3">
            <div className="aspect-[3/4] bg-ivory rounded-sm overflow-hidden">
              <img
                data-strk-img-id={`pdp-${product.image}-main-q1r2s3`}
                data-strk-img={`[pdp-name] [pdp-desc] gold jewelry detail`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-ivory rounded-sm overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                  <img
                    data-strk-img-id={`pdp-${product.image}-thumb-${i}-t1u2v3`}
                    data-strk-img={`[pdp-name] [pdp-desc] gold jewelry angle ${i}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="md:py-4">
            <h1
              id="pdp-name"
              className="font-serif text-2xl md:text-3xl tracking-ultra-wide uppercase text-stone-900 font-medium"
            >
              {product.name}
            </h1>
            <p id="pdp-desc" className="sr-only">{product.description}</p>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-stone-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-stone-500">({product.reviews})</span>
            </div>

            <p className="font-serif text-2xl text-stone-900 mt-4">{formatPrice(product.price)}</p>

            <p className="text-stone-600 leading-relaxed mt-4 text-sm">
              {product.description}
            </p>

            {/* Tone selector */}
            <div className="mt-6">
              <p className="text-xs tracking-wider uppercase text-stone-500 mb-3">Tone</p>
              <div className="flex gap-3">
                {product.tone.map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`px-5 py-2 text-xs tracking-wider uppercase font-medium border transition-all duration-300 ${
                      selectedTone === tone
                        ? 'border-stone-900 bg-stone-900 text-cream'
                        : 'border-stone-300 text-stone-600 hover:border-stone-900'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs tracking-wider uppercase text-stone-500 mb-3">Quantity</p>
              <div className="inline-flex items-center border border-stone-300">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-stone-500 hover:text-stone-900 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 text-sm font-medium text-stone-900 min-w-[2rem] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-stone-500 hover:text-stone-900 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-8 py-4 bg-gold text-white text-xs tracking-ultra-wide uppercase font-medium hover:bg-gold-dark transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap gap-4 text-xs text-stone-500">
              <span>Free Shipping</span>
              <span>·</span>
              <span>30-Day Returns</span>
              <span>·</span>
              <span>Hypoallergenic</span>
            </div>

            {/* Accordions */}
            <div className="mt-8 border-t border-stone-200">
              {accordionItems.map((item, i) => (
                <div key={item.title} className="border-b border-stone-200">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm tracking-wider uppercase text-stone-900 font-medium">
                      {item.title}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-stone-400 transition-transform duration-300 ${
                        openAccordion === i ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === i ? 'max-h-60 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className="text-sm text-stone-600 leading-relaxed">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-stone-900 tracking-wide text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i + 10} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
