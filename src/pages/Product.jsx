import { useEffect, useState } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import { Star, Minus, Plus, Heart, Truck, RefreshCw, ShieldCheck } from "lucide-react"
import { getProductById } from "@/data/products"
import { formatPrice, cn } from "@/lib/utils"
import { useCart } from "@/context/CartContext"
import ImageGallery from "@/components/product/ImageGallery"
import Accordion from "@/components/product/Accordion"
import RelatedProducts from "@/components/product/RelatedProducts"
import { Toaster, toast } from "sonner"

export default function Product() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = getProductById(id)
  const { addItem } = useCart()
  const [variant, setVariant] = useState(product?.variants[0])
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
    if (product) setVariant(product.variants[0])
  }, [id, product])

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center pt-32 px-5 text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 font-serif text-4xl text-espresso-800">
          Piece not found
        </h1>
        <p className="mt-3 text-ink-muted max-w-md">
          The piece you're looking for may have moved. Browse our collection to
          find your next favorite.
        </p>
        <button
          type="button"
          onClick={() => navigate("/shop")}
          className="mt-8 btn-primary"
        >
          Shop the Collection
        </button>
      </div>
    )
  }

  const handleAdd = () => {
    addItem(product, variant, qty)
    setAdded(true)
    toast.success(`${product.name} added to bag`)
    setTimeout(() => setAdded(false), 1800)
  }

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#1F1812",
            color: "#F5EFE5",
            border: "1px solid #B8956A",
            fontSize: "13px",
            letterSpacing: "0.04em",
          },
        }}
      />

      <div className="bg-cream-50 pt-24 md:pt-28 pb-16 md:pb-24">
        <div className="mx-auto max-w-editorial px-5 md:px-10">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="hidden md:flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-ink-muted mb-8"
          >
            <Link to="/" className="hover:text-espresso-800 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-espresso-800 transition-colors">Shop</Link>
            <span>/</span>
            <span className="text-espresso-800">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-14">
            {/* Gallery */}
            <div className="md:col-span-7">
              <ImageGallery product={product} />
            </div>

            {/* Info */}
            <div className="md:col-span-5">
              <div className="md:sticky md:top-28">
                <p className="eyebrow">{product.badge || "Velmora Original"}</p>
                <h1
                  id="product-name"
                  className="mt-4 product-name text-espresso-800 text-[20px] md:text-[22px] leading-tight"
                >
                  {product.name}
                </h1>
                <div className="mt-3 flex items-center gap-3">
                  <div className="flex items-center gap-0.5" aria-label={`${product.rating} stars`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "h-3.5 w-3.5",
                          i < Math.round(product.rating)
                            ? "fill-gold-400 text-gold-400"
                            : "text-taupe-200"
                        )}
                        strokeWidth={1}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-ink-muted">
                    {product.rating} · {product.reviews} reviews
                  </span>
                </div>

                <p className="mt-5 font-serif text-3xl text-espresso-800">
                  {formatPrice(product.price)}
                </p>
                <p className="mt-5 text-sm md:text-[15px] leading-relaxed text-ink-muted text-pretty">
                  {product.short}
                </p>

                {/* Variant selector */}
                {product.variants.length > 1 && (
                  <div className="mt-8">
                    <div className="flex items-center justify-between mb-3">
                      <p className="eyebrow">Finish</p>
                      <p className="text-xs text-ink-muted">{variant.label}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {product.variants.map((v) => (
                        <button
                          key={v.id}
                          type="button"
                          onClick={() => setVariant(v)}
                          className={cn(
                            "inline-flex items-center gap-2 px-4 py-2.5 text-xs uppercase tracking-widest2 border transition-colors",
                            v.id === variant.id
                              ? "border-espresso-800 bg-espresso-800 text-cream-50"
                              : "border-espresso-800/20 text-espresso-800 hover:border-espresso-800"
                          )}
                        >
                          <span
                            className="h-3 w-3 rounded-full"
                            style={{ backgroundColor: v.tone }}
                          />
                          {v.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Quantity + Add */}
                <div className="mt-8 grid grid-cols-12 gap-3">
                  <div className="col-span-4 flex items-center justify-between border border-espresso-800/20">
                    <button
                      type="button"
                      aria-label="Decrease"
                      onClick={() => setQty((q) => Math.max(1, q - 1))}
                      className="h-12 w-10 inline-flex items-center justify-center text-espresso-800 hover:bg-espresso-800/5"
                    >
                      <Minus className="h-3.5 w-3.5" strokeWidth={1.6} />
                    </button>
                    <span className="text-sm text-espresso-800">{qty}</span>
                    <button
                      type="button"
                      aria-label="Increase"
                      onClick={() => setQty((q) => q + 1)}
                      className="h-12 w-10 inline-flex items-center justify-center text-espresso-800 hover:bg-espresso-800/5"
                    >
                      <Plus className="h-3.5 w-3.5" strokeWidth={1.6} />
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={handleAdd}
                    className={cn(
                      "col-span-8 h-12 text-[12px] uppercase tracking-widest2 font-medium transition-colors",
                      added
                        ? "bg-gold-500 text-cream-50"
                        : "bg-espresso-800 text-cream-50 hover:bg-espresso-700"
                    )}
                  >
                    {added ? "Added to Bag" : "Add to Bag"}
                  </button>
                </div>

                <button
                  type="button"
                  className="mt-3 w-full inline-flex items-center justify-center gap-2 h-12 border border-espresso-800/20 text-espresso-800 text-[12px] uppercase tracking-widest2 hover:border-espresso-800 transition-colors"
                >
                  <Heart className="h-3.5 w-3.5" strokeWidth={1.4} />
                  Save to Wishlist
                </button>

                {/* Trust row */}
                <ul className="mt-8 grid grid-cols-3 gap-3 border-t border-espresso-800/10 pt-6">
                  <li className="flex flex-col items-center text-center gap-1.5">
                    <Truck className="h-4 w-4 text-gold-500" strokeWidth={1.4} />
                    <span className="text-[10px] uppercase tracking-widest2 text-ink-muted leading-tight">
                      Free Shipping
                    </span>
                  </li>
                  <li className="flex flex-col items-center text-center gap-1.5">
                    <RefreshCw className="h-4 w-4 text-gold-500" strokeWidth={1.4} />
                    <span className="text-[10px] uppercase tracking-widest2 text-ink-muted leading-tight">
                      30-Day Returns
                    </span>
                  </li>
                  <li className="flex flex-col items-center text-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-gold-500" strokeWidth={1.4} />
                    <span className="text-[10px] uppercase tracking-widest2 text-ink-muted leading-tight">
                      Lifetime Quality
                    </span>
                  </li>
                </ul>

                {/* Accordion */}
                <div className="mt-8">
                  <Accordion
                    items={[
                      { title: "Description", content: product.description },
                      { title: "Materials & Care", content: product.materials + "\n\n" + product.care },
                      { title: "Shipping & Returns", content: product.shipping },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RelatedProducts ids={product.related} />
    </>
  )
}
