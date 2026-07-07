import { useState, useRef } from "react"
import { useParams, Link } from "react-router-dom"
import { Star, Plus, Minus, ChevronDown, Check, Truck, RotateCcw, ShieldCheck } from "lucide-react"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn } from "@/lib/utils"
import { StrkImage, useStrkImages, PLACEHOLDER } from "@/components/ui/StrkImage"
import ProductCard from "@/components/ProductCard"

const tones = [
  { id: "gold", label: "Gold" },
  { id: "silver", label: "Silver" },
]

const accordions = [
  { key: "description", label: "Description" },
  { key: "materials", label: "Materials & Care" },
  { key: "shipping", label: "Shipping & Returns" },
]

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const containerRef = useRef(null)
  const { addItem } = useCart()

  const [activeImage, setActiveImage] = useState(0)
  const [tone, setTone] = useState("gold")
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState("description")
  const [added, setAdded] = useState(false)

  useStrkImages(containerRef, [id])

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        <h1 className="font-serif text-3xl text-ink-900 mb-4">Product not found</h1>
        <Link
          to="/shop"
          className="text-xs uppercase tracking-widest2 text-gold-600 border-b border-gold-500 pb-1"
        >
          Back to Shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 4)
  const nameId = `pdp-${product.id}-name`
  const descId = `pdp-${product.id}-desc`

  const handleAdd = () => {
    addItem(product, { tone, quantity })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div ref={containerRef} className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5">
        <nav className="text-xs uppercase tracking-widest2 text-ink-500">
          <Link to="/" className="hover:text-gold-600 transition-colors">Home</Link>
          <span className="mx-2 text-ink-300">/</span>
          <Link to="/shop" className="hover:text-gold-600 transition-colors">Shop</Link>
          <span className="mx-2 text-ink-300">/</span>
          <span className="text-ink-700">{product.category}</span>
        </nav>
      </div>

      {/* Main */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 md:max-h-[600px] overflow-x-auto md:overflow-y-auto no-scrollbar">
              {product.images.map((img, i) => (
                <button
                  key={img.id}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  className={cn(
                    "shrink-0 w-20 h-20 md:w-20 md:h-24 overflow-hidden border transition-colors",
                    activeImage === i ? "border-gold-500" : "border-ink-200 hover:border-ink-400"
                  )}
                  aria-label={`View image ${i + 1}`}
                >
                  <StrkImage
                    imgId={`${img.id}-thumb`}
                    query={`[${descId}] [${nameId}]`}
                    ratio="4x5"
                    width={200}
                    alt={img.alt}
                    src={PLACEHOLDER}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            {/* Main image */}
            <div className="flex-1 relative aspect-[4/5] overflow-hidden bg-cream-200">
              <StrkImage
                imgId={`${product.images[activeImage].id}-main`}
                query={`[${descId}] [${nameId}]`}
                ratio="4x5"
                width={900}
                alt={product.images[activeImage].alt}
                src={PLACEHOLDER}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-cream-50/90 backdrop-blur-sm text-ink-900 text-[10px] uppercase tracking-widest2 font-medium px-3 py-1.5">
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="md:py-2">
            <p className="text-xs uppercase tracking-widest3 text-gold-600 mb-3">
              {product.category}
            </p>
            <h1
              id={nameId}
              className="font-serif text-3xl md:text-4xl text-ink-900 uppercase tracking-widest2 leading-tight"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "w-4 h-4",
                      i < Math.round(product.rating)
                        ? "fill-gold-500 text-gold-500"
                        : "text-ink-300"
                    )}
                  />
                ))}
              </div>
              <span className="text-sm text-ink-500">
                {product.rating.toFixed(1)} · {product.reviews} reviews
              </span>
            </div>

            <p className="font-serif text-2xl text-ink-900 mt-5">
              {formatPrice(product.price)}
            </p>

            <p id={descId} className="mt-5 text-ink-600 leading-relaxed">
              {product.shortDesc}
            </p>

            {/* Tone selector */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest2 text-ink-700 mb-3">
                Tone: <span className="text-ink-500 normal-case tracking-normal">{tone}</span>
              </p>
              <div className="flex gap-3">
                {tones.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTone(t.id)}
                    className={cn(
                      "px-6 py-2.5 text-xs uppercase tracking-widest2 font-medium border transition-all",
                      tone === t.id
                        ? "border-gold-500 bg-gold-50 text-ink-900"
                        : "border-ink-300 text-ink-600 hover:border-ink-500"
                    )}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-widest2 text-ink-700 mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-ink-300">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-2.5 text-ink-600 hover:text-ink-900 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-5 text-sm text-ink-900 min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-2.5 text-ink-600 hover:text-ink-900 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              type="button"
              onClick={handleAdd}
              className={cn(
                "mt-8 w-full text-xs uppercase tracking-widest2 font-medium py-4 transition-colors flex items-center justify-center gap-2",
                added
                  ? "bg-ink-800 text-cream-50"
                  : "bg-gold-500 text-cream-50 hover:bg-gold-600"
              )}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  Added to Cart
                </>
              ) : (
                "Add to Cart"
              )}
            </button>

            {/* Mini trust */}
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              {[
                { icon: Truck, label: "Free Shipping" },
                { icon: RotateCcw, label: "30-Day Returns" },
                { icon: ShieldCheck, label: "Hypoallergenic" },
              ].map((t) => (
                <div key={t.label} className="flex flex-col items-center gap-1.5 py-3 border border-ink-200/60">
                  <t.icon className="w-4 h-4 text-gold-600" strokeWidth={1.5} />
                  <span className="text-[10px] uppercase tracking-widest2 text-ink-500">
                    {t.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-16 md:mt-20 max-w-3xl">
          {accordions.map((acc) => {
            const isOpen = openAccordion === acc.key
            return (
              <div key={acc.key} className="border-b border-ink-200/60">
                <button
                  type="button"
                  onClick={() => setOpenAccordion(isOpen ? null : acc.key)}
                  className="w-full flex items-center justify-between py-5 text-left"
                >
                  <span className="text-sm uppercase tracking-widest2 font-medium text-ink-900">
                    {acc.label}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 text-ink-500 transition-transform duration-300",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    isOpen ? "max-h-96 pb-6" : "max-h-0"
                  )}
                >
                  <p className="text-sm text-ink-600 leading-relaxed">
                    {product[acc.key]}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Related */}
      <section className="py-16 md:py-24 bg-cream-100">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-xs uppercase tracking-widest3 text-gold-600 mb-3">
              Complete the Look
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-ink-900 font-light">
              You May Also Like
            </h2>
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
