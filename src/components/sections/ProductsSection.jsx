import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { productCategories } from '@/data/content'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'

export default function ProductsSection({ limit }) {
  const ref = useRef(null)
  const items = limit ? productCategories.slice(0, limit) : productCategories

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) {
        ImageHelper.loadImages(strkImgConfig, ref.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={ref} className="bg-surface">
      <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <SectionHeading
          eyebrow="Products We Source"
          title="Categories we know well"
          subtitle="We source across a wide range of consumer and light industrial products, with established supplier networks in each category."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((p) => (
            <Link
              key={p.id}
              to="/products"
              className="group overflow-hidden rounded-xl border border-border-base bg-white shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  alt={p.name}
                  data-strk-img-id={p.imgId}
                  data-strk-img={`[${p.descId}] [${p.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 id={p.titleId} className="text-base font-semibold text-ink">
                  {p.name}
                </h3>
                <p id={p.descId} className="mt-1.5 text-sm text-slate-body">
                  {p.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button to="/products" size="lg" variant="navy">
            See All Categories
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
