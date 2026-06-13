import { Link } from 'react-router-dom'
import {
  MessageSquareText,
  Search,
  ShieldCheck,
  Factory,
  Ship,
  ArrowRight,
} from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquareText,
    title: 'Share Your Requirements',
    desc: 'Tell us what you need — product specs, quantities, target price, and delivery timeline. We review every inquiry within 24 hours.',
  },
  {
    number: '02',
    icon: Search,
    title: 'We Find Suppliers',
    desc: 'Our team researches and shortlists 3-5 verified suppliers that match your exact requirements and budget.',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Verify & Audit',
    desc: 'We conduct on-site factory audits to verify legitimacy, production capacity, certifications, and quality systems.',
  },
  {
    number: '04',
    icon: Factory,
    title: 'Inspect & Follow Up',
    desc: 'During-production and pre-shipment inspections ensure your goods meet specifications before they leave the factory.',
  },
  {
    number: '05',
    icon: Ship,
    title: 'Ship & Deliver',
    desc: 'We coordinate logistics, prepare customs documentation, and arrange freight forwarding to your destination.',
  },
]

export default function ProcessSection() {
  return (
    <section className="bg-white section-padding">
      <div className="container-main">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1a2b4a] mb-4">
            How Our Sourcing Process Works
          </h2>
          <p className="text-[#64748b] max-w-2xl mx-auto">
            A transparent, step-by-step process that keeps you informed at every stage.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-[2.5rem] top-16 bottom-16 w-0.5 bg-[#e2e8f0]" />

          <div className="space-y-8 lg:space-y-12">
            {steps.map((step, idx) => (
              <div
                key={step.number}
                className={`relative flex flex-col lg:flex-row gap-6 lg:gap-10 items-start ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Step number circle */}
                <div className="flex items-center gap-4 lg:w-20 shrink-0">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[#1a2b4a] text-white text-lg font-extrabold shrink-0 shadow-md">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-[#f6f7f9] rounded-xl p-6 md:p-8 border border-[#e2e8f0]">
                  <div className="flex items-center gap-3 mb-3">
                    <step.icon className="w-5 h-5 text-[#c4951a]" />
                    <h3 className="text-lg md:text-xl font-bold text-[#1a2b4a]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-[#64748b] text-sm md:text-base leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/how-it-works" className="btn-secondary">
            See the Full Process
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}
