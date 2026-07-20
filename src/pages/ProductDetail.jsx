import { useEffect, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, ChevronRight } from 'lucide-react'
import { getProductById, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice, cn } from '@/lib/utils'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import StarRating from '@/components/ui/StarRating'
import Accordion from '@/components/ui/Accordion'
import ProductCard from '@/components/product/ProductCard'


export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()
  const [variant, setVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  const ref = useRef(null)

  useEffect(() => {
    setVariant('Gold')
    setQuantity(1)
    setActiveImage(0)
    window.scrollTo(0, 0)
  }, [id])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [id, activeImage])

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-5 text-center">
        <h1 className="font-serif text-3xl text-ink">Product not found</h1>
        <Link
          to="/shop"
          className="bg-gold px-7 py-3.5 text-xs font-medium uppercase tracking-widest2 text-ink hover:bg-gold-soft"
        >
          Back to Shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(id, 4)
  const galleryIds = product.galleryIds || [product.imgId]
  const titleId = `pd-${product.id}-title`
  const tagId = `pd-${product.id}-tag`

  const handleAdd = () => {
    addItem(product, { variant, quantity })
  }

  const accordions = [
    {
      title: 'Description',
      content: (
        <div className="space-y-3">
          <p>{product.description}</p>
        </div>
      ),
    },
    {
      title: 'Materials & Care',
      content: (
        <div className="space-y-3">
          <ul className="space-y-1.5">
            {product.details.map((d) => (
              <li key={d} className="flex gap-2">
                <span className="text-gold">—</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
          <p className="pt-2 text-stone">{product.care}</p>
        </div>
      ),
    },
    {
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-3">
          <p>Free worldwide shipping on all orders. Orders ship within 1–2 business days and arrive in 3–7 business days.</p>
          <p>Enjoy 30-day returns on unworn pieces in their original packaging. Gift boxes must be returned intact.</p>
        </div>
      ),
    },
  ]

  return (
    <div ref={ref} className="bg-cream pt-28 md:pt-32">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-8xl px-5 md:px-8">
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-stone">
          <Link to="/" className="hover:text-ink">Home</Link>
          <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
          <Link to="/shop" className="hover:text-ink">Shop</Link>
          <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="mx-auto grid max-w-8xl grid-cols-1 gap-10 px-5 py-10 md:grid-cols-2 md:gap-16 md:px-8 md:py-14">
        {/* Gallery */}
        <div className="flex flex-col-reverse gap-4 md:flex-row">
          <div className="flex gap-3 md:flex-col">
            {galleryIds.map((gid, i) => (
              <button
                key={gid}
                type="button"
                onClick={() => setActiveImage(i)}
                className={cn(
                  'relative aspect-[4/5] w-16 shrink-0 overflow-hidden bg-sand md:w-20',
                  activeImage === i ? 'ring-1 ring-gold' : 'opacity-70 hover:opacity-100'
                )}
              >
                <img
                  alt=""
                  data-strk-img-id={`${gid}-thumb`}
                  data-strk-img={`[${tagId}] [${titleId}]`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
          <div className="relative aspect-[4/5] flex-1 overflow-hidden bg-sand">
            <img
              alt={product.name}
              data-strk-img-id={galleryIds[activeImage]}
              data-strk-img={`[${tagId}] [${titleId}]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="md:py-2">
          <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-gold">
            {product.category}
          </p>
          <h1
            id={titleId}
            className="mt-3 font-serif text-4xl uppercase tracking-widest2 text-ink md:text-5xl"
          >
            {product.name}
          </h1>
          <p id={tagId} className="mt-2 text-sm text-stone">
            {product.tagline}
          </p>

          <div className="mt-4 flex items-center gap-3">
            <StarRating rating={product.rating} size={15} />
            <span className="text-xs text-stone">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-6 font-serif text-3xl text-gold">
            {formatPrice(product.price)}
          </p>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-stone">
            {product.description}
          </p>

          {/* Variants */}
          <div className="mt-8">
            <p className="text-[11px] font-medium uppercase tracking-widest2 text-ink">
              Tone
            </p>
            <div className="mt-3 flex gap-3">
              {product.variants.map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setVariant(v)}
                  className={cn(
                    'rounded-full border px-6 py-2.5 text-xs font-medium uppercase tracking-widest2 transition-colors',
                    variant === v
                      ? 'border-ink bg-ink text-cream'
                      : 'border-ink/25 text-ink hover:border-ink'
                  )}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <p className="text-[11px] font-medium uppercase tracking-widest2 text-ink">
              Quantity
            </p>
            <div className="mt-3 inline-flex items-center border border-ink/20">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3.5 py-3 text-ink transition-colors hover:bg-ink hover:text-cream"
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" strokeWidth={1.5} />
              </button>
              <span className="min-w-10 text-center text-sm text-ink">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3.5 py-3 text-ink transition-colors hover:bg-ink hover:text-cream"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <button
            type="button"
            onClick={handleAdd}
            className="mt-8 flex w-full items-center justify-center gap-2 bg-gold py-4 text-xs font-medium uppercase tracking-widest2 text-ink transition-colors hover:bg-gold-soft"
          >
            <ShoppingBag className="h-4 w-4" strokeWidth={1.5} />
            Add to Cart — {formatPrice(product.price * quantity)}
          </button>

          <p className="mt-4 text-center text-[11px] uppercase tracking-widest2 text-stone">
            Free shipping · 30-day returns
          </p>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion items={accordions} />
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="border-t border-ink/10 bg-sand/40 py-20 md:py-28">
        <div className="mx-auto max-w-8xl px-5 md:px-8">
          <div className="mb-12 text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-gold">
              Complete the Look
            </p>
            <h2 className="mt-3 font-serif text-4xl font-light text-ink md:text-5xl">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4 md:gap-x-8">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
