import { useEffect, useMemo, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Minus, Plus } from 'lucide-react'
import Stars from '@/components/common/Stars'
import ProductCard from '@/components/product/ProductCard'
import ProductImage from '@/components/product/ProductImage'
import AccordionGroup from '@/components/product/AccordionGroup'
import { getProductBySlug, getRelatedProducts } from '@/data/products'
import { useStore } from '@/context/StoreContext'
import { formatPrice } from '@/lib/format'
import strkImgConfig from '@/strk-img-config.json'

const ProductPage = () => {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const { addToCart } = useStore()
  const containerRef = useRef(null)

  const relatedProducts = useMemo(
    () => (product ? getRelatedProducts(product.slug, product.category) : []),
    [product],
  )

  useEffect(() => {
    if (!product) return
    setSelectedVariant(product.variants[0] || 'Gold Tone')
    setQuantity(1)
    setSelectedImage(0)
  }, [product])

  useEffect(() => {
    if (!product) return undefined

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
  }, [product, selectedImage])

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
      content: product.materialsCare,
    },
    {
      title: 'Shipping & Returns',
      content: product.shippingReturns,
    },
  ]

  return (
    <div ref={containerRef} className="bg-ivory pt-28 text-velvet md:pt-32">
      <div className="mx-auto max-w-7xl px-6 pb-16 md:px-10 xl:px-16">
        <div className="mb-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-eyebrow text-velvet/45">
          <Link to="/shop" className="transition hover:text-velvet">
            Shop
          </Link>
          <span>/</span>
          <span>{product.category}</span>
          <span>/</span>
          <span>{product.name}</span>
        </div>
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-[32px] border border-velvet/10 bg-white shadow-soft">
              <ProductImage
                alt={product.name}
                imageId={`product-detail-${product.slug}-${selectedImage}`}
                query={`[product-detail-${product.slug}-shot-${selectedImage}] [product-detail-${product.slug}-name] [product-detail-${product.slug}-desc]`}
                ratio="4x3"
                width={1400}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {product.galleryShots.map((shot, index) => (
                <button
                  key={shot}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className={`overflow-hidden rounded-[20px] border bg-white text-left shadow-soft transition ${
                    selectedImage === index ? 'border-gold' : 'border-velvet/10'
                  }`}
                >
                  <ProductImage
                    alt={`${product.name} ${shot}`}
                    imageId={`product-thumb-${product.slug}-${index}`}
                    query={`[product-detail-${product.slug}-shot-${index}] [product-detail-${product.slug}-name]`}
                    ratio="1x1"
                    width={300}
                    className="aspect-square w-full object-cover"
                  />
                  <span
                    id={`product-detail-${product.slug}-shot-${index}`}
                    className="block px-3 py-3 text-[10px] uppercase tracking-eyebrow text-velvet/55"
                  >
                    {shot}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-8 lg:sticky lg:top-32">
            <div className="space-y-5 rounded-[32px] border border-velvet/10 bg-white p-6 shadow-soft md:p-8">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-eyebrow text-velvet/45">{product.category}</p>
                <div className="space-y-3">
                  <h1
                    id={`product-detail-${product.slug}-name`}
                    className="font-serif text-4xl uppercase tracking-product text-velvet md:text-5xl"
                  >
                    {product.name}
                  </h1>
                  <div className="flex items-center justify-between gap-4">
                    <Stars rating={product.rating} reviewCount={product.reviews} />
                    <p className="text-2xl text-velvet">{formatPrice(product.price)}</p>
                  </div>
                </div>
                <p id={`product-detail-${product.slug}-desc`} className="text-sm leading-7 text-velvet/70 md:text-base">
                  {product.shortDescription}
                </p>
              </div>

              <div className="space-y-4 border-y border-velvet/10 py-5">
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-eyebrow text-velvet/45">Tone</p>
                  <div className="flex flex-wrap gap-3">
                    {product.variants.map((variant) => (
                      <button
                        key={variant}
                        type="button"
                        onClick={() => setSelectedVariant(variant)}
                        className={`rounded-full border px-4 py-3 text-xs uppercase tracking-eyebrow transition ${
                          selectedVariant === variant
                            ? 'border-gold bg-gold text-velvet'
                            : 'border-velvet/10 bg-ivory text-velvet/70 hover:border-gold/40'
                        }`}
                      >
                        {variant}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-eyebrow text-velvet/45">Quantity</p>
                  <div className="inline-flex items-center rounded-full border border-velvet/10 bg-ivory px-2 py-2">
                    <button
                      type="button"
                      onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                      className="rounded-full p-2 text-velvet hover:text-gold-deep"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="min-w-12 text-center text-sm text-velvet">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity((current) => current + 1)}
                      className="rounded-full p-2 text-velvet hover:text-gold-deep"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => addToCart(product, { variant: selectedVariant, quantity })}
                className="w-full rounded-full bg-gold px-6 py-4 text-xs uppercase tracking-eyebrow text-velvet transition hover:bg-gold-deep hover:text-ivory"
              >
                Add to Cart
              </button>
            </div>

            <AccordionGroup items={accordionItems} />
          </div>
        </section>

        <section className="mt-20 space-y-7">
          <div className="flex items-end justify-between gap-4 border-b border-velvet/10 pb-5">
            <div>
              <p className="text-xs uppercase tracking-eyebrow text-velvet/45">Related pieces</p>
              <h2 className="mt-3 font-serif text-4xl text-velvet">You may also like</h2>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProductPage
