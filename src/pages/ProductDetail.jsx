import { useRef, useState, useEffect } from "react"
import { useParams, Link, Navigate } from "react-router-dom"
import { Minus, Plus, ChevronRight } from "lucide-react"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { strkImgSrc } from "@/lib/images"
import { Stars } from "@/components/ui/Stars"
import Accordion from "@/components/product/Accordion"
import ProductCard from "@/components/product/ProductCard"
import { formatPrice, cn } from "@/lib/utils"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const TONES = ["Gold", "Silver"]

const GALLERY = [
  { ratio: "3x4", label: "front" },
  { ratio: "3x4", label: "worn" },
  { ratio: "3x4", label: "detail" },
  { ratio: "3x4", label: "box" },
]

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const ref = useRef(null)
  const { addItem } = useCart()

  const [tone, setTone] = useState(product?.tone || "Gold")
  const [qty, setQty] = useState(1)
  const [activeImg, setActiveImg] = useState(0)

  useEffect(() => {
      if (!ref.current) return
      const frameId = window.requestAnimationFrame(() => {
        ImageHelper.loadImages(strkImgConfig, ref.current)
      })
      return () => window.cancelAnimationFrame(frameId)
    }, [id, activeImg, tone])

  if (!product) return <Navigate to="/shop" replace />

  const related = getRelatedProducts(id, 4)

  const handleAdd = () => {
    addItem(product, { quantity: qty, tone })
  }

  const accordions = [
    { title: "Description", content: product.description },
    { title: "Materials & Care", content: product.materials },
    { title: "Shipping & Returns", content: product.shipping },
  ]

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-8xl mx-auto px-5 md:px-8 py-5">
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-widest3 text-stone">
          <Link to="/" className="hover:text-ink">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-ink">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-8xl mx-auto px-5 md:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 md:w-20">
              {GALLERY.map((g, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveImg(i)}
                  className={cn(
                    "relative w-16 md:w-20 aspect-[3/4] overflow-hidden bg-cream border transition-colors",
                    activeImg === i ? "border-gold" : "border-transparent hover:border-sand"
                  )}
                  aria-label={`View image ${i + 1}`}
                >
                  <img
                    alt={`${product.name} ${g.label}`}
                    src={strkImgSrc(`${product.imgId}-thumb-${i}`, 200)}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative aspect-[3/4] overflow-hidden bg-cream">
              <img
                alt={product.name}
                src={strkImgSrc(`${product.imgId}-main-${activeImg}`, 900)}
                className="absolute inset-0 w-full h-full object-cover"
                key={activeImg}
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-ivory/90 text-ink text-[10px] uppercase tracking-widest3 px-2.5 py-1">
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="lg:py-6">
            <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">
              {product.type}
            </p>
            <h1
              id={product.titleId}
              className="font-serif text-3xl md:text-4xl text-ink uppercase tracking-wider leading-tight"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-4">
              <Stars rating={product.rating} size="w-4 h-4" />
              <span className="text-sm text-stone">
                {product.rating} · {product.reviews} reviews
              </span>
            </div>

            <p className="font-serif text-2xl text-ink mt-5">{formatPrice(product.price)}</p>

            <p id={product.descId} className="mt-5 text-stone leading-relaxed">
              {product.shortDesc}
            </p>

            {/* Tone selector */}
            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-widest3 text-ink mb-3">
                Tone: <span className="text-stone">{tone}</span>
              </p>
              <div className="flex gap-3">
                {TONES.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTone(t)}
                    className={cn(
                      "px-6 py-2.5 rounded-full border text-[11px] uppercase tracking-widest3 transition-colors duration-300",
                      tone === t
                        ? "bg-ink text-ivory border-ink"
                        : "bg-transparent text-ink border-sand hover:border-ink"
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-[11px] uppercase tracking-widest3 text-ink mb-3">Quantity</p>
              <div className="inline-flex items-center border border-sand">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="p-3 text-ink hover:text-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-5 text-sm text-ink min-w-[3rem] text-center">{qty}</span>
                <button
                  type="button"
                  onClick={() => setQty((q) => q + 1)}
                  className="p-3 text-ink hover:text-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              type="button"
              onClick={handleAdd}
              className="w-full mt-8 bg-gold text-ink text-[11px] uppercase tracking-widest3 font-medium py-4 hover:bg-gold-deep hover:text-ivory transition-colors duration-300"
            >
              Add to Cart — {formatPrice(product.price * qty)}
            </button>

            <p className="mt-4 text-xs text-stone text-center">
              Free worldwide shipping · 30-day returns
            </p>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion items={accordions} />
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-8xl mx-auto px-5 md:px-8">
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-widest2 text-gold mb-3">Complete the Look</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink font-light">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 md:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
