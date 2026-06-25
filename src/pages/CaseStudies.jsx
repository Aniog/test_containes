import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Quote } from 'lucide-react'

const cases = [
  {
    id: 'electronics-retailer',
    title: 'Electronics Retailer — Germany',
    category: 'Electronics',
    challenge: 'Needed to find a reliable PCB assembly factory with ISO 13485 certification for medical-grade electronics, after previous supplier failed quality audits.',
    solution: 'We identified 8 potential factories, shortlisted 3 after initial screening, and conducted on-site audits. The selected factory passed all certification checks.',
    result: 'Reduced unit cost by 22% compared to previous supplier. Zero quality claims over 6 production runs.',
    testimonial: 'SSourcing China found us a factory we could not have found on our own. Their QC process saved us from a major quality issue on the second order.',
    client: 'Thomas M., Procurement Director',
    titleId: 'cs-electronics-title',
    descId: 'cs-electronics-desc',
    imgId: 'cs-electronics-img-r1a5',
  },
  {
    id: 'furniture-brand',
    title: 'Furniture Brand — United States',
    category: 'Home & Garden',
    challenge: 'A growing DTC furniture brand needed to move from domestic manufacturing to China to scale production while maintaining quality standards.',
    solution: 'We sourced 5 furniture factories in Foshan, arranged sample production, and set up a QC protocol with pre-shipment inspections for every container.',
    result: 'First container delivered in 8 weeks. Production costs reduced by 35% with equivalent quality.',
    testimonial: 'The transition to China manufacturing was seamless. SSourcing handled everything from factory selection to the first shipment arriving at our warehouse.',
    client: 'Sarah K., Founder & CEO',
    titleId: 'cs-furniture-title',
    descId: 'cs-furniture-desc',
    imgId: 'cs-furniture-img-s2b6',
  },
  {
    id: 'apparel-startup',
    title: 'Apparel Startup — Australia',
    category: 'Textiles & Apparel',
    challenge: 'First-time importer launching an activewear line. No experience with Chinese suppliers, concerned about fabric quality and sizing consistency.',
    solution: 'We matched them with a Guangzhou garment factory specializing in sportswear. Managed 3 sample rounds and set up size-grading QC checks.',
    result: 'Successfully launched with 3 production runs. Zero quality claims from end customers. Reorder rate of 85%.',
    testimonial: 'As a first-time buyer from China, I was nervous. SSourcing guided us through every step and the quality exceeded our expectations.',
    client: 'James L., Co-founder',
    titleId: 'cs-apparel-title',
    descId: 'cs-apparel-desc',
    imgId: 'cs-apparel-img-t3c7',
  },
  {
    id: 'auto-parts',
    title: 'Auto Parts Distributor — UK',
    category: 'Auto Parts',
    challenge: 'Needed to diversify supply chain away from a single source. Required IATF 16949 certified factories for brake components.',
    solution: 'Identified certified factories in Zhejiang, conducted technical audits, and managed trial orders with full dimensional inspection reports.',
    result: 'Onboarded 2 new qualified suppliers. Lead time reduced from 12 weeks to 8 weeks.',
    testimonial: 'The technical knowledge of the SSourcing team impressed us. They understood our automotive quality requirements from day one.',
    client: 'David R., Supply Chain Manager',
    titleId: 'cs-auto-title',
    descId: 'cs-auto-desc',
    imgId: 'cs-auto-img-u4d8',
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
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Case Studies
            </h1>
            <p className="mt-4 text-lg text-slate-300 leading-relaxed">
              Real sourcing projects we have managed for clients across different industries and countries.
            </p>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {cases.map((cs) => (
              <article key={cs.id} className="border border-slate-200 rounded-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                  <div className="lg:col-span-2">
                    <img
                      alt={cs.title}
                      data-strk-img-id={cs.imgId}
                      data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 3 4'/%3E"
                      className="w-full h-full min-h-[240px] object-cover bg-slate-100"
                    />
                  </div>
                  <div className="lg:col-span-3 p-6 md:p-8">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wide">{cs.category}</span>
                    <h2 id={cs.titleId} className="text-xl md:text-2xl font-bold text-slate-900 mt-2 mb-4">{cs.title}</h2>

                    <div className="space-y-3 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 mb-1">Challenge</h4>
                        <p id={cs.descId} className="text-slate-600 text-sm leading-relaxed">{cs.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 mb-1">Our Solution</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{cs.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 mb-1">Result</h4>
                        <p className="text-slate-700 text-sm leading-relaxed font-medium">{cs.result}</p>
                      </div>
                    </div>

                    <blockquote className="border-l-3 border-accent pl-4 py-2 bg-surface-alt rounded-r-lg">
                      <p className="text-slate-700 text-sm italic leading-relaxed">"{cs.testimonial}"</p>
                      <cite className="text-slate-500 text-xs not-italic mt-2 block">— {cs.client}</cite>
                    </blockquote>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="mt-4 text-slate-600 text-lg">
            Tell us about your sourcing needs and let us show you what we can do.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center mt-8 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-3.5 rounded-lg text-base no-underline transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
