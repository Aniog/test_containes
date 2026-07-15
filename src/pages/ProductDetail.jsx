import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Star, Minus, Plus, ChevronDown, ShoppingBag } from "lucide-react"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { useStrkImages, StrkImage } from "@/components/ui/StrkImage"
import ProductCard from "@/components/product/ProductCard"
import { cn, formatPrice } from "@/lib/utils"

const accordions = [
  { key: "description", label: "Description" },
  { key: "details", label: "Materials & Care" },
  { key: "shipping", label: "Shipping & Returns" },
]

const shippingText =
  "Free worldwide shipping on all orders. Orders are processed within 1–2 business days and delivered in 3–7 business days. Enjoy 30-day hassle-free returns on unworn items in their original packaging."

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()
  const ref = useStrkImages([id])

  const [variant, setVariant] = useState(product?.variants[0] || "Gold")
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState("description")
  const [activeImage, setActiveImage] = useState(0)

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 pt-20">
        <h1 className="font-serif text-3xl text-ink">Product not found</h1>
        <Link to="/shop" className="text-gold underline underline-offset-4">
          Back to shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 4)
  const galleryImages = [
    { imgId: product.imgId, label: "Primary view" },
    { imgId: product.imgIdAlt, label: "Styled on model" },
    { imgId: `${product.imgId}-detail`, label: "Detail close-up" },
    { imgId: `${product.imgId}-box`, label: "Gift boxed" },
  ]

  const handleAdd = () => {
    addItem(product, { variant, quantity })
  }

  const accordionContent = {
    description: <p>{product.description}</p>,
    details: (
      <div className="space-y-3">
        <p>{product.details}</p>
        <p>
          <span className="text-ink font-medium">Care: </span>
          {product.care}
        </p>
      </div>
    ),
    shipping: <p>{shippingText}</p>,
  }

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-5">
        <nav className="text-xs uppercase tracking-[0.15em] text-stone">
          <Link to="/" className="hover:text-gold">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 overflow-x-auto no-scrollbar">
              {galleryImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={cn(
                    "shrink-0 w-16 md:w-20 aspect-[4/5] overflow-hidden border transition-colors",
                    activeImage === i ? "border-gold" : "border-line"
                  )}
                >
                  <StrkImage
                    imgId={`thumb-${img.imgId}`}
                    query={`[${product.descId}] [${product.titleId}] ${img.label}`}
                    ratio="4x5"
                    width={160}
                    alt={`${product.name} ${img.label}`}
                    className="w-full h-full object-cover bg-sand"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[4/5] overflow-hidden bg-sand">
              <StrkImage
                imgId={`main-${galleryImages[activeImage].imgId}`}
                query={`[${product.descId}] [${product.titleId}] ${galleryImages[activeImage].label}`}
                ratio="4x5"
                width={900}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="md:py-4">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">
              {product.category}
            </p>
            <h1
              id={product.titleId}
              className="font-serif text-4xl md:text-5xl uppercase tracking-[0.1em] text-ink leading-tight mb-3"
            >
              {product.name}
            </h1>
            <p id={product.descId} className="text-stone mb-4">
              {product.subtitle}
            </p>

            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "w-4 h-4",
                      i < Math.round(product.rating)
                        ? "fill-gold text-gold"
                        : "text-line"
                    )}
                  />
                ))}
              </div>
              <span className="text-sm text-stone">
                {product.rating} · {product.reviews} reviews
              </span>
            </div>

            <p className="font-serif text-3xl text-ink mb-8">
              {formatPrice(product.price)}
            </p>

            <p className="text-stone leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-[0.2em] text-ink mb-3">
                Tone: <span className="text-stone">{variant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={cn(
                      "px-6 py-2.5 rounded-full border text-xs uppercase tracking-[0.15em] transition-colors",
                      variant === v
                        ? "bg-ink text-cream border-ink"
                        : "bg-transparent text-ink border-line hover:border-ink"
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.2em] text-ink mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-line">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 text-ink hover:text-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 text-sm tabular-nums">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-3 text-ink hover:text-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAdd}
              className="w-full bg-gold text-cream text-xs uppercase tracking-[0.2em] py-4 hover:bg-gold-soft transition-colors flex items-center justify-center gap-2 mb-3"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart · {formatPrice(product.price * quantity)}
            </button>
            <p className="text-xs text-stone text-center mb-10">
              Free shipping · 30-day returns · Ships in 1–2 business days
            </p>

            {/* Accordions */}
            <div className="border-t border-line">
              {accordions.map((acc) => (
                <div key={acc.key} className="border-b border-line">
                  <button
                    onClick={() =>
                      setOpenAccordion((open) =>
                        open === acc.key ? null : acc.key
                      )
                    }
                    className="w-full flex items-center justify-between py-5 text-left"
                  >
                    <span className="text-xs uppercase tracking-[0.2em] text-ink">
                      {acc.label}
                    </span>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 text-ink transition-transform",
                        openAccordion === acc.key && "rotate-180"
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300 text-stone text-sm leading-relaxed",
                      openAccordion === acc.key
                        ? "max-h-96 pb-5"
                        : "max-h-0"
                    )}
                  >
                    {accordionContent[acc.key]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="bg-sand py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-ink text-center mb-12">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
