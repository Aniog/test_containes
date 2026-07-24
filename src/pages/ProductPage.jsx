import { useEffect, useMemo, useRef, useState } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { Link, useParams } from 'react-router-dom'
import { ChevronLeft } from 'lucide-react'
import strkImgConfig from '@/strk-img-config.json'
import { getProductBySlug, products, formatPrice } from '@/data/storeData'
import { useCart } from '@/context/CartContext'
import AccordionItem from '@/components/storefront/AccordionItem'
import ProductCard from '@/components/storefront/ProductCard'
import QuantitySelector from '@/components/storefront/QuantitySelector'
import RatingStars from '@/components/storefront/RatingStars'

const ProductPage = () => {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const { addToCart } = useCart()
  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0] || 'Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [openSection, setOpenSection] = useState('Description')
  const containerRef = useRef(null)

  useEffect(() => {
    let cleanup = () => {}

    const frameId = window.requestAnimationFrame(() => {
      const result = ImageHelper.loadImages(strkImgConfig, containerRef.current)
      cleanup = typeof result === 'function' ? result : () => {}
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [slug, selectedVariant, activeImage, openSection])

  useEffect(() => {
    if (!product) return
    setSelectedVariant(product.variants[0])
    setQuantity(1)
    setActiveImage(0)
    setOpenSection('Description')
  }, [product])

  const galleryItems = useMemo(() => {
    if (!product) return []

    return [
      { id: `${product.slug}-gallery-0`, cue: product.imageDescriptors.primary },
      { id: `${product.slug}-gallery-1`, cue: product.imageDescriptors.secondary },
      ...product.imageDescriptors.gallery.map((cue, index) => ({
        id: `${product.slug}-gallery-${index + 2}`,
        cue,
      })),
    ]
  }, [product])

  if (!product) {
    return (
      <section className="velmora-shell py-32">
        <p className="text-sm uppercase tracking-widest text-velmora-smoke">
          Product not found.
        </p>
      </section>
    )
  }

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: product.materials },
    { title: 'Shipping & Returns', content: product.shipping },
  ]

  const relatedProducts = products.filter((entry) => entry.slug !== product.slug).slice(0, 4)

  return (
    <div ref={containerRef} className="velmora-shell py-28 sm:py-32">
      <Link
        to="/shop"
        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-velmora-smoke transition hover:text-velmora-ink"
      >
        <ChevronLeft className="h-4 w-4" />
        Back to Shop
      </Link>

      <section className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-[2rem] border border-velmora-sand bg-velmora-card shadow-velmora">
            {galleryItems.map((item, index) => (
              <div key={item.id} className={index === activeImage ? 'block' : 'hidden'}>
                <p id={`${item.id}-cue`} className="sr-only">
                  {item.cue}
                </p>
                <img
                  src=""
                  alt={product.name}
                  className="aspect-[4/5] w-full object-cover"
                  data-strk-img-id={item.id}
                  data-strk-img={`[${item.id}-cue] [product-page-${product.slug}-desc] [product-page-${product.slug}-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="1200"
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-4 gap-3">
            {galleryItems.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveImage(index)}
                className={`overflow-hidden rounded-[1.5rem] border bg-velmora-card ${
                  activeImage === index ? 'border-velmora-gold' : 'border-velmora-sand'
                }`}
              >
                <img
                  src=""
                  alt={`${product.name} thumbnail ${index + 1}`}
                  className="aspect-square w-full object-cover"
                  data-strk-img-id={`${item.id}-thumb`}
                  data-strk-img={`[${item.id}-cue] [product-page-${product.slug}-title]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="360"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-velmora-sand bg-velmora-card p-6 text-velmora-ink shadow-velmora sm:p-8">
          <p className="text-xs uppercase tracking-luxe text-velmora-gold">{product.category}</p>
          <h1
            id={`product-page-${product.slug}-title`}
            className="mt-4 font-display text-5xl uppercase tracking-luxe text-velmora-ink"
          >
            {product.name}
          </h1>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <p className="text-2xl font-medium text-velmora-ink">{formatPrice(product.price)}</p>
            <RatingStars rating={product.rating} reviews={product.reviews} />
          </div>
          <p id={`product-page-${product.slug}-desc`} className="mt-5 text-base leading-7 text-velmora-smoke">
            {product.shortDescription}
          </p>

          <div className="mt-8">
            <p className="text-xs uppercase tracking-widest text-velmora-smoke">Variant</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {product.variants.map((variant) => (
                <button
                  key={variant}
                  type="button"
                  onClick={() => setSelectedVariant(variant)}
                  className={`rounded-full border px-5 py-3 text-xs uppercase tracking-widest transition ${
                    selectedVariant === variant
                      ? 'border-velmora-gold bg-velmora-gold text-velmora-ink'
                      : 'border-velmora-sand bg-velmora-ivory text-velmora-smoke hover:text-velmora-ink'
                  }`}
                >
                  {variant}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <QuantitySelector value={quantity} onChange={setQuantity} />
          </div>

          <button
            type="button"
            className="mt-8 w-full velmora-button-dark"
            onClick={() => addToCart(product, selectedVariant, quantity)}
          >
            Add to Cart
          </button>

          <div className="mt-10 border-t border-velmora-sand">
            {accordionItems.map((item) => (
              <AccordionItem
                key={item.title}
                title={item.title}
                content={item.content}
                isOpen={openSection === item.title}
                onToggle={() =>
                  setOpenSection((current) =>
                    current === item.title ? '' : item.title,
                  )
                }
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16 space-y-8 sm:mt-20">
        <div>
          <p className="text-xs uppercase tracking-luxe text-velmora-gold">You may also like</p>
          <h2 className="mt-4 font-display text-5xl text-velmora-ink">Complete the Velmora edit</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {relatedProducts.map((item) => (
            <ProductCard key={item.id} product={item} onAddToCart={addToCart} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductPage
