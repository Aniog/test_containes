import { Minus, Plus, Truck } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { Link, Navigate, useParams } from 'react-router-dom'
import ProductGallery from '@/components/products/ProductGallery'
import ProductCard from '@/components/products/ProductCard'
import Accordion from '@/components/shared/Accordion'
import RatingStars from '@/components/shared/RatingStars'
import { useCart } from '@/context/CartContext'
import { formatPrice, getProductBySlug, products } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'
import { cn } from '@/lib/utils'

function ProductDetailPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') {
        cleanup()
      }
    }
  }, [activeIndex, selectedVariant])

  const relatedProducts = useMemo(() => {
    if (!product) {
      return []
    }

    return products.filter((item) => item.id !== product.id).slice(0, 3)
  }, [product])

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const accordionItems = [
    {
      title: 'Description',
      content: product.description,
    },
    {
      title: 'Materials & Care',
      content: `${product.material}. ${product.care}`,
    },
    {
      title: 'Shipping & Returns',
      content: product.shipping,
    },
  ]

  return (
    <div ref={containerRef} className="bg-ivory pt-28 text-velvet md:pt-32">
      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8 lg:px-10 lg:pb-24">
        <div className="mb-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-luxe text-smoke">
          <Link to="/shop" className="transition hover:text-velvet">
            Shop
          </Link>
          <span>/</span>
          <span>{product.category}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <ProductGallery product={product} activeIndex={activeIndex} onSelect={setActiveIndex} />

          <div className="space-y-7 lg:sticky lg:top-32">
            <div className="space-y-4 border-b border-pearl pb-7">
              <p className="text-xs uppercase tracking-luxe text-smoke">{product.category}</p>
              <h1 className="font-serif text-5xl uppercase leading-none tracking-luxe text-velvet md:text-6xl">
                {product.name}
              </h1>
              <div className="flex flex-wrap items-center gap-4">
                <p className="text-lg uppercase tracking-luxe text-velvet">{formatPrice(product.price)}</p>
                <RatingStars rating={product.rating} reviews={product.reviews} />
              </div>
              <p className="max-w-xl text-sm leading-7 text-smoke md:text-base">{product.shortDescription}</p>
            </div>

            <div className="space-y-5">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-luxe text-smoke">Tone</p>
                <div className="flex flex-wrap gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      type="button"
                      className={cn('rounded-full border px-5 py-3 text-xs uppercase tracking-luxe transition', selectedVariant === variant ? 'border-velvet bg-velvet text-ivory' : 'border-pearl bg-white/60 text-velvet hover:border-champagne')}
                      onClick={() => setSelectedVariant(variant)}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs uppercase tracking-luxe text-smoke">Quantity</p>
                <div className="inline-flex items-center rounded-full border border-pearl bg-white/70">
                  <button type="button" className="p-4 text-velvet" onClick={() => setQuantity((current) => Math.max(1, current - 1))}>
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="min-w-12 text-center text-sm text-velvet">{quantity}</span>
                  <button type="button" className="p-4 text-velvet" onClick={() => setQuantity((current) => current + 1)}>
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <button
                type="button"
                className="w-full rounded-full bg-champagne px-6 py-4 text-xs uppercase tracking-luxe text-velvet transition hover:bg-velvet hover:text-ivory"
                onClick={() => addItem(product, { quantity, variant: selectedVariant })}
              >
                Add to Cart
              </button>

              <div className="rounded-luxe border border-pearl bg-white/60 p-5 text-sm leading-7 text-smoke shadow-soft">
                <div className="flex items-center gap-3 text-velvet">
                  <Truck className="h-4 w-4" />
                  <span className="text-xs uppercase tracking-luxe">Free worldwide shipping on every order</span>
                </div>
              </div>
            </div>

            <Accordion items={accordionItems} />
          </div>
        </div>
      </section>

      <section className="border-t border-pearl bg-white/45 py-16 md:py-24">
        <div className="mx-auto max-w-7xl space-y-10 px-5 md:px-8 lg:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-luxe text-smoke">Related styles</p>
              <h2 className="font-serif text-4xl text-velvet md:text-5xl">You may also like</h2>
            </div>
            <Link to="/shop" className="text-xs uppercase tracking-luxe text-velvet transition hover:text-champagne">
              View all products
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} idPrefix="related-grid" />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDetailPage
