import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ShoppingBag, ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-t border-warm-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs font-semibold uppercase tracking-widest text-warm-900">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-warm-500 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="font-sans text-sm text-warm-600 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find(p => p.slug === slug)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const [selectedTone, setSelectedTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    if (product) {
      setSelectedTone(product.tone[0])
    }
  }, [product])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [activeImage])

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-2xl text-warm-900">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-gold hover:text-gold-hover text-sm">
          Back to Shop
        </Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem(product, selectedTone, quantity)
    setQuantity(1)
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  return (
    <div ref={containerRef}>
      <div className="pt-24 md:pt-32 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-xs font-sans text-warm-500">
              <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link to="/shop" className="hover:text-gold transition-colors">Shop</Link></li>
              <li>/</li>
              <li className="text-warm-900">{product.name}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Image gallery */}
            <div>
              <div className="aspect-[3x4] overflow-hidden bg-warm-100 mb-4">
                <img
                  data-strk-img-id={activeImage === 0 ? product.imgId : product.imgId2}
                  data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry detail`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setActiveImage(0)}
                  className={`aspect-[3x4] overflow-hidden border-2 transition-colors ${activeImage === 0 ? 'border-gold' : 'border-transparent'}`}
                >
                  <img
                    data-strk-img-id={`${product.imgId}-thumb`}
                    data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </button>
                <button
                  onClick={() => setActiveImage(1)}
                  className={`aspect-[3x4] overflow-hidden border-2 transition-colors ${activeImage === 1 ? 'border-gold' : 'border-transparent'}`}
                >
                  <img
                    data-strk-img-id={`${product.imgId2}-thumb`}
                    data-strk-img={`[${product.descId}] [${product.titleId}] worn closeup`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </button>
              </div>
            </div>

            {/* Product info */}
            <div>
              <h1
                id={product.titleId}
                className="font-serif text-2xl md:text-3xl uppercase tracking-wider text-warm-900"
              >
                {product.name}
              </h1>
              <p className="sr-only" id={product.descId}>{product.description}</p>

              <div className="flex items-center gap-2 mt-3">
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.round(product.rating) ? 'fill-gold text-gold' : 'text-warm-300'}`}
                    />
                  ))}
                </div>
                <span className="text-xs font-sans text-warm-500">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              <p className="mt-4 font-serif text-2xl text-warm-900">${product.price}</p>

              <p className="mt-4 font-sans text-sm text-warm-600 leading-relaxed">
                {product.description}
              </p>

              {/* Tone selector */}
              <div className="mt-6">
                <label className="block text-xs font-sans font-semibold uppercase tracking-widest text-warm-900 mb-3">
                  Tone
                </label>
                <div className="flex gap-3">
                  {product.tone.map(tone => (
                    <button
                      key={tone}
                      onClick={() => setSelectedTone(tone)}
                      className={`px-6 py-2 text-xs font-sans font-medium uppercase tracking-wider border transition-all duration-300 ${
                        selectedTone === tone
                          ? 'border-gold bg-gold text-white'
                          : 'border-warm-200 text-warm-600 hover:border-gold'
                      }`}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-6">
                <label className="block text-xs font-sans font-semibold uppercase tracking-widest text-warm-900 mb-3">
                  Quantity
                </label>
                <div className="flex items-center border border-warm-200 w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center text-warm-600 hover:text-gold transition-colors"
                    aria-label="Decrease"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-10 h-10 flex items-center justify-center font-sans text-sm text-warm-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center text-warm-600 hover:text-gold transition-colors"
                    aria-label="Increase"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to cart */}
              <button
                onClick={handleAddToCart}
                className="mt-8 w-full bg-gold text-white font-sans text-xs font-semibold uppercase tracking-widest py-4 hover:bg-gold-hover transition-colors duration-300 flex items-center justify-center gap-2 btn-premium"
              >
                <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
                Add to Cart
              </button>

              {/* Accordions */}
              <div className="mt-8">
                <Accordion title="Description" defaultOpen>
                  <p>{product.description}</p>
                  <p className="mt-2">Each piece is carefully crafted with attention to detail, ensuring a finish that rivals fine jewelry at a fraction of the cost.</p>
                </Accordion>
                <Accordion title="Materials & Care">
                  <ul className="list-disc list-inside space-y-1">
                    <li>18K Gold Plated over hypoallergenic brass</li>
                    <li>Nickel-free and lead-free</li>
                    <li>Tarnish-resistant coating</li>
                    <li>Store in the provided pouch when not wearing</li>
                    <li>Avoid contact with water, perfume, and lotions</li>
                  </ul>
                </Accordion>
                <Accordion title="Shipping & Returns">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Free worldwide shipping on all orders</li>
                    <li>Standard delivery: 5–10 business days</li>
                    <li>Express delivery available at checkout</li>
                    <li>30-day hassle-free returns</li>
                    <li>Gift wrapping available</li>
                  </ul>
                </Accordion>
              </div>
            </div>
          </div>

          {/* Related products */}
          <div className="mt-20 md:mt-28">
            <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-warm-900 text-center">
              You May Also Like
            </h2>
            <div className="w-12 h-px bg-gold mx-auto mt-4 mb-10" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map(p => (
                <Link key={p.id} to={`/product/${p.slug}`} className="group">
                  <div className="aspect-[3x4] overflow-hidden bg-warm-100">
                    <img
                      data-strk-img-id={`related-${p.imgId}`}
                      data-strk-img={`[${p.descId}] [${p.titleId}] gold jewelry`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-3 font-serif text-xs uppercase tracking-wider text-warm-900">
                    {p.name}
                  </h3>
                  <p className="mt-1 font-sans text-sm text-warm-600">${p.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
