import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { products } from '@/data/products'
import ProductCard from '@/components/product/ProductCard'
import Button from '@/components/ui/Button'

export default function Bestsellers() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-ivory">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="text-center mb-14">
          <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-gold mb-3">
            Most Loved
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ink">Bestsellers</h2>
          <div className="mx-auto mt-6 h-px w-16 bg-sand" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-10">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="text-center mt-14">
          <Button as={Link} to="/shop" variant="outline" size="md">
            View All Jewelry
          </Button>
        </div>
      </div>
    </section>
  )
}
