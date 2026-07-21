import React, { useEffect, useMemo, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { ChevronRight, Heart, Minus, Plus, Star, Truck, RefreshCw, Sparkles, ShieldCheck } from "lucide-react"
import { findProduct } from "../data/products"
import { useCart } from "../lib/cart"
import { formatPrice, cn } from "../lib/utils"
import ProductGallery from "../components/product/ProductGallery"
import Accordion from "../components/ui/Accordion"
import RelatedProducts from "../components/product/RelatedProducts"
import { toast } from "sonner"

const toneOptions = [
  { id: "gold", label: "18K Gold" },
  { id: "silver", label: "Sterling Silver" },
]

function Stars({ value }) {
  return (
    <div className="flex items-center gap-0.5 text-champagne-700">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn("h-3.5 w-3.5", i < Math.round(value) ? "fill-champagne text-champagne" : "text-ink/20")}
          strokeWidth={0}
        />
      ))}
    </div>
  )
}

export default function Product() {
  const { productId } = useParams()
  const product = useMemo(() => findProduct(productId), [productId])
  const { addItem, openCart } = useCart()
  const [tone, setTone] = useState(product?.tone || "gold")
  const [qty, setQty] = useState(1)
  const [wishlisted, setWishlisted] = useState(false)

  useEffect(() => {
    setTone(product?.tone || "gold")
    setQty(1)
  }, [productId, product?.tone])

  if (!product) {
    return (
      <section className="bg-bone-50 pt-40 pb-32 text-center">
        <p className="text-[10px] uppercase tracking-[0.24em] text-ink/60">Not found</p>
        <h1 className="mt-3 font-serif text-4xl text-ink">This piece has slipped away.</h1>
        <p className="mx-auto mt-3 max-w-md text-sm text-ink/65">
          The piece you're looking for is no longer available. Browse the full collection instead.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-flex items-center justify-center bg-ink px-7 py-4 text-[11px] font-medium uppercase tracking-[0.24em] text-bone"
        >
          Shop all jewelry
        </Link>
      </section>
    )
  }

  const onAddToCart = () => {
    addItem(product.id, tone, qty)
    toast.success(`${product.name} added to your bag`)
    openCart()
  }

  return (
    <>
      <section className="bg-bone-50 pt-28 md:pt-32">
        <div className="mx-auto max-w-editorial px-6 pb-4 md:px-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-ink/55">
            <Link to="/" className="hover:text-ink">Home</Link>
            <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
            <Link to="/shop" className="hover:text-ink">Shop</Link>
            <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
            <span className="text-ink/80">{product.name}</span>
          </nav>
        </div>
      </section>

      <section className="bg-bone-50 pb-20 md:pb-24">
        <div className="mx-auto grid max-w-editorial grid-cols-1 gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-10">
          <ProductGallery product={product} />

          <div className="md:sticky md:top-28 md:self-start">
            <p className="text-[10px] uppercase tracking-[0.32em] text-champagne-700">
              {product.badge || "Velmora"}
            </p>
            <h1 className="mt-3 font-serif text-3xl uppercase tracking-[0.16em] text-ink md:text-4xl">
              {product.name}
            </h1>
            <p className="mt-2 text-sm text-ink/60">{product.subtitle}</p>

            <div className="mt-4 flex items-center gap-3">
              <Stars value={product.rating} />
              <span className="text-[11px] uppercase tracking-[0.18em] text-ink/60">
                {product.rating.toFixed(1)} · {product.reviews} reviews
              </span>
            </div>

            <p className="mt-6 text-2xl tabular-nums text-ink">{formatPrice(product.price)}</p>

            <p className="mt-6 max-w-[52ch] text-[15px] leading-relaxed text-ink/75">
              {product.description}
            </p>

            <div className="mt-8">
              <p className="text-[10px] uppercase tracking-[0.24em] text-ink/65">Finish</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {toneOptions.map((opt) => (
                  <button
                    type="button"
                    key={opt.id}
                    onClick={() => setTone(opt.id)}
                    className={cn(
                      "border px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] transition-all duration-300",
                      tone === opt.id
                        ? "border-ink bg-ink text-bone"
                        : "border-ink/25 text-ink hover:border-ink"
                    )}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-[10px] uppercase tracking-[0.24em] text-ink/65">Quantity</p>
              <div className="mt-3 inline-flex items-center border border-ink/20">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="flex h-11 w-11 items-center justify-center text-ink hover:bg-ink/5"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" strokeWidth={1.5} />
                </button>
                <span className="w-10 text-center text-sm tabular-nums">{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.min(9, q + 1))}
                  className="flex h-11 w-11 items-center justify-center text-ink hover:bg-ink/5"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={onAddToCart}
                className="flex-1 bg-ink py-4 text-[11px] font-medium uppercase tracking-[0.28em] text-bone transition-opacity duration-300 hover:opacity-90"
              >
                Add to Cart · {formatPrice(product.price * qty)}
              </button>
              <button
                type="button"
                onClick={() => {
                  setWishlisted((w) => !w)
                  toast.success(wishlisted ? "Removed from wishlist" : "Saved to your wishlist")
                }}
                className={cn(
                  "flex h-[52px] w-[52px] flex-shrink-0 items-center justify-center border transition-colors duration-300",
                  wishlisted
                    ? "border-claret bg-claret/5 text-claret"
                    : "border-ink/25 text-ink hover:border-ink"
                )}
                aria-label="Save to wishlist"
              >
                <Heart className={cn("h-4 w-4", wishlisted && "fill-current")} strokeWidth={1.5} />
              </button>
            </div>

            <ul className="mt-8 grid grid-cols-2 gap-4 border-t border-ink/10 pt-6 text-[11px] uppercase tracking-[0.18em] text-ink/65 sm:grid-cols-4">
              <li className="flex items-center gap-2"><Truck className="h-3.5 w-3.5 text-champagne-700" strokeWidth={1.5} /> Free ship $75+</li>
              <li className="flex items-center gap-2"><RefreshCw className="h-3.5 w-3.5 text-champagne-700" strokeWidth={1.5} /> 30-day returns</li>
              <li className="flex items-center gap-2"><Sparkles className="h-3.5 w-3.5 text-champagne-700" strokeWidth={1.5} /> 18K gold plated</li>
              <li className="flex items-center gap-2"><ShieldCheck className="h-3.5 w-3.5 text-champagne-700" strokeWidth={1.5} /> Hypoallergenic</li>
            </ul>

            <div className="mt-10">
              <Accordion
                items={[
                  {
                    title: "Description",
                    content: product.description,
                  },
                  {
                    title: "Materials & Care",
                    content: (
                      <>
                        <ul className="list-disc space-y-2 pl-5 text-[15px] text-ink/75 marker:text-champagne-700">
                          {product.details.map((d) => (
                            <li key={d}>{d}</li>
                          ))}
                        </ul>
                        <p className="mt-4 text-[15px] leading-relaxed text-ink/75">
                          {product.materials_care}
                        </p>
                      </>
                    ),
                  },
                  {
                    title: "Shipping & Returns",
                    content: product.shipping_returns,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <RelatedProducts productId={product.id} />
    </>
  )
}
