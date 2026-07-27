import { Link } from 'react-router-dom'
import { MessageSquare, Search, Shield, ClipboardCheck, Truck, ArrowRight, Check } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Submit Your Requirements',
    description: 'Tell us what you need through our inquiry form. Include product details, specifications, target price, quantity, and timeline. The more information you provide, the more accurate our sourcing plan will be.',
    details: [
      'Product description and specifications',
      'Target price range and order quantity',
      'Quality standards and certifications needed',
      'Preferred timeline and delivery date',
      'Any specific requirements or constraints',
    ],
  },
  {
    icon: Search,
    step: '02',
    title: 'Supplier Identification & Shortlisting',
    description: 'Our team searches across manufacturing regions in China to identify suppliers that match your requirements. We evaluate each supplier and provide you with a shortlist of the best options.',
    details: [
      'Search across multiple supplier databases',
      'Evaluate manufacturing capabilities',
      'Check certifications and compliance',
      'Compare pricing and lead times',
      'Provide detailed supplier profiles',
    ],
  },
  {
    icon: Shield,
    step: '03',
    title: 'Factory Verification & Sampling',
    description: 'Before you commit to an order, we verify the factory through on-site audits and arrange samples for your approval. This step ensures you are working with a legitimate, capable manufacturer.',
    details: [
      'On-site factory audit and verification',
      'Business license and legal checks',
      'Production capacity assessment',
      'Sample evaluation and testing',
      'Detailed audit reports with photos',
    ],
  },
  {
    icon: ClipboardCheck,
    step: '04',
    title: 'Production Monitoring & Quality Control',
    description: 'Once production begins, we monitor progress and conduct quality inspections at key milestones. You receive regular updates so you always know the status of your order.',
    details: [
      'Production schedule tracking',
      'Weekly status updates',
      'Pre-production material inspection',
      'During-production quality checks',
      'Pre-shipment final inspection',
    ],
  },
  {
    icon: Truck,
    step: '05',
    title: 'Shipping & Delivery',
    description: 'We coordinate the entire logistics process from factory pickup to final delivery. This includes freight forwarding, customs documentation, and shipment tracking.',
    details: [
      'Factory pickup and consolidation',
      'Freight forwarding (sea, air, rail)',
      'Customs documentation preparation',
      'Container loading supervision',
      'Real-time shipment tracking',
    ],
  },
]

export default function HowItWorksPage() {
  return (
    <div>
      <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-secondary/50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              How Our Sourcing Process Works
            </h1>
            <p className="text-lg text-muted-foreground">
              A transparent, step-by-step approach from your first inquiry to final delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-16">
            {steps.map((item, index) => (
              <div
                key={item.step}
                className={`flex flex-col gap-8 lg:flex-row lg:items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <span className="text-sm font-bold text-primary">Step {item.step}</span>
                  </div>
                  <h2 className="mb-3 text-2xl font-bold text-foreground">{item.title}</h2>
                  <p className="mb-6 text-muted-foreground">{item.description}</p>
                  <ul className="space-y-2">
                    {item.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex-1">
                  <div
                    className="aspect-video w-full rounded-lg bg-secondary"
                    data-strk-bg-id={`step-bg-${index}`}
                    data-strk-bg={`[step-title-${index}] [how-it-works-title]`}
                    data-strk-bg-ratio="16x9"
                    data-strk-bg-width="800"
                  >
                    <div className="flex h-full items-center justify-center text-muted-foreground">
                      <item.icon className="h-16 w-16 opacity-20" />
                    </div>
                  </div>
                  <span id={`step-title-${index}`} className="sr-only">
                    {item.title}
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
              Start Your Sourcing Project Today
            </h2>
            <p className="mb-8 text-muted-foreground">
              Submit your requirements and receive a customized sourcing plan within 2-3 business days.
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
