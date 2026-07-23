import { useEffect, useState, useRef } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { Minus, Plus, ShoppingBag, ChevronRight, Check } from "lucide-react"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import StarRating from "@/components/ui/StarRating"
import Accordion from "@/components/ui/Accordion"
import ProductCard from "@/components/product/ProductCard"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const product = getProductById(id)
  const { addItem } = useCart()

  const [tone, setTone] = useState(product?.toneOptions[0] ?? "Gold")
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [added, setAdded] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    setTone(product?.toneOptions[0] ?? "Gold")
    setQuantity(1)
    setActiveImage(0)
    setAdded(false)
  }, [id, product])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        return ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [id, activeImage])

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 pt-24 text-center">
        <h1 className="font-serif text-3xl text-ink">Piece not found</h1>
        <Link to="/shop" className="text-gold underline">
          Back to shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 4)
  const galleryIds = product.galleryIds

  const handleAdd = () => {
    addItem(product, tone, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div ref={ref} className="bg-cream pt-24 md:pt-28">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-content px-6 py-5 md:px-10">
        <nav className="flex items-center gap-2 font-sans text-xs text-stone">
          <Link to="/" className="hover:text-gold">Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="hover:text-gold">Shop</Link>
          <ChevronRight size={12} />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="mx-auto max-w-content px-6 pb-20 md:px-10">
        <div className="grid gap-10 md:grid-cols-2 md:gap-14">
          {/* Gallery */}
          <div className="flex flex-col-reverse gap-4 md:flex-row">
            {/* Thumbnails */}
            <div className="flex gap-3 md:flex-col">
              {galleryIds.map((gid, i) => (
                <button
                  key={gid}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  className={`relative aspect-square w-16 shrink-0 overflow-hidden border bg-sand md:w-20 ${
                    activeImage === i ? "border-gold" : "border-hairline"
                  }`}
                >
                  <img
                    alt={`${product.name} view ${i + 1}`}
                    data-strk-img-id={gid}
                    data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry detail`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src={PLACEHOLDER}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="relative flex-1 overflow-hidden bg-sand">
              <img
                alt={product.name}
                data-strk-img-id={activeImage === 0 ? product.imgId : product.imgId2}
                data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry editorial`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src={PLACEHOLDER}
                className="aspect-[4/5] w-full object-cover"
              />
              {product.badge && (
                <span className="absolute left-4 top-4 bg-cream/90 px-3 py-1 font-sans text-[10px] uppercase tracking-widest2 text-ink">
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="md:py-2">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold">
              {product.category}
            </p>
            <h1
              id={product.titleId}
              className="mt-3 font-serif text-4xl uppercase tracking-widest2 text-ink md:text-5xl"
            >
              {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-3">
              <StarRating rating={product.rating} size={16} />
              <span className="font-sans text-sm text-stone">
                {product.rating} · {product.reviews} reviews
              </span>
            </div>

            <p className="mt-5 font-serif text-3xl text-ink">
              {formatPrice(product.price)}
            </p>

            <p
              id={product.descId}
              className="mt-5 font-sans text-sm leading-relaxed text-stone"
            >
              {product.shortDesc}
            </p>

            {/* Tone selector */}
            <div className="mt-8">
              <p className="font-sans text-xs uppercase tracking-widest2 text-ink">
                Tone: <span className="text-stone">{tone}</span>
              </p>
              <div className="mt-3 flex gap-3">
                {product.toneOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setTone(opt)}
                    className={`rounded-full border px-6 py-2.5 font-sans text-xs uppercase tracking-widest2 transition-all ${
                      tone === opt
                        ? "border-ink bg-ink text-cream"
                        : "border-hairline text-ink hover:border-ink"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="font-sans text-xs uppercase tracking-widest2 text-ink">
                Quantity
              </p>
              <div className="mt-3 inline-flex items-center border border-hairline">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 text-ink transition-colors hover:text-gold"
                  aria-label="Decrease quantity"
                >
                  <Minus size={15} />
                </button>
                <span className="min-w-12 text-center font-sans text-sm text-ink">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-3 text-ink transition-colors hover:text-gold"
                  aria-label="Increase quantity"
                >
                  <Plus size={15} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              type="button"
              onClick={handleAdd}
              className="mt-8 flex w-full items-center justify-center gap-2 bg-gold py-4 font-sans text-xs uppercase tracking-widest2 text-cream transition-all duration-300 hover:bg-gold-soft"
            >
              {added ? (
                <>
                  <Check size={16} /> Added to Cart
                </>
              ) : (
                <>
                  <ShoppingBag size={16} /> Add to Cart · {formatPrice(product.price * quantity)}
                </>
              )}
            </button>

            <p className="mt-4 text-center font-sans text-xs text-stone">
              Free worldwide shipping · 30-day returns · Hypoallergenic
            </p>

            {/* Accordions */}
            <div className="mt-10 border-t border-hairline">
              <Accordion title="Description" defaultOpen>
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                {product.materials}
                <br />
                <br />
                {product.care}
              </Accordion>
              <Accordion title="Shipping & Returns">
                Free worldwide shipping on all orders. Orders are processed
                within 1–2 business days and typically arrive within 5–10
                business days. Enjoy 30-day returns on unworn items in original
                packaging — no questions asked.
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-24">
          <div className="mb-10 text-center">
            <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold">
              Complete the Look
            </p>
            <h2 className="mt-3 font-serif text-3xl text-ink md:text-4xl">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
