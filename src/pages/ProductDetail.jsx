import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProductBySlug, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice, resolveImgUrl } from '@/lib/utils'
import { useStrkImages } from '@/hooks/useStrkImages'
import StarRating from '@/components/ui/StarRating'
import Accordion from '@/components/ui/Accordion'
import ProductCard from '@/components/product/ProductCard'
import { Minus, Plus, ChevronRight } from 'lucide-react'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const { addItem } = useCart()
  const ref = useStrkImages([])

  const [tone, setTone] = useState(product?.tones[0] || 'Gold')
  const [qty, setQty] = useState(1)
  const [activeImg, setActiveImg] = useState(0)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-5 text-center">
        <h1 className="font-serif text-3xl text-ink">Product not found</h1>
        <Link to="/shop" className="text-gold underline-offset-4 hover:underline">
          Back to shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(slug, 4)

  const handleAdd = () => {
    addItem(product, tone, qty)
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  const accordions = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: product.materials },
    { title: 'Shipping & Returns', content: product.shipping },
  ]

  return (
    <div ref={ref}>
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-5 pt-28 md:px-8 md:pt-32">
        <nav className="flex items-center gap-2 text-xs text-stone">
          <Link to="/" className="hover:text-gold">Home</Link>
          <ChevronRight size={12} strokeWidth={1.5} />
          <Link to="/shop" className="hover:text-gold">Shop</Link>
          <ChevronRight size={12} strokeWidth={1.5} />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-10 md:grid-cols-2 md:gap-14 md:px-8 md:py-14">
        {/* Gallery */}
        <div className="flex flex-col-reverse gap-4 md:flex-row">
          <div className="flex gap-3 md:flex-col">
            {product.images.map((img, i) => (
              <button
                key={img.imgId}
                type="button"
                onClick={() => setActiveImg(i)}
                className={`relative aspect-[4/5] w-20 overflow-hidden border transition-colors md:w-24 ${
                  activeImg === i ? 'border-gold' : 'border-hairline hover:border-stone'
                }`}
              >
                <img
                  src={resolveImgUrl(`${img.imgId}-thumb`)}
                  alt={img.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
          <div className="relative flex-1 overflow-hidden bg-cream">
            <img
              src={resolveImgUrl(`${product.images[activeImg].imgId}-main`)}
              alt={product.images[activeImg].alt}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="md:py-4">
          {product.badge && (
            <span className="text-xs uppercase tracking-widest2 text-gold">
              {product.badge}
            </span>
          )}
          <h1
            id={`pdp-${product.id}-name`}
            className="mt-2 font-serif text-3xl uppercase tracking-widest2 text-ink md:text-4xl"
          >
            {product.name}
          </h1>

          <div className="mt-3 flex items-center gap-3">
            <StarRating rating={product.rating} size={15} />
            <span className="text-xs text-stone">
              {product.rating.toFixed(1)} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-5 font-serif text-2xl text-ink">
            {formatPrice(product.price)}
          </p>

          <p
            id={`pdp-${product.id}-desc`}
            className="mt-5 text-sm leading-relaxed text-stone"
          >
            {product.shortDescription}
          </p>

          {/* Tone selector */}
          <div className="mt-8">
            <p className="text-xs uppercase tracking-widest2 text-ink">
              Tone: <span className="text-stone">{tone}</span>
            </p>
            <div className="mt-3 flex gap-3">
              {product.tones.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTone(t)}
                  className={`min-w-16 px-5 py-2.5 text-xs uppercase tracking-widest2 transition-colors ${
                    tone === t
                      ? 'border border-ink bg-ink text-ivory'
                      : 'border border-hairline text-ink hover:border-ink'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <p className="text-xs uppercase tracking-widest2 text-ink">Quantity</p>
            <div className="mt-3 inline-flex items-center border border-hairline">
              <button
                type="button"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="px-4 py-3 text-ink transition-colors hover:bg-cream"
                aria-label="Decrease quantity"
              >
                <Minus size={14} strokeWidth={1.5} />
              </button>
              <span className="min-w-10 text-center text-sm text-ink">{qty}</span>
              <button
                type="button"
                onClick={() => setQty((q) => q + 1)}
                className="px-4 py-3 text-ink transition-colors hover:bg-cream"
                aria-label="Increase quantity"
              >
                <Plus size={14} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <button
            type="button"
            onClick={handleAdd}
            className="mt-8 w-full bg-gold py-4 text-xs uppercase tracking-widest2 text-ivory transition-colors duration-300 hover:bg-gold-soft"
          >
            {added ? 'Added to Cart' : 'Add to Cart'}
          </button>

          <p className="mt-4 text-center text-xs text-stone">
            Free worldwide shipping · 30-day returns
          </p>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion items={accordions} defaultOpen={0} />
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="border-t border-hairline bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-24">
          <h2 className="mb-10 text-center font-serif text-3xl text-ink md:text-4xl">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4">
            {related.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                titleId={`related-${p.id}-title`}
                descId={`related-${p.id}-desc`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
