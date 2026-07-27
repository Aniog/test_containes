import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  MessageSquare, Search, FileCheck, Truck, ArrowRight,
  CheckCircle, Clock, Shield, Users, Globe, Phone
} from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Initial Consultation',
    description: 'Share your product requirements, specifications, target price, quantity, and timeline. We\'ll review your needs and respond within 24 hours with a detailed proposal.',
    details: [
      'Product specifications and drawings',
      'Target price range and budget',
      'Required quantity and timeline',
      'Quality standards and certifications needed',
      'Shipping destination and preferences',
    ],
    duration: '24 hours',
    image: 'business consultation meeting discussion',
    imageId: 'process-consult-v1w2x3',
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Identification',
    description: 'Our team searches our network of 2,000+ verified suppliers to find the best matches for your requirements. We evaluate capabilities, pricing, and reliability.',
    details: [
      'Search and shortlist qualified suppliers',
      'Evaluate production capabilities',
      'Compare pricing and MOQs',
      'Check certifications and compliance',
      'Present top 3 supplier options',
    ],
    duration: '3-5 days',
    image: 'supplier search database evaluation',
    imageId: 'process-search-y4z5a6',
  },
  {
    number: '03',
    icon: Shield,
    title: 'Factory Verification',
    description: 'We conduct on-site factory visits to verify legitimacy, assess production capacity, and ensure quality control systems are in place.',
    details: [
      'On-site factory inspection',
      'Business license verification',
      'Production line assessment',
      'Quality management review',
      'Detailed audit report provided',
    ],
    duration: '5-7 days',
    image: 'factory verification audit inspection',
    imageId: 'process-verify-b7c8d9',
  },
  {
    number: '04',
    icon: FileCheck,
    title: 'Sample & Quality Approval',
    description: 'We arrange product samples for your review and approval before mass production begins. Modifications can be made at this stage.',
    details: [
      'Sample production coordination',
      'Quality inspection of samples',
      'Detailed sample report with photos',
      'Specification comparison',
      'Approval or revision requests',
    ],
    duration: '1-2 weeks',
    image: 'product sample quality testing approval',
    imageId: 'process-sample-e1f2g3',
  },
  {
    number: '05',
    icon: Clock,
    title: 'Production Monitoring',
    description: 'Once approved, we monitor production from start to finish with regular updates, inspections, and progress reports.',
    details: [
      'Production timeline planning',
      'Raw material verification',
      'During-production inspections',
      'Weekly progress reports with photos',
      'Issue identification and resolution',
    ],
    duration: '2-8 weeks',
    image: 'factory production line manufacturing monitoring',
    imageId: 'process-monitor-h4i5j6',
  },
  {
    number: '06',
    icon: Truck,
    title: 'Final Inspection & Shipping',
    description: 'Pre-shipment inspection ensures quality before goods leave the factory. We then coordinate all logistics for safe delivery.',
    details: [
      'Pre-shipment quality inspection',
      'AQL sampling and testing',
      'Container loading supervision',
      'Freight forwarding arrangement',
      'Customs clearance and documentation',
    ],
    duration: '1-2 weeks',
    image: 'shipping container loading logistics',
    imageId: 'process-ship-k7l8m9',
  },
]

const HowItWorks = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-800 to-brand-950 section-padding text-center">
        <div className="container-max">
          <span className="inline-block px-4 py-1 bg-brand-700 text-brand-200 text-sm font-medium rounded-full mb-4">
            Our Process
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How We Work With You
          </h1>
          <p className="text-lg text-brand-200 max-w-2xl mx-auto">
            A clear, transparent process from initial inquiry to final delivery. Here's how we make
            sourcing from China simple and reliable.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 hidden md:block" />

            <div className="space-y-16">
              {steps.map((step, index) => {
                const Icon = step.icon
                const isEven = index % 2 === 0
                return (
                  <div key={index} className="relative">
                    {/* Step Number Circle */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 bg-brand-600 rounded-full items-center justify-center shadow-lg z-10">
                      <span className="text-white font-bold text-lg">{step.number}</span>
                    </div>

                    <div className={`grid md:grid-cols-2 gap-8 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}>
                      {/* Content */}
                      <div className={`${isEven ? 'md:pr-16' : 'md:pl-16 md:order-2'}`}>
                        <div className="md:hidden w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center mb-4">
                          <span className="text-white font-bold">{step.number}</span>
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                          <Icon size={20} className="text-brand-600" />
                          <span className="text-sm font-medium text-brand-600">Step {step.number}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                        <p className="text-slate-600 mb-4">{step.description}</p>
                        <ul className="space-y-2 mb-4">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-1" />
                              <span className="text-sm text-slate-600">{detail}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-50 rounded-full">
                          <Clock size={14} className="text-brand-600" />
                          <span className="text-sm font-medium text-brand-700">Typical Duration: {step.duration}</span>
                        </div>
                      </div>

                      {/* Image */}
                      <div className={`${isEven ? 'md:pl-16' : 'md:pr-16 md:order-1'}`}>
                        <div className="rounded-xl overflow-hidden shadow-lg bg-slate-100">
                          <img
                            data-strk-img-id={step.imageId}
                            data-strk-img={`[process-${step.title.toLowerCase().replace(/[^a-z]/g, '-')}] ${step.image}`}
                            data-strk-img-ratio="16x9"
                            data-strk-img-width="700"
                            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                            alt={step.title}
                            className="w-full h-auto"
                            id={`process-${step.title.toLowerCase().replace(/[^a-z]/g, '-')}`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Typical Project Timeline
            </h2>
            <p className="text-lg text-slate-600">
              From initial contact to delivery, most projects take 6-12 weeks depending on complexity.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-brand-600 mb-2">1-2 Weeks</div>
                <div className="text-slate-600">Supplier Selection & Verification</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-600 mb-2">2-8 Weeks</div>
                <div className="text-slate-600">Production & Quality Control</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-600 mb-2">1-4 Weeks</div>
                <div className="text-slate-600">Shipping & Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-brand-700 text-center">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-brand-200 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and detailed proposal tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-accent gap-2">
              Get Free Quote
              <ArrowRight size={18} />
            </Link>
            <a href="tel:+86-21-1234-5678" className="btn-secondary bg-transparent border-brand-400 text-white hover:bg-brand-600 hover:border-brand-300 gap-2">
              <Phone size={18} />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
