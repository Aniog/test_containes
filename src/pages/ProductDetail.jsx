import { useEffect, useRef, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Minus, Plus, ChevronRight } from "lucide-react"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn } from "@/lib/utils"
import StrkImage from "@/components/ui/StrkImage"
import StarRating from "@/components/ui/StarRating"
import Accordion from "@/components/product/Accordion"
import ProductCard from "@/components/product/ProductCard"

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()

  const galleryRef = useRef(null)
  const [activeImg, setActiveImg] = useState(0)
  const [variant, setVariant] = useState(product?.variants[0] || "Gold")
  const [qty, setQty] = useState(1)

  useEffect(() => {
    setActiveImg(0)
    setVariant(product?.variants[0] || "Gold")
    setQty(1)
    window.scrollTo(0, 0)
  }, [id, product])

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <p className="font-serif text-3xl text-ink">Product not found</p>
        <Link to="/shop" className="mt-4 inline-block text-gold-deep underline">
          Back to shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(id, 4)
  const titleId = `pd-${product.id}-title`
  const descId = `pd-${product.id}-desc`

  const handleAdd = () => {
    addItem(product, variant, qty)
  }

  return (
    <div className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-5">
        <nav className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-muted">
          <Link to="/" className="hover:text-ink">Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="hover:text-ink">Shop</Link>
          <ChevronRight size={12} />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          {/* Gallery */}
          <div ref={galleryRef} className="flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-3 md:w-20">
              {product.images.map((img, i) => (
                <button
                  key={img.id}
                  type="button"
                  onClick={() => setActiveImg(i)}
                  className={cn(
                    "relative h-20 w-16 md:w-20 md:h-24 flex-shrink-0 overflow-hidden bg-cream border transition-colors",
                    activeImg === i ? "border-gold" : "border-transparent"
                  )}
                  aria-label={`View image ${i + 1}`}
                >
                  <StrkImage
                    imgId={`${img.id}-thumb`}
                    query={`[${descId}] [${titleId}]`}
                    ratio="3x4"
                    width={160}
                    alt={img.alt}
                  />
                </button>
              ))}
            </div>
            <div className="relative flex-1 aspect-[4/5] overflow-hidden bg-cream">
              <StrkImage
                imgId={`${product.images[activeImg].id}-main`}
                query={`[${descId}] [${titleId}]`}
                ratio="4x5"
                width={900}
                alt={product.images[activeImg].alt}
              />
            </div>
          </div>

          {/* Info */}
          <div className="md:pl-4">
            {product.badge && (
              <span className="inline-block bg-cream px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-ink mb-4">
                {product.badge}
              </span>
            )}
            <h1
              id={titleId}
              className="font-serif text-3xl md:text-4xl uppercase tracking-[0.14em] text-ink leading-tight"
            >
              {product.name}
            </h1>
            <p id={descId} className="sr-only">
              {product.shortDesc}
            </p>

            <div className="mt-3 flex items-center gap-3">
              <StarRating rating={product.rating} size={15} />
              <span className="text-xs text-muted">
                {product.rating} · {product.reviews} reviews
              </span>
            </div>

            <p className="mt-5 font-serif text-3xl text-ink">
              {formatPrice(product.price)}
            </p>

            <p className="mt-5 text-sm text-muted leading-relaxed">
              {product.shortDesc}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.2em] text-ink mb-3">
                Tone: <span className="text-muted">{variant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setVariant(v)}
                    className={cn(
                      "rounded-full border px-6 py-2.5 text-xs uppercase tracking-[0.15em] transition-colors",
                      variant === v
                        ? "border-ink bg-ink text-ivory"
                        : "border-sand text-ink hover:border-ink"
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to cart */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center border border-sand">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 text-ink hover:text-gold-deep"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center text-sm text-ink">{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty((q) => q + 1)}
                  className="px-4 py-3 text-ink hover:text-gold-deep"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
              <button
                type="button"
                onClick={handleAdd}
                className="flex-1 bg-gold py-4 text-xs uppercase tracking-[0.25em] text-ivory hover:bg-gold-deep transition-colors"
              >
                Add to Cart — {formatPrice(product.price * qty)}
              </button>
            </div>

            <p className="mt-4 text-xs text-muted">
              Free worldwide shipping · 30-day returns · Ships in 24h
            </p>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2">{product.materials}</p>
                <p>{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="mb-2">
                  Free standard shipping worldwide on all orders. Express
                  shipping available at checkout. Orders ship within 24 hours on
                  business days.
                </p>
                <p>
                  Enjoy 30 days to return or exchange any unworn piece in its
                  original packaging. Gift sets must be returned complete.
                </p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related */}
        <div className="mt-24">
          <div className="mb-10 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">
              Complete the Look
            </p>
            <h2 className="font-serif text-4xl text-ink">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
