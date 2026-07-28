import { caseStudies } from '@/content/siteContent'
import PageHero from '@/components/shared/PageHero'
import SectionHeading from '@/components/shared/SectionHeading'

const CaseStudies = () => {
  return (
    <div className="bg-slate-50 text-slate-900">
      <PageHero
        eyebrow="Case Studies"
        title="Practical sourcing situations we help buyers manage"
        description="These case examples show the kinds of coordination, verification, and follow-up work that global buyers commonly need when sourcing from China."
        titleId="case-hero-title"
        descriptionId="case-hero-description"
        visualId="case-hero-bg-85ef61"
        visualBadge="China factory coordination, inspections, and shipment follow-up"
        visualNote="Real sourcing value often comes from reducing uncertainty, improving communication, and keeping execution under closer control."
        chips={caseStudies.map((item) => item.sector)}
        primaryCta={{ label: 'Get a Free Sourcing Quote', to: '/contact' }}
        secondaryCta={{ label: 'Read Blog', to: '/blog' }}
      />

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <SectionHeading
          eyebrow="Examples"
          title="A closer look at B2B sourcing support scenarios"
          description="Written in a straightforward way to show how supplier search, factory verification, quality control, and shipment coordination can support better buying outcomes."
          align="center"
        />
        <div className="mt-12 space-y-6">
          {caseStudies.map((study, index) => (
            <article
              key={study.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
                    Case {String(index + 1).padStart(2, '0')}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
                    {study.title}
                  </h2>
                </div>
                <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                  {study.sector}
                </span>
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-3">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                    Buyer situation
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{study.challenge}</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                    Our role
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{study.solution}</p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                    Outcome
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{study.result}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
