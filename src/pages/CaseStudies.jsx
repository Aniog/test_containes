import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { 
  ArrowRight, 
  TrendingUp, 
  Clock, 
  Shield, 
  Globe,
  CheckCircle,
  Star,
  Quote
} from 'lucide-react'

const caseStudies = [
  {
    id: 'european-home-goods',
    client: 'European Home Goods Retailer',
    location: 'Germany',
    industry: 'Home & Kitchen',
    year: '2024',
    challenge: 'A mid-sized German retailer needed to source 50,000 units of kitchenware products (cutting boards, utensils, and storage containers) with specific quality standards and competitive pricing. They had previously experienced quality issues with another supplier.',
    approach: [
      'Conducted thorough supplier research across 15+ factories',
      'Performed on-site factory audits for top 5 candidates',
      'Arranged samples from 3 shortlisted suppliers',
      'Negotiated volume discounts and payment terms',
      'Implemented during-production inspections',
    ],
    results: [
      'Found a verified factory with 10+ years export experience',
      '98% first-pass rate on quality inspections',
      '35% cost savings compared to previous supplier',
      'On-time delivery with zero quality complaints',
    ],
    testimonial: {
      text: "SSourcing China transformed our supply chain. The quality improvements were immediate, and their team handled everything professionally. We've since expanded our orders by 200%.",
      author: 'Thomas Mueller',
      role: 'Procurement Director',
    },
    metrics: {
      savings: '35%',
      timeline: '3 months',
      qcPassRate: '98%',
      repeatOrder: 'Yes',
    },
  },
  {
    id: 'us-electronics',
    client: 'US Electronics Distributor',
    location: 'United States',
    industry: 'Consumer Electronics',
    year: '2024',
    challenge: 'A US-based distributor wanted to expand their product line with smart home devices but had no existing supplier network in China. They were concerned about supplier legitimacy and product quality.',
    approach: [
      'Verified 8 factories through in-person audits',
      'Checked business licenses, production capacity, and certifications',
      'Arranged for product testing and certification verification',
      'Negotiated favorable payment terms with escrow protection',
      'Implemented pre-shipment inspection protocol',
    ],
    results: [
      'Identified and verified 8 legitimate factories',
      'Selected best match based on quality-to-price ratio',
      'Zero quality issues on first shipment',
      '40% faster time-to-market vs. original estimate',
    ],
    testimonial: {
      text: "The supplier verification saved us from a potential scam. We were ready to work with a factory that turned out to be a trading company. SSourcing China's audit revealed the truth.",
      author: 'Sarah Chen',
      role: 'CEO',
    },
    metrics: {
      savings: '40%',
      timeline: '4 months',
      qcPassRate: '100%',
      repeatOrder: 'Yes',
    },
  },
  {
    id: 'australian-fashion',
    client: 'Australian Fashion Brand',
    location: 'Australia',
    industry: 'Textiles & Apparel',
    year: '2023',
    challenge: 'An Australian fashion brand needed a reliable garment manufacturer for their private label clothing line. They required MOQ flexibility, consistent quality, and ethical production standards.',
    approach: [
      'Identified factories with organic/ethical certifications',
      'Conducted factory audits focusing on labor practices',
      'Negotiated lower MOQs for initial orders',
      'Established quality checkpoints during production',
      'Coordinated sample development and approval process',
    ],
    results: [
      'Found a BSCI-certified factory with excellent track record',
      'MOQ reduced from 1000 to 300 pieces per style',
      '100% order accuracy with zero defects',
      '25% cost reduction through efficient production',
    ],
    testimonial: {
      text: "They understood our brand requirements and found a factory that shared our values. The quality is consistently excellent, and they've become a true partner in our growth.",
      author: 'Emma Williams',
      role: 'Founder',
    },
    metrics: {
      savings: '25%',
      timeline: '2 months',
      qcPassRate: '100%',
      repeatOrder: 'Yes',
    },
  },
  {
    id: 'canadian-machinery',
    client: 'Canadian Industrial Company',
    location: 'Canada',
    industry: 'Machinery & Equipment',
    year: '2023',
    challenge: 'A Canadian industrial company needed custom-manufactured machinery parts. The technical specifications were complex, and they needed a manufacturer with precision engineering capabilities.',
    approach: [
      'Identified factories with CNC machining expertise',
      'Requested technical capability assessments',
      'Arranged prototype development and testing',
      'Implemented strict quality control measures',
      'Coordinated logistics and customs clearance',
    ],
    results: [
      'Found a factory with ISO 9001 certification',
      'Prototypes delivered within 6 weeks',
      'All parts met exact specifications',
      '40% cost savings vs. North American suppliers',
    ],
    testimonial: {
      text: "The technical expertise was impressive. They understood our specifications and delivered flawless parts. The cost savings allowed us to be competitive in our market.",
      author: 'James Patterson',
      role: 'Operations Manager',
    },
    metrics: {
      savings: '40%',
      timeline: '5 months',
      qcPassRate: '100%',
      repeatOrder: 'Yes',
    },
  },
]

const stats = [
  { value: '500+', label: 'Clients Worldwide' },
  { value: '2000+', label: 'Orders Completed' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '30+', label: 'Countries Served' },
]

const CaseStudies = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies | Success Stories | SSourcing China</title>
        <meta name="description" content="Read success stories from clients who trusted SSourcing China with their China sourcing. Real results, verified factories, quality assurance." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Real results from real clients. See how we've helped businesses worldwide 
              source quality products from China with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {caseStudies.map((study, index) => (
              <div 
                key={study.id}
                className={`grid lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                      {study.industry}
                    </span>
                    <span className="text-slate-500 text-sm">{study.location}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">{study.client}</h2>
                  
                  <div className="mb-8">
                    <h3 className="font-semibold text-slate-900 mb-3">Challenge</h3>
                    <p className="text-slate-600">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="font-semibold text-slate-900 mb-3">Our Approach</h3>
                    <ul className="space-y-2">
                      {study.approach.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3">Results</h3>
                    <ul className="space-y-2">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                          <TrendingUp className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  {/* Metrics */}
                  <div className="bg-slate-50 rounded-2xl p-6">
                    <h3 className="font-semibold text-slate-900 mb-4">Key Metrics</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-xl">
                        <div className="text-2xl font-bold text-blue-600">{study.metrics.savings}</div>
                        <div className="text-sm text-slate-500">Cost Savings</div>
                      </div>
                      <div className="bg-white p-4 rounded-xl">
                        <div className="text-2xl font-bold text-blue-600">{study.metrics.timeline}</div>
                        <div className="text-sm text-slate-500">Timeline</div>
                      </div>
                      <div className="bg-white p-4 rounded-xl">
                        <div className="text-2xl font-bold text-green-600">{study.metrics.qcPassRate}</div>
                        <div className="text-sm text-slate-500">QC Pass Rate</div>
                      </div>
                      <div className="bg-white p-4 rounded-xl">
                        <div className="text-2xl font-bold text-slate-900">{study.metrics.repeatOrder}</div>
                        <div className="text-sm text-slate-500">Repeat Order</div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-blue-50 rounded-2xl p-6">
                    <Quote className="w-8 h-8 text-blue-300 mb-4" />
                    <p className="text-slate-700 italic mb-4">"{study.testimonial.text}"</p>
                    <div>
                      <div className="font-semibold text-slate-900">{study.testimonial.author}</div>
                      <div className="text-sm text-slate-500">{study.testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-slate-300 mb-10">
            Join 500+ businesses who trust us with their China sourcing.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg"
          >
            Get Your Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}

export default CaseStudies