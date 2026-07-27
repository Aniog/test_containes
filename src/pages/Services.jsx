import { Link } from "react-router-dom"
import { ArrowRight, Check } from "lucide-react"
import Container from "@/components/ui/Container"
import SectionHeader from "@/components/ui/SectionHeader"
import Button from "@/components/ui/Button"
import Icon from "@/components/ui/Icon"
import PageHero from "@/components/shared/PageHero"
import { SERVICES } from "@/data/site"

const Services = () => {
  return (
    <>
      <PageHero
        id="services"
        eyebrow="Our services"
        title="Sourcing services that cover the full China buying journey"
        subtitle="Six core services you can take individually or as an end-to-end package. Every engagement is quoted in writing before we start."
      />

      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="space-y-12 md:space-y-16">
            {SERVICES.map((service, i) => (
              <article
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-start ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="lg:col-span-5">
                  <div
                    className="aspect-[4/3] w-full rounded-xl bg-[#EDF1F7] bg-cover bg-center border border-line"
                    data-strk-bg-id={`svc-${service.id}-img-3e7b2a`}
                    data-strk-bg={`[svc-${service.id}-points] [svc-${service.id}-title]`}
                    data-strk-bg-ratio="4x3"
                    data-strk-bg-width="800"
                  />
                </div>
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#0B2545] text-white flex items-center justify-center">
                      <Icon name={service.icon} className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-ink-muted uppercase tracking-wider">
                      Service {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2
                    id={`svc-${service.id}-title`}
                    className="text-2xl md:text-3xl font-bold text-ink leading-tight tracking-tight"
                  >
                    {service.title}
                  </h2>
                  <p
                    id={`svc-${service.id}-points`}
                    className="mt-4 text-base md:text-lg text-ink-subtle leading-relaxed"
                  >
                    {service.short}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-0.5 w-5 h-5 rounded-full bg-[#EDF1F7] text-[#0B2545] flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3" strokeWidth={3} />
                        </span>
                        <span className="text-sm md:text-base text-ink leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing approach */}
      <section className="py-16 md:py-24 bg-[#F4F6F9]">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <p className="uppercase tracking-wider text-xs font-semibold text-[#D62828] mb-3">
              How we charge
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-ink leading-tight tracking-tight">
              Flat fees, written in advance
            </h2>
            <p className="mt-4 text-base md:text-lg text-ink-subtle leading-relaxed">
              Most clients pay a flat service fee per engagement, depending on
              scope. Inspection fees are quoted per man-day. We do not add
              hidden markups on samples, freight, or inspection costs.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button as={Link} to="/contact" variant="primary" size="lg">
                Get a tailored quote
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button as={Link} to="/how-it-works" variant="outline" size="lg">
                See how it works
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Services
