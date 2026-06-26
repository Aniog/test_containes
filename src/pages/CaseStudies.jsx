import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { ArrowRight, Star, Globe, BarChart3, Clock, CheckCircle } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const cases = [
  {
    company: 'EuroTech GmbH',
    industry: 'Industrial Equipment',
    location: 'Germany',
    challenge: 'EuroTech needed a reliable supplier for precision-machined industrial components. Previous attempts to source directly from Alibaba resulted in inconsistent quality and missed deadlines.',
    solution: 'We identified 6 potential suppliers, conducted full audits on 3, and selected 2 verified factories. Our team provided during-production inspections and coordinated sample approvals.',
    results: [
      '40% cost reduction compared to European suppliers',
      '95%+ on-time delivery rate',
      'Zero quality rejections after first batch',
      'Established long-term partnership with 2 suppliers',
    ],
    quote: 'SSourcing China found us reliable suppliers in half the time it would have taken us on our own. Their factory audit reports gave us the confidence to proceed.',
    author: 'Thomas Mueller',
    role: 'Procurement Director',
  },
  {
    company: 'Pacific Home Goods',
    industry: 'Consumer Products',
    location: 'Australia',
    challenge: 'Pacific Home Goods was launching a new line of kitchen products and needed a manufacturer who could handle medium-volume production with strict quality standards.',
    solution: 'We sourced from 3 candidates, conducted capability assessments, and recommended a mid-sized factory with excellent quality control systems. We managed the entire production monitoring process.',
    results: [
      'Full product line launched 2 weeks ahead of schedule',
      '100% defect-free first shipment',
      '30% lower unit cost than initial budget',
      'Ongoing monthly production oversight',
    ],
    quote: 'The quality inspection service saved us from a major defective shipment. They caught issues we would never have spotted remotely.',
    author: 'Sarah Chen',
    role: 'Operations Manager',
  },
  {
    company: 'Nordic Auto Parts',
    industry: 'Automotive',
    location: 'Sweden',
    challenge: 'Nordic Auto Parts required automotive-grade components with strict tolerance requirements and full traceability documentation for ISO/TS 16949 compliance.',
    solution: 'We audited 5 factories specializing in automotive components, selected 2 that met the stringent requirements, and implemented a comprehensive QC protocol with in-process and pre-shipment inspections.',
    results: [
      '100% defect-free across 12 shipments',
      'Full ISO/TS 16949 documentation compliance',
      '18% cost savings on materials',
      'Reduced lead time from 16 to 10 weeks',
    ],
    quote: 'The level of detail in their factory audits and quality reports exceeded our expectations. They truly understand automotive quality standards.',
    author: 'Erik Lindqvist',
    role: 'Supply Chain Manager',
  },
  {
    company: 'GreenLife Solutions',
    industry: 'Packaging',
    location: 'UK',
    challenge: 'A UK-based sustainable packaging company needed eco-friendly packaging manufacturers who could produce biodegradable materials at competitive prices.',
    solution: 'Our team researched and verified 4 eco-friendly packaging manufacturers, assessed their sustainability certifications, and negotiated pricing and MOQ that worked for a growing business.',
    results: [
      '55% cost reduction on packaging',
      'Certified biodegradable materials confirmed',
      'Successful retail launch on schedule',
      'Supplier committed to R&D partnership',
    ],
    quote: 'Finding genuinely eco-conscious manufacturers in China was harder than we expected. SSourcing China verified the credentials and production methods thoroughly.',
    author: 'James Whittaker',
    role: 'Founder & CEO',
  },
  {
    company: 'MedTech Asia',
    industry: 'Medical Supplies',
    location: 'Singapore',
    challenge: 'MedTech Asia needed ISO 13485 certified manufacturers for medical device components with strict quality and regulatory compliance requirements.',
    solution: 'We conducted specialized medical-grade audits of 6 facilities, verified ISO certifications, assessed clean room conditions, and coordinated extensive sample testing.',
    results: [
      '3 ISO 13485 certified factories qualified',
      'Full regulatory documentation package',
      '30% cost advantage over current suppliers',
      'Established quality agreement framework',
    ],
    quote: 'Medical device sourcing requires extreme attention to detail. SSourcing China demonstrated deep understanding of regulatory requirements.',
    author: 'Dr. Mei Ling Tan',
    role: 'Quality Assurance Director',
  },
  {
    company: 'BuildRight Construction',
    industry: 'Building Materials',
    location: 'UAE',
    challenge: 'A Dubai-based construction firm needed reliable suppliers for steel fittings, fixtures, and specialized building materials for a large commercial project.',
    solution: 'We sourced from our network of verified building material manufacturers, coordinated bulk pricing, and managed consolidated shipping to Dubai.',
    results: [
      '25% savings on total material costs',
      'All shipments arrived on schedule',
      'Full material certification provided',
      'Supplier relationships established for future projects',
    ],
    quote: 'For a project of this scale, we could not afford supply chain issues. SSourcing China delivered consistently.',
    author: 'Ahmed Al-Rashid',
    role: 'Project Director',
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
      <section className="bg-gradient-to-br from-slate-900 via-brand-blue to-slate-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Case Studies</h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              Real results from real partnerships. See how we have helped businesses across industries 
              source successfully from China.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {cases.map((cs) => (
              <div key={cs.company} className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-blue-50 text-brand-blue text-xs font-semibold rounded-full">
                      {cs.industry}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-500">
                      <Globe className="w-3.5 h-3.5" />
                      {cs.location}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900 mb-4">{cs.company}</h2>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-700 mb-2">The Challenge</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-700 mb-2">Our Solution</h3>
                      <p className="text-sm text-slate-600 leading-relaxed">{cs.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-700 mb-2">Results</h3>
                      <ul className="space-y-1.5">
                        {cs.results.map((result) => (
                          <li key={result} className="flex items-start gap-2 text-sm text-slate-600">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-5 border border-slate-100">
                    <div className="flex gap-1 text-yellow-400 mb-2">
                      {[...Array(5)].map((_, i) => (<Star key={i} className="w-4 h-4 fill-current" />))}
                    </div>
                    <p className="text-sm text-slate-600 italic mb-2">"{cs.quote}"</p>
                    <p className="text-sm font-semibold text-slate-900">{cs.author}</p>
                    <p className="text-xs text-slate-500">{cs.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-brand-blue to-blue-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start Your Success Story
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-xl mx-auto">
            Contact us today and let us help you achieve similar results for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors shadow-lg"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}