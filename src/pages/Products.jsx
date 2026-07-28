import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Check } from "lucide-react"
import PageHeader from "@/components/ui/page-header"
import { SectionHeading } from "@/components/ui/section-heading"
import { Button } from "@/components/ui/button"
import CTASection from "@/components/sections/CTASection"
import { productCategories } from "@/data/content"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const hubs = [
  { city: "Shenzhen", focus: "Electronics, smart devices, accessories" },
  { city: "Guangzhou", focus: "Apparel, textiles, leather goods" },
  { city: "Yiwu", focus: "Small commodities, gifts, daily use items" },
  { city: "Foshan", focus: "Furniture, ceramics, home appliances" },
  { city: "Dongguan", focus: "Mold making, hardware, plastics" },
  { city: "Ningbo", focus: "Auto parts, stationery, hardware" },
]

export default function Products() {
  const ref = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="Products We Source"
        title="Categories we source from China"
        description="We source across China's major manufacturing hubs, covering consumer electronics, home goods, apparel, industrial parts, and more."
      />

      <section ref={ref} className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <SectionHeading
            eyebrow="Categories"
            title="A wide range of product categories"
            description="If it's made in China, we can usually find a qualified factory for it. Here are the categories we source most often."
          />

          <p id="products-section-title" className="sr-only">
            Products we source from China
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((cat) => (
              <div
                key={cat.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    alt={cat.title}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[products-${cat.id}-desc] [products-${cat.id}-title] [products-section-title]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 id={`products-${cat.id}-title`} className="text-lg font-bold text-ink">
                    {cat.title}
                  </h3>
                  <p id={`products-${cat.id}-desc`} className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {cat.desc}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <SectionHeading
            eyebrow="Manufacturing Hubs"
            title="Sourcing from the right regions"
            description="Different products are made in different regions. We match your product to the right manufacturing hub for better quality and price."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {hubs.map((hub) => (
              <div
                key={hub.city}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-ink">{hub.city}</h3>
                <p className="mt-2 text-sm text-muted">{hub.focus}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button as={Link} to="/contact" variant="secondary">
              Don't see your product? Ask us
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
