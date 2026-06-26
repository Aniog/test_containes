import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const caseStudies = [
  {
    id: 'electronics-startup',
    industry: 'Consumer Electronics',
    title: 'Helping a US Startup Source Custom IoT Devices',
    summary: 'A US-based IoT startup needed a reliable manufacturer for their smart home device. We identified 3 qualified factories, verified capabilities, and managed production from prototype to 10,000-unit delivery.',
    results: ['40% cost reduction vs. initial quotes', 'Zero defect rate on first production run', 'Delivered 2 weeks ahead of schedule'],
  },
  {
    id: 'furniture-brand',
    industry: 'Home Furniture',
    title: 'Scaling Furniture Production for a European Brand',
    summary: 'A European furniture brand struggled with inconsistent quality from their existing supplier. We audited alternative factories, implemented quality checkpoints, and coordinated consolidated shipping.',
    results: ['Defect rate reduced from 12% to under 2%', 'Shipping costs reduced by 25% through consolidation', 'Production capacity increased by 3x'],
  },
  {
    id: 'auto-parts',
    industry: 'Automotive Parts',
    title: 'Sourcing OEM Auto Parts for a Middle East Distributor',
    summary: 'A Middle East automotive distributor needed certified OEM parts from China. We verified supplier certifications, conducted material testing, and arranged compliance documentation for their market.',
    results: ['All parts passed local certification requirements', 'Established ongoing supply agreement with 2 factories', 'Lead time reduced from 90 to 45 days'],
  },
]

export default function CaseStudiesPreview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary-500 font-semibold text-sm uppercase tracking-wider">Case Studies</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-neutral-900">
            Real Results for Real Buyers
          </h2>
          <p className="mt-4 text-lg text-neutral-500 max-w-2xl mx-auto">
            See how we have helped businesses like yours source successfully from China.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="bg-white rounded-xl border border-neutral-200 p-6 md:p-8 hover:shadow-lg transition-shadow">
              <span className="inline-block bg-primary-50 text-primary-500 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                {study.industry}
              </span>
              <h3 className="text-lg font-bold text-neutral-900 mb-3">{study.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed mb-4">{study.summary}</p>
              <ul className="space-y-2">
                {study.results.map((result, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-neutral-700">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-primary-500 font-semibold hover:text-primary-600 transition-colors"
          >
            Read more case studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
