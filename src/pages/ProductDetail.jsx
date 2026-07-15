import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Plus, Minus, ShoppingBag, ChevronDown, ChevronUp } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-t border-brand-sand">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-serif text-base text-brand-charcoal">{title}</span>
        {open ? (
          <ChevronUp className="w-4 h-4 text-brand-warm-gray" />
        ) : (
          <ChevronDown className="w-4 h-4 text-brand-warm-gray" />
        )}
      </button>
      {open && (
        <div className="pb-4 animate-fade-in">
          {children}
        </div>
      )}
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
  }, [])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="font-serif text-2xl text-brand-charcoal mb-4">Product not found</p>
          <Link to="/shop" className="font-sans text-xs uppercase tracking-extra-wide text-brand-gold hover:text-brand-gold-dark transition-colors">
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
    <div ref={containerRef} className="pt-24 md:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 font-sans text-xs text-brand-warm-gray">
            <li><Link to="/" className="hover:text-brand-charcoal transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-brand-charcoal transition-colors">Shop</Link></li>
            <li>/</li>
            <li className="text-brand-charcoal">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div className="space-y-3">
            <div className="aspect-[3x4] bg-brand-warm overflow-hidden">
              <img
                alt={product.name}
                data-strk-img-id={`${product.imgId}-main-${selectedImage}`}
                data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry detail`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-2">
              {[0, 1, 2, 3].map((i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-20 bg-brand-warm border-2 transition-colors ${
                    selectedImage === i ? 'border-brand-gold' : 'border-transparent'
                  }`}
                >
                  <span className="font-sans text-[8px] text-brand-warm-gray">View {i + 1}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="md:py-4">
            <h1
              id={product.titleId}
              className="font-serif text-2xl md:text-3xl uppercase tracking-ultra-wide text-brand-charcoal font-light"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating) ? 'fill-brand-gold text-brand-gold' : 'text-brand-sand'
                    }`}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-brand-warm-gray">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="font-serif text-2xl text-brand-charcoal mt-4">${product.price}</p>

            <p
              id={product.descId}
              className="font-sans text-sm text-brand-warm-gray leading-relaxed mt-4"
            >
              {product.description}
            </p>

            {/* Tone selector */}
            <div className="mt-6">
              <p className="font-sans text-xs uppercase tracking-extra-wide text-brand-charcoal mb-3">
                Tone
              </p>
              <div className="flex gap-2">
                {product.tone.map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`px-5 py-2 font-sans text-xs uppercase tracking-wide border transition-colors duration-300 ${
                      selectedTone === tone
                        ? 'border-brand-gold bg-brand-gold text-white'
                        : 'border-brand-sand text-brand-warm-gray hover:border-brand-gold'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-sans text-xs uppercase tracking-extra-wide text-brand-charcoal mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 border border-brand-sand flex items-center justify-center text-brand-warm-gray hover:border-brand-gold hover:text-brand-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="font-sans text-sm text-brand-charcoal w-6 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 border border-brand-sand flex items-center justify-center text-brand-warm-gray hover:border-brand-gold hover:text-brand-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-8 bg-brand-gold text-white font-sans text-xs uppercase tracking-extra-wide py-4 flex items-center justify-center gap-2 hover:bg-brand-gold-dark transition-colors duration-300"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart — ${product.price * quantity}
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p className="font-sans text-sm text-brand-warm-gray leading-relaxed">
                  {product.description} Each piece is meticulously crafted with attention to detail, 
                  ensuring a finish that rivals fine jewelry at a fraction of the cost. Perfect for 
                  gifting or treating yourself to something special.
                </p>
              </Accordion>

              <Accordion title="Materials & Care">
                <div className="font-sans text-sm text-brand-warm-gray leading-relaxed space-y-2">
                  <p>• 18K Gold Plated over 925 Sterling Silver</p>
                  <p>• Hypoallergenic — nickel and lead free</p>
                  <p>• Tarnish-resistant coating for lasting shine</p>
                  <p>• To care: avoid direct contact with perfume, lotions, and water. Store in the provided pouch when not wearing.</p>
                </div>
              </Accordion>

              <Accordion title="Shipping & Returns">
                <div className="font-sans text-sm text-brand-warm-gray leading-relaxed space-y-2">
                  <p>• Free worldwide shipping on all orders</p>
                  <p>• Standard delivery: 5–7 business days</p>
                  <p>• Express delivery: 2–3 business days (available at checkout)</p>
                  <p>• 30-day hassle-free returns — no questions asked</p>
                  <p>• Gift wrapping available at checkout</p>
                </div>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 pt-12 border-t border-brand-sand">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-brand-charcoal tracking-wide text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[3x4] bg-brand-warm overflow-hidden mb-3">
                  <img
                    alt={p.name}
                    data-strk-img-id={`${p.imgId}-related`}
                    data-strk-img={`[${p.descId}] [${p.titleId}] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-xs uppercase tracking-ultra-wide text-brand-charcoal">
                  {p.name}
                </h3>
                <p className="sr-only" id={p.descId}>{p.description}</p>
                <p id={p.titleId} className="sr-only">{p.name}</p>
                <p className="font-sans text-sm text-brand-warm-gray mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
