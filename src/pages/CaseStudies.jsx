import PageHero from '@/components/site/PageHero'
import { caseStudies } from '@/siteData'

function CaseStudies() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Examples of sourcing support for overseas buyers"
        description="These practical examples show how buyers use sourcing support to compare suppliers, reduce uncertainty, improve quality visibility, and prepare shipments more carefully."
        titleId="case-hero-title"
        descriptionId="case-hero-desc"
        imageId="case-hero-factory-review-62da11"
        imageContext="Factory quality review, supplier discussion, production documents, and practical sourcing project collaboration for import buyers."
        imageAlt="Factory review and sourcing project meeting"
      />

      <section className="py-16 md:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-6 lg:px-8">
          {caseStudies.map((study) => (
            <article key={study.title} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-2xl font-semibold tracking-tight text-slate-900">{study.title}</p>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                <div className="rounded-3xl bg-slate-50 p-6">
                  <p className="text-sm font-medium uppercase tracking-[0.16em] text-sky-700">Challenge</p>
                  <p className="mt-4 text-base leading-7 text-slate-600">{study.challenge}</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-6">
                  <p className="text-sm font-medium uppercase tracking-[0.16em] text-sky-700">Solution</p>
                  <p className="mt-4 text-base leading-7 text-slate-600">{study.solution}</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-6">
                  <p className="text-sm font-medium uppercase tracking-[0.16em] text-sky-700">Result</p>
                  <p className="mt-4 text-base leading-7 text-slate-600">{study.result}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default CaseStudies
