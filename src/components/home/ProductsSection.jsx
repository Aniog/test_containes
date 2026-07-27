import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import SectionHeading from '@/components/shared/SectionHeading'
import { PRODUCT_CATEGORIES } from '@/data/site'

const FEATURED = PRODUCT_CATEGORIES.slice(0, 6)

export default function ProductsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Products We Source"
          title="Categories we know inside out"
          description="We source across consumer product categories with established factory networks in the major manufacturing regions."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED.map((cat) => (
            <Link
              key={cat.id}
              to="/products"
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img
                  alt={cat.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  data-strk-img-id={`home-cat-${cat.id}`}
                  data-strk-img={`[home-cat-desc-${cat.id}] [home-cat-title-${cat.id}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-5">
                <h3 id={`home-cat-title-${cat.id}`} className="font-semibold text-slate-900 group-hover:text-primary-700">
                  {cat.title}
                </h3>
                <p id={`home-cat-desc-${cat.id}`} className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-slate-600">
                  {cat.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 font-semibold text-primary-600 transition-colors hover:text-primary-700"
          >
            View all product categories <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
