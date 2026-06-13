import { Link } from 'react-router-dom'
import {
  MessageSquareText,
  Search,
  ShieldCheck,
  ClipboardCheck,
  Factory,
  Ship,
  ArrowRight,
  Clock,
  CheckCircle2,
} from 'lucide-react'

const phases = [
  {
    phase: 'Phase 1: Discovery',
    steps: [
      {
        icon: MessageSquareText,
        title: 'Submit Your Inquiry',
        desc: 'Fill out our inquiry form with product details, target price, quantity, and any specific requirements. We review every submission within 24 hours.',
        duration: 'Day 1',
      },
      {
        icon: Search,
        title: 'Supplier Research',
        desc: 'Our team searches our verified database, industry networks, and trade show contacts to identify 3-5 potential suppliers that match your exact needs.',
        duration: 'Days 2-4',
      },
      {
        icon: ShieldCheck,
        title: 'Initial Verification',
        desc: 'We conduct preliminary background checks on shortlisted suppliers — business licenses, export history, and online reputation — before presenting them to you.',
        duration: 'Days 3-5',
      },
    ],
  },
  {
    phase: 'Phase 2: Validation',
    steps: [
      {
        icon: ShieldCheck,
        title: 'Factory Audit',
        desc: 'Our on-site team visits the top candidates to verify production capacity, equipment quality, certifications, and workplace conditions. You receive a detailed audit report with photos.',
        duration: 'Days 6-10',
      },
      {
        icon: ClipboardCheck,
        title: 'Sample Evaluation',
        desc: 'We arrange sample production, inspect samples for quality and accuracy, and ship them to you for approval before production begins.',
        duration: 'Days 10-18',
      },
      {
        icon: FileText,
        title: 'Contract Negotiation',
        desc: 'We negotiate pricing, payment terms, lead times, and quality guarantees. All contracts include NNN agreements and warranty protections.',
        duration: 'Days 15-20',
      },
    ],
  },
  {
    phase: 'Phase 3: Production',
    steps: [
      {
        icon: Factory,
        title: 'Production Monitoring',
        desc: 'We track raw material arrivals, milestone completion, and production progress. Weekly status reports keep you informed throughout the process.',
        duration: 'Ongoing',
      },
      {
        icon: ClipboardCheck,
        title: 'Quality Inspection',
        desc: 'During-production (DUPRO) and pre-shipment (PSI) inspections based on AQL standards. Every inspection includes detailed photo reports and defect analysis.',
        duration: 'As scheduled',
      },
      {
        icon: Ship,
        title: 'Shipping Coordination',
        desc: 'We book freight, prepare export documentation, arrange customs clearance, and coordinate delivery to your warehouse or preferred port.',
        duration: 'Final phase',
      },
    ],
  },
]

function FileText(props) {
  // inline fallback since we don't import it above
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  )
}

export default function HowItWorks() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#1a2b4a] pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="container-main text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            How It Works
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg">
            A transparent, step-by-step process that keeps you informed and in control at every stage of your sourcing journey.
          </p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="bg-white section-padding">
        <div className="container-main">
          {phases.map((phase, pIdx) => (
            <div key={phase.phase} className="mb-16 last:mb-0">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-[#c4951a] flex items-center justify-center text-white font-extrabold text-sm">
                  {pIdx + 1}
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-[#1a2b4a]">
                  {phase.phase}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {phase.steps.map((step) => (
                  <div
                    key={step.title}
                    className="bg-[#f6f7f9] rounded-xl p-6 border border-[#e2e8f0]"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <step.icon className="w-5 h-5 text-[#c4951a]" />
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#c4951a] bg-[#c4951a]/10 px-2 py-0.5 rounded-full">
                        <Clock className="w-3 h-3" />
                        {step.duration}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#1a2b4a] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#64748b] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-[#f6f7f9] section-padding">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a2b4a] mb-4">
              Typical Sourcing Timeline
            </h2>
            <p className="text-[#64748b] max-w-2xl mx-auto">
              While every project is different, here is a realistic timeline for a standard sourcing engagement.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              { week: 'Week 1', tasks: ['Submit inquiry', 'Supplier research', 'Initial verification'] },
              { week: 'Week 2', tasks: ['Factory audit scheduling', 'Audit execution'] },
              { week: 'Weeks 3-4', tasks: ['Sample production', 'Sample evaluation', 'Contract negotiation'] },
              { week: 'Weeks 5-8', tasks: ['Production', 'DUPRO inspection', 'PSI inspection'] },
              { week: 'Weeks 9-10', tasks: ['Shipping coordination', 'Customs clearance', 'Delivery'] },
            ].map((item, idx) => (
              <div key={item.week} className="flex gap-4 md:gap-6 mb-6 last:mb-0">
                <div className="flex flex-col items-center shrink-0">
                  <div className={`w-3 h-3 rounded-full ${idx === 0 ? 'bg-[#c4951a]' : 'bg-[#e2e8f0]'}`} />
                  {idx < 4 && (
                    <div className="w-0.5 flex-1 bg-[#e2e8f0] mt-1" />
                  )}
                </div>
                <div className="pb-6">
                  <h4 className="text-sm font-bold text-[#1a2b4a] mb-1.5">
                    {item.week}
                  </h4>
                  <ul className="space-y-1">
                    {item.tasks.map((t) => (
                      <li key={t} className="flex items-center gap-2 text-sm text-[#64748b]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#16a34a] shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a2b4a] py-16 md:py-20">
        <div className="container-main text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            Ready to Start Your Sourcing Project?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Get started with a free consultation. No commitment required.
          </p>
          <Link to="/contact" className="btn-primary">
            Get a Free Sourcing Quote
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
