import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Minus, Plus, ChevronRight } from "lucide-react"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { useStrkImages, IMG_PLACEHOLDER } from "@/lib/strk-images"
import { formatPrice, cn } from "@/lib/utils"
import StarRating from "@/components/ui/StarRating"
import Button from "@/components/ui/Button"
import Accordion from "@/components/ui/Accordion"
import ProductCard from "@/components/product/ProductCard"

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()
  const ref = useStrkImages([id])

  const [variant, setVariant] = useState("Gold")
  const [quantity, setQuantity] = useState(1)
  const [activeImg, setActiveImg] = useState(0)

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-serif text-4xl text-ink">Product not found</h1>
        <Button as={Link} to="/shop" variant="outline" className="mt-8">
          Back to Shop
        </Button>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 4)
  const galleryIds = [product.imgId, product.imgIdAlt, ...product.gallery]
  const titleId = `pdp-${product.id}-title`
  const descId = `pdp-${product.id}-desc`

  const accordions = [
    { title: "Description", content: product.description },
    { title: "Materials & Care", content: `${product.details} ${product.care}` },
    {
      title: "Shipping & Returns",
      content:
        "Free worldwide shipping on all orders. Orders are dispatched within 1-2 business days and arrive in signature Velmora packaging. Enjoy 30-day returns on unworn pieces in original packaging.",
    },
  ]

  return (
    <div ref={ref} className="pt-24 md:pt-28">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <nav className="flex items-center gap-2 text-xs uppercase tracking-widest2 text-stone">
          <Link to="/" className="hover:text-ink">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/shop" className="hover:text-ink">Shop</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="mx-auto mt-8 grid max-w-7xl grid-cols-1 gap-10 px-6 md:px-10 lg:grid-cols-2 lg:gap-16">
        {/* Gallery */}
        <div className="flex flex-col-reverse gap-4 md:flex-row">
          <div className="flex gap-3 md:flex-col">
            {galleryIds.slice(0, 4).map((gid, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveImg(i)}
                className={cn(
                  "relative aspect-[3x4] w-16 shrink-0 overflow-hidden bg-sand md:w-20",
                  activeImg === i ? "ring-1 ring-gold" : "opacity-70 hover:opacity-100"
                )}
              >
                <img
                  alt={`${product.name} thumbnail ${i + 1}`}
                  data-strk-img-id={`pdp-thumb-${gid}`}
                  data-strk-img={`[${descId}] [${titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="200"
                  src={IMG_PLACEHOLDER}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
          <div className="relative aspect-[3x4] flex-1 overflow-hidden bg-sand">
            <img
              alt={product.name}
              data-strk-img-id={`pdp-main-${galleryIds[activeImg]}`}
              data-strk-img={`[${descId}] [${titleId}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
              src={IMG_PLACEHOLDER}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="lg:py-4">
          <p className="text-xs uppercase tracking-widest2 text-gold">
            {product.category}
          </p>
          <h1
            id={titleId}
            className="mt-3 font-serif text-4xl uppercase tracking-widest3 text-ink md:text-5xl"
          >
            {product.name}
          </h1>
          <p id={descId} className="mt-2 text-sm text-stone">
            {product.subtitle}
          </p>

          <div className="mt-5 flex items-center gap-3">
            <span className="font-serif text-3xl text-ink">
              {formatPrice(product.price)}
            </span>
            <div className="flex items-center gap-2">
              <StarRating value={product.rating} />
              <span className="text-xs text-stone">
                {product.rating} ({product.reviews})
              </span>
            </div>
          </div>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-stone">
            {product.description}
          </p>

          {/* Variants */}
          <div className="mt-8">
            <p className="text-xs uppercase tracking-widest2 text-stone">
              Tone: <span className="text-ink">{variant}</span>
            </p>
            <div className="mt-3 flex gap-3">
              {product.variants.map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setVariant(v)}
                  className={cn(
                    "min-w-24 border px-5 py-3 text-xs uppercase tracking-widest2 transition-all",
                    variant === v
                      ? "border-ink bg-ink text-cream"
                      : "border-line text-ink hover:border-ink"
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
            <div className="mt-3 inline-flex items-center border border-line">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-4 py-3 text-ink hover:text-gold"
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-10 text-center text-sm text-ink">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="px-4 py-3 text-ink hover:text-gold"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          <Button
            className="mt-8 w-full"
            onClick={() => addItem(product, { variant, quantity })}
          >
            Add to Cart — {formatPrice(product.price * quantity)}
          </Button>

          <p className="mt-4 text-center text-xs text-stone">
            Free shipping · 30-day returns · Hypoallergenic
          </p>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion items={accordions} />
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="text-center">
          <p className="text-xs uppercase tracking-widest2 text-gold">Complete the Look</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-ink">
            You May Also Like
          </h2>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  )
}
