import { useState, useEffect, useRef } from "react"
import { useParams, Link } from "react-router-dom"
import { Plus, Minus, ChevronDown, Check } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { Stars } from "@/components/ui/Stars"
import { Button } from "@/components/ui/Button"
import { formatPrice, cn, resolveStrkImgUrl } from "@/lib/utils"
import ProductCard from "@/components/product/ProductCard"

function Accordion({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-line">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-xs uppercase tracking-[0.18em] font-medium">
          {title}
        </span>
        <ChevronDown
          width={16}
          className={cn("transition-transform duration-300", open && "rotate-180")}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-400",
          open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="text-sm text-stone leading-relaxed pr-6">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()
  const [tone, setTone] = useState(product?.tones?.[0] || "Gold")
  const [qty, setQty] = useState(1)
  const [activeImg, setActiveImg] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [id, activeImg])

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-32 text-center">
        <h1 className="font-serif text-4xl mb-4">Piece not found</h1>
        <Button as={Link} to="/shop" variant="outline">
          Back to Shop
        </Button>
      </div>
    )
  }

  const related = getRelatedProducts(id, 4)
  const gallery = [
    { imgId: product.imgId, q: `[${product.descId}] [${product.titleId}]` },
    { imgId: product.imgIdAlt, q: `[${product.descId}] ${product.subtitle} worn detail` },
    { imgId: `${product.imgId}-g3`, q: `[${product.descId}] ${product.name} packaging gift box` },
    { imgId: `${product.imgId}-g4`, q: `[${product.descId}] ${product.name} close up texture` },
  ]

  const onAdd = () => addItem(product, { tone, quantity: qty })

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-5 text-[11px] uppercase tracking-[0.18em] text-stone">
        <Link to="/" className="hover:text-ink">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-ink">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{product.name}</span>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8 md:gap-14 pb-20">
        {/* Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          <div className="flex md:flex-col gap-3 md:w-20">
            {gallery.map((g, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={cn(
                  "relative w-16 h-20 md:w-full md:h-24 bg-sand overflow-hidden border transition-colors",
                  activeImg === i ? "border-gold" : "border-line hover:border-stone"
                )}
              >
                <img
                  data-strk-img-id={`${g.imgId}-thumb`}
                  data-strk-img={g.q}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="200"
                  src={resolveStrkImgUrl(`${g.imgId}-thumb`)}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
          <div className="flex-1 relative aspect-[3x4] bg-sand overflow-hidden">
            <img
              data-strk-img-id={`${gallery[activeImg].imgId}-main`}
              data-strk-img={gallery[activeImg].q}
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
              src={resolveStrkImgUrl(`${gallery[activeImg].imgId}-main`)}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="md:py-4">
          <p className="text-[11px] uppercase tracking-[0.2em] text-gold mb-3">
            {product.category}
          </p>
          <h1
            id={product.titleId}
            className="font-serif text-4xl md:text-5xl uppercase tracking-[0.1em] leading-tight font-light"
          >
            {product.name}
          </h1>
          <p id={product.descId} className="sr-only">
            {product.subtitle}
          </p>

          <div className="flex items-center gap-3 mt-4">
            <Stars rating={product.rating} size={15} />
            <span className="text-xs text-stone">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <p className="font-serif text-3xl mt-5">{formatPrice(product.price)}</p>

          <p className="text-stone mt-5 leading-relaxed max-w-md">
            {product.description}
          </p>

          {/* Tone selector */}
          <div className="mt-8">
            <p className="text-[11px] uppercase tracking-[0.18em] text-stone mb-3">
              Tone: <span className="text-ink">{tone}</span>
            </p>
            <div className="flex gap-3">
              {product.tones.map((t) => (
                <button
                  key={t}
                  onClick={() => setTone(t)}
                  className={cn(
                    "px-6 py-2.5 text-xs uppercase tracking-[0.15em] border transition-all duration-300 rounded-full",
                    tone === t
                      ? "border-ink bg-ink text-ivory"
                      : "border-line text-ink hover:border-ink"
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <p className="text-[11px] uppercase tracking-[0.18em] text-stone mb-3">
              Quantity
            </p>
            <div className="inline-flex items-center border border-line">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="px-3 py-2.5 hover:bg-sand transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus width={14} />
              </button>
              <span className="px-5 text-sm w-12 text-center">{qty}</span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="px-3 py-2.5 hover:bg-sand transition-colors"
                aria-label="Increase quantity"
              >
                <Plus width={14} />
              </button>
            </div>
          </div>

          <div className="mt-8">
            <Button onClick={onAdd} className="w-full">
              Add to Cart — {formatPrice(product.price * qty)}
            </Button>
          </div>

          <div className="flex items-center gap-2 mt-5 text-xs text-stone">
            <Check width={14} className="text-gold" />
            Free shipping · 30-day returns · Hypoallergenic
          </div>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion title="Description" defaultOpen>
              <p>{product.description}</p>
              <p className="mt-3">{product.subtitle}.</p>
            </Accordion>
            <Accordion title="Materials & Care">
              <p>{product.details}</p>
              <p className="mt-3">{product.care}</p>
            </Accordion>
            <Accordion title="Shipping & Returns">
              <p>Free worldwide shipping on all orders. Orders are dispatched within 1–2 business days and arrive in 3–7 business days.</p>
              <p className="mt-3">Enjoy 30-day returns on unworn pieces in original packaging. Start a return anytime from your order confirmation.</p>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="bg-sand py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-light">
              You May Also Like
            </h2>
            <div className="w-12 h-px bg-gold mx-auto mt-6" />
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
