import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Search, Shield, Eye, ClipboardCheck, Truck, FileCheck,
  ArrowRight, CheckCircle, Phone
} from 'lucide-react'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing & Verification',
    description: 'We find and vet reliable manufacturers in China that match your product requirements and quality standards.',
    features: [
      'Comprehensive market research to identify potential suppliers',
      'Background checks and business license verification',
      'Factory visits to assess production capabilities',
      'Reference checks from existing clients',
      'Price comparison and negotiation',
      'Supplier shortlisting and recommendation',
    ],
    benefits: [
      'Access to our network of 1000+ verified suppliers',
      'Reduced risk of fraud and unreliable suppliers',
      'Competitive pricing through expert negotiation',
      'Time savings on supplier research and vetting',
    ],
  },
  {
    id: 'factory-audits',
    icon: Shield,
    title: 'Factory Audits & Verification',
    description: 'On-site factory audits to verify legitimacy, production capacity, and compliance with industry standards.',
    features: [
      'Business license and registration verification',
      'Production capacity and equipment assessment',
      'Quality management system evaluation',
      'Workplace safety and compliance review',
      'Financial stability assessment',
      'Environmental compliance check',
    ],
    benefits: [
      'Confidence in supplier legitimacy',
      'Assurance of production capabilities',
      'Compliance with international standards',
      'Risk mitigation for your business',
    ],
  },
  {
    id: 'quality-control',
    icon: Eye,
    title: 'Quality Control & Inspection',
    description: 'Comprehensive inspection services at every stage of production to ensure your products meet specifications.',
    features: [
      'Pre-production sample approval',
      'In-line production inspections',
      'Pre-shipment quality checks',
      'Container loading supervision',
      'AQL standard inspections',
      'Detailed inspection reports with photos',
    ],
    benefits: [
      'Consistent product quality',
      'Reduced defects and returns',
      'Compliance with specifications',
      'Peace of mind for every order',
    ],
  },
  {
    id: 'production-follow-up',
    icon: ClipboardCheck,
    title: 'Production Follow-up & Monitoring',
    description: 'Regular updates and monitoring of your production timeline to ensure on-time delivery.',
    features: [
      'Production schedule tracking',
      'Weekly progress reports',
      'Issue identification and resolution',
      'Timeline management and adjustments',
      'Communication bridge with suppliers',
      'Milestone verification',
    ],
    benefits: [
      'On-time delivery assurance',
      'Real-time production visibility',
      'Proactive issue resolution',
      'Reduced communication overhead',
    ],
  },
  {
    id: 'shipping-coordination',
    icon: Truck,
    title: 'Shipping & Logistics Coordination',
    description: 'End-to-end logistics management from factory floor to your warehouse door.',
    features: [
      'Freight forwarding (sea, air, rail)',
      'Customs clearance and documentation',
      'Warehousing and consolidation',
      'Insurance arrangement',
      'Door-to-door delivery coordination',
      'Real-time shipment tracking',
    ],
    benefits: [
      'Streamlined logistics process',
      'Reduced shipping costs',
      'Faster customs clearance',
      'Complete visibility of shipments',
    ],
  },
  {
    id: 'documentation',
    icon: FileCheck,
    title: 'Documentation & Compliance',
    description: 'Complete handling of all import/export documentation, certifications, and compliance paperwork.',
    features: [
      'Certificates of origin',
      'Product certifications (CE, FCC, UL, etc.)',
      'Import/export licenses',
      'Commercial invoices and packing lists',
      'Bill of lading and shipping documents',
      'Regulatory compliance documentation',
    ],
    benefits: [
      'Compliance with regulations',
      'Smooth customs clearance',
      'Reduced administrative burden',
      'Professional documentation',
    ],
  },
]

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-1 mb-6">Our Sourcing Services</h1>
            <p className="body-large text-gray-300">
              Comprehensive China sourcing solutions designed to help global buyers 
              find reliable suppliers, ensure quality, and streamline logistics.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="heading-2 text-foreground mb-4">{service.title}</h2>
                  <p className="body-large text-muted-foreground mb-6">{service.description}</p>
                  
                  <div className="mb-8">
                    <h3 className="font-semibold text-foreground mb-4">What We Do:</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-4">Benefits:</h3>
                    <ul className="space-y-3">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 mt-2" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={`bg-gray-50 rounded-2xl p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center">
                    <service.icon className="w-24 h-24 text-primary/30" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-6">Ready to Get Started?</h2>
          <p className="body-large text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your sourcing needs and receive a 
            customized service proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-accent text-lg px-8 py-4 group">
              Get Free Quote
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="tel:+8612345678900" className="btn-secondary text-lg px-8 py-4 bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Phone className="w-5 h-5 mr-2" />
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
