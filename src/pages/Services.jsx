import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Factory, ClipboardCheck, Truck, Search, Shield, FileText, Users, BarChart } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Services = () => {
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
            <h1 id="services-hero-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Sourcing Services
            </h1>
            <p id="services-hero-subtitle" className="text-xl text-gray-600 max-w-3xl mx-auto">
              From supplier identification to final delivery, we provide end-to-end sourcing solutions 
              tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {/* Service 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6">
                  <Search className="w-12 h-12 text-blue-600" />
                </div>
                <h2 id="service-1-title" className="text-3xl font-bold text-gray-900 mb-4">
                  Supplier Sourcing & Verification
                </h2>
                <p id="service-1-desc" className="text-lg text-gray-600 mb-6">
                  We identify and verify reliable suppliers that match your specific requirements. 
                  Our thorough vetting process ensures you work with legitimate, capable manufacturers.
                </p>
                <ul className="space-y-3">
                  {[
                    'Supplier identification based on your requirements',
                    'Factory audits and on-site visits',
                    'Business license and certification verification',
                    'Production capacity assessment',
                    'Financial stability check',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="rounded-2xl bg-gray-200 min-h-[400px]"
                data-strk-bg-id="service-1-bg-1a2b3c"
                data-strk-bg="supplier sourcing verification factory audit China"
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="800"
              />
            </div>

            {/* Service 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div
                  className="rounded-2xl bg-gray-200 min-h-[400px]"
                  data-strk-bg-id="service-2-bg-4d5e6f"
                  data-strk-bg="quality inspection manufacturing China factory"
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="800"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="mb-6">
                  <ClipboardCheck className="w-12 h-12 text-blue-600" />
                </div>
                <h2 id="service-2-title" className="text-3xl font-bold text-gray-900 mb-4">
                  Quality Inspection Services
                </h2>
                <p id="service-2-desc" className="text-lg text-gray-600 mb-6">
                  Our comprehensive quality inspection services ensure your products meet specifications 
                  and quality standards before shipment.
                </p>
                <ul className="space-y-3">
                  {[
                    'Pre-production inspection',
                    'During production inspection (DUPRO)',
                    'Pre-shipment inspection (PSI)',
                    'Container loading supervision',
                    'Laboratory testing coordination',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6">
                  <Factory className="w-12 h-12 text-blue-600" />
                </div>
                <h2 id="service-3-title" className="text-3xl font-bold text-gray-900 mb-4">
                  Production Monitoring
                </h2>
                <p id="service-3-desc" className="text-lg text-gray-600 mb-6">
                  We provide regular updates and monitoring throughout the production process to ensure 
                  timelines are met and quality is maintained.
                </p>
                <ul className="space-y-3">
                  {[
                    'Regular production progress updates',
                    'Timeline monitoring and delay prevention',
                    'Quality control at each production stage',
                    'Real-time communication with factory',
                    'Production schedule optimization',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className="rounded-2xl bg-gray-200 min-h-[400px]"
                data-strk-bg-id="service-3-bg-7g8h9i"
                data-strk-bg="production monitoring manufacturing line China"
                data-strk-bg-ratio="4x3"
                data-strk-bg-width="800"
              />
            </div>

            {/* Service 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div
                  className="rounded-2xl bg-gray-200 min-h-[400px]"
                  data-strk-bg-id="service-4-bg-1j2k3l"
                  data-strk-bg="shipping logistics container port China export"
                  data-strk-bg-ratio="4x3"
                  data-strk-bg-width="800"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="mb-6">
                  <Truck className="w-12 h-12 text-blue-600" />
                </div>
                <h2 id="service-4-title" className="text-3xl font-bold text-gray-900 mb-4">
                  Shipping & Logistics Coordination
                </h2>
                <p id="service-4-desc" className="text-lg text-gray-600 mb-6">
                  We coordinate with reliable freight forwarders and manage all logistics to ensure 
                  smooth and cost-effective delivery.
                </p>
                <ul className="space-y-3">
                  {[
                    'Freight forwarder selection and coordination',
                    'Shipping method optimization (air, sea, express)',
                    'Customs documentation preparation',
                    'Cargo insurance arrangement',
                    'Door-to-door delivery coordination',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="additional-title" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText className="w-8 h-8 text-blue-600" />,
                title: 'Price Negotiation',
                description: 'Leverage our expertise and volume to negotiate better prices and terms.',
              },
              {
                icon: <Shield className="w-8 h-8 text-blue-600" />,
                title: 'Contract Review',
                description: 'Professional review of supplier contracts to protect your interests.',
              },
              {
                icon: <Users className="w-8 h-8 text-blue-600" />,
                title: 'Ongoing Supplier Management',
                description: 'Long-term relationship management with your Chinese suppliers.',
              },
              {
                icon: <BarChart className="w-8 h-8 text-blue-600" />,
                title: 'Market Research',
                description: 'In-depth research on market trends, pricing, and new product opportunities.',
              },
              {
                icon: <FileText className="w-8 h-8 text-blue-600" />,
                title: 'Sample Coordination',
                description: 'Coordinate sample production, quality check, and international shipping.',
              },
              {
                icon: <Truck className="w-8 h-8 text-blue-600" />,
                title: 'Amazon FBA Prep',
                description: 'Specialized services for Amazon sellers including labeling and packaging.',
              },
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need Help with Your China Sourcing?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for a free consultation and sourcing quote.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
          >
            Get a Free Quote
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services
