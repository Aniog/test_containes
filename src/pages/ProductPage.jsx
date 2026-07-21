import React, { useState, useEffect, useRef } from "react"
import { useParams, Link } from "react-router-dom"
import { Minus, Plus, ShoppingBag, ChevronRight } from "lucide-react"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { useReveal } from "@/hooks/useReveal"
import { formatPrice, cn } from "@/lib/utils"
import StarRating from "@/components/ui/StarRating"
import Accordion from "@/components/ui/Accordion"
import ProductCard from "@/components/product/ProductCard"


export default function ProductPage() {
  const { id } = useParams()
  const product = getProductById(id)
  const containerRef = useRef(null)
  const { ref, visible } = useReveal()

  const [activeImage, setActiveImage] = useState(0)
  const [variant, setVariant] = useState(product?.variants[0] || "Gold")
  const [quantity, setQuantity] = useState(1)
  const { addItem, openCart } = useCart()

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [id])

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-32 text-center">
        <h1 className="font-serif text-4xl text-ink">Product not found</h1>
        <Link
          to="/shop"
          className="mt-6 inline-block font-sans text-[11px] uppercase tracking-[0.2em] text-gold underline-offset-8 hover:underline"
        >
          Back to Shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 4)

  const handleAdd = () => {
    addItem(product, { variant, quantity })
  }

  const accordions = [
    { title: "Description", content: product.description },
    { title: "Materials & Care", content: `${product.materials} ${product.care}` },
    {
      title: "Shipping & Returns",
      content:
        "Free worldwide shipping on all orders. Orders ship within 1–2 business days and arrive in 3–7 days depending on location. Enjoy 30-day returns on unworn pieces in their original packaging.",
    },
  ]

  return (
    <div ref={containerRef} className="bg-ivory pt-24 md:pt-28">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <nav className="flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.18em] text-muted">
          <Link to="/" className="hover:text-gold">Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="hover:text-gold">Shop</Link>
          <ChevronRight size={12} />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="mx-auto mt-8 grid max-w-7xl grid-cols-1 gap-10 px-5 sm:px-8 md:grid-cols-2 md:gap-16">
        {/* Gallery */}
        <div className="flex flex-col-reverse gap-4 md:flex-row">
          {/* Thumbnails */}
          <div className="flex gap-3 md:flex-col">
            {product.images.map((img, i) => (
              <button
                key={img.imgId}
                type="button"
                onClick={() => setActiveImage(i)}
                className={cn(
                  "relative aspect-[4/5] w-16 shrink-0 overflow-hidden bg-sand/40 transition-all md:w-20",
                  activeImage === i
                    ? "ring-1 ring-gold ring-offset-2 ring-offset-ivory"
                    : "opacity-60 hover:opacity-100"
                )}
                aria-label={`View image ${i + 1}`}
              >
                <img
                  alt={`${product.name} thumbnail ${i + 1}`}
                  data-strk-img-id={`${img.imgId}-thumb`}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main image */}
          <div className="relative flex-1 overflow-hidden bg-sand/40 aspect-[4/5]">
            <img
              alt={product.name}
              data-strk-img-id={`${product.images[activeImage].imgId}-main`}
              data-strk-img={`[${product.descId}] [${product.titleId}]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="h-full w-full object-cover"
            />
            {product.badge && (
              <span className="absolute left-4 top-4 bg-cream/90 px-3 py-1 font-sans text-[10px] uppercase tracking-[0.2em] text-espresso backdrop-blur-sm">
                {product.badge}
              </span>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="md:py-4">
          <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold">
            {product.categoryLabel}
          </p>
          <h1
            id={product.titleId}
            className="mt-3 font-serif text-3xl uppercase tracking-[0.1em] text-ink md:text-4xl"
          >
            {product.name}
          </h1>

          <div className="mt-4 flex items-center gap-3">
            <StarRating value={product.rating} size={15} />
            <span className="font-sans text-xs text-muted">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-5 font-serif text-3xl text-ink">
            {formatPrice(product.price)}
          </p>

          <p
            id={product.descId}
            className="mt-5 font-sans text-sm leading-relaxed text-stone"
          >
            {product.shortDesc}
          </p>

          {/* Variant selector */}
          <div className="mt-8">
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted">
              Tone — <span className="text-ink">{variant}</span>
            </p>
            <div className="mt-3 flex gap-3">
              {product.variants.map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setVariant(v)}
                  className={cn(
                    "min-w-24 border px-5 py-3 font-sans text-[11px] uppercase tracking-[0.18em] transition-all",
                    variant === v
                      ? "border-gold bg-gold text-cream"
                      : "border-ink/25 text-ink hover:border-gold hover:text-gold"
                  )}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-8">
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted">
              Quantity
            </p>
            <div className="mt-3 inline-flex items-center border border-ink/25">
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
            className="mt-8 flex w-full items-center justify-center gap-2 bg-gold py-4 font-sans text-[11px] uppercase tracking-[0.2em] text-cream transition-colors hover:bg-gold-deep"
          >
            <ShoppingBag size={15} />
            Add to Cart — {formatPrice(product.price * quantity)}
          </button>

          <p className="mt-4 font-sans text-xs text-muted">
            Free shipping · 30-day returns · Hypoallergenic
          </p>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion items={accordions} />
          </div>
        </div>
      </div>

      {/* Related */}
      <section ref={ref} className={`reveal ${visible ? "is-visible" : ""} mt-24 border-t border-sand/60 py-20 md:mt-32 md:py-28`}>
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="text-center">
            <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold">
              Complete the Look
            </p>
            <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
              You May Also Like
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-6 md:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
