import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ChevronDown, ChevronUp, Minus, Plus, ShoppingBag, ArrowLeft } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { StarRating } from '@/components/ui/StarRating'
import { Button } from '@/components/ui/Button'
import ProductCard from '@/components/product/ProductCard'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-stone/20">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs font-sans uppercase tracking-widest text-obsidian">{title}</span>
        {open ? <ChevronUp className="w-4 h-4 text-driftwood" /> : <ChevronDown className="w-4 h-4 text-driftwood" />}
      </button>
      {open && (
        <div className="pb-5 animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  )
}

export default function ProductDetailPage() {
  const { slug } = useParams()
  const product = products.find(p => p.slug === slug) || products[0]
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const [selectedVariant, setSelectedVariant] = useState(product.variants[0])
  const [quantity, setQuantity] = useState(1)
  const [activeImg, setActiveImg] = useState(0)
  const [added, setAdded] = useState(false)

  const related = products.filter(p => p.id !== product.id).slice(0, 4)

  useEffect(() => {
    setSelectedVariant(product.variants[0])
    setQuantity(1)
    setActiveImg(0)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [slug, product])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [slug])

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const images = [
    { id: `pdp-img1-${product.id}-a1b2`, query: `[pdp-desc-${product.id}] [pdp-title-${product.id}]` },
    { id: `pdp-img2-${product.id}-c3d4`, query: `[pdp-title-${product.id}] gold jewelry worn model close up` },
    { id: `pdp-img3-${product.id}-e5f6`, query: `[pdp-title-${product.id}] fine jewelry detail texture` },
    { id: `pdp-img4-${product.id}-g7h8`, query: `[pdp-title-${product.id}] jewelry flat lay elegant` },
  ]

  return (
    <div ref={containerRef} className="bg-parchment min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center gap-2">
          <Link to="/shop" className="flex items-center gap-1.5 text-xs font-sans text-driftwood hover:text-gold transition-colors uppercase tracking-widest">
            <ArrowLeft className="w-3 h-3" />
            Shop
          </Link>
          <span className="text-stone/40">/</span>
          <span className="text-xs font-sans text-driftwood uppercase tracking-widest capitalize">{product.category}</span>
          <span className="text-stone/40">/</span>
          <span className="text-xs font-sans text-obsidian uppercase tracking-widest">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible scrollbar-hide">
              {images.map((img, i) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border transition-colors ${
                    activeImg === i ? 'border-gold' : 'border-stone/20 hover:border-stone/50'
                  }`}
                >
                  <img
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative overflow-hidden bg-linen" style={{ aspectRatio: '3/4' }}>
              {images.map((img, i) => (
                <img
                  key={img.id}
                  data-strk-img-id={img.id}
                  data-strk-img={img.query}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                  alt={`${product.name} view ${i + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${
                    activeImg === i ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="text-xs font-sans uppercase tracking-ultra-wide text-gold mb-3 capitalize">
              {product.category}
            </p>

            {/* Name */}
            <h1
              id={`pdp-title-${product.id}`}
              className="font-serif text-2xl md:text-3xl uppercase tracking-widest text-obsidian font-light mb-3 leading-tight"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="mb-4">
              <StarRating rating={product.rating} count={product.reviewCount} size="md" />
            </div>

            {/* Price */}
            <p className="font-sans text-2xl font-medium text-obsidian mb-5">
              ${product.price}
            </p>

            {/* Short description */}
            <p
              id={`pdp-desc-${product.id}`}
              className="text-sm font-sans text-driftwood leading-relaxed mb-6 border-b border-stone/20 pb-6"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs font-sans uppercase tracking-widest text-driftwood mb-3">
                Tone: <span className="text-obsidian capitalize">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2 text-xs font-sans uppercase tracking-widest border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'bg-obsidian border-obsidian text-ivory'
                        : 'bg-transparent border-stone/40 text-driftwood hover:border-obsidian hover:text-obsidian'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-xs font-sans uppercase tracking-widest text-driftwood mb-3">Quantity</p>
              <div className="flex items-center border border-stone/30 w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-driftwood hover:text-obsidian transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-12 text-center text-sm font-sans text-obsidian">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-driftwood hover:text-obsidian transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <Button
              variant="primary"
              size="lg"
              className="w-full mb-3 flex items-center gap-2"
              onClick={handleAddToCart}
            >
              <ShoppingBag className="w-4 h-4" />
              {added ? 'Added to Cart!' : 'Add to Cart'}
            </Button>

            <Button variant="outline" size="lg" className="w-full mb-8">
              Add to Wishlist
            </Button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mb-8 pb-8 border-b border-stone/20">
              {['Free Worldwide Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="text-[10px] font-sans uppercase tracking-widest text-driftwood">
                  ✓ {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div>
              <Accordion title="Description">
                <ul className="space-y-2">
                  {product.details.map((d, i) => (
                    <li key={i} className="text-sm font-sans text-driftwood flex items-start gap-2">
                      <span className="text-gold mt-0.5">—</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="text-sm font-sans text-driftwood leading-relaxed">{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="text-sm font-sans text-driftwood leading-relaxed">{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <div className="bg-linen py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl md:text-3xl font-light text-obsidian">You May Also Like</h2>
            <div className="w-10 h-px bg-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
