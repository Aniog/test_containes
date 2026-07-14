import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { Minus, Plus, Star } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'
import Accordion from '@/components/product/Accordion.jsx'
import ProductCard from '@/components/product/ProductCard.jsx'
import Button from '@/components/ui/Button.jsx'
import { useCart } from '@/components/cart/CartContext.jsx'
import { formatPrice, products } from '@/data/products.js'

const tones = ['Gold', 'Silver']

const ProductDetail = () => {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug) || products[0]
  const related = products.filter((item) => item.id !== product.id).slice(0, 4)
  const [selectedTone, setSelectedTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState('primary')
  const { addToCart } = useCart()
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [slug, activeImage])

  const gallery = [
    { key: 'primary', id: `detail-${product.imageId}`, label: `${product.name} product detail`, query: `[detail-desc] [detail-title]` },
    { key: 'worn', id: `detail-${product.hoverImageId}`, label: `${product.name} worn styling`, query: `[detail-title] [detail-desc]` },
    { key: 'gift', id: `detail-gift-${product.id}-a74c2d`, label: `${product.name} gift packaging`, query: `[detail-care] [detail-title]` },
  ]
  const currentImage = gallery.find((image) => image.key === activeImage) || gallery[0]

  return (
    <main ref={containerRef} className="bg-velmora-cream pb-20 pt-28 text-velmora-ink">
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="grid gap-4 lg:grid-cols-[5rem_1fr]">
          <div className="order-2 flex gap-3 lg:order-1 lg:flex-col">
            {gallery.map((image) => (
              <button
                key={image.key}
                type="button"
                onClick={() => setActiveImage(image.key)}
                className={`aspect-square overflow-hidden rounded-full border bg-velmora-linen transition ${
                  activeImage === image.key ? 'border-velmora-gold' : 'border-velmora-linen hover:border-velmora-gold'
                }`}
                aria-label={`View ${image.label}`}
              >
                <img
                  alt={image.label}
                  className="h-full w-full object-cover"
                  data-strk-img-id={`thumb-${image.id}`}
                  data-strk-img={image.query}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </button>
            ))}
          </div>
          <div className="order-1 overflow-hidden rounded-t-full rounded-b-[3rem] bg-velmora-linen lg:order-2">
            <img
              alt={currentImage.label}
              className="aspect-[4/5] h-full w-full object-cover"
              data-strk-img-id={currentImage.id}
              data-strk-img={currentImage.query}
              data-strk-img-ratio="4x3"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
        </div>

        <div className="self-start bg-velmora-cream text-velmora-ink lg:sticky lg:top-28">
          <Link to="/shop" className="text-xs font-bold uppercase tracking-velmora text-velmora-gold hover:text-velmora-espresso">Back to shop</Link>
          <p className="mt-6 text-xs uppercase tracking-velmora text-velmora-clay">{product.category} · {product.material}</p>
          <h1 id="detail-title" className="mt-3 font-serif text-5xl uppercase leading-tight tracking-product text-velmora-ink md:text-7xl">
            {product.name}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <p className="text-xl font-semibold text-velmora-ink">{formatPrice(product.price)}</p>
            <div className="flex items-center gap-2 text-sm text-velmora-clay">
              <span className="flex text-velmora-gold" aria-label={`${product.rating} stars`}>
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
              </span>
              {product.rating} · {product.reviews} reviews
            </div>
          </div>
          <p id="detail-desc" className="mt-6 text-base leading-8 text-velmora-clay">{product.detail}</p>
          <p id="detail-care" className="sr-only">{product.care}</p>

          <div className="mt-8 border-t border-velmora-linen pt-7">
            <p className="mb-3 text-xs font-bold uppercase tracking-velmora text-velmora-ink">Tone</p>
            <div className="flex flex-wrap gap-3">
              {tones.map((tone) => (
                <button
                  key={tone}
                  type="button"
                  onClick={() => setSelectedTone(tone)}
                  className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                    selectedTone === tone
                      ? 'border-velmora-ink bg-velmora-ink text-velmora-cream'
                      : 'border-velmora-linen bg-velmora-porcelain text-velmora-ink hover:border-velmora-gold'
                  }`}
                >
                  {tone}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-7">
            <p className="mb-3 text-xs font-bold uppercase tracking-velmora text-velmora-ink">Quantity</p>
            <div className="inline-flex items-center rounded-full border border-velmora-linen bg-velmora-porcelain text-velmora-ink">
              <button type="button" className="p-3 hover:text-velmora-gold" onClick={() => setQuantity((value) => Math.max(1, value - 1))} aria-label="Decrease quantity">
                <Minus className="h-4 w-4" />
              </button>
              <span className="min-w-10 text-center text-sm font-semibold">{quantity}</span>
              <button type="button" className="p-3 hover:text-velmora-gold" onClick={() => setQuantity((value) => value + 1)} aria-label="Increase quantity">
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          <Button className="mt-8 w-full" onClick={() => addToCart(product, { tone: selectedTone, quantity })}>
            Add to Cart
          </Button>

          <div className="mt-8">
            <Accordion
              items={[
                { title: 'Description', content: product.detail },
                { title: 'Materials & Care', content: product.care },
                { title: 'Shipping & Returns', content: 'Enjoy free worldwide shipping, thoughtful gift packaging, and 30-day returns on unworn pieces.' },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <div className="mb-8 border-b border-velmora-linen pb-6">
          <p className="text-xs font-bold uppercase tracking-velmora text-velmora-gold">Complete the ritual</p>
          <h2 className="mt-3 font-serif text-5xl text-velmora-ink">You may also like</h2>
        </div>
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => <ProductCard key={item.id} product={item} prefix="related" />)}
        </div>
      </section>
    </main>
  )
}

export default ProductDetail
