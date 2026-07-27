import { PRODUCT_CATEGORIES } from "@/data/content"
import { PageHeader } from "@/components/shared/PageHeader"
import { SectionHeading } from "@/components/ui/section-heading"
import { StrkImage } from "@/components/shared/StrkImage"
import { useImageLoader } from "@/hooks/useImageLoader"
import { CtaSection } from "@/components/shared/CtaSection"
import { Check } from "lucide-react"

const CATEGORY_DETAILS = [
  "Bluetooth speakers, chargers, and accessories",
  "Smart home devices and small appliances",
  "PCBA and electronic components",
]

export default function Products() {
  const ref = useImageLoader([])
  return (
    <>
      <PageHeader
        bgId="products-header-bg-7g8h9i"
        eyebrow="Products we source"
        title="Categories we source from China"
        description="We work across a broad range of product categories. If it is manufactured in China, we can usually find and verify a supplier for it."
      />

      <section ref={ref} className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Categories"
            title="Browse what we source"
            description="Each category comes with its own quality considerations. We tailor verification and inspection to the product."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCT_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                  <StrkImage
                    imgId={cat.imgId}
                    query={`[${cat.descId}] [${cat.titleId}]`}
                    ratio="4x3"
                    width={600}
                    alt={cat.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3
                    id={cat.titleId}
                    className="text-lg font-semibold text-brand-900"
                  >
                    {cat.name}
                  </h3>
                  <p id={cat.descId} className="mt-2 text-sm text-slate-600">
                    {cat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How we handle your category"
            title="Tailored to your product"
            description="Different products need different checks. We adapt our verification and inspection to what matters for your category."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-brand-900">
                What we check
              </h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Factory capability for your specific product",
                  "Relevant certifications and test reports",
                  "Material and component sourcing",
                  "Packaging and labeling requirements",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-slate-700"
                  >
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-brand-900">
                Example: Consumer Electronics
              </h3>
              <ul className="mt-4 space-y-3">
                {CATEGORY_DETAILS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-slate-700"
                  >
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
