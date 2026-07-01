import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import ProductCard from '../ProductCard'

export default function Bestsellers({ products }) {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [products])

  return (
    <section ref={containerRef} className="bg-velmora-cream py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between md:mb-14">
          <div>
            <p className="mb-2 font-sans text-xs font-medium uppercase tracking-widest text-velmora-gold">
              Most Loved
            </p>
            <h2 className="font-serif text-3xl text-velmora-espresso md:text-4xl">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="hidden font-sans text-xs font-semibold uppercase tracking-widest text-velmora-espresso underline-offset-4 hover:underline sm:inline-block"
          >
            Shop All
          </Link>
        </div>

        <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
            />
          ))}
        </div>

        <div className="mt-10 text-center sm:hidden">
          <Link
            to="/shop"
            className="inline-block border border-velmora-espresso px-6 py-3 font-sans text-xs font-semibold uppercase tracking-widest text-velmora-espresso"
          >
            Shop All
          </Link>
        </div>
      </div>
    </section>
  )
}
