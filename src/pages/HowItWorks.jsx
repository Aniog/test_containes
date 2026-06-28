import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Search, ClipboardCheck, Factory, Truck, CheckCircle, FileText, Users, BarChart } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const HowItWorks = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 id="how-hero-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How Our Sourcing Process Works
            </h1>
            <p id="how-hero-subtitle" className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic, transparent approach to help you source from China with confidence. 
              Here's our step-by-step process.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {/* Step 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mr-4">
                    1
                  </div>
                  <h2 id="step-1-title" className="text-3xl font-bold text-gray-900">
                    Requirements Analysis
                  </h2>
                </div>
                <p id="step-1-desc" className="text-lg text-gray-600 mb-6">
                  We start by thoroughly understanding your sourcing needs, quality standards, 
                  target price points, and timeline requirements.
                </p>
                <div className="space-y-4">
                  {[
                    'Detailed discussion of your product specifications',
                    'Understanding quality standards and certifications needed',
                    'Clarifying order quantities and delivery timeline',
                    'Identifying target price points and budget',
                    'Discussing past sourcing challenges (if any)',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="rounded-2xl bg-gray-200 min-h-[400px]"
                data-strk-bg-id="step-1-bg-1a2b3c"
                data-strk-bg="requirements analysis sourcing consultation China"
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="800"
              />
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div
                  className="rounded-2xl bg-gray-200 min-h-[400px]"
                  data-strk-bg-id="step-2-bg-4d5e6f"
                  data-strk-bg="supplier search factory identification China"
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="800"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mr-4">
                    2
                  </div>
                  <h2 id="step-2-title" className="text-3xl font-bold text-gray-900">
                    Supplier Identification & Verification
                  </h2>
                </div>
                <p id="step-2-desc" className="text-lg text-gray-600 mb-6">
                  We identify potential suppliers and conduct thorough verification to ensure 
                  they are legitimate, capable, and reliable.
                </p>
                <div className="space-y-4">
                  {[
                    'Research and shortlist potential suppliers',
                    'Conduct factory audits and on-site visits',
                    'Verify business licenses and certifications',
                    'Assess production capacity and capabilities',
                    'Check export history and client references',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mr-4">
                    3
                  </div>
                  <h2 id="step-3-title" className="text-3xl font-bold text-gray-900">
                    Sample Coordination & Evaluation
                  </h2>
                </div>
                <p id="step-3-desc" className="text-lg text-gray-600 mb-6">
                  We coordinate sample production, conduct quality checks, and arrange 
                  international shipping for your evaluation.
                </p>
                <div className="space-y-4">
                  {[
                    'Coordinate sample production with shortlisted suppliers',
                    'Conduct initial quality check on samples',
                    'Arrange international shipping of samples',
                    'Evaluate samples against your specifications',
                    'Provide detailed sample evaluation report',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="rounded-2xl bg-gray-200 min-h-[400px]"
                data-strk-bg-id="step-3-bg-7g8h9i"
                data-strk-bg="sample evaluation quality check manufacturing China"
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="800"
              />
            </div>

            {/* Step 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div
                  className="rounded-2xl bg-gray-200 min-h-[400px]"
                  data-strk-bg-id="step-4-bg-1j2k3l"
                  data-strk-bg="price negotiation contract manufacturing China"
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="800"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mr-4">
                    4
                  </div>
                  <h2 id="step-4-title" className="text-3xl font-bold text-gray-900">
                    Price Negotiation & Contract
                  </h2>
                </div>
                <p id="step-4-desc" className="text-lg text-gray-600 mb-6">
                  We leverage our expertise and volume to negotiate the best possible 
                  prices and terms for your order.
                </p>
                <div className="space-y-4">
                  {[
                    'Negotiate pricing based on order quantity',
                    'Secure favorable payment terms',
                    'Clarify Incoterms and delivery terms',
                    'Review and finalize supplier contract',
                    'Ensure all specifications are clearly documented',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mr-4">
                    5
                  </div>
                  <h2 id="step-5-title" className="text-3xl font-bold text-gray-900">
                    Production Monitoring
                  </h2>
                </div>
                <p id="step-5-desc" className="text-lg text-gray-600 mb-6">
                  We provide regular updates and monitoring throughout the production 
                  process to ensure timelines are met and quality is maintained.
                </p>
                <div className="space-y-4">
                  {[
                    'Regular production progress updates with photos/videos',
                    'Monitor production timeline and identify potential delays',
                    'Conduct during production inspections (DUPRO)',
                    'Ensure quality standards are maintained throughout',
                    'Proactive communication on any issues or changes',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="rounded-2xl bg-gray-200 min-h-[400px]"
                data-strk-bg-id="step-5-bg-4m5n6o"
                data-strk-bg="production monitoring manufacturing line quality control China"
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="800"
              />
            </div>

            {/* Step 6 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div
                  className="rounded-2xl bg-gray-200 min-h-[400px]"
                  data-strk-bg-id="step-6-bg-7p8q9r"
                  data-strk-bg="quality inspection pre-shipment manufacturing China"
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="800"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mr-4">
                    6
                  </div>
                  <h2 id="step-6-title" className="text-3xl font-bold text-gray-900">
                    Quality Inspection
                  </h2>
                </div>
                <p id="step-6-desc" className="text-lg text-gray-600 mb-6">
                  We conduct thorough pre-shipment inspections to ensure your products 
                  meet all quality standards before they leave the factory.
                </p>
                <div className="space-y-4">
                  {[
                    'Pre-shipment inspection (PSI) by certified inspectors',
                    'Check against your approved samples and specifications',
                    'Verify quantity, packaging, and labeling',
                    'Conduct functional and safety tests as needed',
                    'Provide detailed inspection report with photos',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 7 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mr-4">
                    7
                  </div>
                  <h2 id="step-7-title" className="text-3xl font-bold text-gray-900">
                    Shipping & Logistics Coordination
                  </h2>
                </div>
                <p id="step-7-desc" className="text-lg text-gray-600 mb-6">
                  We coordinate with reliable freight forwarders and manage all logistics 
                  to ensure smooth and cost-effective delivery.
                </p>
                <div className="space-y-4">
                  {[
                    'Book shipping space with reliable freight forwarders',
                    'Optimize shipping method (air, sea, express) based on your needs',
                    'Prepare and verify all customs documentation',
                    'Arrange cargo insurance for full protection',
                    'Provide tracking information and regular shipping updates',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="rounded-2xl bg-gray-200 min-h-[400px]"
                data-strk-bg-id="step-7-bg-1s2t3u"
                data-strk-bg="shipping logistics container port export China"
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="800"
              />
            </div>

            {/* Step 8 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div
                  className="rounded-2xl bg-gray-200 min-h-[400px]"
                  data-strk-bg-id="step-8-bg-4v5w6x"
                  data-strk-bg="after sales support customer service sourcing China"
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="800"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mr-4">
                    8
                  </div>
                  <h2 id="step-8-title" className="text-3xl font-bold text-gray-900">
                    After-Sales Support
                  </h2>
                </div>
                <p id="step-8-desc" className="text-lg text-gray-600 mb-6">
                  Our service doesn't end when the goods are delivered. We provide 
                  ongoing support to ensure your complete satisfaction.
                </p>
                <div className="space-y-4">
                  {[
                    'Monitor delivery and confirm receipt of goods',
                    'Address any quality issues or discrepancies',
                    'Coordinate with supplier on replacements or refunds if needed',
                    'Provide documentation for customs or quality claims',
                    'Ongoing supplier relationship management for reorders',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="timeline-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Typical Timeline
            </h2>
            <p id="timeline-subtitle" className="text-xl text-gray-600">
              Here's how long each stage typically takes
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              { stage: 'Requirements Analysis', duration: '1-2 days', description: 'Understanding your needs' },
              { stage: 'Supplier Identification', duration: '3-7 days', description: 'Research and verification' },
              { stage: 'Sample Coordination', duration: '7-21 days', description: 'Production and shipping of samples' },
              { stage: 'Price Negotiation', duration: '2-5 days', description: 'Finalizing terms and contract' },
              { stage: 'Production', duration: '15-45 days', description: 'Depending on order complexity' },
              { stage: 'Quality Inspection', duration: '1-2 days', description: 'Pre-shipment inspection' },
              { stage: 'Shipping', duration: '7-45 days', description: 'Depending on shipping method' },
            ].map((item, index) => (
              <div key={index} className="flex items-start mb-8 last:mb-0">
                <div className="flex-shrink-0 w-32 text-right pr-6">
                  <div className="text-sm font-semibold text-blue-600">{item.duration}</div>
                </div>
                <div className="flex-shrink-0 mr-6">
                  <div className="w-4 h-4 bg-blue-600 rounded-full mt-1.5" />
                  {index < 6 && <div className="w-0.5 h-16 bg-blue-200 mx-auto mt-2" />}
                </div>
                <div className="flex-grow pb-8">
                  <h3 className="text-lg font-semibold text-gray-900">{item.stage}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for a free consultation. We'll guide you through every step of the process.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
