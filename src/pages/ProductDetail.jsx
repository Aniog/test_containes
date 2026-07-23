import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import AccordionItem from '@/components/storefront/AccordionItem.jsx'
import ProductCard from '@/components/storefront/ProductCard.jsx'
import QuantitySelector from '@/components/storefront/QuantitySelector.jsx'
import ReviewStars from '@/components/storefront/ReviewStars.jsx'
import { useCart } from '@/contexts/CartContext.jsx'
import { products } from '@/data/storefront.js'
import { formatCurrency } from '@/lib/format.js'

const accordionLabels = [
  { key: 'description', label: 'Description' },
  { key: 'care', label: 'Materials & Care' },
  { key: 'shipping', label: 'Shipping & Returns' },
]

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug)
  const { addItem } = useCart()
  const [selectedTone, setSelectedTone] = useState(product?.tones[0] || 'Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState('description')

  const gallery = useMemo(() => {
    if (!product) {
      return []
    }

    return [
      { id: product.imageIds.galleryOne, mood: product.moods[0], title: 'Primary view' },
      { id: product.imageIds.galleryTwo, mood: product.moods[1], title: 'Styled view' },
      { id: product.imageIds.galleryThree, mood: product.moods[2], title: 'Detail view' },
      { id: product.imageIds.galleryFour, mood: product.moods[3], title: 'Packaging view' },
    ]
  }, [product])

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const relatedProducts = products.filter((item) => item.id !== product.id).slice(0, 3)
  const titleId = `${product.slug}-product-title`
  const descId = `${product.slug}-product-desc`

  return (
    <section className="bg-[var(--velmora-ivory)] px-5 pb-16 pt-28 md:px-8 md:pb-24 md:pt-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-stone-500">
          <Link to="/shop" className="transition hover:text-[var(--velmora-gold)]">Shop</Link>
          <span>/</span>
          <span>{product.category}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-4 md:grid-cols-[100px_1fr]">
            <div className="hide-scrollbar flex gap-3 overflow-x-auto md:flex-col md:overflow-visible">
              {gallery.map((image, index) => (
                <button
                  key={image.id}
                  type="button"
                  className={`overflow-hidden rounded-[1.2rem] border ${activeImage === index ? 'border-[var(--velmora-gold)]' : 'border-stone-200'} bg-white`}
                  onClick={() => setActiveImage(index)}
                >
                  <img
                    alt={`${product.name} ${image.title}`}
                    className="h-24 w-20 object-cover md:h-28 md:w-full"
                    data-strk-img-id={image.id}
                    data-strk-img={`[${descId}] [${titleId}]`}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </button>
              ))}
            </div>

            <div className="overflow-hidden rounded-[2rem] bg-stone-100 shadow-velmora">
              <img
                alt={product.name}
                className="aspect-[4/5] h-full w-full object-cover"
                data-strk-img-id={`${gallery[activeImage].id}-main`}
                data-strk-img={`[${descId}] [${titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>

          <div className="space-y-6 lg:pt-4">
            <div className="space-y-4 border-b border-stone-200 pb-6">
              <p className="text-xs uppercase tracking-[0.24em] text-stone-500">{product.category}</p>
              <h1 id={titleId} className="text-4xl uppercase tracking-[0.28em] text-[var(--velmora-ink)] md:text-5xl">
                {product.name}
              </h1>
              <p className="text-2xl text-[var(--velmora-ink)]">{formatCurrency(product.price)}</p>
              <ReviewStars rating={product.rating} reviews={product.reviews} />
              <p id={descId} className="max-w-xl text-base leading-8 text-stone-600">
                {product.description}
              </p>
            </div>

            <div className="space-y-5">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.22em] text-stone-500">Tone</p>
                <div className="flex flex-wrap gap-3">
                  {product.tones.map((tone) => (
                    <button
                      key={tone}
                      type="button"
                      className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${selectedTone === tone ? 'border-[var(--velmora-ink)] bg-[var(--velmora-ink)] text-white' : 'border-stone-300 bg-white text-[var(--velmora-ink)] hover:border-[var(--velmora-gold)]'}`}
                      onClick={() => setSelectedTone(tone)}
                    >
                      {tone}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.22em] text-stone-500">Quantity</p>
                <QuantitySelector value={quantity} onChange={setQuantity} />
              </div>

              <button
                type="button"
                className="w-full rounded-full bg-[var(--velmora-gold)] px-6 py-4 text-xs uppercase tracking-[0.26em] text-[var(--velmora-ink)] transition hover:bg-[#c79d61]"
                onClick={() => addItem(product, selectedTone, quantity)}
              >
                Add to Cart
              </button>
            </div>

            <div className="rounded-[1.8rem] border border-stone-200 bg-[var(--velmora-cream)] px-6 py-3 shadow-soft">
              {accordionLabels.map((section) => (
                <AccordionItem
                  key={section.key}
                  content={product[section.key]}
                  open={openAccordion === section.key}
                  title={section.label}
                  onToggle={() => setOpenAccordion(openAccordion === section.key ? '' : section.key)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 space-y-8 border-t border-stone-200 pt-12 md:mt-24 md:pt-16">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-stone-500">You may also like</p>
              <h2 className="mt-2 text-4xl text-[var(--velmora-ink)]">More from Velmora</h2>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} sectionTitleId="related-products-title" />
            ))}
          </div>
          <span id="related-products-title" className="sr-only">Related Velmora products</span>
        </div>
      </div>
    </section>
  )
}
