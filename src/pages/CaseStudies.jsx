import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const caseStudies = [
  {
    id: 'iot-startup',
    industry: 'Consumer Electronics',
    location: 'United States',
    title: 'Helping a US Startup Source Custom IoT Devices',
    challenge: 'A US-based IoT startup needed a reliable manufacturer for their smart home device. They had no experience sourcing from China and were concerned about quality control and intellectual property protection.',
    solution: 'We identified 3 qualified factories from our verified network, conducted on-site audits, and managed the entire production process from prototype development through mass production. We implemented strict quality checkpoints and IP protection measures.',
    results: [
      '40% cost reduction compared to initial supplier quotes',
      'Zero defect rate on first 10,000-unit production run',
      'Delivered 2 weeks ahead of schedule',
      'IP protection agreement established with manufacturer',
    ],
    testimonial: {
      quote: 'SSourcing China made our first manufacturing run in China feel seamless. Their team was responsive, thorough, and genuinely cared about our product quality.',
      author: 'CTO, Smart Home Startup',
    },
  },
  {
    id: 'furniture-brand',
    industry: 'Home Furniture',
    location: 'Germany',
    title: 'Scaling Furniture Production for a European Brand',
    challenge: 'A German furniture brand was experiencing inconsistent quality from their existing Chinese supplier. Defect rates were running at 12%, causing returns and damaging their brand reputation.',
    solution: 'We audited alternative factories specializing in their product type, identified two qualified manufacturers, and implemented a multi-stage quality inspection process. We also consolidated shipments to reduce logistics costs.',
    results: [
      'Defect rate reduced from 12% to under 2%',
      'Shipping costs reduced by 25% through consolidation',
      'Production capacity increased by 3x with dual sourcing',
      'Consistent quality across both suppliers',
    ],
    testimonial: {
      quote: 'The quality improvement was dramatic. Our return rate dropped significantly, and we finally felt confident about our China supply chain.',
      author: 'Procurement Director, Furniture Brand',
    },
  },
  {
    id: 'auto-distributor',
    industry: 'Automotive Parts',
    location: 'UAE',
    title: 'Sourcing OEM Auto Parts for a Middle East Distributor',
    challenge: 'A Middle East automotive distributor needed certified OEM parts from China but struggled to find suppliers who could meet their market\'s strict certification requirements and provide consistent quality documentation.',
    solution: 'We verified supplier certifications against target market requirements, conducted material testing, arranged compliance documentation, and established quality control protocols for ongoing production.',
    results: [
      'All parts passed local certification requirements on first submission',
      'Established ongoing supply agreements with 2 certified factories',
      'Lead time reduced from 90 to 45 days through process optimization',
      'Complete documentation package for customs clearance',
    ],
    testimonial: {
      quote: 'They understood our market requirements and found suppliers who could actually deliver certified parts. The documentation support was invaluable.',
      author: 'Operations Manager, Auto Parts Distributor',
    },
  },
  {
    id: 'textile-retailer',
    industry: 'Textiles & Apparel',
    location: 'Australia',
    title: 'Building a Reliable Supply Chain for an Australian Retailer',
    challenge: 'An Australian fashion retailer was working with multiple trading companies, resulting in inconsistent quality, delayed shipments, and lack of direct factory communication. They needed a more transparent and reliable sourcing model.',
    solution: 'We identified direct factory partners, bypassing trading companies, and established clear quality standards and production timelines. We implemented pre-production and pre-shipment inspections for every order.',
    results: [
      '30% cost savings by working directly with factories',
      'On-time delivery rate improved from 60% to 95%',
      'Quality consistency across seasonal collections',
      'Direct communication channel with factory management',
    ],
    testimonial: {
      quote: 'Finally, we have visibility into our supply chain. The direct factory relationships have transformed our sourcing experience.',
      author: 'Buying Manager, Fashion Retailer',
    },
  },
]

export default function CaseStudies() {
  return (
    <div>
      <section className="bg-primary-900 py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Case Studies</h1>
          <p className="text-lg text-primary-200 max-w-2xl mx-auto">
            Real examples of how we help businesses source successfully from China.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {caseStudies.map((study) => (
            <article key={study.id} className="border-b border-neutral-200 pb-16 last:border-0 last:pb-0">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="bg-primary-50 text-primary-500 text-xs font-semibold px-3 py-1 rounded-full">
                  {study.industry}
                </span>
                <span className="bg-neutral-100 text-neutral-600 text-xs font-semibold px-3 py-1 rounded-full">
                  {study.location}
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">{study.title}</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">Challenge</h3>
                  <p className="text-neutral-700 leading-relaxed">{study.challenge}</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">Our Approach</h3>
                  <p className="text-neutral-700 leading-relaxed">{study.solution}</p>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-3">Results</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {study.results.map((result, i) => (
                      <div key={i} className="flex items-start gap-2 bg-green-50 rounded-lg p-3">
                        <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-neutral-700">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {study.testimonial && (
                  <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-200">
                    <p className="text-neutral-700 italic leading-relaxed mb-3">"{study.testimonial.quote}"</p>
                    <p className="text-sm text-neutral-500 font-medium">— {study.testimonial.author}</p>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">Want Results Like These?</h2>
          <p className="text-neutral-500 mb-8">
            Tell us about your sourcing needs and see how we can help you achieve similar outcomes.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-600 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
