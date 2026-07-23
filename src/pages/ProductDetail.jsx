import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { Minus, Plus, Star } from 'lucide-react'
import strkImgConfig from '../strk-img-config.json'
import { formatPrice, products } from '../data/products'
import ProductCard from '../components/products/ProductCard'
import { getStockImageUrl } from '../lib/image-url'

const accordionContent = (product) => [
  { title: 'Description', content: product.longDescription },
  { title: 'Materials & Care', content: `${product.material}. ${product.care}` },
  { title: 'Shipping & Returns', content: product.shipping },
]

export default function ProductDetail({ onAdd, onOpenProduct }) {
  const { productId } = useParams()
  const navigate = useNavigate()
  const product = products.find((item) => item.id === productId) ?? products[0]
  const related = products.filter((item) => item.id !== product.id).slice(0, 4)
  const [selectedImage, setSelectedImage] = React.useState(product.imageId)
  const [tone, setTone] = React.useState(product.tone[0])
  const [quantity, setQuantity] = React.useState(1)
  const [openAccordion, setOpenAccordion] = React.useState('Description')
  const containerRef = React.useRef(null)

  React.useEffect(() => {
    setSelectedImage(product.imageId)
    setTone(product.tone[0])
    setQuantity(1)
  }, [product])

  React.useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [product.id, selectedImage])

  const gallery = [
    { id: product.imageId, thumbId: `thumb-${product.imageId}`, label: 'On model' },
    { id: product.hoverImageId, thumbId: `thumb-${product.hoverImageId}`, label: 'Detail' },
    { id: `product-${product.id}-editorial-u62f9a`, thumbId: `thumb-product-${product.id}-editorial-u62f9a`, label: 'Editorial' },
  ]

  return (
    <main ref={containerRef} className="bg-velmora-ivory pb-16 pt-24 text-velmora-ink lg:pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mb-6 text-xs font-bold uppercase tracking-velmora text-velmora-umber transition hover:text-velmora-ink"
        >
          Back to shop
        </button>

        <section className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          <div className="grid gap-4 lg:grid-cols-[5.5rem_1fr]">
            <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:grid lg:content-start lg:overflow-visible">
              {gallery.map((image) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setSelectedImage(image.id)}
                  className={`aspect-square w-20 shrink-0 overflow-hidden border bg-velmora-parchment transition lg:w-full ${
                    selectedImage === image.id ? 'border-velmora-gold' : 'border-velmora-ink/10 hover:border-velmora-umber'
                  }`}
                  aria-label={`Show ${image.label} image`}
                >
                  <img
                    alt={`${product.name} ${image.label}`}
                    className="h-full w-full object-cover"
                    data-strk-img-id={image.thumbId}
                    data-strk-img={`[${product.queryIds.desc}] [${product.queryIds.title}]`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="220"
                    src={getStockImageUrl(image.thumbId)}
                  />
                </button>
              ))}
            </div>
            <div className="order-1 aspect-[4/5] overflow-hidden bg-velmora-parchment shadow-velmora-soft lg:order-2">
              <img
                alt={product.name}
                className="h-full w-full object-cover"
                data-strk-img-id={`gallery-${selectedImage}`}
                data-strk-img={`[${product.queryIds.desc}] [${product.queryIds.title}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="1100"
                src={getStockImageUrl(`gallery-${selectedImage}`) || getStockImageUrl(selectedImage)}
              />
            </div>
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-bold uppercase tracking-velmora-wide text-velmora-gold">Velmora Signature</p>
            <h1 id={product.queryIds.title} className="mt-3 font-serif text-5xl font-semibold uppercase leading-tight tracking-velmora-wide text-velmora-ink sm:text-6xl">
              {product.name}
            </h1>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <p className="text-xl font-bold text-velmora-ink">{formatPrice(product.price)}</p>
              <div className="flex items-center gap-2 text-sm text-velmora-umber">
                <span className="flex text-velmora-gold" aria-label={`${product.rating} star rating`}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </span>
                <span>{product.rating} ({product.reviews} reviews)</span>
              </div>
            </div>
            <p id={product.queryIds.desc} className="mt-6 max-w-xl text-base leading-8 text-velmora-umber">
              {product.description}
            </p>

            <div className="mt-8 border-y border-velmora-ink/10 py-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-velmora text-velmora-ink">Tone</p>
              <div className="flex flex-wrap gap-3">
                {product.tone.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setTone(item)}
                    className={`rounded-full border px-5 py-2 text-sm font-bold transition ${
                      tone === item
                        ? 'border-velmora-ink bg-velmora-ink text-velmora-ivory'
                        : 'border-velmora-ink/15 bg-velmora-ivory text-velmora-ink hover:border-velmora-gold'
                    }`}
                  >
                    {item} Tone
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <div className="inline-flex h-14 w-full items-center justify-between border border-velmora-ink/15 bg-velmora-ivory sm:w-36">
                <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="p-4 text-velmora-ink" aria-label="Decrease quantity">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="font-bold text-velmora-ink">{quantity}</span>
                <button type="button" onClick={() => setQuantity((value) => value + 1)} className="p-4 text-velmora-ink" aria-label="Increase quantity">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button
                type="button"
                onClick={() => onAdd(product, quantity)}
                className="min-h-14 flex-1 bg-velmora-gold px-7 text-sm font-extrabold uppercase tracking-velmora text-velmora-ink transition hover:bg-velmora-champagne"
              >
                Add to Cart
              </button>
            </div>

            <div className="mt-8 divide-y divide-velmora-ink/10 border-t border-velmora-ink/10">
              {accordionContent(product).map((item) => (
                <div key={item.title}>
                  <button
                    type="button"
                    onClick={() => setOpenAccordion((current) => (current === item.title ? '' : item.title))}
                    className="flex w-full items-center justify-between py-5 text-left text-sm font-bold uppercase tracking-velmora text-velmora-ink"
                  >
                    {item.title}
                    <span className="text-xl">{openAccordion === item.title ? '−' : '+'}</span>
                  </button>
                  {openAccordion === item.title && (
                    <p className="pb-5 text-sm leading-7 text-velmora-umber">{item.content}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20 lg:mt-24">
          <div className="mb-8 flex items-end justify-between gap-5">
            <h2 className="font-serif text-4xl font-semibold text-velmora-ink">You may also like</h2>
            <Link to="/shop" className="text-xs font-bold uppercase tracking-velmora text-velmora-umber hover:text-velmora-ink">
              Shop all
            </Link>
          </div>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} onAdd={onAdd} onOpen={onOpenProduct} compact />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
