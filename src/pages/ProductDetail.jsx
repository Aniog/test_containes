import { useState } from "react"
import { useParams, Link, Navigate } from "react-router-dom"
import { Minus, Plus, ShoppingBag, ChevronRight } from "lucide-react"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useCart } from "@/hooks/useCart"
import { useStrkImages } from "@/hooks/useStrkImages"
import { useReveal } from "@/hooks/useReveal"
import { formatPrice, cn } from "@/lib/utils"
import StarRating from "@/components/ui/StarRating"
import Accordion from "@/components/ui/Accordion"
import ProductCard from "@/components/product/ProductCard"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const tones = [
  { id: "gold", label: "Gold" },
  { id: "silver", label: "Silver" },
]

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()
  const containerRef = useStrkImages([id])
  const revealRef = useReveal([id])

  const [activeImage, setActiveImage] = useState(0)
  const [tone, setTone] = useState(product?.tone || "gold")
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const related = getRelatedProducts(product.id, 4)
  const accordionItems = [
    { title: "Description", content: product.description },
    { title: "Materials & Care", content: `${product.materials} ${product.care}` },
    { title: "Shipping & Returns", content: product.shipping },
  ]

  const handleAdd = () => {
    addItem(product, tone, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  return (
    <div
      ref={(node) => {
        containerRef.current = node
        revealRef.current = node
      }}
      className="pt-20"
    >
      {/* Breadcrumb */}
      <div className="mx-auto max-w-8xl px-5 py-6 md:px-10">
        <nav className="flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest text-espresso-400">
          <Link to="/" className="transition-colors hover:text-espresso-800">
            Home
          </Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="transition-colors hover:text-espresso-800">
            Shop
          </Link>
          <ChevronRight size={12} />
          <span className="text-espresso-700">{product.name}</span>
        </nav>
      </div>

      {/* Main */}
      <div className="mx-auto grid max-w-8xl gap-10 px-5 pb-20 md:grid-cols-2 md:gap-16 md:px-10 lg:gap-20">
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
                  "relative aspect-square w-16 shrink-0 overflow-hidden border bg-espresso-50 transition-colors md:w-20",
                  activeImage === i
                    ? "border-espresso-800"
                    : "border-transparent hover:border-espresso-300"
                )}
                aria-label={`View image ${i + 1}`}
              >
                <img
                  alt=""
                  data-strk-img-id={img.imgId + "-thumb"}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="200"
                  src={PLACEHOLDER}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main image */}
          <div className="relative aspect-[4/5] flex-1 overflow-hidden bg-espresso-50">
            <img
              alt={product.name}
              data-strk-img-id={product.images[activeImage].imgId + "-main"}
              data-strk-img={`[${product.descId}] [${product.titleId}]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src={PLACEHOLDER}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="md:py-4">
          <p className="font-sans text-[11px] uppercase tracking-ultra text-gold-600">
            {product.category}
          </p>
          <h1
            id={product.titleId}
            className="mt-3 font-serif text-4xl uppercase tracking-wide text-espresso-900 md:text-5xl"
          >
            {product.name}
          </h1>
          <p id={product.descId} className="sr-only">
            {product.shortDescription}
          </p>

          <div className="mt-4 flex items-center gap-3">
            <StarRating rating={product.rating} size={15} />
            <span className="font-sans text-xs text-espresso-500">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-6 font-serif text-3xl text-espresso-900">
            {formatPrice(product.price)}
          </p>

          <p className="mt-5 max-w-md font-sans text-sm leading-relaxed text-espresso-600">
            {product.shortDescription}
          </p>

          {/* Tone selector */}
          <div className="mt-8">
            <p className="font-sans text-[11px] uppercase tracking-widest text-espresso-700">
              Tone
            </p>
            <div className="mt-3 flex gap-3">
              {tones.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTone(t.id)}
                  className={cn(
                    "border px-6 py-2.5 font-sans text-xs uppercase tracking-widest transition-colors",
                    tone === t.id
                      ? "border-espresso-900 bg-espresso-900 text-cream"
                      : "border-espresso-300 text-espresso-700 hover:border-espresso-700"
                  )}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-8">
            <p className="font-sans text-[11px] uppercase tracking-widest text-espresso-700">
              Quantity
            </p>
            <div className="mt-3 inline-flex items-center border border-espresso-300">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
                className="px-3 py-2.5 text-espresso-600 transition-colors hover:text-espresso-900"
              >
                <Minus size={14} />
              </button>
              <span className="min-w-10 text-center font-sans text-sm text-espresso-900">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Increase quantity"
                className="px-3 py-2.5 text-espresso-600 transition-colors hover:text-espresso-900"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <button
            type="button"
            onClick={handleAdd}
            className={cn(
              "mt-8 flex w-full items-center justify-center gap-2 py-4 font-sans text-xs uppercase tracking-widest transition-colors",
              added
                ? "bg-gold-500 text-espresso-950"
                : "bg-espresso-900 text-cream hover:bg-gold-600"
            )}
          >
            <ShoppingBag size={15} />
            {added ? "Added to Cart" : "Add to Cart"}
          </button>

          <p className="mt-4 text-center font-sans text-[11px] text-espresso-400">
            Free worldwide shipping · 30-day returns
          </p>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion items={accordionItems} />
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="border-t border-espresso-200 bg-espresso-50 py-20 md:py-24">
        <div className="mx-auto max-w-8xl px-5 md:px-10">
          <h2 className="reveal mb-10 text-center font-serif text-3xl text-espresso-900 md:text-4xl">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4">
            {related.map((p) => (
              <div key={p.id} className="reveal">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
