import PageHero from '../components/PageHero.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { caseStudies } from '../data/siteContent.js'
import { useStrkImages } from '../hooks/useStrkImages.js'

const CaseStudies = () => {
  const containerRef = useStrkImages()

  return (
    <main ref={containerRef} className="bg-slate-50 text-slate-950">
      <PageHero
        eyebrow="Case studies"
        title="Practical examples of sourcing support in China"
        description="Every sourcing project is different. These examples show how local checks, follow-up, and coordination can support better buying decisions."
        imageId="case-studies-qc-report-66c2e8"
        imageAlt="Quality inspection report and product samples on a factory table"
        visualContext="quality inspection report checklist product samples and factory table for sourcing case study"
      />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Buyer scenarios"
            title="Support from supplier replacement to shipment coordination"
            description="We keep the scope practical: clarify the problem, collect facts, coordinate supplier action, and report useful next steps to the buyer."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <article key={study.title} className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm">
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">{study.sector}</span>
                <h2 className="mt-5 text-2xl font-bold text-slate-950">{study.title}</h2>
                <div className="mt-5 border-t border-slate-200 pt-5">
                  <p className="text-sm font-bold text-slate-900">Challenge</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{study.challenge}</p>
                </div>
                <div className="mt-5 border-t border-slate-200 pt-5">
                  <p className="text-sm font-bold text-slate-900">What we supported</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{study.result}</p>
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
