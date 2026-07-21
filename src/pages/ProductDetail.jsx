import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ShoppingBag, ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs font-semibold tracking-section uppercase text-base">
          {title}
        </span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-muted" />
        ) : (
          <ChevronDown className="w-4 h-4 text-muted" />
        )}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="font-sans text-sm text-muted leading-relaxed">{children}</div>
      </div>
    </div>
  )
}

const ProductDetail = () => {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const { addItem } = useCart()
  const containerRef = useRef(null)
  const relatedRef = useRef(null)

  const [selectedTone, setSelectedTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, relatedRef.current)
  }, [])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-2xl text-base mb-4">Product not found</p>
          <Link to="/shop" className="text-gold font-sans text-sm underline">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, selectedTone, quantity)
    setQuantity(1)
  }

  return (
    <div className="pt-20 lg:pt-24">
      <div ref={containerRef} className="max-w-content mx-auto px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2">
              {product.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-16 h-20 md:w-20 md:h-24 border overflow-hidden transition-colors ${
                    selectedImage === idx ? 'border-gold' : 'border-border'
                  }`}
                >
                  <img
                    data-strk-img-id={`pdp-${product.id}-thumb-${idx}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry ${idx === 0 ? 'flat lay' : 'worn'}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3x4] overflow-hidden bg-border/20">
              <img
                data-strk-img-id={`pdp-${product.id}-main-${selectedImage}`}
                data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry ${selectedImage === 0 ? 'flat lay' : 'worn model'}`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            <h1
              id={product.titleId}
              className="font-serif text-2xl md:text-3xl font-medium tracking-product uppercase text-base"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-border'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted">({product.reviews})</span>
            </div>

            <p className="font-serif text-2xl font-medium text-base mt-4">${product.price}</p>

            <p id={product.descId} className="font-sans text-sm text-muted leading-relaxed mt-4">
              {product.description}. Crafted with premium 18K gold plating over sterling silver. Hypoallergenic and nickel-free for sensitive skin.
            </p>

            {/* Tone selector */}
            <div className="mt-6">
              <p className="font-sans text-xs font-semibold tracking-wide-custom uppercase text-base mb-3">
                Tone: {selectedTone}
              </p>
              <div className="flex gap-2">
                {product.tone.map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`px-5 py-2.5 font-sans text-xs font-medium tracking-wide-custom uppercase border transition-colors duration-200 ${
                      selectedTone === tone
                        ? 'border-gold bg-gold/10 text-gold'
                        : 'border-border text-muted hover:border-base hover:text-base'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-sans text-xs font-semibold tracking-wide-custom uppercase text-base mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-border w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-base transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center font-sans text-sm text-base">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-base transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-8 bg-gold text-base font-sans text-xs font-semibold tracking-section uppercase py-4 flex items-center justify-center gap-2 hover:bg-gold-dark transition-colors duration-300"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>
                  The {product.name} is a signature Velmora piece, designed to elevate any look with effortless sophistication. 
                  Each piece is meticulously crafted with attention to detail, ensuring a finish that rivals fine jewelry at a fraction of the price.
                </p>
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="space-y-2">
                  <li>18K gold plating over 925 sterling silver</li>
                  <li>Nickel-free and hypoallergenic</li>
                  <li>Crystal accents where noted</li>
                  <li>To maintain shine, avoid contact with water, perfume, and lotions</li>
                  <li>Store in the provided Velmora pouch when not wearing</li>
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <ul className="space-y-2">
                  <li>Free worldwide shipping on all orders</li>
                  <li>Standard delivery: 5–7 business days</li>
                  <li>Express delivery available at checkout</li>
                  <li>30-day hassle-free returns</li>
                  <li>Gift wrapping available for all items</li>
                </ul>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div ref={relatedRef} className="bg-cream py-16 md:py-20">
        <div className="max-w-content mx-auto px-6 lg:px-8">
          <h2 className="font-sans text-xs font-semibold tracking-section uppercase text-muted mb-3 text-center">
            Complete Your Look
          </h2>
          <p className="font-serif text-2xl md:text-3xl font-medium text-base text-center mb-10">
            You May Also Like
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[3x4] overflow-hidden bg-border/20 mb-3">
                  <img
                    data-strk-img-id={`related-${p.imgId}`}
                    data-strk-img={`[${p.descId}] [${p.titleId}] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif text-xs md:text-sm font-medium tracking-product uppercase text-base">
                  {p.name}
                </h3>
                <p className="font-sans text-sm text-muted mt-0.5">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
