import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ProductCard from '@/components/product/product-card'
import SectionHeading from '@/components/ui/section-heading'
import { PRODUCTS } from '@/data/products'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

export default function Bestsellers() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Most Loved"
          title="The Bestsellers"
          copy="Five pieces our community reaches for again and again — quiet statements in warm gold."
        />
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-5 lg:gap-x-6">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.id} product={product} eager={i < 2} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            to="/shop"
            className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-luxe text-ink transition-colors hover:text-gold-deep"
          >
            View All Pieces
            <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-luxe group-hover:translate-x-1" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  )
}
