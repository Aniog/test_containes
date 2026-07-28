import { Link } from "react-router-dom"
import { ArrowRight, PackageSearch } from "lucide-react"
import PageHeader from "@/components/shared/PageHeader"
import CtaBanner from "@/components/shared/CtaBanner"
import { productCategories } from "@/data/products"
import { SectionHeading } from "@/components/ui/section-heading"
import { Button } from "@/components/ui/button"
import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

export default function Products() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <>
      <PageHeader
        breadcrumb="Products We Source"
        eyebrow="Products We Source"
        title="Categories we source with confidence"
        description="We focus on manufacturing clusters where we have audited suppliers and proven QC procedures. If your product isn't listed, ask us - we likely handle it."
      />

      <section className="py-16 md:py-24" ref={containerRef}>
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((cat) => (
              <article
                key={cat.id}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    alt={cat.title}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 id={cat.titleId} className="text-lg font-semibold text-foreground">
                    {cat.title}
                  </h3>
                  <p id={cat.descId} className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {cat.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-16 md:py-24">
        <div className="mx-auto max-w-content px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Don't See Your Product?"
                title="We source far more than what's listed"
                description="Our team covers most consumer and light-industrial categories. If your product is made in China, we can almost certainly find and vet a supplier for it."
              />
              <ul className="mt-8 space-y-3">
                {[
                  "Custom / OEM and ODM products",
                  "Private label and branded merchandise",
                  "Made-to-spec materials and components",
                  "Products requiring certifications (CE, FCC, RoHS, etc.)",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-foreground"
                  >
                    <PackageSearch className="h-5 w-5 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button as={Link} to="/contact" variant="primary" size="lg" className="mt-8">
                Ask about your product
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
            <div className="rounded-xl border border-border bg-white p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">
                How we match a product to a supplier
              </h3>
              <ol className="mt-5 space-y-4">
                {[
                  "We confirm your specs, target price, certifications, and quantity.",
                  "We shortlist factories in the right cluster with matching capability.",
                  "We verify each candidate's capacity, equipment, and export history.",
                  "We request samples and compare quality, lead time, and price.",
                  "You approve the supplier - we move to production and QC.",
                ].map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-50 text-xs font-bold text-primary">
                      {i + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {step}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
