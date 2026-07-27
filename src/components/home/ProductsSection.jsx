import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { productCategories } from '@/data/site'
import SectionHeading from '@/components/shared/SectionHeading'

export default function ProductsSection() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <section ref={containerRef} className="section-pad bg-canvas">
      <div className="container-page">
        <SectionHeading
          eyebrow="Products We Source"
          title="Categories we know how to source well"
          subtitle="We work across the manufacturing clusters where each product type is actually made, with inspectors who understand the relevant quality standards."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((p) => (
            <article key={p.id} className="group overflow-hidden rounded-xl border border-slate-200 bg-white">
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  alt={p.title}
                  data-strk-img-id={p.imgId}
                  data-strk-img={`[${p.descId}] [${p.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 id={p.titleId} className="text-lg font-bold text-ink">{p.title}</h3>
                <p id={p.descId} className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Link to="/products" className="btn-secondary">
            See all product categories
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
