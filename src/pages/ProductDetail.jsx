import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchProductBySlug, fetchProducts } from '@/api/products'
import { useCart } from '@/context/CartContext'
import { useImageLoader } from '@/hooks/useImageLoader'
import Button from '@/components/ui/Button'
import Spinner from '@/components/ui/Spinner'
import StarRating from '@/components/ui/StarRating'
import Accordion from '@/components/ui/Accordion'
import ProductCard from '@/components/shared/ProductCard'
import ProductImage from '@/components/ui/ProductImage'
import { formatPrice } from '@/lib/format'

const variants = ['Gold', 'Silver']

export default function ProductDetail() {
  const { slug } = useParams()
  const [product, setProduct] = useState(null)
  const [related, setRelated] = useState([])
  const [status, setStatus] = useState('loading')
  const [selectedVariant, setSelectedVariant] = useState('Gold')
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const { addItem } = useCart()

  const containerRef = useImageLoader([product, activeImage, status])

  useEffect(() => {
    let mounted = true
    setStatus('loading')
    setActiveImage(0)

    fetchProductBySlug(slug)
      .then((data) => {
        if (!mounted) return
        setProduct(data)
        setSelectedVariant(data?.variant || 'Gold')

        return fetchProducts({ category: data?.category, max: 4 })
      })
      .then((rows) => {
        if (!mounted) return
        const filtered = rows.filter((row) => row.slug !== slug)
        setRelated(filtered.slice(0, 4))
        setStatus('ready')
      })
      .catch(() => {
        if (!mounted) return
        setStatus('error')
      })

    return () => {
      mounted = false
    }
  }, [slug])

  if (status === 'loading') {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Spinner className="text-velmora-gold" />
      </div>
    )
  }

  if (status === 'error' || !product) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="font-serif text-3xl tracking-wide">Product Not Found</h1>
        <p className="mt-2 text-velmora-taupe-light">
          We couldn&apos;t find the piece you were looking for.
        </p>
        <Link to="/shop" className="mt-6">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    addItem(product, selectedVariant, quantity)
  }

  const accordionItems = [
    {
      title: 'Description',
      content:
        product.long_description ||
        product.description ||
        'A beautifully crafted piece designed to bring effortless elegance to your everyday look.',
    },
    {
      title: 'Materials & Care',
      content:
        'Made with 18K gold plating over premium brass. Nickel-free, lead-free, and hypoallergenic. To maintain shine, avoid contact with water, perfumes, and lotions. Store in a dry place and clean gently with a soft cloth.',
    },
    {
      title: 'Shipping & Returns',
      content:
        'Free worldwide shipping on orders over $75. Standard delivery takes 5–10 business days. We offer easy 30-day returns on unworn items in original packaging.',
    },
  ]

  const productTitleId = `product-detail-title-${product.id}`
  const imageQueries = product.image_queries?.length
    ? product.image_queries
    : [product.image_query]

  return (
    <main ref={containerRef} className="bg-velmora-base">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] overflow-hidden bg-velmora-taupe/10">
              <ProductImage
                id={productTitleId}
                imgId={`product-img-${product.id}`}
                alt={product.name}
                ratio="4x5"
                width={800}
                className="transition-opacity duration-300"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {imageQueries.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className={`aspect-square overflow-hidden bg-velmora-taupe/10 border-2 transition-colors ${
                    activeImage === index
                      ? 'border-velmora-gold'
                      : 'border-transparent hover:border-velmora-taupe/50'
                  }`}
                >
                  <ProductImage
                    id={productTitleId}
                    imgId={`product-img-${product.id}`}
                    alt={`${product.name} view ${index + 1}`}
                    ratio="1x1"
                    width={200}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            <StarRating rating={product.rating} count={product.review_count} />
            <h1
              id={productTitleId}
              className="mt-4 font-serif text-3xl uppercase tracking-[0.15em] sm:text-4xl lg:text-5xl"
            >
              {product.name}
            </h1>
            <div className="mt-4 flex items-center gap-3">
              <span className="font-serif text-2xl tracking-wide text-velmora-gold">
                {formatPrice(product.price)}
              </span>
              {product.compare_price && (
                <span className="text-lg text-velmora-taupe-light line-through">
                  {formatPrice(product.compare_price)}
                </span>
              )}
            </div>
            <p className="mt-6 leading-relaxed text-velmora-taupe-light">
              {product.description}
            </p>

            <div className="mt-8">
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-velmora-taupe-light">
                Tone
              </span>
              <div className="mt-3 flex flex-wrap gap-3">
                {variants.map((variant) => (
                  <button
                    key={variant}
                    type="button"
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] transition-all ${
                      selectedVariant === variant
                        ? 'bg-velmora-gold text-velmora-base'
                        : 'border border-velmora-taupe/50 text-velmora-ivory hover:border-velmora-gold'
                    }`}
                  >
                    {variant}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <span className="font-sans text-xs uppercase tracking-[0.2em] text-velmora-taupe-light">
                Quantity
              </span>
              <div className="mt-3 inline-flex items-center border border-velmora-taupe/50">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-4 py-2.5 text-velmora-taupe-light transition-colors hover:text-velmora-ivory"
                >
                  −
                </button>
                <span className="min-w-[3rem] text-center text-sm">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-4 py-2.5 text-velmora-taupe-light transition-colors hover:text-velmora-ivory"
                >
                  +
                </button>
              </div>
            </div>

            <div className="mt-10">
              <Button
                size="lg"
                className="w-full"
                onClick={handleAddToCart}
              >
                Add to Cart — {formatPrice(product.price * quantity)}
              </Button>
            </div>

            <div className="mt-10">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-24 border-t border-velmora-taupe/30 pt-16">
            <h2 className="mb-10 text-center font-serif text-2xl tracking-wide sm:text-3xl">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
