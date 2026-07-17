import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-champagne/40">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <span className="font-sans text-xs tracking-widest uppercase text-velvet group-hover:text-gold transition-colors">
          {title}
        </span>
        {open
          ? <ChevronUp className="w-4 h-4 text-mist" />
          : <ChevronDown className="w-4 h-4 text-mist" />
        }
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <div className="font-sans text-sm text-bark leading-relaxed">{children}</div>
      </div>
    </div>
  )
}

function RelatedProducts({ current }) {
  const containerRef = useRef(null)
  const related = products.filter(p => p.id !== current.id).slice(0, 4)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 lg:py-20 border-t border-champagne/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-light text-velvet mb-10 text-center">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {related.map(p => (
            <Link key={p.id} to={`/product/${p.slug}`} className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-cream mb-3">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  data-strk-img-id={`related-${p.imgId}`}
                  data-strk-img={`[related-${p.titleId}] gold jewelry`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 id={`related-${p.titleId}`} className="font-serif text-sm text-velvet uppercase tracking-wider group-hover:text-gold transition-colors">
                {p.name}
              </h3>
              <p className="font-sans text-sm text-mist mt-0.5">${p.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find(p => p.slug === slug) || products[0]
  const { addItem } = useCart()
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
  const [qty, setQty] = useState(1)
  const [activeThumb, setActiveThumb] = useState(0)
  const [added, setAdded] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    setSelectedVariant(product.variants[0])
    setQty(1)
    setActiveThumb(0)
  }, [slug, product])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [slug])

  const handleAddToCart = () => {
    addItem(product, selectedVariant, qty)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const thumbImages = [
    { id: `pdp-main-${product.imgId}`, query: `[pdp-desc-${product.id}] [pdp-title-${product.id}]` },
    { id: `pdp-alt1-${product.imgId2}`, query: `[pdp-title-${product.id}] gold jewelry detail close up` },
    { id: `pdp-alt2-${product.imgId}-3`, query: `[pdp-title-${product.id}] gold jewelry worn model` },
  ]

  return (
    <div ref={containerRef} className="min-h-screen bg-ivory pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
        <Link to="/shop" className="inline-flex items-center gap-2 font-sans text-xs text-mist hover:text-gold transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Shop
        </Link>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {thumbImages.map((thumb, i) => (
                <button
                  key={i}
                  onClick={() => setActiveThumb(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors ${activeThumb === i ? 'border-gold' : 'border-transparent'}`}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    data-strk-img-id={thumb.id}
                    data-strk-img={thumb.query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative aspect-[3/4] overflow-hidden bg-cream">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id={`pdp-active-${product.id}-${activeThumb}`}
                data-strk-img={thumbImages[activeThumb].query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {product.tags.includes('bestseller') && (
                <div className="absolute top-4 left-4">
                  <span className="font-sans text-[10px] tracking-wider uppercase bg-gold text-velvet px-3 py-1">
                    Bestseller
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="font-sans text-xs tracking-widest uppercase text-gold mb-3">
              {product.category}
            </p>

            {/* Name */}
            <h1
              id={`pdp-title-${product.id}`}
              className="font-serif text-3xl md:text-4xl font-light text-velvet uppercase tracking-widest2 leading-tight"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-4">
              <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5"
                  style={i < Math.floor(product.rating)
                    ? { fill: '#B8924A', color: '#B8924A' }
                    : { fill: 'none', color: '#E8D5B0' }}
                />
              ))}
            </div>
              <span className="font-sans text-xs text-mist">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <p className="font-serif text-3xl text-velvet mt-5">${product.price}</p>

            {/* Divider */}
            <div className="w-full h-px bg-champagne/40 my-6" />

            {/* Description */}
            <p id={`pdp-desc-${product.id}`} className="font-sans text-sm text-bark leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mt-6">
                <p className="font-sans text-xs tracking-widest uppercase text-mist mb-3">
                  Finish: <span className="text-velvet">{selectedVariant}</span>
                </p>
                <div className="flex gap-2 flex-wrap">
                  {product.variants.map(v => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-5 py-2.5 font-sans text-xs tracking-wider uppercase border transition-all duration-200 ${
                        selectedVariant === v
                          ? 'border-gold bg-gold/10 text-velvet'
                          : 'border-champagne/60 text-mist hover:border-gold hover:text-velvet'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-6">
              <p className="font-sans text-xs tracking-widest uppercase text-mist mb-3">Quantity</p>
              <div className="flex items-center gap-0 border border-champagne/60 w-fit">
                <button
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-bark hover:bg-cream transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center font-sans text-sm text-velvet border-x border-champagne/60">
                  {qty}
                </span>
                <button
                  onClick={() => setQty(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-bark hover:bg-cream transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`mt-8 w-full py-4 font-sans text-xs tracking-widest uppercase flex items-center justify-center gap-3 transition-all duration-300 ${
                added
                  ? 'bg-bark text-champagne'
                  : 'bg-velvet text-champagne hover:bg-bark'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              {added ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="mt-6 flex flex-wrap gap-4">
              {['Free Shipping', '30-Day Returns', 'Secure Checkout'].map(t => (
                <span key={t} className="font-sans text-[11px] text-mist flex items-center gap-1">
                  <span className="text-gold">✓</span> {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8 border-t border-champagne/40">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.materials}</p>
                <p className="mt-3">To maintain your piece: avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Polish gently with a soft cloth.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>Free worldwide shipping on all orders. Standard delivery 5–8 business days. Express available at checkout.</p>
                <p className="mt-3">30-day hassle-free returns. Items must be unworn and in original packaging. Contact us to initiate a return.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <RelatedProducts current={product} />
    </div>
  )
}
