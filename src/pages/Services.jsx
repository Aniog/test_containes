import React from 'react'
import { Link } from 'react-router-dom'
import { Search, ClipboardCheck, Package, Truck, FileText, Users, ArrowRight, CheckCircle } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const services = [
  {
    id: 'supplier-verification',
    icon: Search,
    title: 'Supplier Verification',
    subtitle: 'Know who you\'re dealing with before you commit',
    description: 'Our comprehensive supplier verification services help you make informed decisions. We conduct thorough on-site audits to verify factory legitimacy, production capabilities, and business reliability.',
    features: [
      'Business license verification',
      'Factory facility inspection',
      'Production capacity assessment',
      'Equipment and machinery verification',
      'Workforce evaluation',
      'Financial stability checks',
      'Customer reference verification',
      'Detailed audit reports with photos',
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
  },
  {
    id: 'quality-control',
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    subtitle: 'Protect your investment with professional QC',
    description: 'Our trained inspectors ensure your products meet specifications at every stage. From pre-production to pre-shipment, we catch issues early and prevent costly problems.',
    features: [
      'Pre-production inspection (DUPRO)',
      'During production inspection (DPI)',
      'Pre-shipment inspection (PSI)',
      'AQL sampling according to ANSI/ASQ Z1.4',
      'Product-specific inspection checklists',
      'Detailed photo and video documentation',
      'Non-conformance reports with corrective actions',
      'Compliance verification (CE, FCC, etc.)',
    ],
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&h=400&fit=crop',
  },
  {
    id: 'production',
    icon: Package,
    title: 'Production Follow-up',
    subtitle: 'Stay informed and in control of your orders',
    description: 'We monitor your production orders closely, providing regular updates and addressing any issues that arise. Our hands-on approach ensures your timeline and quality expectations are met.',
    features: [
      'Weekly progress reports',
      'Sample approval management',
      'Production timeline tracking',
      'Quality milestone verification',
      'Issue resolution and escalation',
      'Material sourcing coordination',
      'Packaging and labeling oversight',
      'Final production documentation',
    ],
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=600&h=400&fit=crop',
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping & Logistics',
    subtitle: 'Seamless delivery from factory to your door',
    description: 'We handle all logistics aspects of your order, from consolidation to customs clearance. Our established partnerships with freight forwarders ensure competitive rates and reliable delivery.',
    features: [
      'Sea freight (FCL/LCL)',
      'Air freight',
      'Express courier (DHL, FedEx, UPS)',
      'Rail freight to Europe',
      'Customs documentation',
      'Duty and tax calculation',
      'Cargo insurance',
      'Door-to-door delivery coordination',
    ],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
  },
  {
    id: 'samples',
    icon: FileText,
    title: 'Sample Management',
    subtitle: 'Get the right samples before full production',
    description: 'We coordinate sample production, ensure quality standards, and manage the sample approval process. This helps you validate product quality and supplier capability before committing to bulk orders.',
    features: [
      'Sample specification review',
      'Factory sample coordination',
      'Sample quality evaluation',
      'Modification requests handling',
      'Shipping and tracking',
      'Sample cost negotiation',
      'Bulk order preparation',
      'Pre-production sample approval',
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
  },
  {
    id: 'consultation',
    icon: Users,
    title: 'Sourcing Consultation',
    subtitle: 'Expert guidance for your China sourcing strategy',
    description: 'Our experienced team provides strategic advice on supplier selection, pricing negotiation, product development, and market entry. We help you navigate the complexities of China manufacturing.',
    features: [
      'Supplier selection strategy',
      'Price negotiation support',
      'Product development guidance',
      'MOQ optimization',
      'Cost breakdown analysis',
      'Market intelligence reports',
      'Risk assessment',
      'Sourcing strategy planning',
    ],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
  },
]

const Services = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Sourcing Services
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            Comprehensive solutions to simplify your China sourcing operations. 
            From supplier verification to final delivery, we're with you every step.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid lg:grid-cols-2 gap-12 items-center mb-20 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-primary mb-2">{service.title}</h2>
                <p className="text-lg text-secondary font-medium mb-4">{service.subtitle}</p>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <ul className="grid grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-slate-600">
                      <CheckCircle className="w-5 h-5 text-accent mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-80 object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            title="Ready to Get Started?"
            subtitle="Contact us to discuss your sourcing requirements"
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Get a Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button variant="outline" size="lg">
                Learn Our Process
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services