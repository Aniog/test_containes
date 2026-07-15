import { useEffect, useRef, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Star, ChevronDown, ChevronUp, Minus, Plus } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import products from "@/data/products"
import { useCart } from "@/context/CartContext"

export default function ProductDetail() {
  const { id } = useParams()
  const containerRef = useRef(null)
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [variant, setVariant] = useState("gold")
  const [openAccordion, setOpenAccordion] = useState(null)

  const product = products.find((p) => p.id === id)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  useEffect(() => {
    setQuantity(1)
    setVariant("gold")
    setOpenAccordion(null)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [id])

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-3xl text-midnight-900 mb-4">
          Product Not Found
        </h1>
        <Link
          to="/shop"
          className="text-xs tracking-widest uppercase text-gold-600 hover:text-gold-700"
        >
          Back to Shop
        </Link>
      </div>
    )
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key)
  }

  const accordions = [
    { key: "desc", title: "Description", content: product.details },
    { key: "materials", title: "Materials & Care", content: `${product.materials}\n\n${product.care}` },
    { key: "shipping", title: "Shipping & Returns", content: "Free worldwide shipping on all orders over $50. Orders are processed within 1-2 business days. We offer 30-day returns on all unworn items in their original packaging. Please allow 5-7 business days for refunds to process after we receive your return." },
  ]

  return (
    <div ref={containerRef}>
      {/* Spacer for fixed nav */}
      <div className="h-16 lg:h-20" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-[11px] text-velvet-500 mb-8">
          <Link to="/" className="hover:text-midnight-900 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-midnight-900 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-midnight-900">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div>
            <div className="aspect-[4/5] bg-velvet-100 rounded overflow-hidden">
              <img
                data-strk-img-id={product.imgId}
                data-strk-img={`[pdp-desc-${product.id}] [pdp-name-${product.id}]`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <p className="text-[11px] tracking-widest uppercase text-gold-600 mb-1">
              {product.category}
            </p>
            <h1
              id={`pdp-name-${product.id}`}
              className="font-serif text-3xl lg:text-4xl text-midnight-900 mb-2"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className={
                      i < Math.round(product.rating)
                        ? "fill-gold-400 text-gold-400"
                        : "text-velvet-200"
                    }
                  />
                ))}
              </div>
              <span className="text-[11px] text-velvet-500">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="text-xl font-medium text-midnight-900 mb-4">
              ${product.price.toFixed(2)}
            </p>

            <p
              id={`pdp-desc-${product.id}`}
              className="text-sm text-velvet-600 leading-relaxed mb-6"
            >
              {product.description}
            </p>

            {/* Variant */}
            <div className="mb-6">
              <p className="text-[11px] tracking-widest uppercase text-velvet-600 mb-2">
                Finish
              </p>
              <div className="flex gap-2">
                {["gold", "silver"].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-4 py-2 text-xs tracking-wider uppercase border transition-all duration-300 ${
                      variant === v
                        ? "border-midnight-900 bg-midnight-900 text-white"
                        : "border-velvet-200 text-velvet-600 hover:border-midnight-900"
                    }`}
                  >
                    {v === "gold" ? "18K Gold" : "Silver Tone"}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center border border-velvet-200">
                <button
                  className="p-2 hover:text-gold-600 transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </button>
                <span className="w-10 text-center text-sm">{quantity}</span>
                <button
                  className="p-2 hover:text-gold-600 transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </button>
              </div>
              <button
                onClick={() => addItem(product, quantity, variant)}
                className="flex-1 py-3 bg-gold-500 text-white text-xs tracking-widest uppercase hover:bg-gold-600 transition-colors"
              >
                Add to Cart &mdash; ${(product.price * quantity).toFixed(2)}
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-velvet-100">
              {accordions.map((acc) => (
                <div key={acc.key} className="border-b border-velvet-100">
                  <button
                    onClick={() => toggleAccordion(acc.key)}
                    className="w-full flex items-center justify-between py-4 text-xs tracking-widest uppercase text-midnight-900 hover:text-gold-600 transition-colors"
                  >
                    {acc.title}
                    {openAccordion === acc.key ? (
                      <ChevronUp size={14} />
                    ) : (
                      <ChevronDown size={14} />
                    )}
                  </button>
                  {openAccordion === acc.key && (
                    <div className="pb-4 text-sm text-velvet-600 leading-relaxed whitespace-pre-line">
                      {acc.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-16 lg:mt-24">
            <h2 className="font-serif text-2xl lg:text-3xl text-midnight-900 mb-8 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {related.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group">
                  <div className="aspect-[3/4] bg-velvet-100 rounded overflow-hidden">
                    <img
                      data-strk-img-id={`related-${p.imgId}`}
                      data-strk-img={`[pdp-desc-${p.id}] [pdp-name-${p.id}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={p.name}
                      className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-[11px] tracking-widest uppercase text-midnight-900 mt-2">
                    {p.name}
                  </p>
                  <p className="text-sm text-velvet-500">${p.price}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}