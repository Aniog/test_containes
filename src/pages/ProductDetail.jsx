import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Minus, Plus, ShoppingBag, ChevronRight } from "lucide-react"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import StarRating from "@/components/StarRating"
import Accordion from "@/components/Accordion"
import ProductCard from "@/components/ProductCard"
import ImageLoader, { PLACEHOLDER } from "@/components/ImageLoader"

const TONES = ["Gold", "Silver"]

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { add } = useCart()

  const [tone, setTone] = useState("Gold")
  const [qty, setQty] = useState(1)
  const [activeImg, setActiveImg] = useState(0)

  if (!product) {
    return (
      <div className="mx-auto max-w-editorial px-6 py-32 text-center">
        <h1 className="font-serif text-3xl text-ink">Piece not found</h1>
        <Link to="/shop" className="btn-outline mt-6">Back to Shop</Link>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 4)
  // Gallery uses the two config-registered image slots (primary + hover).
  // IDs are passed as static literals below so the strk-img build plugin can
  // extract and resolve them at build time.
  const handleAdd = () => add(product, { tone, qty })

  return (
    <ImageLoader className="pt-16 md:pt-20" deps={[id, activeImg]}>
      {/* Breadcrumb */}
      <div className="mx-auto max-w-editorial px-6 md:px-10 py-6">
        <nav className="flex items-center gap-2 text-xs uppercase tracking-widest2 text-stone">
          <Link to="/" className="hover:text-ink">Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="hover:text-ink">Shop</Link>
          <ChevronRight size={12} />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="mx-auto grid max-w-editorial grid-cols-1 gap-10 px-6 md:grid-cols-2 md:px-10 md:gap-16">
        {/* Gallery */}
        <div className="flex flex-col-reverse gap-4 md:flex-row">
          <div className="flex gap-3 md:flex-col">
            <button
              type="button"
              onClick={() => setActiveImg(0)}
              className={`h-20 w-16 overflow-hidden bg-sand border ${
                activeImg === 0 ? "border-gold" : "border-transparent"
              }`}
            >
              <img
                alt={`${product.name} thumbnail 1`}
                data-strk-img-id={product.imgId}
                data-strk-img={`[pd-name] [pd-desc] gold jewelry`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="160"
                src={PLACEHOLDER}
                className="h-full w-full object-cover"
              />
            </button>
            <button
              type="button"
              onClick={() => setActiveImg(1)}
              className={`h-20 w-16 overflow-hidden bg-sand border ${
                activeImg === 1 ? "border-gold" : "border-transparent"
              }`}
            >
              <img
                alt={`${product.name} thumbnail 2`}
                data-strk-img-id={product.hoverImgId}
                data-strk-img={`[pd-name] [pd-desc] gold jewelry worn`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="160"
                src={PLACEHOLDER}
                className="h-full w-full object-cover"
              />
            </button>
          </div>
          <div className="flex-1">
            <div className="relative aspect-[4/5] overflow-hidden bg-sand">
              <img
                alt={product.name}
                data-strk-img-id={activeImg === 0 ? product.imgId : product.hoverImgId}
                data-strk-img={`[pd-name] [pd-desc] gold jewelry`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src={PLACEHOLDER}
                className="h-full w-full object-cover"
              />
              {product.badge && (
                <span className="absolute left-4 top-4 bg-cream/90 text-ink text-[10px] uppercase tracking-widest2 px-3 py-1">
                  {product.badge}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="md:py-4">
          <p className="eyebrow">{product.material}</p>
          <h1
            id="pd-name"
            className="mt-2 font-serif text-3xl uppercase tracking-widest3 text-ink md:text-4xl"
          >
            {product.name}
          </h1>
          <p id="pd-desc" className="sr-only">{product.shortDesc}</p>

          <div className="mt-3 flex items-center gap-3">
            <StarRating value={product.rating} size={16} />
            <span className="text-sm text-stone">
              {product.rating.toFixed(1)} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-5 font-serif text-3xl text-ink">{formatPrice(product.price)}</p>

          <p className="mt-5 text-sm leading-relaxed text-stone">{product.shortDesc}</p>

          {/* Tone selector */}
          <div className="mt-8">
            <p className="text-xs uppercase tracking-widest2 text-ink">Tone</p>
            <div className="mt-3 flex gap-3">
              {TONES.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTone(t)}
                  className={`px-6 py-3 text-xs uppercase tracking-widest2 transition-colors duration-300 ${
                    tone === t
                      ? "bg-ink text-cream"
                      : "border border-line text-ink hover:border-ink"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <p className="text-xs uppercase tracking-widest2 text-ink">Quantity</p>
            <div className="mt-3 inline-flex items-center border border-line">
              <button
                type="button"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="px-4 py-3 text-ink hover:text-gold"
                aria-label="Decrease quantity"
              >
                <Minus size={14} />
              </button>
              <span className="min-w-10 text-center text-sm text-ink">{qty}</span>
              <button
                type="button"
                onClick={() => setQty((q) => q + 1)}
                className="px-4 py-3 text-ink hover:text-gold"
                aria-label="Increase quantity"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          <button type="button" onClick={handleAdd} className="btn-primary mt-8 w-full">
            <ShoppingBag size={16} className="mr-2" /> Add to Cart — {formatPrice(product.price * qty)}
          </button>

          <p className="mt-4 text-center text-xs text-stone">
            Free worldwide shipping · 30-day returns · Hypoallergenic
          </p>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion
              items={[
                { title: "Description", content: <p>{product.description}</p> },
                {
                  title: "Materials & Care",
                  content: (
                    <div>
                      <p className="mb-2"><strong className="text-ink">Material:</strong> {product.material}</p>
                      <p>{product.care}</p>
                    </div>
                  ),
                },
                {
                  title: "Shipping & Returns",
                  content: (
                    <div>
                      <p className="mb-2">Free worldwide shipping on all orders. Orders are dispatched within 1–2 business days and arrive in signature Velmora packaging.</p>
                      <p>Enjoy 30-day returns on unworn pieces in their original packaging.</p>
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="mx-auto max-w-editorial px-6 py-20 md:px-10 md:py-28">
        <div className="text-center">
          <p className="eyebrow">Continue Exploring</p>
          <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">You May Also Like</h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-x-8">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </ImageLoader>
  )
}
