import { useState } from "react"
import { useParams, Link, Navigate } from "react-router-dom"
import { Minus, Plus, ChevronRight, Check } from "lucide-react"
import { getProductById, getRelatedProducts, MATERIALS } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn } from "@/lib/utils"
import StarRating from "@/components/ui/StarRating"
import Accordion from "@/components/ui/Accordion"
import ProductCard from "@/components/product/ProductCard"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()

  const [material, setMaterial] = useState(product?.materials[0] || "gold")
  const [quantity, setQuantity] = useState(1)
  const [activeImg, setActiveImg] = useState(0)
  const [added, setAdded] = useState(false)

  if (!product) return <Navigate to="/shop" replace />

  const gallery = [
    { imgId: product.imgId, query: `[${product.descId}] [${product.titleId}]` },
    {
      imgId: product.imgIdAlt,
      query: `[${product.descId}] [${product.titleId}] worn on model`,
    },
  ]

  const handleAdd = () => {
    addItem(product, material, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  const related = getRelatedProducts(product.id, 4)

  const accordions = [
    {
      title: "Description",
      content: (
        <div className="space-y-3">
          <p>{product.description}</p>
          <p>
            Each piece arrives in a signature Velmora pouch — ready to gift or to
            keep.
          </p>
        </div>
      ),
    },
    {
      title: "Materials & Care",
      content: (
        <ul className="space-y-2">
          <li>• 18K gold plating over sterling silver base</li>
          <li>• Hypoallergenic, nickel & lead free</li>
          <li>• To care: avoid contact with water, perfume & lotion</li>
          <li>• Store in the provided pouch to prevent tarnish</li>
          <li>• Clean gently with a soft microfibre cloth</li>
        </ul>
      ),
    },
    {
      title: "Shipping & Returns",
      content: (
        <ul className="space-y-2">
          <li>• Free worldwide shipping on all orders</li>
          <li>• Orders dispatched within 1–2 business days</li>
          <li>• Delivery 3–7 business days (express available)</li>
          <li>• 30-day returns on unworn pieces in original packaging</li>
        </ul>
      ),
    },
  ]

  return (
    <div className="pt-16 sm:pt-20">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-5 py-5 sm:px-8">
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted">
          <Link to="/" className="hover:text-ink">Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="hover:text-ink">Shop</Link>
          <ChevronRight size={12} />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      {/* Main */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 pb-20 sm:px-8 lg:grid-cols-2 lg:gap-16">
        {/* Gallery */}
        <div className="flex flex-col-reverse gap-4 sm:flex-row">
          <div className="flex gap-3 sm:flex-col">
            {gallery.map((g, i) => (
              <button
                key={g.imgId}
                onClick={() => setActiveImg(i)}
                className={cn(
                  "relative aspect-[4/5] w-20 shrink-0 overflow-hidden bg-cream transition-all sm:w-24",
                  activeImg === i
                    ? "ring-1 ring-gold ring-offset-2 ring-offset-ivory"
                    : "opacity-60 hover:opacity-100"
                )}
                aria-label={`View image ${i + 1}`}
              >
                <img
                  data-strk-img-id={g.imgId}
                  data-strk-img={g.query}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="200"
                  src={PLACEHOLDER}
                  alt={`${product.name} thumbnail ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
          <div className="relative aspect-[4/5] flex-1 overflow-hidden bg-cream">
            <img
              data-strk-img-id={gallery[activeImg].imgId}
              data-strk-img={gallery[activeImg].query}
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src={PLACEHOLDER}
              alt={product.name}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            {product.badge && (
              <span className="absolute left-4 top-4 bg-ink/85 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-ivory">
                {product.badge}
              </span>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="lg:py-4">
          <div className="flex items-center gap-2">
            <StarRating value={product.rating} size={14} />
            <span className="text-xs text-muted">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <h1
            id={product.titleId}
            className="mt-3 font-serif text-4xl uppercase tracking-[0.1em] text-ink sm:text-5xl"
          >
            {product.name}
          </h1>
          <p id={product.descId} className="mt-2 text-sm text-muted">
            {product.tagline}
          </p>

          <p className="mt-5 font-serif text-3xl text-ink">
            {formatPrice(product.price)}
          </p>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-soft">
            {product.description}
          </p>

          {/* Variant selector */}
          <div className="mt-8">
            <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-muted">
              Tone — <span className="capitalize text-ink">{material}</span>
            </p>
            <div className="flex gap-3">
              {MATERIALS.map((m) => {
                const available = product.materials.includes(m.id)
                const selected = material === m.id
                return (
                  <button
                    key={m.id}
                    type="button"
                    disabled={!available}
                    onClick={() => setMaterial(m.id)}
                    className={cn(
                      "rounded-full border px-6 py-2.5 text-[11px] uppercase tracking-[0.18em] transition-all",
                      selected
                        ? "border-ink bg-ink text-ivory"
                        : "border-sand text-ink-soft hover:border-ink",
                      !available && "cursor-not-allowed opacity-30"
                    )}
                  >
                    {m.name}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Quantity + Add to cart */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center border border-sand">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-4 py-3.5 hover:bg-cream"
                aria-label="Decrease quantity"
              >
                <Minus size={15} strokeWidth={1.5} />
              </button>
              <span className="w-12 text-center text-sm">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-4 py-3.5 hover:bg-cream"
                aria-label="Increase quantity"
              >
                <Plus size={15} strokeWidth={1.5} />
              </button>
            </div>
            <button
              onClick={handleAdd}
              className={cn(
                "flex flex-1 items-center justify-center gap-2 py-4 text-[11px] uppercase tracking-[0.22em] transition-all",
                added
                  ? "bg-gold-deep text-ivory"
                  : "bg-gold text-ink hover:bg-gold-deep hover:text-ivory"
              )}
            >
              {added ? (
                <>
                  <Check size={15} strokeWidth={2} /> Added to Cart
                </>
              ) : (
                `Add to Cart — ${formatPrice(product.price * quantity)}`
              )}
            </button>
          </div>

          <p className="mt-4 text-xs text-muted">
            Free worldwide shipping · 30-day returns · Hypoallergenic
          </p>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion items={accordions} />
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="border-t border-sand bg-cream py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-12 text-center sm:mb-16">
            <p className="mb-3 text-[11px] uppercase tracking-[0.28em] text-gold">
              Complete the Look
            </p>
            <h2 className="font-serif text-4xl font-light text-ink sm:text-5xl">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-6 md:grid-cols-4">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
