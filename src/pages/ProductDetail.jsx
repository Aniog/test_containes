import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ShoppingBag, ChevronDown, ChevronUp, Star } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { getProductBySlug, getRelatedProducts } from '../data/products'
import { useCart } from '../context/CartContext'

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-t border-divider">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-manrope text-xs tracking-widest text-obsidian">{title}</span>
        {open
          ? <ChevronUp className="w-4 h-4 text-muted flex-shrink-0" strokeWidth={1.5} />
          : <ChevronDown className="w-4 h-4 text-muted flex-shrink-0" strokeWidth={1.5} />
        }
      </button>
      {open && (
        <div className="pb-5">
          <p className="font-manrope text-sm text-muted leading-relaxed">{children}</p>
        </div>
      )}
    </div>
  )
}

function RelatedCard({ product }) {
  return (
    <Link to={`/product/${product.slug}`} className="group block">
      <div className="relative overflow-hidden bg-linen aspect-[3/4]">
        <img
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt={product.name}
          data-strk-img-id={`related-${product.imgId}`}
          data-strk-img={`[related-${product.id}-desc] [related-${product.id}-title]`}
          data-strk-img-ratio="3x4"
          data-strk-img-width="400"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="pt-3">
        <p id={`related-${product.id}-title`} className="font-manrope text-[11px] tracking-widest text-obsidian font-medium">{product.name}</p>
        <p id={`related-${product.id}-desc`} className="font-manrope text-xs text-muted mt-1">{product.shortDesc}</p>
        <p className="font-serif text-base text-obsidian mt-1"><span className="text-sm">$</span>{product.price}</p>
      </div>
    </Link>
  )
}

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const related = getRelatedProducts(slug, 4)
  const { addItem } = useCart()
  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [qty, setQty] = useState(1)
  const [activeImg, setActiveImg] = useState(0)
  const [added, setAdded] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    setActiveImg(0)
    setSelectedVariant('Gold')
    setQty(1)
    setAdded(false)
  }, [slug])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [slug])

  const handleAddToCart = () => {
    addItem(product, selectedVariant, qty)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-parchment pt-32 flex flex-col items-center justify-center gap-4">
        <p className="font-serif text-2xl text-obsidian">Product not found</p>
        <Link to="/shop" className="font-manrope text-xs tracking-widest border border-obsidian text-obsidian px-6 py-3 hover:bg-obsidian hover:text-ivory transition-colors duration-300">
          BACK TO SHOP
        </Link>
      </div>
    )
  }

  const images = [
    { id: product.imgId, id2: `pdp-main-${product.id}` },
    { id: product.imgId2, id2: `pdp-alt-${product.id}` },
  ]

  return (
    <div ref={containerRef} className="min-h-screen bg-parchment pt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8">
          <Link to="/" className="font-manrope text-[10px] tracking-widest text-muted hover:text-gold transition-colors duration-200">HOME</Link>
          <span className="text-divider text-xs">/</span>
          <Link to="/shop" className="font-manrope text-[10px] tracking-widest text-muted hover:text-gold transition-colors duration-200">SHOP</Link>
          <span className="text-divider text-xs">/</span>
          <span className="font-manrope text-[10px] tracking-widest text-obsidian">{product.name.toUpperCase()}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden border-2 transition-colors duration-200 ${activeImg === i ? 'border-gold' : 'border-transparent'}`}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    data-strk-img-id={`thumb-${img.id2}`}
                    data-strk-img={`[pdp-title-${product.id}] gold jewelry`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[3/4] overflow-hidden bg-linen relative">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                data-strk-img-id={`main-${images[activeImg].id2}`}
                data-strk-img={`[pdp-desc-${product.id}] [pdp-title-${product.id}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-obsidian text-ivory font-manrope text-[9px] tracking-widest px-2 py-0.5">{product.badge}</span>
              )}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            <p className="font-manrope text-[10px] tracking-widest3 text-gold mb-3">{product.category.toUpperCase()}</p>
            <h1 id={`pdp-title-${product.id}`} className="font-serif text-3xl md:text-4xl font-light text-obsidian tracking-widest uppercase leading-tight mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-3.5 h-3.5" viewBox="0 0 12 12">
                    <path
                      d="M6 1l1.236 2.506L10 3.927l-2 1.95.472 2.75L6 7.25l-2.472 1.377L4 5.877l-2-1.95 2.764-.421L6 1z"
                      fill={i <= Math.round(product.rating) ? '#C9A96E' : 'none'}
                      stroke="#C9A96E"
                      strokeWidth="0.8"
                    />
                  </svg>
                ))}
              </div>
              <span className="font-manrope text-xs text-muted">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            <p className="font-serif text-3xl text-obsidian mb-5">
              <span className="text-xl">$</span>{product.price}
            </p>

            <div className="w-full h-px bg-divider mb-6" />

            <p id={`pdp-desc-${product.id}`} className="font-manrope text-sm text-muted leading-relaxed mb-8">
              {product.longDesc}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="font-manrope text-[10px] tracking-widest text-obsidian mb-3">
                TONE: <span className="text-gold">{selectedVariant.toUpperCase()}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-manrope text-xs tracking-widest px-5 py-2.5 border transition-colors duration-200 ${
                      selectedVariant === v
                        ? 'bg-obsidian text-ivory border-obsidian'
                        : 'bg-transparent text-obsidian border-divider hover:border-obsidian'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="font-manrope text-[10px] tracking-widest text-obsidian mb-3">QUANTITY</p>
              <div className="flex items-center border border-divider w-fit">
                <button
                  onClick={() => setQty(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-obsidian transition-colors duration-200"
                  aria-label="Decrease"
                >
                  −
                </button>
                <span className="w-10 text-center font-manrope text-sm text-obsidian">{qty}</span>
                <button
                  onClick={() => setQty(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-muted hover:text-obsidian transition-colors duration-200"
                  aria-label="Increase"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full flex items-center justify-center gap-3 py-4 font-manrope text-xs tracking-widest transition-colors duration-300 ${
                added
                  ? 'bg-gold text-obsidian'
                  : 'bg-obsidian text-ivory hover:bg-gold hover:text-obsidian'
              }`}
            >
              <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
              {added ? 'ADDED TO CART ✓' : 'ADD TO CART'}
            </button>

            {/* Trust signals */}
            <div className="flex items-center justify-center gap-6 mt-5">
              {['Free Shipping', '30-Day Returns', 'Secure Checkout'].map(t => (
                <span key={t} className="font-manrope text-[10px] text-muted">{t}</span>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="DESCRIPTION">{product.longDesc}</Accordion>
              <Accordion title="MATERIALS & CARE">{product.materials}</Accordion>
              <Accordion title="SHIPPING & RETURNS">{product.shipping}</Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-20 md:mt-28">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="font-manrope text-[10px] tracking-widest3 text-gold mb-3">DISCOVER MORE</p>
                <h2 className="font-serif text-3xl md:text-4xl font-light text-obsidian">You May Also Like</h2>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map(p => (
                <RelatedCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
