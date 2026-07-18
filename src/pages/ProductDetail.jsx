import { useEffect, useMemo, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { getProductById, getRelatedProducts } from '@/data/products.js'
import { useCart } from '@/context/CartContext.jsx'
import { formatPrice } from '@/lib/utils.js'
import Stars from '@/components/common/Stars.jsx'
import QuantitySelector from '@/components/common/QuantitySelector.jsx'
import ProductGrid from '@/components/product/ProductGrid.jsx'

function AccordionItem({ title, content, isOpen, onClick }) {
  return (
    <div className="border-b border-[var(--color-line-dark)] py-5">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 text-left"
        onClick={onClick}
      >
        <span className="text-sm uppercase tracking-[0.28em] text-[var(--color-text-dark)]">{title}</span>
        <ChevronDown
          className={`h-4 w-4 text-[var(--color-muted-dark)] transition ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen ? <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--color-muted-dark)]">{content}</p> : null}
    </div>
  )
}

export default function ProductDetail() {
  const { productId } = useParams()
  const containerRef = useRef(null)
  const product = getProductById(productId)
  const { addItem } = useCart()
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] || 'Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState('Description')

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [productId, selectedImage])

  useEffect(() => {
    if (!product) {
      return
    }
    setSelectedVariant(product.variants[0])
    setQuantity(1)
    setSelectedImage(0)
  }, [product])

  const relatedProducts = useMemo(
    () => getRelatedProducts(product?.relatedIds || []),
    [product],
  )

  if (!product) {
    return (
      <div className="px-5 pb-16 pt-32 md:px-8">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-[var(--color-line-dark)] bg-[rgba(245,237,230,0.04)] p-8 text-center text-[var(--color-text-dark)]">
          <p className="font-serif text-4xl">This piece is unavailable</p>
          <p className="mt-4 text-sm leading-7 text-[var(--color-muted-dark)]">
            Explore the full collection to discover other quietly luminous favorites.
          </p>
          <Link
            to="/shop"
            className="mt-6 inline-flex rounded-full bg-[var(--color-accent)] px-6 py-3 text-xs uppercase tracking-[0.28em] text-[var(--color-bg)]"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const currentImage = product.gallery[selectedImage]

  return (
    <div ref={containerRef} className="px-5 pb-16 pt-32 md:px-8 md:pb-24">
      <div className="mx-auto max-w-7xl space-y-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <div className="overflow-hidden rounded-[2rem] border border-[var(--color-line-dark)] bg-[var(--color-surface)]">
              <img
                alt={currentImage.alt}
                className="aspect-[4/5] h-full w-full object-cover"
                data-strk-img-id={`pdp-${product.id}-${currentImage.id}`}
                data-strk-img={`[${currentImage.descId}] [${currentImage.titleId}] [pdp-${product.id}-title]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {product.gallery.map((image, index) => (
                <button
                  key={image.id}
                  type="button"
                  className={`overflow-hidden rounded-[1.5rem] border ${
                    selectedImage === index
                      ? 'border-[var(--color-accent)]'
                      : 'border-[var(--color-line-dark)]'
                  } bg-[var(--color-surface)]`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    alt={image.alt}
                    className="aspect-[4/5] h-full w-full object-cover"
                    data-strk-img-id={`pdp-thumb-${product.id}-${image.id}`}
                    data-strk-img={`[${image.descId}] [${image.titleId}] [pdp-${product.id}-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </button>
              ))}
            </div>
            <div className="hidden">
              {product.gallery.map((image) => (
                <div key={image.id}>
                  <p id={image.titleId}>{product.name}</p>
                  <p id={image.descId}>{image.alt}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8 text-[var(--color-text-dark)] lg:pl-8">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-muted-dark)]">
                {product.category}
              </p>
              <h1 id={`pdp-${product.id}-title`} className="font-serif text-4xl uppercase tracking-[0.28em] md:text-5xl">
                {product.name}
              </h1>
              <div className="flex items-center gap-3">
                <Stars />
                <span className="text-sm text-[var(--color-muted-dark)]">
                  {product.rating} · {product.reviews} reviews
                </span>
              </div>
              <p className="font-serif text-3xl text-[var(--color-text-dark)]">{formatPrice(product.price)}</p>
              <p className="max-w-xl text-base leading-8 text-[var(--color-muted-dark)]">{product.description}</p>
            </div>

            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-muted-dark)]">Finish</p>
              <div className="flex flex-wrap gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    type="button"
                    className={`rounded-full border px-5 py-3 text-xs uppercase tracking-[0.22em] transition ${
                      selectedVariant === variant
                        ? 'border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-bg)]'
                        : 'border-[var(--color-line-dark)] text-[var(--color-text-dark)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'
                    }`}
                    onClick={() => setSelectedVariant(variant)}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-muted-dark)]">Quantity</p>
              <QuantitySelector value={quantity} onChange={setQuantity} />
            </div>

            <button
              type="button"
              className="w-full rounded-full bg-[var(--color-accent)] px-6 py-4 text-xs uppercase tracking-[0.28em] text-[var(--color-bg)] transition hover:opacity-90"
              onClick={() => addItem(product, quantity, selectedVariant)}
            >
              Add to Cart
            </button>

            <div className="border-t border-[var(--color-line-dark)]">
              {[
                { title: 'Description', content: product.details },
                { title: 'Materials & Care', content: `${product.material}. ${product.care}` },
                { title: 'Shipping & Returns', content: product.shipping },
              ].map((section) => (
                <AccordionItem
                  key={section.title}
                  title={section.title}
                  content={section.content}
                  isOpen={openAccordion === section.title}
                  onClick={() =>
                    setOpenAccordion((current) =>
                      current === section.title ? '' : section.title,
                    )
                  }
                />
              ))}
            </div>
          </div>
        </div>

        <section className="space-y-8">
          <div className="space-y-3 text-[var(--color-text-dark)]">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-muted-dark)]">
              You may also like
            </p>
            <h2 className="font-serif text-4xl leading-none md:text-5xl">
              More to layer, gift, and keep
            </h2>
          </div>
          <ProductGrid items={relatedProducts} />
        </section>
      </div>
    </div>
  )
}
