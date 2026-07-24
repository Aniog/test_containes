import { useEffect, useRef, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Star, Minus, Plus, ShoppingBag, ChevronRight } from "lucide-react"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { formatPrice, cn } from "@/lib/utils"
import Accordion from "@/components/product/Accordion"
import ProductCard from "@/components/product/ProductCard"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

// Gallery thumbnails: primary + hover + two detail shots derived from product.
function buildGalleryImages(product) {
  return [
    {
      id: product.imgId,
      query: `[${product.descId}] [${product.titleId}] gold jewelry on neutral background`,
    },
    {
      id: product.hoverImgId,
      query: `[${product.descId}] [${product.titleId}] gold jewelry worn on model warm light`,
    },
    {
      id: `${product.imgId}-detail-1`,
      query: `[${product.descId}] [${product.titleId}] gold jewelry close up detail macro`,
    },
    {
      id: `${product.imgId}-detail-2`,
      query: `[${product.descId}] [${product.titleId}] gold jewelry on dark background editorial`,
    },
  ]
}

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()
  const ref = useRef(null)

  const [tone, setTone] = useState(product?.tones[0] || "Gold")
  const [qty, setQty] = useState(1)
  const [activeImg, setActiveImg] = useState(0)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [id, activeImg])

  useEffect(() => {
    if (product) {
      setTone(product.tones[0])
      setQty(1)
      setActiveImg(0)
      setAdded(false)
    }
    window.scrollTo(0, 0)
  }, [id, product])

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 px-5 pt-24">
        <h1 className="font-serif text-3xl text-ink">Product not found</h1>
        <Link
          to="/shop"
          className="text-[11px] uppercase tracking-widest2 text-gold border-b border-gold pb-0.5"
        >
          Back to Shop
        </Link>
      </div>
    )
  }

  const gallery = buildGalleryImages(product)
  const related = getRelatedProducts(product.id, 4)

  const handleAdd = () => {
    addItem(product, tone, qty)
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1600)
  }

  const accordions = [
    { title: "Description", content: product.description },
    { title: "Materials & Care", content: `${product.materials} ${product.care}` },
    {
      title: "Shipping & Returns",
      content:
        "Free worldwide shipping on all orders. Orders are dispatched within 1–2 business days and delivered in 3–7 days. Enjoy 30-day returns and exchanges on unworn pieces in original packaging.",
    },
  ]

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-8xl mx-auto px-5 md:px-8 py-5">
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-stone">
          <Link to="/" className="hover:text-ink transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-ink transition-colors">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-8xl mx-auto px-5 md:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 md:w-20">
              {gallery.map((img, i) => (
                <button
                  key={img.id}
                  type="button"
                  onClick={() => setActiveImg(i)}
                  className={cn(
                    "relative shrink-0 w-16 md:w-full aspect-[3/4] overflow-hidden bg-cream border transition-colors",
                    activeImg === i ? "border-gold" : "border-transparent hover:border-sand"
                  )}
                  aria-label={`View image ${i + 1}`}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt=""
                    aria-hidden="true"
                    data-strk-img-id={`thumb-${img.id}`}
                    data-strk-img={img.query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="relative flex-1 aspect-[3/4] overflow-hidden bg-cream">
              <img
                key={activeImg}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                data-strk-img-id={`main-${gallery[activeImg].id}`}
                data-strk-img={gallery[activeImg].query}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                className="absolute inset-0 w-full h-full object-cover animate-fade-in"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-ivory/90 backdrop-blur-sm text-ink text-[10px] uppercase tracking-widest2 px-2.5 py-1">
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="md:py-4">
            <p className="text-[11px] uppercase tracking-widest3 text-gold mb-3">
              {product.category}
            </p>
            <h1
              id={product.titleId}
              className="font-serif text-4xl md:text-5xl text-ink uppercase tracking-wide leading-tight"
            >
              {product.name}
            </h1>
            <p id={product.descId} className="sr-only">{product.shortDescription}</p>

            <div className="flex items-center gap-3 mt-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "w-3.5 h-3.5",
                      i < Math.round(product.rating)
                        ? "fill-gold text-gold"
                        : "text-sand"
                    )}
                  />
                ))}
              </div>
              <span className="text-xs text-stone">
                {product.rating.toFixed(1)} · {product.reviews} reviews
              </span>
            </div>

            <p className="mt-6 font-serif text-3xl text-ink">{formatPrice(product.price)}</p>

            <p className="mt-5 text-sm text-ink-soft leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Tone selector */}
            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-widest2 text-ink-soft mb-3">
                Tone — <span className="text-ink">{tone}</span>
              </p>
              <div className="flex gap-3">
                {product.tones.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTone(t)}
                    className={cn(
                      "px-6 py-2.5 text-[11px] uppercase tracking-widest2 font-medium border transition-all",
                      tone === t
                        ? "border-ink bg-ink text-white"
                        : "border-sand text-ink-soft hover:border-ink hover:text-ink"
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to cart */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <div className="flex items-center border border-sand">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="p-3.5 text-ink hover:text-gold transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 text-sm text-ink min-w-[40px] text-center">{qty}</span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQty((q) => q + 1)}
                  className="p-3.5 text-ink hover:text-gold transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button
                type="button"
                onClick={handleAdd}
                className={cn(
                  "flex-1 inline-flex items-center justify-center gap-2 text-[11px] uppercase tracking-widest2 font-medium py-4 px-8 transition-colors",
                  added ? "bg-ink text-white" : "bg-gold text-white hover:bg-gold-deep"
                )}
              >
                {added ? "Added to Cart" : (<><ShoppingBag className="w-4 h-4" /> Add to Cart</>)}
              </button>
            </div>

            <p className="mt-4 text-xs text-stone">
              Free worldwide shipping · 30-day returns · Hypoallergenic
            </p>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion items={accordions} />
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="bg-cream py-20 md:py-24">
        <div className="max-w-8xl mx-auto px-5 md:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-ink text-center mb-12">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
