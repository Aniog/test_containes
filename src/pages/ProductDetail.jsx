import { useEffect, useMemo, useRef, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ChevronLeft, Heart, Share2, Truck, RotateCcw, ShieldCheck } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { getProductById, getRelatedProducts, formatPrice as dataFormatPrice } from '@/data/products'
import { Button } from '@/components/ui/Button'
import { StarRating } from '@/components/ui/StarRating'
import { QuantitySelector } from '@/components/ui/QuantitySelector'
import { Accordion } from '@/components/ui/Accordion'
import { ProductCard } from '@/components/ui/ProductCard'
import { useCart } from '@/lib/cart-context'

export default function ProductDetail() {
  const { productId } = useParams()
  const navigate = useNavigate()
  const { addItem } = useCart()
  const product = useMemo(() => getProductById(productId), [productId])

  const [selectedVariant, setSelectedVariant] = useState(product?.variants[0]?.id)
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    if (!product) return
    setSelectedVariant(product.variants.find((v) => v.inStock)?.id || product.variants[0]?.id)
    setQuantity(1)
    setActiveImage(0)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [product])

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-32 text-center">
        <h1 className="font-serif text-3xl">Product not found</h1>
        <Button variant="outline" className="mt-6" asChild>
          <Link to="/shop">Continue Shopping</Link>
        </Button>
      </div>
    )
  }

  const related = getRelatedProducts(product.id)
  const gallery = [
    { imgId: product.imgId, label: 'Front' },
    { imgId: `${product.imgId}-detail`, label: 'Detail' },
    { imgId: `${product.imgId}-worn`, label: 'Worn' },
  ]

  const accordionItems = [
    {
      id: 'description',
      title: 'Description',
      content: product.description,
    },
    {
      id: 'materials',
      title: 'Materials & Care',
      content: product.materialsCare,
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content: product.shippingReturns,
    },
  ]

  const selectedVariantObj = product.variants.find((v) => v.id === selectedVariant)
  const pageRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, pageRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [productId, activeImage])

  return (
    <div ref={pageRef} className="bg-paper pt-20 md:pt-24">
      <div className="mx-auto max-w-7xl px-6 py-8 md:py-12">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-stone transition-colors hover:text-gold"
        >
          <ChevronLeft size={16} /> Back
        </button>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[4/5] overflow-hidden bg-champagne/40">
              <img
                alt={product.name}
                data-strk-img-id={gallery[activeImage].imgId}
                data-strk-img={`[${product.titleId}] [${product.descId}]`}
                data-strk-img-ratio="3x4"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {gallery.map((img, idx) => (
                <button
                  key={img.imgId}
                  onClick={() => setActiveImage(idx)}
                  className={`relative aspect-square overflow-hidden bg-champagne/40 ${
                    activeImage === idx ? 'ring-1 ring-gold' : 'opacity-70 hover:opacity-100'
                  }`}
                  aria-label={`View ${img.label}`}
                >
                  <img
                    alt={`${product.name} ${img.label}`}
                    data-strk-img-id={img.imgId}
                    data-strk-img={`[${product.titleId}] ${img.label}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="300"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            <div className="mb-6 flex items-start justify-between">
              <div>
                <h1
                  id={product.titleId}
                  className="font-serif text-3xl uppercase tracking-[0.15em] md:text-4xl"
                >
                  {product.name}
                </h1>
                <p id={product.descId} className="sr-only">
                  {product.description}
                </p>
                <div className="mt-3 flex items-center gap-3 text-sm text-stone">
                  <StarRating rating={product.rating} />
                  <span>
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>
              </div>
              <p className="font-serif text-2xl text-gold md:text-3xl">
                {dataFormatPrice(product.price)}
              </p>
            </div>

            <p className="leading-relaxed text-stone">{product.description}</p>

            <div className="my-8 border-y border-ink/10 py-6">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-stone">
                Tone
              </p>
              <div className="flex flex-wrap gap-3">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    disabled={!variant.inStock}
                    onClick={() => setSelectedVariant(variant.id)}
                    className={`rounded-full border px-5 py-2 text-xs uppercase tracking-[0.15em] transition-all ${
                      selectedVariant === variant.id
                        ? 'border-gold bg-gold text-cream'
                        : 'border-ink/10 text-ink hover:border-gold hover:text-gold'
                    } ${!variant.inStock ? 'cursor-not-allowed opacity-40 line-through' : ''}`}
                  >
                    {variant.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <QuantitySelector value={quantity} onChange={setQuantity} />
              <Button
                variant="solid"
                fullWidth
                disabled={!selectedVariantObj?.inStock}
                onClick={() =>
                  addItem(product.id, selectedVariant, quantity)
                }
              >
                {selectedVariantObj?.inStock ? 'Add to Cart' : 'Out of Stock'}
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 border-b border-ink/10 pb-8 text-center text-[10px] uppercase tracking-[0.15em] text-stone">
              <div className="flex flex-col items-center gap-2">
                <Truck size={18} className="text-gold" />
                Free Shipping
              </div>
              <div className="flex flex-col items-center gap-2">
                <RotateCcw size={18} className="text-gold" />
                30-Day Returns
              </div>
              <div className="flex flex-col items-center gap-2">
                <ShieldCheck size={18} className="text-gold" />
                Hypoallergenic
              </div>
            </div>

            <div className="mt-8">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>

        {/* Related products */}
        <section className="mt-20 border-t border-ink/10 pt-16">
          <h2 className="mb-10 text-center font-serif text-3xl">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
            {related.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
