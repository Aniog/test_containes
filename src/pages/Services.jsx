import { Link } from 'react-router-dom'
import { Search, Building2, ClipboardCheck, Package, Truck, FileCheck, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const services = [
  {
    id: 'supplier-search',
    icon: Search,
    title: 'Supplier Search & Identification',
    description: 'Finding the right supplier is the foundation of successful China sourcing. We leverage our extensive network and industry knowledge to identify manufacturers that match your specific requirements.',
    features: [
      'Industry-matched supplier identification',
      'Production capability assessment',
      'Price benchmarking and comparison',
      'Factory direct vs. trading company analysis',
      'Language and cultural compatibility evaluation',
    ],
    process: [
      'We discuss your requirements in detail',
      'We identify 3-5 potential suppliers',
      'We conduct preliminary screening',
      'We present recommendations with pros/cons',
      'You select the supplier(s) to proceed with',
    ],
  },
  {
    id: 'factory-verification',
    icon: Building2,
    title: 'Factory Verification & Audit',
    description: 'Protect your business from fraud and ensure you are working with legitimate manufacturers. Our on-site verification services give you complete confidence in your supply chain.',
    features: [
      'Business license verification',
      'On-site factory inspection',
      'Production capacity assessment',
      'Quality management system review',
      'Social compliance and ethical sourcing audit',
      'Financial stability check (upon request)',
    ],
    process: [
      'We schedule an unannounced visit',
      'Our team conducts a comprehensive audit',
      'We verify all claimed capabilities',
      'We document findings with photos and reports',
      'You receive a detailed verification report',
    ],
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    description: 'Ensure every shipment meets your quality standards with professional QC services. We offer inspections at every stage of production using internationally recognized standards.',
    features: [
      'Pre-production inspection (materials, components)',
      'During production inspection (inline QC)',
      'Pre-shipment inspection (PSI)',
      'Container loading supervision',
      'AQL 2.5 / 4.0 sampling per ISO 2859-1',
      'Detailed inspection reports with photos',
    ],
    process: [
      'You define acceptance criteria and AQL levels',
      'We schedule inspection at appropriate stage',
      'Our inspector conducts thorough examination',
      'You receive detailed report with findings',
      'We follow up on any non-conformances',
    ],
  },
  {
    id: 'production-followup',
    icon: Package,
    title: 'Production Follow-up & Monitoring',
    description: 'Stay informed about your order status throughout production. Regular updates and on-site visits ensure your timeline and quality expectations are met.',
    features: [
      'Weekly production progress updates',
      'On-site production monitoring',
      'Sample approval management',
      'Issue identification and resolution',
      'Timeline management and alerts',
      'Client dashboard with real-time updates',
    ],
    process: [
      'We establish production schedule',
      'Regular check-ins with factory',
      'We visit factory at key milestones',
      'We report any issues immediately',
      'We ensure on-time, quality delivery',
    ],
  },
  {
    id: 'shipping',
    icon: Truck,
    title: 'Shipping & Logistics Coordination',
    description: 'Navigate the complexities of international shipping with our comprehensive logistics services. From factory to your door, we handle every detail.',
    features: [
      'Sea freight (FCL/LCL) and air freight',
      'Express shipping (DHL, FedEx, UPS)',
      'Customs clearance documentation',
      'Freight forwarding and consolidation',
      'Track and trace throughout journey',
      'Door-to-door delivery options',
    ],
    process: [
      'We assess best shipping route and method',
      'We coordinate with freight partners',
      'We prepare all export documentation',
      'We monitor shipment progress',
      'We ensure smooth customs clearance',
    ],
  },
  {
    id: 'document-services',
    icon: FileCheck,
    title: 'Document & Contract Services',
    description: 'Ensure all paperwork is in order with our comprehensive document services. From contracts to certificates, we handle the administrative burden.',
    features: [
      'Contract drafting and review',
      'Invoice and packing list preparation',
      'Certificate of Origin procurement',
      'Product certification (CE, FDA, etc.)',
      'Legal document translation',
      'Customs documentation support',
    ],
    process: [
      'We review or draft necessary documents',
      'We ensure compliance with regulations',
      'We coordinate with relevant authorities',
      'We provide certified copies as needed',
      'We maintain document archive for records',
    ],
  },
]

export function Services() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-neutral-50 via-white to-primary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Our Sourcing Services
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            From supplier identification to final delivery, we provide comprehensive 
            China sourcing services to help you source quality products at competitive prices.
          </p>
        </div>
      </section>

      {/* Services */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h2 className="text-3xl font-bold text-neutral-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-neutral-600 mb-8">
                  {service.description}
                </p>

                {/* Features */}
                <h3 className="font-semibold text-neutral-900 mb-4">What We Provide</h3>
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to="/contact">
                  <Button>Request This Service</Button>
                </Link>
              </div>

              {/* Process */}
              <div className={`bg-primary-50 rounded-2xl p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <h3 className="font-semibold text-neutral-900 mb-6">Our Process</h3>
                <div className="space-y-4">
                  {service.process.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {idx + 1}
                      </div>
                      <p className="text-neutral-700 pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Need Custom Sourcing Services?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            We tailor our services to meet your specific requirements. 
            Contact us for a personalized solution.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary-600 hover:bg-primary-50">
              Get a Custom Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}