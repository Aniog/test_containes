import * as React from "react"
import { useImageLoader } from "@/hooks/useImageLoader"
import PageHeader from "@/components/shared/PageHeader"
import SectionTitle from "@/components/shared/SectionTitle"
import { Card, CardContent } from "@/components/ui/card"
import CTASection from "@/components/home/CTASection"

const categories = [
  { title: "Electronics & Accessories", description: "Smart devices, cables, chargers, earphones, power banks, wearables, and consumer electronics components.", examples: ["Bluetooth speakers", "USB-C cables", "Smart home sensors"] },
  { title: "Machinery & Industrial Parts", description: "OEM components, tools, hardware, metal parts, plastic injection parts, and industrial equipment.", examples: ["CNC machined parts", "Molds & dies", "Pneumatic tools"] },
  { title: "Home, Garden & Furniture", description: "Indoor and outdoor furniture, kitchenware, lighting, décor, and household goods.", examples: ["Patio furniture", "LED lighting", "Kitchen organizers"] },
  { title: "Apparel, Bags & Textiles", description: "Garments, footwear, bags, fabrics, promotional textiles, and fashion accessories.", examples: ["Sportswear", "Tote bags", "Uniforms"] },
  { title: "Packaging & Printing", description: "Retail packaging, gift boxes, labels, inserts, and custom printed materials.", examples: ["Rigid boxes", "Paper bags", "Hang tags"] },
  { title: "Health, Beauty & Personal Care", description: "Cosmetics packaging, skincare tools, wellness devices, and personal care accessories.", examples: ["Serum bottles", "Makeup brushes", "Massage guns"] },
]

export default function Products() {
  const containerRef = useImageLoader()

  return (
    <div ref={containerRef}>
      <PageHeader
        title="Products we source from China"
        description="We source across major export categories, matching each project with suppliers that meet your quality and compliance needs."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products We Source" }]}
      />
      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionTitle
            eyebrow="Categories"
            title="Trusted sourcing across key industries"
            description="If you do not see your category below, contact us. Our supplier network covers many niche products."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, idx) => (
              <Card key={idx} className="overflow-hidden border-slate-200 hover:shadow-md transition-shadow">
                <div className="h-44 bg-slate-100 relative">
                  <img
                    data-strk-img-id={`category-thumb-${idx}-e5f6a7`}
                    data-strk-img={`[category-title-${idx}] [category-desc-${idx}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={category.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 id={`category-title-${idx}`} className="text-lg font-semibold text-slate-900">{category.title}</h3>
                  <p id={`category-desc-${idx}`} className="mt-2 text-sm text-slate-600 leading-relaxed">{category.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {category.examples.map((example, eIdx) => (
                      <span key={eIdx} className="inline-flex rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                        {example}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </div>
  )
}
