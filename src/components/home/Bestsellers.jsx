import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import ProductCard from '@/components/product/ProductCard'
import { products } from '@/data/products'

export default function Bestsellers() {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <section ref={ref} className="bg-stone py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12 flex flex-col items-center text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold-deep">
            Most Loved
          </p>
          <h2 className="mt-3 font-serif text-4xl text-stone-deep md:text-5xl">
            Bestsellers
          </h2>
          <div className="mt-5 h-px w-16 bg-gold/40" />
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/shop"
            className="inline-block border border-stone-deep/30 px-10 py-4 text-xs uppercase tracking-[0.2em] text-stone-deep transition-all duration-300 hover:border-gold-deep hover:bg-gold hover:text-espresso"
          >
            View All Jewelry
          </Link>
        </div>
      </div>
    </section>
  )
}
