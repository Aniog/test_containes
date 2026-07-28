import { Link } from 'react-router-dom'
import { 
  TrendingUp, Shield, Clock, DollarSign, Package, CheckCircle, 
  ArrowRight, Quote, Star, BarChart3, Factory
} from 'lucide-react'
import SectionHeader from '@/components/shared/SectionHeader'
import InquiryForm from '@/components/shared/InquiryForm'

const caseStudies = [
  {
    id: 1,
    client: 'TechParts Inc.',
    industry: 'Consumer Electronics',
    location: 'United States',
    challenge: 'TechParts was sourcing electronic components from multiple unreliable suppliers, leading to inconsistent quality, delayed shipments, and a 12% defect rate that was costing them $200K annually in returns.',
    solution: 'We consolidated their supply chain to 3 verified factories, implemented multi-stage QC inspections, and established clear quality benchmarks with each supplier.',
    results: [
      { metric: '32%', label: 'Cost Reduction', icon: DollarSign },
      { metric: '99.5%', label: 'Quality Pass Rate', icon: CheckCircle },
      { metric: '15 days', label: 'Faster Delivery', icon: Clock },
    ],
    quote: "SSourcing China transformed our supply chain. Their factory verification process saved us from a potentially disastrous partnership with a fraudulent supplier we nearly committed to.",
    quotePerson: 'Michael Chen',
    quoteTitle: 'Procurement Director',
    testimonialRating: 5,
    color: 'bg-royal-50 border-royal-200',
    titleId: 'case-techparts-title',
    descId: 'case-techparts-desc',
  },
  {
    id: 2,
    client: 'EuroTrade GmbH',
    industry: 'Textiles & Apparel',
    location: 'Germany',
    challenge: 'A European fashion brand was experiencing quality issues with their garment supplier in China. 8% of shipments had defects, causing delays in their seasonal collections and damaging retailer relationships.',
    solution: 'We conducted a comprehensive factory audit, identified the root causes of quality issues, and implemented a rigorous 4-stage QC process with detailed defect classification.',
    results: [
      { metric: '99.2%', label: 'Quality Pass Rate', icon: CheckCircle },
      { metric: 'Zero', label: 'Collection Delays', icon: Clock },
      { metric: '25%', label: 'Cost Savings', icon: DollarSign },
    ],
    quote: "We've been working with them for 3 years now. Their QC team catches issues that we would never have found until products arrived in Germany. Their attention to detail is exceptional.",
    quotePerson: 'Sarah Williams',
    quoteTitle: 'Operations Manager',
    testimonialRating: 5,
    color: 'bg-trust-50 border-trust-200',
    titleId: 'case-eurotrade-title',
    descId: 'case-eurotrade-desc',
  },
  {
    id: 3,
    client: 'Pacific Imports Ltd.',
    industry: 'Hardware & Tools',
    location: 'Australia',
    challenge: 'An Australian hardware importer was struggling with long lead times and poor communication with their Chinese suppliers, resulting in stockouts and lost sales during peak seasons.',
    solution: 'We appointed a dedicated account manager, optimized their production scheduling, consolidated shipments, and established direct communication channels with factory management.',
    results: [
      { metric: '18 days', label: 'Reduced Lead Time', icon: Clock },
      { metric: '$480K', label: 'Annual Savings', icon: DollarSign },
      { metric: '98%', label: 'On-Time Delivery', icon: Package },
    ],
    quote: "The communication is excellent. Our account manager responds within hours, and the production tracking updates keep us informed at every step. We've eliminated stockouts completely.",
    quotePerson: 'James Morrison',
    quoteTitle: 'CEO',
    testimonialRating: 5,
    color: 'bg-cta-50 border-cta-200',
    titleId: 'case-pacific-title',
    descId: 'case-pacific-desc',
  },
  {
    id: 4,
    client: 'MedSupply Corp.',
    industry: 'Medical Supplies',
    location: 'Canada',
    challenge: 'A Canadian medical distributor needed to source FDA-compliant PPE and medical devices from China but lacked the expertise to verify regulatory compliance and factory certifications.',
    solution: 'We identified factories with proper FDA registration and ISO certifications, arranged third-party compliance testing, and managed the entire documentation process.',
    results: [
      { metric: '100%', label: 'Compliance Rate', icon: Shield },
      { metric: '40%', label: 'Cost Reduction', icon: DollarSign },
      { metric: '3 weeks', label: 'Time to Market', icon: Clock },
    ],
    quote: "Navigating Chinese medical supply regulations was overwhelming until we partnered with SSourcing China. They handled all the compliance documentation and testing seamlessly.",
    quotePerson: 'Dr. Emily Foster',
    quoteTitle: 'Supply Chain Director',
    testimonialRating: 5,
    color: 'bg-navy-50 border-navy-200',
    titleId: 'case-medsupply-title',
    descId: 'case-medsupply-desc',
  },
]

export default function CaseStudies() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-navy-900 to-navy-950 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-cta-500/20 text-cta-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Success Stories
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Case Studies
          </h1>
          <p className="text-lg text-navy-200 max-w-3xl mx-auto">
            Real results from real clients. See how we&apos;ve helped businesses optimize 
            their China sourcing operations and achieve measurable improvements.
          </p>
        </div>
      </section>

      {/* Summary Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-navy-900">$2.8M+</p>
              <p className="text-sm text-gray-500">Total Client Savings</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-navy-900">99.2%</p>
              <p className="text-sm text-gray-500">Average Quality Rate</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-navy-900">500+</p>
              <p className="text-sm text-gray-500">Projects Completed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-navy-900">98%</p>
              <p className="text-sm text-gray-500">Client Retention Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 lg:space-y-16">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className={`${study.color} border rounded-2xl overflow-hidden`}
              >
                {/* Header */}
                <div className="p-8 lg:p-10 pb-0 lg:pb-0">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="bg-white/80 text-navy-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                      {study.industry}
                    </span>
                    <span className="bg-white/80 text-navy-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                      {study.location}
                    </span>
                  </div>
                  <h2 id={study.titleId} className="text-2xl lg:text-3xl font-bold text-navy-900 mb-2">{study.client}</h2>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-10 pt-4 lg:pt-4">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-bold text-navy-900 mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-xs text-red-600 font-bold">!</span>
                        Challenge
                      </h3>
                      <p id={study.descId} className="text-gray-600 text-sm leading-relaxed mb-6">{study.challenge}</p>

                      <h3 className="font-bold text-navy-900 mb-2 flex items-center gap-2">
                        <span className="w-6 h-6 bg-trust-100 rounded-full flex items-center justify-center text-xs text-trust-600 font-bold">✓</span>
                        Solution
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{study.solution}</p>
                    </div>

                    {/* Results */}
                    <div>
                      <h3 className="font-bold text-navy-900 mb-4 flex items-center gap-2">
                        <BarChart3 className="w-5 h-5 text-cta-500" />
                        Results
                      </h3>
                      <div className="grid grid-cols-3 gap-3 mb-6">
                        {study.results.map((result) => (
                          <div key={result.label} className="bg-white rounded-xl p-4 text-center shadow-sm">
                            <result.icon className="w-5 h-5 text-cta-500 mx-auto mb-2" />
                            <p className="text-xl font-bold text-navy-900">{result.metric}</p>
                            <p className="text-xs text-gray-500 mt-1">{result.label}</p>
                          </div>
                        ))}
                      </div>

                      {/* Testimonial */}
                      <div className="bg-white rounded-xl p-5 shadow-sm">
                        <Quote className="w-6 h-6 text-cta-300 mb-3" />
                        <p className="text-gray-700 text-sm leading-relaxed italic mb-4">&ldquo;{study.quote}&rdquo;</p>
                        <div className="flex items-center gap-2">
                          <div className="flex">
                            {[...Array(study.testimonialRating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                            ))}
                          </div>
                        </div>
                        <div className="mt-3 pt-3 border-t border-gray-100">
                          <p className="font-semibold text-navy-900 text-sm">{study.quotePerson}</p>
                          <p className="text-xs text-gray-500">{study.quoteTitle}, {study.client}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">
              Want Similar Results?
            </h2>
            <p className="text-gray-600 text-lg">
              Tell us about your sourcing challenges and we&apos;ll show you how we can help.
            </p>
          </div>
          <InquiryForm />
        </div>
      </section>
    </div>
  )
}
