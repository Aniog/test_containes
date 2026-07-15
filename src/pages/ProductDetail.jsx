import { useState } from "react"
import { useParams, Link, Navigate } from "react-router-dom"
import { Minus, Plus, ShoppingBag, ChevronRight } from "lucide-react"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { useStrkImages } from "@/components/ui/StrkImage"
import { formatPrice, cn } from "@/lib/utils"
import ProductGallery from "@/components/product/ProductGallery"
import ProductCard from "@/components/product/ProductCard"
import StarRating from "@/components/ui/StarRating"
import Accordion from "@/components/ui/Accordion"

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()
  const [color, setColor] = useState(product?.colors?.[0] || "Gold")
  const [quantity, setQuantity] = useState(1)
  const relatedRef = useStrkImages([id])

  if (!product) return <Navigate to="/shop" replace />

  const handleAdd = () => {
    addItem(product, { color, quantity })
  }

  const related = getRelatedProducts(product.id, 4)

  return (
    <div className="pt-24 md:pt-28">
      {/* Breadcrumb */}
      <div className="max-w-content mx-auto px-6 md:px-10 pb-6">
        <nav className="flex items-center gap-2 text-xs text-muted">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
          <ChevronRight size={12} />
          <Link to={`/shop?category=${product.category}`} className="hover:text-gold transition-colors">
            {product.category}
          </Link>
          <ChevronRight size={12} />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-content mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
        {/* Gallery */}
        <ProductGallery product={product} />

        {/* Info */}
        <div className="md:py-4">
          <p className="text-xs uppercase tracking-widest3 text-gold mb-3">{product.category}</p>
          <h1
            id={product.titleId}
            className="font-serif text-3xl md:text-4xl uppercase tracking-widest2 text-ink leading-tight"
          >
            {product.name}
          </h1>
          <p id={product.descId} className="sr-only">
            {product.tagline}
          </p>

          <div className="flex items-center gap-3 mt-4">
            <StarRating rating={product.rating} size={15} />
            <span className="text-xs text-muted">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-5 font-serif text-2xl text-gold">{formatPrice(product.price)}</p>

          <p className="mt-5 text-sm text-muted leading-relaxed max-w-md">
            {product.description}
          </p>

          {/* Variant selector */}
          <div className="mt-8">
            <p className="text-xs uppercase tracking-widest2 text-ink mb-3">
              Tone: <span className="text-muted">{color}</span>
            </p>
            <div className="flex gap-3">
              {product.colors.map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={cn(
                    "px-6 py-2.5 rounded-full text-xs uppercase tracking-widest2 transition-all duration-300 border",
                    color === c
                      ? "bg-ink text-cream border-ink"
                      : "bg-transparent text-ink border-sand hover:border-ink"
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <p className="text-xs uppercase tracking-widest2 text-ink mb-3">Quantity</p>
            <div className="inline-flex items-center border border-sand rounded-full">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-4 py-2.5 text-ink hover:text-gold transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus size={14} />
              </button>
              <span className="px-4 text-sm text-ink min-w-[2rem] text-center">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-4 py-2.5 text-ink hover:text-gold transition-colors"
                aria-label="Increase quantity"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <button
            onClick={handleAdd}
            className="mt-8 w-full bg-gold text-cream text-xs uppercase tracking-widest2 py-4 rounded-full hover:bg-gold-deep transition-colors duration-300 flex items-center justify-center gap-2"
          >
            <ShoppingBag size={15} />
            Add to Cart — {formatPrice(product.price * quantity)}
          </button>

          <p className="mt-4 text-xs text-muted text-center">
            Free worldwide shipping · 30-day returns · Hypoallergenic
          </p>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion title="Description" defaultOpen>
              {product.description} {product.details}
            </Accordion>
            <Accordion title="Materials & Care">
              <p className="mb-2"><span className="text-ink">Material:</span> {product.material}</p>
              <p>{product.care}</p>
            </Accordion>
            <Accordion title="Shipping & Returns">
              <p className="mb-2">Free worldwide shipping on all orders. Orders ship within 1–2 business days and arrive in 3–7 days depending on location.</p>
              <p>Enjoy 30-day hassle-free returns. Items must be unworn and in original packaging.</p>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section ref={relatedRef} className="py-20 md:py-28 mt-12 md:mt-20 bg-cream-deep/40">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest3 text-gold mb-3">Complete the Look</p>
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
