import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Star, Minus, Plus, ChevronDown, ChevronUp } from "lucide-react"
import { products } from "../data/products"
import { useCart } from "../context/CartContext"

export default function ProductDetail() {
  const { id } = useParams()
  const { addItem } = useCart()
  const product = products.find((p) => p.id === id)
  const [selectedImage, setSelectedImage] = useState(0)
  const [variant, setVariant] = useState("gold")
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream pt-20">
        <div className="text-center">
          <p className="font-serif text-2xl text-charcoal/50 mb-4">Product not found</p>
          <Link
            to="/shop"
            className="text-xs uppercase tracking-[0.12em] text-warm-gold border border-warm-gold px-6 py-2.5 hover:bg-warm-gold hover:text-dark-charcoal transition-colors"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const accordions = [
    { id: "description", title: "Description" },
    { id: "materials", title: "Materials & Care" },
    { id: "shipping", title: "Shipping & Returns" },
  ]

  const handleAddToCart = () => {
    addItem(product, variant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <main className="bg-cream pt-20 pb-16 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.1em] text-charcoal/40 mb-8 pt-4">
          <Link to="/" className="hover:text-warm-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-warm-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal/70">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">
          {/* Left: Image Gallery */}
          <div>
            <div className="aspect-[4/5] overflow-hidden bg-ivory mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-20 h-20 overflow-hidden bg-ivory border transition-colors ${
                      i === selectedImage
                        ? "border-warm-gold"
                        : "border-transparent hover:border-charcoal/20"
                    }`}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Info */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.round(product.rating)
                        ? "text-warm-gold fill-warm-gold"
                        : "text-charcoal/15 fill-charcoal/15"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-charcoal/50">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl text-dark-charcoal font-light mb-2">
              {product.name}
            </h1>
            <p className="text-2xl font-medium text-dark-charcoal mb-6">
              ${product.price}
            </p>

            <p className="text-sm text-charcoal/65 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-[0.1em] text-charcoal/60 mb-3">
                Finish
              </p>
              <div className="flex gap-3">
                {["gold", "silver"].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-5 py-2.5 text-xs uppercase tracking-[0.1em] border transition-all ${
                      variant === v
                        ? "bg-dark-charcoal text-ivory border-dark-charcoal"
                        : "bg-transparent text-charcoal/60 border-dark-ivory hover:border-charcoal/30"
                    }`}
                  >
                    {v === "gold" ? "18K Gold" : "Silver Tone"}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.1em] text-charcoal/60 mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-dark-ivory w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2.5 text-charcoal/60 hover:text-charcoal transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-6 py-2.5 text-sm font-medium text-charcoal border-x border-dark-ivory min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2.5 text-charcoal/60 hover:text-charcoal transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-xs uppercase tracking-[0.15em] font-medium transition-all duration-300 ${
                added
                  ? "bg-warm-gold text-dark-charcoal"
                  : "bg-dark-charcoal text-ivory hover:bg-charcoal"
              }`}
            >
              {added ? "✓ Added to Cart" : "Add to Cart — $" + (product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-10 space-y-0 divide-y divide-dark-ivory">
              {accordions.map((acc) => (
                <div key={acc.id}>
                  <button
                    onClick={() =>
                      setOpenAccordion(openAccordion === acc.id ? null : acc.id)
                    }
                    className="w-full flex items-center justify-between py-4 text-xs uppercase tracking-[0.1em] text-charcoal/70 hover:text-charcoal transition-colors"
                  >
                    {acc.title}
                    {openAccordion === acc.id ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </button>
                  {openAccordion === acc.id && (
                    <div className="pb-4 text-sm text-charcoal/60 leading-relaxed">
                      {acc.id === "description" && <p>{product.description}</p>}
                      {acc.id === "materials" && (
                        <div className="space-y-1">
                          <p>
                            <span className="text-charcoal/80 font-medium">Materials:</span>{" "}
                            {product.details.Materials}
                          </p>
                          <p>
                            <span className="text-charcoal/80 font-medium">Care:</span>{" "}
                            {product.details.Care}
                          </p>
                        </div>
                      )}
                      {acc.id === "shipping" && <p>{product.details["Shipping & Returns"]}</p>}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-20 lg:mt-28">
            <div className="hairline mb-10" />
            <h2 className="font-serif text-2xl sm:text-3xl text-dark-charcoal font-light mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group">
                  <div className="aspect-[4/5] overflow-hidden bg-ivory mb-3">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xs uppercase tracking-[0.12em] text-charcoal font-medium truncate">
                    {p.name}
                  </h3>
                  <p className="text-sm text-charcoal font-medium mt-1">
                    ${p.price}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}