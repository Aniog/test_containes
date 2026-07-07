import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Star, Minus, Plus, ShoppingBag, ChevronRight } from "lucide-react"
import { getProduct, getRelated } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import Accordion from "@/components/product/Accordion"
import ProductCard from "@/components/product/ProductCard"
import { useStrkImages } from "@/hooks/useStrkImages"
import { useScrollReveal } from "@/hooks/useScrollReveal"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

// Gallery thumbnails reuse the two product images plus category context.
function buildThumbs(product) {
  return [
    {
      id: product.imgId,
      query: `[${product.descId}] [${product.titleId}]`,
    },
    {
      id: product.imgIdAlt,
      query: `[${product.descId}] ${product.name} worn on model gold jewelry`,
    },
  ]
}

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProduct(id)
  const { addItem } = useCart()
  const [tone, setTone] = useState(product?.tones[0] ?? "Gold")
  const [quantity, setQuantity] = useState(1)
  const [activeThumb, setActiveThumb] = useState(0)
  const [added, setAdded] = useState(false)

  const containerRef = useStrkImages([id, activeThumb])
  useScrollReveal()

  useEffect(() => {
    if (product) {
      setTone(product.tones[0])
      setQuantity(1)
      setActiveThumb(0)
      window.scrollTo({ top: 0, behavior: "instant" })
    }
  }, [id, product])

  if (!product) {
    return (
      <div className="container-editorial flex min-h-[60vh] flex-col items-center justify-center gap-4 pt-20 text-center">
        <h1 className="font-serif text-4xl text-ink">Piece not found</h1>
        <Link to="/shop" className="btn-accent">
          Back to Shop
        </Link>
      </div>
    )
  }

  const thumbs = buildThumbs(product)
  const related = getRelated(product.id, 4)

  const handleAdd = () => {
    addItem(product, { tone, quantity })
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1800)
  }

  const accordions = [
    { title: "Description", content: product.description },
    { title: "Materials & Care", content: `${product.materials} ${product.care}` },
    { title: "Shipping & Returns", content: product.shipping },
  ]

  return (
    <div ref={containerRef} className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="container-editorial py-5">
        <nav className="flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest text-stone">
          <Link to="/" className="transition-colors hover:text-gold">
            Home
          </Link>
          <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
          <Link to="/shop" className="transition-colors hover:text-gold">
            Shop
          </Link>
          <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      {/* Main */}
      <div className="container-editorial grid grid-cols-1 gap-10 pb-20 md:grid-cols-2 md:gap-14 lg:gap-20">
        {/* Gallery */}
        <div className="flex flex-col-reverse gap-4 md:flex-row">
          {/* Thumbnails */}
          <div className="flex gap-3 md:flex-col">
            {thumbs.map((thumb, i) => (
              <button
                key={thumb.id}
                onClick={() => setActiveThumb(i)}
                className={`relative aspect-[3/4] w-20 overflow-hidden bg-ivory-deep transition-all ${
                  activeThumb === i
                    ? "ring-1 ring-gold ring-offset-2 ring-offset-ivory"
                    : "opacity-70 hover:opacity-100"
                }`}
                aria-label={`View image ${i + 1}`}
              >
                <img
                  src={PLACEHOLDER}
                  alt=""
                  data-strk-img-id={thumb.id}
                  data-strk-img={thumb.query}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="200"
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main image */}
          <div className="relative aspect-[3/4] flex-1 overflow-hidden bg-ivory-deep">
            <img
              src={PLACEHOLDER}
              alt={product.name}
              data-strk-img-id={thumbs[activeThumb].id}
              data-strk-img={thumbs[activeThumb].query}
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
              className="h-full w-full object-cover"
            />
            {product.badge && (
              <span className="absolute left-5 top-5 bg-ivory-soft/90 px-3 py-1 font-sans text-[10px] uppercase tracking-widest text-ink backdrop-blur-sm">
                {product.badge}
              </span>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="md:py-4">
          <p className="eyebrow">{product.material}</p>
          <h1
            id={product.titleId}
            className="mt-3 font-serif text-4xl font-light uppercase tracking-wide text-ink md:text-5xl"
          >
            {product.name}
          </h1>

          <div className="mt-4 flex items-center gap-3">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.round(product.rating)
                      ? "fill-gold text-gold"
                      : "text-ink/20"
                  }`}
                  strokeWidth={0}
                />
              ))}
            </div>
            <span className="font-sans text-xs text-stone">
              {product.rating.toFixed(1)} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-6 font-serif text-3xl text-ink">
            {formatPrice(product.price)}
          </p>

          <p
            id={product.descId}
            className="mt-6 font-serif text-lg leading-relaxed text-ink/80"
          >
            {product.short}
          </p>

          {/* Variant selector */}
          <div className="mt-8">
            <p className="font-sans text-xs uppercase tracking-widest text-stone">
              Tone — {tone}
            </p>
            <div className="mt-3 flex gap-3">
              {product.tones.map((t) => (
                <button
                  key={t}
                  onClick={() => setTone(t)}
                  className={`px-6 py-2.5 font-sans text-xs uppercase tracking-widest transition-all ${
                    tone === t
                      ? "border border-gold bg-gold text-ivory"
                      : "border border-ink/25 text-ink hover:border-gold hover:text-gold"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-8">
            <p className="font-sans text-xs uppercase tracking-widest text-stone">
              Quantity
            </p>
            <div className="mt-3 inline-flex items-center border border-ink/25">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-4 py-3 text-ink transition-colors hover:text-gold"
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" strokeWidth={1.5} />
              </button>
              <span className="min-w-[3rem] text-center font-sans text-sm text-ink">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-4 py-3 text-ink transition-colors hover:text-gold"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <button
            onClick={handleAdd}
            className="btn-accent mt-8 w-full"
          >
            {added ? "Added to Cart" : `Add to Cart — ${formatPrice(product.price * quantity)}`}
          </button>

          <div className="mt-4 flex items-center justify-center gap-2 font-sans text-xs text-stone">
            <ShoppingBag className="h-3.5 w-3.5" strokeWidth={1.5} />
            Free worldwide shipping · 30-day returns
          </div>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion items={accordions} />
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="bg-ivory-deep py-20 md:py-24">
        <div className="container-editorial">
          <div className="reveal flex flex-col items-center text-center">
            <p className="eyebrow">Complete the Look</p>
            <h2 className="mt-3 font-serif text-4xl font-light text-ink md:text-5xl">
              You May Also Like
            </h2>
          </div>
          <div className="reveal mt-12 grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4 lg:gap-x-7">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
