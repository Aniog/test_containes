import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Minus, Plus, ChevronRight } from 'lucide-react'
import { getProductById, getRelatedProducts } from '@/data/products'
import { useCart } from '@/context/CartContext'
import StrkImage from '@/components/StrkImage'
import StarRating from '@/components/StarRating'
import Accordion from '@/components/Accordion'
import ProductCard from '@/components/ProductCard'
import { useImageLoader } from '@/hooks/useImageLoader'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()
  const containerRef = useImageLoader([id])

  const [variant, setVariant] = useState(product?.tone || 'Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImg, setActiveImg] = useState(0)

  useEffect(() => {
    setVariant(product?.tone || 'Gold')
    setQuantity(1)
    setActiveImg(0)
  }, [id, product])

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-serif text-4xl text-ink">Product not found</h1>
        <Link to="/shop" className="mt-6 inline-block text-gold underline">
          Back to shop
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, 4)
  const galleryIds = product.galleryIds.length
    ? product.galleryIds
    : [product.imgId, product.imgIdAlt, product.imgId]

  const accordions = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.materials} ${product.care}` },
    { title: 'Shipping & Returns', content: product.shipping },
  ]

  const onAdd = () => {
    addItem(product, { quantity, variant })
  }

  return (
    <div ref={containerRef} className="pt-24 md:pt-28">
      {/* Breadcrumb */}
      <div className="max-w-8xl mx-auto px-6 md:px-10 py-5">
        <nav className="flex items-center gap-2 text-xs uppercase tracking-widest2 text-muted">
          <Link to="/" className="hover:text-gold">Home</Link>
          <ChevronRight size={12} />
          <Link to="/shop" className="hover:text-gold">Shop</Link>
          <ChevronRight size={12} />
          <span className="text-ink">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-8xl mx-auto px-6 md:px-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-3 overflow-x-auto no-scrollbar md:max-h-[640px]">
              {galleryIds.map((gid, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`shrink-0 w-20 h-24 md:w-20 md:h-24 overflow-hidden border transition-colors ${
                    activeImg === i ? 'border-gold' : 'border-sand'
                  }`}
                >
                  <StrkImage
                    imgId={`${gid}-thumb`}
                    query={`[pdp-${product.id}-name] [pdp-${product.id}-desc]`}
                    ratio="3x4"
                    width={200}
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover bg-cream"
                  />
                </button>
              ))}
            </div>
            <div className="flex-1 aspect-[4x5] overflow-hidden bg-cream">
              <StrkImage
                imgId={galleryIds[activeImg]}
                query={`[pdp-${product.id}-desc] [pdp-${product.id}-name]`}
                ratio="4x5"
                width={900}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Info */}
          <div className="lg:pl-6">
            <p className="text-xs uppercase tracking-widest2 text-gold mb-3">
              {product.type}
            </p>
            <h1
              id={`pdp-${product.id}-name`}
              className="font-serif text-4xl md:text-5xl text-ink uppercase tracking-widest3 leading-tight"
            >
              {product.name}
            </h1>
            <div className="flex items-center gap-3 mt-4">
              <StarRating rating={product.rating} size={16} />
              <span className="text-xs text-muted">
                {product.rating} · {product.reviews} reviews
              </span>
            </div>
            <p className="font-serif text-3xl text-ink mt-5">${product.price.toFixed(2)}</p>
            <p
              id={`pdp-${product.id}-desc`}
              className="mt-5 text-sm text-muted leading-relaxed max-w-md"
            >
              {product.shortDesc}
            </p>

            {/* Variants */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest2 text-ink mb-3">
                Tone: <span className="text-muted">{variant}</span>
              </p>
              <div className="flex gap-3">
                {product.variants.map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-6 py-2.5 text-xs uppercase tracking-widest2 rounded-full border transition-colors ${
                      variant === v
                        ? 'border-ink bg-ink text-ivory'
                        : 'border-sand text-ink hover:border-ink'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest2 text-ink mb-3">Quantity</p>
              <div className="inline-flex items-center border border-sand">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-3 text-ink hover:text-gold"
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} strokeWidth={1.5} />
                </button>
                <span className="px-5 text-sm text-ink w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-3 text-ink hover:text-gold"
                  aria-label="Increase quantity"
                >
                  <Plus size={16} strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={onAdd}
              className="mt-8 w-full bg-gold text-ink text-xs uppercase tracking-widest2 font-semibold py-4 hover:bg-gold-deep hover:text-ivory transition-colors"
            >
              Add to Bag — ${(product.price * quantity).toFixed(2)}
            </button>

            <p className="mt-4 text-xs text-muted text-center">
              Free worldwide shipping · 30-day returns
            </p>

            {/* Accordions */}
            <div className="mt-12">
              <Accordion items={accordions} />
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      <section className="py-20 md:py-24 bg-cream">
        <div className="max-w-8xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest2 text-gold mb-3">Continue Exploring</p>
            <h2 className="font-serif text-4xl md:text-5xl text-ink">You May Also Like</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 md:gap-x-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
