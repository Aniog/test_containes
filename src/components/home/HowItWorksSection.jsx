import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight, FileText, Search, ClipboardCheck, Package, Ship } from 'lucide-react'

const steps = [
  {
    icon: FileText,
    step: '01',
    title: 'Submit Your Requirements',
    description: 'Tell us what you need — product details, quantity, target price, and timeline.',
  },
  {
    icon: Search,
    step: '02',
    title: 'Supplier Sourcing & Verification',
    description: 'We find qualified suppliers, verify their credentials, and shortlist the best options.',
  },
  {
    icon: ClipboardCheck,
    step: '03',
    title: 'Sampling & Quality Check',
    description: 'We arrange samples, inspect quality, and confirm specifications before mass production.',
  },
  {
    icon: Package,
    step: '04',
    title: 'Production Monitoring',
    description: 'We track production progress, conduct inspections, and keep you updated at every stage.',
  },
  {
    icon: Ship,
    step: '05',
    title: 'Shipping & Delivery',
    description: 'We handle logistics, customs clearance, and coordinate delivery to your destination.',
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            How Our Sourcing Process Works
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A transparent, step-by-step process designed to minimize risk and maximize value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-lg p-6 border border-slate-200 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-full bg-blue-700 flex items-center justify-center">
                    <step.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-blue-700 uppercase tracking-wider">Step {step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-4 w-4 text-slate-400" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild className="bg-blue-700 hover:bg-blue-800">
            <Link to="/how-it-works">
              Learn More About Our Process
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
