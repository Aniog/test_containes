import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  CheckCircle, 
  FileText, 
  Factory, 
  ClipboardCheck,
  Truck,
  BarChart3
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const HowItWorks = () => {
  const heroRef = useRef(null)
  const stepsRef = useRef(null)

  useEffect(() => {
    const loadImages = (ref) => {
      if (ref.current) {
        return ImageHelper.loadImages(strkImgConfig, ref.current)
      }
      return undefined
    }

    const cleanups = [
      loadImages(heroRef),
      loadImages(stepsRef),
    ].filter(Boolean)

    return () => cleanups.forEach(cleanup => cleanup())
  }, [])

  const steps = [
    {
      step: '01',
      title: 'Requirements Analysis',
      description: 'Share your product specifications, target price, order quantity, and quality requirements with us. The more details you provide, the better we can serve you.',
      details: [
        'Product specifications and drawings',
        'Target price and budget',
        'Estimated order quantity',
        'Quality standards and certifications needed',
        'Timeline expectations',
      ],
      icon: <FileText className="w-8 h-8" />,
      image: 'requirements-analysis',
    },
    {
      step: '02',
      title: 'Supplier Identification',
      description: 'We search our extensive network of verified suppliers to find manufacturers that match your requirements and budget. We typically provide 3-5 options for comparison.',
      details: [
        'Database search of verified suppliers',
        'Capability and capacity assessment',
        'Initial price inquiry',
        'Shortlist of 3-5 best matches',
        'Comparison sheet with pros/cons',
      ],
      icon: <Factory className="w-8 h-8" />,
      image: 'supplier-identification',
    },
    {
      step: '03',
      title: 'Factory Verification',
      description: 'Our team conducts on-site factory audits to verify manufacturer capabilities, certifications, production capacity, and working conditions before we recommend them.',
      details: [
        'On-site facility inspection',
        'Production equipment verification',
        'Quality control system review',
        'Certification and license checks',
        'Past client reference checks',
      ],
      icon: <ClipboardCheck className="w-8 h-8" />,
      image: 'factory-verification',
    },
    {
      step: '04',
      title: 'Sample & Quotation',
      description: 'Once suppliers are verified, we help you get product samples and detailed quotations. We facilitate sample shipping and provide evaluation support.',
      details: [
        'Coordinate sample production',
        'Arrange sample shipping to you',
        'Provide detailed quotation breakdown',
        'Sample quality evaluation support',
        'Price negotiation assistance',
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      image: 'sample-quotation',
    },
    {
      step: '05',
      title: 'Order & Production',
      description: 'After you select a supplier, we manage the order placement, contract review, and monitor production progress with regular updates and photos.',
      details: [
        'Contract and terms negotiation',
        'Order confirmation and deposit handling',
        'Production timeline monitoring',
        'Regular progress updates with photos',
        'Quality checks during production',
      ],
      icon: <Factory className="w-8 h-8" />,
      image: 'order-production',
    },
    {
      step: '06',
      title: 'QC & Shipping',
      description: 'We conduct final quality inspection before shipment and coordinate logistics, customs clearance, and delivery to your doorstep.',
      details: [
        'Pre-shipment quality inspection',
        'Detailed inspection report with photos',
        'Packaging and labeling verification',
        'Freight forwarding and customs clearance',
        'Door-to-door delivery coordination',
      ],
      icon: <Truck className="w-8 h-8" />,
      image: 'qc-shipping',
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-900" ref={heroRef}>
        <div className="absolute inset-0">
          <div
            className="w-full h-full bg-cover bg-center opacity-20"
            data-strk-bg-id="how-it-works-hero-bg"
            data-strk-bg="[how-hero-subtitle] [how-hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1920"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="how-hero-title" className="text-4xl md:text-5xl font-bold text-white mb-6">
            How It Works
          </h1>
          <p id="how-hero-subtitle" className="text-xl text-blue-100 max-w-3xl mx-auto">
            A simple, transparent 6-step process from inquiry to delivery
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white" ref={stepsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="text-6xl font-bold text-blue-100">{step.step}</div>
                    <div className="text-blue-600">{step.icon}</div>
                  </div>
                  <h2 id={`step-title-${index}`} className="text-3xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden bg-gray-200">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      data-strk-img-id={`step-${index}`}
                      data-strk-img={`[step-title-${index}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={step.title}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Typical Timeline
          </h2>
          <div className="space-y-8">
            {[
              { phase: 'Supplier Sourcing & Verification', duration: '2-4 weeks' },
              { phase: 'Sampling & Quotation', duration: '1-2 weeks' },
              { phase: 'Production', duration: '2-8 weeks (varies by product)' },
              { phase: 'Quality Inspection & Shipping', duration: '1-3 weeks' },
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <span className="font-semibold text-gray-900">{item.phase}</span>
                </div>
                <span className="text-blue-600 font-semibold">{item.duration}</span>
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
            Contact us today for a free consultation and quote. No obligations.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
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
