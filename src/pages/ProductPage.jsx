import { Minus, Plus } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductCard from '../components/product/ProductCard'
import AccordionItem from '../components/ui/AccordionItem'
import StarRating from '../components/ui/StarRating'
import { getProductById, getRelatedProducts } from '../data/products'

const ProductPage = ({ onAddToCart }) => {
  const { productId } = useParams()
  const product = getProductById(productId)
  const [selectedVariant, setSelectedVariant] = useState(product?.metalOptions?.[0] ?? 'Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const [openSection, setOpenSection] = useState('description')

  const galleryImages = useMemo(() => {
    if (!product) {
      return []
    }

    return [
      {
        id: `${product.id}-gallery-1`,
        imgId: `${product.id}-gallery-main`,
        query: `[${product.titleId}] [${product.descId}] premium gold jewelry editorial product image`,
      },
      {
        id: `${product.id}-gallery-2`,
        imgId: `${product.id}-gallery-side`,
        query: `[${product.titleId}] [${product.descId}] jewelry flat lay on warm neutral background`,
      },
      {
        id: `${product.id}-gallery-3`,
        imgId: `${product.id}-gallery-detail`,
        query: `[${product.titleId}] [${product.descId}] close-up jewelry detail macro gold texture`,
      },
      {
        id: `${product.id}-gallery-4`,
        imgId: `${product.id}-gallery-model`,
        query: `[${product.titleId}] [${product.descId}] jewelry worn on model editorial portrait`,
      },
    ]
  }, [product])

  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    setSelectedVariant(product?.metalOptions?.[0] ?? 'Gold Tone')
    setQuantity(1)
    setOpenSection('description')
    setActiveImage(0)
  }, [productId, product])

  if (!product) {
    return (
      <div className="bg-[var(--color-surface)] px-5 pb-20 pt-32 text-[var(--color-foreground)] sm:px-8 lg:px-12">
        <div className="mx-auto flex min-h-[60vh] max-w-[50rem] flex-col items-center justify-center gap-5 rounded-[2rem] border border-[color:var(--color-border)] bg-[var(--color-surface-subtle)] p-10 text-center">
          <p className="eyebrow">Product unavailable</p>
          <h1 className="font-display text-5xl">This piece is no longer in the current edit</h1>
          <Link to="/shop" className="btn-primary justify-center">
            Return to shop
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = getRelatedProducts(product.id)

  return (
    <div className="bg-[var(--color-surface)] pt-28 text-[var(--color-foreground)] sm:pt-32">
      <section className="section-shell grid gap-10 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-16">
        <div className="space-y-5">
          <div className="overflow-hidden rounded-[2.2rem] border border-[color:var(--color-border)] bg-[var(--color-surface-strong)] shadow-[0_18px_44px_rgba(18,12,10,0.08)]">
            <img
              alt={product.name}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              data-strk-img-id={galleryImages[activeImage].imgId}
              data-strk-img={galleryImages[activeImage].query}
              data-strk-img-ratio="4x5"
              data-strk-img-width="1200"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {galleryImages.map((image, index) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setActiveImage(index)}
                className={`overflow-hidden rounded-[1.35rem] border bg-[var(--color-surface-strong)] transition ${
                  activeImage === index
                    ? 'border-[var(--color-accent)] shadow-[0_10px_24px_rgba(201,162,92,0.18)]'
                    : 'border-[color:var(--color-border)]'
                }`}
              >
                <img
                  alt={`${product.name} thumbnail ${index + 1}`}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  data-strk-img-id={`${image.imgId}-thumb`}
                  data-strk-img={image.query}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="320"
                  className="aspect-square w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="lg:pt-8">
          <p className="eyebrow">{product.category}</p>
          <h1 id={product.titleId} className="mt-4 font-display text-4xl uppercase tracking-[0.28em] sm:text-5xl">
            {product.displayName}
          </h1>
          <div className="mt-5 flex items-center justify-between gap-4 border-b border-[color:var(--color-border)] pb-6">
            <StarRating rating={product.rating} reviews={product.reviews} />
            <p className="text-3xl text-[var(--color-foreground)]">${product.price}</p>
          </div>

          <p id={product.descId} className="mt-6 max-w-xl text-base leading-8 text-[var(--color-muted)]">
            {product.description}
          </p>

          <div className="mt-8 space-y-8">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">Tone</p>
              <div className="flex flex-wrap gap-3">
                {product.metalOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setSelectedVariant(option)}
                    className={`rounded-full border px-5 py-3 text-sm uppercase tracking-[0.2em] transition ${
                      selectedVariant === option
                        ? 'border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-accent-foreground)]'
                        : 'border-[color:var(--color-border)] bg-[var(--color-surface)] text-[var(--color-foreground)] hover:border-[var(--color-accent)]'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">Quantity</p>
              <div className="inline-flex items-center rounded-full border border-[color:var(--color-border)] bg-[var(--color-surface-subtle)] p-1">
                <button
                  type="button"
                  onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                  className="rounded-full p-3 text-[var(--color-foreground)] transition hover:bg-[var(--color-surface)]"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-12 px-3 text-center text-sm text-[var(--color-foreground)]">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((current) => current + 1)}
                  className="rounded-full p-3 text-[var(--color-foreground)] transition hover:bg-[var(--color-surface)]"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button
              type="button"
              className="btn-primary w-full justify-center"
              onClick={() => onAddToCart(product, { quantity, variant: selectedVariant })}
            >
              Add to Cart
            </button>
          </div>

          <div className="mt-10 border-t border-[color:var(--color-border)]">
            <AccordionItem
              title="Description"
              isOpen={openSection === 'description'}
              onToggle={() => setOpenSection(openSection === 'description' ? '' : 'description')}
            >
              {product.description}
            </AccordionItem>
            <AccordionItem
              title="Materials & Care"
              isOpen={openSection === 'materials'}
              onToggle={() => setOpenSection(openSection === 'materials' ? '' : 'materials')}
            >
              {product.material}. {product.care}
            </AccordionItem>
            <AccordionItem
              title="Shipping & Returns"
              isOpen={openSection === 'shipping'}
              onToggle={() => setOpenSection(openSection === 'shipping' ? '' : 'shipping')}
            >
              {product.shipping}
            </AccordionItem>
          </div>
        </div>
      </section>

      <section className="section-space border-t border-[color:var(--color-border)] bg-[var(--color-surface-subtle)]">
        <div className="section-shell space-y-10">
          <div className="space-y-3">
            <p className="eyebrow">Complete the look</p>
            <h2 className="font-display text-4xl sm:text-5xl">You may also like</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductPage
