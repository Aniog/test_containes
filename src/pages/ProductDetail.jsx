import { useRef, useState } from 'react'
import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import { useParams } from 'react-router-dom'
import ProductCard from '@/components/product/ProductCard'
import Button from '@/components/ui/Button'
import { getProductBySlug, products, variants } from '@/data/products'
import { useStrkImages } from '@/lib/useStrkImages'
import { cn } from '@/lib/utils'

const accordions = [
  { id: 'description', title: 'Description' },
  { id: 'materials', title: 'Materials & Care' },
  { id: 'shipping', title: 'Shipping & Returns' },
]

export default function ProductDetail({ onAddToCart }) {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const containerRef = useRef(null)
  const [selectedImage, setSelectedImage] = useState(0)
  const [variant, setVariant] = useState(variants[0])
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('description')
  const [added, setAdded] = useState(false)
  useStrkImages(containerRef, [slug, selectedImage, added])

  const related = products.filter((item) => item.id !== product.id).slice(0, 4)
  const titleId = `detail-${product.slug}-title`
  const descId = `detail-${product.slug}-desc`
  const imageIds = [`detail-main-${product.slug}`, `detail-alt-${product.slug}`, `detail-worn-${product.slug}`]

  const getAccordionCopy = (id) => {
    if (id === 'description') return product.details
    if (id === 'materials') return product.care
    return 'Complimentary worldwide shipping on every order. Returns are accepted within 30 days in original condition with packaging.'
  }

  const handleAdd = () => {
    onAddToCart(product, variant, quantity)
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1600)
  }

  return (
    <main ref={containerRef} className="min-h-screen bg-velmora-cream pt-24 text-velmora-espresso">
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-8 lg:px-10 lg:pb-24">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          <div className="grid gap-4 lg:grid-cols-[88px_1fr]">
            <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
              {imageIds.map((imageId, index) => (
                <button
                  key={imageId}
                  type="button"
                  className={cn(
                    'relative h-[5.5rem] w-[4.5rem] flex-shrink-0 overflow-hidden border bg-velmora-sand transition',
                    selectedImage === index ? 'border-velmora-gold' : 'border-velmora-sand hover:border-velmora-taupe',
                  )}
                  onClick={() => setSelectedImage(index)}
                  aria-label={`View image ${index + 1}`}
                >
                  <span
                    className="block h-full w-full bg-cover bg-center"
                    data-strk-bg-id={`${imageId}-thumb-a1${index}`}
                    data-strk-bg={`[${descId}] [${titleId}]`}
                    data-strk-bg-ratio="3x4"
                    data-strk-bg-width="220"
                    role="img"
                    aria-label={`${product.name} thumbnail ${index + 1}`}
                  />
                </button>
              ))}
            </div>
            <div className="order-1 relative aspect-[4/5] overflow-hidden bg-velmora-sand lg:order-2">
              <div
                className="absolute inset-0 bg-cover bg-center"
                data-strk-bg-id={`${imageIds[selectedImage]}-large-f2d9`}
                data-strk-bg={`[${descId}] [${titleId}]`}
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="1200"
                role="img"
                aria-label={product.name}
              />
            </div>
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-luxury text-velmora-gold">{product.category}</p>
            <h1 id={titleId} className="mt-4 font-serif text-4xl uppercase leading-tight tracking-editorial text-velmora-espresso sm:text-5xl">
              {product.name}
            </h1>
            <div className="mt-5 flex items-center gap-4">
              <p className="text-xl font-semibold text-velmora-espresso">${product.price}</p>
              <div className="h-4 w-px bg-velmora-sand" />
              <div className="flex items-center gap-2 text-sm text-velmora-ink/75">
                <span className="flex gap-0.5 text-velmora-gold" aria-label={`${product.rating} star rating`}>
                  {[...Array(5)].map((_, index) => <Star key={index} className="h-3.5 w-3.5 fill-current" />)}
                </span>
                {product.rating} ({product.reviews})
              </div>
            </div>
            <p id={descId} className="mt-6 border-y border-velmora-sand py-6 text-base leading-8 text-velmora-ink/80">
              {product.description}
            </p>

            <div className="mt-7">
              <p className="mb-3 text-xs font-semibold uppercase tracking-luxury text-velmora-taupe">Tone</p>
              <div className="flex flex-wrap gap-3">
                {variants.map((item) => (
                  <button
                    key={item}
                    type="button"
                    className={cn(
                      'rounded-full border px-5 py-2.5 text-sm font-semibold transition',
                      variant === item
                        ? 'border-velmora-espresso bg-velmora-espresso text-velmora-ivory'
                        : 'border-velmora-sand bg-velmora-ivory text-velmora-espresso hover:border-velmora-gold hover:text-velmora-gold',
                    )}
                    onClick={() => setVariant(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-7">
              <p className="mb-3 text-xs font-semibold uppercase tracking-luxury text-velmora-taupe">Quantity</p>
              <div className="inline-flex items-center rounded-full border border-velmora-sand bg-velmora-ivory text-velmora-espresso">
                <button type="button" className="flex h-11 w-11 items-center justify-center transition hover:text-velmora-gold" aria-label="Decrease quantity" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-9 text-center font-semibold">{quantity}</span>
                <button type="button" className="flex h-11 w-11 items-center justify-center transition hover:text-velmora-gold" aria-label="Increase quantity" onClick={() => setQuantity(quantity + 1)}>
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <Button className="mt-7 w-full" onClick={handleAdd}>{added ? 'Added to Cart' : 'Add to Cart'}</Button>

            <div className="mt-8 border-t border-velmora-sand">
              {accordions.map((accordion) => (
                <div key={accordion.id} className="border-b border-velmora-sand">
                  <button type="button" className="flex w-full items-center justify-between py-5 text-left text-sm font-semibold uppercase tracking-editorial text-velmora-espresso" onClick={() => setOpenAccordion(openAccordion === accordion.id ? '' : accordion.id)}>
                    {accordion.title}
                    <ChevronDown className={cn('h-4 w-4 transition', openAccordion === accordion.id && 'rotate-180')} />
                  </button>
                  {openAccordion === accordion.id && (
                    <p className="pb-5 text-sm leading-7 text-velmora-ink/75">{getAccordionCopy(accordion.id)}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-velmora-sand bg-velmora-ivory py-16 text-velmora-espresso lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-9 flex items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-luxury text-velmora-gold">Complete the ritual</p>
              <h2 id="detail-related-heading" className="mt-3 font-serif text-4xl text-velmora-espresso">You may also like</h2>
            </div>
          </div>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} onAdd={onAddToCart} scope="related" contextId="detail-related-heading" compact />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
