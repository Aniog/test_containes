import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Minus, Plus, ShoppingBag, ChevronRight } from "lucide-react"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { StrkImage } from "@/components/ui/StrkImage"
import { Stars } from "@/components/ui/Stars"
import Accordion from "@/components/ui/Accordion"
import ProductCard from "@/components/ProductCard"
import { formatPrice } from "@/lib/utils"
import { cn } from "@/lib/utils"
import { useImageLoader } from "@/hooks/useImageLoader"

const PLACEHOLDER =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()
  const ref = useImageLoader([id])

  const [variant, setVariant] = useState(product?.variants?.[0] || "Gold")
  const [quantity, setQuantity] = useState(1)
  const [activeImg, setActiveImg] = useState(0)

  useEffect(() => {
    setVariant(product?.variants?.[0] || "Gold")
    setQuantity(1)
    setActiveImg(0)
  }, [id, product])

  if (!product) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h1 className="font-serif text-4xl text-espresso">Piece not found</h1>
        <Link to="/shop" className="mt-6 inline-block text-gold underline">
          Back to shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(id, 4)

  // Gallery: primary, hover, plus two angle variants built from the same ids.
  const gallery = [
    { imgId: product.imgId, label: "Front" },
    { imgId: product.imgIdHover, label: "Worn" },
    { imgId: `${product.imgId}-detail`, label: "Detail" },
    { imgId: `${product.imgIdHover}-angle`, label: "Angle" },
  ]

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      variant,
      quantity,
      image: PLACEHOLDER,
    })
  }

  const accordions = [
    { title: "Description", content: product.description },
    { title: "Materials & Care", content: `${product.materials} ${product.care}` },
    {
      title: "Shipping & Returns",
      content:
        "Free worldwide shipping on orders over $75. Standard delivery 3–7 business days. Enjoy 30-day returns on unworn pieces in original packaging. Gift sets are final sale.",
    },
  ]

  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Breadcrumb */}
      <div className="max-w-8xl mx-auto px-5 md:px-8 pt-6 pb-2">
        <nav className="flex items-center gap-2 text-xs uppercase tracking-wide2 text-muted">
          <Link to="/" className="hover:text-gold">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/shop" className="hover:text-gold">Shop</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to={`/shop?category=${product.category}`} className="hover:text-gold">
            {product.category}
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-8xl mx-auto px-5 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-3 md:w-20">
              {gallery.map((g, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveImg(i)}
                  className={cn(
                    "shrink-0 w-16 h-20 md:w-20 md:h-24 overflow-hidden bg-stone border transition-colors",
                    activeImg === i ? "border-gold" : "border-line hover:border-muted"
                  )}
                  aria-label={`View ${g.label}`}
                >
                  <StrkImage
                    imgId={g.imgId}
                    query={`[${product.descId}] [${product.titleId}] ${g.label}`}
                    ratio="4x5"
                    width={200}
                    alt={`${product.name} ${g.label}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative aspect-[4/5] overflow-hidden bg-stone">
              {gallery.map((g, i) => (
                <StrkImage
                  key={i}
                  imgId={`${g.imgId}-large`}
                  query={`[${product.descId}] [${product.titleId}] ${g.label}`}
                  ratio="4x5"
                  width={900}
                  alt={`${product.name} ${g.label}`}
                  className={cn(
                    "absolute inset-0 w-full h-full object-cover transition-opacity duration-300",
                    activeImg === i ? "opacity-100" : "opacity-0"
                  )}
                />
              ))}
              {product.badge && (
                <span className="absolute top-4 left-4 bg-cream/90 text-espresso text-[10px] uppercase tracking-wide2 px-3 py-1.5 z-10">
                  {product.badge}
                </span>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="md:py-4">
            <p className="text-xs uppercase tracking-widest2 text-gold mb-3">
              {product.category}
            </p>
            <h1
              id={product.titleId}
              className="font-serif text-3xl md:text-4xl text-espresso uppercase tracking-wide2 leading-tight"
            >
              {product.name}
            </h1>
            <p id={product.descId} className="sr-only">
              {product.shortDescription}
            </p>

            <div className="flex items-center gap-3 mt-4">
              <Stars rating={product.rating} size={15} />
              <span className="text-sm text-muted">
                {product.rating} · {product.reviews} reviews
              </span>
            </div>

            <p className="mt-5 font-serif text-2xl text-espresso">
              {formatPrice(product.price)}
            </p>

            <p className="mt-5 text-ink/80 leading-relaxed text-sm">
              {product.shortDescription}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-wide2 text-muted mb-3">
                Tone — <span className="text-ink">{variant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setVariant(v)}
                    className={cn(
                      "px-6 py-3 text-xs uppercase tracking-wide2 border transition-colors duration-300",
                      variant === v
                        ? "bg-espresso text-cream border-espresso"
                        : "bg-transparent text-ink border-line hover:border-ink"
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to cart */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <div className="flex items-center border border-line">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-12 h-12 flex items-center justify-center text-ink hover:bg-stone transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-ink">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-12 h-12 flex items-center justify-center text-ink hover:bg-stone transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button
                type="button"
                onClick={handleAdd}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-espresso text-cream uppercase tracking-wide2 text-xs font-medium py-4 hover:bg-ink transition-colors duration-300"
              >
                <ShoppingBag className="w-4 h-4" strokeWidth={1.5} />
                Add to Cart — {formatPrice(product.price * quantity)}
              </button>
            </div>

            {/* Mini trust */}
            <ul className="mt-8 space-y-2 text-xs text-muted">
              <li>• Free worldwide shipping over $75</li>
              <li>• 30-day returns on unworn pieces</li>
              <li>• Hypoallergenic · 18K gold plated</li>
            </ul>
          </div>
        </div>

        {/* Accordions */}
        <div className="mt-16 md:mt-24 max-w-3xl">
          <Accordion items={accordions} />
        </div>

        {/* Related */}
        <div className="mt-20 md:mt-28">
          <div className="text-center mb-10 md:mb-14">
            <p className="text-xs uppercase tracking-widest2 text-gold mb-3">
              Complete the Look
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-espresso">
              You May Also Like
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 md:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
