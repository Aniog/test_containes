import { useEffect, useRef, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, Check } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { getProductById, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import StarRating from '@/components/ui/StarRating'
import Accordion from '@/components/ui/Accordion'
import ProductCard from '@/components/product/ProductCard'
import { formatPrice } from '@/lib/utils'

const PLACEHOLDER =
  'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1"%3E%3C/svg%3E'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const ref = useRef(null)
  const [variant, setVariant] = useState(product?.variants[0] ?? 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImg, setActiveImg] = useState(0)
  const [added, setAdded] = useState(false)
  const { addItem, openCart } = useCart()

  useEffect(() => {
    setVariant(product?.variants[0] ?? 'Gold')
    setQuantity(1)
    setActiveImg(0)
  }, [id, product])

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [id, activeImg])

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 pt-24 text-center">
        <h1 className="font-serif text-4xl text-stone-deep">Piece not found</h1>
        <Link
          to="/shop"
          className="border border-gold-deep bg-gold px-8 py-3 text-xs uppercase tracking-[0.18em] text-espresso transition-colors hover:bg-gold-soft"
        >
          Back to Shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 4)
  const galleryIds = product.galleryIds

  const handleAdd = () => {
    addItem(product, variant, quantity)
    setAdded(true)
    window.setTimeout(() => {
      setAdded(false)
      openCart()
    }, 600)
  }

  const accordions = [
    {
      title: 'Description',
      content: <p>{product.longDescription}</p>,
    },
    {
      title: 'Materials & Care',
      content: (
        <div className="space-y-2">
          <p>18K gold plated over sterling silver. Hypoallergenic, nickel-free, and lead-free.</p>
          <p>To keep your pieces luminous, avoid contact with water, perfumes, and lotions. Store in the provided pouch away from direct sunlight. Clean gently with a soft, dry cloth.</p>
        </div>
      ),
    },
    {
      title: 'Shipping & Returns',
      content: (
        <div className="space-y-2">
          <p>Free worldwide shipping on all orders. Orders ship within 1–2 business days and arrive in 3–7 days depending on location.</p>
          <p>Enjoy 30-day returns on unworn pieces in their original packaging. Start a return anytime from your order confirmation email.</p>
        </div>
      ),
    },
  ]

  return (
    <div ref={ref} className="bg-stone pt-24">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-7xl px-6 py-6 md:px-10">
        <nav className="text-xs uppercase tracking-[0.15em] text-stone-muted">
          <Link to="/" className="hover:text-stone-deep">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-stone-deep">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-stone-deep">{product.name}</span>
        </nav>
      </div>

      {/* Main */}
      <div className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 md:grid-cols-2 md:gap-14 md:px-10">
        {/* Gallery */}
        <div className="flex flex-col-reverse gap-4 md:flex-row">
          {/* Thumbnails */}
          <div className="flex gap-3 md:flex-col">
            {galleryIds.map((gid, i) => (
              <button
                key={gid}
                onClick={() => setActiveImg(i)}
                className={`relative aspect-square w-16 shrink-0 overflow-hidden border transition-colors md:w-20 ${
                  activeImg === i ? 'border-gold-deep' : 'border-stone-deep/10'
                }`}
                aria-label={`View image ${i + 1}`}
              >
                <img
                  alt={`${product.name} view ${i + 1}`}
                  data-strk-img-id={gid}
                  data-strk-img={`[${product.descId}] ${product.name} gold jewelry detail view ${i + 1}`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="200"
                  src={PLACEHOLDER}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
          {/* Main image */}
          <div className="relative flex-1 overflow-hidden bg-stone-deep/5">
            <img
              alt={product.name}
              data-strk-img-id={activeImg === 0 ? product.imgId : galleryIds[activeImg]}
              data-strk-img={`[${product.descId}] ${product.name} gold jewelry ${activeImg === 0 ? 'main' : 'detail ' + (activeImg + 1)}`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src={PLACEHOLDER}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>

        {/* Info */}
        <div className="md:pt-4">
          <p className="text-xs uppercase tracking-[0.25em] text-gold-deep">
            {product.category}
          </p>
          <h1
            id={product.titleId}
            className="mt-3 font-serif text-4xl uppercase tracking-[0.1em] text-stone-deep md:text-5xl"
          >
            {product.name}
          </h1>
          <div className="mt-4 flex items-center gap-3">
            <StarRating rating={product.rating} size="md" showValue reviewCount={product.reviewCount} />
          </div>
          <p className="mt-5 font-serif text-3xl text-stone-deep">
            {formatPrice(product.price)}
          </p>
          <p
            id={product.descId}
            className="mt-5 text-base leading-relaxed text-stone-muted"
          >
            {product.shortDescription}
          </p>

          {/* Variant selector */}
          <div className="mt-8">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-stone-deep">
              Tone: <span className="text-stone-muted">{variant}</span>
            </p>
            <div className="flex gap-3">
              {product.variants.map((v) => (
                <button
                  key={v}
                  onClick={() => setVariant(v)}
                  className={`min-w-[5rem] border px-6 py-3 text-xs uppercase tracking-[0.15em] transition-all duration-300 ${
                    variant === v
                      ? 'border-gold-deep bg-gold text-espresso'
                      : 'border-stone-deep/25 text-stone-deep hover:border-gold-deep'
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mt-6">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-stone-deep">
              Quantity
            </p>
            <div className="inline-flex items-center border border-stone-deep/25">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-4 py-3 text-stone-deep transition-colors hover:bg-stone-deep/5"
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" strokeWidth={1.5} />
              </button>
              <span className="min-w-[3rem] text-center text-sm text-stone-deep">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-4 py-3 text-stone-deep transition-colors hover:bg-stone-deep/5"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <button
            onClick={handleAdd}
            className="mt-8 flex w-full items-center justify-center gap-2 bg-gold py-4 text-xs uppercase tracking-[0.2em] text-espresso transition-all duration-300 hover:bg-gold-soft"
          >
            {added ? (
              <>
                <Check className="h-4 w-4" strokeWidth={2} /> Added to Cart
              </>
            ) : (
              <>
                <ShoppingBag className="h-4 w-4" strokeWidth={1.5} /> Add to Cart · {formatPrice(product.price * quantity)}
              </>
            )}
          </button>

          {/* Trust mini */}
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.15em] text-stone-muted">
            <span>Free Worldwide Shipping</span>
            <span>30-Day Returns</span>
            <span>Hypoallergenic</span>
          </div>

          {/* Accordions */}
          <div className="mt-10">
            <Accordion items={accordions} />
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="border-t border-stone-deep/10 bg-stone py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <h2 className="mb-10 text-center font-serif text-3xl text-stone-deep md:text-4xl">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4 lg:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
