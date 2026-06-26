import { Section, Container, SectionHeading } from "@/components/ui/Section"
import Button from "@/components/ui/Button"
import { PRODUCT_CATEGORIES } from "@/data/site"
import { ArrowRight } from "lucide-react"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

export default function HomeProducts() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Products We Source"
            title="Categories we know how to source well"
            description="We work across consumer and light-industrial products, with experience in the factories and quality standards of each category."
          />
          <Button to="/products" variant="outline" className="shrink-0">
            Browse all categories
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
      </Container>
    </Section>
  )
}
