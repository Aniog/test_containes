import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getProductBySlug } from '@/data/products'
import { cn } from '@/lib/utils'
import ProductDetailInfo from './ProductDetailInfo'
import ProductDetailRelated from './ProductDetailRelated'

export default function ProductDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const product = getProductBySlug(slug)

  const [selectedImage, setSelectedImage] = useState('hero')

  useEffect(() => {
    if (!product) {
      navigate('/shop', { replace: true })
    }
  }, [product, navigate])

  useEffect(() => {
    setSelectedImage('hero')
  }, [slug])

  if (!product) return null

  const showHero = selectedImage === 'hero'

  return (
    <main className="min-h-screen bg-cream pt-20 md:pt-24 pb-20">
      <div className="container-main">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-[4/5] bg-cream-dark overflow-hidden">
              <img
                data-strk-img-id={`card-${product.id}`}
                data-strk-img={product.images.hero}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={product.name}
                className={cn(
                  'absolute inset-0 w-full h-full object-cover transition-opacity duration-500',
                  showHero ? 'opacity-100' : 'opacity-0'
                )}
              />
              <img
                data-strk-img-id={`card-${product.id}-alt`}
                data-strk-img={product.images.alt}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={`${product.name} alternate view`}
                className={cn(
                  'absolute inset-0 w-full h-full object-cover transition-opacity duration-500',
                  showHero ? 'opacity-0' : 'opacity-100'
                )}
              />
            </div>

            <div className="flex gap-3">
              {['hero', 'alt'].map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedImage(key)}
                  className={cn(
                    'relative w-20 h-24 md:w-24 md:h-28 bg-cream-dark overflow-hidden border-2 transition-colors',
                    selectedImage === key ? 'border-gold' : 'border-transparent'
                  )}
                  aria-label={`View ${key} image`}
                >
                  <img
                    data-strk-img-id={`card-${product.id}${key === 'alt' ? '-alt' : ''}`}
                    data-strk-img={product.images[key]}
                    data-strk-img-ratio="3x4"
                    data-strk-img-width="200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={`${product.name} thumbnail`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <ProductDetailInfo product={product} />
        </div>

        <ProductDetailRelated excludeSlug={slug} />
      </div>
    </main>
  )
}
