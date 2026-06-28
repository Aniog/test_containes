import PageHero from '@/components/PageHero.jsx'
import SectionHeading from '@/components/SectionHeading.jsx'
import { caseStudies } from '@/data/siteContent.js'

function CaseStudiesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Case studies"
        title="Practical sourcing scenarios for overseas buyers"
        description="These case-style summaries show the type of sourcing issues SSourcing China helps buyers handle across supplier selection, QC, and delivery coordination."
      >
        <div className="space-y-4 text-sm leading-7 text-ink">
          <p>
            The focus is on realistic B2B sourcing execution rather than inflated transformation stories.
          </p>
          <p className="text-muted">
            Each example reflects practical buying challenges where clearer supplier visibility and process control matter.
          </p>
        </div>
      </PageHero>

      <section className="bg-canvas py-16 md:py-24">
        <div className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Examples"
            title="Representative project situations"
            description="The exact sourcing approach always depends on the product, supplier base, and buyer requirements."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <article key={study.id} className="rounded-3xl border border-border-soft bg-surface p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent-strong">{study.sector}</p>
                <div className="mt-5 space-y-5">
                  <section>
                    <h2 className="text-lg font-semibold text-ink">Challenge</h2>
                    <p className="mt-2 text-sm leading-7 text-muted">{study.challenge}</p>
                  </section>
                  <section>
                    <h2 className="text-lg font-semibold text-ink">Action</h2>
                    <p className="mt-2 text-sm leading-7 text-muted">{study.action}</p>
                  </section>
                  <section>
                    <h2 className="text-lg font-semibold text-ink">Outcome</h2>
                    <p className="mt-2 text-sm leading-7 text-muted">{study.outcome}</p>
                  </section>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default CaseStudiesPage
