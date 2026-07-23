import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ShoppingBag, ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/components/cart/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const containerRef = useRef(null)
  const { addItem } = useCart()

  const [selectedTone, setSelectedTone] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [activeImage, id])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="font-serif text-2xl tracking-widest uppercase text-stone-50">Product Not Found</h2>
          <Link to="/shop" className="text-gold text-sm uppercase tracking-widest mt-4 inline-block hover:text-gold-light transition-colors">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  const accordions = [
    {
      title: 'Description',
      content: product.description,
    },
    {
      title: 'Materials & Care',
      content: 'Crafted with 18K gold plating over sterling silver base. Hypoallergenic and nickel-free. To maintain the finish, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Clean gently with a soft cloth.',
    },
    {
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Standard delivery: 5–7 business days. Express: 2–3 business days. 30-day hassle-free returns — if you\'re not completely in love with your piece, send it back for a full refund.',
    },
  ]

  return (
    <div ref={containerRef} className="pt-20 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-xs uppercase tracking-widest text-stone-400">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-stone-50">{product.name}</span>
        </nav>

        {/* Main product section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div>
            {/* Main image */}
            <div className="aspect-[4x3] overflow-hidden bg-stone-800 mb-4">
              <img
                data-strk-img-id={product.images[activeImage].imgId}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio={product.images[activeImage].ratio}
                data-strk-img-width={product.images[activeImage].width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-16 h-16 md:w-20 md:h-20 overflow-hidden bg-stone-800 border transition-colors ${
                    activeImage === i ? 'border-gold' : 'border-stone-700 hover:border-stone-500'
                  }`}
                >
                  <img
                    data-strk-img-id={`${img.imgId}-thumb`}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="py-4">
            <h1
              id={product.titleId}
              className="font-serif text-2xl md:text-3xl tracking-widest uppercase text-stone-50"
            >
              {product.name}
            </h1>

            {/* Price */}
            <p className="text-gold text-xl md:text-2xl font-serif mt-3">${product.price}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-stone-600'
                    }`}
                  />
                ))}
              </div>
              <span className="text-stone-400 text-sm">({product.reviews})</span>
            </div>

            {/* Description */}
            <p
              id={product.descId}
              className="text-stone-300 text-sm md:text-base leading-relaxed mt-6"
            >
              {product.description}
            </p>

            {/* Tone selector */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">Tone</p>
              <div className="flex gap-3">
                {product.tone.map(tone => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`px-6 py-2 font-serif uppercase tracking-widest text-sm transition-colors duration-300 ${
                      selectedTone === tone
                        ? 'border border-gold text-gold bg-gold/10'
                        : 'border border-stone-600 text-stone-400 hover:border-stone-500 hover:text-stone-300'
                    }`}
                  >
                    {tone === 'gold' ? 'Gold' : 'Silver'}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-widest text-stone-400 mb-3">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border border-stone-600 text-stone-400 hover:border-gold hover:text-gold transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-stone-50 w-8 text-center font-serif">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border border-stone-600 text-stone-400 hover:border-gold hover:text-gold transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product.id, quantity, selectedTone)}
              className="w-full mt-8 bg-gold text-stone-900 font-serif uppercase tracking-widest text-sm py-4 hover:bg-gold-light transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart — ${product.price * quantity}
            </button>
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-16 md:mt-24 border-t border-stone-700">
          {accordions.map((acc, i) => (
            <div key={i} className="border-b border-stone-700">
              <button
                onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left"
              >
                <span className="font-serif text-sm uppercase tracking-widest text-stone-50">{acc.title}</span>
                {openAccordion === i ? (
                  <ChevronUp className="w-4 h-4 text-gold" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-stone-400" />
                )}
              </button>
              {openAccordion === i && (
                <div className="pb-5 animate-fade-in">
                  <p className="text-stone-300 text-sm md:text-base leading-relaxed">{acc.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24">
          <h2 className="font-serif text-xl md:text-2xl tracking-widest uppercase text-stone-50 text-center mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(rp => (
              <Link key={rp.id} to={`/product/${rp.id}`} className="group block">
                <div className="aspect-[4x3] overflow-hidden bg-stone-800">
                  <img
                    data-strk-img-id={`${rp.imgId}-related`}
                    data-strk-img={`[${rp.descId}] [${rp.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={rp.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-sm uppercase tracking-widest text-stone-50 mt-3 group-hover:text-gold transition-colors">
                  {rp.name}
                </h3>
                <p className="text-gold text-sm mt-1">${rp.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
