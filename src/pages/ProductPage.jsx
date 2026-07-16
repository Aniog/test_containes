import { useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Minus, Plus } from 'lucide-react'
import ProductAccordion from '@/components/product/ProductAccordion'
import ProductCard from '@/components/shared/ProductCard'
import RatingStars from '@/components/shared/RatingStars'
import { products, getProductBySlug } from '@/data/products'
import { IMAGE_PLACEHOLDER } from '@/data/site'
import { useCart } from '@/context/CartContext'
import { useImageLoader } from '@/hooks/useImageLoader'
import { formatPrice } from '@/lib/utils'

const variants = ['Gold Tone', 'Silver Tone']

export default function ProductPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const containerRef = useRef(null)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState('Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const [openItem, setOpenItem] = useState('description')
  const { addItem } = useCart()

  useImageLoader(containerRef, [slug, selectedImage])

  const relatedProducts = useMemo(() => products.filter((item) => item.slug !== slug).slice(0, 4), [slug])

  if (!product) {
    return (
      <div className="section-shell flex min-h-screen flex-col items-center justify-center gap-6 text-center">
        <p className="eyebrow">Not found</p>
        <h1 className="font-serif text-5xl text-espresso">This piece has moved on</h1>
        <Link to="/shop" className="rounded-full bg-truffle px-6 py-4 text-sm uppercase tracking-[0.18em] text-pearl">
          Return to shop
        </Link>
      </div>
    )
  }

  const accordionItems = [
    { id: 'description', label: 'Description', content: product.description },
    { id: 'materials', label: 'Materials & Care', content: product.materialsCare },
    { id: 'shipping', label: 'Shipping & Returns', content: product.shippingReturns },
  ]

  return (
    <div ref={containerRef} className="section-shell pt-32 pb-20 sm:pb-24">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="grid gap-4 lg:grid-cols-[96px_1fr]">
            <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col">
              {product.galleryPrompts.map((prompt, index) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className={`overflow-hidden rounded-2xl border ${
                    selectedImage === index ? 'border-gold' : 'border-champagne'
                  }`}
                >
                  <img
                    src={IMAGE_PLACEHOLDER}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="h-24 w-24 object-cover"
                    data-strk-img-id={`pdp-${product.slug}-thumb-${index}`}
                    data-strk-img={`[pdp-${product.slug}-prompt-${index}] [pdp-${product.slug}-title]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="240"
                  />
                </button>
              ))}
            </div>
            <div className="order-1 overflow-hidden rounded-3xl border border-champagne bg-surface shadow-soft lg:order-2">
              <img
                src={IMAGE_PLACEHOLDER}
                alt={product.name}
                className="aspect-product h-full w-full object-cover"
                data-strk-img-id={`pdp-${product.slug}-featured-${selectedImage}`}
                data-strk-img={`[pdp-${product.slug}-prompt-${selectedImage}] [pdp-${product.slug}-title]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1200"
              />
            </div>
          </div>
        </div>

        <div className="space-y-8 lg:col-span-5">
          <div className="space-y-5">
            <p className="eyebrow">{product.category}</p>
            <div className="space-y-3">
              <h1 id={`pdp-${product.slug}-title`} className="font-serif text-4xl uppercase tracking-luxe text-espresso sm:text-5xl">
                {product.name}
              </h1>
              <p className="text-3xl text-espresso">{formatPrice(product.price)}</p>
            </div>
            <RatingStars rating={product.rating} reviews={product.reviews} />
            <p className="text-base leading-8 text-mocha">{product.shortDescription}</p>
          </div>

          <div className="space-y-6 rounded-3xl border border-champagne bg-surface p-6 shadow-card">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.18em] text-mocha">Tone</p>
              <div className="flex flex-wrap gap-3">
                {variants.map((variant) => (
                  <button
                    key={variant}
                    type="button"
                    onClick={() => setSelectedVariant(variant)}
                    className={`rounded-full border px-5 py-3 text-sm transition duration-300 ${
                      selectedVariant === variant
                        ? 'border-gold bg-gold text-pearl'
                        : 'border-champagne bg-pearl text-espresso hover:border-gold'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.18em] text-mocha">Quantity</p>
              <div className="inline-flex items-center rounded-full border border-champagne bg-pearl px-3 py-2">
                <button
                  type="button"
                  onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                  className="p-2 text-espresso"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-12 text-center text-sm text-espresso">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((current) => current + 1)}
                  className="p-2 text-espresso"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => addItem(product, quantity, selectedVariant)}
              className="flex w-full items-center justify-center rounded-full bg-truffle px-6 py-4 text-sm font-medium uppercase tracking-[0.18em] text-pearl transition duration-300 hover:bg-espresso"
            >
              Add to Cart
            </button>
            <p className="text-sm leading-7 text-mocha">
              Free worldwide shipping over $75. Gift-ready presentation included.
            </p>
          </div>

          <ProductAccordion
            items={accordionItems}
            openItem={openItem}
            onToggle={(itemId) => setOpenItem((current) => (current === itemId ? '' : itemId))}
          />
        </div>
      </div>

      <div className="mt-20 space-y-10 sm:mt-24">
        <div className="flex items-end justify-between border-b border-champagne pb-4">
          <div>
            <p className="eyebrow">You may also like</p>
            <h2 className="font-serif text-4xl text-espresso">Continue the collection</h2>
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} scopeId="related-products" />
          ))}
        </div>
      </div>

      {product.galleryPrompts.map((prompt, index) => (
        <span key={prompt} id={`pdp-${product.slug}-prompt-${index}`} className="sr-only">
          {prompt}
        </span>
      ))}
    </div>
  )
}
