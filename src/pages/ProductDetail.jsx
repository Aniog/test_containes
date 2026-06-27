import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Star, ChevronDown, ChevronUp, Plus, Minus, ArrowLeft } from "lucide-react"
import products from "@/data/products"
import { useCart } from "@/context/CartContext"
import ProductCard from "@/components/ProductCard"

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-t border-border">
      <button
        className="flex items-center justify-between w-full py-4 text-sm font-medium text-muted hover:text-foreground transition-colors"
        onClick={() => setOpen(!open)}
      >
        {title}
        {open ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-4" : "max-h-0"}`}>
        <p className="text-sm text-muted leading-relaxed">{children}</p>
      </div>
    </div>
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === Number(id))
  const { addItem } = useCart()

  const [selectedImage, setSelectedImage] = useState(0)
  const [variant, setVariant] = useState("gold")
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="font-serif text-2xl text-muted mb-4">Product not found</p>
          <Link to="/shop" className="text-xs uppercase tracking-[0.12em] text-gold underline underline-offset-4">
            Back to shop
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, variant, quantity)
  }

  return (
    <main className="pt-20 md:pt-24 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Back link */}
        <Link
          to="/shop"
          className="inline-flex items-center gap-1.5 text-xs text-muted-light hover:text-muted transition-colors mb-8"
        >
          <ArrowLeft className="w-3 h-3" />
          Back to Shop
        </Link>

        {/* Product section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
          {/* Left: Image gallery */}
          <div>
            <div className="aspect-[4/5] overflow-hidden bg-white border border-border/50 mb-4">
              <img
                src={product.thumbnails[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {product.thumbnails.map((thumb, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-16 h-20 md:w-20 md:h-24 overflow-hidden border transition-colors ${
                    selectedImage === i ? "border-gold" : "border-border"
                  }`}
                >
                  <img src={thumb} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="md:sticky md:top-28 md:self-start">
            <p className="text-[11px] uppercase tracking-[0.15em] text-muted-light font-medium">
              {product.category}
            </p>
            <h1 className="font-serif text-2xl md:text-3xl uppercase tracking-[0.08em] font-semibold mt-2">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-gold-light text-gold-light" : "text-border"}`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-light">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            <p className="text-xl font-medium mt-5">${product.price}</p>

            <p className="text-sm text-muted mt-5 leading-relaxed">{product.description}</p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.1em] font-medium mb-3">Finish</p>
              <div className="flex gap-3">
                {["gold", "silver"].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-6 py-2.5 text-xs uppercase tracking-[0.08em] border transition-colors ${
                      variant === v
                        ? "border-gold bg-gold text-white"
                        : "border-border text-muted hover:border-muted-light"
                    }`}
                  >
                    {v === "gold" ? "18K Gold" : "Silver Tone"}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex items-center gap-4 mt-8">
              <div className="flex items-center border border-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-3 border-r border-border hover:text-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3 h-3" />
                </button>
                <span className="px-5 text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-3 border-l border-border hover:text-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3 h-3" />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 bg-gold text-white uppercase tracking-widest text-xs font-medium px-8 py-3 hover:bg-gold-hover transition-colors"
              >
                Add to Cart — ${(product.price * quantity).toFixed(0)}
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion title="Description">
                {product.description}
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="mb-2"><strong className="text-foreground">Materials:</strong> {product.materialInfo}</p>
                <p><strong className="text-foreground">Care:</strong> {product.careInfo}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                {product.shippingInfo}
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20 md:mt-28">
            <hr className="hairline mb-12" />
            <h2 className="font-serif text-2xl md:text-3xl font-light mb-8">
              You may also like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}