import { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Minus, Plus, ChevronRight, Check } from 'lucide-react'
import { getProductById, getRelatedProducts } from '@/data/products'
import { StrkImage } from '@/components/StrkImage'
import { useStrkImages } from '@/components/StrkImage'
import { StarRating } from '@/components/StarRating'
import Accordion from '@/components/Accordion'
import ProductCard from '@/components/ProductCard'
import { useCart } from '@/components/CartContext'
import { formatPrice, cn } from '@/lib/utils'

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = getProductById(id)
  const { addItem } = useCart()

  const [tone, setTone] = useState(product?.tone?.[0] ?? 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [added, setAdded] = useState(false)
  const ref = useStrkImages([id, activeImage])

  useEffect(() => {
    if (product) {
      setTone(product.tone[0])
      setQuantity(1)
      setActiveImage(0)
      setAdded(false)
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [id, product])

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-32 text-center">
        <h1 className="font-serif text-4xl text-espresso">Piece not found</h1>
        <Link to="/shop" className="mt-6 inline-block text-gold hover:text-gold-deep">
          ← Back to shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 4)
  const galleryIds = product.galleryIds.length
    ? product.galleryIds
    : [product.imgId, product.imgIdAlt, product.imgId]

  const titleId = `pd-${product.id}-title`
  const subId = `pd-${product.id}-sub`

  const handleAdd = () => {
    addItem(product, tone, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const accordions = [
    {
      title: 'Description',
      content: (
        <div>
          <p>{product.description}</p>
        </div>
      ),
    },
    {
      title: 'Materials & Care',
      content: (
        <div>
          <ul className="mb-4 space-y-1.5">
            {product.details.map((d) => (
              <li key={d} className="flex gap-2">
                <span className="text-gold">•</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
          <p className="text-taupe">{product.care}</p>
        </div>
      ),
    },
    {
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-2">
          <p>Free worldwide shipping on all orders.</p>
          <p>Orders are dispatched within 1–2 business days.</p>
          <p>Enjoy 30-day returns on unworn pieces in original packaging.</p>
        </div>
      ),
    },
  ]

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-5 py-5 md:px-8">
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-taupe">
          <Link to="/" className="hover:text-espresso">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/shop" className="hover:text-espresso">Shop</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to={`/shop?category=${product.category}`} className="hover:text-espresso">
            {product.category}
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-cocoa">{product.name}</span>
        </nav>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 pb-20 md:grid-cols-2 md:gap-14 md:px-8 lg:gap-20">
        {/* Gallery */}
        <div className="flex flex-col-reverse gap-4 md:flex-row">
          {/* Thumbnails */}
          <div className="flex gap-3 md:flex-col">
            {galleryIds.map((gid, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={cn(
                  'overflow-hidden border transition-colors',
                  activeImage === i ? 'border-gold' : 'border-transparent hover:border-sand'
                )}
              >
                <StrkImage
                  imgId={`${gid}-thumb`}
                  query={`[${subId}] [${titleId}]`}
                  ratio="4x5"
                  width={120}
                  alt={`${product.name} view ${i + 1}`}
                  className="h-20 w-16 md:h-24 md:w-20"
                />
              </button>
            ))}
          </div>
          {/* Main image */}
          <div className="flex-1">
            <StrkImage
              imgId={galleryIds[activeImage]}
              query={`[${subId}] [${titleId}]`}
              ratio="4x5"
              width={900}
              alt={product.name}
              className="aspect-[4/5] w-full bg-cream"
            />
          </div>
        </div>

        {/* Info */}
        <div className="md:py-4">
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold">{product.category}</p>
          <h1
            id={titleId}
            className="mt-3 font-serif text-4xl uppercase tracking-[0.1em] text-espresso md:text-5xl"
          >
            {product.name}
          </h1>
          <p id={subId} className="mt-2 text-sm text-taupe">{product.subtitle}</p>

          <div className="mt-4 flex items-center gap-3">
            <StarRating value={product.rating} size={15} />
            <span className="text-xs text-taupe">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-6 font-serif text-3xl text-espresso">{formatPrice(product.price)}</p>

          <p className="mt-5 text-sm leading-relaxed text-cocoa">{product.description}</p>

          {/* Tone selector */}
          <div className="mt-8">
            <p className="text-[11px] uppercase tracking-[0.2em] text-espresso">
              Tone: <span className="text-taupe">{tone}</span>
            </p>
            <div className="mt-3 flex gap-3">
              {product.tone.map((t) => (
                <button
                  key={t}
                  onClick={() => setTone(t)}
                  className={cn(
                    'min-w-24 border px-5 py-2.5 text-[11px] uppercase tracking-[0.15em] transition-colors',
                    tone === t
                      ? 'border-espresso bg-espresso text-ivory'
                      : 'border-sand text-cocoa hover:border-espresso'
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <p className="text-[11px] uppercase tracking-[0.2em] text-espresso">Quantity</p>
            <div className="mt-3 inline-flex items-center border border-sand">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
                className="px-3 py-3 text-cocoa hover:text-espresso"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-10 text-center text-sm text-espresso">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Increase quantity"
                className="px-3 py-3 text-cocoa hover:text-espresso"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <button
            onClick={handleAdd}
            className={cn(
              'mt-8 flex w-full items-center justify-center gap-2 py-4 text-[11px] uppercase tracking-[0.25em] transition-colors',
              added ? 'bg-gold-deep text-ivory' : 'bg-gold text-ivory hover:bg-gold-deep'
            )}
          >
            {added ? (
              <>
                <Check className="h-4 w-4" /> Added to Bag
              </>
            ) : (
              `Add to Bag — ${formatPrice(product.price * quantity)}`
            )}
          </button>

          <p className="mt-3 text-center text-xs text-taupe">
            Free shipping · 30-day returns · Hypoallergenic
          </p>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion items={accordions} />
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-center font-serif text-3xl text-espresso md:text-4xl">
            You May Also Like
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4 md:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
