import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Plus, Minus, ChevronDown, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { getProductById, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'
import Stars from '@/components/ui/Stars'
import ProductCard from '@/components/product/ProductCard'

const ACCORDIONS = [
  { id: 'description', label: 'Description', field: 'description' },
  { id: 'materials', label: 'Materials & Care', field: 'materials' },
  { id: 'shipping', label: 'Shipping & Returns', field: 'shipping' },
]

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()

  const containerRef = useRef(null)
  const [activeImg, setActiveImg] = useState(0)
  const [tone, setTone] = useState(product?.tones[0] || 'Gold')
  const [qty, setQty] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('description')

  useEffect(() => {
    setActiveImg(0)
    setTone(product?.tones[0] || 'Gold')
    setQty(1)
    setOpenAccordion('description')
  }, [id, product])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [id, activeImg])

  if (!product) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h1 className="font-serif text-4xl text-ink">Piece not found</h1>
        <Link
          to="/shop"
          className="mt-6 inline-block text-[11px] uppercase tracking-[0.2em] text-gold hover:text-gold-deep"
        >
          Back to Shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 4)
  const galleryIds = [product.imgId, ...product.gallery]

  const handleAdd = () => {
    addItem(product, { tone, qty })
  }

  return (
    <div ref={containerRef} className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-6">
        <nav className="text-[11px] uppercase tracking-[0.18em] text-stone">
          <Link to="/" className="hover:text-ink transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-ink transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <Link
            to={`/shop?category=${product.category}`}
            className="hover:text-ink transition-colors capitalize"
          >
            {product.category}
          </Link>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 md:w-20 shrink-0">
              {galleryIds.map((gid, i) => (
                <button
                  key={gid}
                  type="button"
                  onClick={() => setActiveImg(i)}
                  className={cn(
                    'relative w-16 md:w-20 aspect-[3/4] overflow-hidden bg-cream transition-all',
                    activeImg === i
                      ? 'ring-1 ring-gold'
                      : 'opacity-70 hover:opacity-100'
                  )}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 1 1%27/%3E"
                    alt=""
                    aria-hidden="true"
                    data-strk-img-id={`${gid}-thumb`}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="relative flex-1 aspect-[3/4] bg-cream overflow-hidden">
              <img
                src="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 1 1%27/%3E"
                alt={product.name}
                data-strk-img-id={galleryIds[activeImg]}
                data-strk-img={`[${product.descId}] [${product.titleId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                className="absolute inset-0 w-full h-full object-cover fade-in"
                key={activeImg}
              />
            </div>
          </div>

          {/* Info */}
          <div className="md:pl-4">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
              {product.material}
            </p>
            <h1
              id={product.titleId}
              className="font-serif text-3xl md:text-4xl uppercase tracking-[0.12em] text-ink leading-tight"
            >
              {product.name}
            </h1>
            <p id={product.descId} className="sr-only">
              {product.short}
            </p>

            <div className="flex items-center gap-3 mt-4">
              <Stars rating={product.rating} size={15} />
              <span className="text-sm text-stone">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="mt-5 font-serif text-2xl text-ink">
              {formatPrice(product.price)}
            </p>

            <p className="mt-5 text-stone leading-relaxed">{product.short}</p>

            {/* Tone selector */}
            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-[0.2em] text-ink mb-3">
                Tone: <span className="text-stone">{tone}</span>
              </p>
              <div className="flex gap-3">
                {product.tones.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTone(t)}
                    className={cn(
                      'px-6 py-2.5 rounded-full border text-xs uppercase tracking-[0.15em] transition-colors duration-300',
                      tone === t
                        ? 'bg-ink text-ivory border-ink'
                        : 'bg-transparent text-ink border-sand hover:border-ink'
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to cart */}
            <div className="mt-8 flex items-stretch gap-3">
              <div className="flex items-center border border-sand">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="px-4 hover:bg-cream transition-colors h-full"
                >
                  <Minus width={14} height={14} />
                </button>
                <span className="px-4 text-sm tabular-nums w-10 text-center">
                  {qty}
                </span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQty((q) => q + 1)}
                  className="px-4 hover:bg-cream transition-colors h-full"
                >
                  <Plus width={14} height={14} />
                </button>
              </div>
              <button
                type="button"
                onClick={handleAdd}
                className="flex-1 bg-gold text-espresso text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-gold-deep hover:text-ivory transition-colors duration-300"
              >
                <ShoppingBag width={15} height={15} strokeWidth={1.5} />
                Add to Cart
              </button>
            </div>

            <p className="mt-4 text-xs text-stone">
              Free worldwide shipping &middot; 30-day returns
            </p>

            {/* Accordions */}
            <div className="mt-10 border-t border-sand">
              {ACCORDIONS.map((acc) => {
                const isOpen = openAccordion === acc.id
                return (
                  <div key={acc.id} className="border-b border-sand">
                    <button
                      type="button"
                      onClick={() => setOpenAccordion(isOpen ? null : acc.id)}
                      className="w-full flex items-center justify-between py-5 text-left"
                    >
                      <span className="text-[11px] uppercase tracking-[0.2em] text-ink">
                        {acc.label}
                      </span>
                      <ChevronDown
                        width={16}
                        height={16}
                        strokeWidth={1.5}
                        className={cn(
                          'text-stone transition-transform duration-300',
                          isOpen && 'rotate-180'
                        )}
                      />
                    </button>
                    {isOpen && (
                      <div className="pb-6 text-sm text-stone leading-relaxed fade-in">
                        {product[acc.field]}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
              Complete the Look
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">
              You May Also Like
            </h2>
          </div>
          <RelatedGrid products={related} />
        </div>
      </section>
    </div>
  )
}

function RelatedGrid({ products: items }) {
  const ref = useRef(null)
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])
  return (
    <div
      ref={ref}
      className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10 md:gap-x-6"
    >
      {items.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  )
}
