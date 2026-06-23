import CTASection from '../components/site/CTASection'
import PageHero from '../components/site/PageHero'
import { caseStudies } from '../data/siteContent'

const CaseStudies = () => (
  <main className="bg-white text-slate-900">
    <PageHero
      eyebrow="Case studies"
      title="Practical examples of sourcing support"
      description="These examples show how supplier screening, verification, quality control, and production follow-up can help overseas buyers manage risk."
    />
    <section className="py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:px-8">
        {caseStudies.map((item, index) => (
          <article className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm lg:grid-cols-[0.45fr_1fr] lg:p-8" key={item.title}>
            <div className="rounded-2xl bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">Case {String(index + 1).padStart(2, '0')}</p>
              <h2 className="mt-4 text-2xl font-bold text-slate-950">{item.title}</h2>
              <p className="mt-3 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-blue-700 ring-1 ring-slate-200">{item.industry}</p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              <div>
                <h3 className="font-semibold text-slate-950">Challenge</h3>
                <p className="mt-2 leading-7 text-slate-700">{item.challenge}</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-950">Approach</h3>
                <p className="mt-2 leading-7 text-slate-700">{item.approach}</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-950">Result</h3>
                <p className="mt-2 leading-7 text-slate-700">{item.result}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
    <CTASection />
  </main>
)

export default CaseStudies
