import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  CheckCircle, 
  MessageSquare, 
  Search, 
  FileText, 
  Handshake,
  ClipboardCheck,
  Truck,
  Clock,
  Shield,
  TrendingUp,
  Users
} from 'lucide-react'

const PageHeader = ({ title, subtitle }) => (
  <section className="bg-gradient-to-br from-[#1E3A5F] to-[#2D5A87] text-white py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
      <p className="text-xl text-gray-200 max-w-2xl">{subtitle}</p>
    </div>
  </section>
)

const Step = ({ number, title, description, icon: Icon, details }) => (
  <div className="relative">
    <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 bg-[#E67E22] rounded-lg flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-xl">{number}</span>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">{title}</h3>
          <p className="text-[#4A5568]">{description}</p>
        </div>
      </div>
      <ul className="space-y-3">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
            <span className="text-[#4A5568] text-sm">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Initial Consultation',
      description: 'We start by understanding your specific sourcing needs, requirements, and goals.',
      icon: MessageSquare,
      details: [
        'Discuss product specifications and requirements',
        'Understand your target price and quantity',
        'Clarify timeline and delivery expectations',
        'Identify any special certifications or standards needed',
        'Determine the scope of services required',
      ],
    },
    {
      number: 2,
      title: 'Supplier Research',
      description: 'We identify and evaluate potential suppliers that match your criteria.',
      icon: Search,
      details: [
        'Research verified manufacturer databases',
        'Match suppliers to your product requirements',
        'Conduct preliminary background checks',
        'Prepare a shortlist of qualified suppliers',
        'Provide supplier profiles and capabilities',
      ],
    },
    {
      number: 3,
      title: 'Supplier Verification',
      description: 'We conduct thorough verification to ensure supplier legitimacy and capability.',
      icon: FileText,
      details: [
        'Verify business licenses and registration',
        'Check factory production capacity',
        'Verify certifications (ISO, CE, etc.)',
        'Conduct on-site factory audits',
        'Check references from existing clients',
      ],
    },
    {
      number: 4,
      title: 'Negotiation & Selection',
      description: 'We help you negotiate the best terms and select the right supplier.',
      icon: Handshake,
      details: [
        'Negotiate pricing and payment terms',
        'Clarify production specifications',
        'Review and negotiate contracts',
        'Coordinate sample production',
        'Help you make an informed decision',
      ],
    },
    {
      number: 5,
      title: 'Production Monitoring',
      description: 'We oversee production to ensure quality and timeline compliance.',
      icon: ClipboardCheck,
      details: [
        'Regular factory visits and inspections',
        'Pre-production material verification',
        'During-production quality checks',
        'Progress reporting and updates',
        'Issue identification and resolution',
      ],
    },
    {
      number: 6,
      title: 'Quality Inspection',
      description: 'We perform comprehensive quality checks before shipment.',
      icon: Shield,
      details: [
        'Pre-shipment inspection (PSI)',
        'Product specification compliance check',
        'Packaging and labeling verification',
        'Defect classification and reporting',
        'Photo and video documentation',
      ],
    },
    {
      number: 7,
      title: 'Shipping & Logistics',
      description: 'We coordinate shipping and logistics to deliver products safely.',
      icon: Truck,
      details: [
        'Freight forwarding coordination',
        'Customs documentation preparation',
        'Export/import compliance check',
        'Container loading supervision',
        'Tracking and delivery updates',
      ],
    },
  ]

  const benefits = [
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Skip the research and verification phase. We handle supplier discovery and due diligence.',
    },
    {
      icon: Shield,
      title: 'Reduce Risk',
      description: 'Avoid scams and unreliable suppliers with our comprehensive verification process.',
    },
    {
      icon: TrendingUp,
      title: 'Better Pricing',
      description: 'Leverage our negotiation expertise and supplier relationships for competitive rates.',
    },
    {
      icon: Users,
      title: 'Local Support',
      description: 'Our team in China provides on-the-ground support and real-time communication.',
    },
  ]

  const timeline = [
    { stage: 'Consultation', duration: '1-2 days' },
    { stage: 'Supplier Research', duration: '1-2 weeks' },
    { stage: 'Verification', duration: '1-2 weeks' },
    { stage: 'Negotiation', duration: '1-2 weeks' },
    { stage: 'Production', duration: '2-8 weeks' },
    { stage: 'Inspection', duration: '2-5 days' },
    { stage: 'Shipping', duration: '2-6 weeks' },
  ]

  return (
    <>
      <PageHeader 
        title="How It Works" 
        subtitle="Our proven 7-step process ensures successful sourcing from China"
      />

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              Our 7-Step Sourcing Process
            </h2>
            <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
              A comprehensive approach to ensure quality, reliability, and peace of mind
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step) => (
              <Step key={step.number} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              Typical Timeline
            </h2>
            <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
              Expected timeframes for each phase of the sourcing process
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  className={`p-6 text-center ${index !== timeline.length - 1 ? 'border-r border-gray-100' : ''}`}
                >
                  <div className="text-sm font-semibold text-[#1A1A2E] mb-2">{item.stage}</div>
                  <div className="text-sm text-[#E67E22] font-medium">{item.duration}</div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-sm text-[#718096] mt-4">
            * Timeline varies based on product complexity, supplier availability, and order requirements
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              Why Our Process Works
            </h2>
            <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
              The benefits of working with our structured sourcing approach
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-[#F8FAFC] rounded-xl p-6 border border-gray-100"
              >
                <div className="w-14 h-14 bg-[#E67E22]/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-[#E67E22]" />
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A2E] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[#4A5568] text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1E3A5F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Let's discuss your needs and create a customized sourcing plan
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#E67E22] text-white font-semibold rounded-lg hover:bg-[#D35400] transition-colors"
          >
            Get a Free Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}

export default HowItWorks