import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Minus, Plus } from 'lucide-react'
import { getProductBySlug, getRelatedProducts } from '@/data/products'
import { formatPrice } from '@/lib/format'
import { getProductImageSet, getProductImageUrl } from '@/lib/stockImageConfig'
import { useStore } from '@/components/storefront/StoreProvider'
import RatingStars from '@/components/storefront/RatingStars'
import ProductCard from '@/components/storefront/ProductCard'
import AccordionItem from '@/components/product/AccordionItem'
import NotFoundPage from './NotFoundPage'

const ProductPage = () => {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const { addItem } = useStore()
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [openAccordion, setOpenAccordion] = useState('Description')

  const relatedProducts = useMemo(() => getRelatedProducts(slug), [slug])
  const productImages = useMemo(() => getProductImageSet(slug), [slug])

  if (!product) {
    return <NotFoundPage />
  }

  const accordionContent = {
    Description: product.description,
    'Materials & Care': (
      <div>
        <ul className="space-y-2">
          {product.materials.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
        <p className="mt-4">{product.care}</p>
      </div>
    ),
    'Shipping & Returns': product.shipping,
  }

  return (
    <div className="section-shell py-12 sm:py-16">
      <div className="mb-8 text-sm text-muted">
        <Link to="/shop" className="transition-colors duration-300 hover:text-gold">
          Shop
        </Link>{' '}
        / <span className="text-ink">{product.name}</span>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.05fr,0.95fr] lg:items-start">
        <div>
          <div className="overflow-hidden rounded-[2rem] border border-line bg-pearl shadow-float">
            <img
              alt={product.name}
              className="aspect-[4/5] w-full object-cover"
              src={getProductImageUrl(product.slug, selectedImageIndex)}
            />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {productImages.map((image, index) => (
              <button
                key={image.key}
                type="button"
                onClick={() => setSelectedImageIndex(index)}
                className={`overflow-hidden rounded-[1.25rem] border bg-pearl ${
                  selectedImageIndex === index ? 'border-gold shadow-float' : 'border-line'
                }`}
              >
                <img
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className="aspect-[4/5] w-full object-cover"
                  src={image.url}
                />
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-line bg-pearl p-6 shadow-float sm:p-8 lg:p-10">
          <p id={`product-${product.slug}-type`} className="text-xs uppercase tracking-micro text-muted">
            {product.type}
          </p>
          <h1 id={`product-${product.slug}-title`} className="mt-4 font-serif text-4xl uppercase tracking-luxe text-ink sm:text-5xl">
            {product.name}
          </h1>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <span className="font-serif text-4xl text-ink">{formatPrice(product.price)}</span>
            <RatingStars rating={product.rating} reviewCount={product.reviewCount} />
          </div>
          <p className="mt-6 text-base leading-8 text-muted">{product.shortDescription}</p>

          <div className="mt-8">
            <p className="text-xs uppercase tracking-caps text-muted">Variant</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {product.variants.map((variant) => (
                <button
                  key={variant}
                  type="button"
                  onClick={() => setSelectedVariant(variant)}
                  className={`rounded-full border px-5 py-3 text-sm uppercase tracking-caps transition-colors duration-300 ${
                    selectedVariant === variant
                      ? 'border-gold bg-gold text-pearl'
                      : 'border-line text-ink hover:border-gold hover:text-gold'
                  }`}
                >
                  {variant}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center rounded-full border border-line bg-canvas px-2 py-1">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors duration-300 hover:text-gold"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-[2.5rem] text-center text-sm text-ink">{quantity}</span>
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() => setQuantity((current) => current + 1)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors duration-300 hover:text-gold"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              type="button"
              onClick={() => addItem(product, selectedVariant, quantity)}
              className="button-primary flex-1"
            >
              Add to Cart
            </button>
          </div>

          <div className="mt-10">
            {Object.entries(accordionContent).map(([title, content]) => (
              <AccordionItem
                key={title}
                title={title}
                content={content}
                isOpen={openAccordion === title}
                onToggle={() => setOpenAccordion((current) => (current === title ? '' : title))}
              />
            ))}
          </div>

        </div>
      </div>

      <section className="mt-16 sm:mt-20">
        <div className="mb-10 max-w-2xl">
          <p className="section-kicker">You may also like</p>
          <h2 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">Continue your stack</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {relatedProducts.map((relatedProduct) => (
            <ProductCard key={relatedProduct.id} product={relatedProduct} scope="related" />
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductPage
