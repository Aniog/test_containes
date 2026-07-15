import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ShoppingBag, Minus, Plus, ChevronDown, ChevronUp, Star } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-t border-warm-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 font-sans text-sm tracking-product uppercase text-espresso hover:text-gold transition-colors"
      >
        {title}
        {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      {open && <div className="pb-5 font-sans text-sm text-warm-500 leading-relaxed">{children}</div>}
    </div>
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const { addItem } = useCart()
  const containerRef = useRef(null)
  const [selectedTone, setSelectedTone] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [id])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <p className="font-serif text-2xl text-espresso">Product not found</p>
          <Link to="/shop" className="mt-4 inline-block text-gold hover:text-gold-hover font-sans text-sm tracking-wide">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4)

  return (
    <div ref={containerRef} className="bg-cream pt-24 md:pt-28">
      <div className="max-w-8xl mx-auto px-5 md:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 font-sans text-xs text-warm-400 tracking-wide">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-espresso">{product.name}</span>
        </nav>

        {/* Main product section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-[3x4] bg-warm-100 overflow-hidden mb-3">
              <img
                alt={product.name}
                data-strk-img-id={`${product.imgId}-detail-${selectedImage}`}
                data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry detail`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[0, 1, 2, 3].map((i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`aspect-[3x4] bg-warm-100 overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? 'border-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    alt={`${product.name} view ${i + 1}`}
                    data-strk-img-id={`${product.imgId}-thumb-${i}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="md:py-4">
            <h1
              id={product.titleId}
              className="font-serif text-2xl md:text-3xl tracking-product uppercase text-espresso"
            >
              {product.name}
            </h1>
            <p id={product.descId} className="sr-only">{product.description}</p>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.round(product.rating) ? 'text-gold fill-gold' : 'text-warm-200'}`}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-warm-400">({product.reviews} reviews)</span>
            </div>

            <p className="font-serif text-2xl text-espresso mt-4">{formatPrice(product.price)}</p>

            <p className="font-sans text-sm text-warm-500 leading-relaxed mt-4">
              {product.description}
            </p>

            {/* Tone selector */}
            <div className="mt-6">
              <p className="font-sans text-xs tracking-product uppercase text-warm-500 mb-3">Tone</p>
              <div className="flex gap-3">
                {product.tone.map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`px-5 py-2 font-sans text-xs tracking-wide uppercase border transition-colors ${
                      selectedTone === tone
                        ? 'border-gold bg-gold text-white'
                        : 'border-warm-300 text-warm-500 hover:border-gold'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-sans text-xs tracking-product uppercase text-warm-500 mb-3">Quantity</p>
              <div className="flex items-center border border-warm-300 w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center text-warm-500 hover:text-espresso transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center font-sans text-sm text-espresso border-x border-warm-300">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center text-warm-500 hover:text-espresso transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedTone, quantity)}
              className="w-full mt-8 bg-gold hover:bg-gold-hover text-white font-sans text-xs tracking-product uppercase py-4 flex items-center justify-center gap-2 transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                <p>{product.description} Each piece is meticulously crafted to ensure lasting beauty and comfort. Our demi-fine jewelry bridges the gap between fashion and fine, offering you accessible luxury without compromise.</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="space-y-1">
                  <li>• 18K Gold Plated over brass base</li>
                  <li>• Hypoallergenic — nickel and lead free</li>
                  <li>• Tarnish-resistant coating</li>
                  <li>• Store in the provided pouch when not wearing</li>
                  <li>• Avoid contact with water, perfume, and lotions</li>
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <ul className="space-y-1">
                  <li>• Free worldwide shipping on all orders</li>
                  <li>• Standard delivery: 5–10 business days</li>
                  <li>• Express delivery available at checkout</li>
                  <li>• 30-day hassle-free returns</li>
                  <li>• Items must be unworn and in original packaging</li>
                </ul>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-28 pb-20 md:pb-28">
          <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-espresso text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[3x4] bg-warm-100 overflow-hidden mb-3">
                  <img
                    alt={p.name}
                    data-strk-img-id={`${p.imgId}-related`}
                    data-strk-img={`[${p.descId}] [${p.titleId}] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-serif text-xs md:text-sm tracking-product uppercase text-espresso group-hover:text-gold transition-colors">
                  {p.name}
                </h3>
                <p className="font-sans text-sm text-espresso mt-1">{formatPrice(p.price)}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
