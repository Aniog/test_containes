import React, { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Minus, Plus, Truck, ShieldCheck, Sparkles } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/contexts/CartContext'
import { useImageLoader } from '@/hooks/useImageLoader'
import { StockImage } from '@/components/shared/StockImage'
import StarRating from '@/components/shared/StarRating'
import ProductCard from '@/components/shared/ProductCard'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function ProductDetail() {
  const { productId } = useParams()
  const { addItem } = useCart()
  const product = useMemo(() => products.find((p) => p.id === productId), [productId])

  const [variant, setVariant] = useState('gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    if (!product) return
    setVariant('gold')
    setQuantity(1)
    setActiveImage(0)
    setAdded(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [product])

  const relatedProducts = useMemo(() => {
    if (!product) return []
    return products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)
  }, [product])

  const handleAddToCart = () => {
    if (!product) return
    addItem(product, variant, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const containerRef = useImageLoader([productId, activeImage])

  if (!product) {
    return (
      <div className="flex h-screen items-center justify-center bg-cream-50">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-espresso-900">Product not found</h1>
          <Link to="/shop" className="btn-outline mt-4 inline-flex">Back to Shop</Link>
        </div>
      </div>
    )
  }

  const galleryQueries = [product.imageQuery, product.hoverQuery || product.imageQuery, product.imageQuery]

  return (
    <div ref={containerRef} className="bg-cream-50 pb-20 sm:pb-28">
      <div className="mx-auto max-w-7xl px-4 pt-28 sm:px-6 lg:px-8 sm:pt-32">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse gap-4 lg:flex-row">
            <div className="flex gap-3 overflow-x-auto lg:flex-col lg:overflow-visible">
              {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`relative h-20 w-20 flex-shrink-0 overflow-hidden border transition-colors ${
                    activeImage === idx ? 'border-gold-600' : 'border-cream-300'
                  }`}
                  aria-label={`View image ${idx + 1}`}
                >
                  <StockImage
                    query={galleryQueries[idx]}
                    ratio="1x1"
                    width={200}
                    imgId={`product-thumb-${product.id}-${idx}`}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-cream-200">
              {galleryQueries.map((q, idx) => (
                <div
                  key={idx}
                  className={cn(
                    'absolute inset-0 transition-opacity duration-500',
                    activeImage === idx ? 'opacity-100' : 'opacity-0'
                  )}
                >
                  <StockImage
                    query={q}
                    ratio="3x4"
                    width={900}
                    imgId={`product-main-${product.id}-${idx}`}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            <p className="section-label mb-2">{product.category}</p>
            <h1 className="product-name text-3xl text-espresso-900 sm:text-4xl">{product.name}</h1>
            <div className="mt-3 flex items-center gap-4">
              <span className="font-serif text-2xl text-espresso-900">${product.price.toFixed(2)}</span>
              <StarRating rating={product.rating} count={product.reviewCount} />
            </div>
            <p className="mt-6 leading-relaxed text-warmgray-600">{product.description}</p>

            {/* Variant selector */}
            <div className="mt-8">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-espresso-900">Metal Tone</span>
              <div className="mt-3 flex gap-3">
                {['gold', 'silver'].map((tone) => (
                  <button
                    key={tone}
                    onClick={() => setVariant(tone)}
                    className={`rounded-full border px-6 py-2 text-sm font-medium uppercase tracking-wider transition-all ${
                      variant === tone
                        ? 'border-espresso-900 bg-espresso-900 text-white'
                        : 'border-cream-300 bg-transparent text-espresso-900 hover:border-gold-600'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-espresso-900">Quantity</span>
              <div className="mt-3 inline-flex items-center border border-cream-300">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 text-espresso-900 hover:bg-cream-200"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center text-sm font-medium text-espresso-900">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 text-espresso-900 hover:bg-cream-200"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <Button
              onClick={handleAddToCart}
              className={`mt-8 h-12 w-full uppercase tracking-wider text-xs transition-colors ${
                added ? 'bg-espresso-900 text-white' : 'btn-primary'
              }`}
            >
              {added ? 'Added to Bag' : 'Add to Cart'}
            </Button>

            <div className="mt-6 grid grid-cols-2 gap-4 text-xs text-warmgray-600">
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-gold-600" />
                Free shipping worldwide
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-gold-600" />
                30-day returns
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-gold-600" />
                18k gold plated
              </div>
            </div>

            {/* Accordions */}
            <Accordion type="multiple" className="mt-10">
              <AccordionItem value="description">
                <AccordionTrigger>Description</AccordionTrigger>
                <AccordionContent>
                {product.description}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="materials">
              <AccordionTrigger>Materials & Care</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2"><strong>Materials:</strong> {product.materials}</p>
                <p><strong>Care:</strong> {product.care}</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="shipping">
              <AccordionTrigger>Shipping & Returns</AccordionTrigger>
              <AccordionContent>
                <p className="mb-2"><strong>Shipping:</strong> {product.shipping}</p>
                <p><strong>Returns:</strong> {product.returns}</p>
              </AccordionContent>
            </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <div className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8 sm:mt-28">
          <div className="mb-10 text-center">
            <p className="section-label mb-3">Complete the Look</p>
            <h2 className="font-serif text-3xl text-espresso-900 sm:text-4xl">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
