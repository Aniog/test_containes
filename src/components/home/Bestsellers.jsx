import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { getBestsellers } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Bestsellers() {
  const products = getBestsellers()
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products.length])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-cream">
      <div className="container-velmora">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow mb-3">Most Loved</p>
            <h2 className="font-serif font-light text-4xl md:text-5xl text-ink">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="text-xs uppercase tracking-widest2 text-espresso hover:text-champagne-deep transition-colors border-b border-espresso pb-1 self-start md:self-auto"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
