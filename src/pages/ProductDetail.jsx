import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ShoppingBag, ChevronDown } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-t border-hairline">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs tracking-[0.15em] uppercase font-medium text-charcoal">
          {title}
        </span>
        <ChevronDown className={`w-4 h-4 text-muted transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="pb-4 text-sm text-muted leading-relaxed">
          {children}
        </div>
      )}
    </div>
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === id)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const [selectedTone, setSelectedTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    if (containerRef.current) {
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      })
      return () => window.cancelAnimationFrame(frameId)
    }
  }, [id, activeImage])

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <p className="text-muted">Product not found.</p>
        <Link to="/shop" className="text-gold underline underline-offset-4 mt-4 inline-block text-sm">
          Back to Shop
        </Link>
      </div>
    )
  }

  const related = products.filter(p => p.id !== product.id).slice(0, 4)

  return (
    <div ref={containerRef} className="pt-24 md:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 text-xs text-muted tracking-wide">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-[3/4] overflow-hidden bg-sand mb-3">
              <img
                data-strk-img-id={product.images[activeImage]?.imgId || product.imgId}
                data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry detail`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {product.images.map((img, i) => (
                <button
                  key={img.imgId}
                  onClick={() => setActiveImage(i)}
                  className={`w-16 h-20 overflow-hidden bg-sand border-2 transition-colors ${
                    i === activeImage ? 'border-gold' : 'border-transparent hover:border-hairline'
                  }`}
                >
                  <img
                    data-strk-img-id={`${img.imgId}-thumb`}
                    data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry thumbnail`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="120"
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
              className="font-serif text-2xl md:text-3xl uppercase tracking-[0.12em] text-charcoal"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${i < Math.round(product.rating) ? 'fill-gold text-gold' : 'text-hairline'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted">({product.reviews})</span>
            </div>

            <p className="mt-4 text-2xl font-serif text-charcoal">${product.price}</p>

            <p id={product.descId} className="mt-4 text-sm text-muted leading-relaxed">
              {product.longDescription}
            </p>

            {/* Tone selector */}
            <div className="mt-6">
              <span className="text-xs tracking-[0.15em] uppercase font-medium text-charcoal block mb-3">
                Tone: {selectedTone}
              </span>
              <div className="flex gap-2">
                {product.tone.map(tone => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`px-5 py-2 text-xs tracking-[0.1em] uppercase border transition-all duration-300 ${
                      selectedTone === tone
                        ? 'border-gold bg-gold text-white'
                        : 'border-hairline text-charcoal hover:border-gold'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <span className="text-xs tracking-[0.15em] uppercase font-medium text-charcoal block mb-3">
                Quantity
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 border border-hairline flex items-center justify-center text-charcoal hover:border-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="text-sm font-medium w-6 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 border border-hairline flex items-center justify-center text-charcoal hover:border-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedTone, quantity)}
              className="w-full mt-8 bg-gold text-white py-4 text-xs tracking-[0.25em] uppercase font-medium hover:bg-gold-hover transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Bag
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                {product.longDescription}
              </Accordion>
              <Accordion title="Materials & Care">
                {product.materials}
              </Accordion>
              <Accordion title="Shipping & Returns">
                {product.shipping}
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-28">
          <h2 className="font-serif text-2xl md:text-3xl tracking-wide text-charcoal text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[3/4] overflow-hidden bg-sand">
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
                <h3 className="mt-3 font-serif text-xs uppercase tracking-[0.1em] text-charcoal group-hover:text-gold transition-colors">
                  {p.name}
                </h3>
                <p className="text-sm text-muted mt-0.5">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
