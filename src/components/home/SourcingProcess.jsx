import { Link } from 'react-router-dom'
import { MessageSquare, Search, ShieldCheck, ClipboardCheck, Truck, CheckCircle, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Tell Us What You Need',
    desc: 'Share your product specifications, target price, quantity, and timeline. We respond within 24 hours.',
  },
  {
    icon: Search,
    step: '02',
    title: 'Supplier Matching',
    desc: 'We search our network and identify 3-5 qualified factories that match your requirements.',
  },
  {
    icon: ShieldCheck,
    step: '03',
    title: 'Factory Verification',
    desc: 'We audit the shortlisted factories and send you a detailed verification report with photos.',
  },
  {
    icon: ClipboardCheck,
    step: '04',
    title: 'Sample & Order',
    desc: 'We arrange samples for your approval, then manage the order placement and production timeline.',
  },
  {
    icon: Truck,
    step: '05',
    title: 'QC & Shipping',
    desc: 'Pre-shipment inspection, then we coordinate freight and customs for delivery to your door.',
  },
  {
    icon: CheckCircle,
    step: '06',
    title: 'Ongoing Support',
    desc: 'Continuous support for reorders, new product development, and long-term supplier management.',
  },
]

export default function SourcingProcess() {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-amber font-semibold text-sm uppercase tracking-wider mb-2">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Your Sourcing Process, Simplified
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            A clear, step-by-step process that takes you from inquiry to delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {steps.map((item, idx) => (
            <div key={item.step} className="relative bg-white rounded-xl p-6 md:p-8 border border-slate-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl font-extrabold text-navy/10">{item.step}</span>
                <div className="w-10 h-10 bg-amber/10 rounded-lg flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-amber" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 text-slate-300">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 bg-navy hover:bg-navy-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            See Full Process Details
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
