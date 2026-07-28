import { useEffect, useRef } from "react"
import PageHero from "@/components/shared/PageHero"
import { Section, SectionHeader } from "@/components/shared/Section"
import { productCategories } from "@/data/content"
import CTASection from "@/components/shared/CTASection"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { MapPin, Factory } from "lucide-react"

const hubs = [
  { city: "Shenzhen & Dongguan", specialty: "Electronics, smart devices, accessories" },
  { city: "Guangzhou & Shantou", specialty: "Apparel, textiles, toys" },
  { city: "Foshan", specialty: "Furniture, ceramics, building materials" },
  { city: "Yiwu & Wenzhou", specialty: "Promotional gifts, small commodities, hardware" },
  { city: "Ningbo & Shaoxing", specialty: "Home goods, fabrics, textiles" },
  { city: "Yongkang", specialty: "Hardware, tools, sports equipment" },
]

export default function Products() {
  const ref = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (ref.current) ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <>
      <PageHero
        breadcrumb="Products We Source"
        eyebrow="Products We Source"
        title="Products We Source Across China"
        subtitle="From consumer electronics to industrial hardware, we source across China's specialized manufacturing hubs to find the right factory for your product."
      />

      <Section className="bg-bg">
        <SectionHeader
          eyebrow="Categories"
          title="Industries We Work With"
          subtitle="A representative range of the product categories we source regularly. If your product is not listed, ask us - we likely source it too."
        />
        <div ref={ref} className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCategories.map((item) => (
            <article
              key={item.id}
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
              <div className="p-6">
                <h3 id={item.titleId} className="text-lg font-bold text-ink">
                  {item.title}
                </h3>
                <p id={item.descId} className="mt-2 text-sm text-muted leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-bg-alt">
        <SectionHeader
          eyebrow="Manufacturing Hubs"
          title="Sourcing Where the Factories Are"
          subtitle="China's manufacturing is clustered by region. We work on the ground in the right cluster for your product."
        />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hubs.map((hub) => (
            <div key={hub.city} className="rounded-2xl border border-line bg-surface p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 text-primary">
                  <MapPin className="w-5 h-5" />
                </span>
                <h3 className="text-base font-bold text-ink">{hub.city}</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">{hub.specialty}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex items-start gap-3 rounded-xl bg-blue-50 p-5">
          <Factory className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <p className="text-sm text-ink leading-relaxed">
            Don't see your product? We source across many more categories.
            <a href="/contact" className="text-primary font-semibold ml-1">Ask us about your product.</a>
          </p>
        </div>
      </Section>

      <CTASection
        title="Looking for a specific product?"
        subtitle="Send us your product specs and target price. We will identify the right cluster and shortlist verified factories."
      />
    </>
  )
}
