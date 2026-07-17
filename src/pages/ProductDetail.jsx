import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { Plus, Minus, ChevronRight, Check } from 'lucide-react'
import { getProductBySlug, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { useStrkImages, STRK_PLACEHOLDER } from '@/lib/useStrkImages'
import { formatPrice, cn } from '@/lib/utils'
import StarRating from '@/components/ui/StarRating'
import Accordion from '@/components/ui/Accordion'
import ProductCard from '@/components/product/ProductCard'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const ref = useStrkImages([])
  const { addItem } = useCart()

  const [variant, setVariant] = useState(product?.variants?.[0] || 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [added, setAdded] = useState(false)

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const related = getRelatedProducts(product.slug, 4)

  // Gallery: primary + alternate, plus a couple of derived angles via strk
  const gallery = [
    { imgId: product.imgId, query: `[${product.descId}] [${product.titleId}] gold jewelry product` },
    { imgId: product.imgIdAlt, query: `[${product.descId}] [${product.titleId}] gold jewelry worn model` },
    { imgId: `${product.imgId}-d3`, query: `[${product.descId}] [${product.titleId}] gold jewelry detail close up` },
    { imgId: `${product.imgId}-d4`, query: `[${product.descId}] [${product.titleId}] gold jewelry gift box packaging` },
  ]

  const handleAdd = () => {
    addItem(product, { variant, quantity })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const accordions = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.materials} ${product.care}` },
    { title: 'Shipping & Returns', content: product.shipping },
  ]

  return (
    <div ref={ref} className="bg-ivory pt-24">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-5 py-6 md:px-8">
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-taupe">
          <Link to="/" className="hover:text-ink">Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="hover:text-ink">Shop</Link>
          <ChevronRight size={12} />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 pb-20 md:px-8 lg:grid-cols-2 lg:gap-16">
        {/* Gallery */}
        <div className="flex flex-col-reverse gap-4 md:flex-row">
          {/* Thumbnails */}
          <div className="flex gap-3 md:flex-col">
            {gallery.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveImage(i)}
                className={cn(
                  'h-20 w-16 shrink-0 overflow-hidden border bg-cream md:h-24 md:w-20',
                  activeImage === i ? 'border-gold' : 'border-sand'
                )}
              >
                <img
                  alt={`${product.name} view ${i + 1}`}
                  data-strk-img-id={`${img.imgId}-thumb`}
                  data-strk-img={img.query}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="200"
                  src={STRK_PLACEHOLDER}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main image */}
          <div className="relative flex-1 overflow-hidden bg-cream">
            <img
              alt={product.name}
              data-strk-img-id={gallery[activeImage].imgId}
              data-strk-img={gallery[activeImage].query}
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src={STRK_PLACEHOLDER}
              className="aspect-[4/5] w-full object-cover"
            />
            {product.badge && (
              <span className="absolute left-4 top-4 bg-ivory/90 px-3 py-1 text-[10px] uppercase tracking-widest2 text-ink backdrop-blur-sm">
                {product.badge}
              </span>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="lg:py-6">
          <p className="text-[11px] uppercase tracking-widest2 text-gold">
            {product.category}
          </p>
          <h1
            id={product.titleId}
            className="mt-3 font-sans text-xl uppercase tracking-widest3 text-ink md:text-2xl"
          >
            {product.name}
          </h1>
          <p id={product.descId} className="sr-only">
            {product.shortDesc}
          </p>

          <div className="mt-4 flex items-center gap-3">
            <StarRating rating={product.rating} size={15} />
            <span className="text-xs text-taupe">
              {product.rating.toFixed(1)} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-5 font-serif text-3xl text-ink">
            {formatPrice(product.price)}
          </p>

          <p className="mt-5 text-sm leading-relaxed text-taupe">
            {product.shortDesc}
          </p>

          {/* Variant selector */}
          <div className="mt-8">
            <p className="text-[11px] uppercase tracking-widest2 text-ink">
              Tone: <span className="text-taupe">{variant}</span>
            </p>
            <div className="mt-3 flex gap-3">
              {product.variants.map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setVariant(v)}
                  className={cn(
                    'min-w-24 border px-6 py-3 text-[11px] uppercase tracking-widest2 transition-all',
                    variant === v
                      ? 'border-ink bg-ink text-ivory'
                      : 'border-sand text-ink hover:border-ink'
                  )}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Add to cart */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <div className="flex items-center border border-sand">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-4 py-3.5 text-ink hover:text-gold"
                aria-label="Decrease quantity"
              >
                <Minus size={15} />
              </button>
              <span className="min-w-10 text-center text-sm text-ink">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="px-4 py-3.5 text-ink hover:text-gold"
                aria-label="Increase quantity"
              >
                <Plus size={15} />
              </button>
            </div>
            <button
              type="button"
              onClick={handleAdd}
              className={cn(
                'flex flex-1 items-center justify-center gap-2 py-4 text-[11px] uppercase tracking-widest2 text-ivory transition-colors',
                added ? 'bg-gold-deep' : 'bg-gold hover:bg-gold-deep'
              )}
            >
              {added ? (
                <>
                  <Check size={15} /> Added to Cart
                </>
              ) : (
                `Add to Cart · ${formatPrice(product.price * quantity)}`
              )}
            </button>
          </div>

          {/* Trust mini */}
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-sand pt-6 text-[11px] uppercase tracking-widest2 text-taupe">
            <span>Free Worldwide Shipping</span>
            <span>30-Day Returns</span>
            <span>Hypoallergenic</span>
          </div>

          {/* Accordions */}
          <div className="mt-8">
            <Accordion items={accordions} defaultOpen={0} />
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="border-t border-sand bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-10 text-center">
            <p className="text-[11px] uppercase tracking-widest2 text-gold">Complete the Look</p>
            <h2 className="mt-3 font-serif text-3xl text-ink md:text-4xl">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
