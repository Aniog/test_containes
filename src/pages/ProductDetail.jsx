import React, { useEffect, useMemo, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { ChevronDown, Minus, Plus, RotateCcw, ShieldCheck, Truck } from "lucide-react"
import { useCart } from "@/context/CartContext"
import { StockImage } from "@/components/StockImage"
import StarRating from "@/components/product/StarRating"
import ProductCard from "@/components/product/ProductCard"
import { getProduct, getRelated } from "@/data/products"
import { cn, formatPrice } from "@/lib/utils"

const GALLERY_VIEWS = [
  { key: "hero", query: "hero product shot on warm ivory silk background" },
  { key: "worn", query: "worn on model close up warm golden light editorial" },
  { key: "macro", query: "extreme macro detail of texture and clasp on neutral background" },
  { key: "styled", query: "styled flat lay with silk ribbon and warm shadows" },
]

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-line">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-[12px] font-medium uppercase tracking-[0.24em] text-foreground">
          {title}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-muted-foreground transition-transform duration-300",
            open && "rotate-180",
          )}
          strokeWidth={1.5}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-500 ease-luxe",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <p className="pb-6 text-sm leading-relaxed text-muted-foreground">{children}</p>
        </div>
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { productId } = useParams()
  const product = getProduct(productId)
  const { addItem } = useCart()
  const [variant, setVariant] = useState("gold")
  const [quantity, setQuantity] = useState(1)
  const [view, setView] = useState("hero")

  useEffect(() => {
    setVariant("gold")
    setQuantity(1)
    setView("hero")
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [productId])

  const related = useMemo(() => getRelated(product, 4), [product])

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-5 pt-24 text-center">
        <h1 className="font-serif text-3xl font-light text-foreground">Piece not found</h1>
        <Link
          to="/shop"
          className="bg-accent px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.24em] text-accent-foreground transition-colors hover:bg-accent-deep"
        >
          Back to the Collection
        </Link>
      </div>
    )
  }

  const activeView = GALLERY_VIEWS.find((v) => v.key === view) ?? GALLERY_VIEWS[0]

  return (
    <div className="pt-16 md:pt-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <nav className="py-5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <Link to="/" className="transition-colors hover:text-foreground">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="transition-colors hover:text-foreground">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid gap-10 pb-16 md:pb-24 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="aspect-[4/5] overflow-hidden bg-surface">
              {view === "hero" ? (
                <img
                  key={`${product.id}-hero`}
                  src={product.image}
                  alt={`${product.name} — hero`}
                  loading="eager"
                  className="h-full w-full animate-fade-in object-cover"
                />
              ) : (
                <StockImage
                  key={`${product.id}-${view}`}
                  imgId={`pdp-${product.id}-thumb-${view}`}
                  query={`${product.tagline} ${product.name} fine gold jewelry ${activeView.query}`}
                  ratio="4x5"
                  width={1000}
                  alt={`${product.name} — ${activeView.key}`}
                  eager
                  className="animate-fade-in"
                />
              )}
            </div>
            <div className="mt-4 grid grid-cols-4 gap-3">
              {GALLERY_VIEWS.map((v) => (
                <button
                  key={v.key}
                  type="button"
                  onClick={() => setView(v.key)}
                  aria-label={`View ${v.key}`}
                  className={cn(
                    "aspect-square overflow-hidden border bg-surface transition-all duration-300",
                    view === v.key
                      ? "border-accent-deep"
                      : "border-transparent opacity-70 hover:opacity-100",
                  )}
                >
                  <StockImage
                    imgId={`pdp-${product.id}-thumb-${v.key}`}
                    query={`${product.tagline} ${product.name} fine gold jewelry ${v.query}`}
                    ratio="1x1"
                    width={240}
                    alt=""
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:py-4">
            {product.badge && (
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-accent-deep">
                {product.badge}
              </p>
            )}
            <h1 className="mt-2 font-serif text-3xl font-medium uppercase leading-tight tracking-[0.08em] text-foreground md:text-4xl">
              {product.name}
            </h1>
            <p className="mt-2 text-sm italic text-muted-foreground">{product.tagline}</p>

            <div className="mt-4 flex items-center gap-3">
              <StarRating rating={product.rating} size={15} />
              <span className="text-xs text-muted-foreground">
                {product.rating.toFixed(1)} · {product.reviews} reviews
              </span>
            </div>

            <div className="mt-5 flex items-baseline gap-3">
              <span className="font-serif text-3xl text-foreground">{formatPrice(product.price)}</span>
              {product.compareAt && (
                <span className="text-sm text-muted-foreground line-through">
                  {formatPrice(product.compareAt)}
                </span>
              )}
            </div>

            <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
              {product.description}
            </p>

            <div className="mt-8">
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-foreground">
                Finish — <span className="text-muted-foreground">{variant === "gold" ? "Gold Tone" : "Silver Tone"}</span>
              </p>
              <div className="mt-3 flex gap-2.5">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setVariant(v)}
                    className={cn(
                      "border px-6 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] transition-all duration-300",
                      variant === v
                        ? "border-foreground bg-foreground text-background"
                        : "border-foreground/25 text-foreground hover:border-foreground",
                    )}
                  >
                    {v === "gold" ? "Gold" : "Silver"}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <div className="flex items-center border border-foreground/25">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="flex h-12 w-11 items-center justify-center text-foreground/70 transition-colors hover:text-foreground"
                >
                  <Minus className="h-4 w-4" strokeWidth={1.5} />
                </button>
                <span className="w-10 text-center text-sm font-medium">{quantity}</span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQuantity((q) => Math.min(99, q + 1))}
                  className="flex h-12 w-11 items-center justify-center text-foreground/70 transition-colors hover:text-foreground"
                >
                  <Plus className="h-4 w-4" strokeWidth={1.5} />
                </button>
              </div>
              <button
                type="button"
                onClick={() => addItem(product.id, { variant, quantity })}
                className="flex-1 bg-accent text-[11px] font-medium uppercase tracking-[0.28em] text-accent-foreground transition-colors duration-300 hover:bg-accent-deep"
              >
                Add to Bag — {formatPrice(product.price * quantity)}
              </button>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 border-y border-line py-5">
              {[
                { icon: Truck, label: "Free Shipping" },
                { icon: RotateCcw, label: "30-Day Returns" },
                { icon: ShieldCheck, label: "Hypoallergenic" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-2 text-center">
                  <Icon className="h-4 w-4 text-accent-deep" strokeWidth={1.5} />
                  <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-foreground/80">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-2">
              <Accordion title="Description" defaultOpen>
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">{product.materials}</Accordion>
              <Accordion title="Shipping & Returns">{product.shipping}</Accordion>
            </div>
          </div>
        </div>
      </div>

      <section className="border-t border-line bg-surface/60 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="text-center font-serif text-3xl font-light text-foreground md:text-4xl">
            You May Also <span className="italic text-accent-deep">Like</span>
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:mt-12 md:grid-cols-4 md:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} context="related" />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
