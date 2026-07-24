import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import ProductCard from '@/components/storefront/ProductCard.jsx'
import AccordionItem from '@/components/storefront/AccordionItem.jsx'
import ImageTag from '@/components/ui/ImageTag.jsx'
import Stars from '@/components/ui/Stars.jsx'
import { useCart } from '@/context/CartContext.jsx'
import { products } from '@/data/products.js'

export default function ProductDetail() {
  const { slug } = useParams()
  const containerRef = useRef(null)
  const { addItem } = useCart()
  const product = products.find((item) => item.slug === slug) || products[0]
  const relatedProducts = useMemo(
    () => products.filter((item) => item.id !== product.id).slice(0, 3),
    [product.id],
  )
  const [selectedTone, setSelectedTone] = useState(product.tones[0])
  const [quantity, setQuantity] = useState(1)
  const [activeGallery, setActiveGallery] = useState(product.gallery[0])
  const [openSection, setOpenSection] = useState('Description')

  useEffect(() => {
    setSelectedTone(product.tones[0])
    setQuantity(1)
    setActiveGallery(product.gallery[0])
    setOpenSection('Description')
  }, [product])

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })

    return () => window.cancelAnimationFrame(frame)
  }, [product, activeGallery])

  const sections = [
    { title: 'Description', content: product.details },
    { title: 'Materials & Care', content: product.care },
    { title: 'Shipping & Returns', content: product.shipping },
  ]

  return (
    <main ref={containerRef} className="bg-[#f6f0ea] pt-20 text-[#241d1f]">
      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8 lg:px-12 lg:py-14">
        <Link
          to="/shop"
          className="text-xs uppercase tracking-[0.3em] text-[#8a6c5d] transition hover:text-[#b78b54]"
        >
          Back to Shop
        </Link>

        <section className="mt-6 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-[2.25rem] border border-[#e5d5c8] bg-white/75 p-4 shadow-[0_16px_40px_rgba(36,29,31,0.06)]">
              <ImageTag
                alt={product.name}
                imgId={activeGallery.imgId}
                query={`[product-detail-description] [product-detail-title] [product-detail-category]`}
                ratio="4x3"
                width="1200"
                className="aspect-[4/3] w-full rounded-[1.8rem] object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.gallery.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveGallery(item)}
                  className={`overflow-hidden rounded-[1.5rem] border p-2 transition ${
                    activeGallery.id === item.id
                      ? 'border-[#b78b54] bg-[#efe3d6]'
                      : 'border-[#e5d5c8] bg-white/70'
                  }`}
                >
                  <ImageTag
                    alt={item.angle}
                    imgId={item.imgId}
                    query={`[thumb-${item.id}] [product-detail-title]`}
                    ratio="1x1"
                    width="300"
                    className="aspect-square w-full rounded-[1.1rem] object-cover"
                  />
                  <p
                    id={`thumb-${item.id}`}
                    className="px-2 pb-2 pt-3 text-center text-[11px] uppercase tracking-[0.24em] text-[#6d5a57]"
                  >
                    {item.angle}
                  </p>
                </button>
              ))}
            </div>
          </div>

          <div className="lg:pt-6">
            <p id="product-detail-category" className="text-xs uppercase tracking-[0.3em] text-[#8a6c5d]">
              {product.category}
            </p>
            <h1
              id="product-detail-title"
              className="mt-4 font-['Cormorant_Garamond'] text-4xl uppercase tracking-[0.24em] text-[#241d1f] md:text-5xl"
            >
              {product.name}
            </h1>
            <div className="mt-5 flex items-center justify-between gap-4">
              <Stars rating={product.rating} reviews={product.reviews} />
              <p className="text-2xl font-semibold text-[#241d1f]">${product.price}</p>
            </div>
            <p id="product-detail-description" className="mt-6 max-w-xl text-base leading-8 text-[#5a4745]">
              {product.description}
            </p>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.3em] text-[#6d5a57]">Tone</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {product.tones.map((tone) => (
                  <button
                    key={tone}
                    type="button"
                    onClick={() => setSelectedTone(tone)}
                    className={`rounded-full border px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] transition ${
                      selectedTone === tone
                        ? 'border-[#b78b54] bg-[#efe3d6] text-[#241d1f]'
                        : 'border-[#d9c7b7] bg-transparent text-[#6d5a57] hover:border-[#b78b54] hover:text-[#b78b54]'
                    }`}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center rounded-full border border-[#d9c7b7] bg-white/75">
                <button
                  type="button"
                  onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                  className="px-4 py-3 text-[#241d1f]"
                >
                  −
                </button>
                <span className="min-w-12 text-center text-sm text-[#241d1f]">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((current) => current + 1)}
                  className="px-4 py-3 text-[#241d1f]"
                >
                  +
                </button>
              </div>
              <button
                type="button"
                onClick={() => addItem(product, selectedTone, quantity)}
                className="flex-1 rounded-full bg-[#b78b54] px-6 py-4 text-xs font-semibold uppercase tracking-[0.32em] text-[#221c1f] transition hover:bg-[#c99a5f]"
              >
                Add to Cart
              </button>
            </div>

            <div className="mt-10">
              {sections.map((section) => (
                <AccordionItem
                  key={section.title}
                  title={section.title}
                  content={section.content}
                  open={openSection === section.title}
                  onToggle={() =>
                    setOpenSection((current) =>
                      current === section.title ? '' : section.title,
                    )
                  }
                />
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 space-y-8 border-t border-[#d9c7b7] pt-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#8a6c5d]">You may also like</p>
            <h2 className="mt-3 font-['Cormorant_Garamond'] text-4xl text-[#241d1f] md:text-5xl">
              Pair it with another Velmora favorite
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
