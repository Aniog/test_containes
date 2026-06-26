import { useEffect } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import PageHero from "@/components/shared/PageHero"
import PageShell from "@/components/shared/PageShell"
import { Container, Section, SectionHeading } from "@/components/ui/primitives"
import { Button } from "@/components/ui/button"
import { PRODUCT_CATEGORIES } from "@/data/content"

export default function Products() {
  useEffect(() => {
    document.title =
      "Products We Source | China Sourcing Categories | SSourcing China"
  }, [])

  return (
    <PageShell>
      <PageHero
        eyebrow="Products we source"
        title="A sourcing network across eight major categories"
        description="We focus on categories where our team has on-the-ground experience — so shortlists are practical, not generic."
      />

      <Section className="bg-white">
        <Container>
          <SectionHeading
            eyebrow="Categories"
            title="What we regularly source"
            description="If you don't see your product listed here, just ask — we often source specialty items on request."
            className="mb-12"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCT_CATEGORIES.map((p) => (
              <article
                key={p.slug}
                className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow"
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
                <div className="flex flex-1 flex-col p-6">
                  <h3
                    id={`product-${p.slug}-title`}
                    className="text-lg font-semibold text-slate-900"
                  >
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-100">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="Don't see your category?"
                title="We also source specialty items on request"
                description="Beyond the eight categories above, our team has worked on lighting, hardware, promotional products, pet supplies, stationery and more. Send us your spec and we'll let you know honestly whether we can help."
              />
            </div>
            <div className="lg:col-span-5 lg:flex lg:justify-end">
              <Button as={Link} to="/contact" variant="accent" size="lg">
                Ask about your product
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </PageShell>
  )
}