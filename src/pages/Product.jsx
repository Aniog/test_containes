import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { products } from "@/data/products"
import { useCart } from "@/context/CartContext"
import ProductGallery from "@/components/product/ProductGallery"
import ProductAccordion from "@/components/product/ProductAccordion"
import RelatedProducts from "@/components/product/RelatedProducts"

export default function Product() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const { addItem } = useCart()
  const [variant, setVariant] = useState(product?.variants?.[0] || "gold")
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="section-title">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-sm font-medium text-brand-ink underline underline-offset-4">
          Back to shop
        </Link>
      </section>
    )
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, variant)
    }
  }

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <ProductGallery images={product.images} />

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-subtle">{product.category}</p>
          <h1 className="mt-2 font-serif text-3xl md:text-4xl uppercase tracking-wide text-brand-ink">{product.name}</h1>
          <p className="mt-3 text-xl font-medium text-brand-ink">${product.price}</p>

          <div className="mt-4 flex items-center gap-2 text-sm text-brand-muted">
            <span className="inline-flex items-center gap-1 text-brand-accent">★★★★★</span>
            <span>{product.rating}</span>
            <span className="text-brand-subtle">({product.reviewCount} reviews)</span>
          </div>

          <p className="mt-5 text-sm text-brand-muted leading-relaxed">{product.description}</p>

          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-ink">Tone</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.variants.map((v) => (
                <button
                  key={v}
                  onClick={() => setVariant(v)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                    variant === v ? "border-brand-ink bg-brand-ink text-white" : "border-brand-line text-brand-ink hover:border-brand-ink"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <label htmlFor="qty" className="text-xs font-semibold uppercase tracking-wider text-brand-ink">Qty</label>
            <select
              id="qty"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="h-9 rounded-md border border-brand-line bg-white px-3 text-sm text-brand-ink focus:outline-none focus:ring-2 focus:ring-brand-accent/40"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <option key={i + 1} value={i + 1}>{i + 1}</option>
              ))}
            </select>
          </div>

          <button onClick={handleAddToCart} className="btn-primary mt-6 w-full">
            Add to Cart — ${product.price * quantity}
          </button>

          <ProductAccordion
            description={product.details}
            materials={product.materials}
            shipping={product.shipping}
          />
        </div>
      </div>

      <RelatedProducts currentId={product.id} />
    </section>
  )
}
