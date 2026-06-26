import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Search, FileText, Factory, ClipboardCheck, Truck, Package,
  CheckCircle, ArrowRight, MessageSquare, Users, Clock, Shield
} from 'lucide-react'
import SectionHeader from '@/components/common/SectionHeader'
import Button from '@/components/common/Button'

const steps = [
  {
    step: 1,
    icon: <Search className="w-8 h-8" />,
    title: 'Submit Your Inquiry',
    description: 'Tell us what you need — product details, specifications, target price, quantity, and timeline. The more detail you provide, the better we can help.',
    details: [
      'Product descriptions and technical specifications',
      'Target pricing and quantity requirements',
      'Quality standards and certifications needed',
      'Production timeline and delivery expectations'
    ]
  },
  {
    step: 2,
    icon: <FileText className="w-8 h-8" />,
    title: 'Receive Supplier Options',
    description: 'We analyze your requirements and identify suitable suppliers from our verified network. You receive detailed profiles with pricing, capabilities, and recommendations.',
    details: [
      '3-5 verified supplier options',
      'Detailed capability assessments',
      'Competitive pricing comparisons',
      'Factory verification reports'
    ]
  },
  {
    step: 3,
    icon: <Users className="w-8 h-8" />,
    title: 'Supplier Selection & Negotiation',
    description: 'We assist with supplier selection, negotiate terms, and ensure all contracts protect your interests. Sample orders are typically placed first.',
    details: [
      'Terms and conditions negotiation',
      'Price and payment structure',
      'Sample order management',
      'Contract review and advice'
    ]
  },
  {
    step: 4,
    icon: <Factory className="w-8 h-8" />,
    title: 'Production Monitoring',
    description: 'Once production begins, we provide regular updates, conduct quality checks, and immediately address any issues that arise.',
    details: [
      'Weekly progress reports',
      'On-site production visits',
      'Quality checkpoint inspections',
      'Issue resolution and escalation'
    ]
  },
  {
    step: 5,
    icon: <ClipboardCheck className="w-8 h-8" />,
    title: 'Final Inspection & Approval',
    description: 'Before shipment, we conduct comprehensive inspections to verify your products meet all specifications and quality standards.',
    details: [
      'Pre-shipment inspection (PSI)',
      'AQL sampling verification',
      'Packaging and labeling check',
      'Photo and video documentation'
    ]
  },
  {
    step: 6,
    icon: <Truck className="w-8 h-8" />,
    title: 'Shipping & Delivery',
    description: 'We coordinate all logistics, from factory pickup to final delivery at your location. Full documentation and tracking provided throughout.',
    details: [
      'Freight booking and coordination',
      'Customs clearance handling',
      'Cargo insurance arrangement',
      'Door-to-door tracking'
    ]
  }
]

const timeline = [
  { phase: 'Initial Inquiry', duration: '1-2 days', description: 'Requirements gathering and supplier matching' },
  { phase: 'Supplier Selection', duration: '3-7 days', description: 'Evaluation, sampling, and contract negotiation' },
  { phase: 'Production', duration: '2-8 weeks', description: 'Manufacturing with ongoing monitoring' },
  { phase: 'QC & Shipping', duration: '1-3 weeks', description: 'Inspection, documentation, and transit' }
]

const HowItWorksPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[--color-primary] to-[--color-primary-light] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How It Works
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our streamlined process takes you from initial inquiry to product delivery, with transparency and support at every step.
          </p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Process"
            title="A Simple, Transparent Journey"
            subtitle="Six clear steps from inquiry to delivery. No surprises, just results."
          />
          
          <div className="mt-16 relative">
            {/* Timeline connector */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-[--color-border] -translate-y-1/2 z-0"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {steps.map((item, index) => (
                <div key={item.step} className="relative">
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-[--color-border] relative z-10 h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-[--color-primary] rounded-xl flex items-center justify-center text-white">
                        {item.icon}
                      </div>
                      <div className="flex items-center justify-center w-8 h-8 bg-[--color-accent] rounded-full text-white font-bold text-sm">
                        {item.step}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-[--color-text-dark] mb-3">{item.title}</h3>
                    <p className="text-[--color-text-muted] text-sm mb-4">{item.description}</p>
                    <ul className="space-y-2">
                      {item.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-[--color-text-muted]">
                          <CheckCircle className="w-4 h-4 text-[--color-success] flex-shrink-0 mt-0.5" />
                          {detail}
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

      {/* Timeline Section */}
      <section className="py-20 bg-[--color-bg-light]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Timeline"
            title="What to Expect"
            subtitle="Typical timelines for each phase of your sourcing project."
          />
          
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm">
            <div className="space-y-6">
              {timeline.map((phase, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[--color-primary] rounded-xl flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-16 bg-[--color-border] mx-auto mt-2"></div>
                    )}
                  </div>
                  <div className="flex-grow pb-8">
                    <div className="flex items-center gap-4 mb-2">
                      <h4 className="text-lg font-semibold text-[--color-text-dark]">{phase.phase}</h4>
                      <span className="px-3 py-1 bg-[--color-bg-navy-light] text-[--color-primary] text-sm font-medium rounded-full">
                        {phase.duration}
                      </span>
                    </div>
                    <p className="text-[--color-text-muted] text-sm">{phase.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-[--color-bg-navy-light] rounded-xl">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[--color-primary]" />
                <span className="text-[--color-text-dark] text-sm font-medium">
                  <strong>Total Typical Timeline:</strong> 4-12 weeks depending on product complexity and order size
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Communication Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-[--color-accent] font-semibold text-sm uppercase tracking-wider mb-4">
                Stay Informed
              </span>
              <h2 className="text-3xl font-bold text-[--color-text-dark] mb-6">
                Transparent Communication
              </h2>
              <p className="text-lg text-[--color-text-muted] mb-8">
                You'll never be left wondering what's happening with your order. We provide regular updates and are always available to answer your questions.
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    icon: <MessageSquare className="w-6 h-6" />,
                    title: 'Weekly Status Reports',
                    description: 'Regular updates on production progress, quality status, and any issues.'
                  },
                  {
                    icon: <FileText className="w-6 h-6" />,
                    title: 'Inspection Reports',
                    description: 'Detailed reports with photos after each quality checkpoint.'
                  },
                  {
                    icon: <Truck className="w-6 h-6" />,
                    title: 'Shipment Tracking',
                    description: 'Real-time tracking from factory to your door.'
                  },
                  {
                    icon: <Users className="w-6 h-6" />,
                    title: 'Direct Access',
                    description: 'Direct line to your dedicated account manager.'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[--color-bg-navy-light] rounded-lg flex items-center justify-center text-[--color-primary] flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[--color-text-dark] mb-1">{item.title}</h4>
                      <p className="text-sm text-[--color-text-muted]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-[--color-bg-light] rounded-2xl p-8">
              <div className="aspect-video bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                <div className="text-center p-8">
                  <MessageSquare className="w-16 h-16 text-[--color-primary]/30 mx-auto mb-4" />
                  <p className="text-[--color-text-muted]">Communication Dashboard</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-[--color-text-dark]">Weekly Report #3</span>
                  <span className="text-xs text-[--color-success] font-medium">On Track</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-[--color-text-dark]">PSI Report Ready</span>
                  <span className="text-xs text-[--color-primary] font-medium">New</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                  <span className="text-sm font-medium text-[--color-text-dark]">Shipment Departed</span>
                  <span className="text-xs text-[--color-accent] font-medium">In Transit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[--color-bg-light]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Common Questions"
            title="Process FAQs"
            subtitle="Answers to frequently asked questions about our sourcing process."
          />
          
          <div className="mt-12 space-y-4">
            {[
              {
                question: 'How do I get started?',
                answer: 'Simply fill out our contact form with your requirements. We will review your needs and get back to you within 24 hours with initial recommendations.'
              },
              {
                question: 'What information do you need from me?',
                answer: 'Product details, specifications, estimated quantity, target price range, quality requirements, and your timeline. The more details you provide, the better we can assist you.'
              },
              {
                question: 'How many suppliers will I receive options from?',
                answer: 'We typically present 3-5 verified supplier options for each product, complete with detailed profiles, pricing, and our recommendations.'
              },
              {
                question: 'Can I visit factories?',
                answer: 'Yes, we can arrange factory visits and accompany you to ensure productive meetings. We also provide video tours for clients who cannot travel.'
              },
              {
                question: 'What if I am not satisfied with a supplier?',
                answer: 'We work with you to resolve any concerns. If needed, we can identify alternative suppliers from our network.'
              },
              {
                question: 'How do you handle quality issues?',
                answer: 'We document all issues, work with the supplier on corrections, and conduct re-inspection. We advocate for you to ensure problems are resolved satisfactorily.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h4 className="font-semibold text-[--color-text-dark] mb-2">{faq.question}</h4>
                <p className="text-[--color-text-muted] text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[--color-primary]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 text-[--color-accent-light] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Sourcing Journey?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Get a free consultation and customized plan for your China sourcing needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-[--color-accent] text-white font-bold text-lg rounded-lg hover:bg-[--color-accent-dark] transition-colors"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HowItWorksPage
