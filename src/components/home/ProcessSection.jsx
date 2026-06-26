import { Link } from 'react-router-dom'
import { MessageSquare, Search, FileCheck, Factory, Package, Truck } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: MessageSquare,
    title: 'Tell Us What You Need',
    description: 'Share product specs, target price, and quantity. We reply within 24 hours with a sourcing plan.',
  },
  {
    step: '02',
    icon: Search,
    title: 'We Find & Verify Suppliers',
    description: 'Our team shortlists qualified factories, runs background checks, and negotiates pricing on your behalf.',
  },
  {
    step: '03',
    icon: FileCheck,
    title: 'Sample & Approve',
    description: 'We arrange product samples, document specifications, and refine details until you are satisfied.',
  },
  {
    step: '04',
    icon: Factory,
    title: 'Production & QC',
    description: 'We monitor manufacturing progress and conduct inspections at key milestones to protect quality.',
  },
  {
    step: '05',
    icon: Package,
    title: 'Packaging & Labeling',
    description: 'Products are packed to your specifications with custom branding, barcodes, and retail-ready packaging.',
  },
  {
    step: '06',
    icon: Truck,
    title: 'Shipping & Delivery',
    description: 'We handle freight booking, export documentation, customs clearance, and last-mile delivery coordination.',
  },
]

export default function ProcessSection() {
  return (
    <section className="py-20 md:py-28 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest">Our Process</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-heading font-extrabold text-text">
            How Our Sourcing Process Works
          </h2>
          <p className="mt-4 text-text-muted text-base leading-relaxed">
            A straightforward, transparent workflow from initial inquiry to final delivery. You stay in control at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={item.step} className="relative bg-white rounded-xl border border-border p-7 group hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="shrink-0 w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-4xl font-heading font-extrabold text-primary/10 leading-none">{item.step}</span>
                </div>
                <h3 className="font-heading font-bold text-lg text-text mb-2">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors"
          >
            See Full Process Details
          </Link>
        </div>
      </div>
    </section>
  )
}
