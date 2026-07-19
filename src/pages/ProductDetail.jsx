import { useEffect, useRef, useState } from "react"
import { useParams, Link, Navigate } from "react-router-dom"
import { Plus, Minus, ChevronRight } from "lucide-react"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn } from "@/lib/utils"
import Stars from "@/components/ui/Stars"
import Accordion from "@/components/ui/Accordion"
import ProductCard from "@/components/product/ProductCard"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])
  const { addItem } = useCart()

  const [tone, setTone] = useState(product?.toneOptions[0] || "Gold")
  const [qty, setQty] = useState(1)
  const [activeImg, setActiveImg] = useState(0)

  if (!product) return <Navigate to="/shop" replace />

  const gallery = [
    { imgId: product.imgId, ratio: "4x5" },
    { imgId: product.imgId2, ratio: "4x5" },
    { imgId: `${product.imgId}-3`, ratio: "4x5" },
    { imgId: `${product.imgId}-4`, ratio: "4x5" },
  ]

  const accordions = [
    { title: "Description", content: product.description },
    { title: "Materials & Care", content: `${product.materials} ${product.care}` },
    {
      title: "Shipping & Returns",
      content:
        "Free worldwide shipping on all orders. Orders are dispatched within 1–2 business days and arrive in signature Velmora packaging. Enjoy 30-day returns on unworn pieces in their original condition.",
    },
  ]

  const related = getRelatedProducts(product.id, 4)

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-content mx-auto px-6 md:px-10 py-6">
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-taupe">
          <Link to="/" className="hover:text-espresso transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-espresso transition-colors">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-espresso">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-content mx-auto px-6 md:px-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-3 overflow-x-auto no-scrollbar md:max-h-[640px]">
              {gallery.map((g, i) => (
                <button
                  key={g.imgId}
                  onClick={() => setActiveImg(i)}
                  className={cn(
                    "shrink-0 w-20 md:w-20 aspect-[4/5] overflow-hidden bg-cream border transition-colors",
                    activeImg === i ? "border-gold" : "border-transparent hover:border-sand"
                  )}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 1 1%27/%3E"
                    alt={`${product.name} thumbnail ${i + 1}`}
                    data-strk-img-id={`thumb-${g.imgId}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry detail`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="200"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="flex-1 aspect-[4/5] overflow-hidden bg-cream">
              <img
                src="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 1 1%27/%3E"
                alt={product.name}
                data-strk-img-id={gallery[activeImg].imgId}
                data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry editorial detail`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="md:py-4">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
              {product.type}
            </p>
            <h1
              id={product.titleId}
              className="font-serif text-4xl md:text-5xl uppercase tracking-[0.1em] text-espresso leading-tight"
            >
              {product.name}
            </h1>
            <p id={product.descId} className="sr-only">
              {product.shortDesc}
            </p>

            <div className="flex items-center gap-3 mt-4">
              <Stars rating={product.rating} size={15} />
              <span className="text-sm text-taupe">
                {product.rating} · {product.reviews} reviews
              </span>
            </div>

            <p className="mt-6 font-serif text-3xl text-espresso">
              {formatPrice(product.price)}
            </p>

            <p className="mt-5 text-cocoa leading-relaxed max-w-md">
              {product.shortDesc}
            </p>

            {/* Tone selector */}
            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-[0.25em] text-taupe mb-3">
                Tone — {tone}
              </p>
              <div className="flex gap-3">
                {product.toneOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setTone(opt)}
                    className={cn(
                      "px-6 py-3 text-[11px] uppercase tracking-[0.2em] border transition-colors duration-300",
                      tone === opt
                        ? "border-espresso bg-espresso text-ivory"
                        : "border-sand text-espresso hover:border-espresso"
                    )}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to cart */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center border border-sand">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="px-4 py-4 hover:bg-cream transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" strokeWidth={1.5} />
                </button>
                <span className="px-5 text-sm tabular-nums w-10 text-center">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="px-4 py-4 hover:bg-cream transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
                </button>
              </div>
              <button
                onClick={() => addItem(product, tone, qty)}
                className="flex-1 bg-gold text-espresso text-[11px] uppercase tracking-[0.25em] py-4 hover:bg-gold-deep hover:text-ivory transition-colors duration-300"
              >
                Add to Cart — {formatPrice(product.price * qty)}
              </button>
            </div>

            <p className="mt-5 text-xs text-taupe">
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
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-content mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
              Complete the Look
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-espresso">
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
