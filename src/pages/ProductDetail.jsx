import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import { ChevronDown, Minus, Plus, Star } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'
import { getProductById, products } from '@/data/products'
import Button from '@/components/ui/Button'
import ProductCard from '@/components/product/ProductCard'

const sections = ['Description', 'Materials & Care', 'Shipping & Returns']

export default function ProductDetail({ onAddToCart }) {
  const { id } = useParams()
  const product = getProductById(id)
  const [selectedImage, setSelectedImage] = useState(0)
  const [variant, setVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [openSection, setOpenSection] = useState('Description')
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [id, selectedImage])

  const gallery = [
    { id: `${product.id}-detail-hero`, label: product.name, ratio: '4x3' },
    { id: `${product.id}-detail-model`, label: `${product.name} worn`, ratio: '3x4' },
    { id: `${product.id}-detail-close`, label: `${product.name} close detail`, ratio: '1x1' },
  ]

  const sectionText = {
    Description: product.detail,
    'Materials & Care': `${product.material}. ${product.care}`,
    'Shipping & Returns': product.shipping,
  }

  const related = products.filter((item) => item.id !== product.id).slice(0, 4)

  return (
    <main ref={containerRef} className="bg-velmora-cream px-5 pb-20 pt-28 text-velmora-ink md:px-8 lg:pt-32">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <section>
          <div className="overflow-hidden bg-velmora-parchment shadow-glow">
            <img
              key={gallery[selectedImage].id}
              alt={gallery[selectedImage].label}
              className="aspect-[4/5] w-full object-cover md:aspect-[5/6]"
              data-strk-img-id={`gallery-main-${gallery[selectedImage].id}`}
              data-strk-img={`[${product.descId}] [${product.titleId}]`}
              data-strk-img-ratio="3x4"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            {gallery.map((image, index) => (
              <button key={image.id} type="button" className={`overflow-hidden border bg-velmora-parchment transition ${selectedImage === index ? 'border-velmora-brass' : 'border-velmora-ink/10 hover:border-velmora-brass/50'}`} onClick={() => setSelectedImage(index)}>
                <img
                  alt={image.label}
                  className="aspect-square w-full object-cover"
                  data-strk-img-id={`gallery-thumb-${image.id}`}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </button>
            ))}
          </div>
        </section>

        <section className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-velmora-brass">{product.category}</p>
          <h1 id={product.titleId} className="mt-4 font-serif text-5xl font-semibold uppercase leading-tight tracking-luxe text-velmora-ink md:text-6xl">
            {product.name}
          </h1>
          <div className="mt-5 flex items-center justify-between border-b border-velmora-ink/10 pb-5">
            <p className="text-2xl font-bold text-velmora-ink">${product.price}</p>
            <div className="flex items-center gap-2 text-sm text-velmora-ink/70">
              <span className="flex gap-0.5 text-velmora-champagne">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}</span>
              {product.rating} · {product.reviews} reviews
            </div>
          </div>
          <p id={product.descId} className="mt-6 text-base leading-8 text-velmora-ink/72">{product.description}</p>

          <div className="mt-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-velmora-brass">Tone</p>
            <div className="flex gap-3">
              {['Gold', 'Silver'].map((tone) => (
                <button key={tone} type="button" className={`rounded-full border px-5 py-2 text-sm font-bold transition ${variant === tone ? 'border-velmora-brass bg-velmora-champagne text-velmora-ink' : 'border-velmora-ink/15 bg-velmora-mist text-velmora-ink hover:border-velmora-brass'}`} onClick={() => setVariant(tone)}>
                  {tone}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-7 flex items-center justify-between gap-5">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-velmora-brass">Quantity</p>
              <div className="flex items-center rounded-full border border-velmora-ink/15 bg-velmora-mist">
                <button className="p-3 text-velmora-ink" type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button>
                <span className="min-w-10 text-center font-bold text-velmora-ink">{quantity}</span>
                <button className="p-3 text-velmora-ink" type="button" onClick={() => setQuantity(quantity + 1)} aria-label="Increase quantity"><Plus className="h-4 w-4" /></button>
              </div>
            </div>
          </div>

          <Button className="mt-8 w-full" type="button" onClick={() => onAddToCart(product, quantity, variant)}>
            Add to Cart
          </Button>

          <div className="mt-8 border-t border-velmora-ink/10">
            {sections.map((section) => (
              <div key={section} className="border-b border-velmora-ink/10">
                <button className="flex w-full items-center justify-between py-5 text-left text-xs font-bold uppercase tracking-[0.2em] text-velmora-ink" type="button" onClick={() => setOpenSection(openSection === section ? '' : section)}>
                  {section}
                  <ChevronDown className={`h-4 w-4 transition ${openSection === section ? 'rotate-180' : ''}`} />
                </button>
                {openSection === section && <p className="pb-5 text-sm leading-7 text-velmora-ink/70">{sectionText[section]}</p>}
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="mx-auto mt-20 max-w-7xl">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-serif text-4xl font-semibold text-velmora-ink md:text-5xl">You may also like</h2>
          <p className="hidden text-sm text-velmora-ink/65 md:block">More pieces with the same quiet shine.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} compact />)}
        </div>
      </section>
    </main>
  )
}
