import { useState, useEffect, useRef, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Heart, Check } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { getProductById, getRelatedProducts } from '@/data/products'
import { Button } from '@/components/ui/Button'
import { Accordion } from '@/components/ui/Accordion'
import { StarRating } from '@/components/ui/StarRating'
import { QuantityStepper } from '@/components/ui/QuantityStepper'
import { ProductImage } from '@/components/ui/ProductImage'
import ProductCard from '@/components/ProductCard'
import { useCart } from '@/context/CartContext'
import { cn } from '@/lib/utils'

export default function ProductDetail() {
  const { productId } = useParams()
  const product = getProductById(productId)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    setSelectedVariant(product?.variants[0] || 'gold')
    setQuantity(1)
    setActiveImage(0)
    setAdded(false)
  }, [productId, product])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [productId])

  const related = useMemo(() => getRelatedProducts(productId), [productId])

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-24 text-center md:px-8">
        <h1 className="font-serif text-4xl">Product Not Found</h1>
        <p className="mt-4 text-velmora-stone">
          We couldn’t find that piece. Explore our collection instead.
        </p>
        <Button className="mt-8" asChild>
          <Link to="/shop">Shop All</Link>
        </Button>
      </div>
    )
  }

  const titleId = `product-detail-title-${product.id}`
  const descId = `product-detail-desc-${product.id}`
  const imageQuery = `[${descId}] [${titleId}]`
  const imageIds = [
    `product-detail-main-${product.id}`,
    `product-detail-alt1-${product.id}`,
    `product-detail-alt2-${product.id}`,
    `product-detail-alt3-${product.id}`,
  ]

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: product.materials },
    {
      title: 'Shipping & Returns',
      content:
        'Free worldwide shipping on orders over $50. Orders ship within 1–2 business days. Enjoy 30-day hassle-free returns on unworn pieces in original packaging.',
    },
  ]

  const handleAdd = () => {
    addItem(product, selectedVariant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div ref={containerRef} className="bg-velmora-cream">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-8 md:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image gallery */}
          <div className="flex flex-col-reverse gap-4 md:flex-row">
            <div className="flex gap-3 overflow-x-auto md:flex-col md:overflow-visible">
              {imageIds.map((id, index) => (
                <button
                  key={id}
                  onClick={() => setActiveImage(index)}
                  className={cn(
                    'relative h-20 w-20 flex-shrink-0 overflow-hidden border transition-all duration-300 md:h-24 md:w-24',
                    activeImage === index
                      ? 'border-velmora-charcoal'
                      : 'border-transparent',
                  )}
                  aria-label={`View image ${index + 1}`}
                >
                  <ProductImage
                    imgId={id}
                    query={imageQuery}
                    ratio="1x1"
                    width="200"
                    alt={`${product.name} view ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>

            <div className="relative aspect-[4/5] flex-1 overflow-hidden bg-velmora-taupe/20">
              <ProductImage
                id={descId}
                imgId={imageIds[activeImage]}
                query={imageQuery}
                ratio="3x4"
                width="900"
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-velmora-gold">
              {product.category}
            </p>
            <h1
              id={titleId}
              className="mt-2 font-serif text-3xl uppercase tracking-[0.15em] md:text-4xl"
            >
              {product.name}
            </h1>
            <div className="mt-3 flex items-center gap-3">
              <StarRating
                rating={product.rating}
                count={product.reviewCount}
                size={14}
              />
            </div>
            <p className="mt-5 font-serif text-3xl md:text-4xl">
              ${product.price}
            </p>
            <p
              id={descId}
              className="mt-6 text-base leading-relaxed text-velmora-stone"
            >
              {product.description}
            </p>

            {/* Variant selector */}
            <div className="mt-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-velmora-stone">
                Metal Tone
              </span>
              <div className="mt-3 flex gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    onClick={() => setSelectedVariant(variant)}
                    className={cn(
                      'rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-widest transition-all duration-300',
                      selectedVariant === variant
                        ? 'border-velmora-gold bg-velmora-gold text-white'
                        : 'border-velmora-taupe text-velmora-stone hover:border-velmora-charcoal hover:text-velmora-charcoal',
                    )}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-velmora-stone">
                Quantity
              </span>
              <div className="mt-3">
                <QuantityStepper value={quantity} onChange={setQuantity} />
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex gap-3">
              <Button
                className="flex-1"
                onClick={handleAdd}
              >
                {added ? (
                  <>
                    <Check className="mr-2 h-4 w-4" /> Added to Bag
                  </>
                ) : (
                  'Add to Bag'
                )}
              </Button>
              <button
                className="border border-velmora-taupe px-4 text-velmora-charcoal transition-colors hover:border-velmora-gold hover:text-velmora-gold"
                aria-label="Add to wishlist"
              >
                <Heart className="h-5 w-5" />
              </button>
            </div>

            {/* Accordions */}
            <div className="mt-12">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="border-t border-velmora-taupe/50 bg-velmora-ivory py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="mb-10 text-center font-serif text-3xl md:text-4xl">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} queryContext="[you may also like]" />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
