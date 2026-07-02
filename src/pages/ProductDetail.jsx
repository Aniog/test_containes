import { useState, useRef, useEffect, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ChevronLeft, Heart, Truck, RefreshCw, ShieldCheck } from 'lucide-react'
import { products } from '@/data/products'
import { useCart } from '@/context/CartContext'
import { cn, formatPrice } from '@/lib/utils'
import StarRating from '@/components/ui/StarRating'
import Price from '@/components/ui/Price'
import QuantityStepper from '@/components/ui/QuantityStepper'
import Accordion from '@/components/ui/Accordion'
import ProductCard from '@/components/product/ProductCard'
import StrkImage from '@/components/ui/StrkImage'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const { addItem } = useCart()
  const containerRef = useRef(null)

  const [selectedTone, setSelectedTone] = useState(product?.tone[0] || 'gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    if (product) {
      setSelectedTone(product.tone[0])
      setQuantity(1)
      setActiveImage(0)
      setAdded(false)
      window.scrollTo(0, 0)
    }
  }, [product])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [product?.id])

  const related = useMemo(
    () => products.filter((p) => p.id !== product?.id).slice(0, 4),
    [product]
  )

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F6F3EF] pt-24 text-[#1A1512]">
        <div className="text-center">
          <h1 className="font-serif text-3xl">Product not found</h1>
          <Link
            to="/shop"
            className="mt-4 inline-block text-xs font-medium uppercase tracking-[0.15em] text-[#C49A6C]"
          >
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const gallery = [
    { id: `${product.imageId}-main`, query: product.search, ratio: '3x4' },
    { id: `${product.imageId}-alt1`, query: `${product.search} detail`, ratio: '1x1' },
    { id: `${product.imageId}-alt2`, query: `${product.search} worn on model`, ratio: '3x4' },
    { id: `${product.imageId}-alt3`, query: `${product.search} packaging gift`, ratio: '4x3' },
  ]

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: `${product.materials} ${product.care}` },
    { title: 'Shipping & Returns', content: `${product.shipping} ${product.returns}` },
  ]

  const handleAddToCart = () => {
    addItem(product, selectedTone, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-[#F6F3EF] pb-20 pt-20 md:pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link
          to="/shop"
          className="mb-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.1em] text-[#6B6259] transition-colors hover:text-[#C49A6C]"
        >
          <ChevronLeft size={14} />
          Back to Shop
        </Link>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div>
            <div className="relative mb-4 aspect-[4/5] overflow-hidden bg-[#F0EAE3]">
              <StrkImage
                id={gallery[activeImage].id}
                query={`[product-detail-name] ${gallery[activeImage].query}`}
                ratio={gallery[activeImage].ratio}
                width="900"
                alt={product.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {gallery.map((img, index) => (
                <button
                  key={img.id}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className={cn(
                    'relative aspect-square overflow-hidden bg-[#F0EAE3]',
                    activeImage === index ? 'ring-2 ring-[#C49A6C]' : 'ring-1 ring-transparent'
                  )}
                >
                  <StrkImage
                    id={`${img.id}-thumb`}
                    query={`[product-detail-name] ${img.query}`}
                    ratio="1x1"
                    width="200"
                    alt={`${product.name} view ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            <div className="mb-1 flex items-center gap-2">
              <StarRating rating={product.rating} />
              <span className="text-sm text-[#6B6259]">({product.reviewCount} reviews)</span>
            </div>
            <h1
              id="product-detail-name"
              className="font-serif text-3xl font-medium uppercase tracking-[0.15em] text-[#1A1512] md:text-4xl"
            >
              {product.name}
            </h1>
            <Price price={product.price} className="mt-4 font-serif text-2xl text-[#6B6259]" />

            <p className="mt-6 text-[15px] leading-relaxed text-[#6B6259]">
              {product.description}
            </p>

            <div className="mt-8">
              <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.15em] text-[#1A1512]">
                Tone
              </span>
              <div className="flex flex-wrap gap-3">
                {product.tone.map((tone) => (
                  <button
                    key={tone}
                    type="button"
                    onClick={() => setSelectedTone(tone)}
                    className={cn(
                      'rounded-full border px-6 py-2 text-xs font-medium uppercase tracking-[0.1em] transition-all',
                      selectedTone === tone
                        ? 'border-[#C49A6C] bg-[#C49A6C] text-white'
                        : 'border-[#C49A6C] text-[#1A1512] hover:bg-[#F0EAE3]'
                    )}
                  >
                    {tone}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.15em] text-[#1A1512]">
                Quantity
              </span>
              <QuantityStepper quantity={quantity} onChange={setQuantity} />
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleAddToCart}
                className={cn(
                  'flex-1 py-4 text-xs font-medium uppercase tracking-[0.2em] transition-colors',
                  added
                    ? 'bg-[#1A1512] text-[#F6F3EF]'
                    : 'bg-[#C49A6C] text-white hover:bg-[#A67C52]'
                )}
              >
                {added ? 'Added to Cart' : 'Add to Cart — ' + formatPrice(product.price * quantity)}
              </button>
              <button
                type="button"
                className="flex items-center justify-center border border-[#E4DDD4] px-5 py-4 text-[#1A1512] transition-colors hover:bg-[#F0EAE3]"
                aria-label="Add to wishlist"
              >
                <Heart size={20} />
              </button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-[#E4DDD4] pt-6">
              <div className="text-center">
                <Truck size={18} className="mx-auto mb-2 text-[#C49A6C]" />
                <p className="text-[10px] uppercase tracking-[0.1em] text-[#6B6259]">Free Shipping</p>
              </div>
              <div className="text-center">
                <RefreshCw size={18} className="mx-auto mb-2 text-[#C49A6C]" />
                <p className="text-[10px] uppercase tracking-[0.1em] text-[#6B6259]">30-Day Returns</p>
              </div>
              <div className="text-center">
                <ShieldCheck size={18} className="mx-auto mb-2 text-[#C49A6C]" />
                <p className="text-[10px] uppercase tracking-[0.1em] text-[#6B6259]">Hypoallergenic</p>
              </div>
            </div>

            <div className="mt-10">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 border-t border-[#E4DDD4] pt-16">
          <h2 className="mb-10 text-center font-serif text-2xl text-[#1A1512] md:text-3xl">
            You May Also Like
          </h2>
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
