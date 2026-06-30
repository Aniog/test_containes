import { useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Star, ChevronDown, ChevronUp, ShoppingBag } from "lucide-react"
import { PRODUCTS } from "../data/products"
import { useCart } from "../context/CartContext"

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-t border-brand-warm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 font-sans text-sm uppercase tracking-wider text-brand-dark hover:text-brand-gold transition-colors"
      >
        {title}
        {isOpen ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>
      {isOpen && (
        <div className="pb-5 text-sm text-brand-stone font-sans leading-relaxed animate-fade-in">
          {children}
        </div>
      )}
    </div>
  )
}

export default function ProductDetail() {
  const { id } = useParams()
  const { addItem } = useCart()
  const [selectedVariant, setSelectedVariant] = useState(0)
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const product = PRODUCTS.find((p) => p.id === id)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="font-serif text-2xl text-brand-dark mb-4">Product not found</h2>
          <Link to="/shop" className="text-brand-gold font-sans text-sm uppercase tracking-wider hover:underline">
            Back to shop
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, product.variants[selectedVariant], quantity)
  }

  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      {/* Product section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left: Images */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="aspect-[4/5] bg-brand-warm overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Thumbnails */}
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-20 overflow-hidden border-2 transition-colors duration-200 ${
                    selectedImage === i
                      ? "border-brand-gold"
                      : "border-transparent hover:border-brand-warm"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Info */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-brand-gold text-xs font-sans uppercase tracking-[0.2em] mb-2">
              {product.category}
            </p>
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-dark uppercase tracking-[0.12em] font-medium leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? "fill-brand-gold text-brand-gold"
                        : "text-brand-warm"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-sans text-brand-stone">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <p className="font-sans text-2xl font-medium text-brand-dark mt-4">
              ${product.price}
            </p>

            {/* Description */}
            <p className="font-sans text-sm text-brand-stone leading-relaxed mt-4">
              {product.description}
            </p>

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mt-6">
                <p className="font-sans text-xs uppercase tracking-wider text-brand-stone mb-3">
                  Finish: <span className="text-brand-dark font-medium">{product.variants[selectedVariant]}</span>
                </p>
                <div className="flex gap-3">
                  {product.variants.map((variant, i) => (
                    <button
                      key={variant}
                      onClick={() => setSelectedVariant(i)}
                      className={`px-6 py-2.5 font-sans text-sm uppercase tracking-wider border transition-all duration-200 ${
                        selectedVariant === i
                          ? "border-brand-dark bg-brand-dark text-brand-white"
                          : "border-brand-warm text-brand-stone hover:border-brand-dark"
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity + Add to cart */}
            <div className="flex gap-4 mt-8">
              <div className="flex items-center border border-brand-warm">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-3.5 text-brand-stone hover:text-brand-dark transition-colors"
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="px-4 font-sans text-sm min-w-[3rem] text-center text-brand-dark">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-3.5 text-brand-stone hover:text-brand-dark transition-colors"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-brand-gold text-brand-white font-sans text-sm uppercase tracking-[0.15em] px-8 py-3.5 hover:bg-brand-goldDark transition-all duration-300 flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                Add to Cart
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-10 border-b border-brand-warm">
              <Accordion title="Description">
                <p>{product.description}</p>
              </Accordion>
              <Accordion title="Materials & Care">
                <div className="space-y-2">
                  <p><strong className="text-brand-dark">Materials:</strong> {product.materials}</p>
                  <p><strong className="text-brand-dark">Care:</strong> {product.care}</p>
                </div>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <div className="space-y-2">
                  <p>Free worldwide shipping on all orders. Estimated delivery: 3–7 business days.</p>
                  <p>30-day return policy. Items must be returned in original condition and packaging.</p>
                </div>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 lg:py-20 bg-brand-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-brand-gold text-xs font-sans uppercase tracking-[0.2em] mb-3">
                Complete the Look
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl text-brand-dark font-light tracking-[0.05em]">
                You May Also Like
              </h2>
              <div className="w-10 h-[1px] bg-brand-gold mx-auto mt-3" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group">
                  <div className="aspect-[3/4] bg-brand-warm overflow-hidden mb-3">
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-xs uppercase tracking-[0.15em] text-brand-dark group-hover:text-brand-gold transition-colors">
                    {p.name}
                  </h3>
                  <p className="font-sans text-sm font-medium text-brand-dark mt-0.5">
                    ${p.price}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}