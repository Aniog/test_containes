import { useEffect, useRef, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { Minus, Plus, ChevronRight } from "lucide-react"
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

  const [variant, setVariant] = useState("Gold")
  const [quantity, setQuantity] = useState(1)
  const [activeImg, setActiveImg] = useState(0)
  const galleryRef = useRef(null)
  const relatedRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    setActiveImg(0)
    setVariant("Gold")
    setQuantity(1)
  }, [id])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, galleryRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [id, activeImg])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, relatedRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [id])

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-32 text-center">
        <h1 className="font-serif text-3xl text-ink">Piece not found</h1>
        <Link to="/shop" className="mt-6 inline-block text-gold underline">
          Back to shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(id, 4)
  const primary = product.images[0]

  const handleAdd = () => {
    addItem(product, { variant, quantity })
  }

  const accordionItems = [
    { title: "Description", content: product.description },
    { title: "Materials & Care", content: `${product.materials} ${product.care}` },
    {
      title: "Shipping & Returns",
      content:
        "Free worldwide shipping on all orders. Orders ship within 1–2 business days and arrive in 3–7 days depending on destination. Enjoy 30-day returns on unworn pieces in original packaging.",
    },
  ]

  return (
    <div className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-5 py-6 md:px-8">
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-stone">
          <Link to="/" className="hover:text-gold">Home</Link>
          <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
          <Link to="/shop" className="hover:text-gold">Shop</Link>
          <ChevronRight className="h-3 w-3" strokeWidth={1.5} />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 pb-20 md:grid-cols-2 md:gap-16 md:px-8">
        {/* Gallery */}
        <div ref={galleryRef} className="flex flex-col-reverse gap-4 md:flex-row">
          <div className="flex gap-3 md:flex-col">
            {product.images.map((img, i) => (
              <button
                key={img.imgId}
                type="button"
                onClick={() => setActiveImg(i)}
                className={cn(
                  "h-20 w-16 overflow-hidden border bg-sand transition-colors md:h-24 md:w-20",
                  activeImg === i ? "border-gold" : "border-transparent hover:border-ink/20"
                )}
              >
                <img
                  alt={`${product.name} thumbnail ${i + 1}`}
                  data-strk-img-id={`pdp-thumb-${img.imgId}`}
                  data-strk-img={`[${img.descId}] [${img.titleId}]`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
          <div className="relative flex-1 overflow-hidden bg-sand">
            <img
              alt={product.name}
              data-strk-img-id={`pdp-main-${product.images[activeImg].imgId}`}
              data-strk-img={`[${product.images[activeImg].descId}] [${product.images[activeImg].titleId}]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="md:pt-4">
          <span className="text-[11px] uppercase tracking-[0.25em] text-gold">
            {product.type}
          </span>
          <h1
            id={primary.titleId}
            className="mt-2 font-serif text-3xl uppercase tracking-[0.12em] text-ink md:text-4xl"
          >
            {product.name}
          </h1>
          <p id={primary.descId} className="sr-only">
            {product.shortDesc}
          </p>

          <div className="mt-4 flex items-center gap-3">
            <StarRating rating={product.rating} size={15} />
            <span className="text-xs text-stone">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-5 font-serif text-3xl text-ink">{formatPrice(product.price)}</p>

          <p className="mt-5 text-sm leading-relaxed text-stone">{product.shortDesc}</p>

          {/* Variant selector */}
          <div className="mt-8">
            <p className="text-[11px] uppercase tracking-[0.2em] text-ink">
              Finish — <span className="text-stone">{variant}</span>
            </p>
            <div className="mt-3 flex gap-3">
              {product.variants.map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setVariant(v)}
                  className={cn(
                    "rounded-full border px-6 py-2.5 text-[11px] uppercase tracking-[0.18em] transition-colors",
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
            <p className="text-[11px] uppercase tracking-[0.2em] text-ink">Quantity</p>
            <div className="mt-3 inline-flex items-center border border-ink/25">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-2.5 text-ink transition-colors hover:text-gold"
                aria-label="Decrease quantity"
              >
                <Minus className="h-3.5 w-3.5" strokeWidth={1.5} />
              </button>
              <span className="min-w-10 text-center text-sm text-ink">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-2.5 text-ink transition-colors hover:text-gold"
                aria-label="Increase quantity"
              >
                <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <button
            type="button"
            onClick={handleAdd}
            className="mt-8 w-full bg-gold py-4 text-[11px] uppercase tracking-[0.22em] text-cream transition-colors hover:bg-gold-deep"
          >
            Add to Cart — {formatPrice(product.price * quantity)}
          </button>

          <p className="mt-4 text-center text-[11px] text-stone">
            Free shipping · 30-day returns · Hypoallergenic
          </p>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion items={accordionItems} defaultOpen={0} />
          </div>
        </div>
      </div>

      {/* Related */}
      <section ref={relatedRef} className="border-t border-ink/10 bg-sand py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center">
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold">Complete the Look</span>
            <h2 className="mt-3 font-serif text-3xl text-ink md:text-4xl">You May Also Like</h2>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4 md:gap-x-8">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
