import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, TrendingDown, BarChart3, Clock, Star, DollarSign, Shield } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import InquirySection from '@/components/home/InquirySection'

const caseStudies = [
  {
    company: 'EuroHome GmbH',
    industry: 'Home & Kitchenware',
    country: 'Germany',
    title: 'Sourcing Stainless Steel Cookware from Guangdong',
    challenge: 'EuroHome was sourcing cookware from European manufacturers at high cost. They needed a reliable Chinese supplier for 12 SKUs of stainless steel cookware with consistent quality, specific certifications for the EU market, and competitive pricing.',
    solution: 'We shortlisted and audited 6 cookware factories in Guangdong and Zhejiang, evaluated their production lines and quality systems, negotiated pricing, and set up a quality inspection protocol. We coordinated initial sample production and managed the first bulk order of 5,000 units.',
    results: [
      '40% cost reduction vs. European suppliers',
      'All 12 SKUs passed EU certification testing',
      'Consistent quality across multiple production batches',
      'On-time delivery within agreed 45-day lead time',
    ],
    metrics: [
      { label: 'Cost Savings', value: '40%' },
      { label: 'SKUs Sourced', value: '12' },
      { label: 'Annual Volume', value: '60,000+' },
    ],
    tags: ['Supplier Sourcing', 'Factory Audit', 'Quality Control'],
  },
  {
    company: 'TechParts Inc.',
    industry: 'Electronics',
    country: 'United States',
    title: 'PCB Assembly Sourcing in Shenzhen',
    challenge: 'An electronics startup needed to scale PCB assembly from prototype to mass production. They struggled with finding a manufacturer that could handle their technical specifications, maintain quality at scale, and offer competitive pricing for medium-volume runs.',
    solution: 'We identified 5 PCB manufacturers in Shenzhen with relevant certifications. After factory audits and sample evaluations, we selected a partner with strong SMT capabilities. We provided on-site production monitoring during scale-up and managed weekly quality checks.',
    results: [
      'Scaled from prototype to 10,000 units/month within 90 days',
      'Reduced per-unit cost by 55% through component sourcing optimization',
      'Zero defect rate on final pre-shipment inspection',
      'Established ongoing quality monitoring protocol',
    ],
    metrics: [
      { label: 'Scale-up Time', value: '90 Days' },
      { label: 'Cost Reduction', value: '55%' },
      { label: 'Monthly Volume', value: '10,000' },
    ],
    tags: ['Supplier Matching', 'Production Monitoring', 'Logistics'],
  },
  {
    company: 'BuildRight Construction',
    industry: 'Building Materials',
    country: 'United Kingdom',
    title: 'Tile & Sanitary Ware Sourcing from Foshan',
    challenge: 'A UK construction firm needed to source ceramic tiles and sanitary ware for multiple commercial projects. They required factories with proven export experience, consistent quality across large volumes, and ability to meet strict UK building standards.',
    solution: 'We conducted comprehensive audits of 8 factories in Foshan, the ceramic capital of China. Two factories were selected based on quality control systems, production capacity, and export compliance. We managed sampling, quality checks, and consolidated shipping.',
    results: [
      'Verified 8 factories, selected 2 long-term partners',
      '35% savings on material costs compared to previous suppliers',
      'All products met UK building regulations and standards',
      'Established direct shipping route to UK ports saving 2 weeks transit',
    ],
    metrics: [
      { label: 'Factories Audited', value: '8' },
      { label: 'Cost Savings', value: '35%' },
      { label: 'Projects Served', value: '6+' },
    ],
    tags: ['Factory Verification', 'Quality Inspection', 'Shipping'],
  },
  {
    company: 'GreenLife Retail',
    industry: 'Personal Care',
    country: 'Australia',
    title: 'Eco-Friendly Packaging & Product Sourcing',
    challenge: 'An Australian retailer of natural personal care products needed sustainable packaging and product components from Chinese suppliers who could demonstrate verifiable environmental compliance and ethical manufacturing practices.',
    solution: 'We audited 10 potential suppliers focusing on environmental certifications, material sourcing transparency, and social compliance. Selected partners were vetted for ISO 14001, FSC certifications, and ethical labor practices. We set up a traceability system for raw materials.',
    results: [
      'Secured 3 certified eco-friendly suppliers',
      '30% cost reduction on packaging vs. Australian suppliers',
      'Full supply chain transparency and audit trail',
      'Products met all Australian regulatory requirements',
    ],
    metrics: [
      { label: 'Suppliers Vetted', value: '10' },
      { label: 'Cost Savings', value: '30%' },
      { label: 'Certified Partners', value: '3' },
    ],
    tags: ['Supplier Sourcing', 'Factory Audit', 'Compliance'],
  },
]

export default function CaseStudies() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      <section ref={containerRef} className="relative pt-32 pb-20 overflow-hidden">
        <div
          data-strk-bg-id="casestudies-bg-9a8b7c"
          data-strk-bg="[casestudies-title] [casestudies-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          className="absolute inset-0 bg-slate-900"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="casestudies-title" className="text-4xl md:text-5xl font-bold text-white mb-4">
            Case Studies
          </h1>
          <p id="casestudies-subtitle" className="text-lg text-blue-100/80 max-w-2xl mx-auto">
            Real results from real partnerships across industries and markets.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {caseStudies.map((cs, index) => (
            <div key={cs.company} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
              <div className="p-8 md:p-10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-brand-600 uppercase tracking-wider bg-brand-50 px-3 py-1 rounded-full">
                    {cs.industry}
                  </span>
                  <span className="text-xs text-slate-500">{cs.country}</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">{cs.title}</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {cs.metrics.map((m) => (
                    <div key={m.label} className="bg-slate-50 rounded-lg p-4 text-center">
                      <div className="text-2xl md:text-3xl font-bold text-brand-700">{m.value}</div>
                      <div className="text-xs text-slate-600 mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-orange-500" />
                      The Challenge
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                      <Star className="w-4 h-4 text-brand-600" />
                      Our Solution
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{cs.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                      <TrendingDown className="w-4 h-4 text-green-600" />
                      Results
                    </h3>
                    <ul className="space-y-2">
                      {cs.results.map((result) => (
                        <li key={result} className="flex items-start gap-2 text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  {cs.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-3 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Want Results Like These?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Tell us about your sourcing project and we will create a plan tailored to your needs.
          </p>
          <Link
            to="/contact"
            className="bg-accent-600 hover:bg-accent-700 text-white font-semibold px-8 py-3.5 rounded-lg text-lg inline-flex items-center gap-2 transition-colors"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}