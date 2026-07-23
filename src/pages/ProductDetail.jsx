import { useEffect, useRef, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Star, Minus, Plus, ChevronRight } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { getProduct, getRelated } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { PLACEHOLDER } from "@/lib/placeholder"
import { cn } from "@/lib/utils"
import Accordion from "@/components/product/Accordion"
import ProductCard from "@/components/product/ProductCard"

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProduct(slug)
  const { addItem, openCart } = useCart()
  const ref = useRef(null)

  const [variant, setVariant] = useState("Gold")
  const [quantity, setQuantity] = useState(1)
  const [activeImg, setActiveImg] = useState(0)

  useEffect(() => {
    setVariant("Gold")
    setQuantity(1)
    setActiveImg(0)
  }, [slug])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [slug, activeImg])

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <p className="font-serif text-3xl text-ink mb-4">Piece not found</p>
        <Link to="/shop" className="text-gold uppercase tracking-[0.2em] text-xs">
          Back to Shop
        </Link>
      </div>
    )
  }

  const related = getRelated(slug)
  const gallery = [0, 1, 2, 3]

  const handleAdd = () => {
    addItem(product, { variant, quantity })
    openCart()
  }

  return (
    <div ref={ref} className="pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-8 pb-4">
        <nav className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-stone">
          <Link to="/" className="hover:text-gold">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-gold">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        {/* Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-4">
          <div className="flex md:flex-col gap-3 md:max-h-[600px] overflow-x-auto md:overflow-y-auto no-scrollbar">
            {gallery.map((i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={cn(
                  "shrink-0 w-16 md:w-20 aspect-[4/5] bg-sand overflow-hidden border",
                  activeImg === i ? "border-gold" : "border-line"
                )}
              >
                <img
                  alt={`${product.name} view ${i + 1}`}
                  data-strk-img-id={`${product.imgId}-thumb-${i}`}
                  data-strk-img={`[${product.descId}] [${product.titleId}] ${product.name} view ${i + 1}`}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="200"
                  src={PLACEHOLDER}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
          <div className="flex-1 aspect-[4/5] bg-sand overflow-hidden">
            <img
              alt={product.name}
              data-strk-img-id={`${product.imgId}-main-${activeImg}`}
              data-strk-img={`[${product.descId}] [${product.titleId}] ${product.name} main view ${activeImg + 1}`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src={PLACEHOLDER}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="md:pt-4">
          <p className="text-xs uppercase tracking-[0.25em] text-gold mb-3">
            {product.type}
          </p>
          <h1
            id={product.titleId}
            className="font-serif text-4xl md:text-5xl uppercase tracking-[0.1em] text-ink mb-4"
          >
            {product.name}
          </h1>
          <div className="flex items-center gap-3 mb-5">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "w-4 h-4",
                    i < Math.round(product.rating)
                      ? "fill-gold text-gold"
                      : "text-line"
                  )}
                />
              ))}
            </div>
            <span className="text-sm text-stone">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <p className="text-2xl text-ink mb-6 font-serif">${product.price}</p>

          <p id={product.descId} className="text-sm text-stone leading-relaxed mb-8">
            {product.shortDesc}
          </p>

          {/* Variants */}
          <div className="mb-6">
            <p className="text-xs uppercase tracking-[0.2em] text-ink mb-3">
              Tone — {variant}
            </p>
            <div className="flex gap-3">
              {product.variants.map((v) => (
                <button
                  key={v}
                  onClick={() => setVariant(v)}
                  className={cn(
                    "px-6 py-3 text-xs uppercase tracking-[0.15em] border transition-colors",
                    variant === v
                      ? "border-ink bg-ink text-ivory"
                      : "border-line text-ink hover:border-ink"
                  )}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.2em] text-ink mb-3">
              Quantity
            </p>
            <div className="inline-flex items-center border border-line">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-4 py-3 text-ink hover:text-gold"
                aria-label="Decrease quantity"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-6 text-sm text-ink">{quantity}</span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-4 py-3 text-ink hover:text-gold"
                aria-label="Increase quantity"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          <button
            onClick={handleAdd}
            className="w-full bg-gold text-ivory text-xs uppercase tracking-[0.2em] py-5 hover:bg-gold-soft transition-colors mb-10"
          >
            Add to Cart — ${product.price * quantity}
          </button>

          <Accordion
            items={[
              { title: "Description", content: product.description },
              { title: "Materials & Care", content: `${product.materials} ${product.care}` },
              { title: "Shipping & Returns", content: "Free worldwide shipping on all orders. Orders are dispatched within 1–2 business days and arrive in signature Velmora packaging. Enjoy 30-day returns on unworn pieces in original packaging." },
            ]}
          />
        </div>
      </div>

      {/* Related */}
      <section className="py-20 md:py-28 bg-sand">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">
              Complete the Look
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
