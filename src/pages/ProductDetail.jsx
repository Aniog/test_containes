import React, { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Star, Plus, Minus, ChevronDown, Check } from "lucide-react"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import ProductCard from "@/components/product/ProductCard"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const TONES = [
  { id: "gold", label: "Gold Tone" },
  { id: "silver", label: "Silver Tone" },
]

const ACCORDIONS = [
  { key: "description", label: "Description" },
  { key: "materials", label: "Materials & Care" },
  { key: "shipping", label: "Shipping & Returns" },
]

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()

  const [tone, setTone] = useState(product?.tone || "gold")
  const [qty, setQty] = useState(1)
  const [activeImg, setActiveImg] = useState(0)
  const [openAcc, setOpenAcc] = useState("description")
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h1 className="font-serif text-4xl text-espresso">Piece not found</h1>
        <Link to="/shop" className="mt-6 inline-block text-gold underline underline-offset-4">
          Back to shop
        </Link>
      </div>
    )
  }

  const gallery = product.gallery

  const handleAdd = () => {
    addItem(product, { tone, qty })
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1600)
  }

  const related = getRelatedProducts(product.id, 4)

  return (
    <div className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-6 pb-2">
        <nav className="text-[11px] uppercase tracking-[0.18em] text-stone">
          <Link to="/" className="hover:text-espresso">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-espresso">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-espresso">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-8 md:py-12 grid md:grid-cols-2 gap-8 md:gap-14">
        {/* Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-3 md:w-20">
            {gallery.map((g, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveImg(i)}
                className={`relative w-16 md:w-20 aspect-[3/4] bg-cream overflow-hidden border-2 transition-colors ${
                  activeImg === i ? "border-gold" : "border-transparent hover:border-hairline"
                }`}
                aria-label={`View image ${i + 1}`}
              >
                <img
                  alt=""
                  data-strk-img-id={g.imgId}
                  data-strk-img={g.q}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="200"
                  src={PLACEHOLDER}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main image */}
          <div className="flex-1 relative aspect-[3/4] bg-cream overflow-hidden">
            <img
              alt={product.name}
              data-strk-img-id={gallery[activeImg].imgId}
              data-strk-img={gallery[activeImg].q}
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
              src={PLACEHOLDER}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {product.badge && (
              <span className="absolute top-4 left-4 bg-ivory/90 text-espresso text-[10px] uppercase tracking-[0.18em] px-3 py-1.5">
                {product.badge}
              </span>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="md:py-4">
          <h1 className="font-serif text-3xl md:text-4xl uppercase tracking-[0.12em] text-espresso leading-tight">
            {product.name}
          </h1>

          <div className="mt-3 flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.round(product.rating)
                      ? "fill-gold text-gold"
                      : "text-hairline"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-stone">
              {product.rating.toFixed(1)} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-5 font-serif text-2xl text-espresso">
            {formatPrice(product.price)}
          </p>

          <p className="mt-5 text-espresso-soft leading-relaxed">
            {product.short}
          </p>

          {/* Tone selector */}
          <div className="mt-8">
            <p className="text-[11px] uppercase tracking-[0.2em] text-stone mb-3">
              Finish
            </p>
            <div className="flex gap-3">
              {TONES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTone(t.id)}
                  className={`px-6 py-3 text-[11px] uppercase tracking-[0.18em] border transition-colors ${
                    tone === t.id
                      ? "border-espresso bg-espresso text-ivory"
                      : "border-hairline text-espresso hover:border-espresso"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Add to cart */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <div className="flex items-center border border-hairline">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-12 h-12 flex items-center justify-center text-espresso hover:bg-cream transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-12 text-center text-espresso">{qty}</span>
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() => setQty((q) => q + 1)}
                className="w-12 h-12 flex items-center justify-center text-espresso hover:bg-cream transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <button
              type="button"
              onClick={handleAdd}
              className="flex-1 bg-gold text-ivory uppercase tracking-[0.18em] text-xs py-4 hover:bg-gold-deep transition-colors flex items-center justify-center gap-2"
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" /> Added to Bag
                </>
              ) : (
                `Add to Bag · ${formatPrice(product.price * qty)}`
              )}
            </button>
          </div>

          <p className="mt-4 text-xs text-stone">
            Free worldwide shipping · 30-day returns · Ships in 24 hours
          </p>

          {/* Accordions */}
          <div className="mt-10 border-t border-hairline">
            {ACCORDIONS.map((acc) => {
              const isOpen = openAcc === acc.key
              return (
                <div key={acc.key} className="border-b border-hairline">
                  <button
                    type="button"
                    onClick={() => setOpenAcc(isOpen ? "" : acc.key)}
                    className="w-full flex items-center justify-between py-5 text-left"
                  >
                    <span className="text-[11px] uppercase tracking-[0.2em] text-espresso">
                      {acc.label}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-espresso transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm text-espresso-soft leading-relaxed pr-6">
                        {product[acc.key]}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Hidden text reference for image queries */}
      <span id={product.descId} className="sr-only">{product.short}</span>

      {/* Related */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl text-espresso">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 md:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
