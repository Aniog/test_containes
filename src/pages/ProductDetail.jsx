import React, { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, Minus, Plus, ChevronDown, ChevronUp, ShoppingBag } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import ProductCard from '@/components/product/ProductCard'

const ProductDetail = () => {
  const { id } = useParams()
  const containerRef = useRef(null)
  const product = products.find(p => p.id === id)
  const { addItem } = useCart()

  const [selectedTone, setSelectedTone] = useState(product?.tone?.[0] || 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeAccordion, setActiveAccordion] = useState(null)

  useEffect(() => {
    if (product) {
      setSelectedTone(product.tone?.[0] || 'Gold')
      setQuantity(1)
      setActiveAccordion(null)
    }
  }, [product?.id])

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => cancelAnimationFrame(frameId)
  }, [id])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-velmora-cream pt-20">
        <div className="text-center">
          <h1 className="font-serif text-2xl text-velmora-charcoal mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-sm text-velmora-gold font-sans tracking-wider uppercase hover:underline">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 4)

  const handleAddToCart = () => {
    addItem(product, selectedTone, quantity)
  }

  const accordions = [
    {
      title: 'Description',
      content: `The ${product.name} is a stunning piece from our demi-fine collection. ${product.description}. Each piece is meticulously crafted to ensure lasting beauty and comfort, perfect for both everyday wear and special occasions.`
    },
    {
      title: 'Materials & Care',
      content: 'Crafted with 18K gold plating over a durable base metal. All pieces are hypoallergenic, nickel-free, and lead-free. To maintain the luster of your jewelry, avoid contact with water, perfume, and lotions. Store in the provided pouch when not wearing.'
    },
    {
      title: 'Shipping & Returns',
      content: 'Free worldwide shipping on all orders. Standard delivery takes 5-7 business days. Express shipping available at checkout. We offer a 30-day return policy — if you\'re not completely satisfied, return your piece in its original condition for a full refund.'
    },
  ]

  return (
    <div ref={containerRef} className="min-h-screen bg-velmora-cream pt-20 sm:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 sm:mb-8">
          <ol className="flex items-center gap-2 text-xs font-sans text-velmora-muted">
            <li><Link to="/" className="hover:text-velmora-gold transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link to="/shop" className="hover:text-velmora-gold transition-colors">Shop</Link></li>
            <li>/</li>
            <li className="text-velmora-charcoal">{product.name}</li>
          </ol>
        </nav>

        {/* Product layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image gallery */}
          <div className="space-y-3">
            <div className="aspect-[3/4] bg-velmora-warm-gray overflow-hidden">
              <img
                alt={product.name}
                data-strk-img-id={`${product.imgId}-detail-1`}
                data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry closeup detail`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="aspect-square bg-velmora-warm-gray overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                  <img
                    alt={`${product.name} view ${i + 1}`}
                    data-strk-img-id={`${product.imgId}-thumb-${i}`}
                    data-strk-img={`[${product.descId}] [${product.titleId}] gold jewelry detail angle`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:py-4">
            <h1
              id={product.titleId}
              className="font-serif text-2xl sm:text-3xl tracking-product uppercase text-velmora-charcoal"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-3">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-velmora-gold text-velmora-gold' : 'text-velmora-divider'}`}
                  />
                ))}
              </div>
              <span className="text-sm font-sans text-velmora-muted">({product.reviews})</span>
            </div>

            <p className="text-2xl font-serif text-velmora-charcoal mt-4">${product.price}</p>

            <p id={product.descId} className="text-base text-velmora-muted font-sans mt-4 leading-relaxed">
              {product.description}. Crafted with care using premium materials for lasting beauty.
            </p>

            {/* Tone selector */}
            <div className="mt-6">
              <label className="text-xs font-sans text-velmora-muted uppercase tracking-wider block mb-3">
                Tone
              </label>
              <div className="flex gap-3">
                {product.tone.map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setSelectedTone(tone)}
                    className={`px-5 py-2 text-sm font-sans tracking-wider uppercase border transition-all duration-300 ${
                      selectedTone === tone
                        ? 'border-velmora-gold bg-velmora-gold text-white'
                        : 'border-velmora-divider text-velmora-charcoal hover:border-velmora-gold'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <label className="text-xs font-sans text-velmora-muted uppercase tracking-wider block mb-3">
                Quantity
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-velmora-divider flex items-center justify-center text-velmora-muted hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-base font-sans text-velmora-charcoal w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-velmora-divider flex items-center justify-center text-velmora-muted hover:border-velmora-gold hover:text-velmora-gold transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="w-full mt-8 py-4 bg-velmora-gold text-white text-sm tracking-wider uppercase font-sans hover:bg-velmora-gold-hover transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Add to Cart
            </button>

            {/* Accordions */}
            <div className="mt-8 border-t border-velmora-divider">
              {accordions.map((acc, i) => (
                <div key={i} className="border-b border-velmora-divider">
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === i ? null : i)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span className="text-sm font-sans text-velmora-charcoal tracking-wider uppercase">{acc.title}</span>
                    {activeAccordion === i ? (
                      <ChevronUp className="w-4 h-4 text-velmora-muted" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-velmora-muted" />
                    )}
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${
                    activeAccordion === i ? 'max-h-60 pb-4' : 'max-h-0'
                  }`}>
                    <p className="text-sm text-velmora-muted font-sans leading-relaxed">{acc.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 sm:mt-28">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl text-velmora-charcoal tracking-wide">You May Also Like</h2>
            <div className="w-12 h-px bg-velmora-gold mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-6">
            {relatedProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
