import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ShoppingBag, ChevronDown } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-t border-stone-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs tracking-nav uppercase font-semibold text-charcoal">
          {title}
        </span>
        <ChevronDown className={`w-4 h-4 text-stone-400 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="pb-5 text-sm text-stone-600 leading-relaxed">
          {children}
        </div>
      )}
    </div>
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === Number(id))
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const [selectedTone, setSelectedTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    if (product) {
      setSelectedTone(product.tone[0])
      setQuantity(1)
      setActiveImage(0)
    }
  }, [product?.id])

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [activeImage])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <p className="font-serif text-2xl text-charcoal">Product not found</p>
          <Link to="/shop" className="text-gold text-sm mt-4 inline-block hover:text-gold-dark">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem(product, selectedTone, quantity)
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  return (
    <div ref={containerRef} className="bg-cream min-h-screen pt-24 md:pt-28">
      <div className="max-w-content mx-auto px-5 md:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-xs text-stone-500">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-[3/4] overflow-hidden bg-stone-100 mb-3">
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
            <div className="flex gap-2">
              {[0, 1].map(i => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-20 h-24 overflow-hidden border-2 transition-colors ${
                    activeImage === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${product.id}-${i}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div>
            <h1
              id={product.titleId}
              className="font-serif text-2xl md:text-3xl tracking-product uppercase text-charcoal"
            >
              {product.name}
            </h1>

            <p
              id={product.descId}
              className="text-stone-500 mt-2 hidden"
            >
              {product.description}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.round(product.rating) ? 'fill-gold text-gold' : 'text-stone-300'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-stone-500">({product.reviews})</span>
            </div>

            {/* Price */}
            <p className="text-2xl font-serif text-charcoal mt-4">${product.price}</p>

            {/* Short description */}
            <p className="text-sm text-stone-600 mt-4 leading-relaxed">
              {product.description}. Crafted with premium {product.material} materials for lasting shine and comfort.
            </p>

            {/* Tone selector */}
            <div className="mt-6">
              <span className="text-xs tracking-nav uppercase font-semibold text-charcoal block mb-3">
                Tone: {selectedTone}
              </span>
              <div className="flex gap-2">
                {product.tone.map(tone => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`px-5 py-2.5 text-xs tracking-nav uppercase font-medium border transition-colors duration-200 ${
                      selectedTone === tone
                        ? 'border-gold bg-gold text-white'
                        : 'border-stone-300 text-charcoal hover:border-gold'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <span className="text-xs tracking-nav uppercase font-semibold text-charcoal block mb-3">
                Quantity
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-stone-300 flex items-center justify-center text-stone-500 hover:border-gold hover:text-gold transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-sm font-medium text-charcoal w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-stone-300 flex items-center justify-center text-stone-500 hover:border-gold hover:text-gold transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-8 bg-gold text-white text-xs tracking-nav uppercase font-semibold py-4 hover:bg-gold-dark transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>
                  The {product.name} is a stunning piece from our demi-fine collection. 
                  {product.description}, finished with meticulous attention to detail. 
                  Each piece is individually inspected to ensure the highest quality standards.
                </p>
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="space-y-2">
                  <li>• 18K Gold Plated over brass base</li>
                  <li>• Hypoallergenic — nickel and lead free</li>
                  <li>• Tarnish-resistant coating</li>
                  <li>• Store in the provided pouch when not wearing</li>
                  <li>• Avoid contact with water, perfume, and lotions</li>
                  <li>• Gently wipe with a soft cloth after each wear</li>
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <ul className="space-y-2">
                  <li>• Free worldwide shipping on all orders</li>
                  <li>• Standard delivery: 5–10 business days</li>
                  <li>• Express delivery available at checkout</li>
                  <li>• 30-day hassle-free returns</li>
                  <li>• Items must be unworn and in original packaging</li>
                  <li>• Gift wrapping available for all orders</li>
                </ul>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 mb-16">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal tracking-wide text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="group block">
                <div className="aspect-[3/4] overflow-hidden bg-stone-100 mb-3">
                  <img
                    data-strk-img-id={`related-${p.imgId}`}
                    data-strk-img={`[${p.descId}] [${p.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="font-serif text-xs tracking-product uppercase text-charcoal text-center">
                  {p.name}
                </h3>
                <p className="text-sm font-medium text-charcoal text-center mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
