import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { Minus, Plus, Star } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'
import Accordion from '@/components/product/Accordion.jsx'
import ProductCard from '@/components/product/ProductCard.jsx'
import ProductDetailGallery from '@/components/product/ProductDetailGallery.jsx'
import { products } from '@/data/products.js'
import { useCart } from '@/context/CartContext.jsx'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug) || products[0]
  const [selectedImage, setSelectedImage] = useState('main')
  const [tone, setTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const containerRef = useRef(null)
  const { addItem } = useCart()

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => ImageHelper.loadImages(strkImgConfig, containerRef.current))
    return () => window.cancelAnimationFrame(frame)
  }, [product.slug, selectedImage])

  const related = products.filter((item) => item.id !== product.id).slice(0, 4)

  return (
    <main ref={containerRef} className="bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="px-4 py-10 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
<ProductDetailGallery product={product} selectedImage={selectedImage} onSelect={setSelectedImage} />

          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-bold uppercase tracking-widest text-velmora-antique">{product.category}</p>
            <h1 id={product.titleId} className="mt-4 font-serif text-5xl font-semibold uppercase leading-none tracking-luxury text-velmora-espresso md:text-7xl">{product.name}</h1>
            <div className="mt-5 flex items-center gap-4">
              <p className="text-xl font-semibold text-velmora-espresso">${product.price}</p>
              <span className="h-5 w-px bg-velmora-sand" />
              <p className="inline-flex items-center gap-1 text-sm text-velmora-smoke"><Star className="h-4 w-4 fill-velmora-champagne text-velmora-champagne" /> {product.rating} ({product.reviews} reviews)</p>
            </div>
            <p id={product.descId} className="mt-7 text-base leading-8 text-velmora-smoke md:text-lg">{product.longDescription}</p>

            <div className="mt-9 border-t border-velmora-sand/70 pt-7">
              <p className="text-xs font-bold uppercase tracking-widest text-velmora-espresso">Tone</p>
              <div className="mt-4 flex gap-3">
                {['Gold', 'Silver'].map((option) => (
                  <button key={option} type="button" className={`velmora-focus rounded-full border px-5 py-3 text-sm transition ${tone === option ? 'border-velmora-espresso bg-velmora-espresso text-velmora-ivory' : 'border-velmora-sand bg-velmora-pearl text-velmora-espresso hover:border-velmora-antique'}`} onClick={() => setTone(option)}>{option}</button>
                ))}
              </div>
            </div>

            <div className="mt-7 flex items-center gap-4">
              <div className="flex h-14 items-center border border-velmora-sand bg-velmora-pearl text-velmora-espresso">
                <button type="button" className="velmora-focus px-4" aria-label="Decrease quantity" onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus className="h-4 w-4" /></button>
                <span className="w-10 text-center text-sm font-semibold">{quantity}</span>
                <button type="button" className="velmora-focus px-4" aria-label="Increase quantity" onClick={() => setQuantity(quantity + 1)}><Plus className="h-4 w-4" /></button>
              </div>
              <button type="button" className="velmora-focus h-14 flex-1 bg-velmora-champagne px-6 text-xs font-bold uppercase tracking-widest text-velmora-espresso shadow-soft transition hover:bg-velmora-espresso hover:text-velmora-ivory" onClick={() => addItem(product, quantity, tone)}>Add to Cart</button>
            </div>

            <div className="mt-8">
              <Accordion items={[
                { title: 'Description', content: product.longDescription },
                { title: 'Materials & Care', content: product.care },
                { title: 'Shipping & Returns', content: product.shipping },
              ]} />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-velmora-sand/70 px-4 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-serif text-4xl text-velmora-espresso md:text-6xl">You may also like</h2>
            <Link to="/shop" className="hidden border-b border-velmora-antique pb-2 text-xs font-bold uppercase tracking-widest text-velmora-antique transition hover:text-velmora-espresso sm:inline-flex">Shop all</Link>
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => <ProductCard key={item.id} product={item} compact />)}
          </div>
        </div>
      </section>
    </main>
  )
}
