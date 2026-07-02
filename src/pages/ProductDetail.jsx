import { Minus, Plus, Star } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import Accordion from '@/components/storefront/Accordion.jsx'
import ProductCard from '@/components/storefront/ProductCard.jsx'
import ProductImage from '@/components/storefront/ProductImage.jsx'
import { products } from '@/data/products.js'
import { useStrkImages } from '@/hooks/useStrkImages.js'

export default function ProductDetail({ onAddToCart }) {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId)
  const [variant, setVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const imageContainerRef = useStrkImages([productId])

  const related = useMemo(() => {
    if (!product) return []
    return products.filter((item) => item.id !== product.id).slice(0, 4)
  }, [product])

  if (!product) return <Navigate to="/shop" replace />

  const gallery = [
    { id: product.imageId, label: 'studio portrait', ratio: '3x4' },
    { id: `${product.id}-gallery-model-0f71a8`, label: 'worn in warm light', ratio: '3x4' },
    { id: `${product.id}-gallery-detail-d526bb`, label: 'close detail', ratio: '1x1' },
  ]

  const addSelection = () => {
    onAddToCart(product, quantity, variant)
  }

  return (
    <main ref={imageContainerRef} className="bg-velmora-cream pt-28 text-velmora-ink">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-10 md:px-8 lg:grid-cols-product lg:py-16">
        <div className="grid gap-4 lg:grid-cols-gallery">
          <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:grid lg:content-start lg:overflow-visible">
            {gallery.map((image, index) => (
              <div key={image.id} className="h-20 w-20 shrink-0 overflow-hidden border border-velmora-mist bg-velmora-linen">
                <ProductImage
                  alt={`${product.name} thumbnail ${index + 1}`}
                  imageId={`${image.id}-thumb`}
                  query={`[${product.nameId}] [${product.descId}]`}
                  ratio="1x1"
                  width="200"
                />
              </div>
            ))}
          </div>
          <div className="order-1 grid gap-4 lg:order-2">
            {gallery.map((image, index) => (
              <div key={image.id} className={`${index === 0 ? 'aspect-portrait' : 'aspect-landscape'} overflow-hidden bg-velmora-linen shadow-jewel`}>
                <ProductImage
                  alt={`${product.name} ${image.label}`}
                  imageId={image.id}
                  query={`[${product.descId}] [${product.nameId}]`}
                  ratio={image.ratio}
                  width="1000"
                  className="transition duration-700 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>

        <aside className="lg:sticky lg:top-28 lg:h-fit">
          <p className="font-sans text-xs font-semibold uppercase tracking-jewel text-velmora-bronze">{product.category}</p>
          <h1 id={product.nameId} className="mt-4 font-serif text-5xl uppercase leading-none tracking-jewel text-velmora-ink md:text-6xl">
            {product.name}
          </h1>
          <div className="mt-5 flex items-center gap-4">
            <p className="font-sans text-2xl text-velmora-ink">${product.price}</p>
            <div className="flex items-center gap-1 text-velmora-gold" aria-label={`${product.rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
              <span className="ml-2 font-sans text-sm text-velmora-espresso">{product.rating} ({product.reviews})</span>
            </div>
          </div>
          <p id={product.descId} className="mt-6 font-sans text-base leading-8 text-velmora-espresso">
            {product.longDescription}
          </p>

          <div className="mt-8 border-y border-velmora-mist py-7">
            <p className="font-sans text-xs font-bold uppercase tracking-jewel text-velmora-ink">Tone</p>
            <div className="mt-4 flex gap-3">
              {['Gold', 'Silver'].map((tone) => (
                <button
                  key={tone}
                  type="button"
                  className={`rounded-full border px-5 py-2 font-sans text-sm transition-colors ${variant === tone ? 'border-velmora-gold bg-velmora-gold text-velmora-ink' : 'border-velmora-mist bg-velmora-parchment text-velmora-espresso hover:border-velmora-gold'}`}
                  onClick={() => setVariant(tone)}
                >
                  {tone} tone
                </button>
              ))}
            </div>

            <div className="mt-7 flex items-center justify-between gap-5">
              <p className="font-sans text-xs font-bold uppercase tracking-jewel text-velmora-ink">Quantity</p>
              <div className="flex items-center border border-velmora-mist bg-velmora-parchment text-velmora-ink">
                <button type="button" aria-label="Decrease quantity" className="p-3 hover:bg-velmora-linen" onClick={() => setQuantity((value) => Math.max(1, value - 1))}>
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-10 text-center font-sans text-sm">{quantity}</span>
                <button type="button" aria-label="Increase quantity" className="p-3 hover:bg-velmora-linen" onClick={() => setQuantity((value) => value + 1)}>
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <button type="button" className="mt-7 w-full bg-velmora-gold px-8 py-4 font-sans text-xs font-bold uppercase tracking-jewel text-velmora-ink transition-colors hover:bg-velmora-bronze hover:text-velmora-cream" onClick={addSelection}>
            Add to Cart
          </button>

          <div className="mt-8">
            <Accordion
              items={[
                { title: 'Description', content: product.longDescription },
                { title: 'Materials & Care', content: `${product.material}. ${product.care}` },
                { title: 'Shipping & Returns', content: 'Enjoy free worldwide shipping, gift-ready packaging, and 30-day returns on unworn pieces.' },
              ]}
            />
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl border-t border-velmora-mist px-5 py-16 md:px-8 lg:py-24">
        <div className="mb-8 flex items-end justify-between gap-5">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-jewel text-velmora-bronze">You may also like</p>
            <h2 className="mt-2 font-serif text-5xl text-velmora-ink">Complete the ritual</h2>
          </div>
          <Link to="/shop" className="hidden font-sans text-xs font-bold uppercase tracking-jewel text-velmora-bronze hover:underline md:block">
            Shop all
          </Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} compact />
          ))}
        </div>
      </section>
    </main>
  )
}
