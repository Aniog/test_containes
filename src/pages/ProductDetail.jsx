import { useEffect, useRef, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Minus, Plus, ChevronRight } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { getProductBySlug, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { StarRating } from "@/components/ui/star-rating"
import { Accordion } from "@/components/ui/accordion"
import { ProductCard } from "@/components/product/ProductCard"

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const { addItem } = useCart()

  const galleryRef = useRef(null)
  const relatedRef = useRef(null)
  const [activeImg, setActiveImg] = useState(0)
  const [variant, setVariant] = useState(product?.variants[0])
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    setActiveImg(0)
    setVariant(product?.variants[0])
    setQuantity(1)
  }, [slug, product])

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, galleryRef.current)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [slug, activeImg])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, relatedRef.current)
  }, [slug])

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-5 pt-24 text-center">
        <h1 className="font-serif text-4xl text-ink">Piece not found</h1>
        <Button as={Link} to="/shop">Back to Shop</Button>
      </div>
    )
  }

  const related = getRelatedProducts(slug, 4)

  const accordionItems = [
    { title: "Description", content: product.description },
    { title: "Materials & Care", content: `${product.materials} ${product.care}` },
    {
      title: "Shipping & Returns",
      content:
        "Free worldwide shipping on all orders. Orders are dispatched within 1–2 business days and arrive in signature Velmora packaging. Enjoy 30-day returns on unworn pieces in their original packaging.",
    },
  ]

  return (
    <div className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-5 py-5 md:px-8">
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-stone">
          <Link to="/" className="hover:text-gold">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/shop" className="hover:text-gold">Shop</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      {/* Main */}
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 md:grid-cols-2 md:gap-14 md:px-8 lg:gap-20">
        {/* Gallery */}
        <div ref={galleryRef} className="flex flex-col-reverse gap-4 md:flex-row">
          {/* Thumbnails */}
          <div className="flex gap-3 md:flex-col">
            {product.gallery.map((g, i) => (
              <button
                key={g}
                onClick={() => setActiveImg(i)}
                className={cn(
                  "h-20 w-16 overflow-hidden border transition-all md:h-24 md:w-20",
                  activeImg === i ? "border-gold" : "border-line opacity-70 hover:opacity-100"
                )}
                aria-label={`View image ${i + 1}`}
              >
                <img
                  alt={`${product.name} thumbnail ${i + 1}`}
                  data-strk-img-id={g}
                  data-strk-img={`[pdp-desc] [pdp-name] ${product.type}`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
          {/* Main image */}
          <div className="relative flex-1 overflow-hidden bg-cream">
            <img
              alt={product.name}
              data-strk-img-id={`${product.gallery[activeImg]}-main`}
              data-strk-img={`[pdp-desc] [pdp-name] ${product.type}`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="md:py-4">
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold">
            {product.category}
          </p>
          <h1
            id="pdp-name"
            className="mt-3 font-serif text-3xl uppercase tracking-[0.1em] text-ink md:text-4xl"
          >
            {product.name}
          </h1>

          <div className="mt-4 flex items-center gap-3">
            <StarRating rating={product.rating} size={16} />
            <span className="text-xs text-stone">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-5 font-serif text-3xl text-ink">
            {formatPrice(product.price)}
          </p>

          <p
            id="pdp-desc"
            className="mt-5 text-sm leading-relaxed text-stone md:text-[15px]"
          >
            {product.shortDesc}
          </p>

          {/* Variant selector */}
          <div className="mt-8">
            <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-ink">
              Tone: <span className="text-stone">{variant}</span>
            </p>
            <div className="flex gap-3">
              {product.variants.map((v) => (
                <button
                  key={v}
                  onClick={() => setVariant(v)}
                  className={cn(
                    "min-w-[88px] border px-5 py-2.5 text-[11px] uppercase tracking-[0.15em] transition-all",
                    variant === v
                      ? "border-ink bg-ink text-canvas"
                      : "border-line text-ink hover:border-ink"
                  )}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-8">
            <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-ink">
              Quantity
            </p>
            <div className="inline-flex items-center border border-line">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="flex h-11 w-11 items-center justify-center text-ink transition-colors hover:bg-cream"
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-12 text-center text-sm text-ink">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="flex h-11 w-11 items-center justify-center text-ink transition-colors hover:bg-cream"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <Button
            onClick={() => addItem(product, variant, quantity)}
            size="lg"
            className="mt-8 w-full"
          >
            Add to Cart — {formatPrice(product.price * quantity)}
          </Button>

          <p className="mt-4 text-center text-[11px] uppercase tracking-[0.15em] text-stone">
            Free Shipping · 30-Day Returns
          </p>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion items={accordionItems} />
          </div>
        </div>
      </div>

      {/* Related */}
      <section ref={relatedRef} className="border-t border-line bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-10 text-center">
            <h2 className="font-serif text-3xl text-ink md:text-4xl">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4 lg:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
