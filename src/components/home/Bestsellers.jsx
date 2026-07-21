import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { products } from '@/data/products'
import { ProductCard } from '@/components/product/ProductCard'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export function Bestsellers() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-center text-center">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold mb-3">Most Loved</p>
          <h2 className="font-serif text-3xl md:text-5xl text-ink">Bestsellers</h2>
          <p className="mt-4 max-w-md text-sm md:text-base text-stone leading-relaxed">
            The pieces our community reaches for again and again — each one finished by hand
            and made to be worn daily.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-5 md:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest2 text-ink hover:text-gold transition-colors"
          >
            View All Jewelry
            <ArrowRight size={15} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  )
}
