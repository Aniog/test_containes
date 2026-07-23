import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import AccordionItem from '@/components/storefront/AccordionItem'
import ProductGallery from '@/components/storefront/ProductGallery'
import QuantitySelector from '@/components/storefront/QuantitySelector'
import RatingStars from '@/components/storefront/RatingStars'
import RelatedProducts from '@/components/storefront/RelatedProducts'
import { formatPrice, getProductBySlug, getRelatedProducts } from '@/data/storefront'
import { cn } from '@/lib/utils'
import { useStrkImages } from '@/hooks/useStrkImages'

export default function ProductPage({ onAddToCart }) {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const containerRef = useRef(null)
  const [selectedVariant, setSelectedVariant] = useState(product?.colors?.[0] || 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    setSelectedVariant(product?.colors?.[0] || 'Gold')
    setQuantity(1)
    setSelectedIndex(0)
  }, [product?.slug])

  useStrkImages(containerRef, [slug, selectedIndex])

  const relatedProducts = useMemo(() => getRelatedProducts(slug), [slug])

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  return (
    <div ref={containerRef} className="section-shell py-8 sm:py-12">
      <Link to="/shop" className="text-sm uppercase tracking-button text-muted transition hover:text-ink">
        Back to shop
      </Link>

      <section className="mt-6 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        <ProductGallery
          product={product}
          selectedIndex={selectedIndex}
          onSelect={setSelectedIndex}
        />

        <div className="lg:pt-8">
          <p className="text-xs uppercase tracking-button text-muted">{product.category}</p>
          <h1
            id={`product-${product.slug}-name`}
            className="mt-3 font-serif text-4xl uppercase tracking-luxe text-ink sm:text-5xl"
          >
            {product.name}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <p className="text-2xl font-medium text-ink">{formatPrice(product.price)}</p>
            <RatingStars rating={product.rating} reviews={product.reviews} />
          </div>
          <p className="mt-6 max-w-xl text-base leading-8 text-muted">
            {product.shortDescription}
          </p>

          <div className="mt-8">
            <p className="text-xs uppercase tracking-button text-muted">Tone</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {product.colors.map((color) => (
                <button
                  key={color}
                  type="button"
                  onClick={() => setSelectedVariant(color)}
                  className={cn(
                    'rounded-full border px-5 py-3 text-sm uppercase tracking-button transition',
                    selectedVariant === color
                      ? 'border-ink bg-ink text-mist'
                      : 'border-line bg-surface text-ink hover:border-gold',
                  )}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="text-xs uppercase tracking-button text-muted">Quantity</p>
            <div className="mt-3">
              <QuantitySelector value={quantity} onChange={setQuantity} />
            </div>
          </div>

          <button
            type="button"
            onClick={() => onAddToCart(product, selectedVariant, quantity)}
            className="premium-button mt-8 min-h-14 w-full justify-center"
          >
            Add to Cart
          </button>

          <div className="mt-10 border-t border-line/70">
            <AccordionItem title="Description" defaultOpen>
              {product.description}
            </AccordionItem>
            <AccordionItem title="Materials & Care">{product.materials}</AccordionItem>
            <AccordionItem title="Shipping & Returns">{product.shipping}</AccordionItem>
          </div>
        </div>
      </section>

      <RelatedProducts products={relatedProducts} onAddToCart={onAddToCart} />
    </div>
  )
}
