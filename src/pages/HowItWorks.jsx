import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, FileText, Factory, Truck, Ship, Users, Search, Clipboard, Package } from 'lucide-react'

const HowItWorks = () => {
  const containerRef = React.useRef(null)

  React.useEffect(() => {
    if (window.ImageHelper && containerRef.current) {
      window.ImageHelper.loadImages(window.strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h1>
          <p className="text-lg text-gray-600">
            A step-by-step guide to our China sourcing process
          </p>
        </div>
      </section>

      {/* Main Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Step 1 */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    1
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Initial Consultation</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We start by understanding your business, product requirements, quality standards,
                  target pricing, and timeline. This helps us tailor our sourcing strategy to your needs.
                </p>
                <div className="space-y-3">
                  {[
                    'Discuss product specifications and requirements',
                    'Understand quality standards and certifications needed',
                    'Define target price range and order quantities',
                    'Establish timeline and delivery expectations',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="flex items-center justify-center">
                  <Users className="w-24 h-24 text-blue-200" />
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gray-50 rounded-lg p-8">
                <div className="flex items-center justify-center">
                  <Search className="w-24 h-24 text-blue-200" />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    2
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Supplier Sourcing & Verification</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We identify potential suppliers and conduct thorough verification to ensure they
                  meet your requirements and quality standards.
                </p>
                <div className="space-y-3">
                  {[
                    'Research and identify suitable manufacturers',
                    'Conduct factory audits and capability assessments',
                    'Verify business licenses and certifications',
                    'Evaluate production capacity and quality systems',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    3
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Quotation & Negotiation</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We gather quotations from verified suppliers and negotiate the best terms on your behalf.
                </p>
                <div className="space-y-3">
                  {[
                    'Collect detailed quotations from multiple suppliers',
                    'Compare pricing, lead times, and payment terms',
                    'Negotiate to get the best possible deal',
                    'Present you with clear comparison and recommendations',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="flex items-center justify-center">
                  <FileText className="w-24 h-24 text-blue-200" />
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gray-50 rounded-lg p-8">
                <div className="flex items-center justify-center">
                  <Package className="w-24 h-24 text-blue-200" />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    4
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Sample Coordination</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We coordinate sample production and evaluation to ensure the supplier can meet your quality expectations.
                </p>
                <div className="space-y-3">
                  {[
                    'Request samples from selected supplier',
                    'Coordinate sample production and delivery',
                    'Evaluate samples against your specifications',
                    'Provide feedback and request improvements if needed',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    5
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Production Monitoring</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Once the order is confirmed, we monitor production to ensure quality and on-time delivery.
                </p>
                <div className="space-y-3">
                  {[
                    'Regular factory visits and production updates',
                    'Photo and video documentation of production progress',
                    'During-production quality checks',
                    'Proactive issue identification and resolution',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="flex items-center justify-center">
                  <Factory className="w-24 h-24 text-blue-200" />
                </div>
              </div>
            </div>
          </div>

          {/* Step 6 */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gray-50 rounded-lg p-8">
                <div className="flex items-center justify-center">
                  <Clipboard className="w-24 h-24 text-blue-200" />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    6
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Quality Inspection</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We conduct thorough inspections before shipment to ensure your products meet quality standards.
                </p>
                <div className="space-y-3">
                  {[
                    'Pre-shipment inspection (PSI) by our QC team',
                    'Check against approved samples and specifications',
                    'Functional testing and visual inspection',
                    'Detailed inspection report with photos',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Step 7 */}
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    7
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Shipping & Delivery</h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We coordinate logistics to get your products from the factory to your doorstep safely and efficiently.
                </p>
                <div className="space-y-3">
                  {[
                    'Arrange freight forwarding and shipping method',
                    'Prepare export documentation and customs paperwork',
                    'Coordinate container loading and booking',
                    'Track shipment and provide delivery updates',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="flex items-center justify-center">
                  <Truck className="w-24 h-24 text-blue-200" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Typical Timeline</h2>

          <div className="space-y-8">
            {[
              { phase: 'Consultation & Requirement Analysis', duration: '1-3 days' },
              { phase: 'Supplier Sourcing & Verification', duration: '1-2 weeks' },
              { phase: 'Quotation & Negotiation', duration: '3-7 days' },
              { phase: 'Sample Production & Approval', duration: '2-4 weeks' },
              { phase: 'Production', duration: '30-60 days (varies by product)' },
              { phase: 'Quality Inspection', duration: '1-3 days' },
              { phase: 'Shipping & Delivery', duration: '15-45 days (depending on method)' },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-6 bg-white rounded-lg p-6 shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">{index + 1}</span>
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold text-gray-900">{item.phase}</h3>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded">{item.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today and let's discuss how we can help you source from China.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
          >
            Get a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
