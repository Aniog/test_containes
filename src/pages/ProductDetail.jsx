import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Minus, Plus, ShoppingBag, Check } from "lucide-react"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { StrkImage, useStrkImages } from "@/components/ui/StrkImage"
import { StarRating } from "@/components/ui/StarRating"
import Accordion from "@/components/product/Accordion"
import ProductCard from "@/components/product/ProductCard"
import { formatPrice } from "@/lib/utils"
import { cn } from "@/lib/utils"

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()
  const [variant, setVariant] = useState(product?.variants?.[0] ?? "Gold")
  const [quantity, setQuantity] = useState(1)
  const [activeImg, setActiveImg] = useState(0)
  const [added, setAdded] = useState(false)
  const ref = useStrkImages([activeImg, variant])

  if (!product) {
    return (
      <div className="container-editorial flex flex-col items-center py-32 text-center">
        <p className="font-serif text-3xl text-ink">Piece not found</p>
        <Link to="/shop" className="btn-accent mt-6">
          Back to Shop
        </Link>
      </div>
    )
  }

  const titleId = `pd-${product.id}-title`
  const tagId = `pd-${product.id}-tag`
  const gallery = [
    { imgId: `${product.imgId}-gal`, query: `[${tagId}] [${titleId}]`, ratio: "3x4", width: 900 },
    { imgId: `${product.imgIdAlt}-gal`, query: `[${tagId}] [${titleId}] worn on model`, ratio: "3x4", width: 900 },
    { imgId: `${product.imgId}-det`, query: `[${tagId}] [${titleId}] detail close up`, ratio: "3x4", width: 900 },
  ]

  const related = getRelatedProducts(product.id, 4)

  const handleAdd = () => {
    addItem(product, { variant, quantity })
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  const accordions = [
    { title: "Description", content: product.description },
    {
      title: "Materials & Care",
      content:
        `${product.details} To keep your piece looking its best, avoid contact with water, perfume, and lotion. Store in the provided pouch away from direct sunlight. Gently wipe with a soft cloth after each wear.`,
    },
    {
      title: "Shipping & Returns",
      content:
        "Free worldwide shipping on all orders. Orders ship within 1–2 business days and arrive in 3–7 days. Enjoy 30-day returns on unworn pieces in original packaging. Gift boxes included.",
    },
  ]

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="container-editorial py-5">
        <nav className="flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest text-ink-muted">
          <Link to="/" className="hover:text-ink">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-ink">Shop</Link>
          <span>/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="container-editorial grid grid-cols-1 gap-10 pb-20 md:grid-cols-2 md:gap-16">
        {/* Gallery */}
        <div className="flex flex-col-reverse gap-4 md:flex-row">
          <div className="flex gap-3 md:flex-col">
            {gallery.map((g, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={cn(
                  "relative aspect-[3/4] w-16 shrink-0 overflow-hidden bg-cream-200 transition-all md:w-20",
                  activeImg === i ? "ring-1 ring-ink" : "opacity-60 hover:opacity-100"
                )}
              >
                <StrkImage
                  imgId={`${g.imgId}-thumb`}
                  query={g.query}
                  ratio="3x4"
                  width={200}
                  alt={`${product.name} view ${i + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
          <div className="relative flex-1 overflow-hidden bg-cream-200">
            <StrkImage
              imgId={gallery[activeImg].imgId}
              query={gallery[activeImg].query}
              ratio="3x4"
              width={900}
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="md:pt-4">
          <p className="font-sans text-[11px] uppercase tracking-ultra text-gold-deep">
            {product.category}
          </p>
          <h1 id={titleId} className="product-name mt-3 text-3xl md:text-4xl">
            {product.name}
          </h1>
          <p id={tagId} className="mt-2 font-sans text-sm text-ink-muted">
            {product.tagline}
          </p>

          <div className="mt-4 flex items-center gap-3">
            <StarRating value={product.rating} size={14} />
            <span className="font-sans text-xs text-ink-muted">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-6 font-serif text-3xl text-ink">{formatPrice(product.price)}</p>

          <p className="mt-6 font-sans text-sm leading-relaxed text-ink-muted">
            {product.description}
          </p>

          {/* Variants */}
          <div className="mt-8">
            <p className="font-sans text-[11px] uppercase tracking-ultra text-ink">
              Tone: <span className="text-ink-muted">{variant}</span>
            </p>
            <div className="mt-3 flex gap-3">
              {product.variants.map((v) => (
                <button
                  key={v}
                  onClick={() => setVariant(v)}
                  className={cn(
                    "min-w-24 border px-5 py-2.5 font-sans text-[11px] uppercase tracking-ultra transition-all duration-300",
                    variant === v
                      ? "border-ink bg-ink text-cream-50"
                      : "border-ink/25 text-ink hover:border-ink"
                  )}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-8">
            <p className="font-sans text-[11px] uppercase tracking-ultra text-ink">Quantity</p>
            <div className="mt-3 inline-flex items-center border border-ink/20">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-4 py-3 text-ink/70 hover:text-ink"
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-10 text-center font-sans text-sm text-ink">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-4 py-3 text-ink/70 hover:text-ink"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <button
            onClick={handleAdd}
            className={cn(
              "mt-8 flex w-full items-center justify-center gap-2 px-8 py-4 font-sans text-[11px] uppercase tracking-ultra transition-all duration-500 ease-elegant",
              added ? "bg-gold-deep text-cream-50" : "bg-ink text-cream-50 hover:bg-gold-deep"
            )}
          >
            {added ? (
              <>
                <Check className="h-4 w-4" /> Added to Bag
              </>
            ) : (
              <>
                <ShoppingBag className="h-4 w-4" /> Add to Cart
              </>
            )}
          </button>

          <p className="mt-4 text-center font-sans text-[11px] text-ink-muted">
            Free shipping · 30-day returns · Ships in 1–2 days
          </p>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion items={accordions} />
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="border-t border-ink/10 bg-cream-100 py-20">
        <div className="container-editorial">
          <div className="mb-10 text-center">
            <p className="eyebrow">Continue Exploring</p>
            <h2 className="heading-serif mt-3 text-3xl md:text-4xl">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
