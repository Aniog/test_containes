import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Container, Section, SectionHeading } from "@/components/ui/primitives"
import { Button } from "@/components/ui/button"
import { PRODUCT_CATEGORIES } from "@/data/content"

export default function ProductsSection() {
  return (
    <Section id="products" className="bg-slate-100">
      <Container>
        <SectionHeading
          eyebrow="Products we source"
          title="A sourcing network across eight major categories"
          description="We focus on categories where our team has on-the-ground experience and existing factory relationships — so shortlists are practical, not generic."
          align="center"
          className="mb-12"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCT_CATEGORIES.map((p) => (
            <article
              key={p.slug}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/3] bg-slate-100">
                <img
                  alt={p.imgAlt}
                  data-strk-img-id={p.imgId}
                  data-strk-img="[product-category-title]"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3
                  className="text-base font-semibold text-slate-900"
                  id={`product-${p.slug}-title`}
                >
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  {p.body}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button as={Link} to="/products" variant="secondary" size="lg">
            See all categories
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </Section>
  )
}