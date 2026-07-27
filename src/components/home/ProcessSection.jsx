import { MessageSquare, Search, Shield, ClipboardCheck, Truck, Check } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Submit Your Requirements',
    description: 'Tell us what you need: product details, quantity, target price, and timeline.',
  },
  {
    icon: Search,
    step: '02',
    title: 'Supplier Matching',
    description: 'We identify and evaluate factories that match your specifications and send you a shortlist.',
  },
  {
    icon: Shield,
    step: '03',
    title: 'Verification & Sampling',
    description: 'We verify the factory and arrange samples for your approval before production begins.',
  },
  {
    icon: ClipboardCheck,
    step: '04',
    title: 'Production & QC',
    description: 'We monitor production progress and conduct quality inspections at key milestones.',
  },
  {
    icon: Truck,
    step: '05',
    title: 'Shipping & Delivery',
    description: 'We coordinate logistics, handle documentation, and track your shipment to destination.',
  },
]

export default function ProcessSection() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 id="process-title" className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How Our Sourcing Process Works
          </h2>
          <p className="text-muted-foreground">
            A transparent, step-by-step approach from inquiry to delivery.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-border lg:block" />

          <div className="space-y-8 lg:space-y-12">
            {steps.map((item, index) => (
              <div key={item.step} className="relative flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-8">
                <div className="flex shrink-0 items-center justify-center">
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg lg:h-16 lg:w-16">
                    <item.icon className="h-7 w-7" />
                    <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-background text-xs font-bold text-primary shadow">
                      {item.step}
                    </span>
                  </div>
                </div>

                <div className="flex-1 rounded-lg border border-border bg-card p-6 shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
