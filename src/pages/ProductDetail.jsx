import { Minus, Plus, ShoppingBag } from 'lucide-react'
import { useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import EditorialImage from '@/components/common/EditorialImage'
import Rating from '@/components/common/Rating'
import ProductAccordion from '@/components/product/ProductAccordion'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'
import { useImageLoader } from '@/hooks/useImageLoader'

const tones = ['Gold', 'Silver']

const ProductDetail = ({ onAdd }) => {
  const { id } = useParams()
  const product = products.find((item) => item.id === id) || products[0]
  const [activeImage, setActiveImage] = useState(0)
  const [tone, setTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const pageRef = useRef(null)
  const related = products.filter((item) => item.id !== product.id).slice(0, 4)

  useImageLoader(pageRef, [product.id, activeImage])

  const titleId = `detail-${product.id}-title`
  const descId = `detail-${product.id}-desc`
  const imageIds = ['hero', 'styled', 'macro']
  const imageQuery = `[${descId}] [${titleId}] [detail-page-context]`

  const handleAdd = () => onAdd(product, tone, quantity)

  return (
    <main ref={pageRef} className="bg-velmora-ivory pt-24 text-velmora-ink">
      <p id="detail-page-context" className="sr-only">Warm editorial demi-fine gold jewelry product photography on neutral backgrounds</p>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-10 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
        <div className="grid gap-4 lg:grid-cols-[5rem_1fr]">
          <div className="order-2 flex gap-3 lg:order-1 lg:flex-col">
            {imageIds.map((imageId, index) => (
              <button
                key={imageId}
                className={`overflow-hidden rounded-2xl border bg-velmora-champagne p-0 transition ${activeImage === index ? 'border-velmora-gold' : 'border-velmora-line hover:border-velmora-gold'}`}
                onClick={() => setActiveImage(index)}
                aria-label={`View ${product.name} image ${index + 1}`}
              >
                <EditorialImage
                  id={`thumb-${product.id}-${imageId}-e91${index}`}
                  query={imageQuery}
                  ratio="1x1"
                  width="180"
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className="h-20 w-20"
                />
              </button>
            ))}
          </div>
          <div className="order-1 overflow-hidden rounded-t-full bg-velmora-champagne shadow-editorial lg:order-2">
            <EditorialImage
              id={`detail-${product.id}-${imageIds[activeImage]}-f64c`}
              query={imageQuery}
              ratio="3x4"
              width="1100"
              alt={product.name}
              className="aspect-[3/4] rounded-t-full"
              imgClassName="hover:scale-105"
            />
          </div>
        </div>

        <aside className="lg:pl-8">
          <Link to="/shop" className="font-sans text-xs font-bold uppercase tracking-[0.24em] text-velmora-gold-deep hover:text-velmora-espresso">Shop / {product.category}</Link>
          <h1 id={titleId} className="mt-5 font-serif text-5xl font-semibold uppercase leading-tight tracking-[0.14em] text-velmora-ink md:text-6xl">
            {product.name}
          </h1>
          <div className="mt-5 flex items-center justify-between gap-6 border-b border-velmora-line pb-6">
            <p className="font-sans text-2xl font-semibold text-velmora-ink">${product.price}</p>
            <Rating value={product.rating} count={product.reviews} />
          </div>
          <p id={descId} className="mt-7 font-sans text-base leading-8 text-velmora-taupe">{product.detail}</p>

          <div className="mt-8">
            <p className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.24em] text-velmora-taupe">Tone</p>
            <div className="flex gap-3">
              {tones.map((option) => (
                <button key={option} className={`rounded-full border px-5 py-3 font-sans text-xs font-bold uppercase tracking-[0.2em] transition ${tone === option ? 'border-velmora-gold bg-velmora-gold text-velmora-espresso' : 'border-velmora-line bg-transparent text-velmora-ink hover:border-velmora-gold'}`} onClick={() => setTone(option)}>
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-7 flex items-center gap-4">
            <div className="inline-flex items-center rounded-full border border-velmora-line bg-velmora-mist text-velmora-ink">
              <button className="bg-transparent p-3 text-velmora-ink hover:text-velmora-gold-deep" onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button>
              <span className="min-w-12 text-center font-sans text-sm font-semibold">{quantity}</span>
              <button className="bg-transparent p-3 text-velmora-ink hover:text-velmora-gold-deep" onClick={() => setQuantity(quantity + 1)} aria-label="Increase quantity"><Plus className="h-4 w-4" /></button>
            </div>
            <button className="flex min-h-14 flex-1 items-center justify-center gap-2 rounded-full bg-velmora-gold px-6 py-4 font-sans text-xs font-extrabold uppercase tracking-[0.24em] text-velmora-espresso shadow-glow transition hover:bg-velmora-gold-deep hover:text-velmora-ivory" onClick={handleAdd}>
              <ShoppingBag className="h-4 w-4" /> Add to Cart
            </button>
          </div>

          <ProductAccordion sections={[
            { title: 'Description', content: product.detail },
            { title: 'Materials & Care', content: product.care },
            { title: 'Shipping & Returns', content: product.shipping },
          ]} />
        </aside>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:py-24">
        <div className="mb-10 border-b border-velmora-line pb-6">
          <p className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-velmora-gold-deep">Complete the ritual</p>
          <h2 id="related-title" className="mt-3 font-serif text-5xl font-semibold text-velmora-ink">You may also like</h2>
          <p id="related-subtitle" className="mt-3 max-w-xl font-sans text-sm leading-7 text-velmora-taupe">More warm gold pieces selected to layer with your current favorite.</p>
        </div>
        <div className="grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => (
            <ProductCard key={item.id} product={item} onAdd={onAdd} contextId="related" />
          ))}
        </div>
      </section>
    </main>
  )
}

export default ProductDetail
