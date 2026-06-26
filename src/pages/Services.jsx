import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Search, 
  Factory, 
  ClipboardCheck, 
  Package, 
  Truck, 
  Shield,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Supplier Sourcing',
      description: 'We help you find the right suppliers for your products.',
      details: [
        'Identify qualified suppliers based on your requirements',
        'Evaluate supplier capabilities and capacity',
        'Compare multiple options with detailed analysis',
        'Negotiate competitive pricing on your behalf',
        'Verify supplier credentials and business licenses'
      ],
      process: [
        'Understand your product requirements and specifications',
        'Search our database and network for matching suppliers',
        'Conduct initial screening and capability assessment',
        'Provide you with a shortlist of qualified suppliers',
        'Facilitate introductions and sample requests'
      ]
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: 'Factory Verification',
      description: 'On-site audits to ensure supplier legitimacy and capability.',
      details: [
        'Comprehensive on-site factory audits',
        'Verification of business licenses and certifications',
        'Assessment of production capacity and equipment',
        'Review of quality management systems',
        'Evaluation of working conditions and compliance'
      ],
      process: [
        'Schedule factory visit with the supplier',
        'Conduct thorough on-site inspection',
        'Document findings with photos and videos',
        'Prepare detailed audit report with recommendations',
        'Follow up on any identified issues or gaps'
      ]
    },
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: 'Quality Inspection',
      description: 'Ensure your products meet quality standards before shipment.',
      details: [
        'Pre-shipment inspections (PSI)',
        'During-production inspections (DUPRO)',
        'Initial production check (IPC)',
        'Container loading supervision',
        'Laboratory testing coordination'
      ],
      process: [
        'Review product specifications and quality standards',
        'Schedule inspection at appropriate production stage',
        'Conduct inspection using standardized checklists',
        'Document findings with detailed reports and photos',
        'Provide pass/fail recommendation with corrective actions'
      ]
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Production Monitoring',
      description: 'Stay informed about your production progress.',
      details: [
        'Regular production status updates',
        'Timeline monitoring and delay prevention',
        'Quality checks at key production stages',
        'Communication with factory on your behalf',
        'Problem resolution and escalation'
      ],
      process: [
        'Establish production timeline and milestones',
        'Schedule regular factory visits and updates',
        'Monitor progress against agreed timeline',
        'Identify and address potential delays early',
        'Provide you with regular progress reports'
      ]
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Shipping Coordination',
      description: 'End-to-end logistics support for smooth delivery.',
      details: [
        'Freight forwarding arrangements',
        'Customs clearance assistance',
        'Documentation preparation (commercial invoice, packing list, etc.)',
        'Cargo insurance coordination',
        'Delivery tracking and updates'
      ],
      process: [
        'Determine optimal shipping method (air, sea, express)',
        'Get quotes from reliable freight forwarders',
        'Coordinate with supplier for ready goods',
        'Arrange pickup, customs clearance, and delivery',
        'Provide tracking information and delivery updates'
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Quality Assurance Program',
      description: 'Comprehensive quality management for your brand protection.',
      details: [
        'Develop quality control plan for your products',
        'Implement quality checks at multiple stages',
        'Train supplier on your quality standards',
        'Establish corrective action procedures',
        'Continuous improvement recommendations'
      ],
      process: [
        'Understand your quality requirements and standards',
        'Develop customized QC plan for your products',
        'Implement checks at incoming materials, in-process, and final stages',
        'Review quality issues and implement improvements',
        'Provide ongoing quality support and consultation'
      ]
    }
  ]

  return (
    <div>
      {/* Page Header */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Comprehensive sourcing solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600 text-lg mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">What We Do</h3>
                    <ul className="space-y-2">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Our Process</h3>
                    <ol className="space-y-2">
                      {service.process.map((step, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold">
                            {idx + 1}
                          </span>
                          <span className="text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                <div className={`bg-gray-50 p-8 rounded-lg ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h3 className="text-2xl font-bold mb-4">Why Choose Our {service.title} Service?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold">Experienced Team</h4>
                        <p className="text-gray-600 text-sm">Our team has 10+ years of experience in China sourcing and manufacturing.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold">Local Presence</h4>
                        <p className="text-gray-600 text-sm">Based in China with on-the-ground team to visit factories and conduct inspections.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold">Transparent Reporting</h4>
                        <p className="text-gray-600 text-sm">Detailed reports with photos, videos, and clear recommendations for every service.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold">Competitive Pricing</h4>
                        <p className="text-gray-600 text-sm">Transparent, competitive pricing with no hidden fees or surprises.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Need Help with Your Sourcing Project?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact us today for a free consultation. We'll discuss your requirements 
            and recommend the best approach for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-blue-700 hover:bg-blue-50 text-lg">
              Get Free Quote
            </Link>
            <Link to="/how-it-works" className="btn-secondary border-white text-white hover:bg-white hover:text-blue-700 text-lg">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
