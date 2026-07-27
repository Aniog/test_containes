import React from 'react'
import { Link } from 'react-router-dom'
import { 
  FileText, Search, MessageCircle, ClipboardCheck, Factory, Truck,
  ArrowRight, CheckCircle, Clock, Shield, Users, Globe
} from 'lucide-react'
import { Button } from '@/components/ui/Button'

const steps = [
  {
    number: '01',
    icon: FileText,
    title: 'Submit Your Request',
    description: 'Start by telling us what you need. Provide product specifications, quantity requirements, target price range, and your timeline.',
    details: [
      'Product specifications and technical drawings',
      'Target price per unit',
      'Order quantity (MOQ flexibility)',
      'Required certifications',
      'Packaging requirements',
      'Delivery timeline',
    ],
  },
  {
    number: '02',
    icon: Search,
    title: 'We Find Suppliers',
    description: 'Our team researches and identifies verified manufacturers that match your requirements. We pre-screen all suppliers to ensure legitimacy.',
    details: [
      'Database of 2,000+ verified factories',
      'Background and credential verification',
      'Production capacity assessment',
      'Quality capability evaluation',
      'Certification verification',
      'Multiple options for comparison',
    ],
  },
  {
    number: '03',
    icon: MessageCircle,
    title: 'Negotiate & Confirm',
    description: 'We present you with supplier options and negotiate the best terms. Once you approve, we help finalize the agreement.',
    details: [
      'Price negotiation',
      'Payment term negotiation',
      'Sample ordering and approval',
      'Contract drafting and review',
      'MOQ adjustments',
      'Timeline confirmation',
    ],
  },
  {
    number: '04',
    icon: ClipboardCheck,
    title: 'Production & QC',
    description: 'During production, we monitor progress and conduct quality inspections to ensure everything stays on track.',
    details: [
      'Production progress monitoring',
      'Pre-production sample approval',
      'During-production inspections',
      'Pre-shipment inspections',
      'Issue resolution',
      'Regular status updates',
    ],
  },
  {
    number: '05',
    icon: Factory,
    title: 'Quality Verification',
    description: 'Before shipment, we perform final quality checks to ensure products meet your specifications.',
    details: [
      'Final random inspection',
      'Specification compliance check',
      'Packaging verification',
      'Labeling compliance',
      'Photo and video documentation',
      'Inspection report delivery',
    ],
  },
  {
    number: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    description: 'We coordinate all logistics, from factory to your doorstep, handling documentation and customs.',
    details: [
      'Freight forwarding',
      'Customs clearance',
      'Documentation handling',
      'Insurance coordination',
      'Shipment tracking',
      'Final delivery',
    ],
  },
]

const timeline = [
  { phase: 'Initial Research', duration: '3-5 days', description: 'Supplier identification and verification' },
  { phase: 'Negotiation', duration: '5-7 days', description: 'Price and terms finalization' },
  { phase: 'Sample Phase', duration: '2-4 weeks', description: 'Sample production and approval' },
  { phase: 'Production', duration: '2-8 weeks', description: 'Based on order size and complexity' },
  { phase: 'QC & Shipping', duration: '1-2 weeks', description: 'Inspection and freight coordination' },
]

const benefits = [
  {
    icon: Shield,
    title: 'Risk Mitigation',
    description: 'We protect you from supplier scams, quality issues, and communication problems.',
  },
  {
    icon: Clock,
    title: 'Time Savings',
    description: 'Skip the research and negotiation - we handle everything efficiently.',
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Our team speaks both English and Mandarin, bridging the cultural gap.',
  },
  {
    icon: Globe,
    title: 'Local Presence',
    description: 'Based in China, we can visit factories and resolve issues quickly.',
  },
]

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-light py-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              How It Works
            </h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Our transparent 6-step process makes sourcing from China simple and risk-free.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-5xl font-bold text-primary/20">{step.number}</span>
                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-text-primary mb-3">{step.title}</h2>
                  <p className="text-text-secondary mb-6">{step.description}</p>
                  
                  <div className="bg-background-light rounded-xl p-5">
                    <h3 className="font-semibold text-text-primary mb-3 text-sm uppercase tracking-wide">
                      What Happens:
                    </h3>
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                          <span className="text-text-secondary text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className={`bg-white rounded-2xl p-8 shadow-sm border border-border ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-video bg-gradient-to-br from-primary/5 to-blue-50 rounded-xl flex items-center justify-center">
                    <step.icon className="w-20 h-20 text-primary/30" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background-light">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Typical Timeline
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              While timelines vary based on product complexity, here's what to expect.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-border">
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-center gap-6">
                  <div className="w-32 flex-shrink-0">
                    <span className="text-sm font-medium text-primary">{item.phase}</span>
                  </div>
                  <div className="w-24 flex-shrink-0">
                    <span className="text-sm text-accent font-medium">{item.duration}</span>
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full"
                        style={{ width: `${((index + 1) / timeline.length) * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="w-48 flex-shrink-0 text-right">
                    <span className="text-sm text-text-secondary">{item.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Why Our Process Works
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Our systematic approach addresses the common challenges of China sourcing.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-sm border border-border text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{benefit.title}</h3>
                <p className="text-text-secondary text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-blue-200 max-w-xl mx-auto mb-8">
              Submit your sourcing request today and let us find the right suppliers for you.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent-hover">
                Start Your Sourcing Request
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowItWorksPage