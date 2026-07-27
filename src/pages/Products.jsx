import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import PageHero from "@/components/sections/PageHero"
import { Card } from "@/components/ui/card"
import CtaBanner from "@/components/layout/CtaBanner"
import { products } from "@/data/content"

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Products we source"
        title="Product categories we source from China"
        description="Established supplier networks across the categories below. If yours is not listed, ask us — we likely have experience with it."
      />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => {
              const Icon = p.icon
              return (
                <Card key={p.id} className="overflow-hidden transition-shadow hover:shadow-md">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <img
                      alt={p.title}
                      data-strk-img-id={`products-page-${p.imgId}`}
                      data-strk-img={`[${p.descId}] [${p.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0f2a4a]/5 text-[#0f2a4a]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 id={p.titleId} className="mt-3 text-lg font-bold text-slate-900">
                      {p.title}
                    </h3>
                    <p id={p.descId} className="mt-2 text-sm leading-relaxed text-slate-600">
                      {p.desc}
                    </p>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Looking for a specific product?"
        subtitle="Tell us what you need to source and we will check feasibility and supplier availability for you."
      />
    </div>
  )
}
