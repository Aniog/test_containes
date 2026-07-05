import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import AccordionItem from '@/components/AccordionItem'
import ProductCard from '@/components/ProductCard'
import QuantitySelector from '@/components/QuantitySelector'
import SectionHeading from '@/components/SectionHeading'
import Stars from '@/components/Stars'
import StockImage from '@/components/StockImage'
import { findProductBySlug, getRelatedProducts } from '@/data/products'
import { useImageLoader } from '@/hooks/useImageLoader'

function ProductPage({ onAddToCart }) {
  const { slug } = useParams()
  const product = findProductBySlug(slug)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold Tone')
  const [resolvedHeroSrc, setResolvedHeroSrc] = useState('')
  const heroImageRef = useRef(null)
  const thumbnailRefs = useRef([])
  const containerRef = useImageLoader([slug, selectedImage])
  const [quantity, setQuantity] = useState(1)
  const [openPanel, setOpenPanel] = useState('Description')

  const relatedProducts = useMemo(() => getRelatedProducts(slug), [slug])

  useEffect(() => {
    setSelectedImage(0)
    setSelectedVariant(product?.variants?.[0] || 'Gold Tone')
    setResolvedHeroSrc('')
    setQuantity(1)
    setOpenPanel('Description')
  }, [product])

  useEffect(() => {
    const isResolvedImage = (value) =>
      Boolean(value) && !value.startsWith('data:image/svg+xml')

    const updateHeroImage = () => {
      const currentThumb = thumbnailRefs.current[selectedImage]
      const nextSrc = currentThumb?.currentSrc || currentThumb?.src || ''

      if (isResolvedImage(nextSrc)) {
        setResolvedHeroSrc(nextSrc)
      }
    }

    const currentThumb = thumbnailRefs.current[selectedImage]
    const frameId = window.requestAnimationFrame(updateHeroImage)
    const intervalId = window.setInterval(updateHeroImage, 250)
    const timeoutId = window.setTimeout(() => {
      window.clearInterval(intervalId)
      updateHeroImage()
    }, 1800)

    let observer
    if (currentThumb) {
      observer = new MutationObserver(updateHeroImage)
      observer.observe(currentThumb, {
        attributes: true,
        attributeFilter: ['src'],
      })
    }

    return () => {
      window.cancelAnimationFrame(frameId)
      window.clearInterval(intervalId)
      window.clearTimeout(timeoutId)
      observer?.disconnect()
    }
  }, [selectedImage, slug])

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const activeImage = product.gallery[selectedImage]
  const descriptionId = `product-page-${product.slug}-description`
  const titleId = `product-page-${product.slug}-title`
  const categoryId = `product-page-${product.slug}-category`
  const summaryId = `product-page-${product.slug}-summary`
  const materialId = `product-page-${product.slug}-material`
  const accordionContent = {
    Description: (
      <div id={descriptionId} className="space-y-3">
        <p>{product.description}</p>
        <ul className="space-y-2">
          {product.details.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>
    ),
    'Materials & Care': (
      <div id={materialId} className="space-y-2">
        <p>{product.material}</p>
        <ul className="space-y-2">
          {product.care.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>
    ),
    'Shipping & Returns': <p>{product.shipping}</p>,
  }

  return (
    <main ref={containerRef} className="bg-velmora-ivory pt-28 text-velmora-ink md:pt-32">
      <section className="mx-auto max-w-7xl px-5 pb-12 md:px-8 lg:px-10">
        <div className="mb-8 flex flex-wrap items-center gap-2 text-xs uppercase tracking-product text-velmora-mute">
          <Link to="/shop" className="transition hover:text-velmora-ink">
            Shop
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span>{product.category}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="grid gap-4 md:grid-cols-[88px_1fr]">
            <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col">
              {product.gallery.map((image, index) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className={`overflow-hidden rounded-[1.25rem] border transition ${
                    selectedImage === index
                      ? 'border-velmora-gold shadow-[0_12px_30px_rgba(184,146,89,0.22)]'
                      : 'border-velmora-line bg-white'
                  }`}
                >
                  <StockImage
                    alt={`${product.name} thumbnail ${index + 1}`}
                    imgId={`${image.imgId}-thumb`}
                    query={`[${summaryId}] [${titleId}] [${categoryId}] detail image`}
                    ratio="1x1"
                    width="220"
                    className="h-24 w-20 object-cover md:h-28 md:w-full"
                    imgRef={(element) => {
                      thumbnailRefs.current[index] = element
                    }}
                  />
                </button>
              ))}
            </div>

            <div className="order-1 overflow-hidden rounded-[2rem] bg-velmora-sand md:order-2">
              {resolvedHeroSrc ? (
                <img
                  ref={heroImageRef}
                  alt={product.name}
                  src={resolvedHeroSrc}
                  className="aspect-[3/4] h-full w-full object-cover"
                />
              ) : (
                <StockImage
                  alt={product.name}
                  imgId={`${activeImage.imgId}-active`}
                  query={`[${summaryId}] [${titleId}] [${categoryId}]`}
                  ratio="3x4"
                  width="1200"
                  className="aspect-[3/4] h-full w-full object-cover"
                  imgRef={heroImageRef}
                />
              )}
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <p id={categoryId} className="text-xs uppercase tracking-eyebrow text-velmora-gold-deep">
                {product.category}
              </p>
              <h1
                id={titleId}
                className="font-display text-5xl uppercase leading-none tracking-product text-velmora-ink md:text-6xl"
              >
                {product.name}
              </h1>
              <div className="flex flex-wrap items-center gap-4">
                <p className="text-2xl tracking-[0.12em] text-velmora-ink">${product.price}</p>
                <Stars rating={product.rating} reviewCount={product.reviewCount} />
              </div>
              <p id={summaryId} className="max-w-xl text-base leading-8 text-velmora-mute">
                {product.description}
              </p>
            </div>

            <div className="space-y-5 rounded-[2rem] border border-velmora-line/70 bg-white p-6 shadow-[0_18px_50px_rgba(36,27,24,0.06)]">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-eyebrow text-velmora-ink">Tone</p>
                <div className="flex flex-wrap gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      type="button"
                      onClick={() => setSelectedVariant(variant)}
                      className={`rounded-full border px-5 py-3 text-xs uppercase tracking-product transition ${
                        selectedVariant === variant
                          ? 'border-velmora-gold bg-velmora-gold text-velmora-ink'
                          : 'border-velmora-line bg-velmora-sand text-velmora-ink hover:border-velmora-gold'
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs uppercase tracking-eyebrow text-velmora-ink">Quantity</p>
                <QuantitySelector value={quantity} onChange={setQuantity} />
              </div>

              <button
                type="button"
                onClick={() => onAddToCart(product, quantity, selectedVariant, heroImageRef.current?.currentSrc || heroImageRef.current?.src || '')}
                className="w-full rounded-full border border-velmora-gold bg-velmora-gold px-6 py-4 text-xs uppercase tracking-product text-velmora-ink transition hover:border-velmora-gold-deep hover:bg-velmora-gold-deep hover:text-velmora-cream"
              >
                Add to Cart
              </button>
            </div>

            <div className="rounded-[2rem] border border-velmora-line/70 bg-white px-6 shadow-[0_18px_50px_rgba(36,27,24,0.06)]">
              {Object.entries(accordionContent).map(([title, content]) => (
                <AccordionItem
                  key={title}
                  title={title}
                  content={content}
                  isOpen={openPanel === title}
                  onToggle={() =>
                    setOpenPanel((current) => (current === title ? '' : title))
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-velmora-line/70 bg-velmora-sand py-16 md:py-20">
        <div className="mx-auto max-w-7xl space-y-8 px-5 md:px-8 lg:px-10">
          <SectionHeading
            eyebrow="You may also like"
            title="More pieces in the same polished mood"
            description="Complementary styles selected to layer, gift, or build into a complete look."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard
                key={relatedProduct.id}
                product={relatedProduct}
                onAddToCart={(item, quantity = 1, variant = item.variants[0], imageSrc = '') =>
                  onAddToCart(item, quantity, variant, imageSrc)
                }
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProductPage
