import { useEffect, useMemo, useRef, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { ChevronRight, Heart, Minus, Plus, RotateCcw, Star, Truck } from "lucide-react"
import { toast } from "sonner"
import { getProduct, relatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { SVG_PLACEHOLDER } from "@/components/StrkImage"
import { ProductCard } from "@/components/product/ProductCard"
import { PdpImageRegistry } from "@/components/product/PdpImageRegistry"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Reveal } from "@/components/Reveal"
import { cn } from "@/lib/utils"

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProduct(id)
  const { addItem } = useCart()
  const [variant, setVariant] = useState("Gold")
  const [qty, setQty] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [wishlisted, setWishlisted] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [activeImage])

  const gallery = useMemo(() => {
    if (!product) return []
    return [
      { key: "main", imgId: `card-${product.id}-main-x7k2`, alt: product.name },
      { key: "worn", imgId: `card-${product.id}-alt-m4p9`, alt: `${product.name} worn` },
      { key: "macro", imgId: `pdp-${product.id}-macro-l3m7`, alt: `${product.name} detail` },
    ]
  }, [product])

  if (!product) {
    return (
      <div className="container flex min-h-[60vh] flex-col items-center justify-center gap-4 pt-24 text-center">
        <h1 className="font-serif text-3xl text-ink">This piece has sold out</h1>
        <Button asChild>
          <Link to="/shop">Back to Shop</Link>
        </Button>
      </div>
    )
  }

  const titleId = `pdp-${product.id}-title`
  const descId = `pdp-${product.id}-short`
  const related = relatedProducts(product)

  const handleAdd = () => {
    addItem(product.id, variant, qty)
    toast.success(`${product.name} added to your bag`)
  }

  return (
    <div ref={containerRef} className="pt-16 md:pt-20">
      <div className="container py-6 md:py-10">
        <nav className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-ink-soft">
          <Link to="/" className="transition-colors hover:text-ink">Home</Link>
          <ChevronRight className="size-3" />
          <Link to="/shop" className="transition-colors hover:text-ink">Shop</Link>
          <ChevronRight className="size-3" />
          <span className="text-ink">{product.name}</span>
        </nav>

        <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-cream">
              <img
                key={gallery[activeImage].imgId}
                data-strk-img-id={gallery[activeImage].imgId}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1000"
                src={SVG_PLACEHOLDER}
                alt={gallery[activeImage].alt}
                className="h-full w-full object-cover"
              />
              {product.badge && (
                <span className="absolute left-4 top-4 rounded-sm bg-ivory/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink backdrop-blur-sm">
                  {product.badge}
                </span>
              )}
            </div>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {gallery.map((img, i) => (
                <button
                  key={img.key}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  className={cn(
                    "aspect-square overflow-hidden rounded-sm bg-cream transition-all duration-300",
                    activeImage === i ? "ring-1 ring-bronze ring-offset-2 ring-offset-ivory" : "opacity-60 hover:opacity-100"
                  )}
                >
                  <img
                    data-strk-img-id={img.imgId}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="300"
                    src={SVG_PLACEHOLDER}
                    alt={img.alt}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-bronze md:text-[11px]">
              {product.category}
            </p>
            <h1
              id={titleId}
              className="mt-3 font-serif text-3xl font-medium uppercase leading-tight tracking-[0.08em] text-ink md:text-5xl"
            >
              {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "size-4",
                      i < Math.round(product.rating) ? "fill-bronze text-bronze" : "fill-sand text-sand"
                    )}
                  />
                ))}
              </div>
              <span className="text-xs text-ink-soft">
                {product.rating} · {product.reviews} reviews
              </span>
            </div>

            <p className="mt-5 font-serif text-3xl font-medium text-ink">${product.price}</p>

            <p id={descId} className="mt-5 text-sm leading-relaxed text-ink-soft md:text-base">
              {product.short}
            </p>

            <div className="mt-7">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink">
                Finish — <span className="text-ink-soft">{variant}</span>
              </p>
              <div className="mt-3 flex gap-2">
                {["Gold", "Silver"].map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setVariant(v)}
                    className={cn(
                      "rounded-full border px-6 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] transition-all duration-300",
                      variant === v
                        ? "border-ink bg-ink text-ivory"
                        : "border-line bg-transparent text-ink hover:border-ink/50"
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-7">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink">Quantity</p>
              <div className="mt-3 inline-flex items-center border border-line">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="flex size-11 items-center justify-center text-ink-soft transition-colors hover:text-ink"
                >
                  <Minus className="size-4" />
                </button>
                <span className="w-10 text-center text-sm font-medium text-ink">{qty}</span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQty((q) => q + 1)}
                  className="flex size-11 items-center justify-center text-ink-soft transition-colors hover:text-ink"
                >
                  <Plus className="size-4" />
                </button>
              </div>
            </div>

            <div className="mt-8 flex gap-2">
              <Button size="lg" className="flex-1" onClick={handleAdd}>
                Add to Bag — ${(product.price * qty).toFixed(0)}
              </Button>
              <button
                type="button"
                aria-label="Add to wishlist"
                onClick={() => {
                  setWishlisted((w) => !w)
                  toast.success(wishlisted ? "Removed from wishlist" : "Saved to your wishlist")
                }}
                className={cn(
                  "flex size-12 shrink-0 items-center justify-center rounded-sm border transition-colors",
                  wishlisted ? "border-bronze text-bronze" : "border-line text-ink hover:border-ink/50"
                )}
              >
                <Heart className={cn("size-5", wishlisted && "fill-bronze")} />
              </button>
            </div>

            <div className="mt-6 space-y-2.5 border-t border-line pt-6">
              <p className="flex items-center gap-2.5 text-xs text-ink-soft">
                <Truck className="size-4 text-bronze" />
                Free worldwide shipping on orders over $75
              </p>
              <p className="flex items-center gap-2.5 text-xs text-ink-soft">
                <RotateCcw className="size-4 text-bronze" />
                30-day returns, no questions asked
              </p>
            </div>

            <Accordion type="single" collapsible defaultValue="description" className="mt-8">
              <AccordionItem value="description">
                <AccordionTrigger>Description</AccordionTrigger>
                <AccordionContent>{product.description}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="materials">
                <AccordionTrigger>Materials & Care</AccordionTrigger>
                <AccordionContent>{product.materials}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger>Shipping & Returns</AccordionTrigger>
                <AccordionContent>
                  Orders ship within 1–2 business days from our Lisbon atelier. Free worldwide shipping on orders
                  over $75 (otherwise a flat $6). Not in love? Return or exchange within 30 days for a full refund —
                  we'll even cover the label.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <section className="mt-20 border-t border-line pt-14 md:mt-28 md:pt-20">
          <Reveal className="text-center">
            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-bronze md:text-[11px]">
              Complete the Look
            </p>
            <h2 className="mt-3 font-serif text-3xl font-medium text-ink md:text-4xl">You May Also Like</h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4">
            {related.map((p, i) => (
              <Reveal key={p.id} delay={i * 70}>
                <ProductCard product={p} compact />
              </Reveal>
            ))}
          </div>
        </section>
      </div>
      <PdpImageRegistry />
    </div>
  )
}
