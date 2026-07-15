import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, ChevronUp, ShoppingBag, Minus, Plus } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-warm-gray-100">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 font-sans text-sm tracking-super-wide uppercase text-deep-charcoal hover:text-champagne-gold transition-colors"
      >
        {title}
        {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="font-sans text-sm text-warm-gray-600 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const containerRef = useRef(null)
  const product = products.find(p => p.id === id)
  const { addItem } = useCart()

  const [selectedTone, setSelectedTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  if (!product) {
    return (
      <div className="min-h-screen bg-warm-cream flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-deep-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="btn-primary">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  return (
    <div ref={containerRef} className="min-h-screen bg-warm-cream pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 md:mb-8">
          <ol className="flex items-center gap-2 font-sans text-xs text-warm-gray-500">
            <li><Link to="/" className="hover:text-champagne-gold transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-champagne-gold transition-colors">Shop</Link></li>
            <li>/</li>
            <li className="text-deep-charcoal">{product.name}</li>
          </ol>
        </nav>

        {/* Main product section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-[3x4] bg-antique-white overflow-hidden mb-3">
              <img
                data-strk-img-id={`${product.imgId}-detail-${selectedImage}`}
                data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry detail`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2">
              {[0, 1].map(i => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-20 bg-antique-white overflow-hidden border-2 transition-colors ${selectedImage === i ? 'border-champagne-gold' : 'border-transparent'}`}
                >
                  <img
                    data-strk-img-id={`${product.imgId}-thumb-${i}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
                    data-strk-img-ratio="3x4"
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
          <div>
            <h1
              id={product.titleId}
              className="font-serif text-2xl md:text-3xl tracking-super-wide uppercase text-deep-charcoal"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-champagne-gold text-champagne-gold' : 'text-warm-gray-300'}`}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-warm-gray-500">({product.reviews})</span>
            </div>

            {/* Price */}
            <p className="font-serif text-2xl text-deep-charcoal mt-4">${product.price}</p>

            {/* Description */}
            <p
              id={product.descId}
              className="font-sans text-sm text-warm-gray-600 mt-4 leading-relaxed"
            >
              {product.description}. Crafted with premium {product.material} materials for lasting shine and comfort. Each piece is nickel-free and hypoallergenic, designed for sensitive skin.
            </p>

            {/* Tone selector */}
            <div className="mt-6">
              <p className="font-sans text-xs tracking-super-wide uppercase text-warm-gray-500 mb-3">Tone</p>
              <div className="flex gap-2">
                {product.tone.map(tone => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`font-sans text-xs tracking-wide uppercase px-5 py-2 border transition-all duration-300 ${
                      selectedTone === tone
                        ? 'border-champagne-gold bg-champagne-gold text-deep-charcoal'
                        : 'border-warm-gray-200 text-warm-gray-600 hover:border-champagne-gold'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-sans text-xs tracking-super-wide uppercase text-warm-gray-500 mb-3">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 flex items-center justify-center border border-warm-gray-200 text-warm-gray-500 hover:border-champagne-gold hover:text-champagne-gold transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-sans text-sm text-deep-charcoal w-6 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 flex items-center justify-center border border-warm-gray-200 text-warm-gray-500 hover:border-champagne-gold hover:text-champagne-gold transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedTone, quantity)}
              className="btn-primary w-full mt-8 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}. This piece is part of our signature collection, designed to be versatile enough for everyday wear while making a subtle statement. The {product.material} finish ensures long-lasting brilliance.</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="space-y-2">
                  <li>• 18K Gold Plated over 925 Sterling Silver</li>
                  <li>• Nickel-free & Hypoallergenic</li>
                  <li>• Tarnish-resistant coating</li>
                  <li>• Store in the provided pouch when not wearing</li>
                  <li>• Avoid direct contact with perfume and lotions</li>
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
        <div className="mt-16 md:mt-24">
          <h2 className="font-serif text-2xl md:text-3xl text-deep-charcoal tracking-wide text-center mb-8">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="group block">
                <div className="aspect-[3x4] bg-antique-white overflow-hidden mb-3">
                  <img
                    data-strk-img-id={`${p.imgId}-related`}
                    data-strk-img={`[${p.descId}] [${p.titleId}] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-xs md:text-sm tracking-super-wide uppercase text-deep-charcoal text-center">
                  {p.name}
                </h3>
                <p className="font-sans text-sm text-deep-charcoal text-center mt-0.5">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
