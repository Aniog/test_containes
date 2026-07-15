import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Minus, Plus, ShoppingBag, ChevronRight } from "lucide-react"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { useStrkImages } from "@/lib/useStrkImages"
import { formatPrice, cn } from "@/lib/utils"
import StarRating from "@/components/ui/StarRating"
import Accordion from "@/components/ui/Accordion"
import ProductCard from "@/components/product/ProductCard"

const TONES = ["Gold", "Silver"]

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()
  const ref = useStrkImages([id])

  const [tone, setTone] = useState("Gold")
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center">
        <h1 className="font-serif text-3xl text-charcoal">Piece not found</h1>
        <Link to="/shop" className="text-[11px] uppercase tracking-widest2 text-gold hover:text-gold-deep">
          Back to Shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 4)
  const gallery = product.images

  const handleAdd = () => {
    addItem(product, { quantity, tone })
  }

  const accordions = [
    { title: "Description", content: product.description },
    { title: "Materials & Care", content: `${product.details} ${product.care}` },
    {
      title: "Shipping & Returns",
      content:
        "Free worldwide shipping on all orders. Orders are dispatched within 1–2 business days and arrive in signature Velmora packaging. Enjoy 30-day returns on unworn pieces in their original packaging.",
    },
  ]

  return (
    <div ref={ref}>
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 pt-28 md:px-10 md:pt-32">
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-stone">
          <Link to="/" className="hover:text-charcoal">Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="hover:text-charcoal">Shop</Link>
          <ChevronRight size={12} />
          <span className="text-charcoal">{product.name}</span>
        </nav>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-10 md:grid-cols-2 md:gap-16 md:px-10 md:py-14">
        {/* Gallery */}
        <div className="flex flex-col gap-4 md:flex-row-reverse">
          <div className="relative aspect-[3/4] flex-1 overflow-hidden bg-cream-deep">
            <img
              alt={product.name}
              data-strk-img-id={`pdp-main-${gallery[activeImage].imgId}`}
              data-strk-img={`[${gallery[activeImage].descId}] [${gallery[activeImage].titleId}] gold jewelry product editorial warm`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex gap-3 md:flex-col">
            {gallery.map((img, i) => (
              <button
                key={img.imgId}
                type="button"
                onClick={() => setActiveImage(i)}
                className={cn(
                  "relative aspect-[3/4] w-20 shrink-0 overflow-hidden border bg-cream-deep transition-colors md:w-24",
                  activeImage === i ? "border-gold" : "border-transparent hover:border-sand"
                )}
              >
                <img
                  alt={`${product.name} thumbnail ${i + 1}`}
                  data-strk-img-id={`pdp-thumb-${img.imgId}`}
                  data-strk-img={`[${img.descId}] [${img.titleId}] gold jewelry product editorial warm`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="md:py-4">
          {product.badge && (
            <span className="inline-block bg-cream-deep px-3 py-1 text-[10px] uppercase tracking-widest2 text-charcoal">
              {product.badge}
            </span>
          )}
          <h1
            id={gallery[0].titleId}
            className="mt-4 font-serif text-3xl uppercase tracking-widest2 text-charcoal md:text-4xl"
          >
            {product.name}
          </h1>
          <p id={gallery[0].descId} className="sr-only">
            {product.tagline}
          </p>

          <div className="mt-4 flex items-center gap-3">
            <span className="font-serif text-2xl text-charcoal">
              {formatPrice(product.price)}
            </span>
          </div>

          <div className="mt-3 flex items-center gap-2">
            <StarRating rating={product.rating} size={14} />
            <span className="text-xs text-stone">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-stone">
            {product.description}
          </p>

          {/* Tone selector */}
          <div className="mt-8">
            <p className="mb-3 text-[11px] uppercase tracking-widest2 text-charcoal">
              Tone: <span className="text-stone">{tone}</span>
            </p>
            <div className="flex gap-3">
              {TONES.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTone(t)}
                  className={cn(
                    "border px-6 py-2.5 text-[11px] uppercase tracking-widest2 transition-colors",
                    tone === t
                      ? "border-charcoal bg-charcoal text-cream"
                      : "border-sand text-charcoal hover:border-charcoal"
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Add to cart */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <div className="flex items-center border border-sand">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-4 py-3 text-charcoal hover:bg-cream-deep"
                aria-label="Decrease quantity"
              >
                <Minus size={14} />
              </button>
              <span className="w-12 text-center text-sm text-charcoal">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="px-4 py-3 text-charcoal hover:bg-cream-deep"
                aria-label="Increase quantity"
              >
                <Plus size={14} />
              </button>
            </div>
            <button
              type="button"
              onClick={handleAdd}
              className="flex flex-1 items-center justify-center gap-2 bg-gold py-4 text-[11px] uppercase tracking-widest2 text-cream transition-colors hover:bg-gold-deep"
            >
              <ShoppingBag size={15} /> Add to Cart — {formatPrice(product.price * quantity)}
            </button>
          </div>

          <p className="mt-4 text-xs text-stone">
            Free shipping · 30-day returns · Hypoallergenic
          </p>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion items={accordions} />
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="border-t border-sand bg-cream-deep py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-12 text-center">
            <p className="text-[11px] uppercase tracking-widest3 text-gold">Complete the Look</p>
            <h2 className="mt-3 font-serif text-4xl text-charcoal md:text-5xl">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
