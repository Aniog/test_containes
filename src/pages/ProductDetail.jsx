import { useState, useEffect, useRef} from "react"
import { useParams, Link, Navigate } from "react-router-dom"
import { Minus, Plus, ShoppingBag, ChevronRight } from "lucide-react"
import { getProductBySlug, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn } from "@/lib/utils"
import Stars from "@/components/ui/Stars"
import Accordion from "@/components/ui/Accordion"
import ProductCard from "@/components/product/ProductCard"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

// Gallery thumbnails: primary + secondary + two detail shots.
function buildGallery(product) {
  return [
    {
      id: `${product.imgId}-g1`,
      query: `[${product.descId}] [${product.titleId}]`,
    },
    {
      id: `${product.imgId2}-g2`,
      query: `[${product.descId}] ${product.name} worn on model`,
    },
    {
      id: `${product.imgId}-g3`,
      query: `[${product.descId}] ${product.name} close up detail`,
    },
    {
      id: `${product.imgId2}-g4`,
      query: `[${product.descId}] ${product.name} on dark background`,
    },
  ]
}

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const { addItem } = useCart()
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [slug])

  const [variant, setVariant] = useState(product?.variants?.[0] || "Gold")
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const gallery = buildGallery(product)
  const related = getRelatedProducts(product.slug, 4)

  const handleAdd = () => {
    addItem(product, variant, quantity)
  }

  const accordions = [
    {
      title: "Description",
      content: <p>{product.description}</p>,
    },
    {
      title: "Materials & Care",
      content: (
        <div className="space-y-3">
          <p>
            <span className="text-ink">Material:</span> {product.material}.
            Hypoallergenic, nickel-free and tarnish-resistant.
          </p>
          <p>{product.care}</p>
        </div>
      ),
    },
    {
      title: "Shipping & Returns",
      content: (
        <div className="space-y-3">
          <p>
            Free worldwide shipping on all orders. Orders are dispatched within
            1–2 business days and arrive in signature Velmora packaging.
          </p>
          <p>
            Enjoy 30-day returns on unworn pieces in their original packaging.
            Gift sets must be returned complete.
          </p>
        </div>
      ),
    },
  ]

  return (
    <div ref={ref} className="bg-cream pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-6">
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-stone">
          <Link to="/" className="hover:text-ink">Home</Link>
          <ChevronRight size={12} strokeWidth={1.5} />
          <Link to="/shop" className="hover:text-ink">Shop</Link>
          <ChevronRight size={12} strokeWidth={1.5} />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      {/* Main */}
      <div className="mx-auto max-w-7xl px-6 md:px-10 pb-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse gap-4 md:flex-row">
            {/* Thumbnails */}
            <div className="flex gap-3 md:flex-col md:gap-4">
              {gallery.map((img, i) => (
                <button
                  key={img.id}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  className={cn(
                    "relative aspect-square w-16 shrink-0 overflow-hidden bg-sand md:w-20 border transition-colors",
                    activeImage === i ? "border-champagne" : "border-transparent hover:border-line"
                  )}
                >
                  <img
                    alt=""
                    data-strk-img-id={`${img.id}-thumb`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="160"
                    src={PLACEHOLDER}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="relative flex-1 aspect-[4/5] overflow-hidden bg-sand">
              <img
                alt={product.name}
                data-strk-img-id={`${gallery[activeImage].id}-main`}
                data-strk-img={gallery[activeImage].query}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src={PLACEHOLDER}
                className="h-full w-full object-cover"
              />
              {product.badge && (
                <span className="absolute left-4 top-4 bg-cream/90 text-ink text-[10px] uppercase tracking-widest2 px-3 py-1">
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="lg:py-4">
            <p className="text-[11px] uppercase tracking-widest2 text-champagne-deep">
              {product.material}
            </p>
            <h1
              id={product.titleId}
              className="mt-3 font-serif text-4xl md:text-5xl uppercase tracking-widest3 text-ink leading-tight"
            >
              {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-3">
              <Stars rating={product.rating} size={15} />
              <span className="text-xs text-stone">
                {product.rating} · {product.reviewCount} reviews
              </span>
            </div>

            <p className="mt-5 font-serif text-3xl text-champagne-deep">
              {formatPrice(product.price)}
            </p>

            <p
              id={product.descId}
              className="mt-5 text-sm leading-relaxed text-stone"
            >
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-widest2 text-ink">
                Tone: <span className="text-stone">{variant}</span>
              </p>
              <div className="mt-3 flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setVariant(v)}
                    className={cn(
                      "min-w-24 border px-6 py-3 text-[11px] uppercase tracking-widest2 transition-colors",
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
            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-widest2 text-ink">Quantity</p>
              <div className="mt-3 inline-flex items-center border border-line">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 text-ink hover:text-champagne-deep"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} strokeWidth={1.5} />
                </button>
                <span className="min-w-10 text-center text-sm text-ink">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-3 text-ink hover:text-champagne-deep"
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
              className="mt-8 flex w-full items-center justify-center gap-2 bg-champagne py-4 text-[11px] uppercase tracking-widest2 text-cream hover:bg-champagne-deep transition-colors"
            >
              <ShoppingBag size={15} strokeWidth={1.5} />
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            <p className="mt-4 text-center text-[11px] text-stone">
              Free shipping · 30-day returns · Ships in 1–2 business days
            </p>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion items={accordions} />
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="border-t border-line bg-sand/40 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-12 text-center">
            <p className="text-[11px] uppercase tracking-widest2 text-champagne-deep">
              Complete the Look
            </p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl text-ink">
              You May Also Like
            </h2>
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
