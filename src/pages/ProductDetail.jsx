import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import ProductCard from '@/components/product/ProductCard'
import ProductImage from '@/components/product/ProductImage'
import { imageFor } from '@/data/imageRegistry'
import { formatPrice, products } from '@/data/products'

const accordionContent = {
  Description:
    'Designed for luminous daily wear with a refined silhouette that feels special but never overdone.',
  'Materials & Care':
    '18K gold plated finish over a durable base with hypoallergenic posts. Avoid water, perfume, and lotions; store in a pouch when not wearing.',
  'Shipping & Returns':
    'Enjoy free worldwide shipping and 30-day returns on unworn pieces in original packaging.',
}

export default function ProductDetail({ onAdd, onOpenProduct }) {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId)
  const [tone, setTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  const [open, setOpen] = useState('Description')

  if (!product) return <Navigate to="/shop" replace />

  const related = products.filter((item) => item.id !== product.id).slice(0, 4)
  const galleryImages = [
    { imgId: product.imgId, src: imageFor[product.id]?.primary, label: 'primary' },
    { imgId: product.hoverImgId, src: imageFor[product.id]?.hover, label: 'worn view' },
    { imgId: `detail-${product.imgId}`, src: imageFor[product.id]?.detail, label: 'detail' },
  ]

  useEffect(() => {
    setSelectedImage(0)
    setQuantity(1)
  }, [productId])


  const query = `[${product.descId}] [${product.titleId}]`

  const addSelected = () => {
    onAdd(product, quantity)
  }

  return (
    <main className="bg-porcelain pt-24 text-obsidian">
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-16">
        <div className="grid gap-4 lg:grid-cols-[5.5rem_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
            {galleryImages.map((image, index) => (
              <button
                key={image.imgId}
                type="button"
                onClick={() => setSelectedImage(index)}
                className={`h-20 w-20 shrink-0 overflow-hidden border bg-sand transition hover:border-gold ${
                  selectedImage === index ? 'border-gold' : 'border-obsidian/10'
                }`}
              >
                <ProductImage
                  imgId={`thumb-${image.imgId}`}
                  query={query}
                  ratio="1x1"
                  width="180"
                  alt={`${product.name} thumbnail ${index + 1}`}
                  src={image.src}
                />
              </button>
            ))}
          </div>
          <div className="order-1 grid gap-4 lg:order-2">
            <div className="aspect-[4/5] overflow-hidden bg-sand shadow-editorial">
              <ProductImage
                imgId={`detail-main-${product.imgId}`}
                query={query}
                ratio="4x3"
                width="1100"
                alt={`${product.name} ${galleryImages[selectedImage]?.label}`}
                src={galleryImages[selectedImage]?.src}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square overflow-hidden bg-sand shadow-soft">
                <ProductImage imgId={`detail-lifestyle-${product.hoverImgId}`} query={query} ratio="1x1" width="620" alt={`${product.name} lifestyle`} src={imageFor[product.id]?.lifestyle} />
              </div>
              <div className="aspect-square overflow-hidden bg-sand shadow-soft">
                <ProductImage imgId={`detail-packaging-${product.imgId}`} query="[shipping-note] [materials-note]" ratio="1x1" width="620" alt={`${product.name} packaging`} src={imageFor[product.id]?.packaging} />
              </div>
            </div>
          </div>
        </div>

        <aside className="lg:sticky lg:top-28 lg:h-fit">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">{product.category}</p>
          <h1 id={product.titleId} className="mt-3 font-serif text-4xl uppercase leading-tight tracking-[0.16em] text-obsidian sm:text-5xl">
            {product.name}
          </h1>
          <div className="mt-4 flex items-center gap-4">
            <p className="font-serif text-3xl text-obsidian">{formatPrice(product.price)}</p>
            <div className="flex items-center gap-1 text-gold">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-4 w-4 fill-current" />
              ))}
              <span className="ml-2 text-sm text-taupe">{product.rating} · {product.reviews} reviews</span>
            </div>
          </div>
          <p id={product.descId} className="mt-6 text-base leading-8 text-taupe">{product.longDescription}</p>

          <div className="mt-8 space-y-6 border-y border-obsidian/10 py-6">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-taupe">Tone</p>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setTone(option)}
                    className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                      tone === option
                        ? 'border-gold bg-gold text-obsidian'
                        : 'border-obsidian/15 bg-mist text-obsidian hover:border-gold'
                    }`}
                  >
                    {option} tone
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-taupe">Quantity</p>
              <div className="inline-flex items-center rounded-full border border-obsidian/15 bg-mist text-obsidian">
                <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="p-3 hover:text-gold" aria-label="Decrease quantity">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-10 text-center font-semibold">{quantity}</span>
                <button type="button" onClick={() => setQuantity((value) => value + 1)} className="p-3 hover:text-gold" aria-label="Increase quantity">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={addSelected}
              className="w-full rounded-full bg-gold px-7 py-4 text-sm font-bold uppercase tracking-[0.22em] text-obsidian transition hover:bg-softgold"
            >
              Add to Cart · {formatPrice(product.price * quantity)}
            </button>
          </div>

          <div className="divide-y divide-obsidian/10">
            {Object.entries(accordionContent).map(([label, content]) => (
              <div key={label}>
                <button
                  type="button"
                  onClick={() => setOpen((current) => (current === label ? '' : label))}
                  className="flex w-full items-center justify-between py-5 text-left text-xs font-bold uppercase tracking-[0.24em] text-obsidian"
                >
                  {label}
                  <ChevronDown className={`h-4 w-4 transition ${open === label ? 'rotate-180 text-gold' : ''}`} />
                </button>
                {open === label && (
                  <p className="pb-5 text-sm leading-7 text-taupe">
                    {label === 'Description' ? product.longDescription : label === 'Materials & Care' ? product.care : content}
                  </p>
                )}
              </div>
            ))}
          </div>

          <p id="materials-note" className="sr-only">18K gold plated hypoallergenic jewelry care materials</p>
          <p id="shipping-note" className="sr-only">Velmora gift packaging shipping returns fine jewelry box</p>
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mb-8 flex items-end justify-between gap-4 border-t border-obsidian/10 pt-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">Complete the ritual</p>
            <h2 className="mt-3 font-serif text-4xl text-obsidian">You may also like</h2>
          </div>
          <Link to="/shop" className="hidden text-sm font-bold uppercase tracking-[0.2em] text-obsidian hover:text-gold sm:block">Shop all</Link>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} onAdd={onAdd} onOpenProduct={onOpenProduct} />
          ))}
        </div>
      </section>
    </main>
  )
}
