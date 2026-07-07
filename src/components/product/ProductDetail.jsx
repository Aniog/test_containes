import { useState } from "react"
import { Link, useParams, Navigate } from "react-router-dom"
import { Minus, Plus, Heart, Truck, RotateCcw, Shield } from "lucide-react"
import { getProductById, getRelated } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { ProductGallery } from "@/components/product/ProductGallery"
import { Accordion } from "@/components/product/Accordion"
import { ProductCard } from "@/components/product/ProductCard"
import { RatingStars } from "@/components/ui/RatingStars"
import { formatPrice } from "@/lib/utils"

const TONES = ["Gold", "Silver", "Rose Gold"]

export function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addToCart } = useCart()
  const [tone, setTone] = useState(product?.tone ?? "Gold")
  const [qty, setQty] = useState(1)

  if (!product) return <Navigate to="/shop" replace />

  const onAdd = () => addToCart(product.id, qty)

  const related = getRelated(product.id, 4)
  const accordions = [
    { title: "Description",    content: <p>{product.description}</p> },
    { title: "Materials & Care", content: <p>{product.materials} {product.care}</p> },
    { title: "Shipping & Returns", content: <p>{product.shipping}</p> },
  ]

  return (
    <div className="pt-20 md:pt-24">
      <div className="max-w-editorial mx-auto px-6 md:px-10 lg:px-14">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-[11px] tracking-widest2 uppercase text-cocoa-50 py-6">
          <Link to="/" className="hover:text-cocoa">Home</Link>
          <span className="mx-2 text-line">/</span>
          <Link to="/shop" className="hover:text-cocoa">Shop</Link>
          <span className="mx-2 text-line">/</span>
          <span className="text-cocoa">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 pb-16 md:pb-24">
          {/* Left: gallery */}
          <ProductGallery product={product} />

          {/* Right: info */}
          <div className="md:sticky md:top-28 md:self-start flex flex-col gap-6">
            <span className="eyebrow text-gold-300">{product.material}</span>
            <h1 className="product-name text-cocoa text-lg md:text-xl">
              {product.name}
            </h1>
            <div className="flex items-center gap-3">
              <RatingStars value={product.rating} count={product.reviews} />
            </div>
            <p className="font-serif text-3xl md:text-4xl text-cocoa">
              {formatPrice(product.price)}
            </p>
            <p className="text-cocoa-100 leading-relaxed max-w-md">
              {product.short}
            </p>

            {/* Tone selector */}
            <div className="flex flex-col gap-3 mt-2">
              <span className="eyebrow text-cocoa-50">Finish: <span className="text-cocoa">{tone}</span></span>
              <div className="flex flex-wrap gap-2">
                {TONES.map((t) => {
                  const active = tone === t
                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTone(t)}
                      className={
                        "px-5 py-2.5 border text-[11px] tracking-widest2 uppercase transition-all duration-300 " +
                        (active
                          ? "border-cocoa bg-cocoa text-bone"
                          : "border-line text-cocoa-100 hover:border-cocoa hover:text-cocoa")
                      }
                    >
                      {t}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Quantity + Add to cart */}
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-stretch gap-3">
                <div className="inline-flex items-center border border-line">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="w-11 h-12 inline-flex items-center justify-center text-cocoa-100 hover:text-cocoa"
                  >
                    <Minus size={14} strokeWidth={1.5} />
                  </button>
                  <span className="w-10 text-center self-center text-sm">{qty}</span>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() => setQty((q) => q + 1)}
                    className="w-11 h-12 inline-flex items-center justify-center text-cocoa-100 hover:text-cocoa"
                  >
                    <Plus size={14} strokeWidth={1.5} />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={onAdd}
                  className="btn-primary flex-1"
                >
                  Add to Cart
                </button>
                <button
                  type="button"
                  aria-label="Save to wishlist"
                  className="w-12 h-12 inline-flex items-center justify-center border border-line text-cocoa-100 hover:border-cocoa hover:text-cocoa transition-colors"
                >
                  <Heart size={16} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Reassurance icons */}
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 pt-6 border-t border-line">
              <li className="flex items-center gap-2 text-[11px] tracking-widest2 uppercase text-cocoa-100">
                <Truck size={14} strokeWidth={1.5} className="text-gold-300" /> Free shipping over $75
              </li>
              <li className="flex items-center gap-2 text-[11px] tracking-widest2 uppercase text-cocoa-100">
                <RotateCcw size={14} strokeWidth={1.5} className="text-gold-300" /> 30-day returns
              </li>
              <li className="flex items-center gap-2 text-[11px] tracking-widest2 uppercase text-cocoa-100">
                <Shield size={14} strokeWidth={1.5} className="text-gold-300" /> Hypoallergenic
              </li>
            </ul>

            {/* Accordions */}
            <div className="mt-6">
              <Accordion items={accordions} defaultOpen={0} />
            </div>
          </div>
        </div>
      </div>

      {/* You may also like */}
      <section className="py-16 md:py-24 bg-bone-50">
        <div className="max-w-editorial mx-auto px-6 md:px-10 lg:px-14">
          <div className="flex flex-col items-center gap-3 mb-10 md:mb-14 text-center">
            <span className="eyebrow text-gold-300">Pairs Well With</span>
            <h2 className="editorial-heading text-3xl md:text-4xl">You may also like</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
