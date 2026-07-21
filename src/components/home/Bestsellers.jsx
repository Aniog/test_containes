import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'

export default function Bestsellers() {
  const ref = useRef(null)
  const bestsellers = products.filter((p) => p.bestseller).slice(0, 5)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, node)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold mb-4">
            Most Loved
          </p>
          <h2
            id="bestsellers-title"
            className="font-serif text-4xl md:text-5xl text-ink"
          >
            Bestsellers
          </h2>
          <p className="text-stone text-sm mt-4 max-w-md mx-auto">
            The pieces our community reaches for again and again.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10">
          {bestsellers.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              sectionTitleId="bestsellers-title"
            />
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            to="/shop"
            className="inline-block border border-ink text-ink text-[11px] uppercase tracking-[0.2em] px-10 py-4 hover:bg-ink hover:text-cream transition-colors duration-300"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  )
}
