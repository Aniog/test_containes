import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight, ClipboardList, Factory, ClipboardCheck, Ship } from 'lucide-react'

const steps = [
  {
    title: 'Share your requirements',
    description: 'Tell us the product, target price, quantity, and timeline. We review feasibility and confirm next steps.',
    icon: ClipboardList,
  },
  {
    title: 'We source and verify suppliers',
    description: 'We shortlist manufacturers, verify credentials, and coordinate samples so you can compare options.',
    icon: Factory,
  },
  {
    title: 'Inspect and approve production',
    description: 'We inspect materials, monitor production, and perform final checks before goods leave the factory.',
    icon: ClipboardCheck,
  },
  {
    title: 'Ship and deliver',
    description: 'We arrange freight, handle documentation, and track the shipment until it reaches your destination.',
    icon: Ship,
  },
]

export default function HowItWorks() {
  return (
    <div>
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl font-semibold text-slate-900">How It Works</h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            A straightforward process designed to reduce risk, save time, and give you visibility into every stage of your China sourcing project.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={item.title} className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-900 text-white">
                  <item.icon className="h-5 w-5" />
                </div>
                <div className="text-xs font-medium text-slate-500">Step {index + 1}</div>
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="h-5 w-5 text-slate-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-semibold text-slate-900">What to expect after you contact us</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-sm font-semibold text-slate-900">Within 1 business day</h3>
              <p className="mt-2 text-sm text-slate-600">We review your request and reply with initial questions, feasibility notes, and a suggested next step.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-sm font-semibold text-slate-900">Within 3-7 business days</h3>
              <p className="mt-2 text-sm text-slate-600">We deliver a shortlist of vetted suppliers, sample results, and a transparent cost breakdown.</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-sm font-semibold text-slate-900">Ongoing support</h3>
              <p className="mt-2 text-sm text-slate-600">From inspection to shipping, we provide regular updates and a single point of contact.</p>
            </div>
          </div>
          <div className="mt-8">
            <Button asChild>
              <Link to="/contact">Start your sourcing project</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
