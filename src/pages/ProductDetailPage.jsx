import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'
import { products } from '../data/products.js'
import ProductCard from '../components/products/ProductCard.jsx'
import ProductImage from '../components/products/ProductImage.jsx'

const accordions = [
  { key: 'description', title: 'Description' },
  { key: 'care', title: 'Materials & Care' },
  { key: 'shipping', title: 'Shipping & Returns' },
]

function ProductDetailPage({ product, onAddToCart, onOpenProduct, onNavigate }) {
  const [tone, setTone] = useState(product.tones[0])
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState('primary')
  const [openPanel, setOpenPanel] = useState('description')
  const pageRef = useRef(null)

  useEffect(() => {
    setTone(product.tones[0])
    setQuantity(1)
    setActiveImage('primary')
    setOpenPanel('description')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [product])

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [product, activeImage])

  const relatedProducts = products.filter((item) => item.id !== product.id).slice(0, 4)

  const panelContent = {
    description: `${product.longDescription} ${product.fit}`,
    care: `${product.material} over a jewelry-grade base with a hypoallergenic finish. ${product.care}`,
    shipping: 'Enjoy free worldwide shipping on every Velmora order. If it is not quite right, return unworn pieces within 30 days in original packaging.',
  }

  const addDetailToCart = () => {
    onAddToCart(product, { tone, quantity })
  }

  return (
    <main ref={pageRef} className="bg-velmora-ivory pt-24 text-velmora-espresso md:pt-28">
      <section className="mx-auto max-w-7xl px-5 pb-16 pt-6 md:px-8 md:pb-24">
        <button
          type="button"
          onClick={() => onNavigate('shop')}
          className="mb-8 text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso/60 transition hover:text-velmora-gold"
        >
          ← Back to shop
        </button>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="grid gap-4 md:grid-cols-[88px_1fr]">
            <div className="order-2 flex gap-3 md:order-1 md:flex-col">
              {['primary', 'secondary', 'detail'].map((variant) => (
                <button
                  key={variant}
                  type="button"
                  onClick={() => setActiveImage(variant)}
                  className={`aspect-square w-20 overflow-hidden border bg-velmora-champagne transition md:w-full ${
                    activeImage === variant ? 'border-velmora-gold' : 'border-velmora-taupe/35 hover:border-velmora-gold/70'
                  }`}
                  aria-label={`Show ${variant} image`}
                >
                  <ProductImage
                    product={product}
                    idPrefix="thumb"
                    variant={variant}
                    ratio="1x1"
                    width="240"
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="order-1 aspect-[4/5] overflow-hidden bg-velmora-champagne md:order-2">
              <ProductImage
                product={product}
                idPrefix="detail-main"
                variant={activeImage}
                ratio="4x3"
                width="1200"
                className="h-full w-full object-cover animate-fade-in"
              />
            </div>
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-velmora-gold">{product.category}</p>
            <h1 className="mt-4 font-serif text-4xl uppercase leading-tight tracking-[0.18em] md:text-5xl">
              {product.name}
            </h1>
            <div className="mt-5 flex items-center gap-4">
              <p className="text-2xl font-semibold">${product.price}</p>
              <div className="flex items-center gap-2 border-l border-velmora-taupe/40 pl-4 text-sm text-velmora-espresso/68">
                <span className="flex gap-0.5 text-velmora-gold">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </span>
                <span>{product.rating} ({product.reviewCount})</span>
              </div>
            </div>
            <p className="mt-6 max-w-xl text-base leading-8 text-velmora-espresso/72">{product.description}</p>

            <div className="mt-8 border-t border-velmora-taupe/30 pt-8">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso/60">Tone</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {product.tones.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setTone(item)}
                    className={`rounded-full border px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] transition ${
                      tone === item
                        ? 'border-velmora-espresso bg-velmora-espresso text-velmora-pearl'
                        : 'border-velmora-taupe/50 text-velmora-espresso hover:border-velmora-gold hover:text-velmora-gold'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso/60">Quantity</p>
              <div className="mt-4 inline-flex items-center border border-velmora-taupe/45 bg-velmora-pearl">
                <button
                  type="button"
                  onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                  className="p-4 transition hover:bg-velmora-champagne"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-12 text-center font-semibold">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((value) => value + 1)}
                  className="p-4 transition hover:bg-velmora-champagne"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={addDetailToCart}
              className="mt-8 w-full bg-velmora-gold px-8 py-5 text-xs font-bold uppercase tracking-[0.24em] text-velmora-pearl transition hover:bg-velmora-bronze"
            >
              Add to Cart
            </button>

            <div className="mt-8 divide-y divide-velmora-taupe/30 border-y border-velmora-taupe/30">
              {accordions.map((accordion) => (
                <div key={accordion.key}>
                  <button
                    type="button"
                    onClick={() => setOpenPanel((current) => (current === accordion.key ? '' : accordion.key))}
                    className="flex w-full items-center justify-between py-5 text-left text-xs font-bold uppercase tracking-[0.24em]"
                  >
                    {accordion.title}
                    <ChevronDown className={`h-4 w-4 transition ${openPanel === accordion.key ? 'rotate-180' : ''}`} />
                  </button>
                  {openPanel === accordion.key && (
                    <p className="pb-6 text-sm leading-7 text-velmora-espresso/70">{panelContent[accordion.key]}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-velmora-taupe/30 px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-velmora-gold">Curated pairings</p>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl">You may also like</h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('shop')}
              className="hidden text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso/65 transition hover:text-velmora-gold md:block"
            >
              Shop all
            </button>
          </div>
          <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} onOpenProduct={onOpenProduct} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProductDetailPage
