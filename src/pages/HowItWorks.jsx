import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { 
  FileText, 
  Search, 
  ShieldCheck, 
  ClipboardCheck, 
  Ship, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  Users,
  MessageSquare,
  Package,
  Truck,
  Headphones
} from 'lucide-react'

const HowItWorks = () => {
  const processSteps = [
    {
      step: '01',
      title: 'Submit Your Requirements',
      description: 'Share your product specifications, target price, quantity, quality requirements, and timeline with our team. The more details you provide, the better we can match you with the right suppliers.',
      icon: FileText,
      details: [
        'Product specifications and drawings',
        'Target price range and quantity (MOQ)',
        'Quality standards and certifications needed',
        'Preferred shipping method and timeline',
        'Any special requirements or preferences'
      ],
      timeline: '1-2 days'
    },
    {
      step: '02',
      title: 'Supplier Sourcing & Matching',
      description: 'We leverage our extensive network of verified Chinese manufacturers to find suppliers that match your criteria. We provide detailed profiles of 3-5 qualified suppliers for your review.',
      icon: Search,
      details: [
        'Search our database of 200+ verified factories',
        'Match suppliers by product category, capacity, and certifications',
        'Provide detailed supplier profiles with photos and credentials',
        'Share initial pricing and MOQ information',
        'Arrange video calls or factory visits if needed'
      ],
      timeline: '3-5 days'
    },
    {
      step: '03',
      title: 'Factory Verification & Audits',
      description: 'We conduct comprehensive on-site factory audits to verify business legitimacy, production capacity, quality systems, and operational stability before you commit.',
      icon: ShieldCheck,
      details: [
        'Business license and registration verification',
        'Factory facility tour and capacity assessment',
        'Quality management system evaluation',
        'Reference checks with existing clients',
        'Detailed audit report with photos and findings'
      ],
      timeline: '5-7 days'
    },
    {
      step: '04',
      title: 'Sample Approval & Production',
      description: 'We coordinate sample production, arrange inspections, and oversee the production process to ensure quality standards are met throughout manufacturing.',
      icon: ClipboardCheck,
      details: [
        'Sample production coordination',
        'Pre-production inspection (PPI)',
        'During production inspection (DPI)',
        'Regular progress updates and photos',
        'Pre-shipment inspection (PSI)'
      ],
      timeline: '2-4 weeks'
    },
    {
      step: '05',
      title: 'Shipping & Delivery',
      description: 'We handle all logistics, documentation, and customs clearance to ensure your products arrive safely and on time at your warehouse.',
      icon: Ship,
      details: [
        'Freight forwarding (sea, air, or express)',
        'Customs documentation and clearance',
        'Cargo insurance coordination',
        'Warehousing and consolidation if needed',
        'Real-time shipment tracking and updates'
      ],
      timeline: '1-4 weeks (depending on shipping method)'
    },
  ]

  const benefits = [
    {
      icon: Clock,
      title: 'Save Time',
      description: 'We handle the entire sourcing process, saving you 40+ hours per project.'
    },
    {
      icon: ShieldCheck,
      title: 'Reduce Risk',
      description: 'Our verification and inspection processes minimize the risk of fraud and quality issues.'
    },
    {
      icon: Globe,
      title: 'Local Expertise',
      description: 'Native English-speaking agents who understand both Chinese business culture and your needs.'
    },
    {
      icon: Users,
      title: 'Dedicated Support',
      description: 'A single point of contact throughout your project for consistent communication.'
    }
  ]

  const communicationMethods = [
    {
      method: 'Email Updates',
      description: 'Regular progress reports and documentation',
      icon: MessageSquare
    },
    {
      method: 'Video Calls',
      description: 'Scheduled calls with your dedicated sourcing agent',
      icon: Users
    },
    {
      method: 'Real-time Tracking',
      description: 'Access to project dashboard with live updates',
      icon: Package
    },
    {
      method: 'Phone Support',
      description: 'Direct line to your agent during business hours',
      icon: Headphones
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              How Our Sourcing Process Works
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              A simple, transparent 5-step process that takes your product from concept to delivery. 
              We handle the complexity so you can focus on your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                <Link to="/contact">
                  Start Your Sourcing Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                <Link to="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {processSteps.map((step, index) => (
              <div key={step.step} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-600 text-white font-bold text-2xl">
                      {step.step}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>Timeline: {step.timeline}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <step.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{step.title}</h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                  <ul className="space-y-3">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="rounded-2xl overflow-hidden shadow-lg bg-gray-100 aspect-video">
                    <img
                      data-strk-img-id={`process-step-${step.step}-img`}
                      data-strk-img={`[process-step-${step.step}-title] [process-step-${step.step}-desc]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                    <span id={`process-step-${step.step}-title`} className="hidden">{step.title}</span>
                    <span id={`process-step-${step.step}-desc`} className="hidden">{step.description}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our proven process delivers consistent results for businesses of all sizes.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Communication */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Communication & Support</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay connected with your dedicated sourcing agent throughout the entire process.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communicationMethods.map((method, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <method.icon className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{method.method}</h3>
                <p className="text-sm text-gray-600">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Overview */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Typical Project Timeline</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              While timelines vary based on product complexity, here's a typical project overview.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-5 divide-x divide-gray-200">
              {processSteps.map((step) => (
                <div key={step.step} className="p-6 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{step.timeline}</div>
                  <div className="text-sm font-medium text-gray-900">{step.title}</div>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 p-4 text-center">
              <span className="text-sm text-blue-800 font-medium">
                Total typical project duration: 4-8 weeks from requirements to delivery
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-blue-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Tell us about your product requirements, and we'll provide a customized sourcing plan and quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
              <Link to="/contact">
                Get a Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              <Link to="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
