import PageHero from '../components/PageHero.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { caseStudies } from '../data/siteData.js'

const CaseStudies = () => {
  return (
    <main>
      <PageHero
        heroId="cases-hero"
        eyebrow="Case studies"
        title="Practical sourcing situations we help manage"
        description="These examples show how supplier screening, quality inspection, production follow-up, and shipping coordination reduce common buying risks."
        imageId="cases-qc-report-cartons-1d7e45"
        visualHint="quality control report inspector checking cartons product packaging warehouse China export"
      />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Examples"
            title="Realistic buyer scenarios"
            description="Every sourcing project is different, but the core needs are usually similar: clear supplier information, accurate specifications, reliable follow-up, and fewer surprises."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((item) => (
              <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-7 text-slate-800 shadow-sm">
                <p className="text-sm font-semibold text-amber-600">{item.industry}</p>
                <h2 className="mt-3 text-xl font-bold text-slate-900">{item.title}</h2>
                <div className="mt-5 space-y-4 text-sm leading-6 text-slate-600">
                  <p><strong className="text-slate-800">Challenge:</strong> {item.challenge}</p>
                  <p><strong className="text-slate-800">Support:</strong> {item.solution}</p>
                  <p><strong className="text-slate-800">Outcome:</strong> {item.result}</p>
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
