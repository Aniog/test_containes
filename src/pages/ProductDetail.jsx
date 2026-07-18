import { useEffect, useRef, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Minus, Plus, ChevronRight, Check } from "lucide-react"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn } from "@/lib/utils"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import Button from "@/components/ui/Button"
import StarRating from "@/components/ui/StarRating"
import Accordion from "@/components/ui/Accordion"
import ProductCard from "@/components/product/ProductCard"

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()

  const containerRef = useRef(null)
  const [tone, setTone] = useState(product?.tones?.[0] || "Gold")
  const [qty, setQty] = useState(1)
  const [activeImg, setActiveImg] = useState(0)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    setTone(product?.tones?.[0] || "Gold")
    setQty(1)
    setActiveImg(0)
    setAdded(false)
  }, [id, product])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [id])

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-serif text-3xl text-espresso">Piece not found</h1>
        <p className="mt-4 text-taupe">
          The piece you’re looking for may have moved.
        </p>
        <Button as={Link} to="/shop" variant="solid" size="md" className="mt-8">
          Back to Shop
        </Button>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 4)

  const handleAdd = () => {
    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      tone,
      qty,
      imgId: product.imgId,
      titleId: product.titleId,
      descId: product.descId,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const gallery = [
    { imgId: product.imgId, label: "Primary" },
    { imgId: product.imgId2, label: "Worn" },
  ]

  return (
    <div ref={containerRef} className="pt-20">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 py-6 md:px-10">
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-[0.15em] text-taupe">
          <Link to="/" className="hover:text-gold">Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="hover:text-gold">Shop</Link>
          <ChevronRight size={12} />
          <Link to={`/shop?category=${product.category}`} className="hover:text-gold capitalize">
            {product.category}
          </Link>
          <ChevronRight size={12} />
          <span className="text-espresso">{product.name}</span>
        </nav>
      </div>

      {/* Main */}
      <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 md:grid-cols-2 md:gap-16 md:px-10 lg:gap-20">
        {/* Gallery */}
        <div className="flex flex-col-reverse gap-4 md:flex-row">
          <div className="flex gap-3 md:flex-col">
            {gallery.map((g, i) => (
              <button
                key={g.imgId}
                type="button"
                onClick={() => setActiveImg(i)}
                className={cn(
                  "relative aspect-[4/5] w-20 overflow-hidden bg-sand transition-opacity",
                  activeImg === i ? "opacity-100 ring-1 ring-gold" : "opacity-60 hover:opacity-100"
                )}
                aria-label={`View ${g.label}`}
              >
                <img
                  alt={`${product.name} ${g.label}`}
                  data-strk-img-id={`${g.imgId}-thumb`}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
          <div className="relative flex-1">
            <div className="relative aspect-[4/5] overflow-hidden bg-sand">
              {gallery.map((g, i) => (
                <img
                  key={g.imgId}
                  alt={`${product.name} ${g.label}`}
                  data-strk-img-id={`${g.imgId}-main`}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className={cn(
                    "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
                    activeImg === i ? "opacity-100" : "opacity-0"
                  )}
                />
              ))}
              {product.badge && (
                <span className="absolute left-4 top-4 bg-cream/90 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-espresso backdrop-blur-sm">
                  {product.badge}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="md:py-4">
          <p className="text-[11px] uppercase tracking-[0.25em] text-taupe">
            {product.material}
          </p>
          <h1
            id={product.titleId}
            className="mt-3 font-serif text-3xl uppercase tracking-[0.05em] text-espresso md:text-4xl"
          >
            {product.name}
          </h1>
          <p id={product.descId} className="sr-only">
            {product.shortDesc}
          </p>

          <div className="mt-4 flex items-center gap-3">
            <StarRating value={product.rating} size={14} />
            <span className="text-xs text-taupe">
              {product.rating.toFixed(1)} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-6 font-serif text-3xl text-espresso">
            {formatPrice(product.price)}
          </p>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-taupe">
            {product.shortDesc}
          </p>

          {/* Tone selector */}
          <div className="mt-8">
            <p className="text-[11px] uppercase tracking-[0.2em] text-espresso">
              Tone: <span className="text-taupe">{tone}</span>
            </p>
            <div className="mt-3 flex gap-3">
              {product.tones.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTone(t)}
                  className={cn(
                    "rounded-full border px-6 py-2 text-[11px] uppercase tracking-[0.15em] transition-all",
                    tone === t
                      ? "border-espresso bg-espresso text-cream"
                      : "border-espresso/25 text-espresso hover:border-espresso"
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Add to cart */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex h-12 items-center border border-espresso/20">
              <button
                type="button"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="px-4 text-espresso transition-colors hover:text-gold"
                aria-label="Decrease quantity"
              >
                <Minus size={14} />
              </button>
              <span className="min-w-10 text-center text-sm text-espresso">{qty}</span>
              <button
                type="button"
                onClick={() => setQty((q) => q + 1)}
                className="px-4 text-espresso transition-colors hover:text-gold"
                aria-label="Increase quantity"
              >
                <Plus size={14} />
              </button>
            </div>
            <Button
              variant="solid"
              size="md"
              className="flex-1"
              onClick={handleAdd}
            >
              {added ? (
                <>
                  <Check size={16} /> Added to Cart
                </>
              ) : (
                `Add to Cart · ${formatPrice(product.price * qty)}`
              )}
            </Button>
          </div>

          <p className="mt-4 text-xs text-taupe">
            Free worldwide shipping · 30-day returns · Ships in 1–2 business days
          </p>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion
              items={[
                { title: "Description", content: product.description },
                { title: "Materials & Care", content: `${product.materials} ${product.care}` },
                { title: "Shipping & Returns", content: product.shipping },
              ]}
            />
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="border-t border-espresso/10 bg-sand">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
          <h2 className="mb-10 text-center font-serif text-3xl text-espresso md:text-4xl">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
