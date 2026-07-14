import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Minus, Plus, Star } from 'lucide-react'
import ProductCard from '@/components/store/ProductCard'
import { getProductById, getRelatedProducts } from '@/data/store'

function Accordion({ title, isOpen, onToggle, children }) {
  return (
    <div className="border-b border-velmora-line py-5">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="text-xs uppercase tracking-[0.34em] text-velmora-espresso">{title}</span>
        <span className="text-xl text-velmora-mocha">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && <div className="pt-4 text-sm leading-7 text-velmora-mocha">{children}</div>}
    </div>
  )
}

function ProductPage({ onAddToCart }) {
  const { productId } = useParams()
  const product = getProductById(productId)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(product?.variants?.[0] ?? 'Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const [openSection, setOpenSection] = useState('Description')

  const relatedProducts = useMemo(() => (product ? getRelatedProducts(product) : []), [product])

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-velmora-ivory px-5 text-center text-velmora-espresso">
        <div>
          <p className="font-display text-4xl">Product not found</p>
          <Link to="/shop" className="mt-6 inline-block rounded-full bg-velmora-espresso px-6 py-3 text-sm uppercase tracking-[0.24em] text-velmora-ivory">
            Return to shop
          </Link>
        </div>
      </div>
    )
  }

  const handleAdd = () => {
    onAddToCart(product, selectedVariant, quantity)
  }

  return (
    <div className="bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="mx-auto max-w-7xl px-5 pb-12 pt-8 sm:px-6 lg:px-8">
        <div className="mb-8 text-xs uppercase tracking-[0.28em] text-velmora-mocha">
          <Link to="/shop" className="transition hover:text-velmora-gold">
            Shop
          </Link>
          <span className="mx-2">/</span>
          <span>{product.category}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-[32px] border border-velmora-line bg-white shadow-velmora-card">
              <div className="relative aspect-[4/5] bg-velmora-latte">
                <img
                  alt={product.name}
                  data-strk-img-id={product.gallery[activeImageIndex].id}
                  data-strk-img={product.gallery[activeImageIndex].queryIds.map((id) => `[${id}]`).join(' ')}
                  data-strk-img-ratio={product.gallery[activeImageIndex].ratio}
                  data-strk-img-width={product.gallery[activeImageIndex].width}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {product.gallery.map((image, index) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                  className={`overflow-hidden rounded-[22px] border bg-white ${activeImageIndex === index ? 'border-velmora-gold' : 'border-velmora-line'}`}
                >
                  <div className="relative aspect-[4/5] bg-velmora-latte">
                    <img
                      alt={`${product.name} thumbnail ${index + 1}`}
                      data-strk-img-id={`${image.id}-thumb`}
                      data-strk-img={image.queryIds.map((id) => `[${id}]`).join(' ')}
                      data-strk-img-ratio={image.ratio}
                      data-strk-img-width="320"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-32">
            <p className="text-xs uppercase tracking-[0.34em] text-velmora-mocha">Velmora Signature</p>
            <h1 id={product.titleId} className="mt-4 font-display text-4xl uppercase tracking-[0.24em] sm:text-5xl">
              {product.name}
            </h1>
            <p id={product.descId} className="sr-only">
              {product.shortDescription}
            </p>
            <div className="mt-5 flex items-center gap-4">
              <p className="text-2xl font-semibold text-velmora-espresso">${product.price}</p>
              <div className="flex items-center gap-2 text-sm text-velmora-mocha">
                <div className="flex gap-1 text-velmora-gold">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span>{product.rating} · {product.reviews} reviews</span>
              </div>
            </div>
            <p className="mt-6 max-w-xl text-base leading-8 text-velmora-mocha">{product.shortDescription}</p>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.32em] text-velmora-mocha">Tone</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant}
                    type="button"
                    onClick={() => setSelectedVariant(variant)}
                    className={`rounded-full border px-5 py-3 text-sm uppercase tracking-[0.22em] transition ${selectedVariant === variant ? 'border-velmora-gold bg-velmora-gold text-velmora-ink' : 'border-velmora-line bg-white text-velmora-espresso hover:border-velmora-gold'}`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.32em] text-velmora-mocha">Quantity</p>
              <div className="mt-4 flex items-center justify-between rounded-full border border-velmora-line bg-white px-4 py-3">
                <button
                  type="button"
                  onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                  className="rounded-full p-1 text-velmora-mocha transition hover:text-velmora-espresso"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="text-sm font-medium text-velmora-espresso">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((current) => current + 1)}
                  className="rounded-full p-1 text-velmora-mocha transition hover:text-velmora-espresso"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={handleAdd}
              className="mt-8 w-full rounded-full bg-velmora-espresso px-7 py-4 text-sm font-medium uppercase tracking-[0.28em] text-velmora-ivory transition hover:bg-velmora-gold hover:text-velmora-ink"
            >
              Add to Cart
            </button>

            <div className="mt-10 rounded-[28px] border border-velmora-line bg-white/70 px-6 py-2 shadow-sm">
              <Accordion
                title="Description"
                isOpen={openSection === 'Description'}
                onToggle={() => setOpenSection((current) => (current === 'Description' ? '' : 'Description'))}
              >
                {product.description}
              </Accordion>
              <Accordion
                title="Materials & Care"
                isOpen={openSection === 'Materials & Care'}
                onToggle={() => setOpenSection((current) => (current === 'Materials & Care' ? '' : 'Materials & Care'))}
              >
                {product.materialsCare}
              </Accordion>
              <Accordion
                title="Shipping & Returns"
                isOpen={openSection === 'Shipping & Returns'}
                onToggle={() => setOpenSection((current) => (current === 'Shipping & Returns' ? '' : 'Shipping & Returns'))}
              >
                {product.shippingReturns}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-velmora-line bg-white/60 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-velmora-mocha">Continue browsing</p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl">You may also like</h2>
            </div>
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
