import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { ArrowRight } from "lucide-react"
import Section from "@/components/ui/Section"
import Button from "@/components/ui/Button"
import { productCategories } from "@/data/content"

export default function Products() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <>
      <Section background="light" className="pt-12 md:pt-20" id="top">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-500">
            Products We Source
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-navy-600 tracking-tight">
            Categories we cover across China's manufacturing regions
          </h1>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            We work with Chinese factories across the main consumer and
            light-industrial categories. If your product is not listed, just
            ask — we have a wider network of vetted suppliers.
          </p>
        </div>
      </Section>

      <Section background="white" className="pt-0">
        <div ref={ref} className="grid gap-8 md:grid-cols-2">
          {productCategories.map((cat) => (
            <article
              key={cat.id}
              id={cat.id}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card scroll-mt-24"
            >
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-2 relative aspect-[4/3] md:aspect-auto bg-slate-100">
                  <img
                    alt={`${cat.title} production in a Chinese factory`}
                    data-strk-img-id={`products-page-${cat.id}-e5f3a1`}
                    data-strk-img={`[${cat.id}-items] [${cat.id}-title] ${cat.imageQuery}`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="500"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-6 md:p-8">
                  <h2
                    id={`${cat.id}-title`}
                    className="text-xl md:text-2xl font-bold text-navy-600 tracking-tight"
                  >
                    {cat.title}
                  </h2>
                  <ul
                    id={`${cat.id}-items`}
                    className="mt-4 space-y-2 text-sm text-slate-700"
                  >
                    {cat.items.map((it) => (
                      <li key={it} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-500 flex-shrink-0" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-xs text-slate-500">
                    Common factory locations: Guangdong · Zhejiang · Jiangsu ·
                    Shandong · Fujian
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section background="light">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 md:p-12 text-center shadow-card">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-600 tracking-tight">
            Don't see your product category?
          </h2>
          <p className="mt-3 text-base text-slate-600 max-w-2xl mx-auto">
            We work with a wider range of Chinese factories beyond the list
            above. Send us a brief and we will tell you straight away whether
            we can help.
          </p>
          <div className="mt-6 flex justify-center">
            <Button to="/contact" variant="primary" size="md">
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Section>
    </>
  )
}
