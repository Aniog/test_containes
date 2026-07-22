import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Minus, Plus, Star } from 'lucide-react'
import Accordion from '@/components/products/Accordion'
import ProductCard from '@/components/products/ProductCard'
import ProductImage from '@/components/products/ProductImage'
import Button from '@/components/ui/Button'
import { products } from '@/data/products'
import { cn } from '@/lib/utils'

export default function ProductDetail({ onAddToCart }) {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug) || products[0]
  const [selectedImage, setSelectedImage] = useState(0)
  const [tone, setTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const related = useMemo(() => products.filter((item) => item.id !== product.id).slice(0, 4), [product.id])
  const gallery = [
    { imageId: `detail-${product.id}-main-primary-6a1d`, thumbId: `detail-${product.id}-thumb-primary-42bb`, label: 'Studio view' },
    { imageId: `detail-${product.id}-main-hover-8f0c`, thumbId: `detail-${product.id}-thumb-hover-93de`, label: 'Worn view' },
  ]

  const addSelectedQuantity = () => {
    Array.from({ length: quantity }).forEach(() => onAddToCart(product))
  }

  return (
    <main className="bg-velmora-porcelain pt-28 text-velmora-espresso">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 sm:px-8 md:pb-24 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-4 md:grid-cols-[96px_1fr]">
          <div className="order-2 flex gap-3 md:order-1 md:flex-col">
            {gallery.map((image, index) => (
              <button key={image.thumbId} type="button" className={cn('group aspect-square flex-1 overflow-hidden border bg-velmora-blush md:flex-none', selectedImage === index ? 'border-velmora-champagne' : 'border-velmora-mist')} onClick={() => setSelectedImage(index)} aria-label={`Show ${image.label}`}>
                <ProductImage product={product} imageId={image.thumbId} queryId={`${image.thumbId}-query`} className="h-full w-full" ratio="1x1" width="260" />
              </button>
            ))}
          </div>
          <div className="order-1 relative aspect-[4/5] overflow-hidden bg-velmora-blush shadow-editorial md:order-2">
            {gallery.map((image, index) => (
              <ProductImage key={image.imageId} product={product} imageId={image.imageId} queryId={`${image.imageId}-query`} className={cn('absolute inset-0 transition duration-500', selectedImage === index ? 'opacity-100' : 'opacity-0')} ratio="3x4" width="1000" />
            ))}
          </div>
        </div>

        <div className="lg:pl-10">
          <div className="border-b border-velmora-mist pb-8">
            <p className="text-xs font-semibold uppercase tracking-luxury text-velmora-champagne">{product.category}</p>
            <h1 className="mt-4 font-serif text-5xl uppercase leading-tight tracking-luxury text-velmora-espresso md:text-6xl">{product.name}</h1>
            <div className="mt-5 flex items-center justify-between gap-4">
              <p className="font-serif text-3xl font-semibold text-velmora-espresso">${product.price}</p>
              <div className="flex items-center gap-2 text-sm text-velmora-taupe">
                <span className="flex text-velmora-champagne" aria-label={`${product.rating} star rating`}>
                  {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
                </span>
                <span>{product.reviews} reviews</span>
              </div>
            </div>
            <p className="mt-6 text-base leading-8 text-velmora-taupe">{product.description}</p>
          </div>

          <div className="space-y-7 py-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-luxury text-velmora-taupe">Tone</p>
              <div className="mt-3 flex gap-3">
                {['Gold', 'Silver'].map((option) => (
                  <button key={option} type="button" className={cn('rounded-full border px-5 py-2 text-sm font-semibold transition', tone === option ? 'border-velmora-champagne bg-velmora-champagne text-velmora-espresso' : 'border-velmora-mist bg-velmora-ivory text-velmora-espresso hover:border-velmora-champagne')} onClick={() => setTone(option)}>
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-luxury text-velmora-taupe">Quantity</p>
              <div className="mt-3 inline-flex items-center rounded-full border border-velmora-mist bg-velmora-ivory">
                <button type="button" className="bg-transparent p-3 text-velmora-espresso" onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button>
                <span className="min-w-12 text-center text-sm font-semibold text-velmora-espresso">{quantity}</span>
                <button type="button" className="bg-transparent p-3 text-velmora-espresso" onClick={() => setQuantity(quantity + 1)} aria-label="Increase quantity"><Plus className="h-4 w-4" /></button>
              </div>
            </div>

            <Button className="w-full" variant="accent" onClick={addSelectedQuantity}>Add to Cart · {tone}</Button>
          </div>

          <Accordion items={[
            { title: 'Description', content: product.description },
            { title: 'Materials & Care', content: `${product.material}. Hypoallergenic and nickel-safe. ${product.care}` },
            { title: 'Shipping & Returns', content: 'Enjoy free worldwide shipping and 30-day returns on unworn pieces in their original packaging.' },
          ]} />
        </div>
      </section>

      <section className="bg-velmora-ivory py-16 text-velmora-espresso md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-10 flex items-end justify-between border-b border-velmora-mist pb-7">
            <div>
              <p className="text-xs font-semibold uppercase tracking-luxury text-velmora-champagne">Recommended</p>
              <h2 className="mt-3 font-serif text-5xl text-velmora-espresso">You may also like</h2>
            </div>
            <Link to="/shop" className="hidden text-xs font-semibold uppercase tracking-luxury text-velmora-espresso hover:text-velmora-champagne md:block">View all</Link>
          </div>
          <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => <ProductCard key={item.id} product={item} onAdd={onAddToCart} compact />)}
          </div>
        </div>
      </section>
    </main>
  )
}
