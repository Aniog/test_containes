import { useMemo, useRef, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ChevronDown, Minus, Plus } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { useStrkImages } from '@/hooks/useStrkImages'
import ProductImage from '@/components/product/ProductImage'
import ProductCard from '@/components/product/ProductCard'
import StarRating from '@/components/product/StarRating'

const variants = ['Gold Tone', 'Silver Tone']

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find((item) => item.slug === slug)
  const [selectedImage, setSelectedImage] = useState('primary')
  const [variant, setVariant] = useState('Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const [openPanel, setOpenPanel] = useState('Description')
  const containerRef = useRef(null)
  const { addToCart } = useCart()

  const relatedProducts = useMemo(() => products.filter((item) => item.id !== product?.id).slice(0, 4), [product])
  useStrkImages(containerRef, [slug, selectedImage])

  if (!product) return <Navigate to="/shop" replace />

  const gallery = [
    { key: 'primary', imgId: `${product.imgId}-detail`, label: product.name, query: `[${product.descId}] [${product.titleId}]` },
    { key: 'worn', imgId: `${product.hoverImgId}-detail`, label: `${product.name} worn`, query: `[${product.descId}] [${product.titleId}]` },
    { key: 'detail', imgId: `${product.id}-macro-detail-m91v4p`, label: `${product.name} close detail`, query: `[${product.descId}] [${product.titleId}]` },
  ]
  const activeImage = gallery.find((image) => image.key === selectedImage) || gallery[0]

  const accordionContent = {
    Description: product.details,
    'Materials & Care': `${product.material}. ${product.care}`,
    'Shipping & Returns': product.shipping,
  }

  return (
    <main ref={containerRef} className="bg-velmora-cream pt-28 text-velmora-ink">
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-10 md:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:py-16">
        <div className="grid gap-4 lg:grid-cols-[88px_1fr]">
          <div className="order-2 flex gap-3 overflow-x-auto lg:order-1 lg:flex-col lg:overflow-visible">
            {gallery.map((image) => (
              <button key={image.key} type="button" onClick={() => setSelectedImage(image.key)} className={`aspect-square w-20 shrink-0 overflow-hidden border bg-velmora-linen transition ${selectedImage === image.key ? 'border-velmora-ink' : 'border-transparent hover:border-velmora-champagne'}`} aria-label={`View ${image.label}`}>
                <ProductImage imgId={`${image.imgId}-thumb`} query={image.query} ratio="1x1" width="220" alt={image.label} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
          <div className="order-1 aspect-[4/5] overflow-hidden bg-velmora-linen shadow-editorial lg:order-2">
            <ProductImage imgId={activeImage.imgId} query={activeImage.query} ratio="3x4" width="1200" alt={activeImage.label} className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-bronze">{product.category}</p>
          <h1 id={product.titleId} className="mt-4 font-serif text-5xl font-medium uppercase leading-tight tracking-luxury md:text-6xl">{product.name}</h1>
          <div className="mt-5 flex items-center justify-between border-y border-velmora-linen py-4">
            <p className="font-serif text-4xl">${product.price}</p>
            <StarRating rating={product.rating} reviews={product.reviews} />
          </div>
          <p id={product.descId} className="mt-6 text-base leading-8 text-velmora-sage">{product.description}</p>
          <div className="mt-8 space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-velmora-sage">Tone</p>
            <div className="flex flex-wrap gap-3">
              {variants.map((item) => (
                <button key={item} type="button" onClick={() => setVariant(item)} className={`rounded-full border px-5 py-3 text-sm font-semibold transition ${variant === item ? 'border-velmora-ink bg-velmora-ink text-velmora-cream' : 'border-velmora-linen bg-white/45 text-velmora-ink hover:border-velmora-champagne'}`}>{item}</button>
              ))}
            </div>
          </div>
          <div className="mt-7 flex items-center gap-4">
            <div className="flex items-center rounded-full border border-velmora-linen bg-white/45">
              <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="p-4" aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button>
              <span className="w-10 text-center font-semibold">{quantity}</span>
              <button type="button" onClick={() => setQuantity((value) => value + 1)} className="p-4" aria-label="Increase quantity"><Plus className="h-4 w-4" /></button>
            </div>
            <button type="button" onClick={() => addToCart(product, { variant, quantity })} className="flex-1 rounded-full bg-velmora-champagne px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] text-velmora-ink transition hover:bg-velmora-ink hover:text-velmora-cream">Add to Cart</button>
          </div>
          <div className="mt-8 border-t border-velmora-linen">
            {Object.entries(accordionContent).map(([title, content]) => (
              <div key={title} className="border-b border-velmora-linen">
                <button type="button" onClick={() => setOpenPanel(openPanel === title ? '' : title)} className="flex w-full items-center justify-between py-5 text-left font-serif text-2xl text-velmora-ink">
                  {title}
                  <ChevronDown className={`h-5 w-5 transition ${openPanel === title ? 'rotate-180' : ''}`} />
                </button>
                {openPanel === title && <p className="pb-5 text-sm leading-7 text-velmora-sage">{content}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-velmora-linen px-5 py-16 md:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 className="font-serif text-5xl font-medium">You may also like</h2>
            <Link to="/shop" className="hidden border-b border-velmora-champagne pb-1 text-xs font-bold uppercase tracking-[0.2em] text-velmora-ink sm:inline-flex">Shop all</Link>
          </div>
          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((item) => <ProductCard key={item.id} product={item} />)}
          </div>
        </div>
      </section>
    </main>
  )
}
