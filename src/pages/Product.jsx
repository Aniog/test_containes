import { useEffect, useRef, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Minus, Plus, ChevronDown, Star, Check, Truck, RotateCcw, ShieldCheck, Heart } from 'lucide-react'
import { getProductById, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'
import useStockImages from '@/lib/useStockImages'
import StockImage from '@/components/ui/StockImage'
import ProductCard from '@/components/product/ProductCard'

const TONES = [
  { id: 'gold', label: '18K Gold' },
  { id: 'silver', label: 'Sterling Silver' },
]

function AccordionItem({ title, open, onToggle, children, id }) {
  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={open}
        aria-controls={id}
      >
        <span className="font-serif text-lg md:text-xl text-espresso">{title}</span>
        <ChevronDown
          className={cn(
            'w-4 h-4 text-ink transition-transform duration-300',
            open ? 'rotate-180' : ''
          )}
          strokeWidth={1.4}
        />
      </button>
      <div
        id={id}
        className={cn(
          'overflow-hidden transition-all duration-500 ease-out-soft',
          open ? 'max-h-[1200px] opacity-100 pb-6' : 'max-h-0 opacity-0'
        )}
      >
        <div className="text-sm md:text-[15px] text-ink/80 leading-relaxed font-light">
          {children}
        </div>
      </div>
    </div>
  )
}

function StarRating({ value, count }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5 text-gold" aria-label={`${value} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn('w-3.5 h-3.5', i < Math.round(value) ? 'fill-current' : 'fill-none')}
            strokeWidth={1.2}
          />
        ))}
      </div>
      <span className="text-xs text-muted">
        {value} · {count} reviews
      </span>
    </div>
  )
}

export default function Product() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = getProductById(id)
  const ref = useRef(null)
  useStockImages(ref, [id])

  const [variant, setVariant] = useState('gold')
  const [qty, setQty] = useState(1)
  const [open, setOpen] = useState({ description: true, materials: false, shipping: false })
  const [activeImage, setActiveImage] = useState(0)
  const [justAdded, setJustAdded] = useState(false)

  const { addItem } = useCart()

  // Reset to first image and top scroll when product id changes
  useEffect(() => {
    setActiveImage(0)
    setQty(1)
    setVariant('gold')
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [id])

  if (!product) {
    return (
      <section className="pt-32 md:pt-40 pb-24 container-x">
        <div className="text-center">
          <p className="font-serif text-3xl text-espresso mb-3">Piece not found</p>
          <p className="text-muted mb-7">It may have moved or sold out.</p>
          <button type="button" onClick={() => navigate('/shop')} className="btn-primary">
            Back to Shop
          </button>
        </div>
      </section>
    )
  }

  const related = getRelatedProducts(product, 4)

  function handleAdd() {
    addItem(product.id, qty, variant)
    setJustAdded(true)
    window.setTimeout(() => setJustAdded(false), 1800)
  }

  return (
    <article ref={ref}>
      {/* Breadcrumb */}
      <div className="container-x pt-28 md:pt-32">
        <nav className="text-[11px] uppercase tracking-widest-2 text-muted" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-espresso transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-espresso transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <section className="container-x py-8 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="md:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
              {/* Thumbs (desktop) — vertically stacked on left */}
              <div className="hidden md:flex md:col-span-2 flex-col gap-3 order-1">
                {product.images.map((img, i) => (
                  <button
                    key={img.id}
                    type="button"
                    onClick={() => setActiveImage(i)}
                    className={cn(
                      'relative aspect-square overflow-hidden bg-cream-2 border transition-colors duration-300',
                      activeImage === i ? 'border-espresso' : 'border-line hover:border-ink/50'
                    )}
                    aria-label={`View image ${i + 1}`}
                  >
                    <StockImage
                      imgId={`${product.id}-thumb-${i}`}
                      query={img.query}
                      ratio="1x1"
                      width={200}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Main image */}
              <div className="md:col-span-10 order-1 md:order-2">
                <div className="relative aspect-[4/5] overflow-hidden bg-cream-2">
                  <StockImage
                    imgId={`${product.id}-main-${activeImage}`}
                    query={`[${product.textIds.title}] ${product.images[activeImage].query}`}
                    ratio="4x5"
                    width={1200}
                    alt={product.name}
                    eager
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {product.badge && (
                    <span className="absolute top-4 left-4 bg-bone/90 text-espresso text-[10px] uppercase tracking-widest-2 px-2.5 py-1 font-medium">
                      {product.badge}
                    </span>
                  )}
                </div>
                {/* Mobile thumbs */}
                <div className="flex md:hidden gap-2 mt-3">
                  {product.images.map((img, i) => (
                    <button
                      key={img.id}
                      type="button"
                      onClick={() => setActiveImage(i)}
                      className={cn(
                        'relative flex-1 aspect-square overflow-hidden bg-cream-2 border transition-colors',
                        activeImage === i ? 'border-espresso' : 'border-line'
                      )}
                      aria-label={`View image ${i + 1}`}
                    >
                      <StockImage
                        imgId={`${product.id}-thumb-mobile-${i}`}
                        query={img.query}
                        ratio="1x1"
                        width={200}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="md:col-span-5">
            <p className="eyebrow mb-3">
              {product.category === 'huggies'
                ? 'Huggies'
                : product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </p>
            <h1
              id={product.textIds.title}
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso leading-[1.05] uppercase tracking-wider-2"
              style={{ fontWeight: 500 }}
            >
              {product.name}
            </h1>
            <div className="mt-5 flex items-center gap-5">
              <span className="font-serif text-2xl text-espresso">
                {formatPrice(product.price)}
              </span>
              <span className="text-xs text-muted">·  or 4 payments of {formatPrice(product.price / 4)}</span>
            </div>
            <div className="mt-3">
              <StarRating value={product.rating} count={product.reviewCount} />
            </div>

            <p
              id={product.textIds.desc}
              className="mt-6 text-[15px] text-ink/80 leading-relaxed font-light"
            >
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mt-7">
              <div className="flex items-center justify-between mb-3">
                <span className="eyebrow">Finish</span>
                <span className="text-[11px] text-muted">
                  {variant === 'gold' ? '18K Gold' : 'Sterling Silver'}
                </span>
              </div>
              <div className="flex gap-2">
                {TONES.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setVariant(t.id)}
                    className={cn(
                      'px-5 py-2.5 text-xs uppercase tracking-widest-2 border transition-all duration-300 rounded-[2px]',
                      variant === t.id
                        ? 'border-espresso bg-espresso text-cream'
                        : 'border-line text-ink hover:border-ink'
                    )}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-7">
              <span className="eyebrow block mb-3">Quantity</span>
              <div className="inline-flex items-center border border-line">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-10 h-10 flex items-center justify-center text-ink hover:text-espresso"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" strokeWidth={1.4} />
                </button>
                <span className="w-10 text-center text-sm tabular-nums">{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.min(10, q + 1))}
                  className="w-10 h-10 flex items-center justify-center text-ink hover:text-espresso"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" strokeWidth={1.4} />
                </button>
              </div>
            </div>

            {/* Add to bag + wishlist */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleAdd}
                className={cn(
                  'btn-primary flex-1 transition-all duration-300',
                  justAdded ? 'bg-gold border-gold' : ''
                )}
              >
                {justAdded ? (
                  <>
                    <Check className="w-4 h-4 mr-2" strokeWidth={1.5} />
                    Added to Bag
                  </>
                ) : (
                  <>Add to Bag — {formatPrice(product.price * qty)}</>
                )}
              </button>
              <button
                type="button"
                className="btn-ghost px-4"
                aria-label="Save to wishlist"
              >
                <Heart className="w-4 h-4" strokeWidth={1.4} />
              </button>
            </div>

            {/* Tiny trust row */}
            <ul className="mt-7 grid grid-cols-3 gap-2 text-[11px] text-muted">
              <li className="flex flex-col items-center text-center gap-1.5 py-3 border border-line">
                <Truck className="w-4 h-4 text-espresso" strokeWidth={1.4} />
                <span>Free shipping<br />over $80</span>
              </li>
              <li className="flex flex-col items-center text-center gap-1.5 py-3 border border-line">
                <RotateCcw className="w-4 h-4 text-espresso" strokeWidth={1.4} />
                <span>30-day<br />returns</span>
              </li>
              <li className="flex flex-col items-center text-center gap-1.5 py-3 border border-line">
                <ShieldCheck className="w-4 h-4 text-espresso" strokeWidth={1.4} />
                <span>Hypoallergenic<br />guarantee</span>
              </li>
            </ul>

            {/* Accordions */}
            <div className="mt-10 border-t border-line">
              <AccordionItem
                title="Description"
                open={open.description}
                onToggle={() => setOpen((o) => ({ ...o, description: !o.description }))}
                id="acc-description"
              >
                {product.description}
              </AccordionItem>
              <AccordionItem
                title="Materials & Care"
                open={open.materials}
                onToggle={() => setOpen((o) => ({ ...o, materials: !o.materials }))}
                id="acc-materials"
              >
                <p>{product.materials}</p>
                <p className="mt-3">{product.care}</p>
              </AccordionItem>
              <AccordionItem
                title="Shipping & Returns"
                open={open.shipping}
                onToggle={() => setOpen((o) => ({ ...o, shipping: !o.shipping }))}
                id="acc-shipping"
              >
                <p>{product.shipping}</p>
              </AccordionItem>
            </div>
          </div>
        </div>
      </section>

      {/* You may also like */}
      <section className="border-t border-line py-20 md:py-24">
        <div className="container-x">
          <div className="mb-10 md:mb-12 text-center">
            <p className="eyebrow mb-3">You may also love</p>
            <h2
              id="related-title"
              className="font-serif text-3xl md:text-4xl text-espresso"
              style={{ fontWeight: 400 }}
            >
              <span className="italic">Pieces</span> to pair
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </article>
  )
}
