import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ShoppingBag, ChevronDown, ArrowLeft } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

const variants = ['gold', 'silver']

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find(p => p.slug === slug) || products[0]
  const related = products.filter(p => p.id !== product.id).slice(0, 4)

  const containerRef = useRef(null)
  const [selectedVariant, setSelectedVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState(null)
  const { addItem } = useCart()

  useEffect(() => {
    window.scrollTo(0, 0)
    setSelectedVariant('gold')
    setQuantity(1)
    setActiveImage(0)
  }, [slug])

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frame)
  }, [slug])

  const images = [
    { id: product.imgId, titleId: product.titleId, descId: product.descId },
    { id: product.imgId2, titleId: product.titleId, descId: product.descId },
  ]

  const accordions = [
    {
      id: 'description',
      label: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      label: 'Materials & Care',
      content: (
        <div>
          <ul className="list-none space-y-1.5 mb-4">
            {product.details.map((d, i) => (
              <li key={i} className="flex items-start gap-2 font-inter text-xs text-stone">
                <span className="text-gold mt-0.5">—</span>
                {d}
              </li>
            ))}
          </ul>
          <p className="font-inter text-xs text-stone leading-relaxed">{product.care}</p>
        </div>
      ),
    },
    {
      id: 'shipping',
      label: 'Shipping & Returns',
      content: product.shipping,
    },
  ]

  return (
    <div ref={containerRef} className="min-h-screen bg-parchment pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
        <Link to="/shop" className="flex items-center gap-2 font-inter text-xs text-mist hover:text-gold transition-colors">
          <ArrowLeft size={12} strokeWidth={1.5} />
          Back to Shop
        </Link>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left: Image gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-3">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible scrollbar-hide">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border transition-colors ${
                    activeImage === i ? 'border-gold' : 'border-stone/20 hover:border-stone/40'
                  }`}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    data-strk-img-id={`${img.id}-thumb`}
                    data-strk-img={`[${img.descId}] [${img.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="120"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] overflow-hidden bg-linen relative">
              {images.map((img, i) => (
                <img
                  key={i}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={product.name}
                  data-strk-img-id={img.id}
                  data-strk-img={`[${img.descId}] [${img.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="700"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-400 ${
                    activeImage === i ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {/* Category */}
            <p className="font-inter text-[10px] uppercase tracking-widest text-gold mb-3 capitalize">
              {product.category}
            </p>

            {/* Name */}
            <h1 id={product.titleId} className="font-cormorant text-3xl md:text-4xl uppercase tracking-widest text-ink font-medium mb-3 leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={11}
                    className={i < Math.floor(product.rating) ? 'fill-gold text-gold' : 'text-stone/30'}
                    strokeWidth={0}
                  />
                ))}
              </div>
              <span className="font-inter text-xs text-mist">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <p className="font-inter text-2xl text-ink font-medium mb-5">${product.price}</p>

            {/* Short description */}
            <p id={product.descId} className="font-inter text-sm text-stone leading-relaxed mb-8">
              {product.shortDescription}
            </p>

            <div className="h-px bg-stone/15 mb-8" />

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-inter text-[10px] uppercase tracking-widest text-stone mb-3">
                Tone: <span className="text-ink capitalize">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-inter text-xs uppercase tracking-widest px-5 py-2.5 border transition-colors capitalize ${
                      selectedVariant === v
                        ? 'border-gold bg-gold text-obsidian'
                        : 'border-stone/30 text-stone hover:border-gold hover:text-gold'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-inter text-[10px] uppercase tracking-widest text-stone mb-3">Quantity</p>
              <div className="flex items-center border border-stone/30 w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-ink transition-colors"
                >
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <span className="w-12 text-center font-inter text-sm text-ink">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-ink transition-colors"
                >
                  <Plus size={14} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, quantity, selectedVariant)}
              className="w-full bg-obsidian text-ivory font-inter text-xs uppercase tracking-widest py-4 flex items-center justify-center gap-3 hover:bg-charcoal transition-colors mb-3"
            >
              <ShoppingBag size={14} strokeWidth={1.5} />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            <button className="w-full border border-stone/30 text-stone font-inter text-xs uppercase tracking-widest py-4 hover:border-gold hover:text-gold transition-colors">
              Add to Wishlist
            </button>

            {/* Trust signals */}
            <div className="mt-8 flex flex-wrap gap-4">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-inter text-[10px] uppercase tracking-widest text-mist flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-gold inline-block" />
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-10 border-t border-stone/15">
              {accordions.map(acc => (
                <div key={acc.id} className="border-b border-stone/15">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="font-inter text-xs uppercase tracking-widest text-ink">{acc.label}</span>
                    <ChevronDown
                      size={14}
                      strokeWidth={1.5}
                      className={`text-stone transition-transform duration-300 ${openAccordion === acc.id ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openAccordion === acc.id && (
                    <div className="pb-5 font-inter text-xs text-stone leading-relaxed">
                      {typeof acc.content === 'string' ? <p>{acc.content}</p> : acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* You may also like */}
      <RelatedProducts products={related} />
    </div>
  )
}

function RelatedProducts({ products: related }) {
  const containerRef = useRef(null)
  const { addItem } = useCart()

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frame)
  }, [related])

  return (
    <section className="bg-linen py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-cormorant text-3xl md:text-4xl text-ink font-light">You May Also Like</h2>
          <div className="w-10 h-px bg-gold/50 mx-auto mt-4" />
        </div>
        <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map(product => (
            <div key={product.id} className="group">
              <Link to={`/product/${product.slug}`}>
                <div className="relative overflow-hidden bg-cream aspect-[3/4] mb-4">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={product.name}
                    data-strk-img-id={`related-${product.imgId}`}
                    data-strk-img={`[related-${product.descId}] [related-${product.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="350"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <button
                      onClick={(e) => { e.preventDefault(); addItem(product) }}
                      className="w-full bg-obsidian/90 text-ivory font-inter text-[10px] uppercase tracking-widest py-3 hover:bg-obsidian transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Link>
              <span id={`related-${product.descId}`} className="sr-only">{product.shortDescription}</span>
              <Link to={`/product/${product.slug}`}>
                <h3 id={`related-${product.titleId}`} className="font-cormorant text-sm uppercase tracking-widest text-ink hover:text-gold transition-colors mb-1">
                  {product.name}
                </h3>
              </Link>
              <p className="font-inter text-sm text-ink">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
