import { useEffect, useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Minus, Plus, Truck } from 'lucide-react'
import AccordionItem from '@/components/storefront/AccordionItem.jsx'
import RelatedProducts from '@/components/storefront/RelatedProducts.jsx'
import StarRating from '@/components/storefront/StarRating.jsx'
import { getProductBySlug } from '@/data/products.js'
import { useCart } from '@/context/CartContext.jsx'
import { formatPrice } from '@/lib/format.js'
import { useStrkImages } from '@/hooks/useStrkImages.js'

const ProductPage = () => {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [openPanel, setOpenPanel] = useState('Description')
  const { addItem } = useCart()
  const containerRef = useStrkImages([slug, activeImage])

  const gallery = useMemo(() => {
    if (!product) return []

    return product.galleryPrompts.map((prompt, index) => ({
      id: `${product.id}-gallery-${index}`,
      titleId: `${product.id}-gallery-title-${index}`,
      descId: `${product.id}-gallery-desc-${index}`,
      prompt,
    }))
  }, [product])

  useEffect(() => {
    if (!product) return

    setSelectedVariant(product.variants[0])
    setQuantity(1)
    setActiveImage(0)
    setOpenPanel('Description')
  }, [product])

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const panels = [
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

  const addCurrentItem = () => {
    addItem(product, selectedVariant, quantity)
  }

  return (
    <>
      <main ref={containerRef} className="bg-ivory px-4 pb-16 pt-28 sm:px-6 md:pb-24 lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.24em] text-ink-soft">
            <Link to="/" className="transition hover:text-gold">Home</Link>
            <span>/</span>
            <Link to="/shop" className="transition hover:text-gold">Shop</Link>
            <span>/</span>
            <span className="text-espresso">{product.name}</span>
          </div>

          <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="grid gap-4 md:grid-cols-[100px_1fr]">
              <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col">
                {gallery.map((image, index) => (
                  <button
                    key={image.id}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    className={`overflow-hidden rounded-[20px] border ${activeImage === index ? 'border-gold' : 'border-champagne/35'} bg-white/80 shadow-soft`}
                  >
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="h-24 w-20 object-cover md:h-28 md:w-full"
                      data-strk-img-id={`${image.id}-thumb`}
                      data-strk-img={`[${image.descId}] [${image.titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="300"
                    />
                  </button>
                ))}
              </div>

              <div className="order-1 overflow-hidden rounded-[32px] border border-champagne/30 bg-white/80 shadow-soft md:order-2">
                {gallery.map((image, index) => (
                  <div key={image.id} className={activeImage === index ? 'block' : 'hidden'}>
                    <img
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={product.name}
                      className="aspect-[4/5] w-full object-cover"
                      data-strk-img-id={`${image.id}-main`}
                      data-strk-img={`[${image.descId}] [${image.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="1400"
                    />
                    <div className="hidden">
                      <h3 id={image.titleId}>{product.name}</h3>
                      <p id={image.descId}>{image.prompt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-champagne/30 bg-white/80 p-6 text-espresso shadow-soft sm:p-8 lg:sticky lg:top-28">
              <p className="text-xs uppercase tracking-[0.32em] text-gold">{product.category}</p>
              <h1 className="mt-3 font-serif text-4xl uppercase tracking-[0.24em] text-espresso md:text-5xl">
                {product.name}
              </h1>
              <p className="mt-4 text-2xl font-medium text-espresso">{formatPrice(product.price)}</p>
              <div className="mt-4">
                <StarRating rating={product.rating} reviews={product.reviews} />
              </div>
              <p className="mt-6 text-sm leading-8 text-ink-soft">{product.shortDescription}</p>

              <div className="mt-8">
                <p className="text-xs uppercase tracking-[0.3em] text-espresso">Tone</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {product.variants.map((variant) => {
                    const selected = selectedVariant === variant
                    return (
                      <button
                        key={variant}
                        type="button"
                        onClick={() => setSelectedVariant(variant)}
                        className={`rounded-full border px-5 py-3 text-xs uppercase tracking-[0.24em] transition ${
                          selected
                            ? 'border-gold bg-gold text-ivory'
                            : 'border-champagne/40 bg-ivory text-espresso hover:border-gold hover:text-gold'
                        }`}
                      >
                        {variant}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="inline-flex items-center rounded-full border border-champagne/40 bg-ivory">
                  <button
                    type="button"
                    onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                    className="p-3 text-espresso transition hover:text-gold"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="min-w-12 text-center text-sm font-medium text-espresso">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((current) => current + 1)}
                    className="p-3 text-espresso transition hover:text-gold"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={addCurrentItem}
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-gold px-6 py-4 text-sm font-medium uppercase tracking-[0.26em] text-ivory transition hover:bg-truffle"
              >
                Add to Cart
              </button>

              <div className="mt-6 flex items-start gap-3 rounded-[24px] border border-champagne/30 bg-ivory p-4 text-sm leading-7 text-ink-soft">
                <Truck className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <p>Ships in 1–2 business days. Free worldwide delivery on orders over $75.</p>
              </div>

              <div className="mt-8 border-t border-champagne/30">
                {panels.map((panel) => (
                  <AccordionItem
                    key={panel.title}
                    title={panel.title}
                    isOpen={openPanel === panel.title}
                    onToggle={() => setOpenPanel((current) => (current === panel.title ? '' : panel.title))}
                  >
                    {panel.content}
                    {panel.title === 'Description' ? (
                      <ul className="mt-4 list-disc space-y-2 pl-5">
                        {product.details.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    ) : null}
                  </AccordionItem>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
      <RelatedProducts slug={slug} />
    </>
  )
}

export default ProductPage
