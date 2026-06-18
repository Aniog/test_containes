import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { 
  Search, 
  ClipboardCheck, 
  Factory, 
  Truck, 
  Package, 
  Shield,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin
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

const services = [
  {
    icon: Search,
    title: 'Supplier Verification',
    description: 'We conduct comprehensive due diligence on potential suppliers to ensure they are legitimate, capable, and reliable.',
    features: [
      'Factory visits and audits',
      'Business license verification',
      'Production capacity assessment',
      'Certification verification (ISO, CE, FCC, etc.)',
      'Reference checks',
      'Financial stability assessment',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Our experienced QC team ensures your products meet specifications and quality standards at every stage.',
    features: [
      'Pre-production inspection',
      'During-production inspection',
      'Pre-shipment inspection',
      'Container loading supervision',
      'AQL-based sampling',
      'Detailed inspection reports with photos',
    ],
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    description: 'We monitor your order throughout the production process to ensure timely delivery and quality consistency.',
    features: [
      'Production progress tracking',
      'Quality control point monitoring',
      'Schedule management',
      'Issue resolution',
      'Regular status updates',
      'Sample approval coordination',
    ],
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    description: 'We handle all aspects of shipping and logistics to ensure your products arrive safely and on time.',
    features: [
      'Freight forwarding',
      'Customs clearance',
      'Documentation handling',
      'Multi-modal transport (air, sea, land)',
      'Insurance coordination',
      'Door-to-door delivery',
    ],
  },
  {
    icon: Package,
    title: 'Product Sourcing',
    description: 'We find the right manufacturers for your specific product requirements at competitive prices.',
    features: [
      'Supplier matching',
      'Price negotiation',
      'Sample management',
      'Product development support',
      'Custom manufacturing',
      'Supply chain optimization',
    ],
  },
  {
    icon: Shield,
    title: 'Sample Management',
    description: 'We handle the entire sample process from request to approval, ensuring samples meet your specifications.',
    features: [
      'Sample request management',
      'Quality evaluation',
      'Modification requests',
      'Approval process',
      'Bulk production verification',
      'Sample shipping coordination',
    ],
  },
]

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | China Sourcing Agent | SSourcing China</title>
        <meta name="description" content="Comprehensive China sourcing services including supplier verification, quality inspection, production follow-up, and shipping logistics." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Sourcing Services</h1>
            <p className="text-xl text-slate-200">
              End-to-end solutions to help you source products from China with confidence. From supplier verification to final delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <Section className="bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 mb-8 last:mb-0">
              <div className="p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-red-600" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 mb-6">{service.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            subtitle="Why Choose Us" 
            title="Benefits of Working With Us" 
            description="Why leading companies trust SSourcing China for their sourcing needs."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Risk Reduction</h3>
              <p className="text-slate-600">Minimize risks with thorough supplier verification and quality control at every stage.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Local Expertise</h3>
              <p className="text-slate-600">Our team in China provides on-the-ground support, factory visits, and real-time updates.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Time Savings</h3>
              <p className="text-slate-600">Save time on supplier research, communication, and logistics coordination.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Contact us today for a free consultation and quote.
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

export default Services