import { useState, useEffect, useRef } from "react"
import { useParams, Link } from "react-router-dom"
import { Minus, Plus, ShoppingBag } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import ProductGallery from "@/components/product/ProductGallery"
import ProductCard from "@/components/product/ProductCard"
import Accordion from "@/components/product/Accordion"
import StarRating from "@/components/ui/StarRating"

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()
  const ref = useRef(null)

  const [tone, setTone] = useState(product?.tone[0] || "Gold")
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [id])

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 px-5">
        <p className="font-serif text-3xl text-ink">Product not found</p>
        <Link to="/shop" className="text-gold underline">
          Back to shop
        </Link>
      </div>
    )
  }

  const titleId = `pdp-${product.id}-title`
  const descId = `pdp-${product.id}-desc`

  const accordions = [
    {
      title: "Description",
      content: (
        <div>
          <p>{product.description}</p>
        </div>
      ),
    },
    {
      title: "Materials & Care",
      content: (
        <div>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            {product.details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          <p>{product.care}</p>
        </div>
      ),
    },
    {
      title: "Shipping & Returns",
      content: (
        <div>
          <p className="mb-2">
            Free worldwide shipping on all orders. Orders are dispatched within
            1–2 business days and delivered in 3–7 business days.
          </p>
          <p>
            Enjoy 30-day returns. If your piece isn't right, return it unworn in
            its original packaging for a full refund.
          </p>
        </div>
      ),
    },
  ]

  const related = getRelatedProducts(product.id, 4)

  const handleAdd = () => {
    addItem(product, { tone, quantity })
  }

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-5">
        <nav className="text-xs uppercase tracking-widest2 text-taupe">
          <Link to="/" className="hover:text-gold">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          {/* Gallery */}
          <ProductGallery product={product} titleId={titleId} descId={descId} />

          {/* Info */}
          <div className="md:pt-4">
            {product.badge && (
              <span className="inline-block bg-champagne text-gold-deep text-[10px] uppercase tracking-widest2 font-medium px-3 py-1 mb-4">
                {product.badge}
              </span>
            )}
            <h1
              id={titleId}
              className="font-serif text-3xl md:text-4xl text-ink uppercase tracking-product leading-tight"
            >
              {product.name}
            </h1>
            <p id={descId} className="text-taupe mt-2">
              {product.subtitle}
            </p>

            <div className="flex items-center gap-3 mt-4">
              <StarRating value={product.rating} size={15} />
              <span className="text-xs text-taupe">
                {product.rating} · {product.reviews} reviews
              </span>
            </div>

            <p className="font-serif text-3xl text-gold mt-6">{formatPrice(product.price)}</p>

            <p className="text-taupe mt-5 leading-relaxed">{product.description}</p>

            {/* Tone selector */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest2 text-ink mb-3">
                Tone: <span className="text-taupe">{tone}</span>
              </p>
              <div className="flex gap-3">
                {product.tone.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTone(t)}
                    className={`px-6 py-3 text-xs uppercase tracking-widest2 font-medium border transition-colors ${
                      tone === t
                        ? "border-ink bg-ink text-ivory"
                        : "border-sand text-ink hover:border-ink"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to cart */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center border border-sand">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-12 h-12 flex items-center justify-center text-ink hover:bg-cream transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={15} />
                </button>
                <span className="w-12 text-center text-ink">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-12 h-12 flex items-center justify-center text-ink hover:bg-cream transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={15} />
                </button>
              </div>
              <button
                onClick={handleAdd}
                className="flex-1 bg-gold text-ivory text-xs uppercase tracking-widest2 font-medium py-4 hover:bg-gold-deep transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingBag size={16} /> Add to Bag
              </button>
            </div>

            <p className="text-xs text-taupe mt-4">
              Free worldwide shipping · 30-day returns
            </p>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion items={accordions} />
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="bg-cream py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-widest3 text-gold mb-3">
              Complete the Look
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 md:gap-x-6">
            {related.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                titleId={`rel-${p.id}-title`}
                descId={`rel-${p.id}-desc`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
