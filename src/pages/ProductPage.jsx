import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronRight, Heart, Minus, Plus, RefreshCcw, ShieldCheck, Truck } from 'lucide-react'
import { getProductById, getRelatedProducts, variants } from '@/data/products'
import { StrkImage } from '@/components/StrkImage'
import Stars from '@/components/Stars'
import Accordion from '@/components/product/Accordion'
import ProductCard from '@/components/product/ProductCard'
import Reveal from '@/components/Reveal'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

const galleryShots = [
  { key: 'main', note: 'product still life on dark neutral background editorial warm light' },
  { key: 'worn', note: 'worn on model close-up ear neck warm skin editorial photography' },
  { key: 'macro', note: 'extreme macro detail texture craftsmanship gold surface' },
  { key: 'styled', note: 'styled flat lay with silk ribbon gift box warm tones' },
]

export default function ProductPage() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem, openCart } = useCart()
  const [variant, setVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [activeShot, setActiveShot] = useState(0)
  const [wishlisted, setWishlisted] = useState(false)

  useEffect(() => {
    setVariant('gold')
    setQuantity(1)
    setActiveShot(0)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [id])

  if (!product) {
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-5 pt-24 text-center">
        <h1 className="font-serif text-4xl font-light text-ivory">Piece not found</h1>
        <Link
          to="/shop"
          className="bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-widest2 text-inkonaccent transition-colors hover:bg-goldlight"
        >
          Back to the Collection
        </Link>
      </div>
    )
  }

  const titleId = `pdp-${product.id}-name`
  const related = getRelatedProducts(product.id, 4)

  const handleAdd = () => {
    addItem(product.id, variant, quantity)
    openCart()
  }

  return (
    <div className="pt-16 md:pt-20">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 py-6 text-[11px] uppercase tracking-widest2 text-taupe">
          <Link to="/" className="transition-colors hover:text-gold">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/shop" className="transition-colors hover:text-gold">Shop</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-sand">{product.name}</span>
        </nav>

        <div className="grid gap-10 pb-20 md:pb-28 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="relative overflow-hidden border border-line/50 bg-mocha">
              <div className="aspect-square">
                <StrkImage
                  id={`pdp-${product.id}-shot-${galleryShots[activeShot].key}`}
                  query={`[${titleId}] ${product.imageAlt} ${galleryShots[activeShot].note}`}
                  ratio="1x1"
                  width={1000}
                  alt={`${product.name} — ${galleryShots[activeShot].key} view`}
                />
              </div>
              {product.badge && (
                <span className="absolute left-4 top-4 bg-goldlight px-3 py-1.5 text-[10px] font-semibold uppercase tracking-widest2 text-inkonaccent">
                  {product.badge}
                </span>
              )}
            </div>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {galleryShots.map((shot, i) => (
                <button
                  key={shot.key}
                  type="button"
                  onClick={() => setActiveShot(i)}
                  aria-label={`View ${shot.key} image`}
                  className={cn(
                    'overflow-hidden border bg-mocha transition-all duration-300',
                    activeShot === i
                      ? 'border-gold'
                      : 'border-line/50 opacity-60 hover:opacity-100',
                  )}
                >
                  <div className="aspect-square">
                    <StrkImage
                      id={`pdp-${product.id}-thumb-${shot.key}`}
                      query={`[${titleId}] ${product.imageAlt} ${shot.note}`}
                      ratio="1x1"
                      width={220}
                      alt=""
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-[11px] font-semibold uppercase tracking-widest3 text-gold">
              {product.category}
            </p>
            <h1
              id={titleId}
              className="mt-3 font-serif text-4xl font-medium uppercase leading-tight tracking-[0.12em] text-ivory md:text-5xl"
            >
              {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-3">
              <Stars rating={product.rating} />
              <span className="text-xs tracking-wide text-sand">
                {product.rating.toFixed(1)} · {product.reviews} reviews
              </span>
            </div>

            <p className="mt-5 font-serif text-3xl font-light text-goldlight">
              ${product.price}
            </p>

            <p className="mt-5 text-sm font-light leading-relaxed text-sand md:text-base">
              {product.shortDescription}
            </p>

            <div className="mt-8">
              <p className="text-[11px] font-semibold uppercase tracking-widest2 text-ivory">
                Finish — <span className="text-gold">{variants.find((v) => v.id === variant)?.label}</span>
              </p>
              <div className="mt-3 flex gap-3" role="radiogroup" aria-label="Finish">
                {variants.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    role="radio"
                    aria-checked={variant === v.id}
                    onClick={() => setVariant(v.id)}
                    className={cn(
                      'border px-6 py-3 text-[11px] font-semibold uppercase tracking-widest2 transition-all duration-300',
                      variant === v.id
                        ? 'border-gold bg-gold/10 text-gold'
                        : 'border-line text-sand hover:border-sand hover:text-ivory',
                    )}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <div className="flex w-fit items-center border border-line">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="flex h-13 w-12 items-center justify-center py-4 text-sand transition-colors hover:text-gold"
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <span className="w-10 text-center text-sm font-medium text-ivory" aria-live="polite">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.min(99, q + 1))}
                  aria-label="Increase quantity"
                  className="flex h-13 w-12 items-center justify-center py-4 text-sand transition-colors hover:text-gold"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>

              <button
                type="button"
                onClick={handleAdd}
                className="flex-1 bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-widest2 text-inkonaccent transition-colors duration-300 hover:bg-goldlight"
              >
                Add to Bag — ${product.price * quantity}
              </button>

              <button
                type="button"
                onClick={() => setWishlisted((v) => !v)}
                aria-label={wishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
                aria-pressed={wishlisted}
                className={cn(
                  'flex w-14 items-center justify-center border py-4 transition-all duration-300',
                  wishlisted
                    ? 'border-gold text-gold'
                    : 'border-line text-sand hover:border-gold hover:text-gold',
                )}
              >
                <Heart className="h-4 w-4" fill={wishlisted ? 'currentColor' : 'none'} />
              </button>
            </div>

            <ul className="mt-8 space-y-3 border-t border-line/60 pt-6 text-xs tracking-wide text-sand">
              <li className="flex items-center gap-3">
                <Truck className="h-4 w-4 text-gold" strokeWidth={1.5} />
                Free worldwide shipping, dispatched in 1–2 days
              </li>
              <li className="flex items-center gap-3">
                <RefreshCcw className="h-4 w-4 text-gold" strokeWidth={1.5} />
                30-day returns & exchanges
              </li>
              <li className="flex items-center gap-3">
                <ShieldCheck className="h-4 w-4 text-gold" strokeWidth={1.5} />
                Hypoallergenic, nickel-free, tarnish-resistant
              </li>
            </ul>

            <div className="mt-8">
              <Accordion
                items={[
                  { title: 'Description', content: product.description },
                  { title: 'Materials & Care', content: product.materials },
                  { title: 'Shipping & Returns', content: product.shipping },
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      <section className="border-t border-line/60 bg-coal">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
          <Reveal>
            <h2 className="text-center font-serif text-3xl font-light text-ivory md:text-4xl">
              You May Also <span className="italic text-goldlight">Like</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-8">
            {related.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <ProductCard product={p} ratio="3x4" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
