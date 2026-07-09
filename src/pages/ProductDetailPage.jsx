import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, ChevronUp, ShoppingBag, ArrowLeft } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-t border-velmora-border">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="font-manrope text-xs tracking-[0.14em] uppercase text-velmora-text">
          {title}
        </span>
        {open
          ? <ChevronUp size={14} strokeWidth={1.5} className="text-velmora-muted flex-shrink-0" />
          : <ChevronDown size={14} strokeWidth={1.5} className="text-velmora-muted flex-shrink-0" />
        }
      </button>
      {open && (
        <div className="pb-6 animate-fade-in">
          {children}
        </div>
      )}
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
    <section ref={containerRef} className="border-t border-velmora-border py-16 lg:py-20">
      <div className="mb-10">
        <h2 className="font-cormorant text-3xl font-light text-velmora-text">
          You May Also Like
        </h2>
        <div className="w-8 h-px bg-velmora-gold mt-4" />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {related.map(product => (
          <Link key={product.id} to={`/product/${product.slug}`} className="group">
            <div className="relative overflow-hidden bg-velmora-cream aspect-[3/4] mb-4">
              <img
                data-strk-img-id={`related-${product.imgId}`}
                data-strk-img={`[related-desc-${product.id}] [related-title-${product.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3
              id={`related-title-${product.id}`}
              className="font-cormorant text-sm uppercase tracking-[0.1em] text-velmora-text group-hover:text-velmora-gold transition-colors"
            >
              {product.name}
            </h3>
            <p id={`related-desc-${product.id}`} className="font-manrope text-[10px] text-velmora-muted mt-0.5">
              {product.shortDescription}
            </p>
            <p className="font-cormorant text-base text-velmora-text mt-1">${product.price}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default function ProductDetailPage() {
  const { slug } = useParams()
  const product = products.find(p => p.slug === slug) || products[0]
  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [activeThumb, setActiveThumb] = useState(0)
  const [added, setAdded] = useState(false)
  const containerRef = useRef(null)
  const { addItem } = useCart()

  useEffect(() => {
    window.scrollTo(0, 0)
    setActiveThumb(0)
    setAdded(false)
  }, [slug])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [slug])

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const thumbImages = [
    { id: `pdp-main-${product.imgId}`, query: `[pdp-desc] [pdp-title] gold jewelry` },
    { id: `pdp-alt1-${product.imgId2}`, query: `[pdp-title] jewelry detail close up` },
    { id: `pdp-alt2-${product.imgId}-3`, query: `[pdp-title] jewelry worn on model` },
  ]

  return (
    <div ref={containerRef} className="bg-velmora-ivory min-h-screen pt-16 lg:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8">
          <Link to="/" className="font-manrope text-[10px] tracking-widest uppercase text-velmora-subtle hover:text-velmora-gold transition-colors">
            Home
          </Link>
          <span className="text-velmora-border">/</span>
          <Link to="/shop" className="font-manrope text-[10px] tracking-widest uppercase text-velmora-subtle hover:text-velmora-gold transition-colors">
            Shop
          </Link>
          <span className="text-velmora-border">/</span>
          <span className="font-manrope text-[10px] tracking-widest uppercase text-velmora-muted">
            {product.name}
          </span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse sm:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex sm:flex-col gap-2 overflow-x-auto sm:overflow-visible">
              {thumbImages.map((thumb, i) => (
                <button
                  key={thumb.id}
                  onClick={() => setActiveThumb(i)}
                  className={`relative flex-shrink-0 w-16 h-20 sm:w-20 sm:h-24 overflow-hidden border-2 transition-colors ${
                    activeThumb === i ? 'border-velmora-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={thumb.id}
                    data-strk-img={thumb.query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`View ${i + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative overflow-hidden bg-velmora-cream aspect-[3/4]">
              <img
                data-strk-img-id={thumbImages[activeThumb].id + '-main'}
                data-strk-img={thumbImages[activeThumb].query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="font-manrope text-[10px] tracking-[0.2em] uppercase text-velmora-gold mb-3">
              {product.category}
            </p>

            {/* Name */}
            <h1
              id="pdp-title"
              className="font-cormorant text-3xl lg:text-4xl uppercase tracking-[0.12em] text-velmora-text font-medium leading-tight mb-3"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={11}
                    className={i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-border'}
                    strokeWidth={0.5}
                  />
                ))}
              </div>
              <span className="font-manrope text-xs text-velmora-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-cormorant text-3xl text-velmora-text mb-5">
              ${product.price}
            </p>

            {/* Short description */}
            <p
              id="pdp-desc"
              className="font-manrope text-sm text-velmora-muted leading-relaxed mb-8 border-b border-velmora-border pb-8"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-manrope text-[10px] tracking-[0.14em] uppercase text-velmora-muted mb-3">
                Tone: <span className="text-velmora-text capitalize">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {['gold', 'silver'].map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-manrope text-[10px] tracking-[0.12em] uppercase px-5 py-2.5 border transition-colors ${
                      selectedVariant === v
                        ? 'border-velmora-gold bg-velmora-gold text-white'
                        : 'border-velmora-border text-velmora-muted hover:border-velmora-text hover:text-velmora-text'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-manrope text-[10px] tracking-[0.14em] uppercase text-velmora-muted mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-velmora-border w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-velmora-muted hover:text-velmora-text transition-colors"
                  aria-label="Decrease"
                >
                  <ChevronDown size={14} strokeWidth={1.5} />
                </button>
                <span className="w-10 text-center font-manrope text-sm text-velmora-text">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-velmora-muted hover:text-velmora-text transition-colors"
                  aria-label="Increase"
                >
                  <ChevronUp size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full flex items-center justify-center gap-2 font-manrope text-[11px] tracking-[0.18em] uppercase py-4 transition-colors mb-4 ${
                added
                  ? 'bg-velmora-obsidian text-white'
                  : 'bg-velmora-gold text-white hover:bg-velmora-gold-dark'
              }`}
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              {added ? 'Added to Cart ✓' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="flex items-center justify-center gap-6 py-4 border-t border-velmora-border">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-manrope text-[9px] tracking-[0.1em] uppercase text-velmora-subtle">
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-4">
              <Accordion title="Description">
                <p className="font-manrope text-sm text-velmora-muted leading-relaxed">
                  {product.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {product.details.map(d => (
                    <li key={d} className="flex items-start gap-2 font-manrope text-xs text-velmora-muted">
                      <span className="text-velmora-gold mt-0.5">✦</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </Accordion>

              <Accordion title="Materials & Care">
                <p className="font-manrope text-sm text-velmora-muted leading-relaxed">
                  {product.care}
                </p>
              </Accordion>

              <Accordion title="Shipping & Returns">
                <p className="font-manrope text-sm text-velmora-muted leading-relaxed">
                  {product.shipping}
                </p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <RelatedProducts current={product} />
      </div>
    </div>
  )
}
