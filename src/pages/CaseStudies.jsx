import { Link } from 'react-router-dom'
import PageHero from '@/components/site/PageHero'
import CaseStudyCard from '@/components/site/CaseStudyCard'
import { caseStudies, primaryCtaLabel } from '@/data/siteContent'

const CaseStudies = () => {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Buyer scenarios where stronger local sourcing support improved clarity"
        description="These case-study style examples reflect practical sourcing situations involving supplier search, verification, inspection, and shipment preparation."
        actions={[
          <Link
            key="contact"
            to="/contact"
            className="inline-flex h-12 items-center justify-center rounded-full bg-teal-600 px-6 text-sm font-semibold text-white transition hover:bg-teal-700"
          >
            {primaryCtaLabel}
          </Link>,
        ]}
        visual={
          <div className="rounded-[2rem] border border-slate-200 bg-slate-900 p-8 text-white shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
              What these examples show
            </p>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-200">
              <li>How buyers reduce uncertainty before placing or shipping orders</li>
              <li>How local follow-up helps with supplier communication and QC</li>
              <li>How practical reporting supports decision-making across time zones</li>
            </ul>
          </div>
        }
      />

      <section className="bg-slate-50 py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </section>
    </>
  )
}

export default CaseStudies
