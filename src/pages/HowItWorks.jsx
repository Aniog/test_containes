import { Link } from 'react-router-dom'
import { Search, Building2, ClipboardCheck, Eye, Ship, Package, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Tell Us What You Need',
    description:
      'Share your product specifications, target price, estimated volume, and any preferences such as certifications or factory size. The more detail, the better we can match you.',
    tip: 'Typical turnaround: 1 business day for acknowledgment',
  },
  {
    icon: Building2,
    title: 'We Find & Verify Suppliers',
    description:
      'We research our database and industry networks to shortlist 3–5 qualified factories. We then conduct on-site verification audits and share a comparison report.',
    tip: 'Typical turnaround: 3–5 business days',
  },
  {
    icon: ClipboardCheck,
    title: 'Sample Evaluation',
    description:
      'We coordinate sample production, inspect samples on your behalf, and ship them to your address for approval before mass production begins.',
    tip: 'Typical turnaround: 1–3 weeks depending on complexity',
  },
  {
    icon: Eye,
    title: 'Production Monitoring',
    description:
      'Once the PO is placed, we follow production milestones, check raw materials, conduct mid-production inspections, and alert you to any risks.',
    tip: 'Weekly reports with photos and status updates',
  },
  {
    icon: Ship,
    title: 'Quality Check & Shipping',
    description:
      'We perform pre-shipment inspection, supervise container loading, prepare export documentation, and book freight on your preferred terms.',
    tip: 'Pre-shipment inspection is included in every project',
  },
  {
    icon: Package,
    title: 'Delivery & Ongoing Support',
    description:
      'We track the shipment to your warehouse and remain available for after-delivery support, including supplier communication for reorders or warranty claims.',
    tip: 'We keep your supplier relationships organized for repeat orders',
  },
]

export default function HowItWorks() {
  return (
    <div>
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            How It Works
          </h1>
          <p className="text-slate-200 max-w-2xl mx-auto">
            A simple, transparent 6-step process designed to reduce risk and give you full visibility from day one.
          </p>
        </div>
      </section>

      <section className="py-20 bg-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute left-5 md:left-8 top-0 bottom-0 w-0.5 bg-border-light" />
            <div className="space-y-12">
              {steps.map((s, idx) => (
                <div key={s.title} className="relative flex gap-6 md:gap-8">
                  <div className="relative z-10 w-10 h-10 md:w-16 md:h-16 rounded-full bg-primary-accent text-white flex items-center justify-center text-sm md:text-base font-bold shrink-0 border-4 border-bg">
                    {idx + 1}
                  </div>
                  <div className="bg-surface rounded-xl border border-border-light p-6 flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <s.icon className="w-5 h-5 text-primary-accent" />
                      <h3 className="text-lg font-bold text-text-primary">{s.title}</h3>
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed mb-3">
                      {s.description}
                    </p>
                    <span className="inline-block text-xs font-medium text-secondary bg-teal-50 rounded-md px-3 py-1">
                      {s.tip}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-surface border-t border-border-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-text-primary mb-4">
            Ready to get started?
          </h2>
          <p className="text-text-secondary mb-8">
            Share your project details and we will reply with a clear sourcing plan and quote.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary-accent px-8 py-3.5 text-base font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Get a Free Sourcing Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
