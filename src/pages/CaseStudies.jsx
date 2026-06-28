import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'
import { caseStudies } from '@/data/siteContent'

const CaseStudies = () => {
  return (
    <main>
      <PageHero
        slug="case-studies"
        eyebrow="Case studies"
        title="Illustrative sourcing situations we help overseas buyers manage"
        description="These examples show the type of support buyers request when they need clearer supplier visibility, quality checks, or better production coordination in China."
        secondaryTo="/contact"
        secondaryLabel="Discuss a similar project"
        imageAlt="China sourcing case studies and buyer support"
        imageCaption="Examples of sourcing work involving supplier checks, packaging review, and production follow-up."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Examples"
            title="Project types buyers bring to us"
            description="Every sourcing project is different, but many share the same need for reliable supplier screening and better follow-up during execution."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <article key={study.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                  Case {String(index + 1).padStart(2, '0')}
                </p>
                <h2 className="mt-4 text-2xl font-semibold text-slate-900">{study.title}</h2>
                <p className="mt-5 text-base leading-7 text-slate-600">{study.summary}</p>
                <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-5 text-sm leading-7 text-emerald-900">
                  {study.outcome}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default CaseStudies
