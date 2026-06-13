import { Link } from 'react-router-dom'
import ImagePageShell from '../components/common/ImagePageShell.jsx'
import PageHero from '../components/common/PageHero.jsx'
import SectionIntro from '../components/common/SectionIntro.jsx'
import { caseStudies } from '../siteContent.js'

function CaseStudies() {
  return (
    <ImagePageShell>
      <main>
        <PageHero
          eyebrow="Case Studies"
          title="Examples of practical sourcing support for buyers working remotely"
          description="These examples show the type of sourcing and execution support buyers often need when working with suppliers in China."
        />

        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="space-y-10">
            <SectionIntro
              eyebrow="Buyer situations"
              title="Focused support at different stages of the sourcing cycle"
              description="The work can differ by product and order stage, but the underlying goal is the same: improve clarity, follow-up, and decision quality."
            />
            <div className="grid gap-6 lg:grid-cols-3">
              {caseStudies.map((study) => (
                <article key={study.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <h2 className="text-xl font-semibold text-slate-900">{study.title}</h2>
                  <div className="mt-5 space-y-4 text-sm leading-6 text-slate-600">
                    <p><span className="font-semibold text-slate-900">Challenge:</span> {study.challenge}</p>
                    <p><span className="font-semibold text-slate-900">Support:</span> {study.support}</p>
                    <p><span className="font-semibold text-slate-900">Result:</span> {study.result}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <img
              alt="Quality inspection and shipment follow-up"
              className="h-[380px] w-full rounded-[2rem] object-cover"
              data-strk-img-id="case-studies-img-2ef4b8"
              data-strk-img="[case-studies-desc] [case-studies-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="space-y-6">
              <h2 id="case-studies-title" className="text-3xl font-semibold tracking-tight text-slate-900">From supplier review to shipment readiness</h2>
              <p id="case-studies-desc" className="text-base leading-7 text-slate-600">
                Buyers often need support not only when searching for suppliers, but also when production is active and quality or shipment timing needs closer coordination.
              </p>
              <Link to="/contact#quote-form" className="inline-flex rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800">
                Get a Free Sourcing Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
    </ImagePageShell>
  )
}

export default CaseStudies
