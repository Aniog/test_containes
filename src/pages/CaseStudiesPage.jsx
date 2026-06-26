import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Shield, DollarSign, Clock, CheckCircle } from 'lucide-react';

const caseStudies = [
  {
    id: 'electronics-cost-savings',
    category: 'Electronics',
    title: 'Electronics Manufacturer Saves 23% on Component Costs',
    summary: 'A US-based electronics company needed reliable PCB suppliers for their consumer electronics line. We identified 3 qualified factories in Shenzhen, conducted comprehensive audits, and negotiated pricing that reduced their component costs by 23% while maintaining quality standards.',
    challenge: 'The client was paying premium prices through a trading company and had experienced quality inconsistencies with their existing supplier.',
    solution: 'We conducted a thorough supplier search, identified direct manufacturers, performed on-site audits, and negotiated directly with factory management.',
    results: [
      { icon: TrendingUp, value: '23%', label: 'Cost Reduction' },
      { icon: Shield, value: '3', label: 'Factories Audited' },
      { icon: DollarSign, value: '$180K', label: 'Annual Savings' },
      { icon: Clock, value: '6', label: 'Weeks to Complete' },
    ],
    testimonial: 'SSourcing China helped us find a direct manufacturer that cut our costs significantly. Their factory audit process gave us confidence in the supplier.',
    testimonialAuthor: 'Procurement Director, US Electronics Company',
  },
  {
    id: 'fashion-quality-rescue',
    category: 'Textiles',
    title: 'Fashion Brand Avoids $50K in Defective Products',
    summary: 'A European fashion brand was about to receive a large clothing order when our pre-shipment inspection revealed significant quality issues including color inconsistencies, stitching defects, and sizing problems.',
    challenge: 'The client had limited visibility into production quality and was planning to make final payment before receiving the goods.',
    solution: 'Our inspector conducted a thorough pre-shipment inspection using AQL sampling standards, identified defects, and worked with the factory to implement corrective actions.',
    results: [
      { icon: Shield, value: '100%', label: 'Defects Identified' },
      { icon: DollarSign, value: '$50K', label: 'Losses Prevented' },
      { icon: Clock, value: '2', label: 'Weeks to Resolve' },
      { icon: CheckCircle, value: '98%', label: 'Final Quality Rate' },
    ],
    testimonial: 'The inspection report was incredibly detailed. Without it, we would have received unusable inventory. SSourcing China saved our season.',
    testimonialAuthor: 'Brand Manager, European Fashion Company',
  },
  {
    id: 'startup-remote-sourcing',
    category: 'Consumer Goods',
    title: 'Startup Launches Product Line with Zero Factory Visits',
    summary: 'A European startup needed to source a complete line of home decor products but could not travel to China due to budget constraints. We handled everything from supplier selection to quality control and shipping coordination.',
    challenge: 'The client had no experience sourcing from China and needed end-to-end support for their first product launch.',
    solution: 'We managed the entire sourcing process: supplier identification, sample evaluation, production monitoring, quality inspection, and shipping coordination.',
    results: [
      { icon: TrendingUp, value: '0', label: 'Factory Visits Needed' },
      { icon: Shield, value: '12', label: 'Products Sourced' },
      { icon: DollarSign, value: '45', label: 'Days to Launch' },
      { icon: Clock, value: '100%', label: 'On-Time Delivery' },
    ],
    testimonial: 'As a startup, we could not afford to send someone to China. SSourcing China was our eyes and ears on the ground. They made our product launch possible.',
    testimonialAuthor: 'Founder, European Home Decor Startup',
  },
  {
    id: 'machinery-compliance',
    category: 'Machinery',
    title: 'Industrial Buyer Ensures CE Compliance for Machinery',
    summary: 'A German industrial buyer needed custom manufacturing equipment that met strict CE certification requirements. We verified the factory capabilities, reviewed technical documentation, and coordinated third-party testing.',
    challenge: 'The client needed assurance that the machinery would meet European safety and quality standards before placing a large order.',
    solution: 'We conducted a technical audit of the factory, reviewed all documentation, coordinated with a certified testing lab, and monitored production.',
    results: [
      { icon: Shield, value: 'CE', label: 'Certification Achieved' },
      { icon: DollarSign, value: '$250K', label: 'Order Value' },
      { icon: Clock, value: '12', label: 'Weeks to Delivery' },
      { icon: CheckCircle, value: '0', label: 'Compliance Issues' },
    ],
    testimonial: 'The technical expertise of the SSourcing China team was impressive. They understood our CE requirements and ensured full compliance.',
    testimonialAuthor: 'Operations Manager, German Manufacturing Company',
  },
];

export default function CaseStudiesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-gray-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Real results from real clients. See how we have helped businesses like yours source successfully from China.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
                    {study.category}
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {study.title}
                  </h2>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {study.summary}
                  </p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Challenge</h3>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Our Solution</h3>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                    {study.results.map((result) => (
                      <div key={result.label} className="text-center p-4 bg-gray-50 rounded-lg">
                        <result.icon className="w-6 h-6 text-blue-700 mx-auto mb-2" />
                        <div className="text-xl font-bold text-gray-900">{result.value}</div>
                        <div className="text-xs text-gray-500">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <p className="text-gray-700 italic mb-3">"{study.testimonial}"</p>
                    <p className="text-sm text-gray-600 font-medium">{study.testimonialAuthor}</p>
                  </div>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden">
                    <img
                      alt={study.title}
                      className="w-full h-full object-cover"
                      data-strk-img-id={`case-${study.id}-img`}
                      data-strk-img={`[${study.id}-title] [${study.id}-summary]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Tell us about your sourcing needs and we will show you how we can help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors text-lg"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
