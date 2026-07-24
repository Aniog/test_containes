import React from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Minus, Plus } from 'lucide-react'
import RatingStars from '@/components/layout/RatingStars'
import ProductAccordion from '@/components/product/ProductAccordion'
import ProductVisual from '@/components/product/ProductVisual'
import ProductGrid from '@/components/shop/ProductGrid'
import { getProductById, relatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

export default function ProductPage() {
  const { productId } = useParams()
  const product = getProductById(productId)
  const { addItem } = useCart()
  const [selectedTone, setSelectedTone] = React.useState(product?.tones?.[0] || 'Gold')
  const [quantity, setQuantity] = React.useState(1)
  const [activeImage, setActiveImage] = React.useState(0)
  const [openSection, setOpenSection] = React.useState('description')

  React.useEffect(() => {
    if (product) {
      setSelectedTone(product.tones[0])
      setQuantity(1)
      setActiveImage(0)
    }
  }, [productId, product])

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const gallery = [
    {
      id: `${product.id}-gallery-main`,
      label: 'Front view',
      view: 'main',
    },
    {
      id: `${product.id}-gallery-alt`,
      label: 'Alternate view',
      view: 'alternate',
    },
    {
      id: `${product.id}-gallery-life`,
      label: 'Styled on model',
      view: 'lifestyle',
    },
  ]

  const sections = [
    { id: 'description', label: 'Description', content: product.details },
    { id: 'materials', label: 'Materials & Care', content: `${product.material}. ${product.care}` },
    { id: 'shipping', label: 'Shipping & Returns', content: product.shipping },
  ]

  return (
    <div className="bg-ivory text-ink">
      <section className="px-5 py-8 md:px-8 md:py-12 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <Link to="/shop" className="text-[11px] uppercase tracking-[0.28em] text-ink/55 transition hover:text-gold">
            Shop / {product.category}
          </Link>

          <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div className="grid gap-4 md:grid-cols-[110px_1fr]">
              <div className="order-2 flex gap-3 md:order-1 md:flex-col">
                {gallery.map((image, index) => (
                  <button
                    key={image.id}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    aria-label={image.label}
                    className={`overflow-hidden rounded-[1.2rem] border ${
                      activeImage === index ? 'border-gold' : 'border-line'
                    } bg-white p-0`}
                  >
                    <div className="aspect-square w-[88px] md:w-full">
                      <ProductVisual
                        product={product}
                        view={image.view}
                        ariaLabel={image.label}
                        className="h-full w-full"
                      />
                    </div>
                  </button>
                ))}
              </div>

              <div className="order-1 overflow-hidden rounded-[2rem] border border-line bg-white p-3 shadow-[0_20px_50px_rgba(18,13,11,0.1)] md:order-2">
                <ProductVisual
                  product={product}
                  view={gallery[activeImage].view}
                  ariaLabel={product.shortName}
                  className="aspect-[4/5] w-full rounded-[1.6rem]"
                />
              </div>
            </div>

            <div className="rounded-[2rem] border border-line bg-white p-6 shadow-[0_20px_50px_rgba(18,13,11,0.08)] md:p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Velmora Signature</p>
              <h1 id={product.titleId} className="mt-3 font-display text-4xl uppercase tracking-[0.18em] text-ink md:text-5xl">
                {product.name}
              </h1>
              <div className="mt-4">
                <RatingStars rating={product.rating} reviews={product.reviews} />
              </div>
              <p className="mt-5 text-2xl uppercase tracking-[0.12em] text-ink">{currency.format(product.price)}</p>
              <p id={product.descId} className="mt-5 text-base leading-8 text-ink/68">
                {product.description}
              </p>

              <div className="mt-8">
                <p className="text-xs uppercase tracking-[0.28em] text-ink">Tone</p>
                <div className="mt-3 flex flex-wrap gap-3">
                  {product.tones.map((tone) => (
                    <button
                      key={tone}
                      type="button"
                      onClick={() => setSelectedTone(tone)}
                      className={`rounded-full border px-5 py-3 text-xs uppercase tracking-[0.26em] transition ${
                        selectedTone === tone
                          ? 'border-gold bg-gold text-noir'
                          : 'border-line bg-ivory text-ink hover:border-gold'
                      }`}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="inline-flex items-center rounded-full border border-line bg-ivory p-1">
                  <button
                    type="button"
                    onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-transparent p-0 text-ink hover:bg-stone"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="min-w-10 text-center text-sm text-ink">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((current) => current + 1)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-transparent p-0 text-ink hover:bg-stone"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={() => addItem(product, quantity, selectedTone)}
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-noir px-6 py-4 text-xs uppercase tracking-[0.28em] text-cream transition hover:bg-gold hover:text-noir"
              >
                Add to Cart
              </button>

              <div className="mt-10">
                <ProductAccordion
                  sections={sections}
                  openSection={openSection}
                  setOpenSection={setOpenSection}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line px-5 py-16 md:px-8 md:py-20 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">A refined pairing</p>
            <h2 id="related-title" className="mt-3 font-display text-4xl text-ink md:text-5xl">
              You may also like
            </h2>
          </div>
          <ProductGrid products={relatedProducts(product.id)} context="related-grid" sectionTitleId="related-title" />
        </div>
      </section>
    </div>
  )
}
