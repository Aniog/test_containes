import React, { useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { ShoppingBag, Heart, ChevronLeft, ChevronRight } from "lucide-react"
import { getProductById, getRelatedProducts } from "@/data/products"
import { useCart } from "@/context/CartContext"
import { StarRating, Button, Accordion } from "@/components/ui/Components"

export default function ProductPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addItem } = useCart()
  const product = getProductById(id)
  const related = getRelatedProducts(id, 4)

  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || "Gold")
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-serif text-2xl text-velmora-text mb-4">Product not found</p>
          <Link to="/collection" className="text-velmora-gold underline">
            Return to Shop
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length)
  }

  return (
    <div className="bg-velmora-bg min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center gap-2 text-xs text-velmora-text-muted">
          <Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link>
          <span>/</span>
          <Link to="/collection" className="hover:text-velmora-gold transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-velmora-text-secondary">{product.shortName}</span>
        </nav>
      </div>

      {/* Product detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div className="flex flex-col-reverse lg:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`flex-shrink-0 w-16 h-20 lg:w-20 lg:h-24 border-2 transition-colors ${
                    selectedImage === idx
                      ? "border-velmora-gold"
                      : "border-transparent hover:border-velmora-border"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1 relative aspect-[3/4] bg-velmora-border-light overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.shortName}
                className="w-full h-full object-cover"
              />
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-velmora-text tracking-wide">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-4">
              <StarRating rating={product.rating} size="md" />
              <span className="text-sm text-velmora-text-secondary">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            <p className="font-serif text-2xl sm:text-3xl text-velmora-text mt-6">
              ${product.price}
            </p>

            <p className="text-velmora-text-secondary text-sm leading-relaxed mt-6">
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <p className="font-sans text-[11px] tracking-wider uppercase text-velmora-text-secondary mb-3">
                Finish
              </p>
              <div className="flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 text-[13px] tracking-wider uppercase transition-all duration-300 ${
                      selectedVariant === variant
                        ? "bg-velmora-gold text-white"
                        : "border border-velmora-border text-velmora-text-secondary hover:border-velmora-gold hover:text-velmora-gold"
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="font-sans text-[11px] tracking-wider uppercase text-velmora-text-secondary mb-3">
                Quantity
              </p>
              <div className="flex items-center border border-velmora-border w-32">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:text-velmora-gold transition-colors"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="flex-1 text-center text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:text-velmora-gold transition-colors"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <div className="mt-8 flex gap-3">
              <button
                onClick={handleAddToCart}
                className={`flex-1 py-4 text-[13px] tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 ${
                  added
                    ? "bg-velmora-success text-white"
                    : "bg-velmora-gold text-white hover:bg-velmora-gold-hover hover:shadow-[0_2px_12px_rgba(184,149,46,0.2)]"
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                {added ? "Added to Cart" : "Add to Cart"}
              </button>
              <button
                className="w-14 h-14 border border-velmora-border flex items-center justify-center hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                aria-label="Add to wishlist"
              >
                <Heart className="w-5 h-5" />
              </button>
            </div>

            {/* Trust badges */}
            <div className="mt-8 pt-6 border-t border-velmora-border-light grid grid-cols-3 gap-4 text-center">
              {[
                { label: "Free Shipping", sub: "Worldwide" },
                { label: "30-Day", sub: "Easy Returns" },
                { label: "18K Gold", sub: "Plated" },
              ].map((badge) => (
                <div key={badge.label}>
                  <p className="font-sans text-[11px] tracking-wider uppercase text-velmora-text">
                    {badge.label}
                  </p>
                  <p className="text-xs text-velmora-text-muted mt-0.5">{badge.sub}</p>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>{product.description}</p>
                <p className="mt-3">
                  Each piece is carefully crafted using premium materials and finished with a durable 18K gold plating. Designed for everyday wear, our jewelry is both beautiful and built to last.
                </p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>
                  <strong>Material:</strong> 18K gold plated over recycled brass base
                </p>
                <p className="mt-2">
                  <strong>Care:</strong> Store in the provided pouch. Avoid contact with water, perfume, and lotions. Clean gently with a soft cloth.
                </p>
                <p className="mt-2">
                  <strong>Hypoallergenic:</strong> Nickel-free and safe for sensitive skin.
                </p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>
                  <strong>Shipping:</strong> Free worldwide shipping on all orders. Standard delivery takes 5-10 business days. Express shipping available at checkout.
                </p>
                <p className="mt-2">
                  <strong>Returns:</strong> 30-day hassle-free returns. Items must be unworn and in original packaging.
                </p>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section className="border-t border-velmora-border-light py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl sm:text-3xl text-velmora-text text-center mb-10 sm:mb-12">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {related.map((p) => (
                <Link
                  key={p.id}
                  to={`/product/${p.id}`}
                  className="group"
                >
                  <div className="aspect-[3/4] bg-velmora-border-light overflow-hidden mb-3">
                    <img
                      src={p.images[0]}
                      alt={p.shortName}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-sans text-[11px] tracking-wider uppercase text-velmora-text group-hover:text-velmora-gold transition-colors">
                    {p.name}
                  </h3>
                  <p className="font-sans text-sm text-velmora-text-secondary mt-1">
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
