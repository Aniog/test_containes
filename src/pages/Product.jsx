import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useCart } from "@/context/CartContext"
import { findProductById, getRelatedProducts, CATEGORIES } from "@/data/products"
import { formatPrice, cn } from "@/lib/utils"
import Button from "@/components/ui/Button"
import StarRating from "@/components/ui/StarRating"
import Accordion from "@/components/ui/Accordion"
import VariantSelector from "@/components/ui/VariantSelector"
import QuantityStepper from "@/components/ui/QuantityStepper"
import ProductGallery from "@/components/product/ProductGallery"
import ProductCard from "@/components/product/ProductCard"
import { ChevronRight, Truck, RotateCcw, Sparkles, Leaf } from "lucide-react"

const PROMISES = [
  { icon: Truck, label: "Free worldwide shipping over $75" },
  { icon: RotateCcw, label: "30-day returns, no questions asked" },
  { icon: Sparkles, label: "Hand-finished in our Paris atelier" },
  { icon: Leaf, label: "Recycled brass · hypoallergenic" },
]

export default function Product() {
  const { id } = useParams()
  const product = findProductById(id)
  const { addToCart } = useCart()
  const [variant, setVariant] = useState(product?.defaultVariant || "gold")
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    setVariant(product?.defaultVariant || "gold")
    setQuantity(1)
  }, [product?.id])

  if (!product) {
    return (
      <div className="container-editorial py-32 text-center">
        <p className="eyebrow mb-3">Not Found</p>
        <h1 className="font-serif text-4xl text-ink mb-4">This piece has slipped away.</h1>
        <Link to="/shop" className="btn btn-outline h-11 px-6 text-[0.7rem] mt-4">
          Back to Shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(product, 4)
  const category = CATEGORIES.find((c) => c.id === product.category)

  const onAdd = () => addToCart(product.id, variant, quantity)

  return (
    <div className="bg-bone">
      <div className="container-editorial pt-8 sm:pt-10 pb-2">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[11px] uppercase tracking-eyebrow text-muted-2 font-sans">
          <Link to="/" className="hover:text-ink transition-colors">Home</Link>
          <ChevronRight size={11} strokeWidth={1.4} className="text-muted-2" />
          <Link to={`/shop?category=${product.category}`} className="hover:text-ink transition-colors">
            {category?.name || "Shop"}
          </Link>
          <ChevronRight size={11} strokeWidth={1.4} className="text-muted-2" />
          <span className="text-ink truncate max-w-[40vw]">{product.name}</span>
        </nav>
      </div>

      <div className="container-editorial py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <ProductGallery product={product} />

          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow-gold mb-3">{category?.name || "Fine Jewelry"}</p>
            <h1
              id={product.nameId}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink font-light uppercase tracking-product leading-tight"
            >
              {product.name}
            </h1>
            <p
              id={product.descId}
              className="mt-3 text-base sm:text-lg font-serif italic text-muted"
            >
              {product.desc}
            </p>

            <div className="mt-6 flex items-baseline gap-4">
              <span className="font-serif text-3xl text-ink">{formatPrice(product.price)}</span>
              {product.compareAtPrice && (
                <span className="text-base text-muted-2 line-through font-sans">
                  {formatPrice(product.compareAtPrice)}
                </span>
              )}
            </div>
            <div className="mt-2">
              <StarRating value={product.rating} count={product.reviewCount} size={13} />
            </div>

            <div className="mt-8 pt-6 border-t border-line">
              <p className="eyebrow mb-3">Metal Tone</p>
              <VariantSelector
                value={variant}
                onChange={setVariant}
                available={product.variants}
              />
            </div>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <div className="sm:flex-shrink-0">
                <QuantityStepper value={quantity} onChange={setQuantity} size="lg" />
              </div>
              <Button onClick={onAdd} variant="primary" size="xl" className="flex-1" fullWidth>
                Add to Cart — {formatPrice(product.price * quantity)}
              </Button>
            </div>

            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {PROMISES.map((p) => {
                const Icon = p.icon
                return (
                  <li key={p.label} className="flex items-center gap-2 text-[12px] text-muted font-sans">
                    <Icon size={14} strokeWidth={1.4} className="text-gold flex-shrink-0" aria-hidden="true" />
                    <span>{p.label}</span>
                  </li>
                )
              })}
            </ul>

            <div className="mt-10">
              <Accordion
                items={[
                  {
                    title: "Description",
                    content: <p className="text-sm leading-relaxed">{product.description || product.desc}</p>,
                  },
                  {
                    title: "Materials & Care",
                    content: <p className="text-sm leading-relaxed">{product.care || "Hypoallergenic, hand-finished. Avoid water, perfume and lotion. Store in the pouch provided."}</p>,
                  },
                  {
                    title: "Shipping & Returns",
                    content: <p className="text-sm leading-relaxed">{product.shipping || "Free worldwide shipping on orders over $75. 30-day returns, no questions asked."}</p>,
                  },
                ]}
                defaultOpen={0}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="py-20 md:py-24 border-t border-line">
        <div className="container-editorial">
          <header className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow-gold mb-3">You may also like</p>
              <h2 className="font-serif text-3xl sm:text-4xl text-ink font-light tracking-tight">
                Pair it with
              </h2>
            </div>
            <Link
              to="/shop"
              className="hidden sm:inline-flex items-center gap-2 text-[0.72rem] uppercase tracking-eyebrow text-ink hover:text-gold-deep transition-colors font-sans"
            >
              View All
            </Link>
          </header>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
