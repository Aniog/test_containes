import { useState, useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import StarRating from '@/components/common/StarRating'
import ProductForm from '@/components/product/ProductForm'
import Accordion from '@/components/common/Accordion'

export default function ProductDetailPage() {
  const { slug } = useParams()
  const product = products.find((p) => p.slug === slug)
  const containerRef = useRef(null)
  const [activeImg, setActiveImg] = useState(0)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-2xl">Product not found</h1>
          <Link to="/shop" className="mt-4 inline-block text-sm underline underline-offset-4 text-velmora-taupe">
            Back to shop
          </Link>
        </div>
      </div>
    )
  }

  const related = products.filter((p) => p.id !== product.id).slice(0, 4)

  return (
    <div ref={containerRef} className="pt-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Gallery */}
          <div>
            <div className="relative aspect-square bg-velmora-sand overflow-hidden">
              <img
                data-strk-img-id={`pdp-${product.id}-${activeImg}`}
                data-strk-img={`[pdp-${product.id}-name] gold jewelry detail ${activeImg}`}
                data-strk-img-ratio="1x1"
                data-strk-img-width="900"
                src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 900 900'/%3E`}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveImg((activeImg - 1 + 4) % 4)}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow-sm hover:bg-white transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setActiveImg((activeImg + 1) % 4)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow-sm hover:bg-white transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="flex gap-3 mt-4">
              {[0, 1, 2, 3].map((i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`w-20 h-20 bg-velmora-sand flex-shrink-0 overflow-hidden border-2 transition-colors ${
                    activeImg === i ? 'border-velmora-deep' : 'border-transparent'
                  }`}
                >
                  <img
                    data-strk-img-id={`pdp-thumb-${product.id}-${i}`}
                    data-strk-img={`[pdp-${product.id}-name] gold jewelry thumbnail ${i}`}
                    data-strk-img-ratio="1x1"
                    data-strk-img-width="200"
                    src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'/%3E`}
                    alt={`${product.name} view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <nav className="text-[10px] tracking-[0.12em] uppercase text-velmora-taupe space-x-1 mb-6">
              <Link to="/shop" className="hover:text-velmora-deep transition-colors">Shop</Link>
              <span>/</span>
              <Link to={`/shop?category=${product.category}`} className="hover:text-velmora-deep transition-colors capitalize">{product.category}</Link>
              <span>/</span>
              <span className="text-velmora-deep">{product.name}</span>
            </nav>

            <h1
              id={`pdp-${product.id}-name`}
              className="font-serif text-2xl md:text-3xl tracking-[0.08em] uppercase leading-tight"
            >
              {product.name}
            </h1>

            <div className="mt-3">
              <StarRating rating={product.rating} reviews={product.reviews} />
            </div>

            <p className="mt-4 font-serif text-2xl text-velmora-deep">${product.price}</p>

            <p className="mt-6 text-sm text-velmora-taupe leading-relaxed max-w-md">
              {product.description}
            </p>

            <div className="mt-8">
              <ProductForm product={product} />
            </div>

            <div className="mt-10 space-y-0">
              <Accordion title="Description" defaultOpen>
                <ul className="space-y-1.5 pl-0">
                  {product.details.map((d, i) => (
                    <li key={i} className="text-sm text-velmora-charcoal">{d}</li>
                  ))}
                </ul>
              </Accordion>
              <Accordion title="Materials & Care">
                <p>{product.materials}</p>
              </Accordion>
              <Accordion title="Shipping & Returns">
                <p>{product.shipping}</p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-24 border-t border-velmora-sand pt-16">
            <h2 className="font-serif text-2xl tracking-tight text-center mb-10">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
              {related.map((rp) => (
                <Link key={rp.id} to={`/product/${rp.slug}`} className="group">
                  <div className="aspect-[3/4] bg-velmora-sand overflow-hidden">
                    <img
                      data-strk-img-id={`related-${rp.id}`}
                      data-strk-img={`[related-${rp.id}-name] gold jewelry related product`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="500"
                      src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 667'/%3E`}
                      alt={rp.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3
                    id={`related-${rp.id}-name`}
                    className="mt-3 font-serif text-sm tracking-[0.08em] uppercase"
                  >
                    {rp.name}
                  </h3>
                  <p className="text-sm font-medium mt-1">${rp.price}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
