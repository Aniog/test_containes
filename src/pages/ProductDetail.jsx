import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ShoppingBag, Star, ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { products } from '@/data/products'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-warm-gray">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs tracking-widest uppercase font-sans font-medium text-charcoal">
          {title}
        </span>
        {open ? <ChevronUp size={16} className="text-taupe" /> : <ChevronDown size={16} className="text-taupe" />}
      </button>
      {open && <div className="pb-5 text-sm text-taupe font-sans leading-relaxed">{children}</div>}
    </div>
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === Number(id))
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const [selectedTone, setSelectedTone] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [id])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <p className="text-taupe font-sans">Product not found</p>
          <Link to="/shop" className="text-gold font-sans text-sm mt-4 inline-block hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  return (
    <div ref={containerRef} className="bg-cream min-h-screen pt-24 lg:pt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Breadcrumb */}
        <nav className="mb-8 text-xs font-sans text-taupe">
          <Link to="/" className="hover:text-charcoal transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-charcoal transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>

        {/* Product layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-[3x4] bg-warm-gray/30 overflow-hidden mb-3">
              <img
                alt={product.name}
                data-strk-img-id={`${product.imgId}-detail-${selectedImage}`}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {product.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-16 h-20 bg-warm-gray/30 overflow-hidden border-2 transition-colors ${
                    selectedImage === idx ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    data-strk-img-id={`${product.imgId}-thumb-${idx}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="100"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
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
              className="font-serif text-2xl md:text-3xl uppercase tracking-widest-custom text-charcoal font-light"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    className={i < Math.round(product.rating) ? 'text-gold fill-gold' : 'text-warm-gray'}
                  />
                ))}
              </div>
              <span className="text-xs text-taupe font-sans">({product.reviews})</span>
            </div>

            <p className="mt-4 text-2xl font-serif text-charcoal">${product.price}</p>

            <p
              id={product.descId}
              className="mt-4 text-sm text-taupe font-sans leading-relaxed"
            >
              {product.longDescription}
            </p>

            {/* Tone selector */}
            <div className="mt-6">
              <span className="text-xs tracking-widest uppercase font-sans font-medium text-charcoal block mb-3">
                Tone: {selectedTone.charAt(0).toUpperCase() + selectedTone.slice(1)}
              </span>
              <div className="flex gap-3">
                {['gold', 'silver'].map(tone => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`px-5 py-2.5 text-xs tracking-widest uppercase font-sans font-medium border transition-all duration-300 ${
                      selectedTone === tone
                        ? 'border-gold bg-gold text-white'
                        : 'border-warm-gray text-charcoal hover:border-gold'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <span className="text-xs tracking-widest uppercase font-sans font-medium text-charcoal block mb-3">
                Quantity
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-warm-gray flex items-center justify-center text-taupe hover:border-gold hover:text-gold transition-colors"
                >
                  <Minus size={14} />
                </button>
                <span className="text-sm font-sans text-charcoal w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-warm-gray flex items-center justify-center text-taupe hover:border-gold hover:text-gold transition-colors"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedTone, quantity)}
              className="w-full mt-8 bg-gold text-white text-xs tracking-widest uppercase font-sans font-medium py-4 hover:bg-gold-light transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <ShoppingBag size={16} />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.longDescription}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2">Material: {product.material} over sterling silver</p>
                <p className="mb-2">Hypoallergenic and nickel-free</p>
                <p className="mb-2">To maintain the beauty of your jewelry, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.</p>
                <p>Gently polish with a soft cloth after each wear.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">Free worldwide shipping on all orders.</p>
                <p className="mb-2">Standard delivery: 5–10 business days.</p>
                <p className="mb-2">Express delivery: 2–4 business days (available at checkout).</p>
                <p>30-day hassle-free returns. Items must be unworn and in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 pb-16">
          <h2 className="font-serif text-2xl text-charcoal tracking-wide font-light text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {relatedProducts.map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[3x4] bg-warm-gray/30 overflow-hidden mb-3">
                  <img
                    alt={p.name}
                    data-strk-img-id={`${p.imgId}-related`}
                    data-strk-img={`[related-${p.id}-desc] [related-${p.id}-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 id={`related-${p.id}-title`} className="font-serif text-xs uppercase tracking-widest-custom text-charcoal text-center">
                  {p.name}
                </h3>
                <p id={`related-${p.id}-desc`} className="text-sm font-sans text-taupe text-center mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
