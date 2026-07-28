import { Link } from 'react-router-dom'
import { Search, Handshake, ClipboardCheck, Ship, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Submit Your Requirements',
    description: 'Tell us about your product, budget, and quality expectations. We\'ll review and prepare a tailored sourcing plan.',
  },
  {
    icon: Handshake,
    step: '02',
    title: 'Supplier Matching & Verification',
    description: 'We identify qualified suppliers, verify their credentials, and present you with the best options.',
  },
  {
    icon: ClipboardCheck,
    step: '03',
    title: 'Samples & Quality Control',
    description: 'We manage sample requests, conduct inspections, and ensure products meet your specifications before production.',
  },
  {
    icon: Ship,
    step: '04',
    title: 'Production & Delivery',
    description: 'We monitor production, coordinate logistics, and handle shipping so your goods arrive safely and on time.',
  },
]

export default function ProcessSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">
          A straightforward process designed to save you time and reduce risk when sourcing from China.
        </p>
        <div className="relative mt-16">
          <div className="hidden lg:block absolute top-1/2 left-[8%] right-[8%] h-0.5 bg-gray-200 -translate-y-1/2" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative text-center">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-5 relative z-10 shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-sm font-bold text-primary/60 block mb-2">{step.step}</span>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div className="text-center mt-12">
          <Link to="/how-it-works" className="btn-primary inline-flex items-center gap-2">
            Learn More About Our Process
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}