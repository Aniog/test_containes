import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import AccordionItem from '@/components/storefront/AccordionItem'
import ProductCard from '@/components/storefront/ProductCard.jsx'
import QuantityControl from '@/components/storefront/QuantityControl'
import RatingStars from '@/components/storefront/RatingStars'
import { products } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'
import { formatCurrency } from '@/lib/storefront'

const ProductDetail = ({ onAddToCart }) => {
  const { slug } = useParams()
  const product = products.find((entry) => entry.slug === slug)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedVariant, setSelectedVariant] = useState(product?.colors[0] ?? 'Gold')
  const [quantity, setQuantity] = useState(1)
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
  }, [slug, selectedImage])

  const relatedProducts = useMemo(() => {
    if (!product) return []
    return products.filter((entry) => entry.id !== product.id).slice(0, 3)
  }, [product])

  useEffect(() => {
    if (!product) return
    setSelectedImage(0)
    setSelectedVariant(product.colors[0] ?? 'Gold')
    setQuantity(1)
  }, [product])

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-parchment px-4 text-center text-obsidian">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-taupe">Product not found</p>
          <h1 className="mt-4 font-serif text-4xl">This piece is no longer available.</h1>
          <Link to="/shop" className="mt-8 inline-flex rounded-full bg-obsidian px-6 py-4 text-xs uppercase tracking-[0.24em] text-ivory">
            Return to shop
          </Link>
        </div>
      </div>
    )
  }

  const activeImage = product.images[selectedImage]

  return (
    <div ref={containerRef} className="bg-parchment text-obsidian">
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.26em] text-taupe transition hover:text-obsidian"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to shop
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div>
            <div className="overflow-hidden rounded-[2rem] bg-ivory shadow-[0_24px_70px_rgba(33,24,22,0.10)]">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={activeImage.alt}
                data-strk-img-id={activeImage.id}
                data-strk-img={`[${activeImage.descId}] [${activeImage.titleId}] [${product.heroDescId}] [${product.heroTitleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="1300"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setSelectedImage(index)}
                  className={`overflow-hidden rounded-[1.3rem] border bg-ivory ${selectedImage === index ? 'border-obsidian' : 'border-sand/70'}`}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={image.alt}
                    data-strk-img-id={`${image.id}-thumb`}
                    data-strk-img={`[${image.descId}] [${image.titleId}] [${product.heroDescId}] [${product.heroTitleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="420"
                    className="aspect-[4/4] w-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-sand/70 bg-ivory p-6 shadow-[0_20px_60px_rgba(33,24,22,0.08)] sm:p-8 lg:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-taupe">{product.category}</p>
            <h1 id={product.heroTitleId} className="mt-4 font-serif text-4xl tracking-[0.24em] text-obsidian sm:text-5xl">
              {product.name}
            </h1>
            <p id={product.heroDescId} className="sr-only">
              {product.shortDescription}
            </p>
            {product.images.map((image) => (
              <div key={`${image.id}-meta`} className="sr-only">
                <p id={image.titleId}>{product.name}</p>
                <p id={image.descId}>{image.alt}</p>
              </div>
            ))}

            <div className="mt-5 flex items-center gap-4">
              <p className="text-2xl text-obsidian">{formatCurrency(product.price)}</p>
              <RatingStars rating={product.rating} reviews={product.reviews} />
            </div>

            <p className="mt-6 text-base leading-8 text-taupe">{product.description}</p>

            <div className="mt-8">
              <p className="text-xs uppercase tracking-[0.26em] text-taupe">Select finish</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    onClick={() => setSelectedVariant(color)}
                    className={`rounded-full border px-5 py-3 text-xs uppercase tracking-[0.22em] transition ${selectedVariant === color ? 'border-obsidian bg-obsidian text-ivory' : 'border-sand bg-transparent text-obsidian hover:bg-mist'}`}
                  >
                    {color} Tone
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between gap-4 rounded-[1.6rem] bg-parchment p-4">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-taupe">Quantity</p>
                <p className="mt-1 text-sm text-obsidian">Curate your bag</p>
              </div>
              <QuantityControl value={quantity} onChange={setQuantity} />
            </div>

            <button
              type="button"
              onClick={() => onAddToCart(product, selectedVariant, quantity)}
              className="mt-8 w-full rounded-full bg-obsidian px-6 py-5 text-xs uppercase tracking-[0.3em] text-ivory transition hover:bg-espresso"
            >
              Add to Cart
            </button>

            <div className="mt-8 grid gap-3 border-t border-sand/80 pt-6 sm:grid-cols-3">
              {product.trust.map((item) => (
                <div key={item} className="rounded-full border border-sand/70 px-4 py-3 text-center text-[0.65rem] uppercase tracking-[0.24em] text-taupe">
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10">
              <AccordionItem title="Description" defaultOpen>
                {product.details.description}
              </AccordionItem>
              <AccordionItem title="Materials & Care">{product.details.materials}</AccordionItem>
              <AccordionItem title="Shipping & Returns">{product.details.shipping}</AccordionItem>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-sand/70 bg-rose/30 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-taupe">You may also like</p>
              <h2 className="mt-3 font-serif text-4xl text-obsidian sm:text-5xl">More pieces to layer in</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} onAddToCart={onAddToCart} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDetail


