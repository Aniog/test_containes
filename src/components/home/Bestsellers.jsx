import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import ProductCard from '@/components/shop/ProductCard'
import { products } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'

export default function Bestsellers() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const bestsellers = products.filter((p) => p.bestseller)

  return (
    <section ref={containerRef} className="bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-2 font-sans text-xs uppercase tracking-[0.2em] text-gold">
              Most Loved
            </p>
            <h2 className="font-serif text-3xl text-espresso md:text-4xl">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="border-b border-espresso pb-1 text-xs uppercase tracking-[0.14em] text-espresso transition-colors hover:text-gold"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-5">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
