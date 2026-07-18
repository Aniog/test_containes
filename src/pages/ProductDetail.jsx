import { Minus, Plus, Star } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { Link, useParams } from 'react-router-dom'
import AccordionItem from '@/components/product/AccordionItem.jsx'
import ProductCard from '@/components/product/ProductCard.jsx'
import { useCart } from '@/context/CartContext.jsx'
import { getProductById, products } from '@/data/products.js'
import strkImgConfig from '@/strk-img-config.json'

const tones = ['Gold', 'Silver']

export default function ProductDetail() {
  const { productId } = useParams()
  const product = getProductById(productId)
  const [selectedImage, setSelectedImage] = useState(0)
  const [tone, setTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState('Description')
  const { addToCart } = useCart()
  const pageRef = useRef(null)


  const gallery = useMemo(() => [
    { id: `${product.id}-gallery-main`, label: `${product.name} on warm jewelry surface`, ratio: '4x3' },
    { id: `${product.id}-gallery-styled`, label: `${product.name} worn by model close up`, ratio: '3x4' },
    { id: `${product.id}-gallery-detail`, label: `${product.name} detailed gold texture macro`, ratio: '1x1' },
  ], [product])

  const related = products.filter((item) => item.id !== product.id).slice(0, 4)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [product.id, selectedImage])


  return (
    <div ref={pageRef} className="bg-velmora-ivory pt-24 text-velmora-ink sm:pt-28">
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-16">
        <div className="grid gap-4 lg:grid-cols-[5rem_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
            {gallery.map((image, index) => (
              <button
                key={image.id}
                type="button"
                className={`h-20 w-20 shrink-0 overflow-hidden border bg-velmora-pearl transition ${selectedImage === index ? 'border-velmora-gold' : 'border-velmora-linen'}`}
                onClick={() => setSelectedImage(index)}
                aria-label={`View image ${index + 1}`}
              >
                <img
                  alt={image.label}
                  className="h-full w-full object-cover"
                  data-strk-img-id={`thumb-${image.id}`}
                  data-strk-img={`[detail-desc] [detail-title]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="180"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </button>
            ))}
          </div>

          <div className="order-1 aspect-[4/5] overflow-hidden bg-velmora-pearl shadow-velmora lg:order-2">
            <img
              alt={gallery[selectedImage].label}
              className="h-full w-full object-cover"
              data-strk-img-id={`detail-${gallery[selectedImage].id}`}
              data-strk-img="[detail-desc] [detail-title]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </div>

        <div className="lg:pl-8">
          <Link to="/shop" className="text-xs font-bold uppercase tracking-nav text-velmora-gold underline-offset-4 hover:underline">Back to shop</Link>
          <h1 id="detail-title" className="mt-5 font-serif text-4xl font-semibold uppercase leading-tight tracking-product text-velmora-ink sm:text-5xl">
            {product.name}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <p className="font-serif text-3xl font-semibold text-velmora-ink">${product.price}</p>
            <div className="flex items-center gap-1 text-velmora-gold">
              {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
              <span className="ml-2 text-sm font-semibold text-velmora-cocoa">{product.rating} ({product.reviews} reviews)</span>
            </div>
          </div>
          <p id="detail-desc" className="mt-6 text-base leading-8 text-velmora-cocoa sm:text-lg">{product.description}</p>

          <div className="mt-8 border-y border-velmora-linen py-7">
            <p className="text-xs font-bold uppercase tracking-nav text-velmora-ink">Tone</p>
            <div className="mt-3 flex gap-3">
              {tones.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`rounded-full border px-5 py-3 text-xs font-bold uppercase tracking-nav transition ${tone === item ? 'border-velmora-espresso bg-velmora-espresso text-velmora-pearl' : 'border-velmora-linen bg-velmora-pearl text-velmora-ink hover:border-velmora-gold'}`}
                  onClick={() => setTone(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row">
            <div className="inline-flex w-full items-center justify-between rounded-full border border-velmora-linen bg-velmora-pearl px-2 py-2 text-velmora-ink sm:w-36">
              <button type="button" className="rounded-full p-3 hover:bg-velmora-ivory" onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease quantity">
                <Minus className="h-4 w-4" />
              </button>
              <span className="font-bold">{quantity}</span>
              <button type="button" className="rounded-full p-3 hover:bg-velmora-ivory" onClick={() => setQuantity(quantity + 1)} aria-label="Increase quantity">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              type="button"
              className="min-h-14 flex-1 rounded-full bg-velmora-champagne px-8 text-xs font-extrabold uppercase tracking-nav text-velmora-espresso shadow-glow transition hover:-translate-y-0.5 hover:bg-velmora-gold hover:text-velmora-pearl"
              onClick={() => addToCart(product, quantity, tone)}
              aria-label={`Add ${product.name} to cart`}
            >
              Add to Cart
            </button>
          </div>

          <div className="mt-8">
            <AccordionItem title="Description" isOpen={openAccordion === 'Description'} onToggle={() => setOpenAccordion(openAccordion === 'Description' ? '' : 'Description')}>
              {product.longDescription}
            </AccordionItem>
            <AccordionItem title="Materials & Care" isOpen={openAccordion === 'Materials & Care'} onToggle={() => setOpenAccordion(openAccordion === 'Materials & Care' ? '' : 'Materials & Care')}>
              {product.care}
            </AccordionItem>
            <AccordionItem title="Shipping & Returns" isOpen={openAccordion === 'Shipping & Returns'} onToggle={() => setOpenAccordion(openAccordion === 'Shipping & Returns' ? '' : 'Shipping & Returns')}>
              {product.shipping}
            </AccordionItem>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-10 flex items-end justify-between gap-5">
          <div>
            <p className="text-xs font-bold uppercase tracking-nav text-velmora-gold">You may also like</p>
            <h2 className="mt-3 font-serif text-4xl font-semibold text-velmora-ink">Complete the ritual</h2>
          </div>
          <Link to="/shop" className="hidden text-xs font-bold uppercase tracking-nav text-velmora-gold underline-offset-4 hover:underline sm:block">View all</Link>
        </div>
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => <ProductCard key={item.id} product={item} context={`related-${product.id}`} />)}
        </div>
      </section>
    </div>
  )
}
