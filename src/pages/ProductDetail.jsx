import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { Minus, Plus, ChevronRight, Truck, RotateCcw, Award, ShieldCheck, Check } from 'lucide-react'
import { getProductById, getRelatedProducts, VARIANTS, CATEGORIES } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'
import RatingStars from '@/components/ui/RatingStars'
import Accordion from '@/components/ui/Accordion'
import VariantPill from '@/components/ui/VariantPill'
import ProductCard from '@/components/ui/ProductCard'
import strkImgConfig from '@/strk-img-config.json'

const TRUST_ITEMS = [
  { icon: Truck, label: 'Free shipping over $75' },
  { icon: RotateCcw, label: '30-day returns' },
  { icon: Award, label: '18K gold plated' },
  { icon: ShieldCheck, label: 'Hypoallergenic' },
]

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const containerRef = useRef(null)
  const relatedRef = useRef(null)
  const { addItem, openCart } = useCart()
  const [activeImg, setActiveImg] = useState(0)
  const [variant, setVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    if (!product) return
    setActiveImg(0)
    setVariant('gold')
    setQuantity(1)
    setAdded(false)
  }, [product?.id])

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [product?.id])

  useEffect(() => {
    if (!relatedRef.current) return
    return ImageHelper.loadImages(strkImgConfig, relatedRef.current)
  }, [product?.id])

  const related = useMemo(
    () => (product ? getRelatedProducts(product.id, 4) : []),
    [product?.id]
  )

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 pt-32">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-serif text-4xl text-espresso font-light">
          We couldn't find that piece.
        </h1>
        <Link to="/shop" className="mt-8 btn-primary">
          Back to Shop
        </Link>
      </div>
    )
  }

  const categoryLabel = CATEGORIES.find((c) => c.id === product.category)?.label || product.category
  const variantData = VARIANTS.find((v) => v.id === variant) || VARIANTS[0]

  const onAdd = () => {
    addItem(product.id, variant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
    openCart()
  }

  return (
    <div ref={containerRef} className="pt-24 md:pt-28">
      {/* Breadcrumbs */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pt-6 md:pt-10">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-[10px] tracking-widest2 uppercase text-espresso/55 font-light"
        >
          <Link to="/" className="hover:text-espresso transition-colors">Home</Link>
          <ChevronRight size={11} strokeWidth={1.5} />
          <Link to="/shop" className="hover:text-espresso transition-colors">Shop</Link>
          <ChevronRight size={11} strokeWidth={1.5} />
          <Link
            to={`/shop?category=${product.category}`}
            className="hover:text-espresso transition-colors"
          >
            {categoryLabel}
          </Link>
          <ChevronRight size={11} strokeWidth={1.5} />
          <span className="text-espresso truncate max-w-[200px]">{product.name}</span>
        </nav>
      </div>

      {/* Main product area */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pt-8 md:pt-12 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 lg:gap-20">
          {/* Gallery */}
          <div className="md:col-span-7 lg:col-span-7">
            <div className="grid grid-cols-12 gap-3 md:gap-4">
              {/* Thumbnails (desktop only) */}
              <ul className="hidden md:flex md:col-span-1 flex-col gap-3">
                {product.images.map((img, idx) => (
                  <li key={idx}>
                    <button
                      type="button"
                      onClick={() => setActiveImg(idx)}
                      className={cn(
                        'block w-full aspect-square overflow-hidden bg-beige border transition-colors',
                        activeImg === idx
                          ? 'border-espresso'
                          : 'border-transparent hover:border-taupe'
                      )}
                      aria-label={`View image ${idx + 1}`}
                    >
                      <img
                        alt=""
                        aria-hidden="true"
                        data-strk-img-id={`product-${product.id}-thumb-${idx}`}
                        data-strk-img={`${img} [${product.name.toLowerCase().replace(/\s+/g, '-')}-desc]`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="160"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  </li>
                ))}
              </ul>

              {/* Main image */}
              <div className="col-span-12 md:col-span-11">
                <div className="relative aspect-[4/5] overflow-hidden bg-beige">
                  <img
                    key={activeImg}
                    alt={product.name}
                    data-strk-img-id={`product-${product.id}-main-${activeImg}`}
                    data-strk-img={`${product.images[activeImg]} [${product.name.toLowerCase().replace(/\s+/g, '-')}-desc]`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="1200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover animate-fade-in"
                  />
                  {product.badge && (
                    <span className="absolute top-4 left-4 bg-creamLight/95 backdrop-blur-sm text-espresso text-[9px] tracking-widest3 uppercase font-medium px-3 py-2">
                      {product.badge}
                    </span>
                  )}
                </div>
                {/* Mobile thumbnail strip */}
                <ul className="md:hidden flex gap-2 mt-3 overflow-x-auto no-scrollbar">
                  {product.images.map((img, idx) => (
                    <li key={idx} className="shrink-0">
                      <button
                        type="button"
                        onClick={() => setActiveImg(idx)}
                        className={cn(
                          'block w-16 h-20 overflow-hidden bg-beige border transition-colors',
                          activeImg === idx ? 'border-espresso' : 'border-transparent'
                        )}
                        aria-label={`View image ${idx + 1}`}
                      >
                        <img
                          alt=""
                          aria-hidden="true"
                          data-strk-img-id={`product-${product.id}-m-thumb-${idx}`}
                          data-strk-img={`${img} [${product.name.toLowerCase().replace(/\s+/g, '-')}-desc]`}
                          data-strk-img-ratio="4x5"
                          data-strk-img-width="160"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          className="w-full h-full object-cover"
                        />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right column — info */}
          <div className="md:col-span-5 lg:col-span-5">
            <div className="md:sticky md:top-28">
              <p
                id={`${product.name.toLowerCase().replace(/\s+/g, '-')}-eyebrow`}
                className="eyebrow"
              >
                {product.eyebrow}
              </p>
              <h1
                id={`${product.name.toLowerCase().replace(/\s+/g, '-')}-title`}
                className="mt-4 font-serif text-3xl md:text-4xl text-espresso font-light leading-tight tracking-wide uppercase"
              >
                {product.name}
              </h1>
              <p
                id={`${product.name.toLowerCase().replace(/\s+/g, '-')}-desc`}
                className="sr-only"
              >
                {product.description}
              </p>

              <div className="mt-5 flex items-center gap-4">
                <span className="font-serif text-3xl text-espresso font-light">
                  {formatPrice(product.price)}
                </span>
                <span className="text-[10px] tracking-widest2 uppercase text-espresso/55 font-light">
                  or 4 payments of {formatPrice(product.price / 4)}
                </span>
              </div>

              <div className="mt-4">
                <RatingStars
                  value={product.rating}
                  count={product.reviews}
                  size={14}
                />
              </div>

              <p className="mt-7 text-[15px] text-espresso/80 font-light leading-relaxed">
                {product.description}
              </p>

              {/* Variants */}
              <div className="mt-9">
                <p className="text-[10px] tracking-widest3 uppercase text-espresso/65 font-medium mb-3">
                  Tone · <span className="text-gold-dark">{variantData.label}</span>
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {VARIANTS.map((v) => (
                    <VariantPill
                      key={v.id}
                      variant={v}
                      selected={variant === v.id}
                      onSelect={() => setVariant(v.id)}
                    />
                  ))}
                </div>
              </div>

              {/* Quantity + Add to cart */}
              <div className="mt-9 flex items-stretch gap-3">
                <div className="flex items-center border border-taupe">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-11 h-12 flex items-center justify-center text-espresso hover:bg-beige transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={14} strokeWidth={1.5} />
                  </button>
                  <span className="w-10 text-center text-sm font-medium text-espresso tabular-nums">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-11 h-12 flex items-center justify-center text-espresso hover:bg-beige transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus size={14} strokeWidth={1.5} />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={onAdd}
                  className={cn(
                    'flex-1 btn-primary transition-all',
                    added && 'bg-gold border-gold text-creamLight'
                  )}
                >
                  {added ? (
                    <span className="inline-flex items-center gap-2">
                      <Check size={14} strokeWidth={2} /> Added
                    </span>
                  ) : (
                    <>Add to Bag · {formatPrice(product.price * quantity)}</>
                  )}
                </button>
              </div>

              {/* Trust strip */}
              <ul className="mt-8 grid grid-cols-2 gap-y-3 gap-x-4">
                {TRUST_ITEMS.map((item) => {
                  const Icon = item.icon
                  return (
                    <li
                      key={item.label}
                      className="flex items-center gap-2 text-[10px] tracking-widest2 uppercase text-espresso/65 font-light"
                    >
                      <Icon size={13} strokeWidth={1.4} className="text-gold-dark" />
                      {item.label}
                    </li>
                  )
                })}
              </ul>

              {/* Accordions */}
              <div className="mt-10">
                <Accordion
                  items={[
                    {
                      title: 'Description',
                      content: (
                        <p>
                          {product.description} Every Velmora piece is cast in
                          small batches, hand-finished, and quality-checked in
                          our atelier before it reaches you.
                        </p>
                      ),
                    },
                    {
                      title: 'Materials & Care',
                      content: (
                        <div className="space-y-4">
                          <div>
                            <p className="text-[10px] tracking-widest3 uppercase text-espresso/60 font-medium mb-2">
                              Materials
                            </p>
                            <ul className="space-y-1.5">
                              {product.details.map((d) => (
                                <li
                                  key={d}
                                  className="flex gap-2.5 text-[14px] text-espresso/80 font-light"
                                >
                                  <span className="text-gold-dark mt-1.5 block w-1 h-1 rounded-full bg-gold-dark shrink-0" />
                                  {d}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="text-[10px] tracking-widest3 uppercase text-espresso/60 font-medium mb-2">
                              Care
                            </p>
                            <ul className="space-y-1.5">
                              {product.care.map((c) => (
                                <li
                                  key={c}
                                  className="flex gap-2.5 text-[14px] text-espresso/80 font-light"
                                >
                                  <span className="text-gold-dark mt-1.5 block w-1 h-1 rounded-full bg-gold-dark shrink-0" />
                                  {c}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ),
                    },
                    {
                      title: 'Shipping & Returns',
                      content: (
                        <div className="space-y-3 text-[14px] text-espresso/80 font-light">
                          <p>
                            Free worldwide shipping on orders over $75. Standard
                            delivery in 3–7 business days; express options
                            available at checkout.
                          </p>
                          <p>
                            30-day returns, no questions asked. Each piece
                            arrives in a Velmora keepsake box with a polishing
                            cloth and care card.
                          </p>
                        </div>
                      ),
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      <section
        ref={relatedRef}
        className="py-20 md:py-24 bg-beige/40 border-t border-taupeLight/60"
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="text-center mb-12">
            <p className="eyebrow">More to treasure</p>
            <h2 className="mt-4 font-serif text-3xl md:text-4xl text-espresso font-light tracking-tight">
              You may also <em className="italic">like</em>
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-12">
            {related.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onAddToCart={(prod) => {
                  addItem(prod.id, 'gold', 1)
                  openCart()
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
