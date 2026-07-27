import { Link } from "react-router-dom"
import { ArrowRight, Check } from "lucide-react"
import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"
import Badge from "@/components/ui/Badge"
import PageHero from "@/components/shared/PageHero"
import { CASE_STUDIES, PROCESS_STEPS } from "@/data/site"
import useStrkImages from "@/hooks/useStrkImages"

const CaseStudies = () => {
  const ref = useStrkImages([])

  return (
    <>
      <PageHero
        id="cases"
        eyebrow="Case studies"
        title="Recent projects from real buyers"
        subtitle="A closer look at the briefs, the suppliers we chose, and the outcomes we delivered. Numbers are based on the actual engagement."
      />

      <section ref={ref} className="py-16 md:py-24 bg-white">
        <Container>
          <div className="space-y-10 md:space-y-14">
            {CASE_STUDIES.map((c, i) => (
              <article
                key={c.id}
                className="rounded-2xl border border-line bg-white overflow-hidden"
              >
                <div className="grid lg:grid-cols-12 gap-0">
                  <div
                    className="lg:col-span-5 aspect-[4/3] lg:aspect-auto bg-[#EDF1F7] bg-cover bg-center"
                    data-strk-bg-id={`case-full-${c.id}-bg-2d4a8e`}
                    data-strk-bg={`[case-full-${c.id}-summary] [case-full-${c.id}-headline]`}
                    data-strk-bg-ratio="4x3"
                    data-strk-bg-width="800"
                  />
                  <div className="lg:col-span-7 p-6 md:p-10">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <Badge variant="navy">{c.industry}</Badge>
                      <Badge variant="outline">{c.region}</Badge>
                      <Badge variant="gold">Case {String(i + 1).padStart(2, "0")}</Badge>
                    </div>
                    <h2
                      id={`case-full-${c.id}-headline`}
                      className="text-2xl md:text-3xl font-bold text-ink leading-tight tracking-tight mb-4"
                    >
                      {c.headline}
                    </h2>
                    <p
                      id={`case-full-${c.id}-summary`}
                      className="text-base text-ink-subtle leading-relaxed mb-6"
                    >
                      {c.summary}
                    </p>

                    <div className="grid grid-cols-3 gap-4 mb-6 rounded-xl bg-[#F4F6F9] p-4 md:p-5">
                      {c.results.map((r) => (
                        <div key={r.label}>
                          <div className="text-2xl md:text-3xl font-bold text-[#0B2545]">
                            {r.value}
                          </div>
                          <div className="text-xs text-ink-muted mt-1 leading-snug">
                            {r.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-sm font-bold uppercase tracking-wider text-ink-muted mb-3">
                      What we did
                    </h3>
                    <ul className="space-y-2.5">
                      {[
                        "Scoped brief, identified 3 candidate factories",
                        "Coordinated samples, ran tool & material checks",
                        "Conducted factory verification + pre-shipment inspection",
                        "Managed production follow-up and shipping",
                      ].map((step, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-ink">
                          <Check
                            className="w-4 h-4 mt-0.5 text-[#0B2545] flex-shrink-0"
                            strokeWidth={2.5}
                          />
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-[#F4F6F9]">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-ink leading-tight tracking-tight">
              Could your project be next?
            </h2>
            <p className="mt-4 text-base md:text-lg text-ink-subtle leading-relaxed">
              Send us a brief and we'll come back with realistic timelines,
              ballpark costs, and a shortlist of suppliers we can already
              recommend.
            </p>
            <Button as={Link} to="/contact" variant="primary" size="lg" className="mt-6">
              Get a Free Sourcing Quote
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}

export default CaseStudies
