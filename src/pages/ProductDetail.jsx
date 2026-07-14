import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Minus, Plus, Star } from 'lucide-react'
import ImageScope from '@/components/common/ImageScope'
import Accordion from '@/components/product/Accordion'
import ProductCard from '@/components/product/ProductCard'
import Button from '@/components/ui/Button'
import { findProductBySlug, formatPrice, placeholderSvg, products } from '@/data/products'
import { useCart } from '@/context/CartContext'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = findProductBySlug(slug)
  const [selectedImage, setSelectedImage] = useState(0)
  const [variant, setVariant] = useState(product.variants[0])
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()

  const gallery = useMemo(() => [
    { id: 'main', label: `${product.name} warm jewelry still life`, ratio: '4x3' },
    { id: 'worn', label: `${product.name} jewelry worn on model close up`, ratio: '4x3' },
    { id: 'detail', label: `${product.name} gold detail texture crystal`, ratio: '4x3' },
  ], [product])

  const related = products.filter((item) => item.slug !== product.slug).slice(0, 4)
  const activeImage = gallery[selectedImage]

  return (
    <ImageScope refreshKey={`${product.slug}-${selectedImage}`}>
      <main className="bg-velmora-porcelain pb-20 pt-28 text-velmora-ink">
        <section className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <Link to="/shop" className="text-xs font-bold uppercase tracking-label text-velmora-goldDark hover:text-velmora-ink">← Back to shop</Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
            <div className="grid gap-4 lg:grid-cols-[5rem_1fr]">
              <div className="order-2 flex gap-3 lg:order-1 lg:grid lg:self-start">
                {gallery.map((image, index) => (
                  <button key={image.id} type="button" onClick={() => setSelectedImage(index)} className={`relative aspect-square flex-1 overflow-hidden border bg-velmora-champagne lg:w-20 ${selectedImage === index ? 'border-velmora-ink' : 'border-velmora-sand'}`} aria-label={`View ${image.id} image`}>
                    <img
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="h-full w-full object-cover"
                      data-strk-img-id={`pdp-thumb-${product.id}-${image.id}`}
                      data-strk-img={`[pdp-product-desc] [pdp-product-title]`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="220"
                      src={placeholderSvg}
                    />
                  </button>
                ))}
              </div>
              <div className="order-1 aspect-[4/5] overflow-hidden bg-velmora-champagne shadow-card lg:order-2">
                <img
                  alt={`${product.name} ${activeImage.id}`}
                  className="h-full w-full object-cover"
                  data-strk-img-id={`pdp-main-${product.id}-${activeImage.id}`}
                  data-strk-img={`[pdp-product-desc] [pdp-product-title] [pdp-material]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="1200"
                  src={placeholderSvg}
                />
              </div>
            </div>
            <aside className="lg:sticky lg:top-28">
              <p id="pdp-material" className="text-xs font-bold uppercase tracking-label text-velmora-goldDark">{product.material}</p>
              <h1 id="pdp-product-title" className="mt-4 font-serif text-5xl font-semibold uppercase leading-tight tracking-product text-velmora-ink lg:text-6xl">{product.name}</h1>
              <div className="mt-4 flex items-center gap-4">
                <p className="font-serif text-4xl text-velmora-ink">{formatPrice(product.price)}</p>
                <div className="flex items-center gap-1 text-sm text-velmora-cocoa">
                  <span className="flex text-velmora-goldDark" aria-label={`${product.rating} stars`}>
                    {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
                  </span>
                  <span>{product.rating} ({product.reviews})</span>
                </div>
              </div>
              <p id="pdp-product-desc" className="mt-5 text-lg leading-8 text-velmora-cocoa/80">{product.description}</p>
              <div className="mt-8">
                <p className="text-xs font-bold uppercase tracking-label text-velmora-ink">Tone</p>
                <div className="mt-3 flex gap-2">
                  {product.variants.map((tone) => (
                    <button key={tone} type="button" onClick={() => setVariant(tone)} className={`rounded-full border px-5 py-3 text-sm font-semibold transition ${variant === tone ? 'border-velmora-ink bg-velmora-ink text-velmora-pearl' : 'border-velmora-sand bg-velmora-pearl text-velmora-ink hover:border-velmora-goldDark'}`}>
                      {tone}
                    </button>
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <p className="text-xs font-bold uppercase tracking-label text-velmora-ink">Quantity</p>
                <div className="mt-3 inline-flex items-center rounded-full border border-velmora-sand bg-velmora-pearl text-velmora-ink">
                  <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3" aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button>
                  <span className="min-w-10 text-center font-semibold">{quantity}</span>
                  <button type="button" onClick={() => setQuantity(quantity + 1)} className="p-3" aria-label="Increase quantity"><Plus className="h-4 w-4" /></button>
                </div>
              </div>
              <Button type="button" className="mt-7 w-full" onClick={() => addItem(product, quantity, variant)}>Add to Cart</Button>
              <p className="mt-4 text-center text-xs leading-5 text-velmora-cocoa/75">Free shipping over $75 · 30-day returns · Gift-ready packaging</p>
              <div className="mt-8">
                <Accordion items={[
                  { title: 'Description', content: product.detail },
                  { title: 'Materials & Care', content: `${product.material}. ${product.care}` },
                  { title: 'Shipping & Returns', content: 'Orders ship within 1–2 business days. Enjoy 30-day returns on unworn pieces in original packaging.' },
                ]} />
              </div>
            </aside>
          </div>
        </section>
        <section className="mx-auto mt-20 max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex items-end justify-between border-b border-velmora-sand pb-5">
            <h2 id="related-title" className="font-serif text-4xl text-velmora-ink">You may also like</h2>
            <Link to="/shop" className="text-xs font-bold uppercase tracking-label text-velmora-goldDark hover:text-velmora-ink">View all</Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => <ProductCard key={item.id} product={item} />)}
          </div>
        </section>
      </main>
    </ImageScope>
  )
}
