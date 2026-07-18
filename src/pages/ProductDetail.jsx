import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductTile from '@/components/shop/ProductTile'
import { products } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'

const ProductDetail = ({ onAddToCart }) => {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug) || products[0]
  const related = products.filter((item) => item.id !== product.id).slice(0, 4)
  const [selectedTone, setSelectedTone] = useState(product.tone[0])
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const pageRef = useRef(null)

  const gallery = useMemo(
    () => [
      {
        id: `detail-main-${product.id}-f4a8c1`,
        alt: `${product.name} editorial close-up`,
        query: `[detail-product-description] [detail-product-name]`,
      },
      {
        id: `detail-worn-${product.id}-d62b90`,
        alt: `${product.name} worn on model`,
        query: `[detail-product-description] [detail-product-name]`,
      },
      {
        id: `detail-packaging-${product.id}-a91e33`,
        alt: `${product.name} gift packaging`,
        query: `[detail-product-description] [detail-product-name]`,
      },
    ],
    [product.id, product.name],
  )

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [slug, activeImage])

  return (
    <main ref={pageRef} className="bg-velmora-cream pt-24 text-velmora-ink">
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-16">
        <div className="grid gap-4 md:grid-cols-[92px_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col md:overflow-visible">
            {gallery.map((image, index) => (
              <button
                key={image.id}
                type="button"
                onClick={() => setActiveImage(index)}
                className={`aspect-square w-20 flex-shrink-0 overflow-hidden border bg-velmora-parchment transition md:w-full ${activeImage === index ? 'border-velmora-bronze' : 'border-velmora-ink/10 hover:border-velmora-bronze/70'}`}
                aria-label={`View image ${index + 1}`}
              >
                <img
                  alt={image.alt}
                  data-strk-img-id={`thumb-${image.id}`}
                  data-strk-img={image.query}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="220"
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
          <div className="order-1 overflow-hidden bg-velmora-parchment shadow-velvet md:order-2">
            <img
              alt={gallery[activeImage].alt}
              data-strk-img-id={gallery[activeImage].id}
              data-strk-img={gallery[activeImage].query}
              data-strk-img-ratio="3x4"
              data-strk-img-width="1000"
              className="aspect-[4/5] h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="lg:sticky lg:top-28 lg:h-fit">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-velmora-bronze">{product.category}</p>
          <h1 id="detail-product-name" className="mt-4 font-serif text-5xl font-semibold uppercase leading-[0.95] tracking-[0.16em] text-velmora-ink md:text-6xl">
            {product.name}
          </h1>
          <div className="mt-5 flex items-center justify-between gap-6 border-y border-velmora-ink/10 py-4">
            <p className="font-serif text-3xl font-semibold text-velmora-ink">${product.price}</p>
            <div className="flex items-center gap-2 text-sm text-velmora-espresso/75">
              <div className="flex text-velmora-bronze" aria-label={`${product.rating} star rating`}>
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span>{product.rating} ({product.reviews})</span>
            </div>
          </div>
          <p id="detail-product-description" className="mt-6 text-base leading-8 text-velmora-espresso/78">
            {product.description}
          </p>

          <div className="mt-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-velmora-ink">Tone</p>
            <div className="flex flex-wrap gap-3">
              {product.tone.map((tone) => (
                <button
                  key={tone}
                  type="button"
                  onClick={() => setSelectedTone(tone)}
                  className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${selectedTone === tone ? 'border-velmora-ink bg-velmora-ink text-velmora-cream' : 'border-velmora-ink/15 bg-velmora-cream text-velmora-ink hover:border-velmora-bronze'}`}
                >
                  {tone}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-7 flex items-center gap-4">
            <div className="flex items-center border border-velmora-ink/15 bg-velmora-cream text-velmora-ink">
              <button type="button" onClick={() => setQuantity((current) => Math.max(1, current - 1))} className="p-4 text-velmora-ink transition hover:bg-velmora-parchment" aria-label="Decrease quantity">
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-10 text-center font-semibold text-velmora-ink">{quantity}</span>
              <button type="button" onClick={() => setQuantity((current) => current + 1)} className="p-4 text-velmora-ink transition hover:bg-velmora-parchment" aria-label="Increase quantity">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <p className="text-sm text-velmora-espresso/70">Ready to ship in 1–2 business days.</p>
          </div>

          <button
            type="button"
            onClick={() => onAddToCart(product, selectedTone, quantity)}
            className="mt-6 w-full border border-velmora-ink bg-velmora-ink px-8 py-4 text-xs font-bold uppercase tracking-[0.26em] text-velmora-cream transition hover:border-velmora-champagne hover:bg-velmora-champagne hover:text-velmora-ink"
          >
            Add to Cart
          </button>

          <div className="mt-8 divide-y divide-velmora-ink/10 border-y border-velmora-ink/10">
            <Accordion title="Description">{product.description} Each piece is designed to be worn alone or layered into your daily jewelry wardrobe.</Accordion>
            <Accordion title="Materials & Care">{product.material}. {product.care}</Accordion>
            <Accordion title="Shipping & Returns">Free worldwide shipping, easy 30-day returns, and protective gift-ready packaging with every order.</Accordion>
          </div>
        </div>
      </section>

      <section className="border-t border-velmora-ink/10 px-4 py-16 text-velmora-ink sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-velmora-bronze">Complete the ritual</p>
              <h2 className="mt-3 font-serif text-5xl font-medium leading-none text-velmora-ink">You may also like</h2>
            </div>
            <Link to="/shop" className="hidden text-xs font-bold uppercase tracking-[0.24em] text-velmora-bronze hover:text-velmora-ink md:block">Shop all</Link>
          </div>
          <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <ProductTile key={item.id} product={item} onAdd={onAddToCart} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(title === 'Description')

  return (
    <div className="text-velmora-ink">
      <button type="button" onClick={() => setOpen((current) => !current)} className="flex w-full items-center justify-between py-5 text-left text-sm font-bold uppercase tracking-[0.22em] text-velmora-ink">
        {title}
        <ChevronDown className={`h-4 w-4 transition ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <p className="pb-5 text-sm leading-7 text-velmora-espresso/75">{children}</p>}
    </div>
  )
}

export default ProductDetail
