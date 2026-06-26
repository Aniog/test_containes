import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { caseStudies, site } from '@/data/site'
import { Button } from '@/components/ui/Button'
import { Link } from 'react-router-dom'
import { useStrkImages } from '@/hooks/useStrkImages'

export default function CaseStudies() {
  const containerRef = useStrkImages()

  return (
    <div ref={containerRef}>
      <section className="bg-primary text-white py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <span className="inline-block uppercase tracking-wide text-accent font-semibold text-sm mb-4">
              Case Studies
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Client Results</h1>
            <p className="text-lg text-primary-light leading-relaxed">
              Real outcomes from buyers who used SSourcing China to manage their supply chain in
              China.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <Container>
          <div className="space-y-16">
            {caseStudies.map((study, idx) => (
              <article
                key={study.id}
                className="grid gap-8 md:grid-cols-2 items-center rounded-2xl border border-neutral-200 bg-white p-6 md:p-10 shadow-sm"
              >
                <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                  <div
                    className="rounded-xl bg-neutral-100 h-64 md:h-80 bg-cover bg-center"
                    data-strk-bg-id={`case-bg-${study.id}-c1d2e3`}
                    data-strk-bg={`[case-${study.id}-title] [case-${study.id}-region] [case-${study.id}-result]`}
                    data-strk-bg-ratio="16x9"
                    data-strk-bg-width="800"
                  />
                </div>
                <div className={idx % 2 === 1 ? 'md:order-1' : ''}>
                  <span className="inline-block text-xs font-semibold uppercase tracking-wide text-primary mb-3">
                    {study.region}
                  </span>
                  <h2 id={`case-${study.id}-title`} className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
                    {study.title}
                  </h2>
                  <p className="text-neutral-600 leading-relaxed mb-6">{study.summary}</p>
                  <div className="rounded-lg bg-primary-light p-5 mb-6">
                    <p className="text-sm font-semibold text-primary mb-1">Key Result</p>
                    <p id={`case-${study.id}-result`} className="text-neutral-700 font-medium">
                      {study.result}
                    </p>
                  </div>
                  <Button as={Link} to="/contact" variant="primary">
                    {site.cta}
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}
