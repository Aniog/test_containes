import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Plus, Minus, ChevronDown, Check } from "lucide-react"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn } from "@/lib/utils"
import { StarRating } from "@/components/ui/StarRating"
import { Button } from "@/components/ui/Button"
import ProductCard from "@/components/product/ProductCard"
import { useStrkImages } from "@/hooks/useStrkImages"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const GALLERY = [
  { ratio: "4x5", query: "gold jewelry product on neutral background" },
  { ratio: "4x5", query: "gold jewelry worn on model close up" },
  { ratio: "4x5", query: "gold jewelry detail macro" },
  { ratio: "4x5", query: "gold jewelry styled flatlay" },
]

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-ink/10">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-ink font-medium">
          {title}
        </span>
        <ChevronDown
          size={18}
          className={cn(
            "text-ink transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-300",
          open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="text-sm text-stone leading-relaxed pr-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()
  const ref = useStrkImages([id])

  const [tone, setTone] = useState(product?.tones?.[0] || "Gold")
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center pt-20">
        <h1 className="font-serif text-4xl text-ink">Piece not found</h1>
        <p className="mt-4 text-stone">The jewelry you're looking for doesn't exist.</p>
        <Button as={Link} to="/shop" className="mt-8">
          Back to Shop
        </Button>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 4)
  const titleId = `pdp-${product.id}-title`
  const descId = `pdp-${product.id}-desc`

  const handleAddToCart = () => {
    addItem(product, { tone, quantity })
  }

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-5">
        <nav className="text-xs uppercase tracking-[0.15em] text-stone">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 md:w-24">
              {GALLERY.map((g, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  className={cn(
                    "relative w-20 h-24 md:w-full md:h-28 overflow-hidden bg-sand shrink-0 border transition-colors",
                    activeImage === i ? "border-gold" : "border-transparent"
                  )}
                >
                  <img
                    alt={`${product.name} view ${i + 1}`}
                    data-strk-img-id={`pdp-${product.id}-thumb-${i}`}
                    data-strk-img={`[${titleId}] ${g.query}`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src={PLACEHOLDER}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
            {/* Main image */}
            <div className="flex-1">
              <div className="relative aspect-[4/5] overflow-hidden bg-sand">
                <img
                  alt={product.name}
                  data-strk-img-id={`pdp-${product.id}-main-${activeImage}`}
                  data-strk-img={`[${descId}] [${titleId}] ${GALLERY[activeImage].query}`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="900"
                  src={PLACEHOLDER}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                {product.badge && (
                  <span className="absolute top-4 left-4 bg-cream/90 text-ink text-[10px] uppercase tracking-[0.18em] px-3 py-1">
                    {product.badge}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="lg:py-4">
            <h1
              id={titleId}
              className="font-serif text-3xl md:text-4xl uppercase tracking-[0.12em] text-ink leading-tight"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-4">
              <StarRating value={product.rating} size={15} />
              <span className="text-xs text-stone">
                {product.rating} · {product.reviews} reviews
              </span>
            </div>

            <p className="mt-5 text-2xl text-ink font-medium">
              {formatPrice(product.price)}
            </p>

            <p
              id={descId}
              className="mt-5 text-stone leading-relaxed"
            >
              {product.shortDescription}
            </p>

            {/* Tone selector */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.2em] text-ink mb-3">
                Tone: <span className="text-stone">{tone}</span>
              </p>
              <div className="flex gap-3">
                {product.tones.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTone(t)}
                    className={cn(
                      "px-5 py-2.5 text-xs uppercase tracking-[0.15em] border transition-colors",
                      tone === t
                        ? "border-gold bg-gold text-ink"
                        : "border-ink/25 text-ink hover:border-gold"
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.2em] text-ink mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-ink/20">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-11 h-11 flex items-center justify-center text-ink hover:bg-sand transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={15} />
                </button>
                <span className="w-12 text-center text-ink">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-11 h-11 flex items-center justify-center text-ink hover:bg-sand transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={15} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <div className="mt-8">
              <Button onClick={handleAddToCart} className="w-full">
                Add to Cart — {formatPrice(product.price * quantity)}
              </Button>
            </div>

            <div className="mt-5 flex items-center gap-2 text-xs text-stone">
              <Check size={14} className="text-gold" />
              <span>In stock · Ships within 24 hours</span>
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.materials}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>
                  Free worldwide shipping on all orders. Orders are dispatched
                  within 24 hours and typically arrive within 3–7 business days.
                  Enjoy 30-day returns on unworn pieces in original packaging —
                  no questions asked.
                </p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="py-20 md:py-24 bg-sand">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <h2 className="font-serif text-3xl md:text-4xl text-ink text-center mb-12">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
