import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { ShoppingBag, Minus, Plus, ChevronRight, Check } from "lucide-react"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { useStrkImages } from "@/hooks/useStrkImages"
import { formatPrice, cn } from "@/lib/utils"
import StarRating from "@/components/ui/StarRating"
import Accordion from "@/components/ui/Accordion"
import ProductCard from "@/components/product/ProductCard"
import Reveal from "@/components/ui/Reveal"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

// Gallery thumbnails — reuse product image IDs with varied queries
function buildGalleryImages(product) {
  return [
    {
      imgId: `${product.imgId}-g1`,
      query: `[${product.descId}] [${product.titleId}] product on neutral background`,
    },
    {
      imgId: `${product.imgId}-g2`,
      query: `[${product.descId}] ${product.name} worn on model close up`,
    },
    {
      imgId: `${product.imgId}-g3`,
      query: `[${product.descId}] ${product.name} detail macro gold`,
    },
    {
      imgId: `${product.imgId}-g4`,
      query: `[${product.descId}] ${product.name} styled flat lay editorial`,
    },
  ]
}

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()
  const containerRef = useStrkImages([id])

  const [tone, setTone] = useState(product?.tones?.[0] || "Gold")
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    setTone(product?.tones?.[0] || "Gold")
    setQuantity(1)
    setActiveImage(0)
    setAdded(false)
  }, [id, product])

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 pt-24 text-center">
        <h1 className="font-serif text-3xl text-charcoal">Piece not found</h1>
        <p className="mt-3 text-sm text-stone">
          The piece you're looking for may have moved or sold out.
        </p>
        <Link
          to="/shop"
          className="mt-6 border border-charcoal px-8 py-3 text-[11px] font-medium uppercase tracking-widest2 text-charcoal transition-colors hover:bg-charcoal hover:text-cream"
        >
          Back to Shop
        </Link>
      </div>
    )
  }

  const gallery = buildGalleryImages(product)
  const related = getRelatedProducts(product.id, 4)

  const handleAddToCart = () => {
    addItem(product, { tone, quantity })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const accordionItems = [
    { title: "Description", content: product.description },
    { title: "Materials & Care", content: `${product.materials}\n\nCare: ${product.care}` },
    {
      title: "Shipping & Returns",
      content:
        "Free worldwide shipping on all orders. Orders are dispatched within 1–2 business days and typically arrive within 5–10 business days internationally. Enjoy 30-day returns on unworn pieces in their original packaging. For any questions, our concierge team is here to help.",
    },
  ]

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 py-6 md:px-10">
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-widest2 text-stone">
          <Link to="/" className="transition-colors hover:text-gold">Home</Link>
          <ChevronRight width={12} height={12} />
          <Link to="/shop" className="transition-colors hover:text-gold">Shop</Link>
          <ChevronRight width={12} height={12} />
          <span className="text-charcoal">{product.name}</span>
        </nav>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse gap-4 md:flex-row">
            {/* Thumbnails */}
            <div className="flex gap-3 md:flex-col">
              {gallery.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  className={cn(
                    "h-20 w-16 flex-shrink-0 overflow-hidden border bg-cream-deep transition-all md:h-24 md:w-20",
                    activeImage === i ? "border-gold" : "border-transparent opacity-70 hover:opacity-100"
                  )}
                >
                  <img
                    alt={`${product.name} view ${i + 1}`}
                    data-strk-img-id={img.imgId}
                    data-strk-img={img.query}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="200"
                    src={PLACEHOLDER}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="relative flex-1 overflow-hidden bg-cream-deep">
              <div className="aspect-[4/5] w-full">
                <img
                  alt={product.name}
                  data-strk-img-id={gallery[activeImage].imgId}
                  data-strk-img={gallery[activeImage].query}
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="900"
                  src={PLACEHOLDER}
                  className="h-full w-full object-cover"
                />
              </div>
              {product.badge && (
                <span className="absolute left-4 top-4 bg-cream/90 px-3 py-1 text-[10px] font-medium uppercase tracking-widest2 text-charcoal backdrop-blur-sm">
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="lg:py-4">
            <p className="text-[11px] font-medium uppercase tracking-widest3 text-gold">
              {product.category}
            </p>
            <h1
              id={product.titleId}
              className="mt-3 font-serif text-3xl font-light uppercase tracking-widest2 text-charcoal md:text-4xl"
            >
              {product.name}
            </h1>
            <p id={product.descId} className="sr-only">
              {product.shortDescription}
            </p>

            <div className="mt-4 flex items-center gap-3">
              <StarRating rating={product.rating} size={16} />
              <span className="text-sm text-stone">
                {product.rating} · {product.reviews} reviews
              </span>
            </div>

            <p className="mt-6 font-serif text-3xl text-charcoal">
              {formatPrice(product.price)}
            </p>

            <p className="mt-5 text-sm leading-relaxed text-stone">
              {product.shortDescription}
            </p>

            {/* Tone selector */}
            <div className="mt-8">
              <p className="text-[11px] font-semibold uppercase tracking-widest2 text-charcoal">
                Tone: <span className="text-stone">{tone}</span>
              </p>
              <div className="mt-3 flex gap-3">
                {product.tones.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTone(t)}
                    className={cn(
                      "rounded-full border px-6 py-2.5 text-[11px] font-medium uppercase tracking-widest2 transition-all",
                      tone === t
                        ? "border-charcoal bg-charcoal text-cream"
                        : "border-sand text-charcoal hover:border-charcoal"
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-[11px] font-semibold uppercase tracking-widest2 text-charcoal">
                Quantity
              </p>
              <div className="mt-3 inline-flex items-center border border-sand">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="px-4 py-3 text-charcoal transition-colors hover:text-gold"
                >
                  <Minus width={14} height={14} />
                </button>
                <span className="min-w-12 text-center text-sm text-charcoal">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                  className="px-4 py-3 text-charcoal transition-colors hover:text-gold"
                >
                  <Plus width={14} height={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              type="button"
              onClick={handleAddToCart}
              className={cn(
                "mt-8 flex w-full items-center justify-center gap-2 py-4 text-[11px] font-medium uppercase tracking-widest2 transition-all duration-300",
                added ? "bg-gold-deep text-cream" : "bg-gold text-cream hover:bg-gold-deep"
              )}
            >
              {added ? (
                <>
                  <Check width={15} height={15} />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingBag width={15} height={15} />
                  Add to Cart — {formatPrice(product.price * quantity)}
                </>
              )}
            </button>

            {/* Trust mini */}
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-stone">
              <span>Free worldwide shipping</span>
              <span>·</span>
              <span>30-day returns</span>
              <span>·</span>
              <span>Hypoallergenic</span>
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>

        {/* Related products */}
        <Reveal className="mt-24">
          <div className="mb-10 text-center">
            <p className="text-[11px] font-medium uppercase tracking-widest3 text-gold">
              Complete the Look
            </p>
            <h2 className="mt-3 font-serif text-3xl font-light text-charcoal md:text-4xl">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4 md:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  )
}
