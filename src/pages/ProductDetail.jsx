import { useEffect, useRef, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { Minus, Plus, ShoppingBag, ChevronRight } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn } from "@/lib/utils"
import StarRating from "@/components/ui/StarRating"
import Accordion from "@/components/ui/Accordion"
import ProductCard from "@/components/product/ProductCard"

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = getProductById(id)
  const { addItem } = useCart()
  const ref = useRef(null)
  const relatedRef = useRef(null)

  const [tone, setTone] = useState(product?.tones?.[0] || "Gold")
  const [quantity, setQuantity] = useState(1)
  const [activeImg, setActiveImg] = useState(0)

  useEffect(() => {
    setTone(product?.tones?.[0] || "Gold")
    setQuantity(1)
    setActiveImg(0)
    window.scrollTo(0, 0)
  }, [id, product])

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
      ImageHelper.loadImages(strkImgConfig, relatedRef.current)
    })
    return () => cancelAnimationFrame(frame)
  }, [id, activeImg])

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 pt-24 text-center">
        <h1 className="font-serif text-3xl text-ink">Piece not found</h1>
        <Link to="/shop" className="text-gold underline">
          Back to shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(id, 4)

  const handleAdd = () => {
    addItem(product, { tone, quantity })
  }

  const accordionItems = [
    { title: "Description", content: product.description },
    { title: "Materials & Care", content: product.materials },
    { title: "Shipping & Returns", content: product.shipping },
  ]

  return (
    <div ref={ref} className="pt-20">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-content px-6 py-6 md:px-10">
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-stone">
          <Link to="/" className="hover:text-ink">Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="hover:text-ink">Shop</Link>
          <ChevronRight size={12} />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="mx-auto grid max-w-content gap-10 px-6 pb-20 md:grid-cols-2 md:gap-16 md:px-10 lg:gap-20">
        {/* Gallery */}
        <div className="flex flex-col-reverse gap-4 md:flex-row">
          <div className="flex gap-3 md:flex-col">
            {product.gallery.map((gId, i) => (
              <button
                key={gId}
                onClick={() => setActiveImg(i)}
                className={cn(
                  "h-20 w-16 shrink-0 overflow-hidden border bg-cream md:h-24 md:w-20",
                  activeImg === i ? "border-gold" : "border-transparent opacity-70"
                )}
              >
                <img
                  alt={`${product.name} thumbnail ${i + 1}`}
                  data-strk-img-id={gId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
          <div className="relative flex-1 overflow-hidden bg-cream">
            <img
              alt={product.name}
              data-strk-img-id={product.gallery[activeImg]}
              data-strk-img={`[${product.descId}] [${product.titleId}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="aspect-[3/4] w-full object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="md:py-4">
          <p className="text-[11px] uppercase tracking-widest2 text-gold">
            {product.type}
          </p>
          <h1
            id={product.titleId}
            className="mt-3 font-serif text-3xl uppercase tracking-widest3 text-ink md:text-4xl"
          >
            {product.name}
          </h1>
          <p id={product.descId} className="sr-only">
            {product.shortDesc}
          </p>

          <div className="mt-4 flex items-center gap-3">
            <StarRating rating={product.rating} size={15} />
            <span className="text-xs text-stone">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-5 font-serif text-2xl text-ink">
            {formatPrice(product.price)}
          </p>

          <p className="mt-5 text-sm leading-relaxed text-stone">
            {product.shortDesc}
          </p>

          {/* Tone selector */}
          <div className="mt-8">
            <p className="text-[11px] uppercase tracking-widest2 text-stone">
              Tone: <span className="text-ink">{tone}</span>
            </p>
            <div className="mt-3 flex gap-3">
              {product.tones.map((t) => (
                <button
                  key={t}
                  onClick={() => setTone(t)}
                  className={cn(
                    "rounded-full border px-6 py-2.5 text-[11px] uppercase tracking-widest2 transition-colors",
                    tone === t
                      ? "border-ink bg-ink text-ivory"
                      : "border-ink/25 text-ink hover:border-ink"
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-8">
            <p className="text-[11px] uppercase tracking-widest2 text-stone">Quantity</p>
            <div className="mt-3 inline-flex items-center border border-ink/20">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-4 py-3 text-ink hover:text-gold"
                aria-label="Decrease quantity"
              >
                <Minus size={14} />
              </button>
              <span className="w-12 text-center text-sm text-ink">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-4 py-3 text-ink hover:text-gold"
                aria-label="Increase quantity"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <button
            onClick={handleAdd}
            className="mt-8 flex w-full items-center justify-center gap-2 bg-gold py-4 text-[11px] uppercase tracking-widest2 text-ink transition-colors hover:bg-gold-deep hover:text-ivory"
          >
            <ShoppingBag size={15} />
            Add to Cart — {formatPrice(product.price * quantity)}
          </button>

          <p className="mt-4 text-center text-[11px] uppercase tracking-widest2 text-stone">
            Free shipping · 30-day returns
          </p>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion items={accordionItems} />
          </div>
        </div>
      </div>

      {/* Related */}
      <section ref={relatedRef} className="border-t border-ink/10 bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-content px-6 md:px-10">
          <h2 className="mb-10 text-center font-serif text-3xl font-light text-ink md:text-4xl">
            You May Also Like
          </h2>
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
