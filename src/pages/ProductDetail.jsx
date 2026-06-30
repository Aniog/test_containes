import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check, ChevronRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { getProductById, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { formatPrice } from '@/lib/utils'
import { StarRating } from '@/components/ui/StarRating'
import { QuantitySelector } from '@/components/ui/QuantitySelector'
import { Accordion } from '@/components/ui/Accordion'
import { ProductCard } from '@/components/product/ProductCard'

export default function ProductDetail() {
  const { productId } = useParams()
  const product = getProductById(productId)
  const { addToCart } = useCart()
  const [selectedTone, setSelectedTone] = useState(
    product?.tone?.[0] || 'gold'
  )
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [added, setAdded] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [productId])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [productId])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-velmora-cream">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-velmora-deep">Product not found</h1>
          <Link to="/shop" className="mt-4 inline-block text-velmora-gold underline">
            Continue shopping
          </Link>
        </div>
      </div>
    )
  }

  const related = getRelatedProducts(product.related || [])
  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.details} ${product.care}` },
    {
      title: 'Shipping & Returns',
      content:
        'Free worldwide shipping on all orders over $75. Standard delivery 5–7 business days. Express delivery available at checkout. Returns accepted within 30 days of delivery in original condition.',
    },
  ]

  const handleAddToCart = () => {
    addToCart(product, { tone: selectedTone, quantity })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div ref={containerRef} className="bg-velmora-cream pt-20 md:pt-28 pb-16 md:pb-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <nav className="hidden md:flex items-center gap-2 text-xs text-velmora-taupe mb-8">
          <Link to="/" className="hover:text-velmora-deep">Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="hover:text-velmora-deep">Shop</Link>
          <ChevronRight size={12} />
          <span className="text-velmora-deep">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="aspect-[4/5] bg-velmora-hairline/30 overflow-hidden">
              <img
                data-strk-img-id={`product-main-${product.id}-${activeImage}`}
                data-strk-img={`[product-title-${product.id}] ${selectedTone} jewelry editorial product photography`}
                data-strk-img-ratio="4x5"
                data-strk-img-width={900}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {Array.from({ length: product.images }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`aspect-square bg-velmora-hairline/30 overflow-hidden border-2 transition-colors ${
                    activeImage === index
                      ? 'border-velmora-deep'
                      : 'border-transparent hover:border-velmora-hairline'
                  }`}
                >
                  <img
                    data-strk-img-id={`product-thumb-${product.id}-${index}`}
                    data-strk-img={`[product-title-${product.id}] gold jewelry detail angle ${index + 1}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width={300}
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product info */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:py-8"
          >
            <p className="text-xs uppercase tracking-widest-xl text-velmora-gold font-medium mb-2">
              {product.category}
            </p>
            <h1
              id={`product-title-${product.id}`}
              className="font-serif text-3xl md:text-4xl lg:text-5xl uppercase tracking-widest-xl text-velmora-deep"
            >
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-4">
              <StarRating rating={product.rating} />
              <span className="text-sm text-velmora-taupe">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <p className="mt-6 text-2xl md:text-3xl font-serif text-velmora-deep">
              {formatPrice(product.price)}
            </p>

            <p className="mt-6 text-velmora-taupe leading-relaxed">
              {product.description}
            </p>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest-xl text-velmora-deep font-medium mb-3">
                Tone
              </p>
              <div className="flex gap-3">
                {product.tone?.map((tone) => (
                  <button
                    key={tone}
                    type="button"
                    onClick={() => setSelectedTone(tone)}
                    className={`px-6 py-2.5 text-xs uppercase tracking-widest-xl border transition-colors ${
                      selectedTone === tone
                        ? 'bg-velmora-deep text-velmora-cream border-velmora-deep'
                        : 'bg-transparent text-velmora-deep border-velmora-hairline hover:border-velmora-deep'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest-xl text-velmora-deep font-medium mb-3">
                Quantity
              </p>
              <QuantitySelector value={quantity} onChange={setQuantity} />
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              className={`w-full mt-10 py-4 uppercase text-xs tracking-widest-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                added
                  ? 'bg-green-700 text-white'
                  : 'bg-velmora-gold text-white hover:bg-velmora-gold-dark'
              }`}
            >
              {added ? (
                <>
                  <Check size={16} /> Added to Cart
                </>
              ) : (
                'Add to Cart'
              )}
            </button>

            <div className="mt-10">
              <Accordion items={accordionItems} />
            </div>
          </motion.div>
        </div>

        {/* Related products */}
        <div className="mt-20 md:mt-32">
          <h2 className="font-serif text-2xl md:text-3xl text-velmora-deep mb-8 md:mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {related.map((product) => (
              <ProductCard key={product.id} product={product} containerRef={containerRef} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
