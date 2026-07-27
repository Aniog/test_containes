import { Link } from 'react-router-dom'
import { Search, Shield, ClipboardCheck, Clock, Truck, ArrowRight, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'Supplier Sourcing',
    description: 'We identify and evaluate manufacturers across China to find the right match for your product requirements, budget, and quality standards.',
    details: [
      'Search across multiple manufacturing regions in China',
      'Evaluate supplier capabilities and certifications',
      'Compare pricing from multiple verified factories',
      'Provide detailed supplier profiles and recommendations',
      'Negotiate terms and pricing on your behalf',
    ],
  },
  {
    icon: Shield,
    title: 'Factory Verification',
    description: 'On-site audits to verify business licenses, production capacity, quality management systems, and social compliance before you place orders.',
    details: [
      'Verify business licenses and legal registration',
      'Assess production capacity and equipment',
      'Review quality management systems (ISO, etc.)',
      'Check social compliance and working conditions',
      'Provide photo and video documentation of the facility',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    description: 'Pre-production, during-production, and pre-shipment inspections with detailed reports and photos to ensure your products meet specifications.',
    details: [
      'Pre-production inspection of raw materials',
      'During-production checks at key milestones',
      'Pre-shipment inspection of finished goods',
      'Detailed inspection reports with photos',
      'Defect classification and pass/fail recommendations',
    ],
  },
  {
    icon: Clock,
    title: 'Production Follow-up',
    description: 'Regular updates and milestone tracking throughout the manufacturing process so you always know the status of your orders.',
    details: [
      'Weekly production status updates',
      'Milestone tracking against agreed timelines',
      'Early warning of potential delays',
      'Coordination with factory production managers',
      'Real-time communication and problem resolution',
    ],
  },
  {
    icon: Truck,
    title: 'Shipping Coordination',
    description: 'We handle logistics from factory pickup to port loading, customs documentation, and freight forwarding to your destination.',
    details: [
      'Factory pickup and consolidation',
      'Freight forwarding (sea, air, rail)',
      'Customs documentation and clearance',
      'Container loading supervision',
      'Shipment tracking to destination',
    ],
  },
  {
    icon: CheckCircle,
    title: 'Sample Management',
    description: 'We coordinate sample requests, evaluate quality against your standards, and ship approved samples to you for final approval.',
    details: [
      'Request samples from shortlisted suppliers',
      'Evaluate samples against your specifications',
      'Provide detailed sample assessment reports',
      'Coordinate revisions and improvements',
      'Ship approved samples to your address',
    ],
  },
]

export default function ServicesPage() {
  return (
    <div>
      <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-secondary/50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Our Sourcing Services
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive sourcing support from supplier identification to final delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`flex flex-col gap-8 lg:flex-row lg:items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="mb-3 text-2xl font-bold text-foreground">{service.title}</h2>
                  <p className="mb-6 text-muted-foreground">{service.description}</p>
                  <ul className="space-y-2">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1">
                  <div
                    className="aspect-video w-full rounded-lg bg-secondary"
                    data-strk-bg-id={`service-bg-${index}`}
                    data-strk-bg={`[service-title-${index}] [services-title]`}
                    data-strk-bg-ratio="16x9"
                    data-strk-bg-width="800"
                  >
                    <div className="flex h-full items-center justify-center text-muted-foreground">
                      <service.icon className="h-16 w-16 opacity-20" />
                    </div>
                  </div>
                  <span id={`service-title-${index}`} className="sr-only">
                    {service.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">
              Ready to Get Started?
            </h2>
            <p className="mb-8 text-muted-foreground">
              Tell us about your sourcing needs and we will provide a customized plan.
            </p>
            <Link to="/contact" className="btn-primary">
              Get a Free Sourcing Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
