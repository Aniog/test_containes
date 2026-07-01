import { useEffect, useRef, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, Heart, ArrowLeft } from 'lucide-react'
import { fetchProductBySlug, fetchRelatedProducts } from '../api/products'
import { useCart } from '../context/CartContext'
import ProductGallery from '../components/product/ProductGallery'
import StarRating from '../components/ui/StarRating'
import Accordion from '../components/ui/Accordion'
import ProductCard from '../components/ProductCard'
import { formatPrice } from '../lib/data'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function ProductDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { addItem } = useCart()
  const relatedRef = useRef(null)

  const [product, setProduct] = useState(null)
  const [related, setRelated] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [variant, setVariant] = useState(null)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    setLoading(true)
    setError(null)
    fetchProductBySlug(slug)
      .then((data) => {
        if (!data) {
          navigate('/shop')
          return
        }
        setProduct(data)
        setVariant(data.variants?.[0] || null)
        setQuantity(1)
        fetchRelatedProducts(data.category, data.slug).then(setRelated)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [slug, navigate])

  useEffect(() => {
    if (relatedRef.current && related.length > 0) {
      return ImageHelper.loadImages(strkImgConfig, relatedRef.current)
    }
  }, [related])

  if (loading) {
    return (
      <div className="bg-velmora-cream py-32 text-center">
        <p className="text-sm text-velmora-taupe">Loading product…</p>
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className="bg-velmora-cream py-32 text-center">
        <p className="text-sm text-red-600">{error || 'Product not found'}</p>
      </div>
    )
  }

  const accordionItems = [
    { title: 'Description', content: product.description },
    { title: 'Materials & Care', content: product.care },
    { title: 'Shipping & Returns', content: product.shipping },
  ]

  return (
    <div className="bg-velmora-cream">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Link
          to="/shop"
          className="mb-6 inline-flex items-center gap-2 font-sans text-xs font-medium uppercase tracking-widest text-velmora-taupe hover:text-velmora-espresso"
        >
          <ArrowLeft size={14} className="pointer-events-none" /> Back to Shop
        </Link>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <ProductGallery product={product} />

          <div className="flex flex-col lg:py-8">
            <p className="font-sans text-xs font-medium uppercase tracking-widest text-velmora-gold">
              {product.category}
            </p>
            <h1 className="mt-2 font-serif text-3xl uppercase tracking-wide text-velmora-espresso md:text-4xl lg:text-5xl">
              {product.name}
            </h1>
            <div className="mt-3 flex items-center gap-3">
              <StarRating rating={product.rating} count={product.review_count} />
            </div>
            <p className="mt-5 font-sans text-2xl font-light text-velmora-espresso">
              {formatPrice(product.price)}
            </p>
            <p className="mt-5 text-sm leading-relaxed text-velmora-taupe md:text-base">
              {product.short_description}
            </p>

            <div className="mt-8">
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-velmora-espresso">
                Tone
              </span>
              <div className="mt-3 flex flex-wrap gap-3">
                {product.variants?.map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setVariant(v)}
                    className={`rounded-full border px-6 py-2.5 font-sans text-xs font-semibold uppercase tracking-widest transition-colors ${
                      variant === v
                        ? 'border-velmora-espresso bg-velmora-espresso text-white'
                        : 'border-velmora-border bg-transparent text-velmora-espresso hover:border-velmora-espresso'
                    }`}
                  >
                    {v.charAt(0).toUpperCase() + v.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <span className="font-sans text-xs font-semibold uppercase tracking-widest text-velmora-espresso">
                Quantity
              </span>
              <div className="mt-3 inline-flex items-center border border-velmora-border bg-white">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 text-velmora-taupe hover:text-velmora-espresso"
                >
                  <Minus size={16} className="pointer-events-none" />
                </button>
                <span className="w-10 text-center text-sm">{quantity}</span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 text-velmora-taupe hover:text-velmora-espresso"
                >
                  <Plus size={16} className="pointer-events-none" />
                </button>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <button
                type="button"
                onClick={() => addItem(product, variant, quantity)}
                className="flex flex-1 items-center justify-center gap-2 bg-velmora-gold py-4 font-sans text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-velmora-gold-dark"
              >
                <ShoppingBag size={16} className="pointer-events-none" />
                Add to Cart
              </button>
              <button
                type="button"
                className="border border-velmora-border px-4 text-velmora-espresso transition-colors hover:border-velmora-gold hover:text-velmora-gold"
                aria-label="Add to wishlist"
              >
                <Heart size={18} className="pointer-events-none" />
              </button>
            </div>

            <div className="mt-10">
              <Accordion items={accordionItems} />
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div ref={relatedRef} className="mt-20 md:mt-28">
            <h2 className="mb-8 font-serif text-2xl text-velmora-espresso md:text-3xl">
              You May Also Like
            </h2>
            <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((item) => (
                <ProductCard
                  key={item.id}
                  product={item}
                  imgId={`related-img-${item.slug}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
