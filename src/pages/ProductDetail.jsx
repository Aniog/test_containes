import { useEffect, useMemo, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import ProductCard from '@/components/product/ProductCard'
import { formatPrice, getProductById, products } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'

const AccordionItem = ({ title, children, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-velmora-sand/80 text-velmora-ink">
      <button type="button" onClick={() => setOpen((current) => !current)} className="flex w-full items-center justify-between py-5 text-left text-xs font-bold uppercase tracking-[0.18em] text-velmora-ink">
        {title}
        <ChevronDown className={`h-4 w-4 transition ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="pb-5 text-sm leading-7 text-velmora-smoke">{children}</div>}
    </div>
  )
}

const ProductDetail = ({ productId, onAdd, onViewProduct, onNavigate }) => {
  const pageRef = useRef(null)
  const product = getProductById(productId)
  const [selectedImage, setSelectedImage] = useState(0)
  const [variant, setVariant] = useState(product.tone[0])
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    setSelectedImage(0)
    setVariant(product.tone[0])
    setQuantity(1)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [product.id])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [product.id, selectedImage])

  const related = useMemo(() => products.filter((item) => item.id !== product.id).slice(0, 4), [product.id])
  const galleryLabel = product.gallery[selectedImage] ?? product.name

  return (
    <main ref={pageRef} className="bg-velmora-ivory px-4 pb-20 pt-28 text-velmora-ink sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <button type="button" onClick={() => onNavigate('shop')} className="mb-8 text-xs font-bold uppercase tracking-[0.18em] text-velmora-smoke underline-offset-4 transition hover:text-velmora-gold hover:underline">Back to shop</button>

        <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="grid gap-4 lg:grid-cols-[92px_1fr]">
            <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col">
              {product.gallery.map((label, index) => (
                <button key={label} type="button" onClick={() => setSelectedImage(index)} className={`h-20 w-20 shrink-0 overflow-hidden rounded-2xl border bg-velmora-champagne transition ${selectedImage === index ? 'border-velmora-gold ring-2 ring-velmora-gold/30' : 'border-velmora-sand'}`} aria-label={`Show ${label}`}>
                  <img
                    alt={label}
                    className="h-full w-full object-cover"
                    data-strk-img-id={`thumb-${product.id}-${index}`}
                    data-strk-img={`[detail-desc-${product.id}] [detail-title-${product.id}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="180"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </button>
              ))}
            </div>
            <div className="order-1 overflow-hidden rounded-[2rem] border border-velmora-sand bg-velmora-champagne shadow-velvet lg:order-2">
              <img
                alt={galleryLabel}
                className="aspect-[4/5] w-full object-cover"
                data-strk-img-id={`detail-main-${product.id}-${selectedImage}`}
                data-strk-img={`[detail-desc-${product.id}] [detail-title-${product.id}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="1100"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>

          <div className="rounded-[2rem] border border-velmora-sand bg-velmora-champagne p-6 text-velmora-ink shadow-soft sm:p-8 lg:sticky lg:top-28">
            <p className="text-xs font-bold uppercase tracking-luxe text-velmora-gold">{product.category}</p>
            <h1 id={`detail-title-${product.id}`} className="mt-3 font-serif text-4xl uppercase leading-tight tracking-luxe text-velmora-ink sm:text-5xl">{product.name}</h1>
            <div className="mt-4 flex items-center justify-between gap-5">
              <p className="font-serif text-4xl text-velmora-ink">{formatPrice(product.price)}</p>
              <div className="flex items-center gap-1 text-velmora-gold">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
                <span className="ml-2 text-sm font-medium text-velmora-smoke">{product.reviews}</span>
              </div>
            </div>
            <p id={`detail-desc-${product.id}`} className="mt-5 text-base leading-8 text-velmora-smoke">{product.description}</p>

            <div className="mt-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-velmora-smoke">Tone</p>
              <div className="flex flex-wrap gap-2">
                {product.tone.map((tone) => (
                  <button key={tone} type="button" onClick={() => setVariant(tone)} className={`rounded-full border px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] transition ${variant === tone ? 'border-velmora-ink bg-velmora-ink text-velmora-ivory' : 'border-velmora-sand bg-velmora-ivory text-velmora-ink hover:border-velmora-gold hover:text-velmora-gold'}`}>{tone}</button>
                ))}
              </div>
            </div>

            <div className="mt-7">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-velmora-smoke">Quantity</p>
              <div className="inline-flex items-center rounded-full border border-velmora-sand bg-velmora-ivory text-velmora-ink">
                <button type="button" className="p-3 transition hover:text-velmora-gold" onClick={() => setQuantity((current) => Math.max(1, current - 1))} aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button>
                <span className="min-w-12 text-center font-semibold">{quantity}</span>
                <button type="button" className="p-3 transition hover:text-velmora-gold" onClick={() => setQuantity((current) => current + 1)} aria-label="Increase quantity"><Plus className="h-4 w-4" /></button>
              </div>
            </div>

            <button type="button" onClick={() => onAdd(product, variant, quantity)} className="mt-8 w-full rounded-full bg-velmora-gold px-8 py-4 text-xs font-bold uppercase tracking-[0.22em] text-velmora-ink shadow-soft transition hover:bg-velmora-ink hover:text-velmora-ivory">Add to Cart</button>

            <div className="mt-8">
              <AccordionItem title="Description" defaultOpen>{product.description} Designed to layer easily with your current pieces or stand alone with a soft editorial finish.</AccordionItem>
              <AccordionItem title="Materials & Care">{product.material}. {product.care}</AccordionItem>
              <AccordionItem title="Shipping & Returns">Free worldwide shipping on every order. Unworn pieces can be returned within 30 days in original packaging.</AccordionItem>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <div className="mb-8 flex items-end justify-between gap-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-luxe text-velmora-gold">Complete the look</p>
              <h2 className="mt-3 font-serif text-5xl text-velmora-ink">You may also like</h2>
            </div>
          </div>
          <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} onAdd={onAdd} onView={onViewProduct} compact />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

export default ProductDetail
