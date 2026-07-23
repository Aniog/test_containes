import { useEffect, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react'
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
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-manrope text-xs uppercase tracking-widest text-velmora-text">{title}</span>
        {open
          ? <ChevronUp className="w-4 h-4 text-velmora-muted" />
          : <ChevronDown className="w-4 h-4 text-velmora-muted" />
        }
      </button>
      {open && (
        <div className="pb-5 animate-fadeIn">
          <p className="font-manrope text-sm text-velmora-muted leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  )
}

export default function ProductDetailPage() {
  const { slug } = useParams()
  const containerRef = useRef(null)
  const [selectedVariant, setSelectedVariant] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [activeImg, setActiveImg] = useState(0)
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()

  const product = products.find(p => p.slug === slug)
  const related = products.filter(p => p.id !== product?.id).slice(0, 4)

  useEffect(() => {
    if (product) setSelectedVariant(product.variants[0])
    setActiveImg(0)
    window.scrollTo(0, 0)
  }, [slug, product])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [slug])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-velmora-ivory">
        <div className="text-center">
          <p className="font-cormorant text-2xl text-velmora-muted">Product not found</p>
          <Link to="/shop" className="mt-4 inline-block font-manrope text-xs uppercase tracking-widest text-velmora-gold hover:text-velmora-gold-dark">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const images = [
    { id: product.imgId, id2: `${product.imgId}-pdp-main` },
    { id: product.imgId2, id2: `${product.imgId2}-pdp-alt` },
  ]

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div ref={containerRef} className="bg-velmora-ivory min-h-screen pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center gap-2">
          <Link to="/shop" className="flex items-center gap-1 font-manrope text-xs text-velmora-muted hover:text-velmora-gold transition-colors">
            <ArrowLeft className="w-3 h-3" />
            Shop
          </Link>
          <span className="text-velmora-subtle text-xs">/</span>
          <span className="font-manrope text-xs text-velmora-muted capitalize">{product.category}</span>
          <span className="text-velmora-subtle text-xs">/</span>
          <span className="font-manrope text-xs text-velmora-text uppercase tracking-widest">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">

          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible no-scrollbar">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors duration-200 ${
                    activeImg === i ? 'border-velmora-gold' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`${img.id}-thumb-${i}`}
                    data-strk-img={`[${product.titleId}] [${product.descId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 overflow-hidden bg-velmora-cream" style={{ aspectRatio: '3/4' }}>
              <img
                data-strk-img-id={activeImg === 0 ? `${product.imgId}-pdp-main` : `${product.imgId2}-pdp-main`}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Tags */}
            <div className="flex gap-2 mb-3">
              {product.tags.includes('bestseller') && (
                <span className="bg-velmora-obsidian text-velmora-ivory font-manrope text-[9px] uppercase tracking-widest px-2 py-0.5">
                  Bestseller
                </span>
              )}
              {product.tags.includes('new') && (
                <span className="bg-velmora-gold text-velmora-obsidian font-manrope text-[9px] uppercase tracking-widest px-2 py-0.5">
                  New
                </span>
              )}
            </div>

            {/* Name */}
            <h1
              id={product.titleId}
              className="font-cormorant text-3xl md:text-4xl uppercase tracking-widest text-velmora-text leading-tight"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-border'}`}
                  />
                ))}
              </div>
              <span className="font-manrope text-xs text-velmora-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-cormorant text-3xl text-velmora-text mt-4">${product.price}</p>

            {/* Short description */}
            <p
              id={product.descId}
              className="font-manrope text-sm text-velmora-muted leading-relaxed mt-4"
            >
              {product.description}
            </p>

            <div className="h-px bg-velmora-border my-6" />

            {/* Variant selector */}
            <div>
              <p className="font-manrope text-xs uppercase tracking-widest text-velmora-text mb-3">
                Finish: <span className="text-velmora-muted">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-manrope text-xs uppercase tracking-widest px-5 py-2.5 border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'border-velmora-gold bg-velmora-gold text-velmora-obsidian'
                        : 'border-velmora-border text-velmora-muted hover:border-velmora-gold hover:text-velmora-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-5">
              <p className="font-manrope text-xs uppercase tracking-widest text-velmora-text mb-3">Quantity</p>
              <div className="flex items-center gap-0 border border-velmora-border w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-velmora-muted hover:text-velmora-gold hover:bg-velmora-cream transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center font-manrope text-sm text-velmora-text border-x border-velmora-border">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-velmora-muted hover:text-velmora-gold hover:bg-velmora-cream transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="mt-6 w-full bg-velmora-gold text-velmora-obsidian font-manrope text-xs uppercase tracking-widest py-4 hover:bg-velmora-gold-dark transition-colors duration-300"
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mt-4">
              {['Free Worldwide Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-manrope text-[10px] uppercase tracking-widest text-velmora-subtle flex items-center gap-1">
                  <span className="text-velmora-gold">✓</span> {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">{product.description}</Accordion>
              <Accordion title="Materials & Care">
                <span>{product.materials}</span>
                <br /><br />
                <span>{product.care}</span>
              </Accordion>
              <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
            </div>
          </div>
        </div>

        {/* You may also like */}
        <div className="mt-20 md:mt-28">
          <div className="flex items-end justify-between mb-8 md:mb-10">
            <h2 className="font-cormorant text-2xl md:text-4xl font-light text-velmora-text">
              You May Also Like
            </h2>
            <Link to="/shop" className="font-manrope text-xs uppercase tracking-widest text-velmora-muted hover:text-velmora-gold transition-colors">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map(p => (
              <Link key={p.id} to={`/product/${p.slug}`} className="group block">
                <div className="overflow-hidden bg-velmora-cream aspect-[3/4]">
                  <img
                    data-strk-img-id={`related-${p.imgId}`}
                    data-strk-img={`[related-desc-${p.id}] [related-title-${p.id}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3">
                  <h3 id={`related-title-${p.id}`} className="font-cormorant text-sm uppercase tracking-widest text-velmora-text">
                    {p.name}
                  </h3>
                  <p id={`related-desc-${p.id}`} className="font-manrope text-xs text-velmora-muted mt-0.5">{p.shortDescription}</p>
                  <p className="font-manrope text-sm text-velmora-text mt-1">${p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
