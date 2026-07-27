import { useEffect, useRef } from 'react'
import PageHero from '@/components/shared/PageHero'
import { productCategories } from '@/data/site'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const clusters = [
  { region: 'Shenzhen & Dongguan', focus: 'Consumer electronics, smart devices, accessories' },
  { region: 'Guangzhou & Foshan', focus: 'Furniture, home goods, building materials' },
  { region: 'Yiwu & Zhejiang', focus: 'Small commodities, gifts, accessories' },
  { region: 'Jiangsu & Zhejiang', focus: 'Textiles, apparel, fabrics' },
  { region: 'Shandong', focus: 'Hardware, machinery parts, chemicals' },
]

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <>
      <PageHero
        eyebrow="Products We Source"
        title="Product categories sourced from the right clusters"
        subtitle="We work where each product type is actually manufactured, with inspectors who understand the relevant quality standards and common defects."
        bgQueryId="products-hero-bg-4d5e6f"
        bgQueryText="Chinese factory manufacturing products assembly line"
      />

      <section ref={containerRef} className="section-pad bg-canvas">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((p) => (
              <article key={p.id} className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white">
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
                <div className="flex flex-1 flex-col p-6">
                  <h2 id={p.titleId} className="text-lg font-bold text-ink">{p.title}</h2>
                  <p id={p.descId} className="mt-2 text-sm leading-relaxed text-muted">{p.desc}</p>
                  <Link to="/contact" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-steel hover:text-navy">
                    Source this category <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="eyebrow mb-3">Manufacturing Clusters</p>
            <h2 className="text-3xl md:text-4xl font-bold text-ink">Sourced from the regions that specialize</h2>
            <p className="mt-4 text-lg text-muted">
              China's manufacturing is regional. We match your product to the cluster that makes it best, which means better pricing, shorter lead times, and higher quality.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {clusters.map((c) => (
              <div key={c.region} className="rounded-xl border border-slate-200 bg-canvas p-6">
                <h3 className="text-base font-bold text-navy">{c.region}</h3>
                <p className="mt-2 text-sm text-muted">{c.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
