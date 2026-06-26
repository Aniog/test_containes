import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { Container, Section, SectionHeading } from "@/components/ui/primitives"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/shared/icons"
import { SERVICES } from "@/data/content"

export default function ServicesSection() {
  return (
    <Section id="services" className="bg-slate-50">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Six services that cover the full China sourcing journey"
          description="From finding the right factory to delivering the goods to your warehouse, our team works in English and keeps you informed at every step."
          align="center"
          className="mb-12"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.id}
              className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-navy-50 text-navy-900">
                <Icon name={s.icon} className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                {s.short}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <Icon
                      name="check"
                      className="h-4 w-4 mt-0.5 text-amber-500 shrink-0"
                    />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  to={`/services#${s.id}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-900 hover:text-navy-700"
                >
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button as={Link} to="/services" variant="secondary" size="lg">
            See all services
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </Section>
  )
}