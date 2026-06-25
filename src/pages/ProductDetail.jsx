import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Plus, Minus, ChevronRight, Check } from 'lucide-react'
import { StrkImage } from '@/components/ui/StrkImage'
import { StarRating } from '@/components/ui/StarRating'
import { Accordion } from '@/components/ui/Accordion'
import { ProductCard } from '@/components/product/ProductCard'
import { Button } from '@/components/ui/Button'
import { useCart } from '@/context/CartContext'
import { getProductBySlug, getRelatedProducts } from '@/data/products'
import { formatPrice, cn } from '@/lib/utils'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProductBySlug(slug)
  const { addItem } = useCart()

  const [activeImg, setActiveImg] = useState(0)
  const [variant, setVariant] = useState(product?.variants?.[0] || 'Gold')
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    setActiveImg(0)
    setVariant(product?.variants?.[0] || 'Gold')
    setQty(1)
    setAdded(false)
    window.scrollTo({ top: 0 })
  }, [slug, product])

  if (!product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center pt-32 text-center">
        <h1 className="font-serif text-3xl text-ink">Piece not found</h1>
        <Button as={Link} to="/shop" variant="outline" className="mt-6">
          Back to Shop
        </Button>
      </div>
    )
  }

  const related = getRelatedProducts(product, 4)

  const handleAdd = () => {
    addItem(product, { variant, quantity: qty })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: product.materialsCare },
    { title: 'Shipping & Returns', content: product.shipping },
  ]

  return (
    <div className="bg-ivory pt-24 md:pt-28">
      {/* breadcrumb */}
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <nav className="flex items-center gap-1.5 py-4 text-[10px] uppercase tracking-[0.18em] text-taupe">
          <Link to="/" className="hover:text-ink">Home</Link>
          <ChevronRight size={11} />
          <Link to="/shop" className="hover:text-ink">Shop</Link>
          <ChevronRight size={11} />
          <Link to={`/shop?category=${product.categorySlug}`} className="hover:text-ink">
            {product.category}
          </Link>
          <ChevronRight size={11} />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 md:grid-cols-2 md:gap-14 md:px-8 lg:gap-20">
        {/* gallery */}
        <div className="flex flex-col-reverse gap-4 md:flex-row">
          {/* thumbnails */}
          <div className="flex gap-3 md:flex-col">
            {product.images.map((img, i) => (
              <button
                key={img.imgId}
                type="button"
                onClick={() => setActiveImg(i)}
                className={cn(
                  'relative aspect-[4/5] w-16 shrink-0 overflow-hidden border bg-cream md:w-20',
                  activeImg === i ? 'border-gold' : 'border-transparent opacity-70 hover:opacity-100'
                )}
              >
                <StrkImage
                  imgId={`${img.imgId}-thumb`}
                  query={`[${img.descId}] [${img.titleId}]`}
                  ratio="4x5"
                  width={160}
                  alt={`${product.name} view ${i + 1}`}
                  titleId={img.titleId}
                  descId={img.descId}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
          {/* main image */}
          <div className="relative flex-1 overflow-hidden bg-cream">
            <StrkImage
              imgId={`${product.images[activeImg].imgId}-main`}
              query={`[${product.images[activeImg].descId}] [${product.images[activeImg].titleId}]`}
              ratio="4x5"
              width={900}
              alt={product.name}
              titleId={product.images[activeImg].titleId}
              descId={product.images[activeImg].descId}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>

        {/* info */}
        <div className="md:py-4">
          <p className="text-[11px] uppercase tracking-[0.25em] text-gold">{product.type}</p>
          <h1
            id={product.titleId}
            className="mt-2 font-serif text-3xl uppercase tracking-[0.1em] text-ink md:text-4xl"
          >
            {product.name}
          </h1>
          <p id={product.descId} className="sr-only">
            {product.shortDesc}
          </p>

          <div className="mt-3 flex items-center gap-3">
            <StarRating value={product.rating} size={15} />
            <span className="text-xs text-taupe">
              {product.rating} · {product.reviews} reviews
            </span>
          </div>

          <p className="mt-5 font-serif text-2xl text-ink">{formatPrice(product.price)}</p>

          <p className="mt-5 text-sm leading-relaxed text-taupe">{product.shortDesc}</p>

          {/* variants */}
          <div className="mt-7">
            <p className="mb-3 text-[11px] uppercase tracking-[0.2em] text-ink">
              Tone: <span className="text-taupe">{variant}</span>
            </p>
            <div className="flex gap-3">
              {product.variants.map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => setVariant(v)}
                  className={cn(
                    'min-w-24 border px-5 py-2.5 text-[11px] uppercase tracking-[0.18em] transition-all',
                    variant === v
                      ? 'border-ink bg-ink text-ivory'
                      : 'border-sand text-ink hover:border-ink'
                  )}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {/* quantity + add */}
          <div className="mt-7 flex items-center gap-4">
            <div className="flex items-center border border-sand">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="px-3.5 py-3 text-ink hover:bg-cream"
              >
                <Minus size={14} />
              </button>
              <span className="min-w-10 text-center text-sm text-ink">{qty}</span>
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() => setQty((q) => q + 1)}
                className="px-3.5 py-3 text-ink hover:bg-cream"
              >
                <Plus size={14} />
              </button>
            </div>
            <Button
              variant="solid"
              className="flex-1"
              onClick={handleAdd}
            >
              {added ? (
                <span className="flex items-center gap-2">
                  <Check size={15} /> Added to Cart
                </span>
              ) : (
                'Add to Cart'
              )}
            </Button>
          </div>

          <p className="mt-4 text-[11px] uppercase tracking-[0.15em] text-taupe">
            Free worldwide shipping · 30-day returns
          </p>

          {/* accordions */}
          <div className="mt-9">
            <Accordion items={accordionItems} />
          </div>
        </div>
      </div>

      {/* related */}
      <section className="border-t border-sand bg-cream py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="mb-10 text-center font-serif text-3xl text-ink md:text-4xl">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
