import { useEffect, useRef, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { useReveal } from "@/lib/useReveal"
import { formatPrice } from "@/lib/utils"
import StarRating from "@/components/ui/StarRating"
import Accordion from "@/components/ui/Accordion"
import ProductCard from "@/components/product/ProductCard"

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()
  const ref = useRef(null)

  const [variant, setVariant] = useState("Gold")
  const [quantity, setQuantity] = useState(1)
  const [activeImg, setActiveImg] = useState(0)

  useReveal()

  useEffect(() => {
    setVariant("Gold")
    setQuantity(1)
    setActiveImg(0)
  }, [id])

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      if (ref.current) ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [id, activeImg])

  if (!product) {
    return (
      <div className="max-w-3xl mx-auto px-5 py-32 text-center">
        <h1 className="font-serif text-4xl text-ink-800">Piece not found</h1>
        <Link to="/shop" className="mt-6 inline-block text-xs uppercase tracking-widest2 text-gold border-b border-gold pb-1">
          Back to Shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 4)
  const accordions = [
    { title: "Description", content: product.description },
    { title: "Materials & Care", content: product.materials },
    { title: "Shipping & Returns", content: product.shipping },
  ]

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-5">
        <nav className="text-xs uppercase tracking-widest2 text-ink-400">
          <Link to="/" className="hover:text-gold">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-gold">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-ink-700">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-3 md:max-h-[600px] md:overflow-y-auto no-scrollbar">
              {product.galleryIds.map((gid, i) => (
                <button
                  key={gid}
                  onClick={() => setActiveImg(i)}
                  className={`relative shrink-0 w-20 h-24 md:w-20 md:h-24 overflow-hidden bg-sand border transition-colors ${
                    activeImg === i ? "border-gold" : "border-transparent"
                  }`}
                >
                  <img
                    alt={`${product.name} view ${i + 1}`}
                    data-strk-img-id={gid}
                    data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry detail`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="relative flex-1 aspect-[4/5] overflow-hidden bg-sand">
              <img
                alt={product.name}
                data-strk-img-id={`${product.galleryIds[activeImg]}-main`}
                data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="md:py-4">
            <p className="text-xs uppercase tracking-widest3 text-gold mb-3">
              {product.type}
            </p>
            <h1
              id={product.titleId}
              className="font-serif text-4xl md:text-5xl text-ink-800 uppercase tracking-wide leading-tight"
            >
              {product.name}
            </h1>
            <p id={product.descId} className="sr-only">
              {product.shortDesc}
            </p>

            <div className="flex items-center gap-3 mt-4">
              <StarRating rating={product.rating} size={15} />
              <span className="text-sm text-ink-500">
                {product.rating} · {product.reviews} reviews
              </span>
            </div>

            <p className="mt-5 text-2xl font-serif text-ink-800">
              {formatPrice(product.price)}
            </p>

            <p className="mt-5 text-ink-600 leading-relaxed">
              {product.shortDesc}
            </p>

            {/* Variants */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest2 text-ink-700 mb-3">
                Tone — <span className="text-gold">{variant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-widest2 border transition-colors ${
                      variant === v
                        ? "bg-ink-800 text-cream border-ink-800"
                        : "bg-transparent text-ink-700 border-ink-300 hover:border-ink-800"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-widest2 text-ink-700 mb-3">Quantity</p>
              <div className="inline-flex items-center border border-ink-300">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 text-ink-600 hover:text-gold"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="px-5 text-sm text-ink-800 min-w-[3ch] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-3 text-ink-600 hover:text-gold"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, { variant, quantity })}
              className="mt-8 w-full bg-ink-800 text-cream text-xs uppercase tracking-widest2 py-4 hover:bg-gold transition-colors duration-300"
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            <p className="mt-4 text-xs text-ink-500 text-center">
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
      <section className="bg-sand py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-ink-800 text-center mb-12 reveal">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 reveal">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
