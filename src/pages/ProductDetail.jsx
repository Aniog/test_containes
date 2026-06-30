import { useState, useEffect, useRef } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Minus, Plus, ChevronLeft } from 'lucide-react'
import { StrkImg } from '@/components/Image'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products, getProductBySlug } from '@/data/products'
import { useCart } from '@/context/CartContext'
import StarRating from '@/components/StarRating'
import ProductCard from '@/components/ProductCard'
import Accordion from '@/components/product/Accordion'

export default function ProductDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const product = getProductBySlug(slug)
  const [selectedTone, setSelectedTone] = useState(product?.toneOptions[0] || 'gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState('primary')
  const [isAdding, setIsAdding] = useState(false)
  const { addToCart } = useCart()
  const galleryRef = useRef(null)

  useEffect(() => {
    if (product) {
      setSelectedTone(product.toneOptions[0])
      setQuantity(1)
      setActiveImage('primary')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [product])

  useEffect(() => {
    if (!galleryRef.current) return
    return ImageHelper.loadImages(strkImgConfig, galleryRef.current)
  }, [activeImage, product?.id])

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-velmora-bg px-4">
        <h1 className="font-serif text-3xl text-velmora-ink mb-4">Product Not Found</h1>
        <Link
          to="/shop"
          className="bg-velmora-ink text-white px-8 py-3 uppercase tracking-widest text-xs font-sans font-medium hover:bg-velmora-accent transition-colors"
        >
          Back to Shop
        </Link>
      </div>
    )
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const handleAdd = () => {
    setIsAdding(true)
    addToCart(product, { quantity, tone: selectedTone })
    setTimeout(() => setIsAdding(false), 600)
  }

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.materials} ${product.care}` },
    {
      title: 'Shipping & Returns',
      content:
        'Free worldwide shipping on all orders over $75. Orders are processed within 1–2 business days. We offer 30-day hassle-free returns on unworn items in original packaging.',
    },
  ]

  return (
    <main className="bg-velmora-bg pt-20 md:pt-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <button
          onClick={() => navigate(-1)}
          className="hidden md:flex items-center gap-2 font-sans text-xs uppercase tracking-[0.14em] text-velmora-ink-muted hover:text-velmora-ink transition-colors mb-8"
        >
          <ChevronLeft size={16} />
          Back
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24">
          {/* Gallery */}
          <div ref={galleryRef}>
            <div className="aspect-[4/5] bg-velmora-bg-alt overflow-hidden mb-4">
              <StrkImg
                id={`product-detail-${product.id}-active`}
                query={activeImage === 'primary' ? product.images.primary : product.images.secondary}
                ratio="4x5"
                width={900}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3">
              {['primary', 'secondary'].map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveImage(key)}
                  className={`w-20 h-24 md:w-24 md:h-28 overflow-hidden border transition-colors ${
                    activeImage === key
                      ? 'border-velmora-ink'
                      : 'border-velmora-hairline hover:border-velmora-ink-muted'
                  }`}
                  aria-label={`View ${key} image`}
                >
                  <StrkImg
                    id={`product-detail-${product.id}-thumb-${key}`}
                    query={product.images[key]}
                    ratio="4x5"
                    width={200}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="md:pt-8">
            <p className="font-sans text-xs uppercase tracking-[0.2em] text-velmora-ink-muted mb-3">
              {product.category}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-velmora-ink uppercase tracking-velmora mb-4">
              {product.name}
            </h1>
            <div className="flex items-center gap-4 mb-5">
              <StarRating rating={product.rating} reviewCount={product.reviewCount} />
            </div>
            <p className="font-sans text-xl md:text-2xl text-velmora-ink mb-6">
              ${product.price}
            </p>
            <p className="font-sans text-velmora-ink-muted leading-relaxed mb-8">
              {product.description}
            </p>

            {product.toneOptions.length > 1 && (
              <div className="mb-6">
                <span className="font-sans text-xs uppercase tracking-[0.14em] text-velmora-ink mb-3 block">
                  Tone
                </span>
                <div className="flex flex-wrap gap-3">
                  {product.toneOptions.map((tone) => (
                    <button
                      key={tone}
                      onClick={() => setSelectedTone(tone)}
                      className={`px-5 py-2.5 text-xs uppercase tracking-[0.14em] font-sans font-medium border transition-colors ${
                        selectedTone === tone
                          ? 'bg-velmora-ink text-white border-velmora-ink'
                          : 'bg-transparent text-velmora-ink border-velmora-hairline hover:border-velmora-ink'
                      }`}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="mb-8">
              <span className="font-sans text-xs uppercase tracking-[0.14em] text-velmora-ink mb-3 block">
                Quantity
              </span>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  aria-label="Decrease quantity"
                  className="w-10 h-10 flex items-center justify-center border border-velmora-hairline text-velmora-ink hover:border-velmora-accent transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="font-sans text-sm text-velmora-ink w-6 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  aria-label="Increase quantity"
                  className="w-10 h-10 flex items-center justify-center border border-velmora-hairline text-velmora-ink hover:border-velmora-accent transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <button
              onClick={handleAdd}
              disabled={isAdding}
              className="w-full bg-velmora-accent text-white py-4 uppercase tracking-[0.18em] text-xs font-sans font-medium hover:bg-velmora-accent-hover transition-colors disabled:opacity-70"
            >
              {isAdding ? 'Added to Cart' : 'Add to Cart'}
            </button>

            <div className="mt-10">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="border-t border-velmora-hairline bg-velmora-bg">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <h2 className="font-serif text-2xl md:text-3xl text-velmora-ink text-center mb-10 md:mb-12">
            You May Also Like
          </h2>
          {relatedProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {relatedProducts.map((p, index) => (
                <ProductCard key={p.id} product={p} index={index} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {products
                .filter((p) => p.id !== product.id)
                .slice(0, 4)
                .map((p, index) => (
                  <ProductCard key={p.id} product={p} index={index} />
                ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
