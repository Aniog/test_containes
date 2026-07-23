import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { getProductBySlug } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { useStockImages } from '@/lib/useStockImages'
import ProductGallery from '@/components/product/ProductGallery'
import ProductInfo from '@/components/product/ProductInfo'
import ProductAccordion from '@/components/product/ProductAccordion'
import RelatedProducts from '@/components/product/RelatedProducts'

const ProductPage = () => {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const { addItem } = useCart()
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] ?? 'Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const containerRef = useRef(null)

  useEffect(() => {
    if (!product) return
    setSelectedVariant(product.variants[0] ?? 'Gold Tone')
    setQuantity(1)
  }, [product])

  useStockImages(containerRef, [product?.slug])

  const accordionItems = useMemo(
    () =>
      product
        ? [
            {
              id: 'description',
              title: 'Description',
              content: product.longDescription,
            },
            {
              id: 'materials',
              title: 'Materials & Care',
              content: `${product.materials} Wipe gently with a soft cloth and store in the provided pouch to preserve the finish.`,
            },
            {
              id: 'shipping',
              title: 'Shipping & Returns',
              content: `${product.shipping} Returns accepted within 30 days on unworn pieces.`,
            },
          ]
        : [],
    [product],
  )

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
    setQuantity(1)
  }

  return (
    <div ref={containerRef} className="pb-20 pt-28 sm:pt-32 lg:pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.28em] text-velmora-muted">
          <Link to="/shop" className="transition-colors hover:text-velmora-ink">
            Shop
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-velmora-ink">{product.shortName}</span>
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
          <ProductGallery product={product} />
          <ProductInfo
            product={product}
            selectedVariant={selectedVariant}
            setSelectedVariant={setSelectedVariant}
            quantity={quantity}
            setQuantity={setQuantity}
            onAddToCart={handleAddToCart}
          />
        </div>

        <div className="mt-8 lg:max-w-[48%] lg:pl-2">
          <ProductAccordion items={accordionItems} />
        </div>
      </div>

      <RelatedProducts currentSlug={product.slug} />
    </div>
  )
}

export default ProductPage
