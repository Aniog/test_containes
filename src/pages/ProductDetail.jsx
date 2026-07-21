import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Minus, Plus } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import { formatPrice, getProductById, products } from '@/data/products'
import { useCart } from '@/components/cart/CartContext'
import AccordionItem from '@/components/ui/AccordionItem'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'
import RatingStars from '@/components/ui/RatingStars'
import ProductCard from '@/components/product/ProductCard'
import strkImgConfig from '@/strk-img-config.json'

const tones = ['Gold', 'Silver']

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedTone, setSelectedTone] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [openSection, setOpenSection] = useState('description')
  const { addToCart } = useCart()
  const pageRef = useRef(null)

  useEffect(() => {
    if (!product) return undefined

    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [product, selectedImage])

  const relatedProducts = useMemo(() => {
    if (!product) return []
    return product.related.map((relatedId) => getProductById(relatedId)).filter(Boolean)
  }, [product])

  if (!product) return <Navigate to="/shop" replace />

  const gallery = product.galleryIds.map((galleryId, index) => ({
    id: galleryId,
    labelId: `${product.id}-gallery-${index + 1}-label`,
    label: `${product.name} detail ${index + 1}`,
  }))

  const handleAdd = () => addToCart(product, { quantity, tone: selectedTone })

  return (
    <main ref={pageRef} className="bg-velmora-cream px-5 pb-16 pt-28 text-velmora-obsidian md:px-10 md:pb-24 md:pt-32">
      <div className="mx-auto max-w-7xl">
        <Link to="/shop" className="font-sansBody text-xs font-bold uppercase tracking-nav text-velmora-muted transition hover:text-velmora-bronze">
          Back to shop
        </Link>

        <section className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="grid gap-4 md:grid-cols-[88px_1fr]">
            <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col md:overflow-visible">
              {gallery.map((image, index) => (
                <button
                  key={image.id}
                  type="button"
                  className={`shrink-0 overflow-hidden rounded-2xl border bg-velmora-parchment transition ${selectedImage === index ? 'border-velmora-gold' : 'border-velmora-espresso/10'}`}
                  onClick={() => setSelectedImage(index)}
                  aria-label={`Show ${image.label}`}
                >
                  <ImagePlaceholder
                    alt={image.label}
                    className="h-20 w-20 object-cover"
                    imgId={`${image.id}-thumb`}
                    query={`[${product.descId}] [${product.titleId}]`}
                    ratio="1x1"
                    width="220"
                  />
                </button>
              ))}
            </div>

            <div className="order-1 overflow-hidden rounded-[2rem] bg-velmora-parchment shadow-editorial md:order-2">
              <p id={gallery[selectedImage].labelId} className="sr-only">{gallery[selectedImage].label}</p>
              <ImagePlaceholder
                alt={gallery[selectedImage].label}
                className="aspect-[4/5] w-full object-cover"
                imgId={gallery[selectedImage].id}
                query={`[${product.descId}] [${product.titleId}] [${gallery[selectedImage].labelId}]`}
                ratio="3x4"
                width="1100"
              />
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-sansBody text-xs font-bold uppercase tracking-nav text-velmora-gold">Velmora Fine Jewelry</p>
            <h1 id={product.titleId} className="mt-4 font-serifDisplay text-5xl font-semibold uppercase leading-none tracking-product text-velmora-obsidian md:text-7xl">
              {product.name}
            </h1>
            <div className="mt-5 flex items-center justify-between border-b border-velmora-espresso/10 pb-5">
              <p className="font-sansBody text-lg font-semibold text-velmora-obsidian">{formatPrice(product.price)}</p>
              <RatingStars />
            </div>
            <p id={product.descId} className="mt-6 font-sansBody text-base leading-8 text-velmora-muted">
              {product.description}
            </p>

            <div className="mt-8">
              <p className="mb-3 font-sansBody text-xs font-bold uppercase tracking-nav text-velmora-muted">Tone</p>
              <div className="flex flex-wrap gap-3">
                {tones.map((tone) => (
                  <button
                    key={tone}
                    type="button"
                    className={`rounded-full border px-5 py-3 font-sansBody text-xs font-bold uppercase tracking-nav transition ${selectedTone === tone ? 'border-velmora-gold bg-velmora-gold text-velmora-obsidian' : 'border-velmora-espresso/15 bg-velmora-silk text-velmora-obsidian hover:border-velmora-gold'}`}
                    onClick={() => setSelectedTone(tone)}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center rounded-full border border-velmora-espresso/10 bg-velmora-silk text-velmora-obsidian">
                <button type="button" className="p-4" onClick={() => setQuantity((value) => Math.max(1, value - 1))} aria-label="Decrease quantity">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="min-w-10 text-center font-sansBody text-sm font-semibold">{quantity}</span>
                <button type="button" className="p-4" onClick={() => setQuantity((value) => value + 1)} aria-label="Increase quantity">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button
                type="button"
                className="min-h-14 flex-1 rounded-full bg-velmora-obsidian px-6 py-4 font-sansBody text-xs font-extrabold uppercase tracking-nav text-velmora-cream shadow-softGold transition hover:bg-velmora-gold hover:text-velmora-obsidian"
                onClick={handleAdd}
              >
                Add to Cart
              </button>
            </div>

            <div className="mt-8 rounded-[1.5rem] bg-velmora-silk px-6 text-velmora-obsidian shadow-editorial">
              <AccordionItem title="Description" open={openSection === 'description'} onToggle={() => setOpenSection(openSection === 'description' ? '' : 'description')}>
                {product.details}
              </AccordionItem>
              <AccordionItem title="Materials & Care" open={openSection === 'care'} onToggle={() => setOpenSection(openSection === 'care' ? '' : 'care')}>
                {product.care}
              </AccordionItem>
              <AccordionItem title="Shipping & Returns" open={openSection === 'shipping'} onToggle={() => setOpenSection(openSection === 'shipping' ? '' : 'shipping')}>
                Free worldwide shipping on orders over $75. Every piece includes 30-day returns and a complimentary soft pouch.
              </AccordionItem>
            </div>
          </aside>
        </section>

        <section className="mt-20 border-t border-velmora-espresso/10 pt-12 md:mt-28">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="font-sansBody text-xs font-bold uppercase tracking-nav text-velmora-gold">Complete the ritual</p>
              <h2 className="mt-3 font-serifDisplay text-5xl leading-none">You may also like</h2>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((related) => (
              <ProductCard key={related.id} product={related} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
