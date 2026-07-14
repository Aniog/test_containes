import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Star, Plus, Minus, ChevronDown, ShoppingBag } from "lucide-react"
import { getProductBySlug, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { useStrkImages } from "@/hooks/useStrkImages"
import { formatPrice, cn } from "@/lib/utils"
import ProductCard from "@/components/product/ProductCard"

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-ink/10">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="text-xs uppercase tracking-[0.18em] text-ink">
          {title}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-espresso transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-300",
          open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <p className="text-sm leading-relaxed text-espresso">{children}</p>
        </div>
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const { addItem } = useCart()
  const containerRef = useStrkImages([slug])

  const [variant, setVariant] = useState(product?.variants[0] ?? "Gold")
  const [quantity, setQuantity] = useState(1)
  const [activeImg, setActiveImg] = useState(0)

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-5 pt-20 text-center">
        <h1 className="font-serif text-3xl text-ink">Piece not found</h1>
        <Link
          to="/shop"
          className="mt-6 bg-champagne px-8 py-3 text-xs uppercase tracking-[0.18em] text-ink transition-colors hover:bg-champagne-deep hover:text-cream"
        >
          Back to Shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(slug, 4)
  const gallery = [
    { id: product.imgId, label: "Primary" },
    { id: product.imgId2, label: "Worn" },
  ]

  const handleAdd = () => {
    addItem(product, variant, quantity)
  }

  return (
    <div ref={containerRef} className="bg-cream pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-5 py-5 md:px-8">
        <nav className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-taupe">
          <Link to="/" className="hover:text-ink">
            Home
          </Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-ink">
            Shop
          </Link>
          <span>/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 md:grid-cols-2 md:gap-16 md:px-8">
        {/* Gallery */}
        <div className="flex flex-col-reverse gap-4 md:flex-row">
          {/* Thumbnails */}
          <div className="flex gap-3 md:flex-col">
            {gallery.map((img, i) => (
              <button
                key={img.id}
                type="button"
                onClick={() => setActiveImg(i)}
                className={cn(
                  "h-20 w-16 overflow-hidden border bg-sand md:h-24 md:w-20",
                  activeImg === i ? "border-champagne" : "border-transparent"
                )}
              >
                <img
                  alt={`${product.name} ${img.label}`}
                  data-strk-img-id={`${img.id}-thumb`}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
          {/* Main image */}
          <div className="relative flex-1 overflow-hidden bg-sand">
            <img
              alt={product.name}
              data-strk-img-id={gallery[activeImg].id}
              data-strk-img={`[${product.descId}] [${product.titleId}]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="aspect-[4/5] w-full object-cover"
            />
            {product.badge && (
              <span className="absolute left-4 top-4 bg-cream/90 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-ink backdrop-blur-sm">
                {product.badge}
              </span>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="md:pt-4">
          <p className="text-xs uppercase tracking-[0.2em] text-taupe">
            {product.subcategory}
          </p>
          <h1
            id={product.titleId}
            className="mt-2 font-serif text-3xl uppercase tracking-[0.1em] text-ink md:text-4xl"
          >
            {product.name}
          </h1>

          <div className="mt-3 flex items-center gap-3">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-4 w-4",
                    i <= Math.round(product.rating)
                      ? "fill-champagne text-champagne"
                      : "text-ink/20"
                  )}
                />
              ))}
            </div>
            <span className="text-xs text-taupe">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-5 font-serif text-2xl text-ink">
            {formatPrice(product.price)}
          </p>

          <p
            id={product.descId}
            className="mt-5 text-base leading-relaxed text-espresso"
          >
            {product.shortDescription}
          </p>

          {/* Variant selector */}
          <div className="mt-8">
            <p className="text-xs uppercase tracking-[0.18em] text-taupe">
              Tone: <span className="text-ink">{variant}</span>
            </p>
            <div className="mt-3 flex gap-3">
              {product.variants.map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setVariant(v)}
                  className={cn(
                    "rounded-full border px-6 py-2.5 text-xs uppercase tracking-[0.15em] transition-colors duration-300",
                    variant === v
                      ? "border-ink bg-ink text-cream"
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
            <p className="text-xs uppercase tracking-[0.18em] text-taupe">
              Quantity
            </p>
            <div className="mt-3 inline-flex items-center border border-ink/20">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
                className="px-4 py-3 text-espresso transition-colors hover:text-champagne"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-10 text-center text-sm text-ink">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Increase quantity"
                className="px-4 py-3 text-espresso transition-colors hover:text-champagne"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <button
            type="button"
            onClick={handleAdd}
            className="mt-8 flex w-full items-center justify-center gap-2 bg-champagne py-4 text-xs uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:bg-champagne-deep hover:text-cream"
          >
            <ShoppingBag className="h-4 w-4" />
            Add to Bag — {formatPrice(product.price * quantity)}
          </button>

          <p className="mt-4 text-center text-xs text-taupe">
            Free worldwide shipping · 30-day returns
          </p>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion title="Description" defaultOpen>
              {product.description}
            </Accordion>
            <Accordion title="Materials & Care">
              {product.materials}
              <br />
              <br />
              {product.care}
            </Accordion>
            <Accordion title="Shipping & Returns">
              Free worldwide shipping on all orders. Orders are processed
              within 1–2 business days and delivered in 5–10 business days.
              Enjoy 30-day hassle-free returns on unworn pieces in original
              packaging.
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="border-t border-ink/10 bg-sand py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl text-ink md:text-4xl">
              You May Also Like
            </h2>
            <div className="mx-auto mt-5 h-px w-12 bg-champagne" />
          </div>
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
