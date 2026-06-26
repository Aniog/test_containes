import React from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  CheckCircle, 
  FileText, 
  Search, 
  Factory, 
  ClipboardCheck, 
  Package, 
  Truck,
  Phone,
  Mail
} from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: <FileText className="w-8 h-8" />,
      title: 'Submit Your Requirements',
      description: 'Tell us what you need',
      details: 'Fill out our inquiry form with your product details, specifications, target price, estimated quantity, and quality requirements. The more details you provide, the better we can assist you.',
      actions: [
        'Complete our online inquiry form',
        'Upload product images, drawings, or specifications',
        'Specify your target price and quantity',
        'Mention any special requirements or certifications needed'
      ]
    },
    {
      number: '02',
      icon: <Search className="w-8 h-8" />,
      title: 'Supplier Sourcing & Evaluation',
      description: 'We find and assess potential suppliers',
      details: 'Our team searches our extensive database and network to identify suppliers that match your requirements. We evaluate their capabilities, capacity, and track record.',
      actions: [
        'Search our database of 10,000+ verified suppliers',
        'Evaluate supplier capabilities and production capacity',
        'Check supplier certifications and compliance records',
        'Assess supplier communication and responsiveness'
      ]
    },
    {
      number: '03',
      icon: <Factory className="w-8 h-8" />,
      title: 'Factory Verification & Audit',
      description: 'On-site assessment of shortlisted suppliers',
      details: 'For suppliers that pass initial screening, we conduct on-site factory audits to verify their legitimacy, production capacity, quality management systems, and working conditions.',
      actions: [
        'Schedule factory visit with the supplier',
        'Conduct comprehensive on-site audit',
        'Verify business licenses and certifications',
        'Assess production equipment and capacity',
        'Review quality management systems',
        'Document findings with photos and videos'
      ]
    },
    {
      number: '04',
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: 'Quotation & Sample Coordination',
      description: 'Get pricing and evaluate product quality',
      details: 'We facilitate the quotation process and coordinate sample production. You receive detailed quotations and can evaluate product quality through samples before making decisions.',
      actions: [
        'Request quotations from verified suppliers',
        'Compare pricing, lead times, and terms',
        'Coordinate sample production',
        'Facilitate sample shipping to you',
        'Collect your feedback on samples'
      ]
    },
    {
      number: '05',
      icon: <Package className="w-8 h-8" />,
      title: 'Order Placement & Production Monitoring',
      description: 'We manage the production process',
      details: 'Once you select a supplier and approve samples, we help negotiate terms, place the order, and monitor production to ensure quality and timeline adherence.',
      actions: [
        'Negotiate pricing and payment terms',
        'Finalize contracts and purchase agreements',
        'Monitor production progress with regular updates',
        'Conduct during-production quality checks',
        'Address any issues or delays promptly'
      ]
    },
    {
      number: '06',
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: 'Quality Inspection',
      description: 'Ensure products meet your standards',
      details: 'Before shipment, we conduct pre-shipment inspections to verify that products meet your specifications and quality standards. We provide detailed inspection reports.',
      actions: [
        'Schedule pre-shipment inspection',
        'Check products against your specifications',
        'Test functionality and quality',
        'Document findings with photos and measurements',
        'Provide pass/fail recommendation',
        'Coordinate corrective actions if needed'
      ]
    },
    {
      number: '07',
      icon: <Truck className="w-8 h-8" />,
      title: 'Shipping & Logistics Coordination',
      description: 'We arrange delivery to your door',
      details: 'We coordinate with reliable freight forwarders to arrange shipping, handle customs clearance, and ensure your products are delivered safely and on time.',
      actions: [
        'Determine optimal shipping method (air, sea, express)',
        'Get quotes from multiple freight forwarders',
        'Arrange cargo insurance',
        'Prepare shipping documents',
        'Coordinate customs clearance',
        'Track shipment and provide updates'
      ]
    },
    {
      number: '08',
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'After-Sales Support',
      description: 'We continue to support you',
      details: 'Our service doesn\'t end with delivery. We provide ongoing support for any issues, help with reorders, and continuously improve our service based on your feedback.',
      actions: [
        'Address any quality issues or claims',
        'Facilitate communication with supplier for resolutions',
        'Support reorders and repeat business',
        'Provide market updates and new product suggestions',
        'Continuously improve our service based on feedback'
      ]
    }
  ]

  return (
    <div>
      {/* Page Header */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Our proven 8-step process to help you source successfully from China
          </p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Our Sourcing Process</h2>
            <p>A systematic approach designed to minimize risks and maximize success</p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

            {/* Steps */}
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className={`relative flex md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold z-10">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className={`flex items-center mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4">
                          {step.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">Step {step.number}</h3>
                          <h4 className="text-lg font-semibold text-blue-600">{step.title}</h4>
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4">{step.details}</p>
                      <div className={`${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        <h5 className="font-semibold mb-2">Key Actions:</h5>
                        <ul className="space-y-1">
                          {step.actions.map((action, idx) => (
                            <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>{action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>What Makes Our Process Different</h2>
            <p>We go beyond just finding suppliers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Local Expertise',
                description: 'Our team is based in China with deep understanding of local manufacturing, culture, and business practices.'
              },
              {
                title: 'Transparency',
                description: 'We provide detailed reports, photos, and videos at every stage. You see exactly what we see.'
              },
              {
                title: 'Risk Mitigation',
                description: 'Our verification and inspection processes significantly reduce the risks of working with overseas suppliers.'
              },
              {
                title: 'Communication',
                description: 'We bridge the language and cultural gap, ensuring clear communication between you and suppliers.'
              },
              {
                title: 'Ongoing Support',
                description: 'We don\'t just facilitate the first order. We support you for reorders and long-term partnerships.'
              },
              {
                title: 'No Hidden Costs',
                description: 'Transparent pricing with no surprises. You know exactly what you\'re paying for.'
              }
            ].map((item, index) => (
              <div key={index} className="card">
                <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Expectation */}
      <section className="section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="section-title">
            <h2>Typical Timeline</h2>
            <p>Understanding the time required for each stage</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                { stage: 'Requirements Analysis', duration: '1-2 days', description: 'We review your inquiry and clarify any questions' },
                { stage: 'Supplier Sourcing', duration: '1-2 weeks', description: 'Identify and evaluate potential suppliers' },
                { stage: 'Factory Verification', duration: '1 week', description: 'On-site audits of shortlisted suppliers' },
                { stage: 'Quotation & Samples', duration: '2-3 weeks', description: 'Receive quotations and evaluate samples' },
                { stage: 'Order & Production', duration: 'Varies', description: 'Depends on product complexity and order quantity' },
                { stage: 'Quality Inspection', duration: '1-2 days', description: 'Pre-shipment inspection before shipping' },
                { stage: 'Shipping', duration: 'Varies', description: 'Air freight: 3-7 days, Sea freight: 15-45 days' }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white p-4 rounded-lg shadow-sm">
                  <div className="w-24 flex-shrink-0">
                    <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {item.duration}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{item.stage}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Sourcing Project?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact us today to discuss your requirements. We'll guide you through 
            each step of the process and help you source successfully from China.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-blue-700 hover:bg-blue-50 text-lg">
              Get Free Quote
            </Link>
            <a href="https://wa.me/8613800000000" className="btn-secondary border-white text-white hover:bg-white hover:text-blue-700 text-lg">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
