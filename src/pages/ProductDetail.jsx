import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ShoppingBag, ChevronDown, Minus, Plus } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'

const Accordion = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-t border-velmora-muted-light">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs font-medium tracking-[0.15em] uppercase text-velmora-deep">
          {title}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-velmora-muted transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="pb-4 text-sm text-velmora-muted leading-relaxed">
          {children}
        </div>
      )}
    </div>
  )
}

const ProductDetailPage = () => {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)
  const { addItem, openDrawer } = useCart()
  const containerRef = useRef(null)

  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [selectedImage])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-velmora-deep mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-velmora-accent text-sm tracking-wider uppercase hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
    openDrawer()
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4)

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 text-xs text-velmora-muted tracking-wider">
          <Link to="/" className="hover:text-velmora-accent transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-velmora-accent transition-colors">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-velmora-deep">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div>
            <div className="aspect-[3/4] bg-velmora-cream overflow-hidden mb-3">
              <img
                data-strk-img-id={selectedImage === 0 ? product.imgId : product.imgId2}
                data-strk-img={`[pdp-desc] [pdp-name]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {product.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-16 h-20 bg-velmora-cream overflow-hidden border-2 transition-colors ${
                    selectedImage === idx ? 'border-velmora-accent' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${idx}`}
                    data-strk-img={`[pdp-desc] [pdp-name]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="160"
                    src={product.images[idx]}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:pl-4">
            <h1
              id="pdp-name"
              className="font-serif text-2xl md:text-3xl tracking-[0.15em] uppercase font-light text-velmora-deep"
            >
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-velmora-accent text-velmora-accent'
                        : 'text-velmora-muted-light'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-velmora-muted">({product.reviews})</span>
            </div>

            <p className="text-xl font-serif mt-3">${product.price}</p>

            <p id="pdp-desc" className="text-sm text-velmora-muted mt-4 leading-relaxed">
              {product.description}. Crafted with premium {product.material} materials for lasting shine and comfort. Each piece is nickel-free and hypoallergenic, designed for sensitive skin.
            </p>

            {/* Variant selector */}
            <div className="mt-6">
              <p className="text-xs font-medium tracking-[0.12em] uppercase text-velmora-deep mb-3">
                Tone
              </p>
              <div className="flex gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-5 py-2.5 text-xs font-medium tracking-[0.1em] uppercase border transition-all duration-300 ${
                      selectedVariant === variant
                        ? 'border-velmora-accent bg-velmora-accent text-white'
                        : 'border-velmora-muted-light text-velmora-deep hover:border-velmora-accent'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs font-medium tracking-[0.12em] uppercase text-velmora-deep mb-3">
                Quantity
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-9 h-9 flex items-center justify-center border border-velmora-muted-light text-velmora-muted hover:text-velmora-deep transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="text-sm w-6 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-9 h-9 flex items-center justify-center border border-velmora-muted-light text-velmora-muted hover:text-velmora-deep transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-8 bg-velmora-accent text-white py-4 text-xs font-medium tracking-[0.15em] uppercase hover:bg-velmora-accent-hover transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart — ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Accordions */}
            <div className="mt-8">
              <Accordion title="Description" defaultOpen>
                <p>
                  The {product.name} is a stunning addition to any jewelry collection. {product.description}, this piece embodies the perfect balance of modern design and timeless elegance. Suitable for both everyday wear and special occasions.
                </p>
              </Accordion>
              <Accordion title="Materials & Care">
                <ul className="space-y-2">
                  <li>• 18K Gold Plated over premium brass base</li>
                  <li>• Nickel-free and hypoallergenic</li>
                  <li>• Tarnish-resistant coating</li>
                  <li>• Store in the provided pouch when not wearing</li>
                  <li>• Avoid contact with water, perfume, and lotions</li>
                  <li>• Gently wipe with a soft cloth after each wear</li>
                </ul>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <ul className="space-y-2">
                  <li>• Free worldwide shipping on all orders</li>
                  <li>• Standard delivery: 5–7 business days</li>
                  <li>• Express delivery: 2–3 business days (additional fee)</li>
                  <li>• 30-day hassle-free returns</li>
                  <li>• Items must be unworn and in original packaging</li>
                  <li>• Gift wrapping available at checkout</li>
                </ul>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-16 md:mt-24 pt-12 border-t border-velmora-muted-light">
          <h2 className="font-serif text-2xl md:text-3xl tracking-wide font-light text-velmora-deep text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.slug}`} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden bg-velmora-cream mb-3">
                  <img
                    data-strk-img-id={`related-${p.imgId}`}
                    data-strk-img={`[related-${p.id}-desc] [related-${p.id}-name]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src={p.images[0]}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3
                  id={`related-${p.id}-name`}
                  className="font-serif text-xs md:text-sm tracking-[0.12em] uppercase font-light text-velmora-deep"
                >
                  {p.name}
                </h3>
                <p id={`related-${p.id}-desc`} className="text-xs text-velmora-muted mt-0.5">
                  {p.description}
                </p>
                <p className="text-sm font-medium mt-1">${p.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage
