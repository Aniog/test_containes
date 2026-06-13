import { Link } from 'react-router-dom'
import ImagePageShell from '../components/common/ImagePageShell.jsx'
import PageHero from '../components/common/PageHero.jsx'
import SectionIntro from '../components/common/SectionIntro.jsx'
import { processSteps } from '../siteContent.js'

function HowItWorks() {
  return (
    <ImagePageShell>
      <main>
        <PageHero
          eyebrow="How It Works"
          title="A practical sourcing workflow for remote buyers"
          description="We help organize the work between your team and China suppliers so each stage has clearer follow-up and better visibility."
        />

        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-6">
              <SectionIntro
                eyebrow="Process overview"
                title="What happens from inquiry to shipment coordination"
                description="The exact scope depends on your sourcing stage, but the structure below reflects how many projects are supported."
              />
              <img
                alt="China sourcing workflow"
                className="h-[360px] w-full rounded-[2rem] object-cover"
                data-strk-img-id="process-page-img-a92d10"
                data-strk-img="[process-page-desc] [process-page-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <h2 id="process-page-title" className="sr-only">China sourcing workflow</h2>
              <p id="process-page-desc" className="sr-only">Sourcing briefing supplier verification production follow-up quality inspection and shipping coordination.</p>
            </div>
            <div className="grid gap-4">
              {processSteps.map((step) => (
                <article key={step.step} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">Step {step.step}</p>
                      <h2 className="mt-2 text-xl font-semibold text-slate-900">{step.title}</h2>
                    </div>
                    <p className="max-w-xl text-base leading-7 text-slate-600">{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: 'Buyer brief and target alignment',
                  text: 'We first need enough context to understand the product, target market, expected quantity, and practical sourcing concerns.',
                },
                {
                  title: 'Supplier and execution review',
                  text: 'We focus on supplier suitability and follow-up rather than only collecting many quotations without screening.',
                },
                {
                  title: 'Production to shipping follow-through',
                  text: 'If your project moves forward, we help keep inspection, production progress, and shipping communication more organized.',
                },
              ].map((item) => (
                <article key={item.title} className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                  <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 px-8 py-10 text-slate-50 shadow-sm md:px-10">
            <h2 className="text-3xl font-semibold tracking-tight">Ready to discuss your sourcing process?</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
              Share where you are in the buying process and what support you need on the China side.
            </p>
            <Link to="/contact#quote-form" className="mt-6 inline-flex rounded-full bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800">
              Get a Free Sourcing Quote
            </Link>
          </div>
        </section>
      </main>
    </ImagePageShell>
  )
}

export default HowItWorks
