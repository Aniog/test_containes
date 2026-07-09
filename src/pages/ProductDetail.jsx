import { useState } from "react"
import { useParams, Link, Navigate } from "react-router-dom"
import { Minus, Plus, ShoppingBag, ChevronRight } from "lucide-react"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { useStrkImages } from "@/lib/useStrkImages"
import { formatPrice, cn } from "@/lib/utils"
import StarRating from "@/components/ui/StarRating"
import Accordion from "@/components/ui/Accordion"
import Button from "@/components/ui/Button"
import ProductCard from "@/components/product/ProductCard"


const TONES = [
  { id: "gold", label: "Gold" },
  { id: "silver", label: "Silver" },
]

// Gallery thumbnails — reuse product image ids with distinct query contexts.
function buildGallery(product) {
  return [
    {
      imgId: `${product.imgId}-g1`,
      query: `[${product.descId}] [${product.titleId}] product on neutral background`,
    },
    {
      imgId: `${product.imgIdAlt}-g2`,
      query: `[${product.descId}] [${product.titleId}] worn styled`,
    },
    {
      imgId: `${product.imgId}-g3`,
      query: `[${product.descId}] [${product.titleId}] detail closeup`,
    },
    {
      imgId: `${product.imgIdAlt}-g4`,
      query: `[${product.descId}] [${product.titleId}] flat lay`,
    },
  ]
}

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addToCart } = useCart()
  const ref = useStrkImages([id])

  const [tone, setTone] = useState("gold")
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const gallery = buildGallery(product)
  const related = getRelatedProducts(product.id, 4)

  const handleAddToCart = () => {
    addToCart(product, { tone, quantity })
  }

  return (
    <div ref={ref} className="pt-24 md:pt-28">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-8xl px-5 py-6 md:px-8">
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-taupe">
          <Link to="/" className="transition-colors hover:text-gold">Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="transition-colors hover:text-gold">Shop</Link>
          <ChevronRight size={12} />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      {/* Main */}
      <div className="mx-auto grid max-w-8xl gap-10 px-5 pb-20 md:grid-cols-2 md:gap-14 md:px-8 md:pb-28">
        {/* Gallery */}
        <div className="flex flex-col-reverse gap-4 md:flex-row">
          {/* Thumbnails */}
          <div className="flex gap-3 md:flex-col">
            {gallery.map((img, i) => (
              <button
                key={img.imgId}
                type="button"
                onClick={() => setActiveImage(i)}
                className={cn(
                  "relative aspect-square w-16 flex-shrink-0 overflow-hidden border bg-sand/40 transition-colors md:w-20",
                  activeImage === i ? "border-gold" : "border-transparent hover:border-sand"
                )}
                aria-label={`View image ${i + 1}`}
              >
                <img
                  alt=""
                  data-strk-img-id={`${img.imgId}-thumb`}
                  data-strk-img={img.query}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main image */}
          <div className="relative aspect-[4/5] flex-1 overflow-hidden bg-sand/40">
            <img
              alt={product.name}
              data-strk-img-id={gallery[activeImage].imgId}
              data-strk-img={gallery[activeImage].query}
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="h-full w-full object-cover"
            />
            {product.badge && (
              <span className="absolute left-4 top-4 bg-cream/90 px-3 py-1 text-[10px] uppercase tracking-widest2 text-ink">
                {product.badge}
              </span>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="md:py-4">
          <p className="text-[11px] uppercase tracking-widest3 text-taupe">
            {product.category}
          </p>
          <h1
            id={product.titleId}
            className="mt-3 font-serif text-3xl uppercase tracking-widest2 text-ink md:text-4xl"
          >
            {product.name}
          </h1>

          <div className="mt-4 flex items-center gap-3">
            <StarRating value={product.rating} size={15} />
            <span className="text-sm text-taupe">
              {product.rating.toFixed(1)} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-6 font-serif text-3xl text-ink">
            {formatPrice(product.price)}
          </p>

          <p
            id={product.descId}
            className="mt-6 max-w-md text-base leading-relaxed text-taupe"
          >
            {product.shortDescription}
          </p>

          {/* Tone selector */}
          <div className="mt-8">
            <p className="text-[11px] uppercase tracking-widest2 text-taupe">
              Tone
            </p>
            <div className="mt-3 flex gap-3">
              {TONES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTone(t.id)}
                  className={cn(
                    "min-w-24 border px-5 py-2.5 text-[11px] uppercase tracking-widest2 transition-colors",
                    tone === t.id
                      ? "border-ink bg-ink text-ivory"
                      : "border-sand text-ink hover:border-ink"
                  )}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <p className="text-[11px] uppercase tracking-widest2 text-taupe">
              Quantity
            </p>
            <div className="mt-3 inline-flex items-center border border-sand">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
                className="px-3 py-3 text-ink transition-colors hover:text-gold"
              >
                <Minus size={15} />
              </button>
              <span className="min-w-10 text-center text-sm text-ink">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Increase quantity"
                className="px-3 py-3 text-ink transition-colors hover:text-gold"
              >
                <Plus size={15} />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <div className="mt-8">
            <Button onClick={handleAddToCart} size="lg" className="w-full">
              <ShoppingBag size={16} className="mr-2" />
              Add to Cart — {formatPrice(product.price * quantity)}
            </Button>
          </div>

          <p className="mt-4 text-xs text-taupe">
            Free worldwide shipping · 30-day returns · Ships in 1–2 business days
          </p>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion
              items={[
                { title: "Description", content: product.description },
                { title: "Materials & Care", content: `${product.materials} ${product.care}` },
                {
                  title: "Shipping & Returns",
                  content:
                    "Free worldwide shipping on all orders. Orders are dispatched within 1–2 business days and arrive in signature Velmora packaging. Enjoy 30-day returns on unworn pieces — no questions asked.",
                },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="border-t border-sand bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-8xl px-5 md:px-8">
          <div className="mb-10 text-center">
            <p className="text-[11px] uppercase tracking-widest3 text-taupe">
              Complete the Look
            </p>
            <h2 className="mt-3 font-serif text-3xl text-ink md:text-4xl">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4 md:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
