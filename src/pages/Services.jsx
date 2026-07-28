import React from 'react'
import { Link } from 'react-router-dom'
import {
  Search,
  Shield,
  ClipboardCheck,
  Factory,
  Truck,
  FileCheck,
  Package,
  Globe,
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  MessageSquare,
} from 'lucide-react'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing & Matching',
    description: 'We identify and shortlist the best suppliers for your specific product requirements from our extensive verified network.',
    details: [
      'Access to 500+ pre-verified manufacturers',
      'Industry-specific supplier matching',
      'Competitive pricing from multiple suppliers',
      'Lead time and capability assessment',
      'Shortlist of 3-5 qualified suppliers',
    ],
    process: 'Share your requirements → We source suppliers → Present shortlist with quotes → You select preferred supplier',
  },
  {
    id: 'supplier-verification',
    icon: Shield,
    title: 'Supplier Verification & Factory Audits',
    description: 'Comprehensive on-site verification to ensure supplier legitimacy, capability, and reliability before you commit.',
    details: [
      'On-site factory visits and inspections',
      'Business license and registration verification',
      'Production capacity assessment',
      'Quality management system review',
      'Financial stability background check',
      'Reference checks with existing clients',
    ],
    process: 'Initial screening → On-site audit → Detailed report → Recommendation',
  },
  {
    id: 'quality-control',
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    description: 'Rigorous quality inspections at every production stage to ensure your products meet specifications.',
    details: [
      'Pre-production sample approval',
      'Raw materials inspection',
      'In-line production monitoring',
      'Pre-shipment random inspection (AQL standards)',
      'Detailed inspection reports with photos',
      'Defect classification and corrective action',
    ],
    process: 'Define QC criteria → Inspect at key stages → Issue reports → Approve or reject',
  },
  {
    id: 'production-monitoring',
    icon: Factory,
    title: 'Production Monitoring',
    description: 'Regular factory visits and progress tracking to keep your orders on schedule and within specifications.',
    details: [
      'Weekly production status updates',
      'Timeline and milestone tracking',
      'Early issue identification and resolution',
      'Photo and video documentation',
      'Direct factory communication',
      'Schedule adjustment coordination',
    ],
    process: 'Set milestones → Monitor progress → Weekly updates → Issue resolution',
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping & Logistics Coordination',
    description: 'End-to-end logistics management from factory pickup to final delivery at your warehouse.',
    details: [
      'Sea freight, air freight, and rail options',
      'Freight rate negotiation',
      'Customs clearance and documentation',
      'Cargo insurance arrangement',
      'Door-to-door delivery (DDP)',
      'Real-time shipment tracking',
    ],
    process: 'Select shipping method → Arrange pickup → Customs clearance → Final delivery',
  },
  {
    id: 'documentation',
    icon: FileCheck,
    title: 'Documentation & Compliance',
    description: 'Complete handling of all export documentation, certifications, and regulatory compliance requirements.',
    details: [
      'Export license and permits',
      'Certificates of origin',
      'Product certifications (CE, FCC, etc.)',
      'Commercial invoices and packing lists',
      'Bill of lading and shipping documents',
      'Customs declarations',
    ],
    process: 'Identify requirements → Prepare documents → Verify compliance → Submit',
  },
]

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary-light to-primary-dark pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-white/90 text-sm mb-6">
            Our Services
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive Sourcing Services
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            From initial supplier identification to final delivery, we provide end-to-end
            sourcing solutions tailored to your business needs.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon
              const isEven = index % 2 === 0
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:grid-flow-dense'
                  }`}
                >
                  {/* Content */}
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-3 mb-6">
                      {service.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-muted rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-foreground mb-2">Process:</h4>
                      <p className="text-sm text-muted-foreground">{service.process}</p>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={`${isEven ? '' : 'lg:col-start-1'}`}>
                    <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-12 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon className="h-32 w-32 text-primary/10" />
                      </div>
                      <div className="relative bg-white rounded-xl p-8 shadow-lg">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Professional {service.title.toLowerCase()} services tailored to your needs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need a Custom Sourcing Solution?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Every business is unique. Contact us to discuss your specific requirements
            and get a tailored sourcing plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary-dark transition-colors group"
            >
              Get a Free Quote
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+8613800000000"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
