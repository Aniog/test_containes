import { useState, useEffect, useRef } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ChevronDown, ChevronUp, Truck, RotateCcw, Shield, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import StarRating from '@/components/ui/StarRating'

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-t border-linen">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-sans text-xs tracking-widest uppercase font-semibold text-ink group-hover:text-gold transition-colors duration-300">
          {title}
        </span>
        {open ? <ChevronUp size={16} strokeWidth={1.5} className="text-ink-muted" /> : <ChevronDown size={16} strokeWidth={1.5} className="text-ink-muted" />}
      </button>
      <div className={`overflow-hidden transition-all duration-400 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <div className="font-sans text-sm text-ink-muted leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )
}

function RelatedProducts({ ids }) {
  const containerRef = useRef(null)
  const related = products.filter(p => ids.includes(p.id))

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="py-16 md:py-20 border-t border-linen">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <h2 className="font-serif text-3xl md:text-4xl font-light text-ink mb-10">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map(product => (
            <Link key={product.id} to={`/product/${product.slug}`} className="group">
              <div className="relative overflow-hidden bg-cream aspect-[3/4] mb-4">
                <img
                  data-strk-img-id={`related-${product.imgId}`}
                  data-strk-img={`[related-${product.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 id={`related-${product.titleId}`} className="font-serif text-sm uppercase tracking-widest text-ink group-hover:text-gold transition-colors duration-300">
                {product.name}
              </h3>
              <p className="font-sans text-sm font-medium text-ink mt-1">${product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ProductDetailPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const product = products.find(p => p.slug === slug)
  const containerRef = useRef(null)
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImg, setActiveImg] = useState(0)
  const { addItem } = useCart()

  useEffect(() => {
    if (!product) navigate('/shop')
  }, [product, navigate])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [slug])

  if (!product) return null

  const images = [
    { id: product.imgId, query: `[${product.descId}] [${product.titleId}]` },
    { id: product.img2Id, query: `gold jewelry worn on model [${product.titleId}]` },
    { id: `${product.imgId}-3`, query: `close up detail [${product.titleId}] gold jewelry` },
  ]

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
  }

  return (
    <div ref={containerRef} className="bg-parchment min-h-screen pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-5 border-b border-linen">
        <nav className="flex items-center gap-2 font-sans text-xs text-ink-muted">
          <Link to="/" className="hover:text-gold transition-colors duration-300">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold transition-colors duration-300">Shop</Link>
          <span>/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20">
          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-all duration-300 ${activeImg === i ? 'border-gold' : 'border-transparent hover:border-linen'}`}
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
            <div className="flex-1 relative overflow-hidden bg-cream aspect-[3/4]">
              {images.map((img, i) => (
                <img
                  key={i}
                  data-strk-img-id={img.id}
                  data-strk-img={img.query}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${activeImg === i ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex items-center gap-2 mb-4">
              {product.tags.includes('bestseller') && (
                <span className="bg-gold text-obsidian font-sans text-xs tracking-wider uppercase font-semibold px-2.5 py-1">Bestseller</span>
              )}
              {product.tags.includes('new') && (
                <span className="bg-obsidian text-ivory font-sans text-xs tracking-wider uppercase font-semibold px-2.5 py-1">New</span>
              )}
            </div>

            {/* Name */}
            <h1
              id={product.titleId}
              className="font-serif text-3xl md:text-4xl uppercase tracking-widest font-light text-ink leading-tight"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <StarRating rating={product.rating} size={13} />
              <span className="font-sans text-xs text-ink-muted">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <p className="font-sans text-2xl font-medium text-ink mt-4">${product.price}</p>

            {/* Short description */}
            <p id={product.descId} className="font-sans text-sm text-ink-muted leading-relaxed mt-4 max-w-sm">
              {product.shortDescription}
            </p>

            <div className="w-full h-px bg-linen my-6" />

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-widest uppercase font-semibold text-ink mb-3">
                Finish: <span className="text-gold">{selectedVariant}</span>
              </p>
              <div className="flex items-center gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-sans text-xs tracking-widest uppercase font-medium px-5 py-2.5 border transition-all duration-300 ${selectedVariant === v ? 'bg-obsidian text-ivory border-obsidian' : 'bg-transparent text-ink border-linen hover:border-ink'}`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-sans text-xs tracking-widest uppercase font-semibold text-ink mb-3">Quantity</p>
              <div className="flex items-center border border-linen w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-ink-muted hover:text-ink hover:bg-cream transition-all duration-200"
                >
                  −
                </button>
                <span className="w-10 text-center font-sans text-sm text-ink">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-ink-muted hover:text-ink hover:bg-cream transition-all duration-200"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-gold text-obsidian font-sans text-xs tracking-widest uppercase font-semibold py-4 hover:bg-gold-light transition-all duration-300 flex items-center justify-center gap-2"
            >
              <ShoppingBag size={15} strokeWidth={1.5} />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Trust signals */}
            <div className="grid grid-cols-3 gap-3 mt-6">
              {[
                { icon: Truck, label: 'Free Shipping' },
                { icon: RotateCcw, label: '30-Day Returns' },
                { icon: Shield, label: 'Hypoallergenic' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-1.5 py-3 bg-cream">
                  <Icon size={16} strokeWidth={1.5} className="text-gold" />
                  <span className="font-sans text-xs text-ink-muted text-center">{label}</span>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-3"><strong className="text-ink font-medium">Materials:</strong> {product.materials}</p>
                <p><strong className="text-ink font-medium">Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <RelatedProducts ids={product.related} />
    </div>
  )
}
