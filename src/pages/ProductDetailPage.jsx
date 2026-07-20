import { ChevronDown, Minus, Plus, ShieldCheck, Truck } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import ProductCard from '@/components/product/ProductCard'
import ProductImage from '@/components/product/ProductImage'
import RatingStars from '@/components/product/RatingStars'
import { getProductById, products } from '@/data/products'
import { useCart } from '@/lib/cart'
import { useStrkImages } from '@/lib/useStrkImages'

const tones = ['Gold tone', 'Silver tone']

function AccordionItem({ title, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-velmora-espresso/10 py-5 text-velmora-espresso">
      <button
        type="button"
        className="flex w-full items-center justify-between bg-transparent p-0 text-left text-sm font-bold uppercase tracking-luxury text-velmora-espresso"
        onClick={() => setOpen((value) => !value)}
      >
        {title}
        <ChevronDown className={`h-4 w-4 transition ${open ? 'rotate-180' : ''}`} />
      </button>
      {open ? <div className="pt-4 text-sm leading-7 text-velmora-mocha">{children}</div> : null}
    </div>
  )
}
export default function ProductDetailPage({ onCartOpen }) {
  const { productId } = useParams()
  const product = getProductById(productId)
  const [selectedImage, setSelectedImage] = useState(0)
  const [variant, setVariant] = useState('Gold tone')
  const [quantity, setQuantity] = useState(1)
  const { addItem, toCurrency } = useCart()
  const containerRef = useStrkImages([productId, selectedImage])

  const related = useMemo(
    () => products.filter((entry) => entry.id !== productId).slice(0, 4),
    [productId],
  )

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const titleId = `detail-${product.id}-title`

  const handleAdd = () => {
    addItem(product, variant, quantity)
    onCartOpen()
  }

  return (
    <main ref={containerRef} className="bg-velmora-pearl pt-24 text-velmora-espresso lg:pt-28">
      <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-6 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-24">
        <div className="grid gap-4 lg:grid-cols-[96px_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
            {product.gallery.map((image, index) => {
              const thumbTitleId = `detail-thumb-${product.id}-${image.id}-title`
              const thumbCaptionId = `detail-thumb-${product.id}-${image.id}-caption`
              return (
                <button
                  key={image.id}
                  type="button"
                  className={`aspect-square w-20 flex-none overflow-hidden border bg-velmora-ivory transition lg:w-full ${selectedImage === index ? 'border-velmora-gold' : 'border-velmora-espresso/10 hover:border-velmora-espresso/35'}`}
                  onClick={() => setSelectedImage(index)}
                  aria-label={`View ${image.caption}`}
                >
                  <span id={thumbTitleId} className="sr-only">{product.name}</span>
                  <ProductImage
                    id={`detail-thumb-${product.id}-${image.id}`}
                    titleId={thumbTitleId}
                    captionId={thumbCaptionId}
                    caption={image.caption}
                    alt={image.caption}
                    ratio="1x1"
                    width="220"
                  />
                </button>
              )
            })}
          </div>

          <div className="order-1 relative aspect-[4/5] overflow-hidden bg-velmora-ivory shadow-soft lg:order-2">
            {product.gallery.map((image, index) => {
              const mainTitleId = `detail-main-${product.id}-${image.id}-title`
              const mainCaptionId = `detail-main-${product.id}-${image.id}-caption`
              return (
                <div
                  key={image.id}
                  className={`absolute inset-0 transition duration-500 ${selectedImage === index ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
                >
                  <span id={mainTitleId} className="sr-only">{product.name}</span>
                  <ProductImage
                    id={`detail-gallery-${product.id}-${image.id}`}
                    titleId={mainTitleId}
                    captionId={mainCaptionId}
                    caption={`${image.caption}. ${product.searchText}`}
                    alt={image.caption}
                    ratio="3x4"
                    width="1100"
                    className="animate-[softReveal_500ms_ease-out_both]"
                  />
                </div>
              )
            })}
          </div>
        </div>

        <aside className="lg:pl-8">
          <p className="text-xs font-bold uppercase tracking-widerLuxury text-velmora-gold">{product.category}</p>
          <h1 id={titleId} className="mt-4 font-serif text-5xl font-medium uppercase leading-none tracking-[0.12em] text-velmora-espresso sm:text-6xl">
            {product.name}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-4 border-b border-velmora-espresso/10 pb-6">
            <p className="font-serif text-3xl text-velmora-espresso">{toCurrency(product.price)}</p>
            <RatingStars rating={product.rating} reviews={product.reviews} />
          </div>
          <p className="mt-6 text-base leading-8 text-velmora-mocha">{product.shortDescription}</p>

          <div className="mt-8">
            <p className="text-xs font-bold uppercase tracking-luxury text-velmora-espresso">Tone</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {tones.map((tone) => (
                <button
                  key={tone}
                  type="button"
                  className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition ${variant === tone ? 'border-velmora-espresso bg-velmora-espresso text-white' : 'border-velmora-espresso/15 bg-transparent text-velmora-espresso hover:border-velmora-gold'}`}
                  onClick={() => setVariant(tone)}
                >
                  {tone}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-7">
            <p className="text-xs font-bold uppercase tracking-luxury text-velmora-espresso">Quantity</p>
            <div className="mt-3 inline-flex items-center rounded-full border border-velmora-espresso/15 text-velmora-espresso">
              <button type="button" className="flex h-11 w-12 items-center justify-center bg-transparent text-velmora-espresso" onClick={() => setQuantity((value) => Math.max(1, value - 1))} aria-label="Decrease quantity">
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-10 text-center text-sm font-bold">{quantity}</span>
              <button type="button" className="flex h-11 w-12 items-center justify-center bg-transparent text-velmora-espresso" onClick={() => setQuantity((value) => value + 1)} aria-label="Increase quantity">
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          <button
            type="button"
            className="mt-8 w-full rounded-full bg-velmora-espresso px-8 py-4 text-sm font-bold uppercase tracking-luxury text-white transition hover:bg-velmora-ink"
            onClick={handleAdd}
          >
            Add to Cart — {toCurrency(product.price * quantity)}
          </button>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="flex items-center gap-3 bg-velmora-ivory p-4 text-sm font-semibold text-velmora-espresso">
              <Truck className="h-5 w-5 text-velmora-gold" /> Free worldwide shipping
            </div>
            <div className="flex items-center gap-3 bg-velmora-ivory p-4 text-sm font-semibold text-velmora-espresso">
              <ShieldCheck className="h-5 w-5 text-velmora-gold" /> Hypoallergenic finish
            </div>
          </div>

          <div className="mt-8 border-t border-velmora-espresso/10">
            <AccordionItem title="Description" defaultOpen>
              {product.description}
            </AccordionItem>
            <AccordionItem title="Materials & Care">
              {product.care}
            </AccordionItem>
            <AccordionItem title="Shipping & Returns">
              {product.shipping}
            </AccordionItem>
          </div>
        </aside>
      </section>

      <section className="border-t border-velmora-espresso/10 bg-velmora-ivory py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between gap-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-widerLuxury text-velmora-gold">Complete the ritual</p>
              <h2 className="mt-3 font-serif text-5xl font-medium text-velmora-espresso">You may also like</h2>
            </div>
            <Link to="/shop" className="hidden text-sm font-bold uppercase tracking-luxury text-velmora-espresso transition hover:text-velmora-gold sm:block">
              Shop all
            </Link>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((entry) => (
              <ProductCard key={entry.id} product={entry} elevated />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
