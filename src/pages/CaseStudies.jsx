import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, DollarSign, Shield, CheckCircle } from 'lucide-react'
import CTASection from '@/components/home/CTASection'

const caseStudies = [
  {
    id: 'eco-packaging',
    title: 'Sustainable Packaging for a US Startup',
    industry: 'Packaging',
    client: 'US-based eco-friendly packaging startup',
    challenge: 'The client needed a manufacturer who could produce custom compostable packaging at scale, with strict environmental compliance and competitive pricing.',
    solution: 'We identified 8 sustainable packaging manufacturers in Guangdong, conducted on-site audits of 4, and shortlisted 2 that met all criteria. We negotiated pricing, managed sample development, and set up full production monitoring.',
    results: [
      '40% cost reduction vs. local US suppliers',
      'Scaled from 500 to 50,000 units in 6 months',
      '100% on-time delivery rate across 24 shipments',
      'Zero quality defects reported',
    ],
    quote: 'SSourcing China made the entire process seamless. They found us the perfect partner and managed everything from start to finish.',
    quoteAuthor: 'Michael Chen, Founder',
    stat1: { value: '40%', label: 'Cost Savings' },
    stat2: { value: '50K', label: 'Units/Month' },
  },
  {
    id: 'electronics-eu',
    title: 'Consumer Electronics for a European Retailer',
    industry: 'Electronics',
    client: 'Mid-sized European electronics retailer',
    challenge: 'The client wanted to launch a new line of smart home devices but lacked experience with Chinese manufacturers. They needed a partner who could ensure consistent quality across multiple production runs.',
    solution: 'We conducted a comprehensive supplier search across Shenzhen and Dongguan, verified 6 factories, and selected 2 primary manufacturers. We implemented a rigorous QC protocol with inspections at every stage.',
    results: [
      '30% landed cost savings compared to previous suppliers',
      '3 dedicated production lines within 2 months',
      'Pre-shipment QC passed with 99.2% yield rate',
      'Successful launch of 8 SKUs across 12 EU markets',
    ],
    quote: 'The quality control system SSourcing China set up gave us complete confidence. We have expanded from 3 to 8 products in just one year.',
    quoteAuthor: 'Anna Larsen, Procurement Director',
    stat1: { value: '30%', label: 'Cost Reduction' },
    stat2: { value: '8', label: 'SKUs Launched' },
  },
  {
    id: 'auto-parts',
    title: 'Auto Parts for an Australian Distributor',
    industry: 'Automotive',
    client: 'Australian automotive parts distributor',
    challenge: 'The client needed a reliable, long-term supply chain for 200+ auto parts SKUs. Previous experiences with Chinese suppliers had been mixed, with quality and delivery consistency being major concerns.',
    solution: 'We mapped the automotive supply chain in Zhejiang province, audited 10+ specialized factories, and built a managed supply network. We implemented standardized QC procedures and consolidated shipping.',
    results: [
      '25% margin improvement on landed costs',
      'Consistent monthly shipments for 18+ months',
      'Zero quality incidents across 120+ shipments',
      'Reduced supplier base from 15 to 5 strategic partners',
    ],
    quote: 'What sets SSourcing China apart is their commitment to consistency. Every shipment meets our standards, month after month.',
    quoteAuthor: 'James Whitfield, Operations Manager',
    stat1: { value: '25%', label: 'Margin Improvement' },
    stat2: { value: '120+', label: 'Shipments Delivered' },
  },
]

export default function CaseStudiesPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-neutral-900 to-neutral-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Case Studies</h1>
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Real results from real partnerships. See how we have helped businesses source successfully from China.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {caseStudies.map((cs, index) => (
            <div key={cs.id} className="bg-white rounded-xl border border-neutral-100 overflow-hidden shadow-sm">
              <div className="grid lg:grid-cols-5">
                {/* Stats sidebar */}
                <div className="lg:col-span-1 bg-brand-500 p-6 flex lg:flex-col items-center justify-center gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">{cs.stat1.value}</div>
                    <div className="text-sm text-brand-200">{cs.stat1.label}</div>
                  </div>
                  <div className="w-12 h-0.5 bg-brand-400" />
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">{cs.stat2.value}</div>
                    <div className="text-sm text-brand-200">{cs.stat2.label}</div>
                  </div>
                </div>
                {/* Content */}
                <div className="lg:col-span-4 p-6 md:p-8">
                  <span className="text-xs font-semibold text-brand-500 bg-brand-50 px-3 py-1 rounded-full">
                    {cs.industry}
                  </span>
                  <h2 className="text-2xl font-bold text-neutral-900 mt-3 mb-2">{cs.title}</h2>
                  <p className="text-sm font-medium text-neutral-500 mb-6">Client: {cs.client}</p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wide mb-1">Challenge</h3>
                      <p className="text-neutral-600 text-sm leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wide mb-1">Solution</h3>
                      <p className="text-neutral-600 text-sm leading-relaxed">{cs.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wide mb-2">Results</h3>
                      <ul className="space-y-2">
                        {cs.results.map((r) => (
                          <li key={r} className="flex items-start gap-2 text-sm text-neutral-700">
                            <CheckCircle className="w-4 h-4 text-brand-500 flex-shrink-0 mt-0.5" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-brand-300 pl-4 italic text-neutral-600 text-sm">
                    "{cs.quote}"
                    <footer className="text-neutral-500 mt-1 not-italic">— {cs.quoteAuthor}</footer>
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  )
}