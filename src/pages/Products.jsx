import { PageHeader } from "@/components/sections/PageHeader"
import { Container, Button } from "@/components/ui/primitives"
import { productCategories } from "@/data/site"
import { useStrkImages } from "@/lib/useStrkImages"
import CtaSection from "@/components/sections/CtaSection"

export default function Products() {
  const ref = useStrkImages([])

  return (
    <>
      <PageHeader
        eyebrow="Products We Source"
        title="Product categories we source from China"
        description="We apply category-specific supplier criteria and QC checklists so the products you receive match your specifications."
      />

      <section ref={ref} className="py-16 md:py-24">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((p) => (
              <article
                key={p.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <img
                  alt={p.name}
                  data-strk-img-id={p.imgId}
                  data-strk-img={`[${p.descId}] [${p.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-52 w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h2 id={p.titleId} className="text-lg font-bold text-slate-900">{p.name}</h2>
                  <p id={p.descId} className="mt-2 text-sm leading-relaxed text-slate-600">{p.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-slate-50 p-8 text-center md:p-12">
            <h2 className="text-2xl font-bold text-slate-900">Don't see your product category?</h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              We source across many categories beyond those listed. Tell us what you need and we will confirm whether it fits our capabilities.
            </p>
            <Button to="/contact" className="mt-6">Get a Free Sourcing Quote</Button>
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  )
}
