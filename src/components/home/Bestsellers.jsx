import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Bestsellers() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-8xl px-5 md:px-8">
        <div className="mb-12 flex flex-col items-center text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.4em] text-gold">
            Most Loved
          </p>
          <h2 className="mt-3 font-serif text-4xl font-light text-ink md:text-5xl">
            Bestsellers
          </h2>
          <div className="mt-5 h-px w-12 bg-gold" />
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 md:gap-x-8 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            to="/shop"
            className="group inline-flex items-center gap-2 border border-ink/30 px-9 py-4 text-xs font-medium uppercase tracking-widest2 text-ink transition-colors duration-300 hover:bg-ink hover:text-cream"
          >
            View All
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  )
}
