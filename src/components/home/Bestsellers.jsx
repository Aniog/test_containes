import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { getBestsellers } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Bestsellers() {
  const products = getBestsellers()
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="mx-auto max-w-8xl px-5 py-20 md:px-8 md:py-28">
      <div className="mb-12 text-center">
        <p className="text-[11px] uppercase tracking-[0.4em] text-gold">Most Loved</p>
        <h2 className="mt-3 font-serif text-4xl text-ink md:text-5xl">Bestsellers</h2>
        <div className="mx-auto mt-6 h-px w-16 bg-sand" />
      </div>

      <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 md:gap-x-8 lg:grid-cols-5">
        {products.map((p, i) => (
          <ProductCard key={p.id} product={p} index={i} />
        ))}
      </div>

      <div className="mt-14 text-center">
        <Link
          to="/shop"
          className="inline-flex items-center justify-center border border-ink px-10 py-4 text-xs uppercase tracking-widest3 text-ink transition-all duration-300 hover:bg-ink hover:text-ivory"
        >
          View All
        </Link>
      </div>
    </section>
  )
}
