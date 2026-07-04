import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { Minus, Plus, ArrowLeft } from 'lucide-react'
import { products, formatPrice } from '@/data/products'
import EditorialImage from '@/components/storefront/EditorialImage'
import ProductCard from '@/components/storefront/ProductCard'
import RatingStars from '@/components/storefront/RatingStars'
import strkImgConfig from '@/strk-img-config.json'

const accordions = [
  ['Description', 'A refined demi-fine piece designed for frequent wear, easy layering, and modern gifting. Each Velmora design is polished by hand for a warm, luminous finish.'],
  ['Materials & Care', '18K gold plating over a skin-friendly base. Nickel-safe and hypoallergenic. Keep dry, avoid perfume, and store in the included pouch.'],
  ['Shipping & Returns', 'Enjoy free worldwide shipping and 30-day returns on unworn pieces in original packaging. Gift packaging is included with every order.'],
]

export default function ProductDetail({ onAddToCart }) {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId) || products[0]
  const [variant, setVariant] = useState('Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const [openPanel, setOpenPanel] = useState('Description')
  const gallery = useMemo(
    () => [
      { id: `${product.id}-gallery-primary`, query: `[detail-${product.id}-desc] [detail-${product.id}-title]`, ratio: '4x3' },
      { id: `${product.id}-gallery-worn`, query: `[detail-${product.id}-desc] [detail-${product.id}-title]`, ratio: '4x3' },
      { id: `${product.id}-gallery-detail`, query: `[detail-${product.id}-desc] [detail-${product.id}-title]`, ratio: '4x3' },
    ],
    [product.id],
  )
  const [activeImage, setActiveImage] = useState(gallery[0])

  useEffect(() => {
    setActiveImage(gallery[0])
    setVariant('Gold Tone')
    setQuantity(1)
  }, [gallery, product.id])

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, document.body)
    })
    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [activeImage.id])

  const related = products.filter((item) => item.id !== product.id).slice(0, 4)

  const handleAdd = () => {
    onAddToCart(product, { variant, quantity })
  }

  return (
    <main className="bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-6 md:pb-24 lg:px-10">
        <Link to="/shop" className="mb-8 inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-[0.2em] text-velmora-taupe transition hover:text-velmora-espresso">
          <ArrowLeft className="h-4 w-4" /> Back to shop
        </Link>
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          <div className="grid gap-4 md:grid-cols-[96px_1fr]">
            <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col">
              {gallery.map((image) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setActiveImage(image)}
                  className={`h-24 w-24 shrink-0 overflow-hidden border bg-velmora-porcelain transition ${
                    activeImage.id === image.id ? 'border-velmora-champagne' : 'border-velmora-cocoa/10 hover:border-velmora-champagne'
                  }`}
                  aria-label={`Show ${product.name} image`}
                >
                  <EditorialImage
                    id={`thumb-${image.id}`}
                    query={image.query}
                    ratio="1x1"
                    width="180"
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="order-1 overflow-hidden bg-velmora-porcelain shadow-velvet md:order-2">
              <EditorialImage
                id={activeImage.id}
                query={activeImage.query}
                ratio={activeImage.ratio}
                width="1200"
                alt={product.name}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>

          <div className="text-velmora-espresso lg:pt-6">
            <p id={`detail-${product.id}-desc`} className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-velmora-antique">
              {product.category} · {product.material}
            </p>
            <h1 id={`detail-${product.id}-title`} className="mt-4 font-serifDisplay text-5xl font-semibold uppercase leading-none tracking-product text-velmora-espresso md:text-6xl">
              {product.name}
            </h1>
            <p className="mt-5 font-sans text-2xl font-semibold text-velmora-cocoa">{formatPrice(product.price)}</p>
            <div className="mt-5">
              <RatingStars rating={product.rating} reviews={product.reviews} />
            </div>
            <p className="mt-6 max-w-xl font-sans text-base leading-8 text-velmora-cocoa">{product.longDescription}</p>

            <div className="mt-8 border-y border-velmora-cocoa/10 py-6">
              <p className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.2em] text-velmora-espresso">Tone</p>
              <div className="flex flex-wrap gap-3">
                {['Gold Tone', 'Silver Tone'].map((tone) => (
                  <button
                    key={tone}
                    type="button"
                    onClick={() => setVariant(tone)}
                    className={`rounded-full border px-5 py-3 font-sans text-xs font-bold uppercase tracking-[0.18em] transition ${
                      variant === tone
                        ? 'border-velmora-champagne bg-velmora-champagne text-velmora-espresso'
                        : 'border-velmora-cocoa/15 bg-transparent text-velmora-cocoa hover:border-velmora-champagne'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <div className="flex w-full items-center justify-between rounded-full border border-velmora-cocoa/15 bg-velmora-porcelain px-4 py-3 text-velmora-espresso sm:w-40">
                <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="p-1 text-velmora-espresso transition hover:text-velmora-antique" aria-label="Decrease quantity">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="font-sans text-sm font-bold text-velmora-espresso">{quantity}</span>
                <button type="button" onClick={() => setQuantity((value) => value + 1)} className="p-1 text-velmora-espresso transition hover:text-velmora-antique" aria-label="Increase quantity">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button
                type="button"
                onClick={handleAdd}
                className="flex-1 rounded-full bg-velmora-champagne px-8 py-4 font-sans text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso shadow-glow transition hover:bg-velmora-antique hover:text-velmora-ivory"
              >
                Add to Cart
              </button>
            </div>

            <div className="mt-8 divide-y divide-velmora-cocoa/10 border-t border-velmora-cocoa/10">
              {accordions.map(([title, content]) => (
                <div key={title}>
                  <button
                    type="button"
                    onClick={() => setOpenPanel(openPanel === title ? '' : title)}
                    className="flex w-full items-center justify-between py-5 text-left font-sans text-xs font-bold uppercase tracking-[0.2em] text-velmora-espresso"
                    aria-expanded={openPanel === title}
                  >
                    {title}
                    <span className="text-xl">{openPanel === title ? '−' : '+'}</span>
                  </button>
                  {openPanel === title && <p className="pb-5 font-sans text-sm leading-7 text-velmora-cocoa">{title === 'Description' ? product.description : content}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl border-t border-velmora-cocoa/10 px-5 py-16 sm:px-6 md:py-24 lg:px-10">
        <div className="mb-9 flex items-end justify-between gap-5">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-velmora-antique">Complete the ritual</p>
            <h2 className="mt-3 font-serifDisplay text-5xl font-semibold text-velmora-espresso">You may also like</h2>
          </div>
        </div>
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} scope="related" onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>
    </main>
  )
}
