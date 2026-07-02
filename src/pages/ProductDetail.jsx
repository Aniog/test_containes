import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Minus, Plus, Check, ArrowLeft } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { getProductById, products, formatPrice } from '@/data/products'
import { useCart } from '@/context/CartContext'
import StarRating from '@/components/StarRating'
import Accordion from '@/components/Accordion'
import ProductCard from '@/components/ProductCard'
import ProductImage from '@/components/ProductImage'

const relatedProducts = products.slice(0, 4)

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()
  const [variant, setVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const [activeImage, setActiveImage] = useState(0)
  const pageRef = useRef(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setQuantity(1)
    setAdded(false)
    setActiveImage(0)
  }, [id])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [id, activeImage])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-espresso mb-4">Product not found</h1>
          <Link to="/shop" className="text-clay underline">
            Continue shopping
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem(product, variant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.materials} ${product.care}` },
    {
      title: 'Shipping & Returns',
      content:
        'Free worldwide shipping on orders over $50. Standard delivery 5–7 business days. Express 2–3 business days. Returns accepted within 30 days in original condition.',
    },
  ]

  const galleryImages = [
    { id: product.imgId, hover: false },
    { id: product.hoverImgId, hover: true },
  ]

  return (
    <div ref={pageRef} className="pt-20 md:pt-24 bg-soft-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-warm-gray hover:text-espresso transition-colors mb-6"
        >
          <ArrowLeft size={14} />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-cream-dark overflow-hidden">
              <ProductImage
                product={product}
                hover={activeImage === 1}
                ratio="4x5"
                width="900"
              />
            </div>
            <div className="flex gap-3">
              {galleryImages.map((img, index) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(index)}
                  className={`w-20 h-24 md:w-24 md:h-28 overflow-hidden border-2 transition-colors ${
                    activeImage === index ? 'border-clay' : 'border-transparent'
                  }`}
                  aria-label={`View image ${index + 1}`}
                >
                  <ProductImage
                    product={product}
                    hover={img.hover}
                    ratio="4x5"
                    width="300"
                    imgId={img.id}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:py-6 lg:py-10">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl uppercase tracking-widest text-espresso mb-3">
              {product.name}
            </h1>
            <div className="flex items-center gap-3 mb-4">
              <StarRating rating={product.rating} size={14} />
              <span className="text-sm text-warm-gray">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
            <p className="font-sans text-xl md:text-2xl text-espresso mb-6">
              {formatPrice(product.price)}
            </p>
            <p className="text-warm-gray leading-relaxed mb-8">{product.description}</p>

            {/* Variant Selector */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest text-warm-gray mb-3">Tone</p>
              <div className="flex gap-3">
                {['gold', 'silver'].map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setVariant(tone)}
                    className={`px-6 py-3 text-xs uppercase tracking-widest border transition-all ${
                      variant === tone
                        ? 'border-espresso bg-espresso text-white'
                        : 'border-hairline-dark text-espresso hover:border-espresso'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest text-warm-gray mb-3">Quantity</p>
              <div className="flex items-center border border-hairline-dark w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-cream transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus size={14} />
                </button>
                <span className="w-12 text-center text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-cream transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus size={14} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all btn-luxury ${
                added
                  ? 'bg-espresso text-white'
                  : 'bg-clay text-white hover:bg-clay-dark'
              }`}
            >
              {added ? (
                <>
                  <Check size={16} />
                  Added to Cart
                </>
              ) : (
                <>Add to Cart — {formatPrice(product.price * quantity)}</>
              )}
            </button>

            <div className="mt-8">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20 md:mt-28">
          <h2 className="font-serif text-2xl md:text-3xl text-espresso text-center mb-10">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {relatedProducts.map((related) => (
              <ProductCard key={related.id} product={related} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
