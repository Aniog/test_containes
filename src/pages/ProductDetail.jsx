import { useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Minus, Plus, Star } from 'lucide-react'
import JewelryImage from '@/components/common/JewelryImage.jsx'
import { useImageLoader } from '@/components/common/useImageLoader.js'
import ProductCard from '@/components/product/ProductCard.jsx'
import Accordion from '@/components/product/Accordion.jsx'
import { getProductById, products } from '@/data/products.js'

export default function ProductDetail({ onAdd }) {
  const { id } = useParams()
  const product = getProductById(id)
  const [variant, setVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState('primary')
  const pageRef = useRef(null)
  useImageLoader(pageRef, [id, activeImage])

  const related = useMemo(() => products.filter((item) => item.id !== product.id).slice(0, 4), [product.id])
  const productTitleId = `detail-${product.id}-title`
  const productDescId = `detail-${product.id}-desc`
  const activeImgId = activeImage === 'primary' ? `detail-${product.imgId}` : `detail-${product.hoverImgId}`

  const addSelected = () => onAdd(product, quantity, variant)

  return (
    <main ref={pageRef} className="bg-velmora-ivory px-4 pb-20 pt-28 text-velmora-espresso sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Link to="/shop" className="text-xs font-bold uppercase tracking-refined text-velmora-taupe transition hover:text-velmora-gold">← Back to shop</Link>
        <section className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="grid gap-4 md:grid-cols-[6rem_1fr]">
            <div className="order-2 flex gap-3 md:order-1 md:flex-col">
              {['primary', 'worn'].map((imageKey) => (
                <button key={imageKey} className={`overflow-hidden rounded-2xl border bg-velmora-linen ${activeImage === imageKey ? 'border-velmora-gold' : 'border-velmora-line'}`} onClick={() => setActiveImage(imageKey)} aria-label={`Show ${imageKey} image`}>
                  <JewelryImage alt={`${product.name} thumbnail`} imgId={`thumb-${imageKey}-${product.imgId}`} query={`[${productDescId}] [${productTitleId}]`} ratio="1x1" width="180" className="aspect-square w-full object-cover" />
                </button>
              ))}
            </div>
            <div className="order-1 overflow-hidden rounded-t-full rounded-b-3xl bg-velmora-linen shadow-soft md:order-2">
              <JewelryImage alt={product.name} imgId={activeImgId} query={`[${productDescId}] [${productTitleId}]`} ratio="3x4" width="1000" className="aspect-[3/4] w-full object-cover" />
            </div>
          </div>

          <div className="lg:pt-8">
            <p className="text-xs font-bold uppercase tracking-refined text-velmora-gold">{product.category}</p>
            <h1 id={productTitleId} className="mt-4 font-display text-5xl font-semibold uppercase leading-tight tracking-product text-velmora-espresso md:text-6xl">{product.name}</h1>
            <div className="mt-5 flex items-center gap-4">
              <p className="font-display text-4xl text-velmora-espresso">${product.price}</p>
              <div className="flex items-center gap-1 text-velmora-gold">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
                <span className="ml-2 text-sm text-velmora-taupe">{product.rating} · {product.reviews} reviews</span>
              </div>
            </div>
            <p id={productDescId} className="mt-6 text-lg leading-8 text-velmora-taupe">{product.description}</p>

            <div className="mt-8 border-t border-velmora-line pt-8">
              <p className="mb-3 text-xs font-bold uppercase tracking-refined text-velmora-espresso">Tone</p>
              <div className="flex gap-3">
                {['Gold', 'Silver'].map((tone) => (
                  <button key={tone} className={`rounded-full border px-5 py-3 text-sm font-semibold transition ${variant === tone ? 'border-velmora-espresso bg-velmora-espresso text-velmora-ivory' : 'border-velmora-line bg-velmora-pearl text-velmora-espresso hover:border-velmora-gold'}`} onClick={() => setVariant(tone)}>
                    {tone} tone
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center rounded-full border border-velmora-line bg-velmora-pearl">
                <button className="p-4 text-velmora-espresso" onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button>
                <span className="min-w-10 text-center font-semibold">{quantity}</span>
                <button className="p-4 text-velmora-espresso" onClick={() => setQuantity(quantity + 1)} aria-label="Increase quantity"><Plus className="h-4 w-4" /></button>
              </div>
              <button className="flex-1 rounded-full bg-velmora-gold px-8 py-4 text-sm font-bold uppercase tracking-refined text-velmora-espresso shadow-soft transition hover:bg-velmora-champagne" onClick={addSelected}>Add to Cart</button>
            </div>

            <div className="mt-10">
              <Accordion items={[
                { title: 'Description', content: product.detail },
                { title: 'Materials & Care', content: `${product.material}. ${product.care}` },
                { title: 'Shipping & Returns', content: 'Enjoy free worldwide shipping and 30-day returns on every Velmora order.' },
              ]} />
            </div>
          </div>
        </section>

        <section className="mt-24">
          <div className="mb-10 flex items-end justify-between gap-6">
            <h2 className="font-display text-4xl text-velmora-espresso md:text-5xl">You may also like</h2>
            <Link to="/shop" className="hidden text-xs font-bold uppercase tracking-refined text-velmora-gold md:inline">Shop all</Link>
          </div>
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => <ProductCard key={item.id} product={item} onAdd={onAdd} context="related" />)}
          </div>
        </section>
      </div>
    </main>
  )
}
