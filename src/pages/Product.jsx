import { ImageHelper } from '@strikingly/sdk'
import { Minus, Plus, ShoppingBag } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import AccordionItem from '../components/shared/AccordionItem.jsx'
import RatingStars from '../components/shared/RatingStars.jsx'
import ProductGrid from '../components/store/ProductGrid.jsx'
import { useStore } from '../context/StoreContext.jsx'
import { formatPrice, getProductBySlug, getRelatedProducts } from '../data/store.js'
import strkImgConfig from '../strk-img-config.json'

const Product = () => {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const relatedProducts = useMemo(() => getRelatedProducts(slug), [slug])
  const { addToCart } = useStore()
  const [selectedImage, setSelectedImage] = useState(product?.gallery[0] || null)
  const [selectedTone, setSelectedTone] = useState(product?.tones?.[0] || 'Gold Tone')
  const [quantity, setQuantity] = useState(1)
  const [activeAccordion, setActiveAccordion] = useState('Description')
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
  }, [slug, selectedImage?.id, selectedTone, activeAccordion])

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  return (
    <div ref={containerRef} className="px-6 pb-16 md:px-8 md:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.18em] text-taupe">
          <Link to="/">Home</Link>
          <span>·</span>
          <Link to="/shop">Shop</Link>
          <span>·</span>
          <span className="text-obsidian">{product.name}</span>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="overflow-hidden rounded-[2rem] border border-sand/50 bg-pearl shadow-card aspect-product">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className="h-full w-full object-cover"
                data-strk-img-id={`pdp-main-${selectedImage.imgId}`}
                data-strk-img={`[${selectedImage.descId}] [${selectedImage.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="1200"
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {product.gallery.map((image) => (
                <button
                  key={image.id}
                  type="button"
                  onClick={() => setSelectedImage(image)}
                  className={`overflow-hidden rounded-[1.5rem] border bg-pearl p-2 transition duration-300 ${
                    selectedImage.id === image.id
                      ? 'border-obsidian shadow-card'
                      : 'border-sand/60 hover:border-champagne'
                  }`}
                >
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={image.title}
                    className="aspect-[4/5] w-full rounded-[1rem] object-cover"
                    data-strk-img-id={`pdp-thumb-${image.imgId}`}
                    data-strk-img={`[${image.descId}] [${image.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="500"
                  />
                  <span id={image.titleId} className="sr-only">
                    {image.title}
                  </span>
                  <span id={image.descId} className="sr-only">
                    {image.description}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-sand/50 bg-pearl p-7 shadow-card md:p-10">
            <p className="text-xs uppercase tracking-[0.22em] text-taupe">
              {product.category} · {product.material}
            </p>
            <h1 className="mt-4 font-display text-5xl uppercase tracking-product leading-none text-obsidian md:text-6xl">
              {product.name}
            </h1>
            <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
              <p className="text-2xl font-medium text-obsidian">{formatPrice(product.price)}</p>
              <RatingStars rating={product.rating} reviews={product.reviews} />
            </div>
            <p className="mt-6 text-sm leading-8 text-truffle md:text-base">
              {product.description}
            </p>

            <div className="mt-8 border-t border-sand/60 pt-8">
              <p className="text-xs uppercase tracking-[0.22em] text-taupe">Tone</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {product.tones.map((tone) => {
                  const active = selectedTone === tone
                  return (
                    <button
                      key={tone}
                      type="button"
                      onClick={() => setSelectedTone(tone)}
                      className={`rounded-full border px-5 py-3 text-xs uppercase tracking-[0.18em] transition duration-300 ${
                        active
                          ? 'border-obsidian bg-obsidian text-pearl'
                          : 'border-sand bg-porcelain text-truffle hover:border-champagne hover:text-obsidian'
                      }`}
                    >
                      {tone}
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="mt-8 border-t border-sand/60 pt-8">
              <p className="text-xs uppercase tracking-[0.22em] text-taupe">Quantity</p>
              <div className="mt-4 flex items-center gap-4">
                <div className="inline-flex items-center gap-3 rounded-full border border-sand bg-porcelain px-3 py-2">
                  <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))}>
                    <Minus className="h-4 w-4 text-obsidian" />
                  </button>
                  <span className="min-w-8 text-center text-sm font-medium text-obsidian">
                    {quantity}
                  </span>
                  <button type="button" onClick={() => setQuantity((value) => value + 1)}>
                    <Plus className="h-4 w-4 text-obsidian" />
                  </button>
                </div>
                <p className="text-sm text-truffle">Gift-ready box included</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => addToCart(product, quantity, selectedTone)}
              className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-champagne px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em] text-obsidian transition duration-300 hover:bg-obsidian hover:text-pearl"
            >
              <ShoppingBag className="h-4 w-4" />
              Add to Cart
            </button>

            <div className="mt-10">
              {['Description', 'Materials & Care', 'Shipping & Returns'].map((item) => (
                <AccordionItem
                  key={item}
                  title={item}
                  isOpen={activeAccordion === item}
                  onToggle={() =>
                    setActiveAccordion((current) => (current === item ? '' : item))
                  }
                >
                  {item === 'Description' ? product.description : null}
                  {item === 'Materials & Care' ? product.materials : null}
                  {item === 'Shipping & Returns' ? product.shipping : null}
                </AccordionItem>
              ))}
            </div>
          </div>
        </div>

        <section className="mt-16 md:mt-24">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-brand text-taupe">You may also like</p>
              <h2 className="mt-3 font-display text-4xl leading-none text-obsidian md:text-5xl">
                More Velmora signatures
              </h2>
            </div>
          </div>
          <ProductGrid products={relatedProducts} />
        </section>
      </div>
    </div>
  )
}

export default Product
