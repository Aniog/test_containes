import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Search, ClipboardCheck, Factory, Truck, Package, Shield, 
  CheckCircle, ArrowRight, Clock, Users, Award, Globe
} from 'lucide-react'
import { Button } from '@/components/ui/Button'

const services = [
  {
    id: 'verification',
    icon: Search,
    title: 'Supplier Verification',
    description: 'Our comprehensive supplier verification service ensures you work with legitimate, capable manufacturers. We conduct thorough background checks to protect your business.',
    features: [
      'Business license verification',
      'Factory visit and capacity assessment',
      'Certification verification (ISO, CE, etc.)',
      'Financial stability check',
      'Reference and history verification',
      'Conflict of interest screening',
    ],
    whyItMatters: 'Supplier scams cost businesses millions annually. Our verification process ensures you connect with genuine manufacturers who can meet your requirements.',
  },
  {
    id: 'inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Our quality control inspections protect your investment by identifying defects before shipment. We ensure products meet your specifications and quality standards.',
    features: [
      'Pre-production inspection',
      'During-production inspection',
      'Pre-shipment inspection',
      'Container loading supervision',
      'Lab testing coordination',
      'Detailed inspection reports with photos',
    ],
    whyItMatters: 'Quality issues discovered after shipment are expensive to resolve. Our inspections catch problems early, saving you from costly returns and reputational damage.',
  },
  {
    id: 'production',
    icon: Factory,
    title: 'Production Follow-up',
    description: 'We monitor your production closely to ensure timelines are met and quality remains consistent throughout the manufacturing process.',
    features: [
      'Production progress monitoring',
      'Timeline management',
      'Quality issue resolution',
      'Sample approval coordination',
      'Production milestone tracking',
      'Regular status updates',
    ],
    whyItMatters: 'Production delays and quality drift can derail your supply chain. Our in-person oversight keeps your order on track and up to standard.',
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping & Logistics',
    description: 'We handle all aspects of shipping and logistics, from freight forwarding to customs clearance, ensuring your goods arrive safely and on time.',
    features: [
      'Freight forwarding coordination',
      'Customs clearance assistance',
      'Documentation preparation',
      'Multi-modal transport (air, sea, land)',
      'Insurance coordination',
      'Last-mile delivery tracking',
    ],
    whyItMatters: 'Complex international shipping can be overwhelming. We navigate the logistics so you can focus on your business.',
  },
  {
    id: 'sourcing',
    icon: Package,
    title: 'Product Sourcing',
    description: 'We help you find the right manufacturers for any product, leveraging our extensive network of verified suppliers across China.',
    features: [
      'Supplier matching',
      'Price negotiation',
      'Sample management',
      'MOQ optimization',
      'Product development support',
      'Competitive bidding coordination',
    ],
    whyItMatters: 'Finding the right supplier is the foundation of successful sourcing. We connect you with manufacturers who match your quality and volume needs.',
  },
  {
    id: 'contract',
    icon: Shield,
    title: 'Contract & Legal Support',
    description: 'We help draft and review contracts to protect your interests and ensure clear, enforceable terms with your suppliers.',
    features: [
      'Contract drafting',
      'Terms negotiation',
      'IP protection',
      'Dispute resolution',
      'Payment security',
      'Compliance guidance',
    ],
    whyItMatters: 'Clear contracts prevent misunderstandings and protect your interests. We ensure your agreements are comprehensive and enforceable.',
  },
]

const whyChooseUs = [
  {
    icon: Users,
    title: 'Experienced Team',
    description: 'Our team has 15+ years of combined experience in China sourcing and manufacturing.',
  },
  {
    icon: Globe,
    title: 'Local Presence',
    description: 'Based in China, we can visit factories, inspect products, and respond quickly to issues.',
  },
  {
    icon: Award,
    title: 'Proven Track Record',
    description: '500+ clients served across 35+ countries with 98% on-time delivery rate.',
  },
  {
    icon: Clock,
    title: 'Fast Response',
    description: 'We respond to all inquiries within 24 hours and keep you updated throughout the process.',
  },
]

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-light py-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Our Sourcing Services
            </h1>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto">
              Comprehensive solutions to make your China sourcing smooth, safe, and successful.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-text-primary mb-4">{service.title}</h2>
                  <p className="text-text-secondary mb-6">{service.description}</p>
                  
                  <div className="bg-background-light rounded-xl p-6 mb-6">
                    <h3 className="font-semibold text-text-primary mb-4">What's Included:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                          <span className="text-text-secondary">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-l-4 border-accent pl-4">
                    <p className="text-text-secondary italic">{service.whyItMatters}</p>
                  </div>
                </div>
                
                <div className={`bg-white rounded-2xl p-8 shadow-sm border border-border ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center">
                    <service.icon className="w-24 h-24 text-primary/30" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background-light">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Why Choose SSourcing China
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              We're not just an agent - we're your partner in successful China sourcing.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-sm border border-border text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm">{item.description}</p>
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
              Need Help with Sourcing?
            </h2>
            <p className="text-blue-200 max-w-xl mx-auto mb-8">
              Contact us today to discuss your sourcing needs. We'll help you find the right solution.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent-hover">
                Get a Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage