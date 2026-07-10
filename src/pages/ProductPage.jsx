import { Heart, Minus, Plus, Truck } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import ProductCard from '@/components/shop/ProductCard.jsx'
import AccordionItem from '@/components/product/AccordionItem.jsx'
import RatingStars from '@/components/shared/RatingStars.jsx'
import QuantitySelector from '@/components/shared/QuantitySelector.jsx'
import {
  formatPrice,
  getProductBySlug,
  getRelatedProducts,
  getStrkImageSrc,
} from '@/data/storefront'
import { useCart } from '@/context/CartContext.jsx'
import useStrkImages from '@/hooks/useStrkImages.jsx'

const accordionItems = [
  { key: 'description', label: 'Description' },
  { key: 'materials', label: 'Materials & Care' },
  { key: 'shipping', label: 'Shipping & Returns' },
]

function ProductPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const [selectedVariant, setSelectedVariant] = useState('Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState('description')
  const { addItem } = useCart()

  const containerRef = useStrkImages([slug, selectedImage])

  const gallery = useMemo(() => {
    if (!product) return []

    return product.galleryNotes.map((note, index) => ({
      id: `${product.slug}-${index}`,
      titleId: `gallery-title-${product.slug}-${index}`,
      descId: `gallery-desc-${product.slug}-${index}`,
      imageId: `gallery-image-${product.slug}-${index}-e${index}`,
      note,
      ratio: index === 1 ? '3x4' : '4x3',
    }))
  }, [product])

  if (!product) {
    return <Navigate replace to="/shop" />
  }

  const relatedProducts = getRelatedProducts(product.slug)
  const currentGalleryItem = gallery[selectedImage]
  const featuredImageId = `featured-${currentGalleryItem.imageId}`
  const currentContent = {
    description: product.description,
    materials: `${product.materials} ${product.care}`,
    shipping: product.shipping,
  }

  return (
    <div ref={containerRef} className="pt-28 sm:pt-32">
      <section className="page-shell py-10 sm:py-14">
        <div className="mb-8 flex items-center gap-2 text-xs uppercase tracking-micro text-muted">
          <Link to="/shop">Shop</Link>
          <span>/</span>
          <span>{product.category}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-[2rem] border border-border bg-surface shadow-soft">
              <img
                alt={`${product.name} featured image`}
                className="aspect-[4/5] w-full object-cover"
                data-strk-img={`[${currentGalleryItem.descId}] [${currentGalleryItem.titleId}]`}
                data-strk-img-id={featuredImageId}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
                src={getStrkImageSrc(featuredImageId)}
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {gallery.map((item, index) => (
                <button
                  key={item.id}
                  className={`overflow-hidden rounded-[1.5rem] border bg-surface text-left transition ${
                    selectedImage === index
                      ? 'border-accent shadow-card'
                      : 'border-border hover:border-accent/50'
                  }`}
                  onClick={() => setSelectedImage(index)}
                  type="button"
                >
                  <img
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="aspect-[4/5] w-full object-cover"
                    data-strk-img={`[${item.descId}] [${item.titleId}] jewelry product close-up`}
                    data-strk-img-id={item.imageId}
                    data-strk-img-ratio={index === 1 ? '3x4' : '4x3'}
                    data-strk-img-width="500"
                    src={getStrkImageSrc(item.imageId)}
                  />
                </button>
              ))}
            </div>

            <div className="hidden">
              {gallery.map((item, index) => (
                <div key={item.id}>
                  <h2 id={item.titleId}>{product.name}</h2>
                  <p id={item.descId}>{item.note}</p>
                  <span>{index}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-border bg-surface p-6 shadow-card sm:p-8 lg:sticky lg:top-32">
            <div className="space-y-6">
              <div className="space-y-3 border-b border-border pb-6">
                <p className="eyebrow">{product.category}</p>
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-3">
                    <h1 className="font-display text-4xl uppercase tracking-product text-ink sm:text-5xl">
                      {product.name}
                    </h1>
                    <p className="text-2xl text-truffle">{formatPrice(product.price)}</p>
                  </div>
                  <button
                    aria-label="Save product"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition hover:text-ink"
                    type="button"
                  >
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
                <RatingStars rating={product.rating} reviews={product.reviews} />
                <p className="text-sm leading-7 text-muted">{product.shortDescription}</p>
              </div>

              <div className="space-y-4 border-b border-border pb-6">
                <p className="text-sm uppercase tracking-micro text-truffle">Tone</p>
                <div className="flex flex-wrap gap-3">
                  {product.variants.map((variant) => (
                    <button
                      key={variant}
                      className={`rounded-full border px-4 py-2.5 text-xs font-medium uppercase tracking-micro transition ${
                        selectedVariant === variant
                          ? 'border-accent bg-accent text-cream'
                          : 'border-border bg-cream text-truffle hover:border-accent/60'
                      }`}
                      onClick={() => setSelectedVariant(variant)}
                      type="button"
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4 border-b border-border pb-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm uppercase tracking-micro text-truffle">Quantity</p>
                  <QuantitySelector
                    onDecrease={() => setQuantity((current) => Math.max(1, current - 1))}
                    onIncrease={() => setQuantity((current) => current + 1)}
                    value={quantity}
                  />
                </div>
                <button
                  className="inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3.5 text-sm font-medium uppercase tracking-micro text-cream transition hover:bg-accent-deep"
                  onClick={() => addItem(product, quantity, selectedVariant)}
                  type="button"
                >
                  Add to Cart
                </button>
              </div>

              <div className="flex items-start gap-3 rounded-[1.5rem] bg-panel/70 p-4 text-sm leading-7 text-truffle">
                <Truck className="mt-1 h-4 w-4 text-accent" />
                <p>
                  Free worldwide shipping on orders over $75 and 30-day returns for unworn pieces.
                </p>
              </div>

              <div>
                {accordionItems.map((item) => (
                  <AccordionItem
                    content={currentContent[item.key]}
                    isOpen={openAccordion === item.key}
                    key={item.key}
                    onToggle={() =>
                      setOpenAccordion((current) =>
                        current === item.key ? '' : item.key,
                      )
                    }
                    title={item.label}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-16 sm:py-20">
        <div className="page-shell space-y-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Related pieces</p>
              <h2 className="font-display text-4xl text-ink sm:text-5xl">
                You may also like
              </h2>
            </div>
            <Link className="accent-link" to="/shop">
              View all
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard
                key={relatedProduct.id}
                imageScope="related-row"
                product={relatedProduct}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductPage
