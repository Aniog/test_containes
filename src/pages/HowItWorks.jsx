import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  CheckCircle, 
  Search, 
  FileCheck, 
  ClipboardCheck, 
  Package, 
  Truck,
  Clock,
  MessageCircle,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const HowItWorks = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const steps = [
    {
      number: 1,
      title: 'Submit Your Request',
      description: 'Tell us what product you need, quantity, target price, and any specific requirements. The more details you provide, the better we can match you with suitable suppliers.',
      details: [
        'Product specifications and requirements',
        'Target price range',
        'Order quantity',
        'Quality standards needed',
        'Timeline expectations',
        'Any certifications required'
      ],
      icon: Search
    },
    {
      number: 2,
      title: 'We Find Suppliers',
      description: 'Our team researches and identifies verified manufacturers matching your criteria. We leverage our extensive network of pre-vetted suppliers to find the best fit.',
      details: [
        'Market research and supplier identification',
        'Capability matching',
        'Price comparison',
        'Initial supplier shortlisting',
        'Background checks',
        'Preliminary communication'
      ],
      icon: FileCheck
    },
    {
      number: 3,
      title: 'Factory Verification',
      description: 'We conduct comprehensive on-site audits to verify factory legitimacy, production capacity, quality systems, and reliability before making any recommendations.',
      details: [
        'Business license verification',
        'Production capacity assessment',
        'Quality management review',
        'Certification verification',
        'Financial stability check',
        'Reference checks'
      ],
      icon: ClipboardCheck
    },
    {
      number: 4,
      title: 'Sample & Quote',
      description: 'You receive samples and competitive quotes from verified suppliers for comparison. We help you evaluate and make an informed decision.',
      details: [
        'Sample request coordination',
        'Quote compilation and comparison',
        'Negotiation support',
        'Technical clarification',
        'Payment terms discussion',
        'Decision support'
      ],
      icon: Package
    },
    {
      number: 5,
      title: 'Production & QC',
      description: 'We monitor production progress and conduct quality inspections at key stages to ensure your order meets specifications.',
      details: [
        'Production schedule monitoring',
        'Regular factory visits',
        'During-production inspections',
        'Pre-shipment inspections',
        'Issue resolution',
        'Progress reporting'
      ],
      icon: CheckCircle
    },
    {
      number: 6,
      title: 'Shipping & Delivery',
      description: 'We coordinate all logistics from factory to your doorstep, handling documentation and customs clearance.',
      details: [
        'Freight coordination',
        'Customs documentation',
        'Loading supervision',
        'Shipment tracking',
        'Customs clearance',
        'Door-to-door delivery'
      ],
      icon: Truck
    }
  ]

  const timeline = [
    { phase: 'Week 1-2', activity: 'Supplier research and shortlisting' },
    { phase: 'Week 2-3', activity: 'Factory verification and audits' },
    { phase: 'Week 3-4', activity: 'Sample collection and evaluation' },
    { phase: 'Week 4-5', activity: 'Order confirmation and production start' },
    { phase: 'Ongoing', activity: 'Production monitoring and QC inspections' },
    { phase: 'Final', activity: 'Shipping and delivery' }
  ]

  const tips = [
    'Provide detailed product specifications to get accurate quotes',
    'Be clear about your quality standards and acceptance criteria',
    'Ask for samples before placing large orders',
    'Request factory visits or virtual tours when possible',
    'Maintain regular communication throughout the process',
    'Trust professional verification over self-assessment'
  ]

  return (
    <div ref={containerRef} className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              How It Works
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our transparent, step-by-step process ensures you find the right suppliers with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-4">
                        {step.number}
                      </div>
                      <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                        <step.icon className="w-8 h-8 text-blue-600" />
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h2>
                    <p className="text-gray-600 mb-6">{step.description}</p>
                    
                    <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">What happens:</h3>
                    <ul className="space-y-2">
                      {step.details.map((detail) => (
                        <li key={detail} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0 mt-1" />
                          <span className="text-gray-600 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="bg-gray-100 rounded-xl overflow-hidden">
                      <div className="h-64 bg-gray-200">
                        <img
                          data-strk-img-id={`process-step-${step.number}`}
                          data-strk-img={`[process-title-${step.number}]`}
                          data-strk-img-ratio="16x9"
                          data-strk-img-width="800"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 id={`process-title-${step.number}`} className="text-lg font-semibold text-gray-900 mb-2">Step {step.number}: {step.title}</h3>
                        <p className="text-gray-600 text-sm">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 -bottom-10 transform -translate-x-1/2">
                    <ArrowRight className="w-8 h-8 text-blue-300 rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Typical Timeline
            </h2>
            <p className="text-gray-600">
              While timelines vary by project complexity, here's what to expect.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-32 flex-shrink-0">
                    <span className="text-sm font-semibold text-blue-600">{item.phase}</span>
                  </div>
                  <div className="flex-1">
                    <div className="h-px bg-gray-200"></div>
                  </div>
                  <div className="flex-1 pl-4">
                    <span className="text-gray-700">{item.activity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <p className="text-center text-gray-500 text-sm mt-6">
            * Timeline may vary based on product complexity, supplier availability, and your response time.
          </p>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tips for Successful Sourcing
            </h2>
            <p className="text-gray-600">
              Get the most out of our sourcing process with these best practices.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {tips.map((tip, index) => (
              <div key={index} className="flex items-start p-4 bg-blue-50 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Sourcing Journey?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Submit your requirements today and let us find the perfect suppliers for you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get Started Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks