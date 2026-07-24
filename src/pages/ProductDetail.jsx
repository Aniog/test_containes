import { useEffect, useMemo, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Minus, Plus, Star, Truck, RotateCcw, Shield } from "lucide-react"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { formatPrice } from "@/lib/utils"
import { toast } from "sonner"
import ProductGallery from "@/components/product/ProductGallery"
import Accordion from "@/components/product/Accordion"
import ProductCard from "@/components/product/ProductCard"

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const related = useMemo(() => getRelatedProducts(id, 4), [id])

  const { addItem } = useCart()
  const [color, setColor] = useState(product?.colors?.[0]?.value)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    setColor(product?.colors?.[0]?.value)
    setQuantity(1)
  }, [product?.id])

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl px-5 py-32 text-center md:px-8">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 font-display text-4xl font-light">
          This piece has slipped between the velvet.
        </h1>
        <Link
          to="/shop"
          className="mt-8 inline-block border border-ink px-7 py-3 text-[11px] uppercase tracking-[0.28em] text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          Back to Shop
        </Link>
      </div>
    )
  }

  const handleAdd = () => {
    addItem(product, { color, quantity })
    toast.success(`${product.name} added to bag`)
  }

  return (
    <div className="bg-paper pt-20 md:pt-24">
      {/* Crumb */}
      <div className="mx-auto max-w-8xl px-5 pt-6 md:px-8">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-[10px] uppercase tracking-[0.32em] text-text-muted"
        >
          <Link to="/" className="hover:text-ink">Home</Link>
          <span aria-hidden>/</span>
          <Link to="/shop" className="hover:text-ink">Shop</Link>
          <span aria-hidden>/</span>
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      {/* Main */}
      <div className="mx-auto max-w-8xl px-5 pb-20 pt-8 md:px-8 md:pb-32 md:pt-12">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          {/* Gallery */}
          <ProductGallery
            images={product.images}
            name={product.name}
            productId={product.id}
          />

          {/* Info */}
          <div className="md:sticky md:top-28 md:self-start">
            <p className="eyebrow">{product.category}</p>
            <h1
              id="product-name"
              className="mt-3 font-display text-4xl font-light leading-[1.05] md:text-5xl"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="mt-4 flex items-center gap-2">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3.5 w-3.5 ${
                      i < Math.round(product.rating)
                        ? "fill-gold text-gold"
                        : "text-line-light"
                    }`}
                    strokeWidth={0}
                  />
                ))}
              </div>
              <span className="text-[11px] uppercase tracking-[0.28em] text-text-muted">
                {product.rating.toFixed(1)} · {product.reviews} reviews
              </span>
            </div>

            <p className="mt-6 font-display text-3xl text-ink">
              {formatPrice(product.price)}
            </p>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-text md:text-base">
              {product.description}
            </p>

            {/* Color selector */}
            {product.colors?.length > 0 && (
              <div className="mt-8">
                <p className="eyebrow text-text-muted">
                  Finish:{" "}
                  <span className="text-ink">
                    {product.colors.find((c) => c.value === color)?.name}
                  </span>
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c.value}
                      type="button"
                      onClick={() => setColor(c.value)}
                      aria-pressed={color === c.value}
                      className={`border px-5 py-2.5 text-[11px] uppercase tracking-[0.28em] transition-all duration-300 ${
                        color === c.value
                          ? "border-ink bg-ink text-paper"
                          : "border-line-light bg-paper text-ink hover:border-ink"
                      }`}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity + Add to bag */}
            <div className="mt-8 flex items-stretch gap-3">
              <div className="inline-flex items-center border border-ink/15">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="inline-flex h-12 w-12 items-center justify-center text-ink/70 transition-colors hover:text-ink"
                >
                  <Minus className="h-3.5 w-3.5" strokeWidth={1.5} />
                </button>
                <span className="w-10 text-center text-sm">{quantity}</span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQuantity((q) => Math.min(10, q + 1))}
                  className="inline-flex h-12 w-12 items-center justify-center text-ink/70 transition-colors hover:text-ink"
                >
                  <Plus className="h-3.5 w-3.5" strokeWidth={1.5} />
                </button>
              </div>
              <button
                type="button"
                onClick={handleAdd}
                className="flex-1 bg-ink py-4 text-[11px] uppercase tracking-[0.32em] text-paper transition-colors duration-300 hover:bg-gold hover:text-ink"
              >
                Add to Bag
              </button>
            </div>

            {/* Reassurance */}
            <ul className="mt-8 grid grid-cols-1 gap-3 border-t border-line-light pt-6 text-[11px] uppercase tracking-[0.28em] text-text-muted sm:grid-cols-3">
              <li className="flex items-center gap-2">
                <Truck className="h-3.5 w-3.5" strokeWidth={1.25} />
                Free Shipping
              </li>
              <li className="flex items-center gap-2">
                <RotateCcw className="h-3.5 w-3.5" strokeWidth={1.25} />
                30-Day Returns
              </li>
              <li className="flex items-center gap-2">
                <Shield className="h-3.5 w-3.5" strokeWidth={1.25} />
                Hypoallergenic
              </li>
            </ul>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion
                items={[
                  { title: "Description", content: product.details },
                  { title: "Materials & Care", content: `${product.materials}\n\n${product.care}` },
                  { title: "Shipping & Returns", content: product.shipping },
                ]}
                defaultOpen={0}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-line-light bg-bone py-20 md:py-28">
          <div className="mx-auto max-w-8xl px-5 md:px-8">
            <div className="flex flex-col items-baseline justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="eyebrow">You may also love</p>
                <h2 className="mt-3 font-display text-3xl font-light leading-[1.05] md:text-4xl">
                  Pairs beautifully with
                </h2>
              </div>
              <Link
                to="/shop"
                className="text-[11px] uppercase tracking-[0.28em] text-ink underline-offset-4 transition-opacity hover:opacity-70 hover:underline"
              >
                Shop All
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-4 md:gap-x-8 md:gap-y-14">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
