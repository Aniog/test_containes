import { useEffect, useRef, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { Minus, Plus, ChevronRight } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn } from "@/lib/utils"
import StarRating from "@/components/ui/StarRating"
import Accordion from "@/components/ui/Accordion"
import ProductCard from "@/components/product/ProductCard"


const TONES = ["Gold", "Silver"]

const GALLERY = [
  { id: "g1", ratio: "4x5", ctx: "product on neutral background" },
  { id: "g2", ratio: "4x5", ctx: "product worn on model" },
  { id: "g3", ratio: "4x5", ctx: "product detail close up" },
  { id: "g4", ratio: "4x5", ctx: "product styled flat lay" },
]

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = getProductById(id)
  const { addItem } = useCart()
  const containerRef = useRef(null)
  const relatedRef = useRef(null)

  const [tone, setTone] = useState("Gold")
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [id])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, relatedRef.current)
  }, [id])

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
        <h1 className="font-serif text-4xl text-ink">Piece not found</h1>
        <p className="mt-3 font-sans text-sm text-stone">
          The piece you're looking for may have moved.
        </p>
        <button
          onClick={() => navigate("/shop")}
          className="mt-6 bg-gold px-8 py-3 font-sans text-[11px] uppercase tracking-widest2 text-cream hover:bg-gold-deep"
        >
          Back to Shop
        </button>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 4)

  const handleAdd = () => {
    addItem(product, { quantity, tone })
  }

  const accordionItems = [
    {
      title: "Description",
      content: (
        <div>
          <p className="mb-3">{product.description}</p>
          <ul className="space-y-1.5">
            {product.details.map((d, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-gold">—</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      title: "Materials & Care",
      content: (
        <div>
          <p className="mb-2">
            <span className="text-ink">Material:</span> {product.material}
          </p>
          <p>{product.care}</p>
        </div>
      ),
    },
    {
      title: "Shipping & Returns",
      content: (
        <div>
          <p className="mb-2">
            Free worldwide shipping on all orders. Orders are dispatched within
            1–2 business days and arrive in signature Velmora packaging.
          </p>
          <p>
            Enjoy 30-day returns on unworn pieces in their original packaging.
            Refunds are processed within 5 business days of receipt.
          </p>
        </div>
      ),
    },
  ]

  return (
    <div ref={containerRef} className="pt-24">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 py-6 md:px-10">
        <nav className="flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest2 text-stone">
          <Link to="/" className="hover:text-ink">Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="hover:text-ink">Shop</Link>
          <ChevronRight size={12} />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      {/* Main */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pb-20 md:grid-cols-2 md:gap-16 md:px-10 md:pb-28">
        {/* Gallery */}
        <div className="flex flex-col-reverse gap-4 md:flex-row">
          {/* Thumbnails */}
          <div className="flex gap-3 md:flex-col">
            {GALLERY.map((g, i) => (
              <button
                key={g.id}
                type="button"
                onClick={() => setActiveImage(i)}
                className={cn(
                  "relative aspect-[4/5] w-16 shrink-0 overflow-hidden bg-sand transition-opacity md:w-20",
                  activeImage === i ? "opacity-100 ring-1 ring-gold" : "opacity-60 hover:opacity-100"
                )}
              >
                <img
                  alt={`${product.name} view ${i + 1}`}
                  data-strk-img-id={`${product.id}-thumb-${g.id}`}
                  data-strk-img={`[${product.descId}] [${product.titleId}] ${g.ctx}`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main image */}
          <div className="relative flex-1 overflow-hidden bg-sand aspect-[4/5]">
            <img
              alt={product.name}
              data-strk-img-id={`${product.id}-main-${GALLERY[activeImage].id}`}
              data-strk-img={`[${product.descId}] [${product.titleId}] ${GALLERY[activeImage].ctx}`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="md:py-4">
          <p className="font-sans text-xs uppercase tracking-widest2 text-gold">
            {product.category}
          </p>
          <h1
            id={product.titleId}
            className="mt-3 font-serif text-4xl uppercase tracking-wide2 text-ink md:text-5xl"
          >
            {product.name}
          </h1>
          <p
            id={product.descId}
            className="mt-2 font-sans text-sm text-stone"
          >
            {product.tagline}
          </p>

          <div className="mt-4 flex items-center gap-3">
            <StarRating value={product.rating} size={15} />
            <span className="font-sans text-xs text-stone">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-6 font-serif text-3xl text-ink">
            {formatPrice(product.price)}
          </p>

          <p className="mt-5 font-sans text-sm leading-relaxed text-stone">
            {product.description}
          </p>

          {/* Tone selector */}
          <div className="mt-8">
            <p className="font-sans text-[11px] uppercase tracking-widest2 text-ink">
              Tone: <span className="text-stone">{tone}</span>
            </p>
            <div className="mt-3 flex gap-3">
              {TONES.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTone(t)}
                  className={cn(
                    "px-6 py-2.5 font-sans text-[11px] uppercase tracking-widest2 transition-colors",
                    tone === t
                      ? "border border-gold bg-gold text-cream"
                      : "border border-ink/20 text-ink hover:border-ink"
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <p className="font-sans text-[11px] uppercase tracking-widest2 text-ink">
              Quantity
            </p>
            <div className="mt-3 inline-flex items-center border border-ink/20">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-4 py-3 text-ink transition-colors hover:text-gold"
                aria-label="Decrease quantity"
              >
                <Minus size={14} />
              </button>
              <span className="min-w-10 text-center font-sans text-sm text-ink">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="px-4 py-3 text-ink transition-colors hover:text-gold"
                aria-label="Increase quantity"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <button
            type="button"
            onClick={handleAdd}
            className="mt-8 w-full bg-gold py-4 font-sans text-[11px] uppercase tracking-widest2 text-cream transition-colors duration-300 hover:bg-gold-deep"
          >
            Add to Cart — {formatPrice(product.price * quantity)}
          </button>

          <p className="mt-4 text-center font-sans text-[11px] text-stone">
            Free shipping · 30-day returns · Hypoallergenic
          </p>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion items={accordionItems} defaultOpen={0} />
          </div>
        </div>
      </div>

      {/* Related */}
      <section ref={relatedRef} className="border-t border-ink/10 bg-sand py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <h2 className="mb-10 text-center font-serif text-3xl text-ink md:text-4xl">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4 md:gap-x-6">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
