import { useEffect, useMemo, useRef, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { ChevronLeft, Minus, Plus, ShoppingBag, Check } from "lucide-react"
import Accordion from "@/components/ui/Accordion"
import StarRating from "@/components/ui/StarRating"
import ProductCard from "@/components/product/ProductCard"
import { findProductById, relatedProducts } from "@/data/products"
import { cn, formatPrice } from "@/lib/utils"
import { useCart } from "@/context/CartContext"

export default function ProductDetail() {
  const { id } = useParams()
  const product = findProductById(id)
  const containerRef = useRef(null)
  const { addItem, openCart } = useCart()

  const [activeImage, setActiveImage] = useState(0)
  const [variant, setVariant] = useState(product?.variants?.[0]?.id || null)
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const related = useMemo(() => relatedProducts(product, 4), [product])

  useEffect(() => {
    setActiveImage(0)
    setVariant(product?.variants?.[0]?.id || null)
    setQuantity(1)
    setAdded(false)
  }, [product?.id])

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [product?.id, activeImage])

  if (!product) {
    return (
      <div className="mx-auto max-w-[800px] px-6 md:px-10 pt-32 pb-24 text-center">
        <span className="eyebrow">Not found</span>
        <h1 className="mt-4 font-serif text-3xl md:text-4xl text-espresso">
          We couldn’t find that piece.
        </h1>
        <Link to="/shop" className="btn btn-primary mt-8 inline-flex">
          Back to Shop
        </Link>
      </div>
    )
  }

  const selectedVariant =
    product.variants.find((v) => v.id === variant) || product.variants[0]

  const handleAdd = () => {
    addItem(product, selectedVariant, quantity)
    setAdded(true)
    window.setTimeout(() => setAdded(false), 2400)
  }

  const accordionItems = [
    {
      title: "Description",
      content: <p>{product.description}</p>,
    },
    {
      title: "Materials & Care",
      content: (
        <ul className="list-disc pl-5 space-y-1.5">
          {product.materialsAndCare.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      ),
    },
    {
      title: "Shipping & Returns",
      content: (
        <ul className="list-disc pl-5 space-y-1.5">
          {product.shippingAndReturns.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      ),
    },
  ]

  return (
    <div ref={containerRef} className="bg-ivory">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 pt-28 md:pt-32">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted hover:text-espresso"
        >
          <ChevronLeft size={12} strokeWidth={1.5} />
          Back to Shop
        </Link>
      </div>

      {/* Main */}
      <section className="mx-auto max-w-[1400px] px-6 md:px-10 pt-8 md:pt-12 pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-12 gap-4">
              <div className="hidden md:flex md:col-span-2 flex-col gap-3">
                {product.gallery.map((image, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImage(idx)}
                    aria-label={`View image ${idx + 1}`}
                    className={cn(
                      "relative aspect-[4/5] overflow-hidden bg-ivory-soft border transition-colors",
                      activeImage === idx
                        ? "border-espresso"
                        : "border-hairline hover:border-espresso-soft",
                    )}
                  >
                    <img
                      data-strk-img-id={`pdp-thumb-${product.id}-${idx}`}
                      data-strk-img={image.query}
                      data-strk-img-ratio={image.ratioKey || "4x5"}
                      data-strk-img-width="240"
                      alt={`${product.name} thumbnail ${idx + 1}`}
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>

              <div className="col-span-12 md:col-span-10">
                <div className="relative aspect-[4/5] overflow-hidden bg-ivory-soft">
                  <img
                    key={`pdp-main-${activeImage}-${product.id}`}
                    data-strk-img-id={`pdp-main-${product.id}-${activeImage}`}
                    data-strk-img={product.gallery[activeImage]?.query}
                    data-strk-img-ratio={product.gallery[activeImage]?.ratioKey || "4x5"}
                    data-strk-img-width="1200"
                    alt={`${product.name} — view ${activeImage + 1}`}
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover"
                  />
                  {product.badge && (
                    <span className="absolute left-4 top-4 bg-ivory/95 px-3 py-1.5 text-[10px] tracking-[0.22em] uppercase text-espresso">
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Mobile thumbnails */}
                <div className="md:hidden mt-4 flex gap-3 overflow-x-auto no-scrollbar">
                  {product.gallery.map((image, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImage(idx)}
                      aria-label={`View image ${idx + 1}`}
                      className={cn(
                        "relative shrink-0 w-20 aspect-[4/5] overflow-hidden bg-ivory-soft border",
                        activeImage === idx
                          ? "border-espresso"
                          : "border-hairline",
                      )}
                    >
                      <img
                        data-strk-img-id={`pdp-thumbm-${product.id}-${idx}`}
                        data-strk-img={image.query}
                        data-strk-img-ratio={image.ratioKey || "4x5"}
                        data-strk-img-width="160"
                        alt=""
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <span className="eyebrow">{product.eyebrow}</span>
              <h1 className="product-name-lg mt-3 font-serif text-3xl md:text-[40px] text-espresso leading-[1.1]">
                {product.name}
              </h1>

              <div className="mt-4 flex items-center gap-4">
                <StarRating value={product.rating} count={product.reviewCount} size={14} />
                <span className="text-[11px] tracking-[0.18em] uppercase text-muted">
                  · {product.stock} in stock
                </span>
              </div>

              <p className="mt-6 font-serif text-2xl text-espresso">
                {formatPrice(product.price)}
              </p>

              <p className="mt-5 text-base text-espresso-soft leading-relaxed">
                {product.shortDescription}
              </p>

              {/* Variants */}
              {product.variants.length > 1 && (
                <div className="mt-8">
                  <p className="eyebrow mb-3">Finish</p>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((v) => (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => setVariant(v.id)}
                        className={cn(
                          "px-5 py-2.5 text-[11px] uppercase tracking-[0.22em] border transition-all",
                          variant === v.id
                            ? "bg-espresso text-ivory border-espresso"
                            : "bg-transparent text-espresso border-hairline hover:border-espresso",
                        )}
                      >
                        {v.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mt-8 flex items-center gap-4">
                <p className="eyebrow">Quantity</p>
                <div className="inline-flex items-center border border-hairline">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="h-10 w-10 inline-flex items-center justify-center text-espresso-soft hover:bg-ivory-soft"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={14} strokeWidth={1.5} />
                  </button>
                  <span className="w-10 text-center text-sm text-espresso">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.min(99, q + 1))}
                    className="h-10 w-10 inline-flex items-center justify-center text-espresso-soft hover:bg-ivory-soft"
                    aria-label="Increase quantity"
                  >
                    <Plus size={14} strokeWidth={1.5} />
                  </button>
                </div>
              </div>

              {/* Add to cart */}
              <button
                type="button"
                onClick={handleAdd}
                className={cn(
                  "btn w-full mt-8 transition-colors",
                  added ? "btn-accent" : "btn-primary",
                )}
              >
                {added ? (
                  <>
                    <Check size={14} strokeWidth={1.5} />
                    Added to Bag
                  </>
                ) : (
                  <>
                    <ShoppingBag size={14} strokeWidth={1.5} />
                    Add to Cart — {formatPrice(product.price * quantity)}
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  handleAdd()
                  openCart()
                }}
                className="mt-3 w-full text-[11px] uppercase tracking-[0.22em] text-muted hover:text-espresso"
              >
                Add & view bag
              </button>

              {/* Detail list */}
              <ul className="mt-8 space-y-2.5 text-sm text-espresso-soft">
                {product.details.map((d) => (
                  <li key={d} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-gold" />
                    {d}
                  </li>
                ))}
              </ul>

              {/* Accordions */}
              <div className="mt-10">
                <Accordion items={accordionItems} defaultOpen={0} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="bg-ivory-soft py-20 md:py-24 border-t border-hairline">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="text-center mb-12">
            <span className="eyebrow">More to Treasure</span>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-espresso tracking-tight">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}