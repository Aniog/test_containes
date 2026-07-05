import { useState } from "react"
import { useParams, Link, Navigate } from "react-router-dom"
import { Minus, Plus, ChevronRight } from "lucide-react"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { useStrkImages } from "@/hooks/useStrkImages"
import { formatPrice, cn } from "@/lib/utils"
import StrkImage from "@/components/ui/StrkImage"
import StarRating from "@/components/ui/StarRating"
import Accordion from "@/components/ui/Accordion"
import ProductCard from "@/components/product/ProductCard"

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const ref = useStrkImages([id])
  const { addItem } = useCart()

  const [tone, setTone] = useState(product?.tones?.[0] || "Gold")
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  if (!product) return <Navigate to="/shop" replace />

  const related = getRelatedProducts(product.id, 4)

  const handleAdd = () => {
    addItem(product, { tone, quantity })
  }

  const accordions = [
    { title: "Description", body: product.description },
    { title: "Materials & Care", body: `${product.materials} ${product.care}` },
    {
      title: "Shipping & Returns",
      body:
        "Free worldwide shipping on all orders. Orders ship within 1–2 business days and arrive in 3–7 days depending on destination. Enjoy 30-day returns on unworn pieces in original packaging — no questions asked.",
    },
  ]

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 text-[11px] uppercase tracking-[0.18em] text-stone flex items-center gap-2">
        <Link to="/" className="hover:text-gold transition-colors">Home</Link>
        <ChevronRight size={12} />
        <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
        <ChevronRight size={12} />
        <span className="text-ink">{product.name}</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 pb-20">
        {/* Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-3 md:w-20">
            {product.images.map((img, i) => (
              <button
                key={img.imgId}
                type="button"
                onClick={() => setActiveImage(i)}
                className={cn(
                  "w-16 md:w-20 aspect-[4/5] overflow-hidden bg-sand border transition-colors",
                  activeImage === i ? "border-gold" : "border-transparent hover:border-ink/20"
                )}
              >
                <StrkImage
                  imgId={`${img.imgId}-thumb`}
                  query={`[${product.titleId}] [${product.descId}]`}
                  ratio="4x5"
                  width={200}
                  alt={`${product.name} view ${i + 1}`}
                />
              </button>
            ))}
          </div>
          {/* Main image */}
          <div className="flex-1 aspect-[4/5] overflow-hidden bg-sand">
            <StrkImage
              imgId={`${product.images[activeImage].imgId}-main`}
              query={`[${product.titleId}] [${product.descId}]`}
              ratio="4x5"
              width={900}
              alt={product.name}
            />
          </div>
        </div>

        {/* Info */}
        <div className="md:py-4">
          {product.badge && (
            <span className="inline-block bg-sand text-ink text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 mb-4">
              {product.badge}
            </span>
          )}
          <h1
            id={product.titleId}
            className="font-serif text-3xl md:text-4xl uppercase tracking-[0.12em] leading-tight"
          >
            {product.name}
          </h1>
          <p id={product.descId} className="sr-only">
            {product.shortDescription}
          </p>

          <div className="mt-3 flex items-center gap-3">
            <StarRating value={product.rating} size={15} />
            <span className="text-sm text-stone">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-5 font-serif text-2xl">{formatPrice(product.price)}</p>

          <p className="mt-5 text-stone leading-relaxed max-w-md">
            {product.shortDescription}
          </p>

          {/* Tone selector */}
          <div className="mt-8">
            <p className="text-[11px] uppercase tracking-[0.2em] text-stone mb-3">
              Tone — <span className="text-ink">{tone}</span>
            </p>
            <div className="flex gap-3">
              {product.tones.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTone(t)}
                  className={cn(
                    "px-6 py-2.5 rounded-full text-[11px] uppercase tracking-[0.18em] border transition-colors",
                    tone === t
                      ? "bg-ink text-cream border-ink"
                      : "bg-transparent text-ink border-ink/25 hover:border-ink"
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Add to cart */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <div className="inline-flex items-center border border-ink/20">
              <button
                type="button"
                aria-label="Decrease quantity"
                className="px-4 py-3.5 hover:bg-sand transition-colors"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                <Minus size={15} />
              </button>
              <span className="px-5 text-sm tabular-nums w-12 text-center">{quantity}</span>
              <button
                type="button"
                aria-label="Increase quantity"
                className="px-4 py-3.5 hover:bg-sand transition-colors"
                onClick={() => setQuantity((q) => q + 1)}
              >
                <Plus size={15} />
              </button>
            </div>
            <button
              type="button"
              onClick={handleAdd}
              className="flex-1 bg-gold text-cream py-3.5 text-[11px] uppercase tracking-[0.25em] font-medium hover:bg-gold-deep transition-colors"
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>
          </div>

          <p className="mt-4 text-xs text-stone">
            Free shipping · 30-day returns · Hypoallergenic
          </p>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion items={accordions} />
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="py-20 md:py-24 bg-sand/60">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-center mb-12">
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
