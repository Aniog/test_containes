import { useEffect, useRef } from 'react'
import SEO from '@/components/layout/SEO'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const cases = [
  {
    client: 'European Industrial Distributor',
    industry: 'Industrial Parts',
    title: 'Cutting defect rates on machined components',
    challenge: 'The client was receiving batches with inconsistent dimensions and surface defects from an unverified supplier.',
    solution: 'We audited 4 factories, selected one with proper CNC equipment and QC protocols, and implemented pre-shipment inspections.',
    result: 'Defect rate dropped from 8% to under 1% within two production cycles.',
    imgId: 'casestudy-industrial-ssourcing-1a2b',
  },
  {
    client: 'US Consumer Electronics Startup',
    industry: 'Electronics',
    title: 'Launching a new product on a tight timeline',
    challenge: 'The startup needed to find a reliable manufacturer and deliver a first order within 60 days.',
    solution: 'We sourced 3 qualified suppliers, managed sampling, verified certifications, and tracked production milestones daily.',
    result: 'First shipment delivered in 45 days, enabling a successful product launch.',
    imgId: 'casestudy-electronics-ssourcing-3c4d',
  },
  {
    client: 'Australian Retail Brand',
    industry: 'Packaging',
    title: 'Reducing packaging costs without quality loss',
    challenge: 'Packaging costs were eating into margins while print quality varied between batches.',
    solution: 'We identified a specialized packaging factory, optimized material specs, and set clear quality checkpoints.',
    result: 'Achieved a 20% cost reduction and improved print consistency across orders.',
    imgId: 'casestudy-packaging-ssourcing-5e6f',
  },
]

export default function CaseStudiesPage() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      <SEO
        title="Case Studies | China Sourcing Success Stories | SSourcing China"
        description="Read how SSourcing China helped businesses reduce defects, launch products faster, and cut sourcing costs."
      />
      <div ref={containerRef}>
        <section className="bg-slate-900 py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="section-label text-brand-400">Case Studies</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
              Sourcing success stories
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Real examples of how we help buyers improve quality, reduce risk, and save time.
            </p>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-page">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {cases.map((item) => (
              <article key={item.title} className="card overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className="aspect-[16/10] lg:aspect-auto overflow-hidden bg-slate-100">
                    <img
                      alt={item.title}
                      className="w-full h-full object-cover"
                      data-strk-img-id={item.imgId}
                      data-strk-img={`[casestudy-title-${item.title}] [casestudy-industry-${item.industry}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="700"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                  <div className="p-8 lg:p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-brand-50 text-brand-700 text-sm font-semibold rounded-full">
                        {item.industry}
                      </span>
                    </div>
                    <h2 id={`casestudy-title-${item.title}`} className="text-2xl font-bold mb-2">{item.title}</h2>
                    <p className="text-sm text-slate-500 mb-6">{item.client}</p>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold text-slate-900">Challenge</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.challenge}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">Solution</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.solution}</p>
                      </div>
                      <div className="bg-green-50 border border-green-100 rounded-lg p-4">
                        <h3 className="font-semibold text-green-800">Result</h3>
                        <p className="text-green-700 text-sm leading-relaxed">{item.result}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
