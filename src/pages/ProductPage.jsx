import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Star, Minus, Plus, ChevronDown, ChevronUp, Truck, RotateCcw, Shield } from "lucide-react"
import { products } from "@/data/products"
import { useCart } from "@/context/CartContext"

export default function ProductPage() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const { addItem } = useCart()

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || "18K Gold")
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)

  if (!product) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-taupe text-lg mb-4 font-serif">Product not found</p>
          <Link to="/shop" className="text-sm uppercase tracking-widest text-gold hover:text-gold-hover">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  const handleAdd = () => {
    addItem(product, selectedVariant, quantity)
  }

  const accordions = [
    {
      id: "description",
      title: "Description",
      content: product.description,
    },
    {
      id: "materials",
      title: "Materials & Care",
      content: (
        <div className="space-y-3">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted mb-1">Materials</p>
            <p className="text-sm text-taupe">{product.material}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted mb-1">Care Instructions</p>
            <p className="text-sm text-taupe">{product.care}</p>
          </div>
        </div>
      ),
    },
    {
      id: "shipping",
      title: "Shipping & Returns",
      content: (
        <div className="space-y-4">
          <div className="flex gap-3">
            <Truck size={16} className="text-gold flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-charcoal font-medium">Free Worldwide Shipping</p>
              <p className="text-xs text-taupe">On all orders over $50. Delivery within 5–8 business days.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <RotateCcw size={16} className="text-gold flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-charcoal font-medium">30-Day Returns</p>
              <p className="text-xs text-taupe">Not in love? Return within 30 days for a full refund.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Shield size={16} className="text-gold flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-charcoal font-medium">1-Year Warranty</p>
              <p className="text-xs text-taupe">We stand by our quality. Contact us for any issues.</p>
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-muted mb-8">
          <Link to="/" className="hover:text-charcoal transition-colors">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-charcoal transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </div>

        {/* Product */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-hairline/30 overflow-hidden">
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
                    className={`w-20 h-20 overflow-hidden border transition-colors ${
                      selectedImage === i ? "border-charcoal" : "border-hairline hover:border-taupe"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="md:sticky md:top-28 md:self-start">
            <p className="text-xs uppercase tracking-[0.25em] text-muted mb-2">{product.category}</p>
            <h1 className="text-3xl md:text-4xl text-charcoal font-semibold mb-3" style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}>
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={i < Math.floor(product.rating) ? "text-star fill-star" : "text-hairline"}
                  />
                ))}
              </div>
              <span className="text-xs text-muted">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <p className="text-2xl text-charcoal font-medium mb-6">${product.price}</p>

            <hr className="hairline mb-6" />

            {/* Description */}
            <p className="text-taupe text-sm leading-relaxed mb-6 font-light">{product.description}</p>

            {/* Variants */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest text-muted mb-3">Finish</p>
              <div className="flex gap-2">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-5 py-2.5 text-xs uppercase tracking-wider border transition-all duration-300 ${
                      selectedVariant === v
                        ? "border-charcoal bg-charcoal text-white"
                        : "border-hairline text-taupe hover:border-taupe"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex gap-3 mb-8">
              <div className="flex items-center border border-hairline">
                <button
                  className="p-3 hover:bg-hairline/40 transition-colors"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="px-4 text-sm font-medium w-10 text-center">{quantity}</span>
                <button
                  className="p-3 hover:bg-hairline/40 transition-colors"
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
              <button
                onClick={handleAdd}
                className="flex-1 bg-gold text-white uppercase tracking-[0.2em] text-sm px-8 py-3 hover:bg-gold-hover transition-all duration-300"
              >
                Add to Cart — ${(product.price * quantity).toFixed(2)}
              </button>
            </div>

            {/* Accordions */}
            <div className="border-t border-hairline">
              {accordions.map((acc) => (
                <div key={acc.id} className="border-b border-hairline">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === acc.id ? null : acc.id)}
                    className="w-full flex items-center justify-between py-4 text-sm uppercase tracking-widest text-charcoal hover:text-taupe transition-colors"
                  >
                    {acc.title}
                    {openAccordion === acc.id ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openAccordion === acc.id ? "max-h-96 pb-4" : "max-h-0"
                    }`}
                  >
                    <div className="text-sm text-taupe font-light leading-relaxed">
                      {acc.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <section className="mt-20 md:mt-28">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl text-charcoal font-semibold" style={{ fontFamily: "Cormorant Garamond, Georgia, serif" }}>
                You May Also Like
              </h2>
              <div className="w-12 h-[1px] bg-gold mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {related.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group">
                  <div className="aspect-[3/4] bg-hairline/30 overflow-hidden mb-3">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-product-name text-xs text-charcoal mb-1">{p.name}</h3>
                  <p className="text-sm text-charcoal font-medium">${p.price}</p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}