import { useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { Plus, Minus, ChevronDown, ChevronUp, ShoppingBag } from "lucide-react"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn, TRANSPARENT_PIXEL } from "@/lib/utils"
import { useStrkImages } from "@/lib/useStrkImages"
import Stars from "@/components/ui/Stars"
import ProductCard from "@/components/product/ProductCard"

const PLACEHOLDER = TRANSPARENT_PIXEL

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-champagne">
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-[12px] uppercase tracking-widest2 text-ink">{title}</span>
        {open ? <ChevronUp className="h-4 w-4 text-ink" /> : <ChevronDown className="h-4 w-4 text-ink" />}
      </button>
      {open && <div className="pb-6 text-sm leading-relaxed text-stone">{children}</div>}
    </div>
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = getProductById(id)
  const { addItem } = useCart()
  const ref = useStrkImages([id])

  const [variant, setVariant] = useState(product?.variants[0] ?? "Gold")
  const [quantity, setQuantity] = useState(1)
  const [activeImg, setActiveImg] = useState(0)

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-5 text-center">
        <h1 className="font-serif text-3xl text-ink">Piece not found</h1>
        <Link to="/shop" className="text-[11px] uppercase tracking-widest2 text-gold hover:text-gold-deep">
          ← Back to Shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 4)
  const gallery = [
    { imgId: product.imgId, ratio: "4x5" },
    { imgId: product.imgId2, ratio: "4x5" },
  ]

  const handleAdd = () => {
    addItem(product, variant, quantity)
  }

  return (
    <div ref={ref} className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-editorial px-5 py-6 md:px-8">
        <nav className="text-[11px] uppercase tracking-widest2 text-stone">
          <Link to="/" className="hover:text-gold">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="mx-auto grid max-w-editorial grid-cols-1 gap-10 px-5 pb-20 md:grid-cols-2 md:gap-14 md:px-8">
        {/* Gallery */}
        <div className="flex flex-col-reverse gap-4 md:flex-row">
          <div className="flex gap-3 md:flex-col">
            {gallery.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveImg(i)}
                className={cn(
                  "h-20 w-16 overflow-hidden border bg-sand md:h-24 md:w-20",
                  activeImg === i ? "border-gold" : "border-champagne",
                )}
              >
                <img
                  alt=""
                  data-strk-img-id={`${img.imgId}-thumb`}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="200"
                  src={PLACEHOLDER}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
          <div className="flex-1 overflow-hidden bg-sand">
            <img
              alt={product.name}
              data-strk-img-id={gallery[activeImg].imgId}
              data-strk-img={`[${product.descId}] [${product.titleId}]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src={PLACEHOLDER}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="md:py-4">
          {product.badge && (
            <span className="inline-block bg-sand px-3 py-1 text-[10px] uppercase tracking-widest2 text-ink">
              {product.badge}
            </span>
          )}
          <h1
            id={product.titleId}
            className="mt-3 font-serif text-3xl uppercase tracking-[0.14em] text-ink md:text-4xl"
          >
            {product.name}
          </h1>
          <p id={product.descId} className="mt-2 text-sm text-stone">
            {product.subtitle}
          </p>

          <div className="mt-4 flex items-center gap-2">
            <Stars rating={product.rating} size={14} />
            <span className="text-xs text-stone">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-5 font-serif text-2xl text-ink">{formatPrice(product.price)}</p>

          <p className="mt-5 text-sm leading-relaxed text-stone">{product.description}</p>

          {/* Variant selector */}
          <div className="mt-7">
            <p className="text-[11px] uppercase tracking-widest2 text-ink">
              Tone: <span className="text-stone">{variant}</span>
            </p>
            <div className="mt-3 flex gap-3">
              {product.variants.map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setVariant(v)}
                  className={cn(
                    "min-w-24 border px-5 py-3 text-[11px] uppercase tracking-widest2 transition-colors",
                    variant === v
                      ? "border-ink bg-ink text-cream"
                      : "border-champagne text-ink hover:border-ink",
                  )}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-7">
            <p className="text-[11px] uppercase tracking-widest2 text-ink">Quantity</p>
            <div className="mt-3 inline-flex items-center border border-champagne">
              <button
                type="button"
                aria-label="Decrease quantity"
                className="px-4 py-3 text-ink hover:text-gold"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-10 text-center text-sm text-ink">{quantity}</span>
              <button
                type="button"
                aria-label="Increase quantity"
                className="px-4 py-3 text-ink hover:text-gold"
                onClick={() => setQuantity((q) => q + 1)}
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <button
            type="button"
            onClick={handleAdd}
            className="mt-7 flex w-full items-center justify-center gap-2 bg-gold py-4 text-[11px] uppercase tracking-widest2 text-white transition-colors hover:bg-gold-deep"
          >
            <ShoppingBag className="h-4 w-4" /> Add to Cart — {formatPrice(product.price * quantity)}
          </button>
          <p className="mt-3 text-center text-xs text-stone">
            Free shipping · 30-day returns · Ships in 1–2 business days
          </p>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion title="Description" defaultOpen>
              <p>{product.description}</p>
              <p className="mt-3">{product.details}</p>
            </Accordion>
            <Accordion title="Materials & Care">
              <p>{product.details}</p>
              <p className="mt-3">{product.care}</p>
            </Accordion>
            <Accordion title="Shipping & Returns">
              <p>Free worldwide shipping on all orders. Orders are dispatched within 1–2 business days and arrive in signature Velmora packaging.</p>
              <p className="mt-3">Enjoy 30-day returns on unworn pieces in their original packaging. Start a return anytime from your order confirmation email.</p>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="border-t border-champagne bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-editorial px-5 md:px-8">
          <h2 className="mb-10 text-center font-serif text-3xl text-ink md:text-4xl">
            You May Also Like
          </h2>
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
