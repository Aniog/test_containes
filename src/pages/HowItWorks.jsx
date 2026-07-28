import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  MessageSquare, Users, FileText, Package, Factory, ClipboardCheck,
  Truck, CheckCircle, ArrowRight, Phone, Mail, Clock, Shield
} from 'lucide-react'

const SectionHeader = ({ eyebrow, title, description, centered = true }) => (
  <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : ''}`}>
    {eyebrow && <p className="text-blue-700 font-semibold text-sm uppercase tracking-wider mb-3">{eyebrow}</p>}
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
    {description && <p className="text-slate-600 text-lg leading-relaxed">{description}</p>}
  </div>
)

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Submit Your Inquiry',
    description: 'Tell us what products you need. Include specifications, quantities, target prices, and any other requirements.',
    details: [
      'Product descriptions and specifications',
      'Estimated order quantities',
      'Target pricing (if known)',
      'Quality requirements',
      'Timeline expectations',
      'Any special requirements',
    ],
    timeline: '1-2 days for initial response',
  },
  {
    number: '02',
    icon: Users,
    title: 'Supplier Matching',
    description: 'We identify and thoroughly vet suppliers who match your requirements. You receive detailed profiles to review.',
    details: [
      'Verified factory information',
      'Production capacity details',
      'Quality certifications',
      'Previous client references',
      'Sample availability',
      'Pricing quotes',
    ],
    timeline: '3-5 business days',
  },
  {
    number: '03',
    icon: FileText,
    title: 'Factory Verification',
    description: 'We conduct on-site visits to verify factory conditions, capabilities, and legitimacy.',
    details: [
      'Business license verification',
      'Factory floor inspection',
      'Equipment assessment',
      'Worker conditions review',
      'Production line evaluation',
      'Capacity verification',
    ],
    timeline: '5-7 business days',
  },
  {
    number: '04',
    icon: Package,
    title: 'Sample Testing',
    description: 'We coordinate samples, conduct inspections, and provide detailed reports on quality.',
    details: [
      'Sample request coordination',
      'Quality inspection',
      'Specification compliance check',
      'Photo documentation',
      'Comparison with requirements',
      'Feedback to suppliers',
    ],
    timeline: '2-4 weeks depending on sample complexity',
  },
  {
    number: '05',
    icon: Factory,
    title: 'Production Monitoring',
    description: 'Regular updates on production progress, quality checks at key stages, and issue resolution.',
    details: [
      'Weekly progress reports',
      'Pre-production inspection',
      'During-production checks',
      'Issue tracking & resolution',
      'Timeline management',
      'Quality verification',
    ],
    timeline: 'Ongoing throughout production',
  },
  {
    number: '06',
    icon: ClipboardCheck,
    title: 'Final Inspection',
    description: 'Comprehensive pre-shipment inspection ensures all products meet agreed specifications.',
    details: [
      'Visual quality inspection',
      'Dimensional checks',
      'Functionality testing',
      'Packaging verification',
      'Quantity count',
      'Photo & video documentation',
    ],
    timeline: '2-5 days before shipment',
  },
  {
    number: '07',
    icon: Truck,
    title: 'Shipping & Delivery',
    description: 'We handle all logistics from factory to your destination, including customs and documentation.',
    details: [
      'Freight booking & coordination',
      'Export customs clearance',
      'Documentation preparation',
      'Consolidation services',
      'Import customs clearance',
      'Final delivery coordination',
    ],
    timeline: '2-6 weeks depending on destination',
  },
]

const timelineFeatures = [
  {
    icon: Clock,
    title: 'Real-Time Updates',
    description: 'Track your order status at every stage with our transparent reporting system.',
  },
  {
    icon: Shield,
    title: 'Quality Guarantee',
    description: 'Our multi-point inspection process ensures consistent quality standards.',
  },
  {
    icon: CheckCircle,
    title: 'Issue Resolution',
    description: 'We handle all supplier communications and resolve problems quickly.',
  },
]

const HowItWorks = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-slate-900 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            data-strk-bg-id="howitworks-hero-bg"
            data-strk-bg="sourcing process workflow collaboration"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1920"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">How It Works</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">How It Works</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Our systematic approach to China sourcing ensures transparency, quality, and reliable delivery at every step of the process.
          </p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            eyebrow="Our Process"
            title="7 Steps to Successful Sourcing"
            description="From initial inquiry to final delivery, here's how we work together to source your products from China."
          />

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform -translate-x-1/2" />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`relative ${index % 2 === 0 ? 'lg:pr-1/2' : 'lg:pl-1/2 lg:ml-auto'}`}
                >
                  <div className={`bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow ${index % 2 === 1 ? 'lg:pl-16' : 'lg:pr-16'}`}>
                    <div className="flex items-start gap-6">
                      <div className="hidden lg:flex flex-shrink-0 w-16 h-16 bg-blue-800 rounded-full items-center justify-center absolute">
                        <span className="text-2xl font-bold text-white">{step.number}</span>
                      </div>
                      <div className="lg:ml-20">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="lg:hidden w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                            <step.icon className="w-6 h-6 text-blue-800" />
                          </div>
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold text-slate-900">{step.title}</h3>
                            <p className="text-blue-600 text-sm font-medium">{step.timeline}</p>
                          </div>
                        </div>
                        <p className="text-slate-600 mb-6">{step.description}</p>
                        <div className="bg-slate-50 rounded-xl p-6">
                          <h4 className="font-semibold text-slate-900 mb-3">What we do:</h4>
                          <ul className="grid md:grid-cols-2 gap-2">
                            {step.details.map((detail, dIndex) => (
                              <li key={dIndex} className="flex items-center gap-2 text-slate-600 text-sm">
                                <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0" />
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Features */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="What Sets Our Process Apart"
            description="We combine systematic processes with personal attention to deliver exceptional results."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {timelineFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center border border-slate-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Summary */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Typical Timeline</h2>
            <p className="text-slate-300 text-lg">How long does the complete sourcing process take?</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { phase: 'Inquiry & Matching', duration: '1-2 weeks' },
              { phase: 'Verification & Samples', duration: '3-6 weeks' },
              { phase: 'Production', duration: '4-12 weeks' },
              { phase: 'Shipping', duration: '2-6 weeks' },
            ].map((item, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-orange-500 mb-2">{item.duration}</p>
                <p className="text-slate-300">{item.phase}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-slate-400">
              <strong className="text-white">Total estimated time:</strong> 10-26 weeks depending on product complexity and order size
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Start Your Sourcing Journey Today
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Tell us about your project and we'll create a customized sourcing plan for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="mailto:info@ssourcing.cn"
              className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
