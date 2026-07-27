import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import { processSteps } from '../data/siteContent.js'
import { useStrkImages } from '../hooks/useStrkImages.js'

const HowItWorks = () => {
  const containerRef = useStrkImages()

  return (
    <main ref={containerRef} className="bg-slate-50 text-slate-950">
      <PageHero
        eyebrow="How it works"
        title="A structured sourcing process for buyers outside China"
        description="We turn product requirements into supplier options, verification steps, production monitoring, inspection checks, and shipment coordination."
        imageId="how-process-production-docs-5e91d7"
        imageAlt="Sourcing coordinator reviewing factory production and shipping documents"
        visualContext="professional China sourcing coordinator reviewing factory production line and export shipping documents"
      />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5">
            {processSteps.map((step, index) => (
              <article key={step.step} className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-950 shadow-sm md:grid md:grid-cols-[5rem_1fr] md:gap-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-700 text-base font-bold text-white">{step.step}</div>
                <div className="mt-4 md:mt-0">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Stage {index + 1}</p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-950">{step.title}</h2>
                  <p className="mt-3 text-base leading-7 text-slate-600">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-3xl bg-slate-950 p-8 text-white">
            <h2 className="text-2xl font-bold text-white">Ready to discuss a product brief?</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">Send specifications, target quantity, destination market, and the sourcing stage you are currently in.</p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500">
              Get a Free Sourcing Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HowItWorks
