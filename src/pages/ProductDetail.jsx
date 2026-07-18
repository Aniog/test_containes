import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Minus, Plus, ShoppingBag, ChevronRight } from "lucide-react"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { useStrkImages } from "@/lib/useStrkImages"
import { formatPrice, cn } from "@/lib/utils"
import StarRating from "@/components/ui/StarRating"
import ProductGallery from "@/components/product/ProductGallery"
import Accordion from "@/components/product/Accordion"
import ProductCard from "@/components/product/ProductCard"

const VARIANTS = [
  { id: "gold", label: "Gold Tone" },
  { id: "silver", label: "Silver Tone" },
]

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()
  const [variant, setVariant] = useState(product?.material || "gold")
  const [quantity, setQuantity] = useState(1)
  const galleryRef = useStrkImages([id])
  const relatedRef = useStrkImages([id])

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 pt-24">
        <h1 className="font-serif text-4xl text-espresso">Product not found</h1>
        <Link
          to="/shop"
          className="mt-6 bg-gold text-espresso text-[11px] uppercase tracking-widest2 px-8 py-3.5 hover:bg-gold-600 transition-colors"
        >
          Back to Shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 4)

  const handleAdd = () => {
    addItem(product, variant, quantity)
  }

  const accordions = [
    { title: "Description", content: product.description },
    { title: "Materials & Care", content: `${product.materials}\n\nCare: ${product.care}` },
    {
      title: "Shipping & Returns",
      content:
        "Free worldwide shipping on all orders. Orders are dispatched within 1–2 business days and delivered in 3–7 business days. Enjoy 30-day returns on unworn pieces in original packaging.",
    },
  ]

  return (
    <div className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 md:px-10 py-5">
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-muted">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <ChevronRight width={12} height={12} />
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <ChevronRight width={12} height={12} />
          <span className="text-espresso-700">{product.name}</span>
        </nav>
      </div>

      <div ref={galleryRef} className="mx-auto max-w-7xl px-6 md:px-10 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          {/* Gallery */}
          <ProductGallery product={product} />

          {/* Info */}
          <div className="md:py-4">
            {product.badge && (
              <span className="inline-block bg-gold-100 text-gold-600 text-[10px] uppercase tracking-widest2 px-3 py-1.5 mb-5">
                {product.badge}
              </span>
            )}
            <h1
              id={product.titleId}
              className="font-serif text-3xl md:text-4xl text-espresso uppercase tracking-widest2 leading-tight"
            >
              {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-3">
              <StarRating value={product.rating} size={15} />
              <span className="text-xs text-muted">
                {product.rating} · {product.reviews} reviews
              </span>
            </div>

            <p className="mt-5 font-serif text-2xl text-espresso">{formatPrice(product.price)}</p>

            <p id={product.descId} className="mt-5 text-espresso-700 leading-relaxed">
              {product.shortDesc}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-widest2 text-muted mb-3">
                Tone — <span className="text-espresso-700">{VARIANTS.find((v) => v.id === variant)?.label}</span>
              </p>
              <div className="flex gap-3">
                {VARIANTS.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setVariant(v.id)}
                    className={cn(
                      "px-5 py-2.5 text-[11px] uppercase tracking-widest2 border transition-colors",
                      variant === v.id
                        ? "border-espresso bg-espresso text-cream"
                        : "border-line text-espresso-700 hover:border-espresso",
                    )}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to cart */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <div className="flex items-center border border-line">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-3.5 text-espresso hover:text-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus width={14} height={14} />
                </button>
                <span className="px-4 text-espresso-700 min-w-[3ch] text-center">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-3.5 text-espresso hover:text-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus width={14} height={14} />
                </button>
              </div>
              <button
                type="button"
                onClick={handleAdd}
                className="flex-1 bg-gold text-espresso text-[11px] uppercase tracking-widest2 py-4 hover:bg-gold-600 transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingBag width={15} height={15} />
                Add to Cart — {formatPrice(product.price * quantity)}
              </button>
            </div>

            <p className="mt-5 text-xs text-muted">
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
      <section ref={relatedRef} className="bg-cream-100 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <h2 className="font-serif text-3xl md:text-4xl text-espresso text-center mb-12">
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
