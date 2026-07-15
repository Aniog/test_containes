import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Star, Minus, Plus, ChevronRight } from "lucide-react"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { useStrkImages } from "@/lib/useStrkImages"
import { formatPrice, cn } from "@/lib/utils"
import Accordion from "@/components/ui/Accordion"
import ProductCard from "@/components/product/ProductCard"

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()
  const ref = useStrkImages([id])

  const [tone, setTone] = useState("Gold")
  const [quantity, setQuantity] = useState(1)
  const [activeImg, setActiveImg] = useState(0)

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-3xl text-ink mb-4">Product not found</h1>
        <Link to="/shop" className="text-champagne underline">
          Back to shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 4)

  // Gallery: primary, hover, plus two angle variants via different queries.
  const gallery = [
    {
      imgId: `${product.imgId}-gal-1`,
      query: `[${product.descId}] [${product.titleId}] gold jewelry product on neutral background`,
    },
    {
      imgId: `${product.imgIdHover}-gal-2`,
      query: `[${product.descId}] worn ${product.subtitle} ${product.name} editorial`,
    },
    {
      imgId: `${product.imgId}-gal-3`,
      query: `[${product.descId}] [${product.titleId}] close up detail gold jewelry`,
    },
    {
      imgId: `${product.imgIdHover}-gal-4`,
      query: `[${product.descId}] [${product.titleId}] gold jewelry styled flatlay`,
    },
  ]

  const accordions = [
    {
      title: "Description",
      content: (
        <>
          <p>{product.description}</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            {product.details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: "Materials & Care",
      content: <p>{product.care}</p>,
    },
    {
      title: "Shipping & Returns",
      content: (
        <>
          <p>
            Free worldwide shipping on all orders. Orders are processed within
            1–2 business days and typically arrive within 5–10 business days.
          </p>
          <p>
            Enjoy 30-day returns on unworn items in original packaging. See our
            returns policy for full details.
          </p>
        </>
      ),
    },
  ]

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5">
        <nav className="flex items-center gap-2 text-xs uppercase tracking-wider text-stone">
          <Link to="/" className="hover:text-ink">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-ink">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 md:w-20">
              {gallery.map((g, i) => (
                <button
                  key={g.imgId}
                  onClick={() => setActiveImg(i)}
                  className={cn(
                    "w-16 h-20 md:w-full md:h-24 overflow-hidden bg-sand border transition-colors",
                    activeImg === i ? "border-champagne" : "border-transparent"
                  )}
                >
                  <img
                    data-strk-img-id={`${g.imgId}-thumb`}
                    data-strk-img={g.query}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 aspect-[4/5] overflow-hidden bg-sand">
              <img
                data-strk-img-id={gallery[activeImg].imgId}
                data-strk-img={gallery[activeImg].query}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="md:pt-4">
            <p className="text-xs uppercase tracking-widest2 text-champagne mb-3">
              {product.category}
            </p>
            <h1
              id={product.titleId}
              className="font-serif text-4xl md:text-5xl uppercase tracking-widest3 text-ink mb-3"
            >
              {product.name}
            </h1>
            <p id={product.descId} className="text-stone mb-4">
              {product.subtitle}
            </p>

            <div className="flex items-center gap-2 mb-6">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "w-4 h-4",
                      i < Math.round(product.rating)
                        ? "fill-champagne text-champagne"
                        : "text-line"
                    )}
                  />
                ))}
              </div>
              <span className="text-xs text-stone">
                {product.rating.toFixed(1)} · {product.reviews} reviews
              </span>
            </div>

            <p className="font-serif text-3xl text-ink mb-6">
              {formatPrice(product.price)}
            </p>

            <p className="text-sm text-stone leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Tone selector */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest2 text-stone mb-3">
                Tone: <span className="text-ink">{tone}</span>
              </p>
              <div className="flex gap-3">
                {product.tones.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTone(t)}
                    className={cn(
                      "px-6 py-2.5 text-xs uppercase tracking-widest2 rounded-full border transition-colors duration-300",
                      tone === t
                        ? "bg-ink text-cream border-ink"
                        : "bg-transparent text-ink border-line hover:border-ink"
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest2 text-stone mb-3">
                Quantity
              </p>
              <div className="inline-flex items-center border border-line">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 text-ink hover:text-champagne transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-5 text-sm text-ink min-w-[3ch] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-3 text-ink hover:text-champagne transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={() => addItem(product, { tone, quantity })}
              className="w-full bg-champagne text-cream py-4 text-xs uppercase tracking-widest2 hover:bg-champagne-deep transition-colors duration-300 mb-8"
            >
              Add to Cart — {formatPrice(product.price * quantity)}
            </button>

            <p className="text-xs text-stone mb-10">
              Free shipping · 30-day returns · Hypoallergenic
            </p>

            {/* Accordions */}
            <Accordion items={accordions} />
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="py-20 md:py-28 bg-sand">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-3xl md:text-4xl text-ink text-center mb-12">
            You May Also Like
          </h2>
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
