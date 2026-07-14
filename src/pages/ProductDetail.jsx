import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, ChevronUp, Minus, Plus, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-t border-linen">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs tracking-widest uppercase text-ink">{title}</span>
        {open ? <ChevronUp size={14} strokeWidth={1.5} className="text-ink-muted" /> : <ChevronDown size={14} strokeWidth={1.5} className="text-ink-muted" />}
      </button>
      {open && (
        <div className="pb-5 font-sans text-sm text-ink-muted leading-relaxed">
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
    <section ref={containerRef} className="bg-parchment py-16 md:py-20 border-t border-linen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-serif font-light text-2xl md:text-3xl text-ink tracking-wide mb-10 text-center">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map(p => (
            <Link key={p.id} to={`/product/${p.slug}`} className="group block">
              <div className="relative overflow-hidden bg-linen aspect-[3/4] mb-3">
                <img
                  data-strk-img-id={`related-${p.imgId}`}
                  data-strk-img={`[related-${p.id}-desc] [related-${p.id}-title]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 id={`related-${p.id}-title`} className="font-serif text-xs uppercase tracking-widest text-ink group-hover:text-gold transition-colors duration-300">
                {p.name}
              </h3>
              <p id={`related-${p.id}-desc`} className="font-sans text-xs text-ink-muted mt-0.5">{p.shortDescription}</p>
              <p className="font-sans text-sm font-500 text-ink mt-1">${p.price}</p>
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
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
  const [quantity, setQuantity] = useState(1)
  const [activeImg, setActiveImg] = useState(0)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  useEffect(() => {
    setSelectedVariant(product.variants[0])
    setQuantity(1)
    setActiveImg(0)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug, product])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [slug])

  const images = [
    { id: `pdp-main-${product.imgId}`, query: `[pdp-desc-${product.id}] [pdp-title-${product.id}]`, ratio: '3x4' },
    { id: `pdp-worn-${product.img2Id}`, query: `gold jewelry worn on model [pdp-title-${product.id}]`, ratio: '3x4' },
    { id: `pdp-detail-${product.id}-d3`, query: `close up detail gold jewelry texture [pdp-title-${product.id}]`, ratio: '3x4' },
  ]

  return (
    <>
      <div ref={containerRef} className="bg-parchment pt-20 md:pt-24">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <nav className="flex items-center gap-2 font-sans text-xs text-ink-faint">
            <Link to="/" className="hover:text-gold transition-colors duration-300">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-gold transition-colors duration-300">Shop</Link>
            <span>/</span>
            <span className="text-ink-muted capitalize">{product.category}</span>
            <span>/</span>
            <span className="text-ink">{product.name}</span>
          </nav>
        </div>

        {/* Main content */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Gallery */}
            <div className="flex flex-col-reverse md:flex-row gap-3">
              {/* Thumbnails */}
              <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible scrollbar-hide">
                {images.map((img, i) => (
                  <button
                    key={img.id}
                    onClick={() => setActiveImg(i)}
                    className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border transition-all duration-300 ${activeImg === i ? 'border-gold' : 'border-linen hover:border-ink-faint'}`}
                  >
                    <img
                      data-strk-img-id={`thumb-${img.id}`}
                      data-strk-img={img.query}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="200"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={`View ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Main image */}
              <div className="flex-1 relative overflow-hidden bg-linen aspect-[3/4]">
                {images.map((img, i) => (
                  <img
                    key={img.id}
                    data-strk-img-id={img.id}
                    data-strk-img={img.query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${activeImg === i ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-obsidian text-cream font-sans text-xs tracking-widest uppercase px-3 py-1.5 z-10">
                    {product.badge}
                  </span>
                )}
              </div>
            </div>

            {/* Product info */}
            <div className="flex flex-col">
              {/* Category */}
              <p className="font-sans text-xs tracking-widest uppercase text-gold mb-3 capitalize">
                {product.category}
              </p>

              {/* Name */}
              <h1
                id={`pdp-title-${product.id}`}
                className="font-serif font-light text-3xl md:text-4xl uppercase tracking-widest text-ink leading-tight"
              >
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-3">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={12}
                      className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-ink-faint fill-transparent'}
                    />
                  ))}
                </div>
                <span className="font-sans text-xs text-ink-muted">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <p className="font-serif text-2xl text-ink mt-4">${product.price}</p>

              {/* Description */}
              <p
                id={`pdp-desc-${product.id}`}
                className="font-sans text-sm text-ink-muted leading-relaxed mt-4 max-w-sm"
              >
                {product.description}
              </p>

              <div className="w-full h-px bg-linen my-6" />

              {/* Variant selector */}
              <div className="mb-5">
                <p className="font-sans text-xs tracking-widest uppercase text-ink mb-3">
                  Tone: <span className="text-ink-muted capitalize">{selectedVariant}</span>
                </p>
                <div className="flex gap-2">
                  {product.variants.map(v => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`font-sans text-xs tracking-widest uppercase px-5 py-2.5 border transition-all duration-300 capitalize ${
                        selectedVariant === v
                          ? 'bg-ink text-cream border-ink'
                          : 'bg-transparent text-ink border-linen hover:border-ink'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <p className="font-sans text-xs tracking-widest uppercase text-ink mb-3">Quantity</p>
                <div className="flex items-center border border-linen w-fit">
                  <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="w-10 h-10 flex items-center justify-center text-ink-muted hover:text-ink transition-colors duration-300"
                    aria-label="Decrease"
                  >
                    <Minus size={14} strokeWidth={1.5} />
                  </button>
                  <span className="w-10 text-center font-sans text-sm text-ink">{quantity}</span>
                  <button
                    onClick={() => setQuantity(q => q + 1)}
                    className="w-10 h-10 flex items-center justify-center text-ink-muted hover:text-ink transition-colors duration-300"
                    aria-label="Increase"
                  >
                    <Plus size={14} strokeWidth={1.5} />
                  </button>
                </div>
              </div>

              {/* Add to cart */}
              <button
                onClick={() => addItem(product, selectedVariant, quantity)}
                className="w-full bg-gold text-cream font-sans text-xs tracking-widest uppercase py-4 flex items-center justify-center gap-3 hover:bg-gold-light transition-colors duration-300"
              >
                <ShoppingBag size={16} strokeWidth={1.5} />
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-4 mt-5">
                {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                  <span key={t} className="font-sans text-xs text-ink-faint flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-gold inline-block" />
                    {t}
                  </span>
                ))}
              </div>

              {/* Accordions */}
              <div className="mt-8">
                <Accordion title="Description">
                  <ul className="space-y-1.5">
                    {product.details.map(d => (
                      <li key={d} className="flex items-start gap-2">
                        <span className="text-gold mt-1">·</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </Accordion>
                <Accordion title="Materials & Care">
                  <p>{product.care}</p>
                </Accordion>
                <Accordion title="Shipping & Returns">
                  <p>{product.shipping}</p>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RelatedProducts current={product} />
    </>
  )
}
