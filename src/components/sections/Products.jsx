import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { PRODUCT_CATEGORIES } from "@/data/site"
import SectionHeader from "@/components/ui/SectionHeader"

export default function Products({ limit }) {
  const containerRef = useRef(null)
  const items = limit ? PRODUCT_CATEGORIES.slice(0, limit) : PRODUCT_CATEGORIES

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Products we source"
          title="Categories we know well"
          description="We've sourced across these product families for buyers in North America, Europe, and Australia — with audited factories and proven QC."
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-all"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  alt={product.name}
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 id={product.titleId} className="text-lg font-bold text-slate-900">
                  {product.name}
                </h3>
                <p id={product.descId} className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {limit && (
          <div className="mt-12 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-800"
            >
              Browse all categories
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
