import { useMemo, useState } from "react"
import { Link, useParams, Navigate } from "react-router-dom"
import { findProductById } from "../data/products.js"
import { useCart } from "../context/CartContext.jsx"
import { formatPrice } from "../lib/utils.js"
import ProductGallery from "../components/product/ProductGallery.jsx"
import VariantSelector from "../components/product/VariantSelector.jsx"
import ProductAccordion from "../components/product/ProductAccordion.jsx"
import RelatedProducts from "../components/product/RelatedProducts.jsx"
import { MinusIcon, PlusIcon, StarIcon, CheckIcon } from "../components/ui/Icons.jsx"

const toneOptions = [
  { value: "gold", label: "18K Gold" },
  { value: "silver", label: "Sterling Silver" },
]

export default function Product() {
  const { id } = useParams()
  const product = useMemo(() => findProductById(id), [id])
  const { addToCart } = useCart()
  const [variant, setVariant] = useState(product?.tone || "gold")
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  if (!product) return <Navigate to="/shop" replace />

  const onAdd = () => {
    addToCart(product.id, { variant, quantity })
    setAdded(true)
    setTimeout(() => setAdded(false), 1400)
  }

  return (
    <>
      <div className="bg-ivory pt-24 md:pt-28">
        <div className="mx-auto max-w-editorial px-6 md:px-10 lg:px-16">
          <nav aria-label="Breadcrumb" className="text-[10px] tracking-eyebrow uppercase text-muted py-6">
            <ol className="flex items-center gap-2">
              <li><Link to="/" className="hover:text-ink">Home</Link></li>
              <li>/</li>
              <li><Link to="/shop" className="hover:text-ink">Shop</Link></li>
              <li>/</li>
              <li className="text-ink truncate max-w-[200px]">{product.name}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 pb-16 md:pb-24">
            <div className="md:col-span-7">
              <ProductGallery images={product.images.gallery} name={product.name} />
            </div>
            <div className="md:col-span-5 md:sticky md:top-24 md:self-start">
              <p className="eyebrow">{product.eyebrow}</p>
              <h1 className="product-name mt-3 text-[18px] md:text-[20px]">
                {product.name}
              </h1>
              <div className="mt-4 flex items-center gap-3">
                <span className="font-serif text-[28px] text-ink">
                  {formatPrice(product.price)}
                </span>
                <span className="inline-flex items-center gap-1 star">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <StarIcon key={i} className="h-3.5 w-3.5" />
                  ))}
                </span>
                <span className="text-[12px] text-muted">
                  {product.rating} ({product.reviewCount})
                </span>
              </div>
              <p className="mt-6 text-[15px] text-ink/80 leading-relaxed font-light max-w-prose">
                {product.description}
              </p>

              <div className="mt-8">
                <p className="text-[10px] tracking-eyebrow uppercase text-muted mb-3">
                  Tone
                </p>
                <VariantSelector
                  value={variant}
                  onChange={setVariant}
                  options={toneOptions}
                />
              </div>

              <div className="mt-7">
                <p className="text-[10px] tracking-eyebrow uppercase text-muted mb-3">
                  Quantity
                </p>
                <div className="inline-flex items-center border border-hairline">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="h-11 w-11 inline-flex items-center justify-center text-ink/70 hover:text-ink"
                  >
                    <MinusIcon className="h-4 w-4" />
                  </button>
                  <span className="w-10 text-center text-[14px] tabular-nums">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="h-11 w-11 inline-flex items-center justify-center text-ink/70 hover:text-ink"
                  >
                    <PlusIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={onAdd}
                className="mt-7 btn-primary"
              >
                {added ? (
                  <span className="inline-flex items-center gap-2">
                    <CheckIcon className="h-4 w-4" />
                    Added to Bag
                  </span>
                ) : (
                  `Add to Bag — ${formatPrice(product.price * quantity)}`
                )}
              </button>

              <ul className="mt-6 space-y-2 text-[12px] text-muted">
                <li className="inline-flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-champagne" />Free worldwide shipping over $75</li>
                <li className="inline-flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-champagne" />30-day returns, no questions asked</li>
                <li className="inline-flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-champagne" />Arrives in our signature gift packaging</li>
              </ul>

              <div className="mt-10">
                <ProductAccordion
                  sections={[
                    { title: "Description", content: product.details },
                    { title: "Materials & Care", content: product.materials + " " + product.care },
                    { title: "Shipping & Returns", content: product.shipping },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <RelatedProducts productId={product.id} />
    </>
  )
}
