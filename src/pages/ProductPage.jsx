import React, { useMemo, useState } from 'react'
import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import ProductArtwork from '@/components/storefront/ProductArtwork.jsx'
import ProductCard from '@/components/storefront/ProductCard.jsx'
import { products } from '@/data/products.js'

export default function ProductPage({ onAddToCart }) {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId) || products[0]
  const [selectedImage, setSelectedImage] = useState(0)
  const [variant, setVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [openSection, setOpenSection] = useState('Description')

  const gallery = useMemo(() => [
    { id: `${product.id}-artwork-primary`, label: product.name, variant: 'primary' },
    { id: `${product.id}-artwork-worn`, label: `${product.name} worn`, variant: 'worn' },
    { id: `${product.id}-artwork-detail`, label: `${product.name} detail`, variant: 'detail' },
  ], [product])

  const related = products.filter((item) => item.id !== product.id).slice(0, 4)

  return (
    <main className="bg-velmora-ivory pt-24 text-velmora-espresso">
      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-10 lg:py-16">
        <Link to="/shop" className="text-xs font-bold uppercase tracking-luxe text-velmora-cocoa transition hover:text-velmora-gold">← Back to shop</Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="grid gap-4 lg:grid-cols-[92px_1fr]">
            <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
              {gallery.map((image, index) => (
                <button key={image.id} type="button" className={`h-24 w-20 flex-none overflow-hidden border bg-velmora-mist transition ${selectedImage === index ? 'border-velmora-gold' : 'border-velmora-linen hover:border-velmora-gold'}`} onClick={() => setSelectedImage(index)} aria-label={`View image ${index + 1}`}>
                  <ProductArtwork product={product} variant={image.variant} />
                </button>
              ))}
            </div>
            <div className="order-1 aspect-[4/5] overflow-hidden bg-velmora-mist shadow-editorial lg:order-2">
              <ProductArtwork product={product} variant={gallery[selectedImage].variant} />
            </div>
          </div>

          <div className="lg:pt-6">
            <span id={product.contextId} className="sr-only">{product.imageContext}</span>
            <p className="text-xs font-bold uppercase tracking-luxe text-velmora-gold">{product.category}</p>
            <h1 id={product.titleId} className="mt-4 font-serif text-5xl font-semibold uppercase leading-none tracking-luxe text-velmora-espresso md:text-7xl">
              {product.name}
            </h1>
            <div className="mt-5 flex items-center gap-4">
              <p className="text-2xl font-semibold text-velmora-espresso">${product.price}</p>
              <div className="flex items-center gap-1 text-velmora-gold">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
                <span className="ml-2 text-sm font-semibold text-velmora-cocoa">{product.rating.toFixed(1)} · {product.reviews} reviews</span>
              </div>
            </div>
            <p id={product.descId} className="mt-6 max-w-xl text-base leading-8 text-velmora-cocoa">{product.description}</p>

            <div className="mt-8 border-y border-velmora-linen py-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-luxe text-velmora-cocoa">Tone</p>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map((tone) => (
                  <button key={tone} type="button" className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${variant === tone ? 'border-velmora-gold bg-velmora-gold text-velmora-cream' : 'border-velmora-linen bg-velmora-cream text-velmora-espresso hover:border-velmora-gold'}`} onClick={() => setVariant(tone)}>
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <div className="flex items-center rounded-full border border-velmora-linen bg-velmora-cream text-velmora-espresso">
                <button type="button" className="p-4 hover:text-velmora-gold" onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease quantity">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-10 text-center font-semibold">{quantity}</span>
                <button type="button" className="p-4 hover:text-velmora-gold" onClick={() => setQuantity(quantity + 1)} aria-label="Increase quantity">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button type="button" className="min-h-14 flex-1 rounded-full bg-velmora-gold px-8 py-4 text-sm font-bold uppercase tracking-luxe text-velmora-cream transition hover:bg-velmora-espresso" onClick={() => onAddToCart(product, quantity, variant)}>
                Add to Cart
              </button>
            </div>

            <div className="mt-8 border-t border-velmora-linen">
              {[
                ['Description', product.detail],
                ['Materials & Care', `${product.material} over a durable base with hypoallergenic posts or closures. ${product.care}`],
                ['Shipping & Returns', 'Enjoy free worldwide shipping, easy 30-day returns, and gift-ready packaging with every order.'],
              ].map(([title, content]) => (
                <div key={title} className="border-b border-velmora-linen">
                  <button type="button" className="flex w-full items-center justify-between py-5 text-left text-sm font-bold uppercase tracking-luxe text-velmora-espresso" onClick={() => setOpenSection(openSection === title ? '' : title)}>
                    {title}
                    <ChevronDown className={`h-4 w-4 transition ${openSection === title ? 'rotate-180' : ''}`} />
                  </button>
                  {openSection === title && <p className="pb-5 text-sm leading-7 text-velmora-cocoa">{content}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10 lg:pb-28">
        <div className="mb-8 flex items-end justify-between border-b border-velmora-linen pb-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-luxe text-velmora-gold">Complete the ritual</p>
            <h2 className="mt-3 font-serif text-5xl text-velmora-espresso">You may also like</h2>
          </div>
          <Link to="/shop" className="hidden text-xs font-bold uppercase tracking-luxe text-velmora-cocoa transition hover:text-velmora-gold md:block">View all</Link>
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
