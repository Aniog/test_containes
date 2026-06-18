import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { 
  FileText, 
  Search, 
  DollarSign, 
  Factory, 
  Truck, 
  CheckCircle,
  ArrowRight,
  Clock,
  Shield,
  MessageCircle
} from 'lucide-react'

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 font-medium rounded-lg transition-all duration-200'
  const variants = {
    primary: 'bg-red-600 text-white hover:bg-red-700',
    secondary: 'border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white',
  }
  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

const Section = ({ children, className = '' }) => (
  <section className={`py-16 md:py-20 ${className}`}>
    {children}
  </section>
)

const SectionTitle = ({ subtitle, title, description, className = '' }) => (
  <div className={`text-center max-w-3xl mx-auto mb-12 ${className}`}>
    {subtitle && <p className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-2">{subtitle}</p>}
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
    {description && <p className="text-slate-600 text-lg">{description}</p>}
  </div>
)

const steps = [
  {
    number: '01',
    icon: FileText,
    title: 'Submit Your Request',
    description: 'Tell us what you need. Provide product details, quantity, target price, quality requirements, and timeline.',
    details: [
      'Product specifications and technical drawings',
      'Target price per unit',
      'Order quantity',
      'Quality standards and certifications needed',
      'Delivery timeline',
      'Any special requirements',
    ],
  },
  {
    number: '02',
    icon: Search,
    title: 'Supplier Matching',
    description: 'We identify and evaluate suitable factories. Our team conducts thorough verification to ensure legitimacy and capability.',
    details: [
      'Identify 3-5 qualified suppliers',
      'Factory visits and audits',
      'Verify business licenses and certifications',
      'Assess production capacity',
      'Check quality management systems',
      'Provide detailed supplier reports',
    ],
  },
  {
    number: '03',
    icon: DollarSign,
    title: 'Price Negotiation',
    description: 'We negotiate the best terms and pricing on your behalf, leveraging our market knowledge and relationships.',
    details: [
      'Competitive price negotiation',
      'Payment terms negotiation',
      'MOQ (Minimum Order Quantity) discussion',
      'Sample pricing and terms',
      'Bulk order discounts',
      'Clear quotation breakdown',
    ],
  },
  {
    number: '04',
    icon: Factory,
    title: 'Production & Quality Control',
    description: 'We oversee production, conduct inspections at key stages, and ensure quality standards are met.',
    details: [
      'Pre-production sample approval',
      'During-production inspections',
      'Quality control point monitoring',
      'Production progress tracking',
      'Issue identification and resolution',
      'Pre-shipment inspection',
    ],
  },
  {
    number: '05',
    icon: Truck,
    title: 'Shipping & Delivery',
    description: 'We coordinate logistics, handle customs, and ensure safe delivery to your specified destination.',
    details: [
      'Freight forwarding coordination',
      'Customs clearance handling',
      'Documentation preparation',
      'Container loading supervision',
      'Shipment tracking',
      'Door-to-door delivery option',
    ],
  },
]

const benefits = [
  {
    icon: Shield,
    title: 'Risk Mitigation',
    description: 'Reduce risk with thorough supplier verification and quality control at every stage.',
  },
  {
    icon: Clock,
    title: 'Time Savings',
    description: 'Save time on supplier research, communication, and logistics coordination.',
  },
  {
    icon: MessageCircle,
    title: 'Clear Communication',
    description: 'Bilingual team bridges the gap between you and Chinese suppliers.',
  },
  {
    icon: CheckCircle,
    title: 'Quality Assurance',
    description: 'Professional inspections ensure your products meet specifications.',
  },
]

const HowItWorks = () => {
  return (
    <>
      <Helmet>
        <title>How It Works | China Sourcing Process | SSourcing China</title>
        <meta name="description" content="Learn about our step-by-step China sourcing process. From supplier verification to shipping, we handle every step of your sourcing journey." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h1>
            <p className="text-xl text-slate-200">
              Our transparent, step-by-step process makes China sourcing simple, safe, and efficient.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <Section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            subtitle="Our Process" 
            title="5 Steps to Successful Sourcing" 
            description="A clear, proven approach to streamline your China sourcing."
          />
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-shrink-0 flex items-start">
                      <div className="flex items-center gap-4">
                        <span className="text-5xl font-bold text-red-600/20">{step.number}</span>
                        <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center">
                          <step.icon className="w-7 h-7 text-red-600" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-semibold text-slate-900 mb-3">{step.title}</h3>
                      <p className="text-slate-600 mb-6">{step.description}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                            <span className="text-slate-700 text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-4">
                    <ArrowRight className="w-6 h-6 text-slate-300 rotate-90 md:rotate-0" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            subtitle="Why It Works" 
            title="Benefits of Our Process" 
            description="Why our systematic approach delivers better results."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section className="bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            subtitle="Timeline" 
            title="Typical Project Timeline" 
            description="What to expect when you work with us."
          />
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-24 flex-shrink-0 text-right">
                  <span className="text-red-600 font-semibold">Week 1-2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Request & Supplier Matching</h4>
                  <p className="text-slate-600 text-sm">Submit requirements, receive supplier options, and select your preferred factory.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-24 flex-shrink-0 text-right">
                  <span className="text-red-600 font-semibold">Week 3-4</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Negotiation & Sampling</h4>
                  <p className="text-slate-600 text-sm">Finalize pricing, terms, and approve production samples.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-24 flex-shrink-0 text-right">
                  <span className="text-red-600 font-semibold">Week 5-12</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Production & Quality Control</h4>
                  <p className="text-slate-600 text-sm">Production runs with ongoing QC inspections and progress monitoring.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-24 flex-shrink-0 text-right">
                  <span className="text-red-600 font-semibold">Week 13-16</span>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Shipping & Delivery</h4>
                  <p className="text-slate-600 text-sm">Final inspection, shipping, customs clearance, and delivery to your door.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Your Sourcing Journey
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Tell us what you need, and we'll handle the rest.
          </p>
          <Link to="/contact">
            <Button className="text-lg px-10 py-4 bg-white text-red-600 hover:bg-slate-100">
              Get a Free Quote <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </Section>
    </>
  )
}

export default HowItWorks