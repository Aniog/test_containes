import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Plus, Minus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const accordionItems = [
  {
    title: 'Description',
    content: 'Each Velmora piece is thoughtfully designed to blend timeless elegance with modern wearability. Our demi-fine jewelry is crafted for everyday luxury — lightweight enough for all-day comfort, yet striking enough to make a statement.',
  },
  {
    title: 'Materials & Care',
    content: '18K gold plating over 925 sterling silver. Hypoallergenic and nickel-free. To maintain the finish, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Gently wipe with a soft cloth after each use.',
  },
  {
    title: 'Shipping & Returns',
    content: 'Free worldwide shipping on all orders. Standard delivery: 5–10 business days. Express delivery: 2–4 business days. 30-day hassle-free returns — if you are not completely satisfied, return your piece in its original condition for a full refund.',
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
          <p className="font-serif text-2xl text-charcoal mb-4">Product not found</p>
          <Link to="/shop" className="font-sans text-xs uppercase tracking-btn text-gold hover:text-gold-hover">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4)

  return (
    <div ref={containerRef} className="bg-cream min-h-screen pt-20 md:pt-24">
      <div className="max-w-container mx-auto px-5 md:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 md:mb-8">
          <ol className="flex items-center gap-2 font-sans text-xs text-stone-400">
            <li><Link to="/" className="hover:text-charcoal transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-charcoal transition-colors">Shop</Link></li>
            <li>/</li>
            <li className="text-charcoal">{product.name}</li>
          </ol>
        </nav>

        {/* Product section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div className="space-y-3">
            <div className="aspect-[3/4] bg-white overflow-hidden">
              <img
                alt={product.name}
                data-strk-img-id={`pdp-${product.imgId}-main`}
                data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry editorial detail`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="aspect-square bg-white overflow-hidden">
                <img
                  alt={`${product.name} alternate`}
                  data-strk-img-id={`pdp-${product.imgId}-alt`}
                  data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry worn model`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square bg-gradient-to-br from-gold-light/20 to-gold/5 flex items-center justify-center">
                <span className="font-sans text-[10px] text-stone-400 uppercase tracking-wider">Detail</span>
              </div>
              <div className="aspect-square bg-gradient-to-br from-stone-50 to-stone-100 flex items-center justify-center">
                <span className="font-sans text-[10px] text-stone-400 uppercase tracking-wider">Worn</span>
              </div>
            </div>
          </div>

          {/* Product info */}
          <div className="md:py-4">
            <h1
              id={product.titleId}
              className="font-serif text-2xl md:text-3xl font-medium uppercase tracking-product text-charcoal"
            >
              {product.name}
            </h1>
            <p
              id={product.descId}
              className="font-sans text-sm text-stone-500 mt-2"
            >
              {product.description}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) ? 'text-gold fill-gold' : 'text-stone-300'
                    }`}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-stone-400">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl font-medium text-charcoal mt-4">${product.price}</p>

            {/* Tone selector */}
            <div className="mt-6">
              <p className="font-sans text-xs uppercase tracking-nav font-medium text-stone-500 mb-3">Tone</p>
              <div className="flex gap-3">
                {['gold', 'silver'].map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`px-5 py-2.5 font-sans text-xs uppercase tracking-btn font-medium border transition-colors duration-200 ${
                      selectedTone === tone
                        ? 'border-charcoal text-charcoal bg-charcoal/5'
                        : 'border-stone-200 text-stone-500 hover:border-stone-400'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-sans text-xs uppercase tracking-nav font-medium text-stone-500 mb-3">Quantity</p>
              <div className="flex items-center border border-stone-200 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-stone-500 hover:text-charcoal transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center font-sans text-sm text-charcoal border-x border-stone-200">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-stone-500 hover:text-charcoal transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedTone, quantity)}
              className="w-full mt-8 bg-gold hover:bg-gold-hover text-cream font-sans text-xs uppercase tracking-btn font-medium py-4 flex items-center justify-center gap-2 transition-colors duration-200"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-8 border-t border-stone-200">
              {accordionItems.map((item, idx) => (
                <div key={item.title} className="border-b border-stone-200">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-sans text-sm font-medium text-charcoal">{item.title}</span>
                    {openAccordion === idx ? (
                      <ChevronUp className="w-4 h-4 text-stone-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-stone-400" />
                    )}
                  </button>
                  {openAccordion === idx && (
                    <p className="font-sans text-sm text-stone-500 leading-relaxed pb-4">
                      {item.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24">
          <h2 className="font-serif text-2xl md:text-3xl font-medium text-charcoal text-center mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[3/4] bg-white overflow-hidden mb-3">
                  <img
                    alt={p.name}
                    data-strk-img-id={`related-${p.imgId}`}
                    data-strk-img={`[${p.descId}] [${p.titleId}] gold jewelry editorial`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-xs md:text-sm font-medium uppercase tracking-product text-charcoal">
                  {p.name}
                </h3>
                <p className="font-sans text-sm font-medium text-charcoal mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
