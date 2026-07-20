import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Plus, Minus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import ProductCard from '@/components/ui/ProductCard'
import { useScrollReveal } from '@/hooks/useScrollReveal'

const ProductPage = () => {
  const { slug } = useParams()
  const product = products.find(p => p.slug === slug)
  const { addItem } = useCart()
  const containerRef = useRef(null)
  const [headerRevealRef, headerVisible] = useScrollReveal()
  const [relatedRevealRef, relatedVisible] = useScrollReveal()

  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-warm-black mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-xs uppercase tracking-[0.2em] text-gold hover:text-gold-dark transition-colors">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
  }

  const toggleAccordion = (key) => {
    setOpenAccordion(openAccordion === key ? null : key)
  }

  const accordions = [
    {
      key: 'description',
      title: 'Description',
      content: product.longDescription,
    },
    {
      key: 'materials',
      title: 'Materials & Care',
      content: 'Crafted with 18K gold plating over hypoallergenic sterling silver. To maintain the beauty of your jewelry, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing. Gently polish with a soft cloth to restore shine.',
    },
    {
      key: 'shipping',
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Standard delivery takes 5-7 business days. Express shipping available at checkout. We offer a 30-day return policy — if you\'re not completely satisfied, return your piece in its original condition for a full refund.',
    },
  ]

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 page-enter">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-xs text-stone">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-gold transition-colors">Shop</Link></li>
            <li>/</li>
            <li className="text-warm-black">{product.name}</li>
          </ol>
        </nav>

        <div ref={headerRevealRef} className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 reveal-hidden ${headerVisible ? 'reveal-visible' : ''}`}>
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-cream overflow-hidden">
              <img
                data-strk-img-id={`pdp-main-${product.slug}-m4n5o6`}
                data-strk-img={`[pdp-${product.slug}-desc] [pdp-${product.slug}-name]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square bg-cream overflow-hidden cursor-pointer border-2 border-transparent hover:border-gold transition-colors duration-300">
                  <img
                    data-strk-img-id={`pdp-thumb-${product.slug}-${i}-p7q8r9`}
                    data-strk-img={`[pdp-${product.slug}-desc] [pdp-${product.slug}-name]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="py-2">
            <h1
              id={`pdp-${product.slug}-name`}
              className="font-serif text-2xl md:text-3xl uppercase tracking-[0.2em] font-medium text-warm-black"
            >
              {product.name}
            </h1>
            <p
              id={`pdp-${product.slug}-desc`}
              className="text-sm text-stone mt-2"
            >
              {product.description}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.round(product.rating) ? 'text-gold fill-gold' : 'text-sand'}`}
                  />
                ))}
              </div>
              <span className="text-xs text-stone">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <p className="text-2xl font-serif mt-4">${product.price}</p>

            {/* Divider */}
            <div className="w-full h-px bg-sand my-6" />

            {/* Variant selector */}
            <div>
              <p className="text-xs uppercase tracking-[0.15em] font-medium text-warm-black mb-3">Tone</p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-6 py-2.5 text-xs uppercase tracking-[0.15em] font-medium border transition-all duration-300 ${
                      selectedVariant === v
                        ? 'border-warm-black bg-warm-black text-white'
                        : 'border-sand text-warm-black hover:border-warm-black'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-xs uppercase tracking-[0.15em] font-medium text-warm-black mb-3">Quantity</p>
              <div className="flex items-center border border-sand w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-cream transition-colors duration-300"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-sm font-medium border-x border-sand">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-cream transition-colors duration-300"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-8 bg-gold text-warm-black py-4 text-xs uppercase tracking-[0.2em] font-medium hover:bg-gold-dark hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-8 border-t border-sand">
              {accordions.map((acc) => (
                <div key={acc.key} className="border-b border-sand">
                  <button
                    onClick={() => toggleAccordion(acc.key)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-xs uppercase tracking-[0.15em] font-medium text-warm-black">
                      {acc.title}
                    </span>
                    {openAccordion === acc.key ? (
                      <ChevronUp className="w-4 h-4 text-stone transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-stone transition-transform duration-300" />
                    )}
                  </button>
                  <div
                    className={`accordion-content ${openAccordion === acc.key ? 'open' : ''}`}
                  >
                    <p className="text-sm text-stone leading-relaxed pb-4">
                      {acc.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div ref={relatedRevealRef} className="mt-16 md:mt-24 pt-12 border-t border-sand">
          <h2 className={`font-serif text-2xl md:text-3xl font-light tracking-wide text-warm-black text-center mb-10 reveal-hidden ${relatedVisible ? 'reveal-visible' : ''}`}>
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((p, i) => (
              <div key={p.id} className={`reveal-hidden ${relatedVisible ? 'reveal-visible' : ''} reveal-delay-${Math.min(i + 1, 4)}`}>
                <ProductCard product={p} index={i + 10} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
