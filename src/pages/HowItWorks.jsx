import React from 'react'
import { Link } from 'react-router-dom'
import { Send, Users, FileText, Package, ClipboardCheck, Truck, CheckCircle, MessageCircle } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const steps = [
  {
    number: '01',
    icon: Send,
    title: 'Submit Your Request',
    duration: 'Day 1',
    description: 'Fill out our inquiry form with your product requirements, including details like product type, estimated quantity, target price, and delivery timeline. Our team reviews your request within 24 hours.',
    deliverables: [
      'Requirements acknowledgment',
      'Initial cost estimate',
      'Timeline projection',
    ],
  },
  {
    number: '02',
    icon: Users,
    title: 'Supplier Matching',
    duration: 'Days 2-7',
    description: 'Based on your requirements, we identify and pre-screen potential suppliers from our verified network. You receive a shortlist of 3-5 qualified candidates with detailed profiles including factory photos, capabilities, and past performance.',
    deliverables: [
      'Supplier shortlist',
      'Factory profiles',
      'Capability assessment',
      'Price comparisons',
    ],
  },
  {
    number: '03',
    icon: FileText,
    title: 'Sample & Negotiation',
    duration: 'Days 8-30',
    description: 'We coordinate sample orders with your chosen supplier, manage sample production quality, and facilitate price negotiations. We ensure all terms are clearly documented in a formal contract.',
    deliverables: [
      'Sample coordination',
      'Quality evaluation',
      'Price negotiation',
      'Contract preparation',
    ],
  },
  {
    number: '04',
    icon: ClipboardCheck,
    title: 'Production & QC',
    duration: 'Ongoing',
    description: 'We assign a dedicated project manager to oversee your production. Regular factory visits, inline inspections, and progress reports keep you informed. Any issues are addressed immediately to maintain schedule and quality.',
    deliverables: [
      'Weekly progress reports',
      'Inspection reports',
      'Quality certifications',
      'Issue resolution',
    ],
  },
  {
    number: '05',
    icon: Truck,
    title: 'Shipping & Delivery',
    duration: 'Varies by method',
    description: 'We handle all logistics from factory to your destination. This includes consolidation (if applicable), freight booking, customs documentation, duty payment, and final-mile delivery. Real-time tracking keeps you informed throughout.',
    deliverables: [
      'Shipping quotes',
      'Customs clearance',
      'Real-time tracking',
      'Delivery confirmation',
    ],
  },
]

const timelineItems = [
  {
    title: 'Transparent Pricing',
    description: 'We provide detailed cost breakdowns with no hidden fees. Our service fees are clear from the start.',
  },
  {
    title: 'Regular Updates',
    description: 'Stay informed with weekly reports on production progress, quality status, and shipping updates.',
  },
  {
    title: 'Dedicated Support',
    description: 'You have a personal account manager who knows your project inside and out.',
  },
  {
    title: 'Quality Assurance',
    description: 'Multi-stage inspections ensure your products meet specifications before shipment.',
  },
  {
    title: 'Risk Mitigation',
    description: 'We identify and address potential issues early to protect your investment.',
  },
  {
    title: 'Flexible Terms',
    description: 'We adapt our services to match your specific needs and budget constraints.',
  },
]

const HowItWorks = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How It Works
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            A clear, step-by-step process to source products from China with confidence. 
            From initial inquiry to final delivery, we're with you every step.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our 5-Step Process"
            subtitle="A systematic approach to ensure successful China sourcing"
          />

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-secondary-200 z-0" />

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {steps.map((step) => (
                <div key={step.number} className="bg-white rounded-xl p-6 shadow-md border border-slate-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-secondary text-white rounded-xl flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                    <span className="text-sm text-secondary font-medium bg-secondary-50 px-2 py-1 rounded">
                      {step.duration}
                    </span>
                  </div>
                  <div className="w-12 h-12 bg-secondary-50 rounded-xl flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm mb-4">{step.description}</p>
                  <div className="pt-4 border-t border-slate-100">
                    <p className="text-xs font-semibold text-slate-500 mb-2">DELIVERABLES:</p>
                    <ul className="space-y-1">
                      {step.deliverables.map((item) => (
                        <li key={item} className="flex items-center text-xs text-slate-600">
                          <CheckCircle className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="What Makes Us Different"
            subtitle="We go beyond basic sourcing to deliver real value"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {timelineItems.map((item) => (
              <Card key={item.title} hover>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Ready to Start Your Sourcing Journey?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Get a free consultation and detailed project plan within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Get Your Free Quote
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg">
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default HowItWorks