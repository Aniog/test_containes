import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, TrendingDown, CheckCircle, Calendar, User, Tag } from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    title: 'Electronics Manufacturer Saves 23% on Component Costs',
    industry: 'Electronics',
    client: 'US-based electronics company',
    date: 'March 2026',
    challenge: 'A US electronics company was overpaying for PCB components through a middleman trading company. They needed a direct manufacturer with ISO certification and consistent quality.',
    approach: 'We identified three qualified PCB manufacturers in Shenzhen and Dongguan, conducted on-site audits, and verified their ISO 9001 certifications. After comparing capabilities and pricing, we recommended the best fit.',
    result: 'We negotiated a 23% cost reduction compared to their previous supplier, with improved quality control processes and direct communication with the factory.',
    metrics: [
      { value: '23%', label: 'Cost reduction' },
      { value: '100%', label: 'On-time delivery' },
      { value: '0.2%', label: 'Defect rate' },
    ],
  },
  {
    id: 2,
    title: 'Fashion Brand Avoids $150K in Defective Goods',
    industry: 'Apparel',
    client: 'European fashion brand',
    date: 'January 2026',
    challenge: 'A European fashion brand was about to ship 10,000 units of a new clothing line. The samples had been approved, but bulk production showed color inconsistencies and stitching defects.',
    approach: 'Our pre-shipment inspection caught the quality issues before goods left the factory. We documented all defects with photos and coordinated with the supplier for rework.',
    result: 'The supplier reworked the entire order at their cost. The client avoided a costly return and maintained their brand reputation with customers.',
    metrics: [
      { value: '$150K', label: 'Saved in potential losses' },
      { value: '10,000', label: 'Units inspected' },
      { value: '100%', label: 'Quality achieved' },
    ],
  },
  {
    id: 3,
    title: 'Startup Launches Product Line in 8 Weeks',
    industry: 'Consumer Goods',
    client: 'Australian startup',
    date: 'February 2026',
    challenge: 'An Australian startup needed to source, sample, and produce a new home products line with a tight deadline for their product launch event.',
    approach: 'We sourced three qualified factories within the first week, managed two rounds of sampling iterations, and coordinated production with weekly progress updates.',
    result: 'The entire process from initial inquiry to delivery was completed in 8 weeks, allowing the startup to launch on schedule with products that met their quality standards.',
    metrics: [
      { value: '8 weeks', label: 'From inquiry to delivery' },
      { value: '3', label: 'Products launched' },
      { value: '100%', label: 'On-time launch' },
    ],
  },
  {
    id: 4,
    title: 'Automotive Parts Importer Reduces Lead Time by 40%',
    industry: 'Auto Parts',
    client: 'German automotive distributor',
    date: 'December 2025',
    challenge: 'A German automotive parts distributor was experiencing long lead times and inconsistent quality from their existing Chinese supplier.',
    approach: 'We identified a larger, more capable manufacturer with better production planning. We also implemented a production monitoring system with weekly updates.',
    result: 'Lead times were reduced from 12 weeks to 7 weeks, and quality consistency improved significantly with our during-production inspections.',
    metrics: [
      { value: '40%', label: 'Lead time reduction' },
      { value: '12 to 7', label: 'Weeks lead time' },
      { value: '99.5%', label: 'Quality pass rate' },
    ],
  },
  {
    id: 5,
    title: 'Medical Device Company Achieves Full Compliance',
    industry: 'Medical',
    client: 'UK medical device company',
    date: 'November 2025',
    challenge: 'A UK medical device company needed a manufacturer that could meet strict ISO 13485 standards and FDA requirements for their new product line.',
    approach: 'We conducted extensive supplier verification, including document audits, on-site inspections, and verification of existing certifications. We also coordinated third-party testing.',
    result: 'The client found a fully compliant manufacturer and successfully launched their product line with all regulatory requirements met.',
    metrics: [
      { value: '100%', label: 'Regulatory compliance' },
      { value: '2', label: 'Certifications verified' },
      { value: '0', label: 'Compliance issues' },
    ],
  },
  {
    id: 6,
    title: 'Retail Chain Consolidates 15 Suppliers into 3',
    industry: 'Consumer Goods',
    client: 'US retail chain',
    date: 'October 2025',
    challenge: 'A US retail chain was managing 15 different suppliers for their private-label home products, resulting in inconsistent quality and high management overhead.',
    approach: 'We analyzed their product range and identified three capable manufacturers that could handle multiple product categories. We managed the transition and quality standardization.',
    result: 'The client reduced their supplier base from 15 to 3, improved quality consistency, and reduced management overhead by 60%.',
    metrics: [
      { value: '15 to 3', label: 'Suppliers reduced' },
      { value: '60%', label: 'Management overhead saved' },
      { value: '15%', label: 'Overall cost reduction' },
    ],
  },
]

export default function CaseStudies() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">Success Stories</span>
            <h1 className="text-3xl md:text-5xl font-bold mt-2 mb-4">
              Case Studies
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Real results from real sourcing projects. See how we have helped buyers like you
              save money, reduce risk, and achieve their sourcing goals.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="space-y-16">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="border border-gray-200 rounded-xl p-6 md:p-8"
              >
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full">
                    {study.industry}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-gray-500">
                    <User className="w-4 h-4" />
                    {study.client}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    {study.date}
                  </span>
                </div>

                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">{study.title}</h2>

                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase mb-1">Challenge</h3>
                    <p className="text-gray-700 leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase mb-1">Our Approach</h3>
                    <p className="text-gray-700 leading-relaxed">{study.approach}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 uppercase mb-1">Result</h3>
                    <p className="text-gray-700 leading-relaxed">{study.result}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 bg-gray-50 rounded-lg p-4">
                  {study.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <div className="text-xl md:text-2xl font-bold text-blue-700">{metric.value}</div>
                      <div className="text-xs text-gray-500 mt-1">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Achieve Similar Results?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Tell us about your sourcing needs and we will show you how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
