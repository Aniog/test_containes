import React from 'react'
import { Link } from 'react-router-dom'
import { Search, CheckCircle, Factory, Truck, FileText, Clock, Shield, Users, ArrowRight } from 'lucide-react'

const Services = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-lg text-gray-600">
            Comprehensive China sourcing solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Service 1 */}
            <div className="space-y-6">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                <Search className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Supplier Sourcing</h2>
              <p className="text-gray-600 leading-relaxed">
                We help you find the right suppliers based on your product requirements, quality standards,
                and target pricing. Our extensive network and local knowledge enable us to identify
                manufacturers that match your needs.
              </p>
              <ul className="space-y-3">
                {[
                  'Requirement analysis and supplier matching',
                  'Multiple supplier options with comparison',
                  'Background checks and credential verification',
                  'Initial price and lead time negotiation',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 2 */}
            <div className="space-y-6">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Factory Verification</h2>
              <p className="text-gray-600 leading-relaxed">
                Before introducing you to a supplier, we conduct thorough on-site audits to verify
                their manufacturing capabilities, quality systems, and business legitimacy.
              </p>
              <ul className="space-y-3">
                {[
                  'On-site factory audits and assessments',
                  'Production capacity and equipment verification',
                  'Quality management system evaluation',
                  'Compliance and certification checks',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 3 */}
            <div className="space-y-6">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                <Factory className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Quality Inspection</h2>
              <p className="text-gray-600 leading-relaxed">
                Our quality control team conducts inspections at various stages to ensure your products
                meet specifications before shipment.
              </p>
              <ul className="space-y-3">
                {[
                  'Pre-production sample inspection',
                  'During-production quality checks',
                  'Pre-shipment inspection (PSI)',
                  'Container loading supervision',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 4 */}
            <div className="space-y-6">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                <Clock className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Production Monitoring</h2>
              <p className="text-gray-600 leading-relaxed">
                We provide regular updates and oversight throughout the production process to ensure
                your order stays on schedule and meets quality standards.
              </p>
              <ul className="space-y-3">
                {[
                  'Regular production progress updates',
                  'Photo and video documentation',
                  'Timeline tracking and delay prevention',
                  'Issue identification and resolution',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 5 */}
            <div className="space-y-6">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                <Truck className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Shipping Coordination</h2>
              <p className="text-gray-600 leading-relaxed">
                We handle logistics from the factory to your destination, managing documentation,
                customs clearance, and freight forwarding.
              </p>
              <ul className="space-y-3">
                {[
                  'Freight forwarding and carrier selection',
                  'Export documentation preparation',
                  'Customs clearance assistance',
                  'Door-to-door delivery coordination',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service 6 */}
            <div className="space-y-6">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Sample Management</h2>
              <p className="text-gray-600 leading-relaxed">
                We coordinate the sampling process, from initial prototypes to pre-production samples,
                ensuring they meet your specifications before mass production.
              </p>
              <ul className="space-y-3">
                {[
                  'Sample request and negotiation',
                  'Sample quality evaluation',
                  'Testing and certification coordination',
                  'Sample approval and documentation',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Additional Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Price Negotiation',
                description: 'Leverage our local presence and market knowledge to negotiate competitive pricing and favorable terms.',
              },
              {
                title: 'Private Label & OEM',
                description: 'Support for custom branding, packaging design, and OEM manufacturing requirements.',
              },
              {
                title: 'Supplier Relationship Management',
                description: 'Ongoing communication and relationship management with your Chinese suppliers.',
              },
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need Help with Your China Sourcing?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today for a free consultation about your sourcing needs.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
          >
            Get a Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services
