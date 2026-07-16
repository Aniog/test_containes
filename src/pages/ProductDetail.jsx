import { useEffect, useRef, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, Check, ChevronRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { getProductById, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'
import Stars from '@/components/ui/Stars'
import Button from '@/components/ui/Button'
import Accordion from '@/components/ui/Accordion'
import ProductCard from '@/components/product/ProductCard'


export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = getProductById(id)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const [variant, setVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImg, setActiveImg] = useState(0)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    setVariant('Gold')
    setQuantity(1)
    setActiveImg(0)
    setAdded(false)
  }, [id])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [id, activeImg])

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-32 text-center">
        <h1 className="font-serif text-4xl text-ink">Product not found</h1>
        <Button as={Link} to="/shop" className="mt-8">
          Back to Shop
        </Button>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 4)

  const galleryImages = [
    {
      imgId: product.imgId,
      query: `[${product.descId}] [${product.titleId}] gold jewelry editorial warm`,
    },
    {
      imgId: product.imgIdAlt,
      query: `[${product.descId}] [${product.titleId}] worn on model styling detail`,
    },
    {
      imgId: `${product.imgId}-detail-3`,
      query: `[${product.descId}] [${product.titleId}] macro detail close up gold texture`,
    },
    {
      imgId: `${product.imgId}-detail-4`,
      query: `[${product.descId}] [${product.titleId}] packaging gift box velvet`,
    },
  ]

  const handleAdd = () => {
    addItem(product, { variant, quantity })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const accordions = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.details} ${product.care}` },
    {
      title: 'Shipping & Returns',
      content:
        'Free worldwide shipping on all orders. Orders ship within 1–2 business days and arrive in 3–7 days. Enjoy 30-day returns on unworn pieces in original packaging. Gift sets are final sale.',
    },
  ]

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-5 py-6 md:px-8">
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-wide2 text-stone">
          <Link to="/" className="transition-colors hover:text-gold">Home</Link>
          <ChevronRight size={12} strokeWidth={1.5} />
          <Link to="/shop" className="transition-colors hover:text-gold">Shop</Link>
          <ChevronRight size={12} strokeWidth={1.5} />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 md:grid-cols-2 md:gap-14 md:px-8 md:pb-28">
        {/* Gallery */}
        <div className="flex flex-col-reverse gap-4 md:flex-row">
          {/* Thumbnails */}
          <div className="flex gap-3 md:flex-col">
            {galleryImages.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveImg(i)}
                className={cn(
                  'relative aspect-square w-16 shrink-0 overflow-hidden border bg-cream transition-colors md:w-20',
                  activeImg === i ? 'border-gold' : 'border-transparent hover:border-sand'
                )}
              >
                <img
                  alt={`${product.name} thumbnail ${i + 1}`}
                  data-strk-img-id={`thumb-${img.imgId}`}
                  data-strk-img={img.query}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="160"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
          {/* Main image */}
          <div className="relative aspect-[4/5] flex-1 overflow-hidden bg-cream">
            <img
              alt={product.name}
              data-strk-img-id={`main-${galleryImages[activeImg].imgId}`}
              data-strk-img={galleryImages[activeImg].query}
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="h-full w-full object-cover fade-in"
              key={activeImg}
            />
            {product.badge && (
              <span className="absolute left-4 top-4 bg-ivory/90 px-3 py-1 text-[10px] uppercase tracking-wide2 text-ink backdrop-blur-sm">
                {product.badge}
              </span>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="md:pt-2">
          <p className="text-[11px] uppercase tracking-widest2 text-gold">
            {product.category}
          </p>
          <h1
            id={product.titleId}
            className="mt-3 font-serif text-4xl uppercase tracking-wide2 text-ink md:text-5xl"
          >
            {product.name}
          </h1>
          <p id={product.descId} className="mt-2 text-sm text-stone">
            {product.tagline}
          </p>

          <div className="mt-4 flex items-center gap-3">
            <Stars rating={product.rating} size={15} />
            <span className="text-xs text-stone">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-5 font-serif text-3xl text-ink">{formatPrice(product.price)}</p>

          <p className="mt-5 text-sm leading-relaxed text-stone">
            {product.description}
          </p>

          {/* Variant selector */}
          <div className="mt-7">
            <p className="text-[11px] uppercase tracking-wide2 text-stone">
              Finish — <span className="text-ink">{variant}</span>
            </p>
            <div className="mt-3 flex gap-3">
              {product.variants.map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setVariant(v)}
                  className={cn(
                    'min-w-[88px] rounded-full border px-5 py-2.5 text-[11px] uppercase tracking-wide2 transition-all duration-300',
                    variant === v
                      ? 'border-ink bg-ink text-ivory'
                      : 'border-sand bg-transparent text-ink hover:border-ink'
                  )}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-7">
            <p className="text-[11px] uppercase tracking-wide2 text-stone">Quantity</p>
            <div className="mt-3 inline-flex items-center border border-sand">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-3 text-ink transition-colors hover:text-gold"
                aria-label="Decrease quantity"
              >
                <Minus size={14} strokeWidth={1.5} />
              </button>
              <span className="min-w-10 text-center text-sm text-ink">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-3 text-ink transition-colors hover:text-gold"
                aria-label="Increase quantity"
              >
                <Plus size={14} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <div className="mt-8">
            <Button
              size="lg"
              className="w-full"
              onClick={handleAdd}
            >
              {added ? (
                <>
                  <Check size={16} strokeWidth={1.5} className="mr-2" />
                  Added to Bag
                </>
              ) : (
                <>
                  <ShoppingBag size={16} strokeWidth={1.5} className="mr-2" />
                  Add to Bag — {formatPrice(product.price * quantity)}
                </>
              )}
            </Button>
          </div>

          {/* Trust mini */}
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[11px] uppercase tracking-wide2 text-stone">
            <span>Free Shipping</span>
            <span className="text-sand">·</span>
            <span>30-Day Returns</span>
            <span className="text-sand">·</span>
            <span>Hypoallergenic</span>
          </div>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion items={accordions} />
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="border-t border-sand bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center">
            <p className="text-[11px] uppercase tracking-widest2 text-gold">Complete the Look</p>
            <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">You May Also Like</h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4 md:gap-x-6">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
