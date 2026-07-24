import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ChevronUp } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-sm tracking-wider uppercase">{title}</span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4 text-sm text-foreground/70 leading-relaxed">
          {children}
        </div>
      )}
    </div>
  )
}

export default function ProductDetailPage() {
  const { productId } = useParams()
  const { addToCart } = useCart()
  const containerRef = useRef(null)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const product = products.find((p) => p.id === productId)

  useEffect(() => {
    if (containerRef.current) {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [productId])

  if (!product) {
    return (
      <div className="section-padding text-center">
        <h1 className="serif-heading text-3xl mb-4">Product Not Found</h1>
        <Link to="/shop" className="btn-outline">
          Back to Shop
        </Link>
      </div>
    )
  }

  const variant = product.variants[selectedVariant]

  const handleAddToCart = () => {
    addToCart(product, variant, quantity)
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.material === product.material))
    .slice(0, 4)

  return (
    <div ref={containerRef} className="section-padding bg-background">
      <div className="container-padding">
        {/* Breadcrumb */}
        <nav className="text-xs md:text-sm text-muted-foreground mb-6 md:mb-8">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-foreground transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Image Gallery */}
          <div className="space-y-3 md:space-y-4">
            {/* Main Image */}
            <div className="aspect-[3/4] bg-secondary">
              <img
                data-strk-img-id={`product-${product.id}-main`}
                data-strk-img={`[${product.id}-desc] [${product.id}-title] [product-detail-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.images[selectedImage].alt}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails - horizontal scroll on mobile */}
            <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-16 h-20 md:w-20 md:h-24 bg-secondary overflow-hidden transition-all ${
                    selectedImage === index ? 'ring-2 ring-primary' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    data-strk-img-id={`product-${product.id}-thumb-${index}`}
                    data-strk-img={`[${product.id}-desc] [${product.id}-title]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-5 md:space-y-6">
            <div>
              <h1 id={`${product.id}-title`} className="product-name text-xl sm:text-2xl md:text-3xl mb-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-primary text-primary" />
                  <span className="text-sm font-medium">{product.rating}</span>
                </div>
                <span className="text-xs md:text-sm text-muted-foreground">({product.reviews} reviews)</span>
              </div>
              <p className="serif-heading text-xl sm:text-2xl">${variant.price}</p>
            </div>

            <p id={`${product.id}-desc`} className="text-sm md:text-base text-foreground/70 leading-relaxed">
              {product.description}
            </p>

            {/* Variant Selector */}
            <div>
              <p className="text-xs md:text-sm tracking-wider uppercase mb-3">Color</p>
              <div className="flex gap-2 md:gap-3 flex-wrap">
                {product.variants.map((v, index) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(index)}
                    className={`px-4 md:px-6 py-2 text-xs md:text-sm tracking-wider border transition-all ${
                      selectedVariant === index
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border hover:border-primary'
                    }`}
                  >
                    {v.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <p className="text-xs md:text-sm tracking-wider uppercase mb-3">Quantity</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2.5 md:p-2 border border-border hover:border-primary transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-lg w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2.5 md:p-2 border border-border hover:border-primary transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="btn-primary w-full text-sm md:text-base"
            >
              Add to Cart — ${(variant.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="pt-4 md:pt-6">
              <Accordion title="Description">
                <p className="text-sm md:text-base">
                  {product.description} Crafted with precision and care, this piece features 
                  18K gold plating over a sterling silver base, ensuring both beauty and durability.
                </p>
              </Accordion>
              <Accordion title="Materials & Care">
                <p className="text-sm md:text-base">
                  <strong>Materials:</strong> 18K gold plated sterling silver, hypoallergenic.
                </p>
                <p className="mt-2 text-sm md:text-base">
                  <strong>Care:</strong> Store in a dry place. Avoid contact with water, perfume, and chemicals. 
                  Clean gently with a soft cloth.
                </p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p className="text-sm md:text-base">
                  <strong>Shipping:</strong> Free worldwide shipping. Orders ship within 2-3 business days.
                </p>
                <p className="mt-2 text-sm md:text-base">
                  <strong>Returns:</strong> 30-day return policy. Items must be unworn and in original packaging.
                </p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12 md:mt-16 pt-12 md:pt-16 border-t border-border">
            <h2 className="serif-heading text-xl sm:text-2xl md:text-3xl text-center mb-8 md:mb-10">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="group"
                >
                  <div className="aspect-[3/4] bg-secondary mb-2 md:mb-3 overflow-hidden">
                    <img
                      data-strk-img-id={`related-${relatedProduct.id}`}
                      data-strk-img={`[${relatedProduct.id}-desc] [${relatedProduct.id}-title]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="400"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={relatedProduct.images[0].alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="product-name text-[10px] md:text-xs mb-1">{relatedProduct.name}</h3>
                  <p className="text-xs md:text-sm">${relatedProduct.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
