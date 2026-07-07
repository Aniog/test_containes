import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn, resolveImg } from "@/lib/utils"
import Stars from "@/components/ui/Stars"
import ProductCard from "@/components/product/ProductCard"
import { Plus, Minus, ChevronDown } from "lucide-react"

const ACCORDIONS = [
  { key: "description", label: "Description" },
  { key: "details", label: "Materials & Care" },
  { key: "shipping", label: "Shipping & Returns" },
]

const SHIPPING_TEXT =
  "Free worldwide shipping on all orders. Orders are processed within 1–2 business days and typically arrive within 5–10 business days. Enjoy 30-day returns on unworn items in original packaging."

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-ink">{title}</span>
        <ChevronDown
          className={cn("h-4 w-4 text-ink transition-transform duration-300", open && "rotate-180")}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-300",
          open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <p className="text-sm leading-relaxed text-stone">{children}</p>
        </div>
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addToCart } = useCart()

  const [color, setColor] = useState(product?.colors[0] || "Gold")
  const [qty, setQty] = useState(1)
  const [activeImg, setActiveImg] = useState(0)

  useEffect(() => {
    if (product) {
      setColor(product.colors[0])
      setQty(1)
      setActiveImg(0)
    }
  }, [id, product])

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-5 text-center">
        <h1 className="font-serif text-3xl text-ink">Piece not found</h1>
        <Link to="/shop" className="text-sm uppercase tracking-[0.2em] text-gold hover:underline">
          Back to Shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 4)
  const gallery = [product.imgId1, product.imgId2]

  const handleAdd = () => addToCart(product, color, qty)

  return (
    <div className="bg-cream pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-5 py-6 md:px-8">
        <nav className="text-xs uppercase tracking-[0.15em] text-stone">
          <Link to="/" className="hover:text-ink">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-ink">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 md:grid-cols-2 md:gap-16 md:px-8">
        {/* Gallery */}
        <div className="flex flex-col-reverse gap-4 md:flex-row">
          <div className="flex gap-3 md:flex-col">
            {gallery.map((imgId, i) => (
              <button
                key={imgId}
                type="button"
                onClick={() => setActiveImg(i)}
                className={cn(
                  "relative aspect-[4/5] w-20 overflow-hidden bg-sand transition-opacity md:w-24",
                  activeImg === i ? "ring-1 ring-ink" : "opacity-60 hover:opacity-100"
                )}
              >
                <img
                  alt={`${product.name} thumbnail ${i + 1}`}
                  src={resolveImg(imgId, i)}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
          <div className="relative flex-1 overflow-hidden bg-sand">
            <img
              alt={product.name}
              src={resolveImg(gallery[activeImg], activeImg)}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="md:py-4">
          {product.badges && product.badges.length > 0 && (
            <div className="mb-3 flex gap-2">
              {product.badges.map((b) => (
                <span
                  key={b}
                  className="border border-gold px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] text-gold"
                >
                  {b}
                </span>
              ))}
            </div>
          )}
          <h1
            id={product.titleId}
            className="font-serif text-3xl uppercase tracking-[0.14em] text-ink md:text-4xl"
          >
            {product.name}
          </h1>
          <p id={product.descId} className="sr-only">
            {product.tagline}
          </p>
          <p className="mt-2 text-sm text-stone">{product.tagline}</p>

          <div className="mt-4 flex items-center gap-3">
            <Stars rating={product.rating} size={15} />
            <span className="text-xs text-stone">
              {product.rating.toFixed(1)} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-5 font-serif text-2xl text-ink">{formatPrice(product.price)}</p>

          <p className="mt-5 text-sm leading-relaxed text-stone">{product.description}</p>

          {/* Color variant */}
          <div className="mt-7">
            <p className="text-xs uppercase tracking-[0.2em] text-ink">
              Tone: <span className="text-stone">{color}</span>
            </p>
            <div className="mt-3 flex gap-3">
              {product.colors.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setColor(c)}
                  className={cn(
                    "rounded-full border px-5 py-2 text-xs uppercase tracking-wider transition-colors",
                    color === c
                      ? "border-ink bg-ink text-cream"
                      : "border-line text-ink hover:border-ink"
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Add */}
          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center border border-line">
              <button
                type="button"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="px-3 py-3 text-ink hover:text-gold"
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-10 text-center text-sm text-ink">{qty}</span>
              <button
                type="button"
                onClick={() => setQty((q) => q + 1)}
                className="px-3 py-3 text-ink hover:text-gold"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              type="button"
              onClick={handleAdd}
              className="flex-1 bg-gold py-4 text-xs uppercase tracking-[0.2em] text-cream transition-colors hover:bg-gold-soft"
            >
              Add to Cart — {formatPrice(product.price * qty)}
            </button>
          </div>

          <p className="mt-4 text-xs text-stone">
            Free shipping · 30-day returns · Hypoallergenic
          </p>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion title="Description" defaultOpen>
              {product.description} {product.details}
            </Accordion>
            <Accordion title="Materials & Care">
              {product.details} {product.care}
            </Accordion>
            <Accordion title="Shipping & Returns">{SHIPPING_TEXT}</Accordion>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="border-t border-line bg-sand/40 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="mb-10 text-center font-serif text-3xl text-ink md:text-4xl">
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
