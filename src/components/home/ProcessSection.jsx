import { MessageSquare, Search, FileCheck, Package, Ship, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Submit Your Request',
    description: 'Tell us what you need — product details, quantity, target price, and timeline.',
  },
  {
    icon: Search,
    step: '02',
    title: 'Supplier Matching',
    description: 'We search our network and identify verified manufacturers that fit your requirements.',
  },
  {
    icon: FileCheck,
    step: '03',
    title: 'Quotation & Sampling',
    description: 'Receive competitive quotes and request samples before committing to production.',
  },
  {
    icon: Package,
    step: '04',
    title: 'Production & QC',
    description: 'We monitor production, conduct inspections, and keep you updated at every stage.',
  },
  {
    icon: Ship,
    step: '05',
    title: 'Shipping & Delivery',
    description: 'We arrange freight, handle customs paperwork, and track your shipment to destination.',
  },
]

export default function ProcessSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Our Process</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">How Sourcing Works</h2>
          <p className="text-muted-foreground text-lg">
            A clear, step-by-step process designed to reduce risk and keep you informed from start to finish.
          </p>
        </div>

        <div className="relative">
          {/* Connection line (desktop) */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-border" style={{ left: '10%', right: '10%' }} />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div key={step.step} className="relative text-center">
                {/* Step number circle */}
                <div className="relative z-10 w-16 h-16 mx-auto bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold mb-4 shadow-lg">
                  {step.step}
                </div>

                <div className="w-10 h-10 mx-auto bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>

                <h3 className="text-base font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="/contact" className="btn-primary">
            Start Your Sourcing Request
            <CheckCircle className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  )
}
