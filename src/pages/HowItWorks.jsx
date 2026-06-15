import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, FileSearch, Factory, Package, Truck, BarChart3 } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const HowItWorks = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const steps = [
    {
      step: '01',
      title: 'Understand Your Requirements',
      description: 'We start by learning about your product needs, target price, quality standards, and timeline. This helps us tailor our sourcing strategy to your specific situation.',
      details: [
        'Product specifications discussion',
        'Target price analysis',
        'Quality standard definition',
        'Timeline & quantity planning',
        'Confidentiality agreement signing'
      ],
      imgId: 'howitworks-step1-001',
      imgDesc: 'Initial consultation meeting to understand requirements'
    },
    {
      step: '02',
      title: 'Supplier Identification & Verification',
      description: 'We leverage our extensive network to identify suitable suppliers, then conduct thorough verification including factory audits and capability assessments.',
      details: [
        'Supplier database search',
        'Factory license verification',
        'On-site factory audit',
        'Production capacity assessment',
        'Quality system evaluation'
      ],
      imgId: 'howitworks-step2-002',
      imgDesc: 'Factory audit and supplier verification process'
    },
    {
      step: '03',
      title: 'Quotation & Sample Evaluation',
      description: 'We collect competitive quotes from verified suppliers and help you evaluate product samples to make informed decisions.',
      details: [
        'Competitive quote collection',
        'Price & term negotiation',
        'Sample procurement',
        'Quality evaluation support',
        'Cost analysis & comparison'
      ],
      imgId: 'howitworks-step3-003',
      imgDesc: 'Evaluating product samples and quotations'
    },
    {
      step: '04',
      title: 'Quality Control & Production Monitoring',
      description: 'Once you place an order, we monitor production progress and conduct quality inspections to ensure your products meet specifications.',
      details: [
        'Production schedule tracking',
        'During-production inspection',
        'Pre-shipment inspection',
        'Quality issue resolution',
        'Progress report updates'
      ],
      imgId: 'howitworks-step4-004',
      imgDesc: 'Quality inspection during production'
    },
    {
      step: '05',
      title: 'Shipping & Delivery Coordination',
      description: 'We handle logistics coordination, documentation preparation, and ensure your products are delivered safely to your door.',
      details: [
        'Freight forwarder coordination',
        'Customs documentation',
        'Cargo insurance arrangement',
        'Shipping tracking',
        'Delivery confirmation'
      ],
      imgId: 'howitworks-step5-005',
      imgDesc: 'Container loading and shipping coordination'
    }
  ]

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 id="howitworks-hero-title" className="text-4xl md:text-5xl font-bold mb-6">
              How It Works
            </h1>
            <p id="howitworks-hero-subtitle" className="text-xl text-blue-100">
              A proven 5-step process to help you source successfully from China
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Number */}
                <div className="flex items-center mb-8">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                    {step.step}
                  </div>
                  <div className="h-1 flex-1 bg-blue-200" />
                </div>

                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                      {step.description}
                    </p>
                    <ul className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                    <img
                      data-strk-img-id={step.imgId}
                      data-strk-img={`[howitworks-hero-subtitle] [howitworks-hero-title]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={step.imgDesc}
                      className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Visual */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 id="timeline-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Typical Project Timeline
            </h2>
            <p id="timeline-subtitle" className="text-lg text-gray-600">
              What to expect when working with us
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200" />

              {/* Timeline items */}
              <div className="space-y-8">
                <div className="relative flex items-start">
                  <div className="absolute left-8 w-4 h-4 bg-blue-600 rounded-full -translate-x-1.5 mt-1.5" />
                  <div className="ml-16">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Day 1-3: Requirement Analysis</h3>
                    <p className="text-gray-600">We discuss your needs and define sourcing strategy.</p>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="absolute left-8 w-4 h-4 bg-blue-600 rounded-full -translate-x-1.5 mt-1.5" />
                  <div className="ml-16">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Day 4-7: Supplier Matching</h3>
                    <p className="text-gray-600">We identify and verify suitable suppliers for your project.</p>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="absolute left-8 w-4 h-4 bg-blue-600 rounded-full -translate-x-1.5 mt-1.5" />
                  <div className="ml-16">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Day 8-14: Sampling & Quotation</h3>
                    <p className="text-gray-600">Receive competitive quotes and evaluate product samples.</p>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="absolute left-8 w-4 h-4 bg-blue-600 rounded-full -translate-x-1.5 mt-1.5" />
                  <div className="ml-16">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Day 15-45: Production & QC</h3>
                    <p className="text-gray-600">Production with monitoring and quality inspections (timeline varies by order size).</p>
                  </div>
                </div>

                <div className="relative flex items-start">
                  <div className="absolute left-8 w-4 h-4 bg-blue-600 rounded-full -translate-x-1.5 mt-1.5" />
                  <div className="ml-16">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Day 46-60: Shipping & Delivery</h3>
                    <p className="text-gray-600">Logistics coordination and delivery to your warehouse (timeline varies by shipping method).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="howitworks-cta-title" className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p id="howitworks-cta-subtitle" className="text-xl text-blue-100 mb-8">
            Contact us today and let's discuss how we can help with your sourcing needs
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors inline-flex items-center"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
