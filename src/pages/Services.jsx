import { Link } from 'react-router-dom'
import { 
  Search, 
  Shield, 
  ClipboardCheck, 
  Factory, 
  Truck, 
  Package, 
  FileCheck, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Award
} from 'lucide-react'

const PageHeader = ({ title, subtitle }) => (
  <section className="bg-gradient-to-br from-[#1E3A5F] to-[#2D5A87] text-white py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
      <p className="text-xl text-gray-200 max-w-2xl">{subtitle}</p>
    </div>
  </section>
)

const ServiceCard = ({ icon: Icon, title, description, features, image }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
    <div className="h-48 bg-[#1E3A5F] relative">
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon className="w-20 h-20 text-white/30" />
      </div>
    </div>
    <div className="p-8">
      <h3 className="text-2xl font-bold text-[#1A1A2E] mb-4">{title}</h3>
      <p className="text-[#4A5568] mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
            <span className="text-[#4A5568] text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Identification & Verification',
      description: 'We help you find the right suppliers and verify their legitimacy through comprehensive background checks and factory audits.',
      features: [
        'Market research and supplier identification',
        'Business license verification',
        'Factory capacity and capability assessment',
        'Certification verification (ISO, CE, FCC, etc.)',
        'On-site factory audits',
        'Reference checks with existing clients',
      ],
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection Services',
      description: 'Our quality control services ensure your products meet your specifications and quality standards at every stage of production.',
      features: [
        'Pre-production inspection (material verification)',
        'During-production inspection',
        'Pre-shipment inspection',
        'Container loading supervision',
        'Detailed QC reports with photos and videos',
        'Defect classification and reporting',
      ],
    },
    {
      icon: Factory,
      title: 'Production Follow-up',
      description: 'We monitor your production progress and ensure timelines are met while addressing any issues that arise.',
      features: [
        'Regular factory visits and progress updates',
        'Production schedule monitoring',
        'Sample approval coordination',
        'Material quality tracking',
        'Issue resolution and escalation',
        'Production milestone reporting',
      ],
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics',
      description: 'End-to-end logistics support from factory to your doorstep, including freight forwarding and customs clearance.',
      features: [
        'Freight forwarding (air, sea, land)',
        'Customs clearance documentation',
        'Export/import compliance',
        'Multi-modal transportation',
        'Cargo tracking and monitoring',
        'Door-to-door delivery options',
      ],
    },
    {
      icon: FileCheck,
      title: 'Sourcing Consultation',
      description: 'Expert advice on China sourcing strategies, supplier negotiation, and market entry.',
      features: [
        'Sourcing strategy development',
        'Supplier negotiation support',
        'Price analysis and benchmarking',
        'Contract review and drafting',
        'Market intelligence reports',
        'Risk assessment and mitigation',
      ],
    },
    {
      icon: Package,
      title: 'Product Development',
      description: 'We help you develop new products and bring your ideas to life with Chinese manufacturers.',
      features: [
        'Product specification development',
        'Prototype coordination',
        'Manufacturing process optimization',
        'Cost reduction suggestions',
        'Material sourcing',
        'Private label and OEM services',
      ],
    },
  ]

  const benefits = [
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Reduce the risk of fraud, quality issues, and delivery delays with our verification and monitoring services.',
    },
    {
      icon: TrendingUp,
      title: 'Cost Efficiency',
      description: 'Leverage our established supplier network and negotiation expertise to get competitive pricing.',
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Save time on supplier research, communication, and logistics coordination.',
    },
    {
      icon: Users,
      title: 'Local Expertise',
      description: 'Benefit from our team\'s deep knowledge of Chinese business culture and practices.',
    },
  ]

  return (
    <>
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive China sourcing solutions to help your business succeed"
      />

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              Why Work With Us
            </h2>
            <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
              Partner with us for a seamless sourcing experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <div className="w-14 h-14 bg-[#1E3A5F]/10 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-[#1E3A5F]" />
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

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A2E] mb-4">
              How Our Services Work
            </h2>
            <p className="text-lg text-[#4A5568] max-w-2xl mx-auto">
              A simple, transparent process to get your sourcing project started
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#E67E22] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A2E] mb-2">Consultation</h3>
              <p className="text-[#4A5568]">
                We discuss your requirements, timeline, and budget to understand your needs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#E67E22] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A2E] mb-2">Proposal</h3>
              <p className="text-[#4A5568]">
                We provide a detailed proposal with supplier options, timeline, and pricing.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#E67E22] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-[#1A1A2E] mb-2">Execution</h3>
              <p className="text-[#4A5568]">
                We execute the project with regular updates and quality checks throughout.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1E3A5F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Sourcing?
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Get in touch for a free consultation and quote
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

export default Services