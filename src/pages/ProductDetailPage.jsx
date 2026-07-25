import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'

const getImageUrl = (imageId) => strkImgConfig?.[imageId]?.results?.[0]?.url || ''
const variants = ['Gold Tone', 'Silver Tone']

export default function ProductDetailPage({ onAddToCart }) {
  const pageRef = useRef(null)
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId) || products[0]
  const [activeImage, setActiveImage] = useState(0)
  const [variant, setVariant] = useState('Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const [openAccordions, setOpenAccordions] = useState(['Description'])

  const gallery = useMemo(() => [
    { id: `${product.id}-gallery-one`, label: `${product.name} editorial close up` },
    { id: `${product.id}-gallery-two`, label: `${product.name} worn by model` },
    { id: `${product.id}-gallery-three`, label: `${product.name} jewelry detail` },
  ], [product.id, product.name])

  const detailImageId = `detail-${gallery[activeImage].id}`
  const relatedProducts = products.filter((item) => item.id !== product.id).slice(0, 4)

  useEffect(() => {
    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      const result = ImageHelper.loadImages(strkImgConfig, pageRef.current)
      if (typeof result === 'function') cleanup = result
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [product.id, activeImage])

  const toggleAccordion = (title) => {
    setOpenAccordions((current) => current.includes(title) ? current.filter((item) => item !== title) : [...current, title])
  }

  const addProduct = () => {
    onAddToCart(product, { variant, quantity })
  }

  return (
    <main ref={pageRef} className="bg-velmora-ivory pt-28 text-velmora-charcoal">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 pt-8 sm:px-8 md:grid-cols-[1.05fr_0.95fr] md:pb-24 lg:px-12">
        <div className="grid gap-4 md:grid-cols-[88px_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col md:overflow-visible">
            {gallery.map((image, index) => {
              const imageId = `thumb-${image.id}`

              return (
                <button key={image.id} type="button" onClick={() => setActiveImage(index)} className={`aspect-square w-20 shrink-0 overflow-hidden border bg-velmora-porcelain transition ${activeImage === index ? 'border-velmora-brass' : 'border-velmora-line hover:border-velmora-brass'}`} aria-label={`View image ${index + 1}`}>
                  <img
                    className="h-full w-full object-cover"
                    alt={image.label}
                    data-strk-img-id={imageId}
                    data-strk-img={`[detail-product-desc] [detail-product-title]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="240"
                    src={getImageUrl(imageId)}
                  />
                </button>
              )
            })}
          </div>
          <div className="order-1 aspect-product overflow-hidden bg-velmora-porcelain shadow-jewel md:order-2">
            <img
              className="h-full w-full object-cover"
              alt={gallery[activeImage].label}
              data-strk-img-id={detailImageId}
              data-strk-img="[detail-product-desc] [detail-product-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1000"
              src={getImageUrl(detailImageId)}
            />
          </div>
        </div>

        <div className="text-velmora-charcoal md:pl-6 lg:pl-10">
          <Link to="/shop" className="text-xs font-bold uppercase tracking-wide-luxury text-velmora-brass transition hover:text-velmora-ink">Back to shop</Link>
          <h1 id="detail-product-title" className="mt-5 font-serif text-5xl font-semibold uppercase leading-tight tracking-luxury text-velmora-charcoal md:text-6xl">
            {product.name}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <p className="text-2xl font-semibold text-velmora-charcoal">${product.price}</p>
            <div className="flex items-center gap-1 text-velmora-gold" aria-label="5 star rating">
              {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
              <span className="ml-2 text-xs font-bold uppercase tracking-luxury text-velmora-muted">128 reviews</span>
            </div>
          </div>
          <p id="detail-product-desc" className="mt-6 text-base leading-8 text-velmora-muted">{product.description}</p>

          <div className="mt-8 border-y border-velmora-line py-7">
            <p className="mb-3 text-xs font-bold uppercase tracking-wide-luxury text-velmora-muted">Tone</p>
            <div className="flex flex-wrap gap-3">
              {variants.map((item) => (
                <button key={item} type="button" onClick={() => setVariant(item)} className={`rounded-full border px-5 py-2 text-xs font-bold uppercase tracking-luxury transition ${variant === item ? 'border-velmora-ink bg-velmora-ink text-velmora-ivory' : 'border-velmora-line bg-velmora-ivory text-velmora-charcoal hover:border-velmora-brass'}`}>
                  {item}
                </button>
              ))}
            </div>

            <div className="mt-7 flex items-center gap-4">
              <p className="text-xs font-bold uppercase tracking-wide-luxury text-velmora-muted">Quantity</p>
              <div className="flex items-center border border-velmora-line bg-velmora-porcelain text-velmora-charcoal">
                <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="p-3 transition hover:text-velmora-brass" aria-label="Decrease quantity">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-10 text-center text-sm font-bold">{quantity}</span>
                <button type="button" onClick={() => setQuantity((value) => value + 1)} className="p-3 transition hover:text-velmora-brass" aria-label="Increase quantity">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <button type="button" onClick={addProduct} className="mt-7 w-full bg-velmora-gold px-8 py-5 text-xs font-extrabold uppercase tracking-wide-luxury text-velmora-ink transition hover:-translate-y-0.5 hover:bg-velmora-brass hover:text-velmora-ivory">
            Add to Cart
          </button>

          <div className="mt-8 border-t border-velmora-line">
            <Accordion title="Description" open={openAccordions.includes('Description')} onToggle={() => toggleAccordion('Description')}>
              {product.details}
            </Accordion>
            <Accordion title="Materials & Care" open={openAccordions.includes('Materials & Care')} onToggle={() => toggleAccordion('Materials & Care')}>
              {product.material}. {product.care}
            </Accordion>
            <Accordion title="Shipping & Returns" open={openAccordions.includes('Shipping & Returns')} onToggle={() => toggleAccordion('Shipping & Returns')}>
              Free worldwide shipping, 30-day returns, and gift-ready packaging on every order.
            </Accordion>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl border-t border-velmora-line px-5 py-16 sm:px-8 md:py-24 lg:px-12">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide-luxury text-velmora-brass">Complete the look</p>
            <h2 className="mt-3 font-serif text-5xl font-semibold text-velmora-charcoal">You may also like</h2>
          </div>
        </div>
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} slotPrefix="related" />
          ))}
        </div>
      </section>
    </main>
  )
}

function Accordion({ title, open, onToggle, children }) {
  return (
    <div className="border-b border-velmora-line text-velmora-charcoal">
      <button type="button" onClick={onToggle} className="flex w-full items-center justify-between py-5 text-left text-xs font-extrabold uppercase tracking-wide-luxury text-velmora-charcoal">
        {title}
        <ChevronDown className={`h-4 w-4 text-velmora-brass transition ${open ? 'rotate-180' : ''}`} />
      </button>
      <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'}`}>
        <p className="overflow-hidden text-sm leading-7 text-velmora-muted">{children}</p>
      </div>
    </div>
  )
}
