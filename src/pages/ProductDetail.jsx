import { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { Plus, Minus, ChevronDown, Check, ArrowRight } from "lucide-react"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn } from "@/lib/utils"
import StarRating from "@/components/ui/StarRating"
import ProductCard from "@/components/product/ProductCard"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const accordions = [
  { key: "description", label: "Description" },
  { key: "materials", label: "Materials & Care" },
  { key: "shipping", label: "Shipping & Returns" },
]

const shippingText =
  "Free worldwide shipping on all orders. Orders are processed within 1–2 business days and delivered in 3–7 business days. Enjoy 30-day returns on unworn items in original packaging — no questions asked."

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = getProductById(id)
  const { addItem } = useCart()

  const [selectedTone, setSelectedTone] = useState(product?.tone?.[0] || "Gold")
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState("description")
  const [added, setAdded] = useState(false)

  useEffect(() => {
    if (product) {
      setSelectedTone(product.tone[0])
      setQuantity(1)
      setActiveImage(0)
      setOpenAccordion("description")
      window.scrollTo(0, 0)
    }
  }, [id, product])

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-serif text-3xl text-espresso">Product not found</h1>
        <Link
          to="/shop"
          className="mt-6 inline-block text-[11px] uppercase tracking-widest text-gold"
        >
          Back to Shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 4)
  const titleId = `pdp-${product.id}-title`
  const descId = `pdp-${product.id}-desc`

  const handleAdd = () => {
    addItem(product, { tone: selectedTone, quantity })
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  const accordionContent = {
    description: <p className="text-sm leading-relaxed text-espresso/70">{product.description}</p>,
    materials: <p className="text-sm leading-relaxed text-espresso/70">{product.materials}</p>,
    shipping: <p className="text-sm leading-relaxed text-espresso/70">{shippingText}</p>,
  }

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-espresso/50">
          <Link to="/" className="hover:text-gold">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-gold">Shop</Link>
          <span>/</span>
          <span className="text-espresso/80">{product.name}</span>
        </nav>
      </div>

      {/* Main */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pb-20 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Gallery */}
        <div className="flex flex-col-reverse gap-4 md:flex-row">
          {/* Thumbnails */}
          <div className="flex gap-3 overflow-x-auto md:flex-col md:overflow-visible">
            {product.galleryIds.map((gId, i) => (
              <button
                key={gId}
                type="button"
                onClick={() => setActiveImage(i)}
                className={cn(
                  "relative aspect-square w-20 shrink-0 overflow-hidden border bg-stone transition-colors md:w-24",
                  activeImage === i ? "border-gold" : "border-transparent hover:border-espresso/20"
                )}
              >
                <img
                  alt={`${product.name} view ${i + 1}`}
                  data-strk-img-id={gId}
                  data-strk-img={`[${descId}] [${titleId}] ${product.subType}`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                  src={PLACEHOLDER}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main image — reuses the active thumbnail's image ID */}
          <div className="relative flex-1 overflow-hidden bg-stone aspect-[4/5]">
            <img
              key={activeImage}
              alt={product.name}
              data-strk-img-id={product.galleryIds[activeImage]}
              data-strk-img={`[${descId}] [${titleId}] ${product.subType}`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src={PLACEHOLDER}
              className="absolute inset-0 h-full w-full object-cover"
            />
            {product.badge && (
              <span className="absolute left-5 top-5 bg-cream/90 px-3 py-1 text-[10px] uppercase tracking-ultra text-espresso backdrop-blur-sm">
                {product.badge}
              </span>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="lg:py-6">
          <p className="text-[11px] uppercase tracking-ultra text-gold mb-3">
            {product.subType}
          </p>
          <h1
            id={titleId}
            className="font-serif text-3xl uppercase tracking-widest text-espresso md:text-4xl"
          >
            {product.name}
          </h1>

          <div className="mt-4 flex items-center gap-3">
            <StarRating rating={product.rating} size={15} />
            <span className="text-sm text-espresso/60">
              {product.rating.toFixed(1)} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-5 font-serif text-2xl text-espresso">
            {formatPrice(product.price)}
          </p>

          <p id={descId} className="mt-5 text-sm leading-relaxed text-espresso/70">
            {product.shortDescription}
          </p>

          {/* Tone selector */}
          <div className="mt-8">
            <p className="mb-3 text-[11px] uppercase tracking-widest text-espresso/60">
              Tone: <span className="text-espresso">{selectedTone}</span>
            </p>
            <div className="flex gap-3">
              {product.tone.map((tone) => (
                <button
                  key={tone}
                  type="button"
                  onClick={() => setSelectedTone(tone)}
                  className={cn(
                    "min-w-[88px] border px-5 py-2.5 text-[11px] uppercase tracking-widest transition-all",
                    selectedTone === tone
                      ? "border-espresso bg-espresso text-cream"
                      : "border-espresso/20 text-espresso hover:border-espresso"
                  )}
                >
                  {tone}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <p className="mb-3 text-[11px] uppercase tracking-widest text-espresso/60">
              Quantity
            </p>
            <div className="inline-flex items-center border border-espresso/20">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-4 py-3 text-espresso/60 transition-colors hover:text-espresso"
                aria-label="Decrease quantity"
              >
                <Minus size={14} />
              </button>
              <span className="w-12 text-center text-sm text-espresso">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                className="px-4 py-3 text-espresso/60 transition-colors hover:text-espresso"
                aria-label="Increase quantity"
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
              "mt-8 flex w-full items-center justify-center gap-2 py-4 text-[11px] uppercase tracking-widest transition-all duration-300",
              added ? "bg-espresso-500 text-cream" : "bg-gold text-cream hover:bg-gold-dark"
            )}
          >
            {added ? (
              <>
                <Check size={15} /> Added to Cart
              </>
            ) : (
              `Add to Cart · ${formatPrice(product.price * quantity)}`
            )}
          </button>

          <p className="mt-4 text-center text-[11px] text-espresso/50">
            Free shipping · 30-day returns · Hypoallergenic
          </p>

          {/* Accordions */}
          <div className="mt-10 border-t border-espresso/10">
            {accordions.map((acc) => {
              const isOpen = openAccordion === acc.key
              return (
                <div key={acc.key} className="border-b border-espresso/10">
                  <button
                    type="button"
                    onClick={() => setOpenAccordion(isOpen ? null : acc.key)}
                    className="flex w-full items-center justify-between py-5 text-left"
                  >
                    <span className="text-[11px] uppercase tracking-widest text-espresso">
                      {acc.label}
                    </span>
                    <ChevronDown
                      size={16}
                      className={cn(
                        "text-espresso/50 transition-transform duration-300",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-300",
                      isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                    )}
                  >
                    <div className="overflow-hidden">
                      {accordionContent[acc.key]}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="bg-sand py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-[11px] uppercase tracking-ultra text-gold mb-3">
              Complete the Look
            </p>
            <h2 className="font-serif text-3xl text-espresso md:text-4xl">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4 lg:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
