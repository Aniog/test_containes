import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ShoppingBag, ChevronDown, ChevronUp } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-brand-sand">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 font-sans text-xs tracking-wide uppercase text-brand-charcoal hover:text-brand-gold transition-colors"
      >
        {title}
        {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      {open && (
        <div className="pb-4 font-sans text-sm text-brand-muted leading-relaxed animate-fade-in">
          {children}
        </div>
      )}
    </div>
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const containerRef = useRef(null)
  const relatedRef = useRef(null)
  const { addItem } = useCart()

  const [selectedTone, setSelectedTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [activeImage])

  useEffect(() => {
    if (relatedRef.current) {
      ImageHelper.loadImages(strkImgConfig, relatedRef.current)
    }
  }, [])

  if (!product) {
    return (
      <div className="pt-32 section-padding text-center">
        <h1 className="font-serif text-2xl text-brand-charcoal">Product not found</h1>
        <Link to="/shop" className="btn-outline inline-block mt-6">Back to Shop</Link>
      </div>
    )
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4)

  return (
    <div className="pt-20 md:pt-24">
      <div ref={containerRef} className="section-padding py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-[3/4] overflow-hidden bg-brand-warm mb-3">
              <img
                data-strk-img-id={product.images[activeImage]?.imgId || product.imgId}
                data-strk-img={`[${product.descId}] [${product.titleId}] product detail`}
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
                  className={`w-16 h-20 overflow-hidden bg-brand-warm border-2 transition-colors ${
                    activeImage === i ? 'border-brand-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.imgId}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}] thumbnail`}
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
          <div className="py-2 lg:py-4">
            <h1 id={product.titleId} className="font-serif text-2xl md:text-3xl uppercase tracking-ultra-wide text-brand-charcoal font-light">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.round(product.rating) ? 'fill-brand-gold text-brand-gold' : 'text-brand-sand'}`}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-brand-muted">({product.reviews})</span>
            </div>

            <p className="font-serif text-2xl text-brand-charcoal mt-4">${product.price}</p>

            <p id={product.descId} className="font-sans text-sm text-brand-muted leading-relaxed mt-4">
              {product.description}
            </p>

            {/* Tone selector */}
            <div className="mt-6">
              <span className="font-sans text-xs tracking-wide uppercase text-brand-muted block mb-3">
                Tone: {selectedTone}
              </span>
              <div className="flex gap-2">
                {product.tone.map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`px-5 py-2 font-sans text-xs tracking-wide uppercase border transition-all duration-300 ${
                      selectedTone === tone
                        ? 'border-brand-gold bg-brand-gold text-white'
                        : 'border-brand-sand text-brand-charcoal hover:border-brand-gold'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <span className="font-sans text-xs tracking-wide uppercase text-brand-muted block mb-3">Quantity</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 flex items-center justify-center border border-brand-sand text-brand-muted hover:text-brand-charcoal transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="font-sans text-sm text-brand-charcoal w-6 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 flex items-center justify-center border border-brand-sand text-brand-muted hover:text-brand-charcoal transition-colors"
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
                <p>{product.description}</p>
                <p className="mt-2">Each piece is carefully crafted with attention to detail, ensuring a finish that rivals fine jewelry at a fraction of the cost.</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>18K gold plated over hypoallergenic brass base. Nickel-free and lead-free.</p>
                <p className="mt-2">To maintain the finish, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>Free worldwide shipping on all orders. Standard delivery 5–10 business days.</p>
                <p className="mt-2">30-day hassle-free returns. Items must be unworn and in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div ref={relatedRef} className="section-padding py-16 md:py-24 border-t border-brand-sand">
        <h2 className="font-serif text-heading md:text-3xl text-brand-charcoal font-light text-center mb-10">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map((p) => (
            <Link key={p.id} to={`/product/${p.id}`} className="group">
              <div className="aspect-[3/4] overflow-hidden bg-brand-warm mb-3">
                <img
                  data-strk-img-id={`related-${p.imgId}`}
                  data-strk-img={`[${p.descId}] [${p.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-product-name text-brand-charcoal">{p.name}</h3>
              <p className="font-sans text-sm text-brand-muted mt-1">${p.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
