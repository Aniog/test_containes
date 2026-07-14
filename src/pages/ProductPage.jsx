import { useEffect, useRef, useState } from "react"
import { Link, useParams, Navigate } from "react-router-dom"
import { Star, ShoppingBag, Check, ChevronLeft } from "lucide-react"
import { findProductById, relatedProducts } from "@/data/products.js"
import { useCart } from "@/lib/cart-context.jsx"
import { formatPrice, cn } from "@/lib/utils.js"
import ImageGallery from "@/components/product/ImageGallery.jsx"
import VariantSelector from "@/components/product/VariantSelector.jsx"
import QuantitySelector from "@/components/product/QuantitySelector.jsx"
import Accordion from "@/components/ui/Accordion.jsx"
import ProductCard from "@/components/product/ProductCard.jsx"

const toneOptions = ["Gold", "Silver"]

export default function ProductPage() {
  const { productId } = useParams()
  const product = findProductById(productId)
  const { addItem, openCart } = useCart()
  const [tone, setTone] = useState(product?.tone || "Gold")
  const [qty, setQty] = useState(1)
  const [justAdded, setJustAdded] = useState(false)
  const relatedRef = useRef(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [productId])

  useEffect(() => {
    if (product) setTone(product.tone)
    setQty(1)
  }, [product?.id])

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const mod = await import("@strikingly/sdk")
        const cfgMod = await import("@/strk-img-config.json")
        if (cancelled) return
        if (mod?.ImageHelper?.loadImages) {
          mod.ImageHelper.loadImages(cfgMod.default || cfgMod, relatedRef.current)
        }
      } catch (e) {}
    })()
    return () => {
      cancelled = true
    }
  }, [product?.id])

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const handleAdd = () => {
    addItem({ id: product.id, tone, qty })
    setJustAdded(true)
    setTimeout(() => {
      setJustAdded(false)
      openCart()
    }, 600)
  }

  const related = relatedProducts(product, 4)

  const accordionItems = [
    { title: "Description", content: product.description },
    { title: "Materials & Care", content: (
        <div className="space-y-2">
          <p>{product.materials}</p>
          <p>{product.care}</p>
        </div>
      ) },
    { title: "Shipping & Returns", content: product.shipping },
  ]

  return (
    <div className="page-fade bg-ivory pt-20 md:pt-24">
      <div className="container-x">
        <div className="py-4">
          <Link
            to="/shop"
            className="inline-flex items-center gap-1 font-sans text-[11px] uppercase tracking-[0.22em] text-taupe hover:text-espresso"
          >
            <ChevronLeft className="h-3 w-3" strokeWidth={1.5} />
            Back to Shop
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-10 pb-16 md:grid-cols-2 md:gap-16 md:pb-24">
          <ImageGallery product={product} />

          <div className="md:pt-2">
            <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-taupe">
              {product.category}
            </span>
            <h1
              id="pd-title"
              className="product-name mt-3 text-3xl text-espresso md:text-4xl lg:text-5xl"
            >
              {product.name}
            </h1>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex items-center gap-0.5 text-gold" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "h-3.5 w-3.5",
                      i < Math.round(product.rating) ? "fill-current" : "fill-hairline text-hairline"
                    )}
                    strokeWidth={0}
                  />
                ))}
              </div>
              <span className="font-sans text-xs text-taupe">
                {product.rating} · {product.reviewCount} reviews
              </span>
            </div>
            <p className="mt-6 font-serif text-3xl text-espresso">
              {formatPrice(product.price)}
            </p>
            <p className="mt-4 text-base leading-relaxed text-taupe">
              {product.short}
            </p>

            <div className="mt-8">
              <VariantSelector
                options={toneOptions}
                value={tone}
                onChange={setTone}
              />
            </div>

            <div className="mt-6">
              <QuantitySelector value={qty} onChange={setQty} />
            </div>

            <button
              type="button"
              onClick={handleAdd}
              className={cn(
                "btn-primary mt-8 w-full",
                justAdded && "bg-espresso text-ivory hover:bg-espresso"
              )}
              disabled={justAdded}
            >
              {justAdded ? (
                <>
                  <Check className="h-4 w-4" strokeWidth={2} /> Added
                </>
              ) : (
                <>
                  <ShoppingBag className="h-4 w-4" strokeWidth={1.5} />
                  Add to Bag — {formatPrice(product.price * qty)}
                </>
              )}
            </button>

            <p className="mt-4 text-center font-sans text-xs text-taupe">
              Free worldwide shipping on orders over $75 · 30-day returns
            </p>

            <div className="mt-10">
              <Accordion items={accordionItems} defaultOpen={0} />
            </div>
          </div>
        </div>

        {/* Related */}
        <section ref={relatedRef} className="border-t border-hairline py-20 md:py-24">
          <div className="mb-10 flex items-baseline justify-between">
            <h2 className="h-section text-3xl text-espresso md:text-4xl">
              You may also like
            </h2>
            <Link
              to="/shop"
              className="btn-ghost"
            >
              Shop All
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-8">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
