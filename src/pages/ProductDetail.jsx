import { useState } from "react"
import { useParams, Link, Navigate } from "react-router-dom"
import { Minus, Plus, ShoppingBag, ChevronRight } from "lucide-react"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import { PLACEHOLDER } from "@/components/ui/StrkImage"
import StarRating from "@/components/ui/StarRating"
import Accordion from "@/components/ui/Accordion"
import ProductCard from "@/components/product/ProductCard"

const TONES = [
  { id: "gold", label: "18K Gold" },
  { id: "silver", label: "Silver" },
]

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()

  const [tone, setTone] = useState(product?.tone || "gold")
  const [qty, setQty] = useState(1)
  const [activeImg, setActiveImg] = useState(0)

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const related = getRelatedProducts(product.id, 4)
  const mainImg = product.images[activeImg] || product.images[0]

  const handleAdd = () => {
    addItem(product, { tone, qty })
  }

  const accordions = [
    { title: "Description", content: product.description },
    { title: "Materials & Care", content: `${product.materials} ${product.care}` },
    { title: "Shipping & Returns", content: product.shipping },
  ]

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-8xl px-5 py-6 md:px-8">
        <nav className="flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.15em] text-taupe">
          <Link to="/" className="transition-colors hover:text-gold">Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="transition-colors hover:text-gold">Shop</Link>
          <ChevronRight size={12} />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      {/* Main */}
      <div className="mx-auto grid max-w-8xl grid-cols-1 gap-10 px-5 pb-20 md:grid-cols-2 md:gap-16 md:px-8 lg:gap-20">
        {/* Gallery */}
        <div className="flex flex-col-reverse gap-4 md:flex-row">
          {/* Thumbnails */}
          <div className="flex gap-3 md:flex-col">
            {product.images.map((img, i) => (
              <button
                key={img.imgId}
                type="button"
                onClick={() => setActiveImg(i)}
                className={`relative aspect-[4/5] w-16 shrink-0 overflow-hidden border transition-colors md:w-20 ${
                  activeImg === i ? "border-gold" : "border-sand hover:border-taupe"
                }`}
                aria-label={`View image ${i + 1}`}
              >
                <img
                  alt=""
                  className="h-full w-full object-cover"
                  data-strk-img-id={img.imgId}
                  data-strk-img={`[${img.descId}] [${img.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="200"
                  src={PLACEHOLDER}
                />
              </button>
            ))}
          </div>
          {/* Main image */}
          <div className="relative flex-1 overflow-hidden bg-cream">
            <img
              alt={product.name}
              className="aspect-[4/5] w-full object-cover"
              data-strk-img-id={mainImg.imgId}
              data-strk-img={`[${mainImg.descId}] [${mainImg.titleId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src={PLACEHOLDER}
            />
            {product.badge && (
              <span className="absolute left-4 top-4 bg-ivory/90 px-3 py-1 font-sans text-[10px] uppercase tracking-[0.2em] text-ink backdrop-blur-sm">
                {product.badge}
              </span>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="md:py-4">
          <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold">
            {product.category}
          </p>
          <h1
            id={mainImg.titleId}
            className="mt-3 font-serif text-3xl uppercase tracking-[0.1em] text-ink md:text-4xl"
          >
            {product.name}
          </h1>
          <p id={mainImg.descId} className="sr-only">
            {product.shortDesc}
          </p>

          <div className="mt-4 flex items-center gap-3">
            <StarRating value={product.rating} size={15} />
            <span className="font-sans text-sm text-taupe">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-5 font-serif text-3xl text-ink">{formatPrice(product.price)}</p>

          <p className="mt-5 max-w-md font-sans text-sm leading-relaxed text-taupe">
            {product.shortDesc}
          </p>

          {/* Tone selector */}
          <div className="mt-8">
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-ink">
              Tone
            </p>
            <div className="mt-3 flex gap-3">
              {TONES.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTone(t.id)}
                  className={`px-6 py-3 font-sans text-[11px] uppercase tracking-[0.15em] transition-all duration-300 ${
                    tone === t.id
                      ? "border border-gold bg-gold text-ivory"
                      : "border border-sand text-ink hover:border-ink"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-8">
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-ink">
              Quantity
            </p>
            <div className="mt-3 inline-flex items-center border border-sand">
              <button
                type="button"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="px-4 py-3 text-ink transition-colors hover:text-gold"
                aria-label="Decrease quantity"
              >
                <Minus size={16} />
              </button>
              <span className="min-w-12 text-center font-sans text-sm text-ink">{qty}</span>
              <button
                type="button"
                onClick={() => setQty((q) => q + 1)}
                className="px-4 py-3 text-ink transition-colors hover:text-gold"
                aria-label="Increase quantity"
              >
                <Plus size={16} />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <button
            type="button"
            onClick={handleAdd}
            className="mt-8 flex w-full items-center justify-center gap-3 bg-gold py-5 font-sans text-[11px] uppercase tracking-[0.2em] text-ivory transition-colors duration-300 hover:bg-gold-dark"
          >
            <ShoppingBag size={16} />
            Add to Cart — {formatPrice(product.price * qty)}
          </button>

          <p className="mt-4 text-center font-sans text-[11px] text-taupe">
            Free worldwide shipping · 30-day returns
          </p>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion items={accordions} />
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="border-t border-sand bg-cream py-20 md:py-24">
        <div className="mx-auto max-w-8xl px-5 md:px-8">
          <div className="mb-10 text-center">
            <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold">
              Complete the Look
            </p>
            <h2 className="mt-3 font-serif text-3xl font-light text-ink md:text-4xl">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4 lg:gap-x-6">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
