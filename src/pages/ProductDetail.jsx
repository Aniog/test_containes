import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'

function StarRating({ rating, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={13}
            className={i < Math.floor(rating) ? 'fill-champagne text-champagne' : 'text-blush fill-blush'}
          />
        ))}
      </div>
      <span className="font-sans text-xs text-stone">{rating} ({count} reviews)</span>
    </div>
  )
}

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-t border-blush">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-xs tracking-widest uppercase text-velvet">{title}</span>
        {open ? <ChevronUp size={16} className="text-stone" /> : <ChevronDown size={16} className="text-stone" />}
      </button>
      {open && (
        <div className="pb-5 font-sans text-sm text-stone leading-relaxed">
          {children}
        </div>
      )}
    </div>
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === id) || products[0]
  const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || 'Gold Tone')
  const [qty, setQty] = useState(1)
  const [activeImg, setActiveImg] = useState(0)
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const thumbIds = [
    { imgId: product.imgId, imgId2: product.imgId2 },
    { imgId: product.imgId2, imgId2: product.imgId },
  ]

  useEffect(() => {
    setSelectedVariant(product.variants?.[0] || 'Gold Tone')
    setActiveImg(0)
    setAdded(false)
    setQty(1)
  }, [id, product])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [id, activeImg])

  const handleAddToCart = () => {
    addItem(product, selectedVariant, qty)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const related = products.filter(p => p.id !== product.id).slice(0, 4)

  return (
    <div ref={containerRef} className="bg-cream min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 font-sans text-xs tracking-widest uppercase text-stone hover:text-champagne transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left: Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible">
              {thumbIds.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors ${
                    activeImg === i ? 'border-champagne' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
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
            <div className="flex-1 relative aspect-[3/4] bg-parchment overflow-hidden">
              <img
                data-strk-img-id={`pdp-main-${product.id}-${activeImg}`}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Info */}
          <div className="flex flex-col">
            <p className="font-sans text-[10px] tracking-widest uppercase text-champagne mb-2">
              {product.material}
            </p>
            <h1
              id={product.titleId}
              className="font-serif text-3xl md:text-4xl tracking-widest uppercase text-velvet mb-3 leading-tight"
            >
              {product.name}
            </h1>

            <StarRating rating={product.rating} count={product.reviewCount} />

            <p className="font-serif text-3xl text-velvet mt-5 mb-6">${product.price}</p>

            <p
              id={product.descId}
              className="font-sans text-sm text-stone leading-relaxed mb-8"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants && product.variants.length > 1 && (
              <div className="mb-6">
                <p className="font-sans text-[10px] tracking-widest uppercase text-velvet mb-3">
                  Finish: <span className="text-stone">{selectedVariant}</span>
                </p>
                <div className="flex gap-2">
                  {product.variants.map(v => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`font-sans text-xs tracking-wider px-4 py-2 border transition-all duration-200 ${
                        selectedVariant === v
                          ? 'border-champagne bg-champagne text-velvet'
                          : 'border-blush text-stone hover:border-mink'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <p className="font-sans text-[10px] tracking-widest uppercase text-velvet mb-3">Quantity</p>
              <div className="flex items-center border border-blush w-fit">
                <button
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-velvet transition-colors"
                >
                  −
                </button>
                <span className="w-10 text-center font-sans text-sm text-velvet">{qty}</span>
                <button
                  onClick={() => setQty(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-velvet transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 font-sans text-xs tracking-widest uppercase font-semibold transition-all duration-300 ${
                added
                  ? 'bg-velvet text-cream'
                  : 'bg-champagne text-velvet hover:bg-gold'
              }`}
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 mt-5 pt-5 border-t border-blush">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-sans text-[10px] tracking-wider text-stone uppercase">
                  ✓ {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
                <p><strong>Care:</strong> {product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">Free worldwide shipping on all orders. Delivered in 3–7 business days.</p>
                <p>Not in love? Return within 30 days for a full refund. Items must be unworn and in original packaging.</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-28">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-light text-velvet">
              You May Also Like
            </h2>
            <div className="w-10 h-px bg-champagne mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {related.map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="group flex flex-col">
                <div className="relative aspect-[3/4] bg-parchment overflow-hidden mb-3">
                  <img
                    data-strk-img-id={`related-${p.id}-img`}
                    data-strk-img={`[related-${p.id}-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                  />
                </div>
                <p id={`related-${p.id}-title`} className="font-serif text-sm tracking-widest uppercase text-velvet">
                  {p.name}
                </p>
                <p className="font-sans text-sm text-stone mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
