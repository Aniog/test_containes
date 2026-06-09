import { Link } from 'react-router-dom'
import { caseStudies } from '@/data/siteContent'
import CTAButton from '@/components/site/CTAButton'
import SectionHeading from '@/components/site/SectionHeading'

const CaseStudiesPreview = () => {
  return (
    <section className="bg-slate-50 py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Case studies"
          title="Examples of sourcing situations we help buyers manage"
          description="These case-style summaries show the type of sourcing support buyers often need when they want clearer supplier decisions and execution follow-up."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              className="rounded-[2rem] border border-slate-200 bg-white p-6 text-slate-900 shadow-sm"
              key={study.slug}>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                {study.sector}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">
                {study.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                <span className="font-semibold text-slate-900">Challenge:</span>{' '}
                {study.challenge}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                <span className="font-semibold text-slate-900">Approach:</span>{' '}
                {study.solution}
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                <span className="font-semibold text-slate-900">Outcome:</span>{' '}
                {study.result}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between gap-4">
          <Link className="text-sm font-semibold text-sky-700 hover:text-sky-800" to="/case-studies">
            See all case studies
          </Link>
          <CTAButton to="/contact">Discuss your sourcing project</CTAButton>
        </div>
      </div>
    </section>
  )
}

export default CaseStudiesPreview
