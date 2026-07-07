import React, { useState, useMemo, useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { Minus, Plus, ChevronRight, Heart, Truck, RotateCcw, Shield } from "lucide-react"
import JewelryArt from "@/components/ui/JewelryArt"
import StarRating from "@/components/ui/StarRating"
import Accordion from "@/components/ui/Accordion"
import ProductCard from "@/components/ui/ProductCard"
import { useCart } from "@/context/CartContext"
import { products } from "@/data/products"
import { formatPrice } from "@/lib/utils"

const variants = [
  { id: "gold", label: "Gold" },
  { id: "silver", label: "Silver" },
]

const Product = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const product = useMemo(() => products.find((p) => p.slug === slug), [slug])
  const [activeImage, setActiveImage] = useState(0)
  const [variant, setVariant] = useState("gold")
  const [qty, setQty] = useState(1)
  const { addItem } = useCart()

  useEffect(() => {
    setActiveImage(0)
    setQty(1)
    setVariant("gold")
    window.scrollTo({ top: 0, behavior: "auto" })
  }, [slug])

  if (!product) {
    return (
      <main className="container-wrap py-32 text-center">
        <h1 className="font-serif text-3xl">Piece not found</h1>
        <Link to="/shop" className="link-arrow mt-6 inline-flex">
          Back to shop
        </Link>
      </main>
    )
  }

  const galleryAngles = [
    { palette: product.palette, variant: 0 },
    { palette: product.palette, variant: 1 },
    { palette: product.palette, variant: 2 },
    { palette: product.palette, variant: 3 },
  ]

  const related = products.filter((p) => p.id !== product.id).slice(0, 4)

  return (
    <main className="bg-ivory">
      {/* Breadcrumb */}
      <div className="container-wrap pt-28 lg:pt-32">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-[11px] font-sans uppercase tracking-[0.18em] text-muted"
        >
          <Link to="/" className="hover:text-ink">Home</Link>
          <ChevronRight size={11} strokeWidth={1.5} />
          <Link to="/shop" className="hover:text-ink">Shop</Link>
          <ChevronRight size={11} strokeWidth={1.5} />
          <span className="text-ink/70 capitalize">{product.category}</span>
          <ChevronRight size={11} strokeWidth={1.5} />
          <span className="text-ink truncate max-w-[200px]">{product.name}</span>
        </nav>
      </div>

      {/* Product */}
      <section className="container-wrap py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Gallery */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-12 gap-4">
              {/* Thumbnails (desktop) */}
              <div className="hidden lg:flex lg:col-span-2 flex-col gap-3 order-1">
                {galleryAngles.map((g, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveImage(i)}
                    className={`relative aspect-square overflow-hidden border transition-colors duration-300 ${
                      activeImage === i ? "border-ink" : "border-hairline hover:border-ink/40"
                    }`}
                    aria-label={`View image ${i + 1}`}
                  >
                    <JewelryArt
                      art={product.art}
                      palette={g.palette}
                      variant={g.variant}
                      ratio="1/1"
                      className="h-full w-full"
                    />
                  </button>
                ))}
              </div>
              {/* Main image */}
              <div className="col-span-12 lg:col-span-10 order-2">
                <div className="relative aspect-[4/5] overflow-hidden bg-ink">
                  <JewelryArt
                    art={product.art}
                    palette={galleryAngles[activeImage].palette}
                    variant={galleryAngles[activeImage].variant}
                    ratio="4/5"
                    className="h-full w-full"
                  />
                </div>
                {/* Mobile thumbnails */}
                <div className="lg:hidden mt-4 flex gap-2 overflow-x-auto no-scrollbar">
                  {galleryAngles.map((g, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveImage(i)}
                      className={`relative shrink-0 w-16 h-16 overflow-hidden border ${
                        activeImage === i ? "border-ink" : "border-hairline"
                      }`}
                      aria-label={`View image ${i + 1}`}
                    >
                      <JewelryArt
                        art={product.art}
                        palette={g.palette}
                        variant={g.variant}
                        ratio="1/1"
                        className="h-full w-full"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <span className="eyebrow">{product.material}</span>
              <h1 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-[40px] leading-[1.1] tracking-tight text-ink">
                {product.name}
              </h1>
              <div className="mt-4 flex items-center gap-3">
                <span className="font-sans text-[20px] text-ink">
                  {formatPrice(product.price)}
                </span>
                <span className="text-hairline">·</span>
                <StarRating
                  value={product.rating}
                  size={13}
                  showCount
                  count={product.reviews}
                />
              </div>

              <p className="mt-6 text-[15px] text-muted leading-relaxed">
                {product.description}
              </p>

              <div className="mt-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="eyebrow">Finish</span>
                  <span className="text-[12px] font-sans uppercase tracking-[0.18em] text-muted">
                    {variants.find((v) => v.id === variant)?.label}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {variants.map((v) => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setVariant(v.id)}
                      className={`pill ${variant === v.id ? "pill-active" : ""}`}
                      aria-pressed={variant === v.id}
                    >
                      {v.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-7">
                <span className="eyebrow">Quantity</span>
                <div className="mt-3 inline-flex items-center border border-hairline">
                  <button
                    type="button"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="h-11 w-11 flex items-center justify-center text-ink hover:text-gold-deep"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={14} strokeWidth={1.5} />
                  </button>
                  <span className="w-10 text-center font-sans text-[14px] text-ink">
                    {qty}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQty((q) => q + 1)}
                    className="h-11 w-11 flex items-center justify-center text-ink hover:text-gold-deep"
                    aria-label="Increase quantity"
                  >
                    <Plus size={14} strokeWidth={1.5} />
                  </button>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => addItem(product.id, qty, variant)}
                  className="btn-primary flex-1"
                >
                  Add to Cart · {formatPrice(product.price * qty)}
                </button>
                <button
                  type="button"
                  className="btn-outline flex items-center justify-center gap-2"
                  aria-label="Add to wishlist"
                >
                  <Heart size={14} strokeWidth={1.5} />
                  Save
                </button>
              </div>

              <ul className="mt-6 grid grid-cols-3 gap-3 text-[11px] font-sans uppercase tracking-[0.16em] text-ink/80">
                <li className="flex items-center gap-2">
                  <Truck size={13} strokeWidth={1.5} className="text-gold-deep" />
                  Free ship $75+
                </li>
                <li className="flex items-center gap-2">
                  <RotateCcw size={13} strokeWidth={1.5} className="text-gold-deep" />
                  30-day returns
                </li>
                <li className="flex items-center gap-2">
                  <Shield size={13} strokeWidth={1.5} className="text-gold-deep" />
                  Hypoallergenic
                </li>
              </ul>

              <div className="mt-8">
                <Accordion
                  items={[
                    {
                      title: "Description",
                      content: (
                        <div>
                          <p>{product.description}</p>
                          <ul className="mt-4 space-y-2">
                            {product.details.map((d) => (
                              <li key={d} className="flex items-start gap-3">
                                <span className="mt-1.5 h-1 w-1 rounded-full bg-gold-deep shrink-0" />
                                <span>{d}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ),
                    },
                    { title: "Materials & Care", content: <p>{product.materials}</p> },
                    { title: "Shipping & Returns", content: <p>{product.shipping}</p> },
                  ]}
                  defaultOpenIndex={0}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section-pad bg-ivory-warm">
        <div className="container-wrap">
          <div className="flex items-end justify-between gap-6 mb-10 lg:mb-14">
            <h2 className="font-serif text-3xl lg:text-4xl tracking-tight">
              You may also love
            </h2>
            <Link to="/shop" className="link-arrow hidden sm:inline-flex">
              Shop all
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-12 sm:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Product
