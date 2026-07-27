import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { Quote, ArrowRight } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { CASE_STUDIES } from "@/data/content"
import CtaBanner from "@/components/shared/CtaBanner"
import { Section } from "@/components/shared/Section"

export default function CaseStudies() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <>
      <section className="bg-gradient-to-b from-white to-page">
        <div className="container-x py-16 md:py-20">
          <p className="eyebrow">Case studies</p>
          <h1
            id="cases-h1"
            className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-ink-900 md:text-5xl"
          >
            Real projects, real numbers, no names changed
          </h1>
          <p
            id="cases-sub"
            className="mt-4 max-w-2xl text-base text-ink-700 md:text-lg"
          >
            A few examples of work we have done with overseas buyers. Numbers
            are typical of what a similar project could achieve, not promises
            for yours.
          </p>
        </div>
      </section>

      <Section className="bg-white">
        <div className="container-x" ref={ref}>
          <div className="grid gap-8">
            {CASE_STUDIES.map((cs) => (
              <article
                key={cs.id}
                id={`cs-${cs.id}`}
                className="card grid overflow-hidden lg:grid-cols-[1.1fr_1.4fr]"
              >
                <div
                  className="aspect-[4/3] bg-slate-100 lg:aspect-auto"
                  data-strk-bg-id={`cs-${cs.id}-bg-pg`}
                  data-strk-bg={`[cs-${cs.id}-summary] [cs-${cs.id}-industry] [cases-h1]`}
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="700"
                >
                  <img
                    alt={cs.industry}
                    className="h-full w-full object-cover"
                    data-strk-img-id={`cs-${cs.id}-img-pg`}
                    data-strk-img={`[cs-${cs.id}-summary] [cs-${cs.id}-industry] [cases-h1]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  />
                </div>
                <div className="flex flex-col gap-4 p-6 lg:p-8">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-ink-500">
                    <span
                      id={`cs-${cs.id}-industry`}
                      className="rounded-full bg-slate-100 px-2.5 py-0.5 font-medium text-ink-700"
                    >
                      {cs.industry}
                    </span>
                    <span>·</span>
                    <span>{cs.country}</span>
                  </div>
                  <h2
                    id={`cs-${cs.id}-summary`}
                    className="text-xl font-semibold text-ink-900"
                  >
                    {cs.summary}
                  </h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                        Scope
                      </p>
                      <p className="mt-1 text-sm text-ink-700">{cs.scope}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">
                        Outcome
                      </p>
                      <p className="mt-1 text-sm text-ink-700">{cs.outcome}</p>
                    </div>
                  </div>
                  <blockquote className="mt-2 flex items-start gap-2 border-t border-border-soft pt-4 text-sm">
                    <Quote className="mt-0.5 h-4 w-4 flex-none text-accent" />
                    <div>
                      <p className="italic text-ink-700">"{cs.quote}"</p>
                      <p className="mt-1 text-xs text-ink-500">— {cs.author}</p>
                    </div>
                  </blockquote>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-border-soft bg-white p-8 text-center">
            <h2 className="text-2xl font-semibold text-ink-900">
              Have a similar project?
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm text-ink-700">
              Send us a short description and we will tell you honestly whether
              we are the right partner for it.
            </p>
            <div className="mt-5">
              <Link to="/contact" className="btn-primary">
                Get a Free Sourcing Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <CtaBanner
        eyebrow="References on request"
        title="Need to speak with a current client?"
        subtitle="We are happy to put you in touch with a current buyer in your industry, with their permission. Just ask."
        primaryLabel="Request a reference"
        primaryTo="/contact"
        secondaryLabel="See our services"
        secondaryTo="/services"
      />
    </>
  )
}
