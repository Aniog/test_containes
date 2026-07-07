import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { ChevronRight } from 'lucide-react'
import { getProductById, getRelatedProducts } from '@/data/products'
import { useCart } from '@/contexts/CartContext'
import { Button } from '@/components/ui/Button'
import { Accordion } from '@/components/ui/Accordion'
import { StarRating } from '@/components/ui/StarRating'
import { QuantitySelector } from '@/components/ui/QuantitySelector'
import ProductCard from '@/components/shop/ProductCard'
import { formatPrice, cn, getStrkImageUrl } from '@/lib/utils'
import strkImgConfig from '@/strk-img-config.json'

const PLACEHOLDER_SVG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function Product() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()
  const [selectedTone, setSelectedTone] = useState(product?.tone[0] || 'gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState('main')
  const containerRef = useRef(null)

  useEffect(() => {
    if (product) {
      setSelectedTone(product.tone[0])
      setQuantity(1)
      setActiveImage('main')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [product])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [product, activeImage])

  if (!product) {
    return (
      <div className="mx-auto max-w-[1440px] px-5 py-24 text-center md:px-8 lg:px-12">
        <h1 className="font-serif text-3xl text-espresso">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-sm uppercase tracking-widest text-gold">
          Continue Shopping
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 4)

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.materials} ${product.care}` },
    { title: 'Shipping & Returns', content: `${product.shipping} ${product.returns}` },
  ]

  const galleryImages = [
    { key: 'main', img: product.image, label: product.name },
    { key: 'hover', img: product.hoverImage, label: `${product.name} alternate` },
  ]

  const handleAddToCart = () => {
    addItem(product, { quantity, tone: selectedTone })
  }

  return (
    <div ref={containerRef} className="bg-cream">
      <div className="mx-auto max-w-[1440px] px-5 py-6 md:px-8 lg:px-12">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs uppercase tracking-widest text-taupe">
          <Link to="/" className="hover:text-espresso">Home</Link>
          <ChevronRight className="mx-1 inline h-3 w-3" />
          <Link to="/shop" className="hover:text-espresso">Shop</Link>
          <ChevronRight className="mx-1 inline h-3 w-3" />
          <span className="text-espresso">{product.name}</span>
        </nav>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[3/4] overflow-hidden bg-parchment">
              {galleryImages.map(({ key, img, label }) => (
                <img
                  key={key}
                  alt={label}
                  data-strk-img-id={img.imgId}
                  data-strk-img={img.query}
                  data-strk-img-ratio={img.ratio}
                  data-strk-img-width={img.width}
                  src={getStrkImageUrl(img.imgId) || PLACEHOLDER_SVG}
                  className={cn(
                    'absolute inset-0 h-full w-full object-cover transition-opacity duration-500',
                    activeImage === key ? 'opacity-100' : 'opacity-0'
                  )}
                />
              ))}
            </div>
            <div className="flex gap-3">
              {galleryImages.map(({ key, img }) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveImage(key)}
                  className={cn(
                    'relative h-20 w-16 overflow-hidden bg-parchment ring-1 ring-offset-1 transition-all',
                    activeImage === key ? 'ring-espresso' : 'ring-transparent hover:ring-mist'
                  )}
                  aria-label={`View ${key} image`}
                >
                  <img
                    alt={`${product.name} thumbnail ${key}`}
                    data-strk-img-id={`${img.imgId}-thumb`}
                    data-strk-img={img.query}
                    data-strk-img-ratio={img.ratio}
                    data-strk-img-width="200"
                    src={getStrkImageUrl(`${img.imgId}-thumb`) || PLACEHOLDER_SVG}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center py-4 lg:py-10">
            <StarRating
              rating={product.rating}
              reviewCount={product.reviewCount}
              className="mb-4"
            />
            <h1
              id={`product-${product.id}-name`}
              className="font-serif text-3xl uppercase tracking-[0.12em] text-espresso md:text-4xl lg:text-5xl"
            >
              {product.name}
            </h1>
            <p className="mt-3 font-sans text-2xl font-light text-espresso">
              {formatPrice(product.price)}
            </p>
            <p
              id={`product-${product.id}-desc`}
              className="mt-6 leading-relaxed text-taupe"
            >
              {product.description}
            </p>

            {/* Tone selector */}
            {product.tone.length > 1 && (
              <div className="mt-8">
                <span className="mb-3 block text-xs uppercase tracking-widest text-taupe">
                  Tone
                </span>
                <div className="flex flex-wrap gap-3">
                  {product.tone.map((tone) => (
                    <button
                      key={tone}
                      type="button"
                      onClick={() => setSelectedTone(tone)}
                      className={cn(
                        'rounded-full border px-6 py-2 text-sm capitalize transition-all',
                        selectedTone === tone
                          ? 'border-espresso bg-espresso text-cream'
                          : 'border-mist bg-transparent text-taupe hover:border-espresso hover:text-espresso'
                      )}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-8">
              <span className="mb-3 block text-xs uppercase tracking-widest text-taupe">
                Quantity
              </span>
              <QuantitySelector value={quantity} onChange={setQuantity} />
            </div>

            {/* Add to cart */}
            <div className="mt-8">
              <Button
                variant="primary"
                size="full"
                onClick={handleAddToCart}
              >
                Add to Cart — {formatPrice(product.price * quantity)}
              </Button>
              {product.price * quantity >= 50 && (
                <p className="mt-3 text-center text-xs text-taupe">
                  You qualify for free shipping.
                </p>
              )}
            </div>

            {/* Accordions */}
            <div className="mt-10">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section className="border-t border-mist bg-parchment/30 py-16 md:py-24">
          <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
            <h2 className="mb-10 text-center font-serif text-2xl text-espresso md:text-3xl">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4">
              {related.map((product) => (
                <ProductCard key={product.id} product={product} showQuickAdd={false} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
