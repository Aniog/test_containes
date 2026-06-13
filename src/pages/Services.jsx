import { Link } from 'react-router-dom'
import { Search, Shield, ClipboardCheck, Factory, Ship, ArrowRight, CheckCircle } from 'lucide-react'

const services = [
  {
    id: 'supplier-sourcing',
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'Finding the right manufacturer is the foundation of successful sourcing. We leverage our extensive network and market knowledge to identify suppliers that match your specific requirements.',
    details: [
      'Product-specific supplier identification across major manufacturing regions',
      'Initial capability assessment and communication screening',
      'Detailed quotation comparison with transparent cost breakdowns',
      'Shortlist presentation with pros, cons, and recommendations',
      'Sample arrangement and evaluation coordination',
    ],
  },
  {
    id: 'factory-verification',
    icon: Shield,
    title: 'Factory Verification',
    description: 'Before you commit to any supplier, we conduct thorough on-site verification to ensure they are legitimate, capable, and reliable.',
    details: [
      'Business license and registration verification',
      'On-site factory audit with photo and video documentation',
      'Production capacity and equipment assessment',
      'Quality management system evaluation',
      'Social compliance and working conditions review',
      'Reference checks with existing international clients',
    ],
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Quality issues discovered after delivery are costly and damaging. Our multi-stage inspection process catches problems early, when they are easiest and cheapest to fix.',
    details: [
      'Pre-production inspection: raw materials and initial samples',
      'During-production inspection: early-stage quality verification',
      'Pre-shipment inspection: final quality check before goods leave the factory',
      'Container loading supervision to prevent damage during transit',
      'Detailed inspection reports with photos and measurements',
      'Defect classification and corrective action recommendations',
    ],
  },
  {
    id: 'production-monitoring',
    icon: Factory,
    title: 'Production Monitoring',
    description: 'Stay informed about your production progress without being on the ground. We provide regular updates and intervene when issues arise.',
    details: [
      'Regular factory visits throughout the production cycle',
      'Weekly progress reports with photos and timeline updates',
      'Early warning system for potential delays or quality issues',
      'On-the-ground problem solving and communication with factory management',
      'Production schedule tracking and milestone verification',
    ],
  },
  {
    id: 'shipping-coordination',
    icon: Ship,
    title: 'Shipping Coordination',
    description: 'Getting your products from the factory floor to your warehouse requires careful logistics planning. We handle the complexity so you do not have to.',
    details: [
      'Freight forwarding coordination (sea, air, or express)',
      'Customs documentation preparation and review',
      'Export and import compliance guidance',
      'Cargo insurance arrangement',
      'Real-time shipment tracking and delivery coordination',
      'Cost optimization through carrier comparison and route planning',
    ],
  },
]

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Sourcing Services</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Comprehensive sourcing solutions designed to reduce risk, save time, and protect your investment when sourcing from China.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`section-padding ${index % 2 === 0 ? 'bg-white' : 'bg-secondary/50'}`}
        >
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{service.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
              <ul className="space-y-3 ml-18">
                {service.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-blue-700 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Sourcing from China?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Tell us about your project and we will recommend the right services for your needs.
          </p>
          <Link to="/contact" className="btn-primary bg-white text-primary hover:bg-blue-50 text-lg px-8 py-4">
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  )
}
