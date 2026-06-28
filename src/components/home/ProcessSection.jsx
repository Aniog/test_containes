import { Link } from 'react-router-dom'
import { FileSearch, Building, CheckCircle, Boxes, Ship, MessageSquare } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Tell Us Your Needs',
    description: 'Share product specs, target price, quantity, and any supplier preferences.',
  },
  {
    number: '02',
    icon: FileSearch,
    title: 'Supplier Search',
    description: 'We research and shortlist 3-5 qualified factories that match your requirements.',
  },
  {
    number: '03',
    icon: Building,
    title: 'Factory Verification',
    description: 'We visit or audit shortlisted factories to verify legitimacy and capability.',
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Sample & Negotiation',
    description: 'Coordinate samples, negotiate pricing and terms on your behalf.',
  },
  {
    number: '05',
    icon: Boxes,
    title: 'Production Monitoring',
    description: 'Regular follow-ups and quality inspections during manufacturing.',
  },
  {
    number: '06',
    icon: Ship,
    title: 'Shipping & Delivery',
    description: 'Coordinate packing, documentation, and freight to your destination.',
  },
]

export default function ProcessSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 mb-2 block">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            How We Work
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            A proven 6-step process designed to minimize risk and maximize sourcing success from China.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center shrink-0">
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                  {step.number !== '06' && (
                    <div className="hidden lg:block w-px h-full min-h-[40px] bg-slate-200 my-2" />
                  )}
                </div>
                <div className="pb-2">
                  <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                    Step {step.number}
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900 mt-1 mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/how-it-works"
            className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 text-slate-700 font-medium rounded-md hover:bg-slate-50 transition-colors"
          >
            Learn More About Our Process
          </Link>
        </div>
      </div>
    </section>
  )
}
