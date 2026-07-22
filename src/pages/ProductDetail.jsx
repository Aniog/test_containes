import { useState, useEffect, useRef } from "react"
import { useParams, Link } from "react-router-dom"
import { Plus, Minus, ChevronDown, ShoppingBag, Check } from "lucide-react"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { formatPrice, cn, resolveImgUrl } from "@/lib/utils"
import StarRating from "@/components/ui/StarRating"
import ProductCard from "@/components/product/ProductCard"
import Button from "@/components/ui/Button"

const accordions = [
  {
    key: "description",
    title: "Description",
    render: (p) => (
      <div className="space-y-3 text-cocoa leading-relaxed">
        <p>{p.description}</p>
        <p>
          Each piece is hand-finished in small batches and presented in signature Velmora packaging —
          ready to be worn or gifted.
        </p>
      </div>
    ),
  },
  {
    key: "materials",
    title: "Materials & Care",
    render: () => (
      <ul className="space-y-2 text-cocoa leading-relaxed list-disc pl-5">
        <li>18K gold plated over a hypoallergenic brass base</li>
        <li>Nickel-free, lead-free, cadmium-free</li>
        <li>Avoid contact with water, perfume, and lotions to preserve the finish</li>
        <li>Store in the provided pouch away from direct sunlight</li>
        <li>Clean gently with a soft, dry microfibre cloth</li>
      </ul>
    ),
  },
  {
    key: "shipping",
    title: "Shipping & Returns",
    render: () => (
      <ul className="space-y-2 text-cocoa leading-relaxed list-disc pl-5">
        <li>Free worldwide shipping on all orders</li>
        <li>Orders dispatched within 1–2 business days</li>
        <li>30-day returns on unworn items in original packaging</li>
        <li>Complimentary gift wrapping available at checkout</li>
      </ul>
    ),
  },
]

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()
  const [variant, setVariant] = useState("Gold")
  const [quantity, setQuantity] = useState(1)
  const [activeImg, setActiveImg] = useState(0)
  const [openAcc, setOpenAcc] = useState("description")
  const [added, setAdded] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [id])

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-4xl text-espresso">Product not found</h1>
        <Link to="/shop" className="mt-6 inline-block text-gold-deep underline">
          Back to shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 4)
  const gallery = product.gallery

  const handleAdd = () => {
    addItem(product, { variant, quantity })
    setAdded(true)
    setTimeout(() => setAdded(false), 1800)
  }

  return (
    <div className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 md:px-10 pt-6">
        <nav className="text-[11px] uppercase tracking-[0.18em] text-taupe">
          <Link to="/" className="hover:text-espresso transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-espresso transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-cocoa">{product.name}</span>
        </nav>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-3 overflow-x-auto no-scrollbar md:max-h-[640px] md:overflow-y-auto">
              {gallery.map((g, i) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setActiveImg(i)}
                  className={cn(
                    "relative shrink-0 w-20 h-24 md:w-20 md:h-24 overflow-hidden bg-cream border transition-colors",
                    activeImg === i ? "border-gold" : "border-transparent hover:border-sand"
                  )}
                  aria-label={`View image ${i + 1}`}
                >
                  <img
                    alt={`${product.name} thumbnail ${i + 1}`}
                    src={resolveImgUrl(g)}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>

            <div className="relative flex-1 aspect-[4/5] overflow-hidden bg-cream">
              <img
                alt={product.name}
                src={resolveImgUrl(gallery[activeImg])}
                className="absolute inset-0 h-full w-full object-cover"
              />
              {product.badge && (
                <span className="absolute left-4 top-4 bg-ivory/90 text-espresso text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 font-medium">
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="md:py-4">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
              {product.category}
            </p>
            <h1
              id="pdp-name"
              className="font-serif text-4xl md:text-5xl text-espresso uppercase tracking-[0.1em] font-light leading-tight"
            >
              {product.name}
            </h1>
            <p id="pdp-tagline" className="mt-3 text-taupe text-sm">
              {product.tagline}
            </p>

            <div className="mt-4 flex items-center gap-3">
              <StarRating rating={product.rating} size={15} showValue count={product.reviews} />
            </div>

            <p className="mt-6 font-serif text-3xl text-espresso">{formatPrice(product.price)}</p>

            <p className="mt-6 text-cocoa leading-relaxed">{product.description}</p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-[0.2em] text-cocoa mb-3">
                Tone — <span className="text-espresso">{variant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setVariant(v)}
                    className={cn(
                      "px-6 py-3 text-[11px] uppercase tracking-[0.18em] font-medium border transition-colors duration-300",
                      variant === v
                        ? "border-espresso bg-espresso text-ivory"
                        : "border-sand text-espresso hover:border-espresso"
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-[11px] uppercase tracking-[0.2em] text-cocoa mb-3">Quantity</p>
              <div className="inline-flex items-center border border-sand">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 text-espresso hover:bg-cream transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="px-6 text-sm text-espresso min-w-[3ch] text-center">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-3 text-espresso hover:bg-cream transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              type="button"
              onClick={handleAdd}
              className="mt-8 w-full bg-gold text-ivory hover:bg-gold-deep py-5 text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 flex items-center justify-center gap-2"
            >
              {added ? (
                <>
                  <Check size={15} /> Added to Cart
                </>
              ) : (
                <>
                  <ShoppingBag size={15} /> Add to Cart — {formatPrice(product.price * quantity)}
                </>
              )}
            </button>

            <p className="mt-4 text-xs text-taupe text-center">
              Free worldwide shipping · 30-day returns
            </p>

            {/* Accordions */}
            <div className="mt-10 border-t border-sand">
              {accordions.map((acc) => {
                const open = openAcc === acc.key
                return (
                  <div key={acc.key} className="border-b border-sand">
                    <button
                      type="button"
                      onClick={() => setOpenAcc(open ? null : acc.key)}
                      className="w-full flex items-center justify-between py-5 text-left"
                    >
                      <span className="text-[11px] uppercase tracking-[0.2em] text-espresso font-medium">
                        {acc.title}
                      </span>
                      <ChevronDown
                        size={16}
                        className={cn(
                          "text-espresso transition-transform duration-300",
                          open && "rotate-180"
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        "grid transition-all duration-300",
                        open ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                      )}
                    >
                      <div className="overflow-hidden text-sm">
                        {acc.render(product)}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">Complete the Look</p>
            <h2 className="font-serif text-4xl md:text-5xl text-espresso font-light">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button as={Link} to="/shop" variant="outline">
              View All Jewelry
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
