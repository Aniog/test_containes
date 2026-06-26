import PageHeader from "@/components/shared/PageHeader"
import CtaBanner from "@/components/shared/CtaBanner"
import { Section, Container } from "@/components/ui/Section"
import { PRODUCT_CATEGORIES } from "@/data/site"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function Products() {
  return (
    <>
      <PageHeader
        eyebrow="Products We Source"
        title="Categories we source with confidence"
        description="We work across consumer and light-industrial products. For each category we know the factory clusters, common quality issues, and what to inspect."
      />

      <Section className="bg-white">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCT_CATEGORIES.map((cat) => (
              <article
                key={cat.id}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    alt={cat.name}
                    data-strk-img-id={cat.imgId}
                    data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src={PLACEHOLDER}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 id={cat.titleId} className="text-lg font-bold text-[#0B2545]">
                    {cat.name}
                  </h3>
                  <p id={cat.descId} className="mt-2 text-sm leading-relaxed text-slate-600">
                    {cat.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-slate-200 bg-[#F5F7FA] p-8 text-center">
            <h2 className="text-xl font-bold text-[#0B2545]">
              Don't see your product category?
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-600">
              We evaluate new categories during the briefing stage. If your
              product is something we can source reliably, we'll take it on —
              and if not, we'll tell you upfront.
            </p>
          </div>
        </Container>
      </Section>

      <CtaBanner
        title="Have a product to source?"
        description="Share your specifications and target price. We'll confirm feasibility and come back with a sourcing plan."
      />
    </>
  )
}
