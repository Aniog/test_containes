import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { products } from '@/data/products'
import ProductCard from '@/components/shop/ProductCard'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Bestsellers() {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, node)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])
  const bestsellers = products.filter((p) => p.tags.includes('bestseller')).slice(0, 5)

  return (
    <section ref={ref} className="py-20 md:py-28 bg-ivory">
      <div className="max-w-8xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-widest2 text-champagne mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">
            Bestsellers
          </h2>
          <p className="mt-4 text-sm text-stone max-w-md mx-auto">
            The pieces our community reaches for again and again.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-flex items-center justify-center border border-ink text-ink hover:bg-ink hover:text-ivory transition-colors px-8 py-4 text-xs uppercase tracking-widest2 font-medium rounded-sm"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  )
}
