import { useEffect } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import PageHero from "@/components/shared/PageHero"
import PageShell from "@/components/shared/PageShell"
import { Container, Section, SectionHeading } from "@/components/ui/primitives"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/shared/icons"
import { SERVICES } from "@/data/content"

export default function Services() {
  useEffect(() => {
    document.title =
      "Sourcing Services | Supplier Sourcing, QC & Shipping | SSourcing China"
  }, [])

  return (
    <PageShell>
      <PageHero
        eyebrow="Our services"
        title="Six services that cover the full China sourcing journey"
        description="From finding the right factory to delivering goods to your warehouse, our team works in English and keeps you informed at every milestone."
      />

      <Section className="bg-white">
        <Container>
          <div className="space-y-6">
            {SERVICES.map((s, idx) => (
              <article
                key={s.id}
                id={s.id}
                className={`grid gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8 md:grid-cols-12 scroll-mt-24 ${
                  idx % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="md:col-span-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy-900 text-white">
                    <Icon name={s.icon} className="h-6 w-6" />
                  </div>
                  <h2 className="mt-5 text-2xl font-bold text-slate-900">
                    {s.title}
                  </h2>
                </div>
                <div className="md:col-span-8">
                  <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                    {s.short}
                  </p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2 text-sm text-slate-700"
                      >
                        <Icon
                          name="check"
                          className="h-4 w-4 mt-0.5 text-amber-500 shrink-0"
                        />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-2xl bg-navy-950 p-8 md:p-10 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold">
              Ready to start sourcing from China?
            </h2>
            <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
              Tell us what you're looking for and we'll reply within one
              business day with a fixed-fee proposal and a shortlist of
              verified factories.
            </p>
            <Button
              as={Link}
              to="/contact"
              variant="accent"
              size="lg"
              className="mt-6"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </Container>
      </Section>
    </PageShell>
  )
}