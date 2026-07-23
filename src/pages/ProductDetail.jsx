import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ShoppingBag, ChevronDown } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/components/cart/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function ProductDetail() {
  const { id } = useParams()
  const containerRef = useRef(null)
  const product = products.find(p => p.id === id)
  const { addItem } = useCart()

  const [selectedTone, setSelectedTone] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState(null)

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [id])

  if (!product) {
    return (
      <div className="min-h-screen bg-warm-cream pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl uppercase tracking-wider text-warm-black">Product Not Found</h1>
          <Link to="/shop" className="inline-block mt-6 bg-gold text-warm-black font-sans text-sm uppercase tracking-wider px-8 py-3 hover:bg-gold-light transition-colors">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, selectedTone, quantity)
  }

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key)
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-warm-cream pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="font-sans text-xs uppercase tracking-wider text-warm-black/40 mb-6 md:mb-8">
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-warm-black/60 capitalize">{product.category}</span>
          <span className="mx-2">/</span>
          <span className="text-warm-black">{product.name}</span>
        </nav>

        {/* Main product section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Image gallery */}
          <div>
            <div className="aspect-[3x4] bg-warm-ivory overflow-hidden mb-3">
              <img
                data-strk-img-id={activeImage === 0 ? product.imgId : product.imgId2}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              <button
                onClick={() => setActiveImage(0)}
                className={`w-16 h-20 bg-warm-ivory overflow-hidden border-2 transition-colors ${activeImage === 0 ? 'border-gold' : 'border-warm-sand hover:border-gold'}`}
              >
                <img
                  data-strk-img-id={`thumb-${product.imgId}`}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="View 1"
                  className="w-full h-full object-cover"
                />
              </button>
              <button
                onClick={() => setActiveImage(1)}
                className={`w-16 h-20 bg-warm-ivory overflow-hidden border-2 transition-colors ${activeImage === 1 ? 'border-gold' : 'border-warm-sand hover:border-gold'}`}
              >
                <img
                  data-strk-img-id={`thumb-${product.imgId2}`}
                  data-strk-img={`[${product.descId}] [${product.titleId}] worn model`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="View 2"
                  className="w-full h-full object-cover"
                />
              </button>
            </div>
          </div>

          {/* Product info */}
          <div className="md:py-4">
            <h1 id={product.titleId} className="font-serif text-2xl md:text-3xl uppercase tracking-widest text-warm-black">{product.name}</h1>
            <p id={product.descId} className="font-sans text-sm text-warm-black/50 mt-2">{product.shortDescription}</p>

            {/* Price */}
            <p className="font-sans font-semibold text-xl text-warm-black mt-4">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-warm-sand'}`} />
                ))}
              </div>
              <span className="font-sans text-xs text-warm-black/50">{product.rating} ({product.reviews} reviews)</span>
            </div>

            {/* Description */}
            <p className="font-sans text-sm text-warm-black/60 mt-6 leading-relaxed">{product.description}</p>

            {/* Tone selector */}
            <div className="mt-6">
              <p className="font-sans text-xs uppercase tracking-wider text-warm-black/40 mb-3">Tone</p>
              <div className="flex gap-3">
                {product.tone.map(tone => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`font-sans text-xs uppercase tracking-wider px-5 py-2 rounded-full border transition-colors ${
                      selectedTone === tone
                        ? 'bg-gold text-warm-black border-gold'
                        : 'border-warm-sand text-warm-black/60 hover:border-gold hover:text-warm-black'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-sans text-xs uppercase tracking-wider text-warm-black/40 mb-3">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 flex items-center justify-center border border-warm-sand text-warm-black hover:border-gold transition-colors rounded-sm"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="font-sans text-sm font-medium text-warm-black w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 flex items-center justify-center border border-warm-sand text-warm-black hover:border-gold transition-colors rounded-sm"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-8 bg-gold text-warm-black font-sans text-sm uppercase tracking-wider py-4 hover:bg-gold-light transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-12 md:mt-16 border-t border-warm-sand">
          {[
            { key: 'description', title: 'Description', content: product.description },
            { key: 'materials', title: 'Materials & Care', content: `${product.material} over a hypoallergenic stainless steel base. To keep your jewelry looking its best, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Clean gently with a soft dry cloth.` },
            { key: 'shipping', title: 'Shipping & Returns', content: 'Free worldwide shipping on all orders. Standard delivery takes 5–10 business days. Express shipping available at checkout. 30-day hassle-free returns — if you\'re not completely satisfied, send it back for a full refund.' },
          ].map(acc => (
            <div key={acc.key} className="border-b border-warm-sand">
              <button
                onClick={() => toggleAccordion(acc.key)}
                className="w-full flex items-center justify-between py-5 font-sans text-sm uppercase tracking-wider text-warm-black hover:text-gold transition-colors"
              >
                {acc.title}
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openAccordion === acc.key ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openAccordion === acc.key ? 'max-h-40 pb-5' : 'max-h-0'}`}>
                <p className="font-sans text-sm text-warm-black/60 leading-relaxed">{acc.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-20">
          <h2 className="font-serif text-xl md:text-2xl uppercase tracking-wider text-warm-black text-center mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(rp => (
              <Link key={rp.id} to={`/product/${rp.id}`} className="group block">
                <div className="relative aspect-[3x4] bg-warm-ivory overflow-hidden">
                  <img
                    data-strk-img-id={`related-${rp.imgId}`}
                    data-strk-img={`[${rp.descId}] [${rp.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={rp.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-xs md:text-sm uppercase tracking-widest text-warm-black mt-3">{rp.name}</h3>
                <p className="font-sans font-semibold text-sm text-warm-black mt-1">${rp.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
