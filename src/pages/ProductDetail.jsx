import { useEffect, useRef, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { Minus, Plus, ShoppingBag, ChevronRight } from "lucide-react"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn } from "@/lib/utils"
import StarRating from "@/components/ui/StarRating"
import Accordion from "@/components/ui/Accordion"
import ProductCard from "@/components/product/ProductCard"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = getProductById(id)
  const { addItem } = useCart()

  const containerRef = useRef(null)
  const [activeImg, setActiveImg] = useState(0)
  const [variant, setVariant] = useState(product?.variants[0] ?? "Gold")
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    setActiveImg(0)
    setVariant(product?.variants[0] ?? "Gold")
    setQuantity(1)
  }, [id, product])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [id, activeImg])

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-32 text-center">
        <h1 className="font-serif text-4xl text-ink">Piece not found</h1>
        <Link
          to="/shop"
          className="mt-6 inline-block border border-ink px-8 py-3 text-xs uppercase tracking-widest2 text-ink hover:bg-ink hover:text-ivory"
        >
          Back to Shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 4)

  const handleAdd = () => {
    addItem(product, variant, quantity)
  }

  return (
    <div ref={containerRef} className="pt-20">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-8xl px-5 py-6 md:px-8">
        <nav className="flex items-center gap-2 text-xs uppercase tracking-wider text-stone">
          <Link to="/" className="hover:text-ink">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/shop" className="hover:text-ink">Shop</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="mx-auto grid max-w-8xl grid-cols-1 gap-10 px-5 pb-20 md:grid-cols-2 md:gap-16 md:px-8">
        {/* Gallery */}
        <div className="flex flex-col-reverse gap-4 md:flex-row">
          <div className="flex gap-3 md:flex-col">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={cn(
                  "relative aspect-[4/5] w-20 overflow-hidden border bg-cream transition-colors md:w-24",
                  activeImg === i ? "border-gold" : "border-transparent hover:border-sand"
                )}
                aria-label={`View image ${i + 1}`}
              >
                <img
                  alt={`${product.name} thumbnail ${i + 1}`}
                  data-strk-img-id={`${img.imgId}-thumb-${i}`}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
          <div className="relative aspect-[4/5] flex-1 overflow-hidden bg-cream">
            <img
              alt={product.name}
              data-strk-img-id={`${product.images[activeImg].imgId}-main`}
              data-strk-img={`[${product.descId}] [${product.titleId}]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="h-full w-full object-cover"
            />
            {product.badge && (
              <span className="absolute left-4 top-4 bg-ivory/90 px-3 py-1 text-[10px] uppercase tracking-widest2 text-ink backdrop-blur-sm">
                {product.badge}
              </span>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="md:py-4">
          <p className="text-xs uppercase tracking-widest2 text-gold">{product.material}</p>
          <h1
            id={product.titleId}
            className="mt-3 font-serif text-4xl uppercase tracking-wider text-ink md:text-5xl"
          >
            {product.name}
          </h1>
          <p id={product.descId} className="mt-2 text-base text-stone">
            {product.subtitle}
          </p>

          <div className="mt-4 flex items-center gap-3">
            <StarRating rating={product.rating} size={16} />
            <span className="text-sm text-stone">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-6 font-serif text-3xl text-ink">{formatPrice(product.price)}</p>

          <p className="mt-6 text-base leading-relaxed text-ink-soft">{product.description}</p>

          {/* Variant selector */}
          <div className="mt-8">
            <p className="text-xs uppercase tracking-widest2 text-stone">Tone</p>
            <div className="mt-3 flex gap-3">
              {product.variants.map((v) => (
                <button
                  key={v}
                  onClick={() => setVariant(v)}
                  className={cn(
                    "px-6 py-3 text-xs uppercase tracking-widest2 transition-colors",
                    variant === v
                      ? "bg-ink text-ivory"
                      : "border border-sand text-ink hover:border-ink"
                  )}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <p className="text-xs uppercase tracking-widest2 text-stone">Quantity</p>
            <div className="mt-3 inline-flex items-center border border-sand">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-4 py-3 text-ink transition-colors hover:text-gold"
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-[3rem] text-center text-sm text-ink">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-4 py-3 text-ink transition-colors hover:text-gold"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <button
            onClick={handleAdd}
            className="mt-8 flex w-full items-center justify-center gap-2 bg-gold py-4 text-xs uppercase tracking-widest2 text-ink transition-colors hover:bg-gold-deep hover:text-ivory"
          >
            <ShoppingBag className="h-4 w-4" />
            Add to Bag — {formatPrice(product.price * quantity)}
          </button>

          <p className="mt-4 text-center text-xs text-stone">
            Free worldwide shipping · 30-day returns · Ships within 24 hours
          </p>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion
              items={[
                { title: "Description", content: product.description },
                { title: "Materials & Care", content: product.materials },
                { title: "Shipping & Returns", content: product.shipping },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-8xl px-5 md:px-8">
          <h2 className="text-center font-serif text-4xl text-ink md:text-5xl">
            You may also like
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
