import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, TrendingUp, Shield, Star } from 'lucide-react'

const caseStudies = [
  {
    id: 'electronics-pcb',
    category: 'Electronics',
    title: 'Electronics Manufacturer Sources PCB Components',
    client: 'US-based electronics company',
    challenge: 'A US-based electronics company needed reliable PCB manufacturers in Shenzhen for a 50,000-unit order. They had previously experienced quality issues and delivery delays with other suppliers.',
    solution: 'We identified and verified 5 potential PCB manufacturers, conducted on-site audits, and collected samples for evaluation. After the client approved the best supplier, we negotiated pricing, managed production, and conducted pre-shipment inspections.',
    results: [
      '25% cost savings compared to previous supplier',
      'Zero defect rate on delivery',
      'On-time delivery within 6 weeks',
      'Long-term partnership established',
    ],
    quote: 'SSourcing China helped us find a reliable PCB supplier that we still work with today. Their quality inspection process saved us from a potential disaster.',
    quoteAuthor: 'Procurement Manager, US Electronics Company',
  },
  {
    id: 'retail-home',
    category: 'Home & Garden',
    title: 'Retailer Launches Private Label Home Products',
    client: 'European home goods retailer',
    challenge: 'A European retailer wanted to launch a private label home goods line with 200+ SKUs. They needed manufacturers who could handle custom designs, meet EU quality standards, and deliver within a tight timeline.',
    solution: 'We sourced manufacturers across multiple product categories, managed the sampling process for all 200+ SKUs, coordinated production across 8 different factories, and handled all logistics and customs documentation.',
    results: [
      'All 200+ SKUs launched on schedule',
      '40% margin improvement vs. previous sourcing',
      'All products passed EU quality standards',
      'Repeat orders placed within 3 months',
    ],
    quote: 'The team managed a complex multi-factory project flawlessly. We launched our entire private label line on time and within budget.',
    quoteAuthor: 'Product Director, European Retailer',
  },
  {
    id: 'startup-apparel',
    category: 'Apparel',
    title: 'Startup Navigates First China Order',
    client: 'UK fashion startup',
    challenge: 'A UK fashion startup needed help with their first bulk order from China. They had no experience with Chinese suppliers, quality control, or international shipping.',
    solution: 'We guided them through the entire process: supplier selection, sample evaluation, order placement, production monitoring, quality inspection, and shipping coordination. We also helped them understand MOQs, lead times, and import requirements.',
    results: [
      'Successful first order with no quality issues',
      'Repeat orders placed within 3 months',
      'Established reliable supply chain',
      'Business scaled to 5x initial order volume',
    ],
    quote: 'As a startup, we had no idea where to start. SSourcing China made our first China order smooth and stress-free.',
    quoteAuthor: 'Founder, UK Fashion Startup',
  },
  {
    id: 'industrial-machinery',
    category: 'Industrial Equipment',
    title: 'Distributor Sources Custom Machinery Parts',
    client: 'Australian industrial distributor',
    challenge: 'An Australian distributor needed custom-machined parts for industrial equipment. The parts required tight tolerances and specific material certifications.',
    solution: 'We identified CNC machining factories with the required capabilities, verified their quality systems and material certifications, managed the prototyping process, and set up ongoing quality inspection protocols.',
    results: [
      'Parts met all tolerance specifications',
      'Material certifications verified',
      '30% cost reduction vs. local sourcing',
      'Ongoing monthly orders established',
    ],
    quote: 'The precision and quality of the parts exceeded our expectations. The verification process gave us complete confidence in the supplier.',
    quoteAuthor: 'Operations Manager, Australian Distributor',
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#0f2b46]">
        <div className="container-custom text-center">
          <span className="text-[#c8963e] font-semibold text-sm uppercase tracking-wider">Success Stories</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Case Studies
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Real results from real clients who trusted us with their China sourcing.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div key={study.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <span className="text-[#c8963e] font-semibold text-sm uppercase tracking-wider">{study.category}</span>
                  <h2 className="text-2xl md:text-3xl font-bold mt-3 mb-6">{study.title}</h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-[#0f2b46] mb-2">Client</h3>
                      <p className="text-[#4a5568]">{study.client}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0f2b46] mb-2">Challenge</h3>
                      <p className="text-[#4a5568]">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0f2b46] mb-2">Our Solution</h3>
                      <p className="text-[#4a5568]">{study.solution}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0f2b46] mb-3">Results</h3>
                      <ul className="space-y-2">
                        {study.results.map((result) => (
                          <li key={result} className="flex items-start gap-3">
                            <TrendingUp className="w-4 h-4 text-[#c8963e] flex-shrink-0 mt-1" />
                            <span className="text-[#4a5568]">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-[#f5f7fa] rounded-2xl p-8">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-[#c8963e] fill-[#c8963e]" />
                      ))}
                    </div>
                    <blockquote className="text-[#4a5568] italic leading-relaxed mb-6">
                      "{study.quote}"
                    </blockquote>
                    <p className="font-semibold text-[#0f2b46]">{study.quoteAuthor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#f5f7fa]">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Be Our Next Success Story?</h2>
          <p className="text-[#4a5568] text-lg mb-8 max-w-2xl mx-auto">
            Tell us about your sourcing needs and we will find the right solution for your business.
          </p>
          <Link to="/contact" className="btn-primary text-lg px-10 py-4">
            Get a Free Sourcing Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </>
  )
}
