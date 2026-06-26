import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, CheckCircle } from 'lucide-react'

const caseStudies = [
  {
    id: 'eu-electronics',
    title: 'European Electronics Distributor Cuts Defect Rate by 94%',
    tag: 'Electronics',
    location: 'Germany',
    challenge: 'A mid-size electronics distributor in Germany needed to find reliable PCB suppliers for a new product line with strict EU compliance requirements (CE, RoHS). Previous suppliers had inconsistent quality and poor communication.',
    solution: 'We identified 3 certified factories in Shenzhen with proven CE/RoHS compliance, conducted on-site audits, and implemented a multi-stage QC process including incoming material inspection and pre-shipment testing.',
    results: [
      'Defect rate reduced from 8% to 0.5%',
      'Lead time cut by 30% through production monitoring',
      'All products passed EU compliance testing on first submission',
      'Established a dual-source strategy for supply chain resilience',
    ],
    imgId: 'case-eu-elec-x1y2z3',
    titleId: 'case-eu-elec-title',
    descId: 'case-eu-elec-desc',
  },
  {
    id: 'us-home-brand',
    title: 'US Home & Garden Brand Diversifies Supply Chain',
    tag: 'Home & Garden',
    location: 'United States',
    challenge: 'A growing home and garden brand was overly dependent on a single supplier and struggling with inconsistent quality, delayed shipments, and limited capacity during peak seasons.',
    solution: 'We verified 5 new suppliers across different manufacturing hubs (Guangdong, Zhejiang, Fujian), established quality benchmarks, and created a dual-source strategy with clear capacity allocation.',
    results: [
      'On-time delivery improved from 72% to 95%',
      'Quality score increased from 6.2/10 to 9.1/10',
      'Production capacity increased by 150% for peak seasons',
      'Cost savings of 12% through competitive supplier pricing',
    ],
    imgId: 'case-us-home-a4b5c6',
    titleId: 'case-us-home-title',
    descId: 'case-us-home-desc',
  },
  {
    id: 'au-apparel',
    title: 'Australian Apparel Retailer Launches New Line on Time',
    tag: 'Apparel',
    location: 'Australia',
    challenge: 'An Australian fashion retailer needed to launch a new seasonal line with small MOQs and tight deadlines. Traditional suppliers required high minimums that didn\'t fit their launch strategy.',
    solution: 'We negotiated flexible MOQs with two specialized garment factories, managed production across both facilities simultaneously, and implemented weekly quality checkpoints.',
    results: [
      'MOQ reduced from 1,000 to 200 units per style',
      'Delivered 2 weeks ahead of the seasonal deadline',
      'First-pass quality rate of 97.5%',
      'Successfully launched 45 SKUs in the first season',
    ],
    imgId: 'case-au-apparel-d7e8f9',
    titleId: 'case-au-apparel-title',
    descId: 'case-au-apparel-desc',
  },
  {
    id: 'ca-machinery',
    title: 'Canadian Machinery Importer Verifies Factory Capabilities',
    tag: 'Machinery',
    location: 'Canada',
    challenge: 'A Canadian industrial equipment importer needed to verify a factory\'s actual production capabilities before committing to a large order of CNC machinery. The factory\'s online presence looked promising but lacked verifiable references.',
    solution: 'We conducted a comprehensive on-site audit including production capacity assessment, equipment verification, quality system review, and reference checks with existing clients.',
    results: [
      'Identified capacity gaps that would have caused 3-month delays',
      'Found an alternative factory that met all requirements',
      'Saved an estimated $85,000 in potential losses',
      'Established a long-term partnership with the verified supplier',
    ],
    imgId: 'case-ca-machinery-g1h2i3',
    titleId: 'case-ca-machinery-title',
    descId: 'case-ca-machinery-desc',
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
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-amber font-semibold text-sm uppercase tracking-wider mb-2">Case Studies</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
              Real Results for Real Clients
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              See how businesses across different industries and countries have improved their China sourcing with our support.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {caseStudies.map((cs) => (
            <article key={cs.id} className="border border-slate-200 rounded-xl overflow-hidden">
              <div className="aspect-[16/9] bg-slate-100 overflow-hidden">
                <img
                  alt={cs.title}
                  data-strk-img-id={cs.imgId}
                  data-strk-img={`[${cs.descId}] [${cs.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-navy/5 text-navy text-xs font-semibold px-3 py-1 rounded-full">{cs.tag}</span>
                  <span className="text-slate-500 text-sm">{cs.location}</span>
                </div>
                <h2 id={cs.titleId} className="text-xl md:text-2xl font-bold text-slate-900 mb-4">{cs.title}</h2>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-2">Challenge</h3>
                    <p id={cs.descId} className="text-slate-600 text-sm leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-2">Solution</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{cs.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-2">Results</h3>
                    <ul className="space-y-2">
                      {cs.results.map((result) => (
                        <li key={result} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                          <span className="text-slate-700 text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Want Results Like These?</h2>
          <p className="text-slate-600 text-lg mb-8">
            Tell us about your sourcing challenge and see how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-amber hover:bg-amber-dark text-white px-8 py-3.5 rounded-lg text-base font-semibold transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
