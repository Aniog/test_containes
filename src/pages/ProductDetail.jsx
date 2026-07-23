import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import strkImgConfig from '../strk-img-config.json'
import { Button } from '../components/ui/Buttons.jsx'
import ProductCard from '../components/product/ProductCard.jsx'
import ProductImage from '../components/product/ProductImage.jsx'

const accordionItems = [
  { id: 'description', title: 'Description' },
  { id: 'care', title: 'Materials & Care' },
  { id: 'shipping', title: 'Shipping & Returns' },
]

export default function ProductDetail({ products, onAdd }) {
  const { id } = useParams()
  const product = products.find((item) => item.id === id) || products[0]
  const [tone, setTone] = useState(product.tones[0])
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [openAccordion, setOpenAccordion] = useState('description')
  const containerRef = useRef(null)

  useEffect(() => {
    setTone(product.tones[0])
    setQuantity(1)
    setActiveImage(0)
    setOpenAccordion('description')
  }, [product])

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [product.id, activeImage])

  const titleId = `detail-${product.id}-title`
  const descId = `detail-${product.id}-desc`
  const related = products.filter((item) => item.id !== product.id).slice(0, 4)
  const gallery = [
    { key: 'main', label: 'Editorial product image', ratio: '4x3' },
    { key: 'worn', label: 'Jewelry worn close up', ratio: '4x3' },
    { key: 'detail', label: 'Detail texture warm light', ratio: '1x1' },
  ]

  const accordionContent = {
    description: product.description,
    care: product.care,
    shipping: product.shipping,
  }

  return (
    <main ref={containerRef} className="bg-velmora-cream px-5 pb-20 pt-28 text-velmora-ink lg:px-12 lg:pb-28">
      <div className="mx-auto max-w-7xl">
        <nav className="mb-8 text-xs font-bold uppercase tracking-[0.2em] text-velmora-charcoal/70">
          <Link to="/shop" className="hover:text-velmora-gold-deep">Shop</Link> / <span className="text-velmora-ink">{product.category}</span>
        </nav>
        <section className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <div className="grid gap-4 md:grid-cols-[90px_1fr]">
            <div className="order-2 flex gap-3 md:order-1 md:flex-col">
              {gallery.map((image, index) => (
                <button key={image.key} type="button" onClick={() => setActiveImage(index)} className={`aspect-square w-20 overflow-hidden border bg-velmora-sand transition md:w-full ${activeImage === index ? 'border-velmora-gold' : 'border-velmora-sand'}`} aria-label={`View ${image.label}`}>
                  <ProductImage
                    id={`thumb-${product.id}-${image.key}-73`}
                    query={`[${descId}] [${titleId}] ${image.label}`}
                    ratio="1x1"
                    width="220"
                    alt={`${product.name} ${image.label}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="order-1 aspect-[4/5] overflow-hidden bg-velmora-sand shadow-editorial md:order-2">
              <ProductImage
                id={`detail-main-${product.id}-${gallery[activeImage].key}-11`}
                query={`[${descId}] [${titleId}] ${gallery[activeImage].label}`}
                ratio={gallery[activeImage].ratio}
                width="1200"
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-velmora-gold-deep">{product.material}</p>
            <h1 id={titleId} className="mt-4 font-serif text-4xl font-semibold uppercase leading-tight tracking-[0.16em] text-velmora-ink md:text-6xl">{product.name}</h1>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <p className="text-2xl font-semibold text-velmora-ink">${product.price}</p>
              <div className="flex items-center gap-2 text-sm text-velmora-charcoal">
                <span className="flex text-velmora-gold">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}</span>
                <span>{product.rating} · {product.reviews} reviews</span>
              </div>
            </div>
            <p id={descId} className="mt-6 max-w-xl text-base leading-8 text-velmora-charcoal/80">{product.shortDescription}</p>

            <div className="mt-8 border-y border-velmora-sand py-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-velmora-charcoal">Tone</p>
              <div className="flex flex-wrap gap-3">
                {product.tones.map((option) => (
                  <button key={option} type="button" onClick={() => setTone(option)} className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${tone === option ? 'border-velmora-gold bg-velmora-gold text-velmora-pearl' : 'border-velmora-sand bg-velmora-pearl text-velmora-ink hover:border-velmora-gold'}`}>{option}</button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <div className="flex items-center rounded-full border border-velmora-sand bg-velmora-pearl">
                <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-4 text-velmora-ink hover:text-velmora-gold-deep" aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button>
                <span className="min-w-10 text-center font-semibold">{quantity}</span>
                <button type="button" onClick={() => setQuantity(quantity + 1)} className="p-4 text-velmora-ink hover:text-velmora-gold-deep" aria-label="Increase quantity"><Plus className="h-4 w-4" /></button>
              </div>
              <Button className="flex-1 py-4" onClick={() => onAdd(product, quantity, tone)}>Add to Cart</Button>
            </div>

            <div className="mt-8 divide-y divide-velmora-sand border-y border-velmora-sand">
              {accordionItems.map((item) => (
                <div key={item.id}>
                  <button type="button" onClick={() => setOpenAccordion(openAccordion === item.id ? '' : item.id)} className="flex w-full items-center justify-between py-5 text-left text-sm font-bold uppercase tracking-[0.22em] text-velmora-ink">
                    {item.title}
                    <ChevronDown className={`h-4 w-4 transition ${openAccordion === item.id ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openAccordion === item.id ? 'max-h-40 pb-5' : 'max-h-0'}`}>
                    <p className="text-sm leading-7 text-velmora-charcoal/78">{accordionContent[item.id]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20 lg:mt-28">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-velmora-gold-deep">Complete the ritual</p>
              <h2 className="mt-3 font-serif text-4xl font-semibold text-velmora-ink md:text-5xl">You may also like</h2>
            </div>
            <Link to="/shop" className="hidden text-xs font-bold uppercase tracking-[0.2em] text-velmora-gold-deep hover:text-velmora-ink md:block">View all</Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => <ProductCard key={item.id} product={item} onAdd={onAdd} compact />)}
          </div>
        </section>
      </div>
    </main>
  )
}
