import { Minus, Plus, Star } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import strkImgConfig from '../../strk-img-config.json'
import { findProduct, products } from '../../data/products.js'
import ProductCard from './ProductCard.jsx'

const productImageUrls = {
  'product-vivid-aura-primary-a9c1': 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1671513511423-4ce382bc94d6',
  'product-vivid-aura-secondary-f4e2': 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1680789527299-dbf53044f48b',
  'product-flora-primary-b2d7': 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1648055477428-749f96c20cab',
  'product-flora-secondary-c8a4': 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1644893748093-fc1aff047db9',
  'product-sphere-primary-e3f9': 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1665932358854-8b581eae036e',
  'product-sphere-secondary-d6b1': 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1608148370938-67e5a308c1bb',
  'product-amber-primary-h7k3': 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1606755612616-e34361faa8a0',
  'product-amber-secondary-p9m2': 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1502723804370-fa1d97a9774e',
  'product-heirloom-primary-r1s5': 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1609252907817-fad418fb02ed',
  'product-heirloom-secondary-t8v6': 'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1666060518856-724686a6587d',
}

const imageUrlFor = (imageId) => {
  const baseImageId = imageId.replace(/-(detail|thumb)$/, '')
  const directUrl = productImageUrls[imageId] || productImageUrls[baseImageId]
  if (directUrl) return directUrl

  const entry = strkImgConfig[imageId] || strkImgConfig[baseImageId]
  const picked = entry?.results?.find((result) => result.id === entry?.picked)
  return picked?.url || entry?.results?.[0]?.url || ''
}

export default function ProductDetailPage({ onAddToCart }) {
  const { productId } = useParams()
  const product = findProduct(productId)
  const [selectedImage, setSelectedImage] = useState('primary')
  const [variant, setVariant] = useState('Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const [openPanel, setOpenPanel] = useState('Description')

  useEffect(() => {
    setSelectedImage('primary')
    setVariant('Gold Tone')
    setQuantity(1)
  }, [product.id])

  const detailTitleId = product.titleId
  const detailDescId = product.descId
  const gallery = useMemo(() => ([
    { id: 'primary', imageId: product.imageId, label: 'Studio view', url: productImageUrls[product.imageId] || imageUrlFor(product.imageId) },
    { id: 'styled', imageId: product.hoverImageId, label: 'Styled view', url: productImageUrls[product.hoverImageId] || imageUrlFor(product.hoverImageId) },
  ]), [product])
  const activeImage = gallery.find((item) => item.id === selectedImage) || gallery[0]
  const related = products.filter((item) => item.id !== product.id).slice(0, 4)

  return (
    <main className="bg-velmora-ivory pt-28 text-velmora-espresso">
      <section className="px-5 pb-16 pt-8 sm:px-8 lg:px-10 lg:pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="grid gap-4 lg:grid-cols-[5rem_1fr]">
            <div className="order-2 flex gap-3 lg:order-1 lg:flex-col">
              {gallery.map((image) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setSelectedImage(image.id)}
                  style={{ backgroundImage: image.url ? `url(${image.url})` : undefined, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  className={`aspect-square flex-1 overflow-hidden border bg-velmora-sand transition lg:flex-none ${selectedImage === image.id ? 'border-velmora-champagne' : 'border-velmora-espresso/10 hover:border-velmora-champagne'}`}
                  aria-label={image.label}
                >
                  <img src={image.url} alt={`${product.name} ${image.label}`} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
            <div
              style={{ backgroundImage: activeImage.url ? `url(${activeImage.url})` : undefined, backgroundSize: 'cover', backgroundPosition: 'center' }}
              className="order-1 aspect-[4/5] overflow-hidden bg-velmora-sand shadow-velmoraSoft lg:order-2"
            >
              <img src={activeImage.url} alt={product.name} className="h-full w-full object-cover" />
            </div>
          </div>

          <div className="lg:pl-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-velmora-taupe">{product.category}</p>
            <h1 id={detailTitleId} className="font-serifDisplay text-5xl font-semibold uppercase leading-tight tracking-[0.16em] text-velmora-espresso sm:text-6xl">{product.name}</h1>
            <div className="mt-5 flex flex-wrap items-center gap-4 text-velmora-espresso">
              <p className="text-2xl font-semibold">${product.price}</p>
              <div className="flex items-center gap-2 text-sm text-velmora-taupe">
                <span className="flex text-velmora-champagne" aria-label={`${product.rating} stars`}>
                  {Array.from({ length: 5 }).map((_, index) => <Star key={index} size={15} fill="currentColor" />)}
                </span>
                {product.rating} ({product.reviews} reviews)
              </div>
            </div>
            <p id={detailDescId} className="mt-6 text-base leading-8 text-velmora-taupe">{product.description}</p>

            <div className="mt-8 space-y-6 border-y border-velmora-espresso/10 py-6">
              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-velmora-taupe">Tone</p>
                <div className="flex gap-3">
                  {['Gold Tone', 'Silver Tone'].map((tone) => (
                    <button key={tone} type="button" onClick={() => setVariant(tone)} className={`rounded-full border px-5 py-3 text-sm font-semibold transition ${variant === tone ? 'border-velmora-champagne bg-velmora-champagne text-velmora-espresso' : 'border-velmora-espresso/15 text-velmora-espresso hover:border-velmora-champagne'}`}>
                      {tone}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-velmora-taupe">Quantity</p>
                <div className="inline-flex items-center border border-velmora-espresso/15 text-velmora-espresso">
                  <button type="button" onClick={() => setQuantity((current) => Math.max(1, current - 1))} className="flex h-12 w-12 items-center justify-center transition hover:bg-velmora-sand" aria-label="Decrease quantity"><Minus size={15} /></button>
                  <span className="min-w-12 text-center font-semibold">{quantity}</span>
                  <button type="button" onClick={() => setQuantity((current) => current + 1)} className="flex h-12 w-12 items-center justify-center transition hover:bg-velmora-sand" aria-label="Increase quantity"><Plus size={15} /></button>
                </div>
              </div>
            </div>

            <button type="button" onClick={() => onAddToCart(product, quantity, variant)} className="mt-6 w-full bg-velmora-champagne px-6 py-5 text-sm font-bold uppercase tracking-[0.24em] text-velmora-espresso transition hover:bg-velmora-espresso hover:text-velmora-ivory">
              Add to Cart
            </button>

            <div className="mt-8 border-t border-velmora-espresso/10">
              {[
                ['Description', product.detail],
                ['Materials & Care', `${product.material}. ${product.care}`],
                ['Shipping & Returns', 'Free worldwide shipping on every order, with 30-day returns on unworn pieces in original packaging.'],
              ].map(([title, content]) => (
                <div key={title} className="border-b border-velmora-espresso/10">
                  <button type="button" onClick={() => setOpenPanel((current) => current === title ? '' : title)} className="flex w-full items-center justify-between py-5 text-left text-xs font-bold uppercase tracking-[0.24em] text-velmora-espresso">
                    {title}
                    <span className="text-xl text-velmora-champagne">{openPanel === title ? '−' : '+'}</span>
                  </button>
                  {openPanel === title && <p className="pb-5 text-sm leading-7 text-velmora-taupe">{content}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-velmora-sand px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 flex items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-velmora-taupe">Complete the ritual</p>
              <h2 className="font-serifDisplay text-4xl font-semibold text-velmora-espresso sm:text-5xl">You may also like</h2>
            </div>
            <Link to="/shop" className="hidden text-xs font-bold uppercase tracking-[0.22em] text-velmora-espresso transition hover:text-velmora-champagne sm:block">View all</Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((item) => <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} compact />)}
          </div>
        </div>
      </section>
    </main>
  )
}
