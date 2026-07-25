import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronRight, Minus, Plus, RefreshCcw, ShieldCheck, Truck } from 'lucide-react'
import Accordion from '@/components/ui/accordion'
import Button from '@/components/ui/button'
import Stars from '@/components/ui/stars'
import ProductCard from '@/components/product/product-card'
import ProductImage from '@/components/product/product-image'
import { cn } from '@/lib/utils'
import { useCart } from '@/lib/cart'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { formatPrice, getProductById, getRelatedProducts } from '@/data/products'

const VARIANTS = ['Gold', 'Silver']

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem, openCart } = useCart()

  const [activeImage, setActiveImage] = useState(0)
  const [variant, setVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)

  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [activeImage])

  useEffect(() => {
    setActiveImage(0)
    setVariant('Gold')
    setQuantity(1)
  }, [id])

  const related = useMemo(() => getRelatedProducts(product, 4), [product])

  if (!product) {
    return (
      <div className="mx-auto flex max-w-7xl flex-col items-center px-5 pb-24 pt-40 text-center sm:px-8">
        <h1 className="font-serif text-4xl font-medium text-ink">Piece not found</h1>
        <p className="mt-4 text-sm text-mocha">
          This piece may have sold out or moved. Explore the full collection instead.
        </p>
        <Link to="/shop" className="mt-8">
          <Button variant="primary" size="lg">Back to Shop</Button>
        </Link>
      </div>
    )
  }

  const accordionItems = [
    {
      id: 'description',
      title: 'Description',
      content: (
        <div className="space-y-3">
          <p>{product.description}</p>
          <ul className="list-disc space-y-1.5 pl-5">
            {product.details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: (
        <div className="space-y-3">
          <p>{product.materials}. Every Velmora piece is nickel-free, hypoallergenic, and finished with a protective e-coating for lasting shine.</p>
          <p>
            To care for your piece: keep it dry when possible, avoid perfumes and
            lotions directly on the metal, and store it in the pouch provided.
            Gently polish with a soft dry cloth.
          </p>
        </div>
      ),
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-3">
          <p>Free worldwide shipping on all orders, dispatched within 1–2 business days in our signature gift-ready packaging. Express options available at checkout.</p>
          <p>Not the one? You have 30 days from delivery to return or exchange, no questions asked. Gift sets can be returned as a whole.</p>
        </div>
      ),
    },
  ]

  const handleAddToCart = () => {
    addItem(product.id, variant, quantity)
    openCart()
  }

  return (
    <div ref={containerRef} className="pt-16 sm:pt-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 border-b border-line py-4 text-[11px] font-semibold uppercase tracking-luxe text-mocha">
          <Link to="/" className="transition-colors hover:text-ink">Home</Link>
          <ChevronRight className="h-3 w-3" strokeWidth={1.5} aria-hidden="true" />
          <Link to="/shop" className="transition-colors hover:text-ink">Shop</Link>
          <ChevronRight className="h-3 w-3" strokeWidth={1.5} aria-hidden="true" />
          <span className="text-gold-deep">{product.category}</span>
        </nav>

        <div className="grid gap-10 py-10 sm:py-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="relative overflow-hidden bg-sand">
              <div className="aspect-[3/4] sm:aspect-square lg:aspect-[4/5]">
                <ProductImage
                  key={`${product.id}-${activeImage}`}
                  product={product}
                  index={activeImage}
                  width={1000}
                  eager
                  className="animate-fade-up"
                />
              </div>
              {product.badge && (
                <span className="absolute left-4 top-4 bg-cream/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-luxe text-ink backdrop-blur-sm">
                  {product.badge}
                </span>
              )}
            </div>
            <div className="mt-3 grid grid-cols-4 gap-3">
              {product.images.map((image, i) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  aria-label={`View image ${i + 1} of ${product.name}`}
                  aria-pressed={activeImage === i}
                  className={cn(
                    'aspect-square overflow-hidden border bg-sand transition-all duration-300',
                    activeImage === i
                      ? 'border-gold'
                      : 'border-transparent opacity-70 hover:opacity-100'
                  )}
                >
                  <ProductImage product={product} index={i} width={240} />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <Stars rating={product.rating} starClassName="h-4 w-4" />
              <span className="text-xs text-mocha">
                {product.rating.toFixed(1)} · {product.reviews} reviews
              </span>
            </div>

            <h1 className="mt-4 font-serif text-3xl font-medium uppercase leading-tight tracking-[0.1em] text-ink sm:text-4xl">
              {product.name}
            </h1>

            <div className="mt-4 flex items-baseline gap-3">
              <p className="font-serif text-2xl font-medium text-ink sm:text-3xl">
                {formatPrice(product.price)}
              </p>
              {product.compareAtPrice && (
                <p className="text-sm text-mocha line-through">
                  {formatPrice(product.compareAtPrice)}
                </p>
              )}
            </div>

            <p className="mt-5 text-sm leading-relaxed text-mocha sm:text-base">
              {product.short}
            </p>

            <div className="mt-8">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-luxe text-ink">
                Finish — <span className="text-gold-deep">{variant} Tone</span>
              </p>
              <div className="flex gap-2.5" role="radiogroup" aria-label="Finish">
                {VARIANTS.map((v) => (
                  <button
                    key={v}
                    type="button"
                    role="radio"
                    aria-checked={variant === v}
                    onClick={() => setVariant(v)}
                    className={cn(
                      'rounded-full border px-6 py-2.5 text-xs font-semibold uppercase tracking-luxe transition-all duration-300',
                      variant === v
                        ? 'border-ink bg-ink text-cream'
                        : 'border-line bg-transparent text-mocha hover:border-ink/40 hover:text-ink'
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <div className="flex items-center justify-between border border-line sm:justify-start">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3.5 text-mocha transition-colors hover:text-ink"
                >
                  <Minus className="h-4 w-4" strokeWidth={1.5} />
                </button>
                <span className="w-10 text-center text-sm font-semibold text-ink" aria-live="polite">
                  {quantity}
                </span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQuantity((q) => Math.min(9, q + 1))}
                  className="p-3.5 text-mocha transition-colors hover:text-ink"
                >
                  <Plus className="h-4 w-4" strokeWidth={1.5} />
                </button>
              </div>
              <Button variant="gold" size="lg" className="flex-1" onClick={handleAddToCart}>
                Add to Cart — {formatPrice(product.price * quantity)}
              </Button>
            </div>

            <ul className="mt-8 grid grid-cols-1 gap-3 border-y border-line py-6 sm:grid-cols-3">
              {[
                { Icon: Truck, label: 'Free worldwide shipping' },
                { Icon: RefreshCcw, label: '30-day returns' },
                { Icon: ShieldCheck, label: '2-year warranty' },
              ].map(({ Icon, label }) => (
                <li key={label} className="flex items-center gap-2.5 text-xs text-mocha">
                  <Icon className="h-4 w-4 shrink-0 text-gold-deep" strokeWidth={1.5} />
                  {label}
                </li>
              ))}
            </ul>

            <Accordion items={accordionItems} defaultOpenId="description" className="mt-6 border-t-0" />
          </div>
        </div>

        <section className="border-t border-line py-14 sm:py-20" aria-label="You may also like">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="font-serif text-2xl font-medium text-ink sm:text-3xl">
              You May Also Like
            </h2>
            <Link
              to="/shop"
              className="hidden text-[11px] font-semibold uppercase tracking-luxe text-ink transition-colors hover:text-gold-deep sm:block"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-4 sm:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
