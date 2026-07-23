import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'
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

  const bestsellers = products.filter((p) => p.bestseller)

  return (
    <section ref={ref} className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-gold">
            Most Loved
          </p>
          <h2 className="mt-3 font-serif text-3xl text-ink md:text-5xl">
            Bestsellers
          </h2>
          <div className="mx-auto mt-5 h-px w-12 bg-gold" />
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 md:gap-x-8 lg:grid-cols-5">
          {bestsellers.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/shop"
            className="inline-flex border border-ink px-10 py-4 text-xs uppercase tracking-widest2 text-ink transition-all duration-300 hover:bg-ink hover:text-cream"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  )
}
