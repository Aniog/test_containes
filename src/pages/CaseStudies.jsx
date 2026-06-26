import { PageHeader } from "@/components/sections/PageHeader"
import { Container, Button } from "@/components/ui/primitives"
import { caseStudies } from "@/data/site"
import { useStrkImages } from "@/lib/useStrkImages"
import CtaSection from "@/components/sections/CtaSection"

export default function CaseStudies() {
  const ref = useStrkImages([])

  return (
    <>
      <PageHeader
        eyebrow="Case Studies"
        title="How we help buyers source from China"
        description="Real projects showing how supplier verification, quality control, and logistics coordination made a measurable difference."
      />

      <section ref={ref} className="py-16 md:py-24">
        <Container>
          <div className="space-y-10">
            {caseStudies.map((c) => (
              <article
                key={c.id}
                className="grid gap-8 overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-2 md:p-10"
              >
                <img
                  alt={c.client}
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[${c.descId}] [${c.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-64 w-full rounded-xl object-cover md:h-full"
                />
                <div>
                  <span className="inline-flex w-fit items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                    {c.industry}
                  </span>
                  <h2 id={c.titleId} className="mt-3 text-2xl font-bold text-slate-900">{c.client}</h2>
                  <span id={c.descId} className="sr-only">{c.challenge}</span>

                  <div className="mt-5 space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Challenge</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-700">{c.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Our approach</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-700">{c.approach}</p>
                    </div>
                    <div className="rounded-lg bg-green-50 p-4">
                      <p className="text-xs font-semibold uppercase tracking-wide text-green-700">Result</p>
                      <p className="mt-1 text-sm text-slate-700">{c.result}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button to="/contact">Start your sourcing project</Button>
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  )
}
