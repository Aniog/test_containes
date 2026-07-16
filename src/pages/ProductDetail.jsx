import { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { Minus, Plus, ShoppingBag, ChevronRight } from "lucide-react"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn } from "@/lib/utils"
import StarRating from "@/components/ui/StarRating"
import Accordion from "@/components/ui/Accordion"
import ProductCard from "@/components/product/ProductCard"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = getProductById(id)
  const { addItem } = useCart()

  const [tone, setTone] = useState(product?.tones?.[0] || "Gold")
  const [quantity, setQuantity] = useState(1)
  const [activeImg, setActiveImg] = useState(0)

  useEffect(() => {
    setTone(product?.tones?.[0] || "Gold")
    setQuantity(1)
    setActiveImg(0)
  }, [id, product])

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-serif text-4xl text-ink">Product not found</h1>
        <Link to="/shop" className="mt-6 inline-block text-gold underline">
          Back to shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 4)
  const gallery = [
    { imgId: product.imgId, label: "main" },
    { imgId: product.imgId2, label: "worn" },
    { imgId: `${product.imgId}-alt3`, label: "detail" },
    { imgId: `${product.imgId}-alt4`, label: "angle" },
  ]

  const handleAdd = () => {
    addItem(product, { tone, quantity })
  }

  const accordions = [
    { title: "Description", content: product.description },
    { title: "Materials & Care", content: product.materials },
    { title: "Shipping & Returns", content: product.shipping },
  ]

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 py-6 md:px-10">
        <nav className="flex items-center gap-2 font-sans text-xs text-stone">
          <Link to="/" className="hover:text-gold">Home</Link>
          <ChevronRight width={12} height={12} />
          <Link to="/shop" className="hover:text-gold">Shop</Link>
          <ChevronRight width={12} height={12} />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      {/* Main */}
      <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 md:grid-cols-2 md:gap-16 md:px-10">
        {/* Gallery */}
        <div className="flex flex-col-reverse gap-4 md:flex-row">
          <div className="flex gap-3 md:flex-col">
            {gallery.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveImg(i)}
                className={cn(
                  "relative aspect-[3/4] w-16 shrink-0 overflow-hidden bg-sand md:w-20",
                  activeImg === i ? "ring-1 ring-gold" : "opacity-60 hover:opacity-100"
                )}
                aria-label={`View image ${i + 1}`}
              >
                <img
                  alt={`${product.name} thumbnail ${i + 1}`}
                  data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                  data-strk-img={`[${product.descId}] [${product.titleId}] ${img.label}`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="200"
                  src={PLACEHOLDER}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
          <div className="relative flex-1 overflow-hidden bg-sand">
            <img
              alt={product.name}
              data-strk-img-id={`pdp-main-${product.id}-${activeImg}`}
              data-strk-img={`[${product.descId}] [${product.titleId}] ${gallery[activeImg].label}`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
              src={PLACEHOLDER}
              className="aspect-[3/4] w-full object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="md:py-4">
          {product.badge && (
            <span className="inline-block bg-sand px-3 py-1 font-sans text-[10px] uppercase tracking-widest2 text-ink">
              {product.badge}
            </span>
          )}
          <h1
            id={product.titleId}
            className="mt-4 font-serif text-3xl uppercase tracking-widest2 text-ink md:text-4xl"
          >
            {product.name}
          </h1>
          <p className="mt-3 font-sans text-2xl text-ink">{formatPrice(product.price)}</p>

          <div className="mt-4 flex items-center gap-2">
            <StarRating rating={product.rating} size={15} />
            <span className="font-sans text-xs text-stone">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <p id={product.descId} className="mt-6 font-sans text-sm leading-relaxed text-stone">
            {product.shortDesc}
          </p>

          {/* Tone selector */}
          <div className="mt-8">
            <p className="font-sans text-xs uppercase tracking-widest2 text-ink">
              Tone: <span className="text-stone">{tone}</span>
            </p>
            <div className="mt-3 flex gap-3">
              {product.tones.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTone(t)}
                  className={cn(
                    "rounded-full border px-6 py-2.5 font-sans text-xs uppercase tracking-widest2 transition-colors",
                    tone === t
                      ? "border-ink bg-ink text-cream"
                      : "border-ink/30 text-ink hover:border-ink"
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Add to cart */}
          <div className="mt-8 flex gap-4">
            <div className="flex items-center border border-ink/20">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-4 py-3 text-ink hover:text-gold"
                aria-label="Decrease quantity"
              >
                <Minus width={16} height={16} />
              </button>
              <span className="w-10 text-center font-sans text-sm text-ink">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="px-4 py-3 text-ink hover:text-gold"
                aria-label="Increase quantity"
              >
                <Plus width={16} height={16} />
              </button>
            </div>
            <button
              type="button"
              onClick={handleAdd}
              className="flex flex-1 items-center justify-center gap-2 bg-gold py-3.5 font-sans text-xs uppercase tracking-widest2 text-cream transition-colors hover:bg-gold-deep"
            >
              <ShoppingBag width={16} height={16} />
              Add to Cart
            </button>
          </div>

          <p className="mt-4 font-sans text-xs text-stone">
            Free worldwide shipping · 30-day returns
          </p>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion items={accordions} />
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="border-t border-ink/10 bg-sand py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <h2 className="mb-10 text-center font-serif text-3xl text-ink md:text-4xl">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} sectionTitleId="related-title" />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
