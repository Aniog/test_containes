import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import StarRating from '@/components/ui/StarRating'

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-champagne/20">
      <button
        onClick={() => setOpen(v => !v)}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <span className="font-sans text-xs uppercase tracking-widest text-obsidian group-hover:text-champagne-dark transition-colors">
          {title}
        </span>
        {open
          ? <ChevronUp className="w-4 h-4 text-stone" />
          : <ChevronDown className="w-4 h-4 text-stone" />
        }
      </button>
      {open && (
        <div className="pb-5 animate-fadeIn">
          {children}
        </div>
      )}
    </div>
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

  const related = products.filter(p => p.id !== product.id).slice(0, 4)

  useEffect(() => {
    window.scrollTo(0, 0)
    setActiveImg(0)
    setSelectedVariant(product.variants[0])
    setQuantity(1)
  }, [slug, product])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [slug])

  const images = [
    { id: product.imgId, id2: `${product.imgId}-pdp-1` },
    { id: product.imgId2, id2: `${product.imgId2}-pdp-2` },
  ]

  return (
    <div ref={containerRef} className="min-h-screen bg-parchment pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-5">
        <div className="flex items-center gap-2 font-sans text-xs text-stone">
          <Link to="/" className="hover:text-champagne transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-champagne transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-obsidian">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Image gallery */}
          <div className="space-y-3">
            {/* Main image */}
            <div className="aspect-square bg-blush overflow-hidden">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                data-strk-img-id={`pdp-main-${product.id}-0`}
                data-strk-img={`[pdp-desc-${product.id}] [pdp-title-${product.id}]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="800"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {[0, 1, 2, 3].map(i => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`aspect-square bg-blush overflow-hidden border-2 transition-colors ${
                    activeImg === i ? 'border-champagne' : 'border-transparent hover:border-champagne/40'
                  }`}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                    data-strk-img={`[pdp-title-${product.id}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="space-y-6">
            {product.badge && (
              <span className="inline-block bg-obsidian text-champagne font-sans text-[10px] uppercase tracking-wider px-3 py-1">
                {product.badge}
              </span>
            )}

            <div>
              <h1
                id={`pdp-title-${product.id}`}
                className="font-serif text-3xl md:text-4xl uppercase tracking-widest text-obsidian font-light leading-tight"
              >
                {product.name}
              </h1>
              <p id={`pdp-desc-${product.id}`} className="hidden">{product.description}</p>
            </div>

            <StarRating rating={product.rating} count={product.reviewCount} />

            <p className="font-serif text-3xl text-obsidian">${product.price}</p>

            <p className="font-sans text-sm text-stone leading-relaxed">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="space-y-3">
              <p className="font-sans text-xs uppercase tracking-widest text-obsidian/60">
                Tone: <span className="text-obsidian capitalize">{selectedVariant}</span>
              </p>
              <div className="flex gap-2">
                {product.variants.map(v => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`font-sans text-xs uppercase tracking-wider px-5 py-2.5 border transition-all duration-200 ${
                      selectedVariant === v
                        ? 'bg-obsidian text-champagne border-obsidian'
                        : 'bg-transparent text-stone border-champagne/30 hover:border-champagne hover:text-obsidian'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="space-y-3">
              <p className="font-sans text-xs uppercase tracking-widest text-obsidian/60">Quantity</p>
              <div className="flex items-center border border-champagne/30 w-fit">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-obsidian hover:bg-blush transition-colors"
                >
                  −
                </button>
                <span className="w-12 text-center font-sans text-sm text-obsidian">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-10 flex items-center justify-center text-stone hover:text-obsidian hover:bg-blush transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="w-full bg-champagne text-obsidian font-sans text-xs uppercase tracking-widest py-4 hover:bg-champagne-dark transition-colors duration-200 flex items-center justify-center gap-3"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-4 pt-2">
              {['Free Shipping', '30-Day Returns', 'Hypoallergenic'].map(t => (
                <span key={t} className="font-sans text-[11px] text-stone flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-champagne inline-block" />
                  {t}
                </span>
              ))}
            </div>

            {/* Accordions */}
            <div className="pt-4 border-t border-champagne/20 space-y-0">
              <Accordion title="Description">
                <p className="font-sans text-sm text-stone leading-relaxed">{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="space-y-2 mb-4">
                  {product.details.map(d => (
                    <li key={d} className="font-sans text-sm text-stone flex items-start gap-2">
                      <span className="text-champagne mt-1.5">·</span>
                      {d}
                    </li>
                  ))}
                </ul>
                <p className="font-sans text-sm text-stone">{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="font-sans text-sm text-stone leading-relaxed">{product.shipping}</p>
                <p className="font-sans text-sm text-stone mt-2">
                  We offer hassle-free 30-day returns on all unworn items in original packaging.
                </p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <p className="font-sans text-xs uppercase tracking-widest text-champagne mb-3">Complete the look</p>
            <h2 className="font-serif text-3xl md:text-4xl text-obsidian font-light">You May Also Like</h2>
            <div className="w-10 h-px bg-champagne mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
            {related.map(p => (
              <Link key={p.id} to={`/product/${p.slug}`} className="group">
                <div className="aspect-square bg-blush overflow-hidden mb-3">
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    data-strk-img-id={`related-${p.id}-${product.id}`}
                    data-strk-img={`[related-desc-${p.id}-${product.id}] [related-title-${p.id}-${product.id}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="400"
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h4
                  id={`related-title-${p.id}-${product.id}`}
                  className="font-serif text-sm uppercase tracking-wider text-obsidian group-hover:text-champagne-dark transition-colors"
                >
                  {p.name}
                </h4>
                <p id={`related-desc-${p.id}-${product.id}`} className="hidden">{p.shortDescription}</p>
                <p className="font-sans text-sm text-stone mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
