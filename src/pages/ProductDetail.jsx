import { useState, useEffect, useRef } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ArrowLeft } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { getProductBySlug, products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import ProductCard from '@/components/product/ProductCard'

export default function ProductDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const product = getProductBySlug(slug)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeThumb, setActiveThumb] = useState(0)
  const [openAccordion, setOpenAccordion] = useState(null)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    setSelectedVariant('Gold')
    setQuantity(1)
    setActiveThumb(0)
    setAdded(false)
  }, [slug])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [slug, activeThumb])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-ivory-cream">
        <div className="text-center">
          <p className="font-cormorant text-3xl text-ink mb-4">Product not found</p>
          <Link to="/shop" className="font-manrope text-xs tracking-widest uppercase text-gold-dust hover:text-gold-deep transition-colors duration-300">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const thumbImages = [
    { imgId: product.imgIds.main, label: 'Main view' },
    { imgId: product.imgIds.hover, label: 'Detail view' },
    { imgId: product.imgIds.thumb1, label: 'Side view' },
    { imgId: product.imgIds.thumb2, label: 'Worn view' },
  ]

  const related = products.filter(p => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const accordions = [
    {
      id: 'description',
      label: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      label: 'Materials & Care',
      content: `Materials: ${product.materials}\n\nCare: ${product.care}`,
    },
    {
      id: 'shipping',
      label: 'Shipping & Returns',
      content: product.shipping,
    },
  ]

  return (
    <div ref={containerRef} className="bg-ivory-cream min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-28 pb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 font-manrope text-xs text-muted hover:text-gold-dust transition-colors duration-300 group"
        >
          <ArrowLeft size={14} strokeWidth={1.5} className="group-hover:-translate-x-1 transition-transform duration-300" />
          Back
        </button>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Left: Image Gallery */}
          <div className="flex flex-col-reverse sm:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex sm:flex-col gap-2 overflow-x-auto sm:overflow-visible">
              {thumbImages.map((thumb, i) => (
                <button
                  key={i}
                  onClick={() => setActiveThumb(i)}
                  className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 overflow-hidden border-2 transition-colors duration-300 ${
                    activeThumb === i ? 'border-gold-dust' : 'border-transparent'
                  }`}
                  aria-label={thumb.label}
                >
                  <img
                    data-strk-img-id={`${thumb.imgId}-thumb-${i}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={thumb.label}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] overflow-hidden bg-surface relative">
              <img
                data-strk-img-id={`${thumbImages[activeThumb].imgId}-main`}
                data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry editorial`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.tags.includes('bestseller') && (
                <div className="absolute top-4 left-4">
                  <span className="bg-gold-dust text-obsidian font-manrope text-[9px] tracking-widest uppercase px-2.5 py-1.5">
                    Bestseller
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="font-manrope text-xs tracking-widest uppercase text-gold-dust mb-3">
              {product.category}
            </p>

            {/* Name */}
            <h1
              id={product.titleId}
              className="font-cormorant text-3xl lg:text-4xl uppercase tracking-widest text-ink font-medium leading-tight mb-3"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={13}
                    style={i < Math.floor(product.rating) ? { color: '#C9A96E', fill: '#C9A96E' } : { color: '#E8E2D9', fill: '#E8E2D9' }}
                  />
                ))}
              </div>
              <span className="font-manrope text-xs text-muted">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-cormorant text-4xl text-ink font-medium mb-5">
              ${product.price}
            </p>

            {/* Short description */}
            <p
              id={product.descId}
              className="font-manrope text-sm text-muted leading-relaxed mb-8"
            >
              {product.shortDescription}
            </p>

            <div className="w-full h-px bg-divider mb-8" />

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mb-6">
                <p className="font-manrope text-xs tracking-widest uppercase text-ink mb-3">
                  Tone: <span className="text-muted">{selectedVariant}</span>
                </p>
                <div className="flex gap-2">
                  {product.variants.map(v => (
                    <button
                      key={v}
                      onClick={() => setSelectedVariant(v)}
                      className={`font-manrope text-xs tracking-widest uppercase px-5 py-2.5 border transition-all duration-300 ${
                        selectedVariant === v
                          ? 'border-gold-dust bg-gold-dust text-obsidian'
                          : 'border-divider text-muted hover:border-gold-dust hover:text-ink'
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
              <p className="font-manrope text-xs tracking-widest uppercase text-ink mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-divider w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="w-11 h-11 flex items-center justify-center text-muted hover:text-ink transition-colors duration-300"
                >
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <span className="w-12 text-center font-manrope text-sm text-ink">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  aria-label="Increase quantity"
                  className="w-11 h-11 flex items-center justify-center text-muted hover:text-ink transition-colors duration-300"
                >
                  <Plus size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full font-manrope text-xs tracking-widest uppercase py-5 transition-all duration-300 font-semibold ${
                added
                  ? 'bg-ink text-on-dark'
                  : 'bg-gold-dust text-obsidian hover:bg-gold-deep'
              }`}
            >
              {added ? '✓ Added to Cart' : 'Add to Cart'}
            </button>

            {/* Trust signals */}
            <div className="flex items-center justify-center gap-6 mt-5">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-manrope text-[10px] text-whisper tracking-wide">
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-10 border-t border-divider">
              {accordions.map(acc => (
                <div key={acc.id} className="border-b border-divider">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                    className="w-full flex items-center justify-between py-5 text-left"
                  >
                    <span className="font-manrope text-xs tracking-widest uppercase text-ink">
                      {acc.label}
                    </span>
                    <ChevronDown
                      size={16}
                      strokeWidth={1.5}
                      className={`text-muted transition-transform duration-300 ${
                        openAccordion === acc.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openAccordion === acc.id && (
                    <div className="pb-5 animate-fade-in">
                      <p className="font-manrope text-sm text-muted leading-relaxed whitespace-pre-line">
                        {acc.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* You may also like */}
      <div className="border-t border-divider bg-surface py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-cormorant text-3xl lg:text-4xl font-light text-ink mb-10 text-center">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
            {related.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
