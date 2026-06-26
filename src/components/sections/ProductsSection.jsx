import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Container, SectionHeading } from "@/components/ui/primitives"
import { productCategories } from "@/data/site"
import { useStrkImages } from "@/lib/useStrkImages"

export default function ProductsSection() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Products We Source"
          title="Categories we know how to source well"
          description="We work across a range of product categories, applying the right QC approach and supplier criteria for each."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((p) => (
            <article
              key={p.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <img
                alt={p.name}
                data-strk-img-id={p.imgId}
                data-strk-img={`[${p.descId}] [${p.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="h-48 w-full object-cover"
              />
              <div className="p-6">
                <h3 id={p.titleId} className="text-lg font-bold text-slate-900">{p.name}</h3>
                <p id={p.descId} className="mt-2 text-sm leading-relaxed text-slate-600">{p.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700 hover:text-blue-800"
          >
            View all categories <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </section>
  )
}
