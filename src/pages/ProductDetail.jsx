import { useEffect, useMemo, useRef, useState } from "react"
import { Link, useParams, Navigate } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { products } from "@/data/products"
import { useCart } from "@/hooks/useCart"
import ProductCard from "@/components/product/ProductCard"
import ProductImage from "@/components/product/ProductImage"
import { formatPrice, cn } from "@/lib/utils"
import {
  Plus,
  Minus,
  Star,
  Truck,
  RotateCcw,
  Shield,
  Heart,
  Check,
} from "lucide-react"

const VARIANTS = [
  { id: "gold", label: "Gold Tone" },
  { id: "silver", label: "Silver Tone" },
  { id: "rose-gold", label: "Rose Gold" },
]

function Accordion({ title, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-hairline">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="label text-ink">{title}</span>
        <span
          className={cn(
            "transition-transform duration-300 text-ink",
            open ? "rotate-45" : "rotate-0",
          )}
          aria-hidden="true"
        >
          <Plus className="w-4 h-4" strokeWidth={1.25} />
        </span>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-out",
          open ? "max-h-[600px] pb-6" : "max-h-0",
        )}
      >
        <div className="text-sm text-ink/80 leading-relaxed">{children}</div>
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const product = useMemo(() => products.find((p) => p.id === id), [id])
  const containerRef = useRef(null)
  const { addItem } = useCart()

  const [variant, setVariant] = useState("gold")
  const [quantity, setQuantity] = useState(1)
  const [activeImg, setActiveImg] = useState(0)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [id])

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const sameCat = products.filter(
    (p) => p.id !== product.id && p.category === product.category,
  )
  const otherCat = products.filter(
    (p) => p.id !== product.id && p.category !== product.category,
  )
  const related = [...sameCat, ...otherCat].slice(0, 4)

  const onAdd = () => {
    addItem({ id: product.id, name: product.name, price: product.price, imageQuery: product.imageQueries[0] }, variant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  // 4 gallery images: primary + 3 alt angles from queries
  const gallery = [
    product.imageQueries[0],
    product.imageQueries[1] || product.imageQueries[0],
    product.imageQueries[0],
    product.imageQueries[1] || product.imageQueries[0],
  ]

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="container-x py-5">
        <nav aria-label="Breadcrumb" className="label-2 text-mist">
          <Link to="/" className="hover:text-ink">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-ink">Shop</Link>
          <span className="mx-2">/</span>
          <Link
            to={`/shop?category=${product.category}`}
            className="hover:text-ink capitalize"
          >
            {product.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      {/* Main */}
      <div className="container-x pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16">
          {/* Gallery */}
          <div>
            <div className="hidden lg:flex gap-4">
              {/* Vertical thumbnails */}
              <ul className="flex flex-col gap-3 w-20 flex-shrink-0">
                {gallery.map((q, i) => (
                  <li key={i}>
                    <button
                      type="button"
                      onClick={() => setActiveImg(i)}
                      className={cn(
                        "block w-20 aspect-[4/5] overflow-hidden border transition-colors",
                        activeImg === i ? "border-ink" : "border-hairline hover:border-ink/40",
                      )}
                      aria-label={`View image ${i + 1}`}
                    >
                      <ProductImage
                        query={q}
                        ratio="4x5"
                        width={200}
                        imgId={`${product.id}-thumb-${i}`}
                      />
                    </button>
                  </li>
                ))}
              </ul>
              <div className="flex-1 aspect-[4/5] bg-bone overflow-hidden">
                <ProductImage
                  query={gallery[activeImg]}
                  ratio="4x5"
                  width={1100}
                  imgId={`${product.id}-main`}
                  alt={product.name}
                />
              </div>
            </div>

            {/* Mobile: single big image with dots */}
            <div className="lg:hidden">
              <div className="aspect-[4/5] bg-bone overflow-hidden">
                <ProductImage
                  query={gallery[activeImg]}
                  ratio="4x5"
                  width={900}
                  imgId={`${product.id}-mobile-main`}
                  alt={product.name}
                />
              </div>
              <ul className="flex gap-2 mt-3 overflow-x-auto no-scrollbar">
                {gallery.map((q, i) => (
                  <li key={i}>
                    <button
                      type="button"
                      onClick={() => setActiveImg(i)}
                      className={cn(
                        "w-16 h-20 overflow-hidden border flex-shrink-0",
                        activeImg === i ? "border-ink" : "border-hairline",
                      )}
                      aria-label={`View image ${i + 1}`}
                    >
                      <ProductImage
                        query={q}
                        ratio="4x5"
                        width={160}
                        imgId={`${product.id}-mob-thumb-${i}`}
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Info */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            {product.badge && (
              <p className="label-2 text-champagne-deep mb-3">{product.badge}</p>
            )}
            <h1 className="product-name text-xl md:text-2xl mb-3">
              {product.name}
            </h1>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 text-champagne fill-champagne"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span className="text-xs text-mist">
                {product.rating} · {product.reviewCount} reviews
              </span>
            </div>
            <p className="text-2xl text-ink tabular-nums mb-6">
              {formatPrice(product.price)}
            </p>
            <p className="text-ink/80 leading-relaxed mb-8">
              {product.short}
            </p>

            {/* Variant selector */}
            <div className="mb-7">
              <div className="flex items-center justify-between mb-3">
                <p className="label-2 text-ink">Finish</p>
                <p className="label-2 text-mist">
                  {VARIANTS.find((v) => v.id === variant)?.label}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {VARIANTS.map((v) => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setVariant(v.id)}
                    className={cn(
                      "px-5 py-2.5 border text-xs uppercase tracking-wider-2 font-medium transition-colors",
                      variant === v.id
                        ? "border-ink bg-ink text-cream"
                        : "border-hairline text-ink hover:border-ink",
                    )}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add */}
            <div className="mb-3 flex items-stretch gap-3">
              <div className="flex items-center border border-hairline">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-11 h-12 flex items-center justify-center text-ink hover:bg-bone transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" strokeWidth={1.5} />
                </button>
                <span className="w-10 text-center text-sm tabular-nums text-ink">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-11 h-12 flex items-center justify-center text-ink hover:bg-bone transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" strokeWidth={1.5} />
                </button>
              </div>
              <button
                type="button"
                onClick={onAdd}
                className={cn(
                  "flex-1 h-12 inline-flex items-center justify-center gap-2 font-medium uppercase tracking-wider-2 text-xs transition-colors",
                  added
                    ? "bg-champagne text-ink"
                    : "bg-ink text-cream hover:bg-champagne hover:text-ink",
                )}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" strokeWidth={1.5} />
                    Added to Bag
                  </>
                ) : (
                  <>Add to Bag · {formatPrice(product.price * quantity)}</>
                )}
              </button>
            </div>
            <button
              type="button"
              className="w-full h-12 border border-hairline text-ink hover:border-ink inline-flex items-center justify-center gap-2 font-medium uppercase tracking-wider-2 text-xs transition-colors"
            >
              <Heart className="w-4 h-4" strokeWidth={1.25} />
              Save for Later
            </button>

            {/* Quick trust row */}
            <ul className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-ink/70">
              <li className="flex items-center gap-2">
                <Truck className="w-3.5 h-3.5 text-ink" strokeWidth={1.25} />
                Free shipping over $75
              </li>
              <li className="flex items-center gap-2">
                <RotateCcw className="w-3.5 h-3.5 text-ink" strokeWidth={1.25} />
                30-day returns
              </li>
              <li className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-ink" strokeWidth={1.25} />
                Hypoallergenic
              </li>
            </ul>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="list-disc pl-5 space-y-1.5 mb-5">
                  {product.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                <p className="label-2 text-mist mb-2">Care</p>
                <ul className="list-disc pl-5 space-y-1.5">
                  {product.care.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related */}
        <section className="mt-24" aria-labelledby="related-title">
          <div className="flex items-end justify-between mb-10">
            <h2
              id="related-title"
              className="font-serif text-3xl md:text-4xl text-ink leading-tight"
            >
              You may also love
            </h2>
            <Link to="/shop" className="hidden md:inline-flex btn-ghost">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
