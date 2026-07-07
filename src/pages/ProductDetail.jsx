import { useState, useEffect, useRef } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Star, Minus, Plus, ShoppingBag, ChevronDown, ArrowLeft } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={12}
            fill={i < Math.floor(rating) ? '#C9A96E' : 'none'}
            stroke={i < Math.floor(rating) ? 'none' : '#C9A96E'}
            strokeWidth={1.5}
          />
        ))}
      </div>
      <span className="font-manrope text-xs text-velmora-text-muted">{rating} ({count} reviews)</span>
    </div>
  )
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-t border-velmora-stone/20">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-manrope text-xs tracking-widest uppercase text-velmora-text-dark">{title}</span>
        <ChevronDown
          size={14}
          strokeWidth={1.5}
          className={`text-velmora-text-mid transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-5 animate-fadeIn">
          <div className="font-manrope text-sm text-velmora-text-mid leading-relaxed">
            {children}
          </div>
        </div>
      )}
    </div>
  )
}

function RelatedProducts({ currentId }) {
  const containerRef = useRef(null)
  const related = products.filter(p => p.id !== currentId).slice(0, 4)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [currentId])

  return (
    <section ref={containerRef} className="py-16 md:py-20 bg-velmora-cream border-t border-velmora-stone/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <h2 className="font-cormorant text-2xl md:text-3xl font-light text-velmora-text-dark mb-8 md:mb-10">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map(product => (
            <Link key={product.id} to={`/product/${product.slug}`} className="group flex flex-col">
              <div className="relative overflow-hidden bg-velmora-linen aspect-portrait">
                <img
                  data-strk-img-id={`related-${product.imgId}`}
                  data-strk-img={`[related-${product.titleId}] [related-${product.descId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <div className="pt-3">
                <h3
                  id={`related-${product.titleId}`}
                  className="font-cormorant text-sm tracking-widest uppercase text-velmora-text-dark group-hover:text-velmora-gold transition-colors duration-300"
                >
                  {product.name}
                </h3>
                <p id={`related-${product.descId}`} className="sr-only">{product.shortDesc}</p>
                <p className="font-manrope text-sm font-medium text-velmora-text-dark mt-1">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ProductDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const containerRef = useRef(null)
  const product = products.find(p => p.slug === slug)

  const [selectedVariant, setSelectedVariant] = useState(null)
  const [qty, setQty] = useState(1)
  const [activeThumb, setActiveThumb] = useState(0)
  const { addItem } = useCart()

  useEffect(() => {
    if (product) {
      setSelectedVariant(product.variants[0])
      setActiveThumb(0)
      setQty(1)
    }
  }, [product])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [slug])

  if (!product) {
    return (
      <div className="min-h-screen bg-velmora-linen flex items-center justify-center">
        <div className="text-center">
          <p className="font-cormorant text-2xl text-velmora-text-dark mb-4">Product not found</p>
          <Link to="/shop" className="font-manrope text-xs tracking-widest uppercase text-velmora-gold border-b border-velmora-gold pb-0.5">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, qty)
  }

  const thumbImages = [
    { id: `pdp-main-${product.imgId}`, label: 'Main view' },
    { id: `pdp-alt-${product.img2Id}`, label: 'Alt view' },
    { id: `pdp-detail-${product.imgId}-d`, label: 'Detail view' },
  ]

  return (
    <div className="bg-velmora-linen min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-24 md:pt-28 pb-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 font-manrope text-xs text-velmora-text-muted hover:text-velmora-gold transition-colors duration-300"
        >
          <ArrowLeft size={12} strokeWidth={1.5} />
          Back
        </button>
      </div>

      <div ref={containerRef} className="max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-4">
            {/* Thumbnails */}
            <div className="flex flex-row md:flex-col gap-2 md:gap-3">
              {thumbImages.map((thumb, i) => (
                <button
                  key={thumb.id}
                  onClick={() => setActiveThumb(i)}
                  className={`w-16 h-16 md:w-20 md:h-20 overflow-hidden bg-velmora-cream flex-shrink-0 border-2 transition-colors duration-200 ${
                    activeThumb === i ? 'border-velmora-gold' : 'border-transparent'
                  }`}
                  aria-label={thumb.label}
                >
                  <img
                    data-strk-img-id={thumb.id}
                    data-strk-img={`[pdp-title-${product.id}] [pdp-desc-${product.id}] gold jewelry`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 overflow-hidden bg-velmora-cream aspect-portrait">
              <img
                data-strk-img-id={`pdp-hero-${product.imgId}-${activeThumb}`}
                data-strk-img={`[pdp-desc-${product.id}] [pdp-title-${product.id}] gold jewelry worn`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            <p className="font-manrope text-[10px] tracking-[0.3em] uppercase text-velmora-gold mb-2">
              {product.category}
            </p>
            <h1
              id={`pdp-title-${product.id}`}
              className="font-cormorant text-2xl md:text-3xl tracking-widest uppercase text-velmora-text-dark leading-tight mb-3"
            >
              {product.name}
            </h1>

            <StarRating rating={product.rating} count={product.reviewCount} />

            <div className="my-5 hairline" />

            <p className="font-cormorant text-3xl text-velmora-text-dark mb-1">
              ${product.price}
            </p>
            <p className="font-manrope text-xs text-velmora-text-muted mb-6">
              Free shipping on orders over $50
            </p>

            <p
              id={`pdp-desc-${product.id}`}
              className="font-manrope text-sm text-velmora-text-mid leading-relaxed mb-6"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-manrope text-[10px] tracking-widest uppercase text-velmora-text-dark mb-3">
                Finish: <span className="text-velmora-gold">{selectedVariant}</span>
              </p>
              <div className="flex gap-2 flex-wrap">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-manrope text-xs tracking-widest uppercase px-4 py-2 border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-velmora-gold bg-velmora-gold text-velmora-obsidian'
                        : 'border-velmora-stone/40 text-velmora-text-mid hover:border-velmora-gold hover:text-velmora-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-manrope text-[10px] tracking-widest uppercase text-velmora-text-dark mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-velmora-stone/30 w-fit">
                <button
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-velmora-text-mid hover:text-velmora-text-dark transition-colors"
                  aria-label="Decrease"
                >
                  <Minus size={13} strokeWidth={1.5} />
                </button>
                <span className="w-10 text-center font-manrope text-sm text-velmora-text-dark">{qty}</span>
                <button
                  onClick={() => setQty(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-velmora-text-mid hover:text-velmora-text-dark transition-colors"
                  aria-label="Increase"
                >
                  <Plus size={13} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-velmora-gold text-velmora-obsidian font-manrope text-xs tracking-widest uppercase py-4 flex items-center justify-center gap-2 hover:bg-velmora-gold-light transition-colors duration-300 mb-3"
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              Add to Cart — ${(product.price * qty).toFixed(2)}
            </button>

            <button className="w-full border border-velmora-stone/40 text-velmora-text-mid font-manrope text-xs tracking-widest uppercase py-3.5 hover:border-velmora-gold hover:text-velmora-gold transition-all duration-300">
              Add to Wishlist
            </button>

            {/* Trust signals */}
            <div className="mt-6 flex flex-wrap gap-4">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-manrope text-[10px] tracking-widest uppercase text-velmora-text-muted flex items-center gap-1">
                  <span className="text-velmora-gold">✦</span> {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong className="text-velmora-text-dark">Material:</strong> {product.material}</p>
                <p>To maintain the beauty of your piece, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Clean gently with a soft dry cloth.</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">Free standard shipping on orders over $50. Express shipping available at checkout.</p>
                <p>We offer hassle-free 30-day returns on all unworn items in original packaging. Contact our team to initiate a return.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      <RelatedProducts currentId={product.id} />
    </div>
  )
}
