import { Link } from 'react-router-dom'
import { ArrowRight, TrendingDown, Clock, Shield, Award } from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    industry: 'Consumer Electronics',
    title: 'Bluetooth Speaker Manufacturing for US Startup',
    challenge: 'A US-based startup needed a reliable manufacturer for custom Bluetooth speakers. They had specific requirements for sound quality, battery life, and Bluetooth 5.0 connectivity, but had no experience sourcing from China.',
    solution: 'We identified 5 potential manufacturers in Shenzhen and Dongguan, conducted on-site audits of the top 3, and managed the entire sampling and production process. We negotiated pricing, set up a QC protocol, and coordinated shipping to the US.',
    results: [
      'Delivered 10,000 units on schedule',
      '99.2% pass rate on pre-shipment inspection',
      'Unit cost 28% lower than previous supplier',
      'Zero defects reported in first 3 months',
    ],
    metrics: { costSaving: '28%', defectRate: '<1%', timeline: 'On time', quantity: '10,000 units' },
  },
  {
    id: 2,
    industry: 'Fashion & Apparel',
    title: 'Apparel Supply Chain Setup for European Brand',
    challenge: 'A mid-size European fashion brand wanted to shift production from Turkey to China to reduce costs. They needed multiple garment factories for different product lines and a reliable quality control system.',
    solution: 'We sourced and verified 5 garment factories across Guangdong and Zhejiang provinces, each specializing in different product categories. We established a standardized QC protocol and set up regular production monitoring.',
    results: [
      'Reduced production costs by 35%',
      'Maintained quality across 50+ SKUs',
      'Established long-term factory relationships',
      'Reduced lead times by 2 weeks',
    ],
    metrics: { costSaving: '35%', skus: '50+', leadTime: '-2 weeks', factories: '5 verified' },
  },
  {
    id: 3,
    industry: 'Home & Garden',
    title: 'Outdoor Furniture Sourcing for Australian Retailer',
    challenge: 'An Australian retail chain needed a consistent supply of outdoor furniture with strict quality and safety standards. Previous suppliers had issues with material quality and delivery delays.',
    solution: 'We identified a specialized outdoor furniture manufacturer in Foshan, verified their certifications and production capacity, and implemented a rigorous inspection process covering materials, assembly, and packaging.',
    results: [
      'Consistent quality across 4 seasonal orders',
      'All products passed Australian safety standards',
      'On-time delivery rate of 98%',
      'Customer complaints reduced by 60%',
    ],
    metrics: { onTime: '98%', complaints: '-60%', orders: '4 seasonal', standards: 'AU certified' },
  },
  {
    id: 4,
    industry: 'Industrial Equipment',
    title: 'CNC Parts Manufacturing for German Engineering Firm',
    challenge: 'A German engineering company needed precision CNC machined parts with tight tolerances. They required ISO 9001 certified suppliers and detailed quality documentation for each batch.',
    solution: 'We sourced 3 ISO 9001 certified CNC manufacturers, conducted detailed capability audits, and established a quality documentation system. We coordinated first article inspections and ongoing batch inspections.',
    results: [
      'All parts met ±0.01mm tolerance requirements',
      'Complete quality documentation for every batch',
      'Cost savings of 40% compared to European suppliers',
      'Long-term partnership established with primary supplier',
    ],
    metrics: { tolerance: '±0.01mm', costSaving: '40%', certification: 'ISO 9001', batches: '100% documented' },
  },
]

export default function CaseStudies() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider">Case Studies</span>
            <h1 className="heading-xl text-white mt-3 mb-6">Real Results for Real Businesses</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              See how we have helped businesses around the world source successfully from China.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={study.id} className={`grid grid-cols-1 lg:grid-cols-3 gap-8 ${index % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                <div className={`lg:col-span-2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
                    {study.industry}
                  </div>
                  <h2 className="heading-md text-blue-900 mb-4">{study.title}</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                        <TrendingDown className="w-4 h-4 text-red-500" />
                        Challenge
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                        <Shield className="w-4 h-4 text-blue-700" />
                        Our Solution
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                        <Award className="w-4 h-4 text-green-600" />
                        Results
                      </h3>
                      <ul className="space-y-2">
                        {study.results.map((result, rIndex) => (
                          <li key={rIndex} className="flex items-start gap-2 text-gray-700">
                            <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className={`lg:col-span-1 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 sticky top-24">
                    <h3 className="font-semibold text-blue-900 mb-4">Key Metrics</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(study.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-blue-700">{value}</div>
                          <div className="text-xs text-gray-500 mt-1 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg text-blue-900 mb-4">Want Similar Results?</h2>
            <p className="text-gray-600 text-lg mb-8">
              Tell us about your sourcing needs and we will show you how we can help.
            </p>
            <Link to="/contact" className="btn-primary">
              Get a Free Sourcing Quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
