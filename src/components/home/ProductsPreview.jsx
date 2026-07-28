import { useEffect, useRef } from "react"
import { Section, SectionHeader } from "@/components/shared/Section"
import { productCategories } from "@/data/content"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function ProductsPreview() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const items = productCategories.slice(0, 6)

  return (
    <Section id="products" className="bg-bg" >
      <SectionHeader
        eyebrow="Products We Source"
        title="Categories We Source Every Day"
        subtitle="We work across China's major manufacturing hubs to source a wide range of consumer and industrial products."
      />

      <div ref={ref} className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <Link
            key={item.id}
            to="/products"
            className="group rounded-2xl overflow-hidden border border-line bg-surface shadow-sm hover:shadow-lg transition-all"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
              <img
                alt={item.title}
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5">
              <h3 id={item.titleId} className="text-base font-bold text-ink group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p id={item.descId} className="mt-1.5 text-sm text-muted leading-relaxed line-clamp-2">
                {item.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
        >
          Browse all categories <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </Section>
  )
}
