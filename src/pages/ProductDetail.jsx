import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Minus, Plus, ChevronRight } from "lucide-react"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { useStrkImages } from "@/lib/useStrkImages"
import { formatPrice, cn } from "@/lib/utils"
import StarRating from "@/components/ui/StarRating"
import Accordion from "@/components/ui/Accordion"
import ProductCard from "@/components/product/ProductCard"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E"

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()
  const [variant, setVariant] = useState("Gold")
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const ref = useStrkImages([id, activeImage])

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-5 pt-24">
        <h1 className="font-serif text-3xl text-ink">Piece not found</h1>
        <p className="mt-3 text-stone">The piece you’re looking for may have moved.</p>
        <Link
          to="/shop"
          className="mt-6 inline-flex border border-ink text-ink px-8 py-3.5 text-xs uppercase tracking-[0.2em] hover:bg-ink hover:text-cream transition-all"
        >
          Back to Shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 4)

  const handleAdd = () => {
    addItem(product, { variant, quantity })
  }

  const accordions = [
    { title: "Description", content: product.description },
    { title: "Materials & Care", content: `${product.materials}\n\nCare: ${product.care}` },
    {
      title: "Shipping & Returns",
      content:
        "Free worldwide shipping on all orders. Orders are dispatched within 1–2 business days and arrive in signature Velmora packaging. Enjoy 30-day returns on unworn pieces in original condition.",
    },
  ]

  // Gallery: primary + secondary image as the two main views
  const galleryImages = [
    { imgId: product.imgId, label: "Primary view" },
    { imgId: product.imgId2, label: "Detail view" },
  ]

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-5">
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-stone">
          <Link to="/" className="hover:text-ink transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-ink transition-colors">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to={`/shop?category=${product.category}`} className="hover:text-ink transition-colors">
            {product.category}
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 pb-20 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 md:w-20">
              {galleryImages.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  className={cn(
                    "relative w-16 md:w-20 aspect-[4/5] overflow-hidden bg-sand transition-all",
                    activeImage === i
                      ? "ring-1 ring-ink ring-offset-2 ring-offset-cream"
                      : "opacity-60 hover:opacity-100"
                  )}
                  aria-label={img.label}
                >
                  <img
                    alt={`${product.name} ${img.label}`}
                    data-strk-img-id={`${img.imgId}-thumb`}
                    data-strk-img={`[${product.descId}] [${product.titleId}]`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="200"
                    src={PLACEHOLDER}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="relative flex-1 aspect-[4/5] overflow-hidden bg-sand">
              {galleryImages.map((img, i) => (
                <img
                  key={i}
                  alt={`${product.name} ${img.label}`}
                  data-strk-img-id={`${img.imgId}-main`}
                  data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="900"
                  src={PLACEHOLDER}
                  className={cn(
                    "absolute inset-0 w-full h-full object-cover transition-opacity duration-700",
                    activeImage === i ? "opacity-100" : "opacity-0"
                  )}
                />
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="md:py-4">
            <p className="text-[11px] uppercase tracking-[0.25em] text-gold mb-3">
              {product.category}
            </p>
            <h1
              id={product.titleId}
              className="font-serif text-3xl md:text-4xl text-ink uppercase tracking-[0.1em] leading-tight"
            >
              {product.name}
            </h1>
            <p id={product.descId} className="sr-only">
              {product.shortDescription}
            </p>

            <div className="flex items-center gap-3 mt-4">
              <StarRating value={product.rating} size={15} />
              <span className="text-sm text-stone">
                {product.rating} · {product.reviews} reviews
              </span>
            </div>

            <p className="mt-5 font-serif text-2xl text-ink">{formatPrice(product.price)}</p>

            <p className="mt-5 text-stone text-sm md:text-base leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-[0.2em] text-stone mb-3">
                Tone — {variant}
              </p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setVariant(v)}
                    className={cn(
                      "px-6 py-3 text-xs uppercase tracking-[0.15em] border transition-all duration-300",
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
              <p className="text-[11px] uppercase tracking-[0.2em] text-stone mb-3">Quantity</p>
              <div className="inline-flex items-center border border-line">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-11 h-11 flex items-center justify-center text-ink hover:bg-sand transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-12 text-center text-sm">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-11 h-11 flex items-center justify-center text-ink hover:bg-sand transition-colors"
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
              className="mt-8 w-full bg-gold text-cream py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-gold-soft transition-colors duration-300"
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            <p className="mt-4 text-xs text-stone text-center">
              Free shipping · 30-day returns · Hypoallergenic
            </p>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion items={accordions} />
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="bg-sand py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
              Complete the Look
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-ink">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
