import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { ShoppingBag, Minus, Plus, ChevronRight } from "lucide-react"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { useStrkImages } from "@/hooks/useStrkImages"
import { formatPrice, cn } from "@/lib/utils"
import StarRating from "@/components/ui/StarRating"
import Button from "@/components/ui/Button"
import Accordion from "@/components/ui/Accordion"
import ProductCard from "@/components/product/ProductCard"

const galleryImgIds = (p) => [
  { id: `pdp-${p.id}-1`, query: `[${p.descId}] [${p.titleId}]`, ratio: "4x5" },
  { id: `pdp-${p.id}-2`, query: `[${p.descId2}] [${p.titleId}] worn on model`, ratio: "4x5" },
  { id: `pdp-${p.id}-3`, query: `[${p.descId}] [${p.titleId}] close up detail`, ratio: "4x5" },
  { id: `pdp-${p.id}-4`, query: `[${p.descId2}] [${p.titleId}] styled`, ratio: "4x5" },
]

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()
  const ref = useStrkImages([id])

  const [variant, setVariant] = useState("Gold")
  const [quantity, setQuantity] = useState(1)
  const [activeImg, setActiveImg] = useState(0)

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-serif text-4xl text-espresso">Product not found</h1>
        <Button as={Link} to="/shop" className="mt-8">
          Back to Shop
        </Button>
      </div>
    )
  }

  const gallery = galleryImgIds(product)
  const related = getRelatedProducts(product.id, 4)

  const handleAdd = () => {
    addItem(product, { variant, quantity })
  }

  const accordions = [
    {
      title: "Description",
      content: `${product.description} Designed in the Velmora studio and hand-finished to a warm, lasting glow. Each piece arrives in signature Velmora packaging, ready to be worn or gifted.`,
    },
    {
      title: "Materials & Care",
      content:
        "18K gold plate over sterling silver. Hypoallergenic, nickel-free, and tarnish-resistant. To keep your jewelry looking its best, avoid contact with water, perfume, and lotion. Store in the provided pouch and polish gently with a soft cloth.",
    },
    {
      title: "Shipping & Returns",
      content:
        "Free worldwide shipping on all orders. Orders ship within 1–2 business days and arrive in 3–7 days. Enjoy 30-day returns on unworn pieces in original packaging — no questions asked.",
    },
  ]

  return (
    <div ref={ref}>
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 pt-28 md:px-10 md:pt-32">
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-stone">
          <Link to="/" className="hover:text-gold">Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="hover:text-gold">Shop</Link>
          <ChevronRight size={12} />
          <span className="text-espresso">{product.name}</span>
        </nav>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-10 md:grid-cols-2 md:gap-16 md:px-10 md:py-14">
        {/* Gallery */}
        <div className="flex flex-col-reverse gap-4 md:flex-row">
          <div className="flex gap-3 md:flex-col">
            {gallery.map((g, i) => (
              <button
                key={g.id}
                type="button"
                onClick={() => setActiveImg(i)}
                className={cn(
                  "relative aspect-[4/5] w-16 shrink-0 overflow-hidden border bg-cream transition-colors md:w-20",
                  activeImg === i ? "border-gold" : "border-hairline"
                )}
              >
                <img
                  alt=""
                  data-strk-img-id={`${g.id}-thumb`}
                  data-strk-img={g.query}
                  data-strk-img-ratio={g.ratio}
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
          <div className="relative aspect-[4/5] flex-1 overflow-hidden bg-cream">
            <img
              alt={product.name}
              data-strk-img-id={gallery[activeImg].id}
              data-strk-img={gallery[activeImg].query}
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="md:py-4">
          {product.badge && (
            <span className="inline-block bg-cream px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-espresso">
              {product.badge}
            </span>
          )}
          <h1
            id={product.titleId}
            className="mt-4 font-serif text-4xl uppercase tracking-[0.06em] text-espresso md:text-5xl"
          >
            {product.name}
          </h1>
          <p id={product.descId} className="sr-only">{product.tagline}</p>
          <p id={product.descId2} className="sr-only">{product.description}</p>

          <div className="mt-4 flex items-center gap-3">
            <StarRating value={product.rating} size={15} />
            <span className="text-xs text-stone">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-5 font-serif text-3xl text-espresso">
            {formatPrice(product.price)}
          </p>

          <p className="mt-5 max-w-md text-sm leading-relaxed text-stone">
            {product.description}
          </p>

          {/* Variant selector */}
          <div className="mt-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-espresso">
              Tone: <span className="text-stone">{variant}</span>
            </p>
            <div className="mt-3 flex gap-3">
              {["Gold", "Silver"].map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setVariant(v)}
                  className={cn(
                    "rounded-full border px-6 py-2.5 text-[11px] font-medium uppercase tracking-[0.16em] transition-colors",
                    variant === v
                      ? "border-gold bg-gold text-white"
                      : "border-hairline text-espresso hover:border-espresso"
                  )}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-8">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-espresso">
              Quantity
            </p>
            <div className="mt-3 inline-flex items-center border border-hairline">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-4 py-3 text-espresso transition-colors hover:text-gold"
                aria-label="Decrease quantity"
              >
                <Minus size={14} />
              </button>
              <span className="w-12 text-center text-sm text-espresso">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="px-4 py-3 text-espresso transition-colors hover:text-gold"
                aria-label="Increase quantity"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <Button
            onClick={handleAdd}
            className="mt-8 w-full py-5"
          >
            <ShoppingBag size={16} />
            Add to Cart — {formatPrice(product.price * quantity)}
          </Button>

          <p className="mt-4 text-center text-[11px] text-stone">
            Free shipping · 30-day returns · Hypoallergenic
          </p>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion items={accordions} />
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="border-t border-hairline bg-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <div className="text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold">
              Complete the Look
            </p>
            <h2 className="mt-3 font-serif text-4xl text-espresso md:text-5xl">
              You May Also Like
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
