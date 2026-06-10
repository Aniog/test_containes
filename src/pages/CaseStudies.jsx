import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Quote } from 'lucide-react'

const caseStudies = [
  {
    id: 'electronics-usa',
    category: 'Electronics',
    client: 'Consumer Electronics Retailer',
    location: 'United States',
    challenge: 'The client was paying premium prices to a trading company and experiencing inconsistent quality on USB-C accessories. They needed direct factory access with reliable QC.',
    solution: 'We identified 5 qualified factories, conducted on-site audits, negotiated direct pricing, and implemented a pre-shipment inspection protocol for every order.',
    results: ['35% reduction in unit cost', 'Quality defect rate dropped from 8% to under 1%', 'Lead time reduced by 2 weeks', 'Consistent monthly orders of 50,000+ units'],
    testimonial: 'SSourcing China helped us cut costs significantly while actually improving quality. Their factory audits gave us confidence we never had with our previous supplier.',
    imgId: 'case-electronics-img-3a9f2c',
    titleId: 'case-electronics-title',
    descId: 'case-electronics-desc',
  },
  {
    id: 'furniture-germany',
    category: 'Furniture',
    client: 'Modern Furniture Brand',
    location: 'Germany',
    challenge: 'A growing furniture brand needed to scale from 1 container per month to 10 containers while maintaining European quality standards and FSC certification.',
    solution: 'We mapped the furniture manufacturing cluster in Foshan, verified 3 factories with FSC certification, and set up a production monitoring system with weekly photo reports.',
    results: ['Scaled from 1 to 10 containers/month in 6 months', 'All factories FSC certified', 'Zero quality claims in 12 months', 'Established long-term supplier partnerships'],
    testimonial: 'The team understood our quality requirements from day one. Scaling production while maintaining standards seemed impossible until we worked with SSourcing China.',
    imgId: 'case-furniture-img-7b4e1d',
    titleId: 'case-furniture-title',
    descId: 'case-furniture-desc',
  },
  {
    id: 'apparel-uk',
    category: 'Apparel',
    client: 'Private Label Fashion Startup',
    location: 'United Kingdom',
    challenge: 'A new fashion brand needed to launch their first collection with 12 SKUs, from design to delivery, within a tight 8-week timeline and limited budget.',
    solution: 'We connected them with a flexible garment factory in Guangzhou, managed sample iterations, coordinated fabric sourcing, and supervised production with daily updates.',
    results: ['12 SKUs launched in 8 weeks', 'Under budget by 15%', 'All items passed AQL 2.5 inspection', 'Successful reorder within 4 weeks of launch'],
    testimonial: 'As a startup, we had no idea how to navigate Chinese manufacturing. SSourcing China made it straightforward and delivered beyond our expectations.',
    imgId: 'case-apparel-img-5c2a8e',
    titleId: 'case-apparel-title',
    descId: 'case-apparel-desc',
  },
  {
    id: 'industrial-australia',
    category: 'Industrial',
    client: 'Mining Equipment Distributor',
    location: 'Australia',
    challenge: 'The client needed custom-manufactured steel components with strict tolerances and material certifications for mining applications. Previous Chinese suppliers had failed quality tests.',
    solution: 'We identified specialized steel fabrication factories with ISO 9001 and relevant mining certifications, arranged trial orders with full material testing, and implemented a rigorous QC protocol.',
    results: ['100% pass rate on material testing', 'Cost savings of 40% vs. domestic manufacturing', 'Reliable quarterly orders established', 'Full traceability documentation provided'],
    testimonial: 'After two failed attempts with other agents, SSourcing China found us a factory that consistently meets our strict specifications. The quality documentation is excellent.',
    imgId: 'case-industrial-img-9d1f4b',
    titleId: 'case-industrial-title',
    descId: 'case-industrial-desc',
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Case Studies
            </h1>
            <p className="mt-6 text-lg text-slate-200 leading-relaxed">
              Real sourcing projects, real results. See how we've helped businesses across industries source successfully from China.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {caseStudies.map((cs, idx) => (
              <div key={cs.id} className="border-b border-slate-100 pb-16 last:border-0 last:pb-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                  <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                    <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {cs.category}
                    </span>
                    <h2 id={cs.titleId} className="mt-4 text-2xl md:text-3xl font-bold text-slate-800">
                      {cs.client}
                    </h2>
                    <p className="mt-1 text-sm text-slate-500">{cs.location}</p>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wide">Challenge</h3>
                      <p id={cs.descId} className="mt-2 text-slate-600 leading-relaxed">{cs.challenge}</p>
                    </div>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wide">Our Solution</h3>
                      <p className="mt-2 text-slate-600 leading-relaxed">{cs.solution}</p>
                    </div>

                    <div className="mt-6">
                      <h3 className="text-sm font-semibold text-slate-800 uppercase tracking-wide">Results</h3>
                      <ul className="mt-2 space-y-2">
                        {cs.results.map((result) => (
                          <li key={result} className="flex items-start gap-2 text-slate-700">
                            <span className="text-accent font-bold mt-0.5">✓</span>
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                    <img
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={cs.client}
                      className="rounded-xl shadow-md w-full"
                    />
                    <div className="mt-6 bg-slate-50 rounded-xl p-6 border border-slate-100">
                      <Quote className="w-6 h-6 text-accent/40 mb-2" />
                      <p className="text-slate-600 text-sm italic leading-relaxed">
                        "{cs.testimonial}"
                      </p>
                      <p className="mt-3 text-xs font-semibold text-slate-800">— {cs.client}, {cs.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Want Similar Results?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Every project starts with a conversation. Tell us what you need and we'll show you how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center mt-8 bg-white text-accent hover:bg-slate-50 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
