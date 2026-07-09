import React, { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Star, Plus, Minus, ChevronDown, ShoppingBag } from "lucide-react"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn } from "@/lib/utils"
import { getImgUrl } from "@/lib/imgConfig"
import ProductCard from "@/components/ProductCard"


const galleryImgIds = (product) => [
  product.imgId,
  product.imgId2,
  `${product.imgId}-c3`,
  `${product.imgId}-c4`,
]

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-ink/10">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-xs uppercase tracking-widest2 text-ink">{title}</span>
        <ChevronDown
          className={cn(
            "w-4 h-4 text-ink transition-transform duration-300",
            open && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-500 ease-editorial",
          open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="text-sm text-stone leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()
  const [tone, setTone] = useState(product?.tones[0] || "Gold")
  const [quantity, setQuantity] = useState(1)
  const [activeImg, setActiveImg] = useState(0)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-cream pt-20">
        <h1 className="font-serif text-3xl text-ink">Piece not found</h1>
        <Link to="/shop" className="mt-6 text-xs uppercase tracking-widest2 text-gold underline">
          Back to Shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 4)
  const gallery = galleryImgIds(product)

  const handleAdd = () => {
    addItem(product, { tone, quantity })
    setAdded(true)
    setTimeout(() => setAdded(false), 1600)
  }

  return (
    <div className="bg-cream pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-editorial mx-auto px-6 md:px-10 py-6">
        <nav className="text-xs uppercase tracking-widest2 text-stone flex items-center gap-2">
          <Link to="/" className="hover:text-gold">Home</Link>
          <span>/</span>
          <Link to={`/shop?category=${product.category}`} className="hover:text-gold">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      {/* Main */}
      <div className="max-w-editorial mx-auto px-6 md:px-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 md:w-20">
              {gallery.map((imgId, idx) => (
                <button
                  key={imgId}
                  onClick={() => setActiveImg(idx)}
                  className={cn(
                    "relative w-16 md:w-20 aspect-square overflow-hidden bg-sand shrink-0 border transition-colors",
                    activeImg === idx ? "border-gold" : "border-transparent hover:border-ink/20"
                  )}
                >
                  <img
                    src={getImgUrl(imgId)}
                    alt={`${product.name} view ${idx + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            {/* Main image */}
            <div className="relative flex-1 aspect-[4/5] overflow-hidden bg-sand">
              <img
                src={getImgUrl(gallery[activeImg])}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="lg:pl-6">
            {product.badge && (
              <p className="text-xs uppercase tracking-widest2 text-gold mb-3">
                {product.badge}
              </p>
            )}
            <h1
              id={product.titleId}
              className="font-serif text-4xl md:text-5xl text-ink uppercase tracking-widest3"
            >
              {product.name}
            </h1>
            <p id={product.descId} className="sr-only">
              {product.subtitle}
            </p>
            <p className="text-stone text-sm mt-2">{product.subtitle}</p>

            <div className="flex items-center gap-3 mt-4">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className={cn(
                      "w-4 h-4",
                      s <= Math.round(product.rating)
                        ? "fill-gold text-gold"
                        : "text-stone-light"
                    )}
                  />
                ))}
              </div>
              <span className="text-xs text-stone">
                {product.rating} · {product.reviews} reviews
              </span>
            </div>

            <p className="font-serif text-3xl text-ink mt-6">{formatPrice(product.price)}</p>

            <p className="text-stone text-sm mt-6 leading-relaxed">
              {product.description}
            </p>

            {/* Tone selector */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest2 text-stone mb-3">
                Tone: <span className="text-ink">{tone}</span>
              </p>
              <div className="flex gap-3">
                {product.tones.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTone(t)}
                    className={cn(
                      "px-6 py-2.5 text-xs uppercase tracking-widest2 border transition-colors duration-300",
                      tone === t
                        ? "border-ink bg-ink text-cream"
                        : "border-ink/25 text-ink hover:border-ink"
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to cart */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center border border-ink/20">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 text-ink hover:text-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-5 text-sm text-ink w-10 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-3 text-ink hover:text-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={handleAdd}
                className={cn(
                  "flex-1 flex items-center justify-center gap-2 text-xs uppercase tracking-widest2 py-4 transition-colors duration-300",
                  added ? "bg-gold-deep text-cream" : "bg-gold text-cream hover:bg-gold-deep"
                )}
              >
                <ShoppingBag className="w-4 h-4" />
                {added ? "Added to Bag" : "Add to Bag"}
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-10 border-t border-ink/10">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
                <p className="mt-3">{product.details}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.details}</p>
                <p className="mt-3">{product.care}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>Free worldwide shipping on all orders. Orders are dispatched within 1–2 business days and typically arrive within 3–7 days.</p>
                <p className="mt-3">Enjoy 30-day returns on unworn pieces in their original packaging. Start a return anytime from your order confirmation email.</p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="bg-sand py-20 md:py-28">
        <div className="max-w-editorial mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest2 text-gold mb-3">Complete the Look</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">You May Also Like</h2>
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
