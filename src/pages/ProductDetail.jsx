import { useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { Star, Minus, Plus, ChevronRight } from "lucide-react"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { useStrkImages } from "@/hooks/useStrkImages"
import { formatPrice } from "@/lib/utils"
import { cn } from "@/lib/utils"
import Accordion from "@/components/product/Accordion"
import ProductCard from "@/components/product/ProductCard"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

// Top-level const array so the strk-img vite plugin can statically resolve
// each gallery image's id + query at build time.
const GALLERY_IMAGES = [
  { productId: "vivid-aura-jewels", imgId: "prod-vivid-aura-1f2a", query: "Vivid Aura Jewels gold ear cuff jewelry product on dark background", ratio: "4x5", width: "900" },
  { productId: "vivid-aura-jewels", imgId: "prod-vivid-aura-2b3c", query: "Vivid Aura Jewels gold ear cuff worn on ear close up", ratio: "4x5", width: "900" },
  { productId: "vivid-aura-jewels", imgId: "prod-vivid-aura-g3a4", query: "Vivid Aura Jewels gold ear cuff crystal detail macro", ratio: "4x5", width: "900" },
  { productId: "vivid-aura-jewels", imgId: "prod-vivid-aura-g4b5", query: "Vivid Aura Jewels gold ear cuff styled flat lay warm", ratio: "4x5", width: "900" },
  { productId: "majestic-flora-nectar", imgId: "prod-majestic-flora-4d5e", query: "Majestic Flora Nectar floral crystal necklace product on dark background", ratio: "4x5", width: "900" },
  { productId: "majestic-flora-nectar", imgId: "prod-majestic-flora-6f7a", query: "Majestic Flora Nectar floral necklace worn on neck close up", ratio: "4x5", width: "900" },
  { productId: "majestic-flora-nectar", imgId: "prod-majestic-flora-g7b8", query: "Majestic Flora Nectar floral crystal pendant detail macro", ratio: "4x5", width: "900" },
  { productId: "majestic-flora-nectar", imgId: "prod-majestic-flora-g8c9", query: "Majestic Flora Nectar floral necklace styled flat lay warm", ratio: "4x5", width: "900" },
  { productId: "golden-sphere-huggies", imgId: "prod-golden-sphere-8b9c", query: "Golden Sphere Huggies gold dome huggie earrings product on dark background", ratio: "4x5", width: "900" },
  { productId: "golden-sphere-huggies", imgId: "prod-golden-sphere-0d1e", query: "Golden Sphere Huggies gold dome huggies worn on ear close up", ratio: "4x5", width: "900" },
  { productId: "golden-sphere-huggies", imgId: "prod-golden-sphere-g9d0", query: "Golden Sphere Huggies gold dome huggie detail macro", ratio: "4x5", width: "900" },
  { productId: "golden-sphere-huggies", imgId: "prod-golden-sphere-g0e1", query: "Golden Sphere Huggies gold huggie earrings styled flat lay warm", ratio: "4x5", width: "900" },
  { productId: "amber-lace-earrings", imgId: "prod-amber-lace-2f3a", query: "Amber Lace Earrings gold filigree drop earrings product on dark background", ratio: "4x5", width: "900" },
  { productId: "amber-lace-earrings", imgId: "prod-amber-lace-4b5c", query: "Amber Lace Earrings gold filigree worn on ear close up", ratio: "4x5", width: "900" },
  { productId: "amber-lace-earrings", imgId: "prod-amber-lace-g5d6", query: "Amber Lace Earrings gold filigree detail macro", ratio: "4x5", width: "900" },
  { productId: "amber-lace-earrings", imgId: "prod-amber-lace-g6e7", query: "Amber Lace Earrings gold filigree earrings styled flat lay warm", ratio: "4x5", width: "900" },
  { productId: "royal-heirloom-set", imgId: "prod-royal-heirloom-6d7e", query: "Royal Heirloom Set gold earring necklace set product on dark background", ratio: "4x5", width: "900" },
  { productId: "royal-heirloom-set", imgId: "prod-royal-heirloom-8f9a", query: "Royal Heirloom Set gold jewelry worn on model close up", ratio: "4x5", width: "900" },
  { productId: "royal-heirloom-set", imgId: "prod-royal-heirloom-g9f0", query: "Royal Heirloom Set gold crystal jewelry detail macro", ratio: "4x5", width: "900" },
  { productId: "royal-heirloom-set", imgId: "prod-royal-heirloom-g0g1", query: "Royal Heirloom Set gold jewelry gift box set flat lay warm", ratio: "4x5", width: "900" },
]

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const navigate = useNavigate()
  const { addItem } = useCart()

  const [variant, setVariant] = useState(product?.variants?.[0] || "Gold")
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const ref = useStrkImages([id, activeImage])

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-4xl text-ink">Product not found</h1>
        <Link
          to="/shop"
          className="mt-6 inline-block text-[11px] uppercase tracking-[0.3em] text-ink border-b border-gold pb-1"
        >
          Back to Shop
        </Link>
      </div>
    )
  }

  const gallery = GALLERY_IMAGES.filter((g) => g.productId === product.id)
  const related = getRelatedProducts(product.id, 4)

  const handleAddToCart = () => {
    addItem(product, { variant, quantity })
  }

  const handleBuyNow = () => {
    addItem(product, { variant, quantity })
    navigate("/shop")
  }

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-8xl px-5 md:px-8 py-5">
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-stone">
          <Link to="/" className="hover:text-ink transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-ink transition-colors">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <Link
            to={`/shop?category=${product.category}`}
            className="hover:text-ink transition-colors capitalize"
          >
            {product.category}
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-ink truncate">{product.name}</span>
        </nav>
      </div>

      {/* Main */}
      <div className="mx-auto max-w-8xl px-5 md:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 md:w-20">
              {gallery.map((img, i) => (
                <button
                  key={img.imgId}
                  type="button"
                  onClick={() => setActiveImage(i)}
                  className={cn(
                    "relative shrink-0 w-16 h-20 md:w-full md:h-24 overflow-hidden bg-sand/30 transition-all",
                    activeImage === i
                      ? "ring-1 ring-ink ring-offset-2 ring-offset-cream"
                      : "opacity-60 hover:opacity-100"
                  )}
                  aria-label={`View image ${i + 1}`}
                >
                  <img
                    src={PLACEHOLDER}
                    alt=""
                    data-strk-img-id={img.imgId}
                    data-strk-img={img.query}
                    data-strk-img-ratio={img.ratio}
                    data-strk-img-width="200"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="relative flex-1 aspect-[4/5] overflow-hidden bg-sand/30">
              <img
                key={activeImage}
                src={PLACEHOLDER}
                alt={product.name}
                data-strk-img-id={gallery[activeImage].imgId}
                data-strk-img={gallery[activeImage].query}
                data-strk-img-ratio={gallery[activeImage].ratio}
                data-strk-img-width="900"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {product.badge && (
                <span className="absolute top-4 left-4 bg-cream/90 text-ink text-[10px] uppercase tracking-[0.2em] px-3 py-1.5">
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="lg:py-4">
            <p className="text-[11px] uppercase tracking-[0.3em] text-stone mb-3">
              {product.type}
            </p>
            <h1
              id={product.titleId}
              className="font-serif text-4xl md:text-5xl text-ink uppercase tracking-[0.08em] leading-tight"
            >
              {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "w-4 h-4",
                      i < Math.round(product.rating)
                        ? "fill-gold text-gold"
                        : "text-sand"
                    )}
                  />
                ))}
              </div>
              <span className="text-sm text-stone">
                {product.rating.toFixed(1)} · {product.reviews} reviews
              </span>
            </div>

            <p className="mt-6 font-serif text-3xl text-ink">{formatPrice(product.price)}</p>

            <p
              id={product.descId}
              className="mt-6 text-stone leading-relaxed text-[15px]"
            >
              {product.shortDesc}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-[0.25em] text-stone mb-3">
                Finish — <span className="text-ink">{variant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setVariant(v)}
                    className={cn(
                      "px-6 py-2.5 rounded-full text-[11px] uppercase tracking-[0.2em] border transition-all",
                      variant === v
                        ? "bg-ink text-cream border-ink"
                        : "bg-transparent text-ink border-sand hover:border-ink"
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-[0.25em] text-stone mb-3">Quantity</p>
              <div className="inline-flex items-center border border-sand">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 text-ink hover:text-gold transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-5 text-sm text-ink min-w-[3ch] text-center">{quantity}</span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-3 text-ink hover:text-gold transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 space-y-3">
              <button
                type="button"
                onClick={handleAddToCart}
                className="w-full bg-ink text-cream py-4 text-[11px] uppercase tracking-[0.3em] hover:bg-gold-deep transition-colors"
              >
                Add to Cart — {formatPrice(product.price * quantity)}
              </button>
              <button
                type="button"
                onClick={handleBuyNow}
                className="w-full border border-ink text-ink py-4 text-[11px] uppercase tracking-[0.3em] hover:bg-ink hover:text-cream transition-colors"
              >
                Buy It Now
              </button>
            </div>

            {/* Trust mini */}
            <div className="mt-8 pt-6 border-t border-sand grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-stone">Shipping</p>
                <p className="mt-1 text-xs text-ink">Free Worldwide</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-stone">Returns</p>
                <p className="mt-1 text-xs text-ink">30 Days</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-stone">Material</p>
                <p className="mt-1 text-xs text-ink">18K Gold Plate</p>
              </div>
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion
                items={[
                  { title: "Description", content: product.longDesc },
                  { title: "Materials & Care", content: `${product.materials} ${product.care}` },
                  {
                    title: "Shipping & Returns",
                    content:
                      "Free worldwide shipping on all orders. Orders are dispatched within 1–2 business days and typically arrive within 3–7 business days. Enjoy 30-day returns on unworn items in original packaging. Start a return from your order confirmation email.",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="py-20 md:py-28 bg-cream-soft">
        <div className="mx-auto max-w-8xl px-5 md:px-8">
          <div className="text-center mb-12">
            <p className="text-[11px] uppercase tracking-[0.3em] text-stone mb-3">Complete the Look</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 md:gap-x-6">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
