import PageHero from '../components/common/PageHero.jsx'
import { caseStudies } from '../data/siteContent.js'

const CaseStudies = () => (
  <main className="bg-slate-50 text-slate-950">
    <PageHero
      eyebrow="Case studies"
      title="Practical sourcing examples for overseas buyers"
      description="These examples show the type of supplier verification, quality control, production follow-up, and shipping coordination support SSourcing China provides."
    />

    <section className="py-20">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:px-8">
        {caseStudies.map((study) => (
          <article key={study.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">{study.industry}</span>
            <h2 className="mt-5 text-2xl font-bold text-slate-950">{study.title}</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              <div>
                <p className="font-semibold text-slate-950">Challenge</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">{study.challenge}</p>
              </div>
              <div>
                <p className="font-semibold text-slate-950">Support</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">{study.solution}</p>
              </div>
              <div>
                <p className="font-semibold text-slate-950">Result</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">{study.result}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  </main>
)

export default CaseStudies
