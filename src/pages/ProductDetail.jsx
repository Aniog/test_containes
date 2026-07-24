import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Minus, Plus, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { getProductById, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import StrkImage from '@/components/ui/StrkImage'
import StarRating from '@/components/ui/StarRating'
import Button from '@/components/ui/Button'
import Accordion from '@/components/product/Accordion'
import ProductCard from '@/components/product/ProductCard'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()

  const [variant, setVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    setVariant('Gold')
    setQuantity(1)
    setActiveImage(0)
    setAdded(false)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [id])

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-5 px-5 text-center pt-24">
        <h1 className="font-serif text-4xl">Piece not found</h1>
        <Button as={Link} to="/shop">Back to Shop</Button>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 4)

  const handleAdd = () => {
    addItem(product, { variant, quantity })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-5">
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-stone">
          <Link to="/" className="hover:text-ink transition-colors">Home</Link>
          <ChevronRight width={12} height={12} />
          <Link to="/shop" className="hover:text-ink transition-colors">Shop</Link>
          <ChevronRight width={12} height={12} />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8 md:gap-14 pb-20">
        {/* Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible no-scrollbar">
            {product.gallery.map((g, i) => (
              <button
                key={g.imgId}
                onClick={() => setActiveImage(i)}
                className={cnThumb(activeImage === i)}
              >
                <StrkImage
                  imgId={g.imgId}
                  query={`[${product.descId}] [${product.titleId}] gold jewelry detail ${i + 1}`}
                  ratio={g.ratio}
                  width={String(g.width)}
                  alt={`${product.name} view ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
          {/* Main image */}
          <div className="flex-1 aspect-[4/5] bg-cream overflow-hidden">
            <StrkImage
              imgId={product.gallery[activeImage].imgId}
              query={`[${product.descId}] [${product.titleId}] gold jewelry editorial warm`}
              ratio="4x5"
              width="1000"
              alt={`${product.name} main view`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="md:py-2">
          {product.badge && (
            <span className="inline-block text-[10px] uppercase tracking-[0.2em] text-champagne border border-champagne px-3 py-1 mb-5">
              {product.badge}
            </span>
          )}
          <h1
            id={product.titleId}
            className="font-serif text-4xl md:text-5xl uppercase tracking-[0.1em] leading-tight"
          >
            {product.name}
          </h1>
          <p id={product.descId} className="sr-only">
            {product.tagline}. {product.description}
          </p>

          <div className="flex items-center gap-3 mt-4">
            <StarRating value={product.rating} size={15} />
            <span className="text-xs text-stone">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-5 font-serif text-3xl text-ink">
            {formatPrice(product.price)}
          </p>

          <p className="mt-5 text-ink/80 leading-relaxed text-sm md:text-base">
            {product.description}
          </p>

          {/* Variant selector */}
          <div className="mt-8">
            <p className="text-[11px] uppercase tracking-[0.2em] text-stone mb-3">
              Tone — <span className="text-ink">{variant}</span>
            </p>
            <div className="flex gap-3">
              {product.variants.map((v) => (
                <button
                  key={v}
                  onClick={() => setVariant(v)}
                  className={cnVariant(variant === v)}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-7">
            <p className="text-[11px] uppercase tracking-[0.2em] text-stone mb-3">
              Quantity
            </p>
            <div className="inline-flex items-center border border-sand">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-4 py-3 hover:bg-cream transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus width={14} height={14} />
              </button>
              <span className="px-5 text-sm tabular-nums">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-4 py-3 hover:bg-cream transition-colors"
                aria-label="Increase quantity"
              >
                <Plus width={14} height={14} />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <div className="mt-8">
            <Button
              onClick={handleAdd}
              size="lg"
              className="w-full"
            >
              {added ? (
                <span className="flex items-center gap-2">
                  <Check width={15} height={15} /> Added to Bag
                </span>
              ) : (
                `Add to Bag — ${formatPrice(product.price * quantity)}`
              )}
            </Button>
          </div>

          <p className="mt-4 text-xs text-stone text-center">
            Free worldwide shipping · 30-day returns · Ships in 24h
          </p>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion title="Description" defaultOpen>
              <p>{product.description}</p>
              <p>
                The {product.name} — {product.tagline.toLowerCase()} — is part
                of the Velmora {product.category.toLowerCase()} collection,
                finished in {product.material.toLowerCase()}.
              </p>
            </Accordion>
            <Accordion title="Materials & Care">
              <p>
                <span className="text-ink font-medium">Material:</span>{' '}
                {product.material} over a hypoallergenic brass base.
              </p>
              <p>
                <span className="text-ink font-medium">Care:</span> Avoid
                contact with water, perfume and cosmetics. Store in the
                provided pouch to preserve the finish. Clean gently with a
                soft, dry cloth.
              </p>
            </Accordion>
            <Accordion title="Shipping & Returns">
              <p>
                <span className="text-ink font-medium">Shipping:</span> Free
                worldwide shipping on all orders. Dispatched within 24 hours,
                delivered in 3–7 business days.
              </p>
              <p>
                <span className="text-ink font-medium">Returns:</span> Enjoy
                30 days to return unworn pieces in their original packaging
                for a full refund.
              </p>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="bg-cream py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.3em] text-stone mb-4">
              Complete the Look
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 md:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function cnThumb(active) {
  return cn(
    'shrink-0 w-16 h-20 md:w-20 md:h-24 bg-cream overflow-hidden border transition-all duration-300',
    active ? 'border-champagne' : 'border-transparent opacity-70 hover:opacity-100',
  )
}

function cnVariant(active) {
  return cn(
    'min-w-[88px] px-5 py-3 text-[11px] uppercase tracking-[0.18em] border transition-all duration-300',
    active
      ? 'border-ink bg-ink text-ivory'
      : 'border-sand text-ink hover:border-ink',
  )
}
