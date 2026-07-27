import { useEffect, useRef } from "react"
import useDocumentTitle from "@/hooks/useDocumentTitle"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import PageHeader from "@/components/PageHeader"
import SectionHeader from "@/components/ui/SectionHeader"
import CTASection from "@/components/sections/CTASection"

const categories = [
  {
    title: "Machinery & Industrial Parts",
    description:
      "CNC machining, casting, forging, molds, industrial equipment, automation parts, and hardware components.",
    imgId: "products-page-machinery-img",
    titleId: "products-page-machinery-title",
  },
  {
    title: "Electronics & Components",
    description:
      "Consumer electronics, PCBA, power banks, cables, chargers, sensors, batteries, and accessories.",
    imgId: "products-page-electronics-img",
    titleId: "products-page-electronics-title",
  },
  {
    title: "Packaging & Print",
    description:
      "Folding cartons, rigid boxes, pouches, labels, stickers, gift packaging, and retail displays.",
    imgId: "products-page-packaging-img",
    titleId: "products-page-packaging-title",
  },
  {
    title: "Textiles & Apparel",
    description:
      "Men's and women's garments, sportswear, bags, footwear, fabrics, and fashion accessories.",
    imgId: "products-page-textiles-img",
    titleId: "products-page-textiles-title",
  },
  {
    title: "Home & Hardware",
    description:
      "Furniture, kitchenware, bathroom fittings, lighting, tools, fasteners, and building materials.",
    imgId: "products-page-home-img",
    titleId: "products-page-home-title",
  },
  {
    title: "Cosmetics & Personal Care",
    description:
      "Skincare and cosmetic packaging, makeup brushes, beauty tools, raw materials, and promotional sets.",
    imgId: "products-page-cosmetics-img",
    titleId: "products-page-cosmetics-title",
  },
]

export default function ProductsWeSource() {
  useDocumentTitle("Products We Source | SSourcing China")
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <div ref={ref}>
      <PageHeader
        badge="Products"
        title="Products we source from China"
        description="If it is manufactured in China, we can help you find a capable supplier and manage the order."
      />

      <section className="section bg-white">
        <div className="container-main">
          <div className="grid gap-8 md:grid-cols-2">
            {categories.map((category) => (
              <article
                key={category.title}
                className="card overflow-hidden transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                  <img
                    alt={category.title}
                    data-strk-img-id={category.imgId}
                    data-strk-img={`[${category.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 id={category.titleId} className="text-xl font-semibold text-slate-900">
                    {category.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {category.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-main max-w-3xl text-center">
          <SectionHeader
            title="Do not see your product category?"
            description="We source across many industries. Send us your product details and we will tell you how we can help."
          />
          <a
            href="/contact"
            className="btn-primary"
          >
            Request a Free Quote
          </a>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
